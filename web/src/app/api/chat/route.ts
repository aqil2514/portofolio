import { NextRequest, NextResponse } from "next/server";
import { OpenRouter } from "@openrouter/sdk";
import type { ChatMessages } from "@openrouter/sdk/models/chatmessages.js";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { buildSystemPrompt, buildProjectDetail } from "@/data/getSystemPrompt";
import { matchProjects } from "@/data/matchProjects";

export const runtime = "nodejs";

const MAX_HISTORY = 10;

const ALL_MODELS_EXHAUSTED = "ALL_MODELS_EXHAUSTED";

const PRIMARY_MODEL =
  process.env.OPENROUTER_MODEL ?? "google/gemma-4-31b-it:free";

const FALLBACK_MODELS = [
  "google/gemma-4-26b-a4b-it:free",
  "nvidia/nemotron-3-ultra-550b-a55b:free",
  "nvidia/nemotron-3-super-120b-a12b:free",
];

const client = new OpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

const SYSTEM_PROMPT = buildSystemPrompt();

function hasUpstashConfig() {
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim();
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  if (!url || !token) return false;
  if (!url.startsWith("https://")) return false;
  if (token.startsWith("UPSTASH_")) return false;
  return true;
}

const ratelimit = hasUpstashConfig()
  ? new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(15, "1 h"),
      prefix: "portfolio-chat",
    })
  : null;

if (!ratelimit) {
  console.warn("Upstash not configured — /api/chat is running without rate limiting.");
}

type ChatCompletion = { choices: Array<{ message: { content?: string | null } }> };

async function sendWithFallback(
  messages: ChatMessages[],
  systemPrompt: string,
): Promise<string> {
  const modelsToTry = [PRIMARY_MODEL, ...FALLBACK_MODELS];

  for (const model of modelsToTry) {
    try {
      const result = await client.chat.send({
        chatRequest: {
          model,
          messages: [{ role: "system", content: systemPrompt }, ...messages],
          maxTokens: 800,
          temperature: 0.2,
        },
      });
      const completion = result as ChatCompletion;
      const content = completion.choices[0]?.message?.content?.trim();

      if (!content) {
        console.warn(`Model ${model} returned an empty reply, trying next...`);
        continue;
      }

      return content;
    } catch (err: unknown) {
      const status = (err as { statusCode?: number }).statusCode;
      if (status === 429 || status === 404) {
        console.warn(`Model ${model} failed (${status}), trying next...`);
        continue;
      }
      throw err;
    }
  }

  throw new Error(ALL_MODELS_EXHAUSTED);
}

export async function POST(req: NextRequest) {
  try {
    if (ratelimit) {
      const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anonymous";
      try {
        const { success } = await ratelimit.limit(ip);
        if (!success) {
          return NextResponse.json(
            { error: "Too many messages. Please try again later." },
            { status: 429 },
          );
        }
      } catch (err) {
        console.error("Rate limit check failed, allowing request:", err);
      }
    }

    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    const history = messages.slice(-MAX_HISTORY);

    const lastUserMessage = [...history]
      .reverse()
      .find((m) => m?.role === "user")?.content;
    const detail =
      typeof lastUserMessage === "string"
        ? buildProjectDetail(matchProjects(lastUserMessage))
        : "";

    const reply = await sendWithFallback(history, SYSTEM_PROMPT + detail);
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error:", err);

    if (err instanceof Error && err.message === ALL_MODELS_EXHAUSTED) {
      return NextResponse.json(
        {
          error:
            "The assistant is busy right now. Please try again in a moment, or reach Aqil directly at muhamadaqil383@gmail.com.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
