import { createMcpHandler } from "mcp-handler";
import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { z } from "zod";
import { getProjectsData, getProjectCategories } from "@/data/getProjects";
import { getPortfolio } from "@/data/getPortfolio";
import { getAboutPage } from "@/data/getAboutPage";
import { getTechStack } from "@/data/getTechStack";
import { InternationalizedArray } from "@/@types/types";

export const runtime = "nodejs";

const ratelimit =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(30, "1 m"),
        prefix: "ratelimit:mcp",
      })
    : null;

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function en(arr: InternationalizedArray[] = []): string {
  return arr.find((x) => x._key === "en")?.value ?? "";
}

function json(data: unknown) {
  return {
    content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }],
  };
}

const handler = createMcpHandler((server) => {
  server.registerTool(
    "list_projects",
    {
      title: "List Projects",
      description:
        "List all projects in Muhamad Aqil Maulana's portfolio, with title, status, short description, tech stack, and categories.",
      inputSchema: z.object({
        category: z
          .string()
          .optional()
          .describe(
            "Optional: filter by category (e.g. Frontend, Backend, AI Integration)",
          ),
      }),
    },
    async ({ category }) => {
      const projects = getProjectsData()
        .filter((p) => !category || p.categories?.includes(category as never))
        .map((p) => ({
          title: p.title,
          status: p.status,
          shortDesc: en(p.shortDesc as unknown as InternationalizedArray[]),
          techStack: p.techStack,
          categories: p.categories,
          liveUrl: p.liveUrl || null,
          sourceCode: p.sourceCode || null,
        }));

      return json(projects);
    },
  );

  server.registerTool(
    "get_project",
    {
      title: "Get Project Detail",
      description:
        "Get full detail of one project by title (case-insensitive, partial match), including full description and feature list.",
      inputSchema: z.object({
        title: z.string().describe("Project title or partial title, e.g. 'Retailku'"),
      }),
    },
    async ({ title }) => {
      const project = getProjectsData().find((p) =>
        p.title.toLowerCase().includes(title.toLowerCase()),
      );

      if (!project) {
        return json({ error: `No project found matching "${title}"` });
      }

      return json({
        title: project.title,
        status: project.status,
        shortDesc: en(project.shortDesc as unknown as InternationalizedArray[]),
        fullDesc: en(project.fullDesc as unknown as InternationalizedArray[]),
        techStack: project.techStack,
        categories: project.categories,
        features: project.features?.map((f) => f.en),
        liveUrl: project.liveUrl || null,
        sourceCode: project.sourceCode || null,
      });
    },
  );

  server.registerTool(
    "list_project_categories",
    {
      title: "List Project Categories",
      description: "List all distinct project categories used across the portfolio.",
      inputSchema: z.object({}),
    },
    async () => json(getProjectCategories()),
  );

  server.registerTool(
    "get_profile",
    {
      title: "Get Profile",
      description:
        "Get Muhamad Aqil Maulana's professional profile: summary, education, work experience, and skills.",
      inputSchema: z.object({}),
    },
    async () => {
      const { summary, education, experience, skills } = getPortfolio();

      return json({
        summary: en(summary.item as unknown as InternationalizedArray[]),
        education: (
          education.items as unknown as Array<{
            university: string;
            degree: InternationalizedArray[];
            major: InternationalizedArray[];
            gpa: string | number;
            startDate: string;
            endDate: string;
            location: string;
          }>
        ).map((e) => ({
          university: e.university,
          degree: en(e.degree),
          major: en(e.major),
          gpa: e.gpa,
          startDate: e.startDate,
          endDate: e.endDate,
          location: e.location,
        })),
        experience: (
          experience.items as unknown as Array<{
            company: string;
            jobTitle: InternationalizedArray[];
            location: InternationalizedArray[];
            startDate: string;
            endDate?: string;
            isCurrent?: boolean;
            bullets: Array<{ text: InternationalizedArray[] }>;
          }>
        ).map((e) => ({
          company: e.company,
          jobTitle: en(e.jobTitle),
          location: en(e.location),
          startDate: e.startDate,
          endDate: e.isCurrent ? "Present" : e.endDate,
          bullets: e.bullets.map((b) => en(b.text)),
        })),
        skills: skills.skills.map((s) => ({ label: s.label, value: s.value })),
      });
    },
  );

  server.registerTool(
    "get_about",
    {
      title: "Get About Page",
      description:
        "Get the 'About Me' content: hero intro, core skills, product philosophy, and roadmap/certifications.",
      inputSchema: z.object({}),
    },
    async () => {
      const about = getAboutPage();
      return json(about);
    },
  );

  server.registerTool(
    "list_tech_stack",
    {
      title: "List Tech Stack",
      description: "List every technology in Muhamad Aqil Maulana's overall tech stack.",
      inputSchema: z.object({}),
    },
    async () => json(getTechStack()),
  );
}, {
  serverInfo: {
    name: "aqil-portfolio",
    version: "1.0.0",
  },
});

async function withRateLimit(
  req: NextRequest,
  next: (req: NextRequest) => Promise<Response>,
): Promise<Response> {
  if (!ratelimit) return next(req);

  const ip = getClientIp(req);
  const { success, limit, remaining, reset } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json(
      { error: "Too many requests" },
      {
        status: 429,
        headers: {
          "X-RateLimit-Limit": String(limit),
          "X-RateLimit-Remaining": String(remaining),
          "X-RateLimit-Reset": String(reset),
        },
      },
    );
  }

  return next(req);
}

export async function GET(req: NextRequest) {
  return withRateLimit(req, handler);
}

export async function POST(req: NextRequest) {
  return withRateLimit(req, handler);
}
