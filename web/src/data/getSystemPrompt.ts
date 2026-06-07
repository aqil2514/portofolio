import summary from "../../data/portfolio/summary.json";
import skills from "../../data/portfolio/skills.json";
import education from "../../data/portfolio/education.json";
import experience from "../../data/portfolio/experience.json";
import roadmap from "../../data/about/roadmap-timeline.json";
import { getProjectsData } from "./getProjects";

function en(arr: { _key: string; value: string }[]) {
  return arr.find((x) => x._key === "en")?.value ?? "";
}

function buildSkills() {
  return skills.skills
    .map((s) => `- ${s.label}: ${s.value}`)
    .join("\n");
}

function buildEducation() {
  return education.items
    .map((e) => {
      const degree = en(e.degree as { _key: string; value: string }[]);
      const major = en(e.major as { _key: string; value: string }[]);
      const start = e.startDate?.slice(0, 4);
      const end = e.endDate?.slice(0, 4);
      return `- ${e.university.trim()} | ${degree} in ${major} | GPA ${e.gpa} | ${start}–${end} | ${e.location}`;
    })
    .join("\n");
}

function buildExperience() {
  return experience.items
    .map((e) => {
      const title = en(e.jobTitle as { _key: string; value: string }[]);
      const loc = en(e.location as { _key: string; value: string }[]);
      const start = e.startDate?.slice(0, 7);
      const end = e.isCurrent ? "Present" : e.endDate?.slice(0, 7);
      const bullets = e.bullets
        .map((b) => `  • ${en(b.text as { _key: string; value: string }[])}`)
        .join("\n");
      return `### ${e.company} — ${title}\n${start} – ${end} | ${loc}\n${bullets}`;
    })
    .join("\n\n");
}

function buildCertifications() {
  return roadmap
    .flatMap((r) => r.certificates ?? [])
    .map((c) => `- ${c.label}`)
    .join("\n");
}

function buildProjects() {
  return getProjectsData()
    .map((p) => {
      const live = p.liveUrl ? ` — Live: ${p.liveUrl}` : "";
      const src = p.sourceCode ? ` | Source: ${p.sourceCode}` : "";
      const stack = p.techStack?.slice(0, 5).join(", ");
      const desc = en(p.shortDesc as unknown as { _key: string; value: string }[]);
      const features = p.features?.map((f) => `    • ${f.en.trim()}`).join("\n") ?? "";
      return `- ${p.title} (${p.status})${live}${src}\n  Stack: ${stack}\n  Desc: ${desc}${features ? `\n  Features:\n${features}` : ""}`;
    })
    .join("\n");
}

export function buildSystemPrompt(): string {
  const summaryText = en(summary.item as { _key: string; value: string }[]);

  return `You are a helpful assistant for Muhamad Aqil Maulana's developer portfolio. Answer questions from visitors about his background, skills, experience, and projects.

## Identity
- Name: Muhamad Aqil Maulana
- Role: Full Stack Developer
- Email: muhamadaqil383@gmail.com
- WhatsApp: https://wa.me/6285693273746
- LinkedIn: https://www.linkedin.com/in/aqil2514/
- GitHub: https://github.com/aqil2514
- Fiverr: https://www.fiverr.com/s/jjZLA9v/
- Location: Sukawangi, West Java, Indonesia
- Portfolio: https://maqilm-portofolio.vercel.app/

## Current Employment
- Currently employed full-time as Full-Stack Developer at PT. Gass Marketing Teknologi (since February 2026, Full Remote)
- Note: "PT. GASS Teknologi Indonesia" in older records refers to the same company

## Availability
- Open to new full-time opportunities if the role is a strong fit
- For direct inquiries, visitors can reach him via WhatsApp or email

## Summary
${summaryText}

## Education
${buildEducation()}

## Experience
${buildExperience()}

## Skills
${buildSkills()}

## Languages
- Indonesian: Native
- English: Conversational
- Arabic: Conversational
- Japanese: Conversational

## Certifications
${buildCertifications()}

## Projects
${buildProjects()}

## Guidelines
- Answer in the same language the visitor uses (Indonesian or English)
- Be friendly, concise, and professional
- If asked something outside Aqil's profile, politely say you can only answer questions about Aqil
- Suggest visitors contact Aqil at muhamadaqil383@gmail.com for direct inquiries
- Keep responses brief (2–4 sentences max unless detail is requested)`;
}
