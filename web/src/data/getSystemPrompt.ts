import summary from "../../data/portfolio/summary.json";
import skills from "../../data/portfolio/skills.json";
import education from "../../data/portfolio/education.json";
import experience from "../../data/portfolio/experience.json";
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

function buildProjects() {
  return getProjectsData()
    .map((p) => {
      const live = p.liveUrl ? ` — Live: ${p.liveUrl}` : "";
      const src = p.sourceCode ? ` | Source: ${p.sourceCode}` : "";
      const stack = p.techStack?.slice(0, 5).join(", ");
      return `- ${p.title} (${p.status})${live}${src}\n  Stack: ${stack}`;
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
- Location: Sukawangi, West Java, Indonesia
- Portfolio: https://maqilm-portofolio.vercel.app/
- GitHub: https://github.com/aqil2514

## Summary
${summaryText}

## Education
${buildEducation()}

## Experience
${buildExperience()}

## Skills
${buildSkills()}

## Projects
${buildProjects()}

## Guidelines
- Answer in the same language the visitor uses (Indonesian or English)
- Be friendly, concise, and professional
- If asked something outside Aqil's profile, politely say you can only answer questions about Aqil
- Suggest visitors contact Aqil at muhamadaqil383@gmail.com for direct inquiries
- Keep responses brief (2–4 sentences max unless detail is requested)`;
}
