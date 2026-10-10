import { getProjectsData } from "./getProjects";

/**
 * Words that appear in project titles but carry no signal on their own — a
 * visitor asking "do you have an app?" is not asking about "Financial App".
 */
const STOPWORDS = new Set([
  "app",
  "platform",
  "system",
  "automation",
  "presale",
  "travel",
  "developer",
  "portfolio",
  "internal",
  "operating",
  "mini",
  "8",
]);

/** Tech-stack entries too generic to pin a question to one project. */
const GENERIC_STACK = new Set([
  "typescript",
  "javascript",
  "react",
  "next.js",
  "nextjs",
  "tailwind css",
  "tailwindcss",
  "node.js",
  "nodejs",
  "html",
  "css",
  "git",
  "zod",
  "shadcn",
]);

function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9\s.+#-]/g, " ");
}

/** Match whole words only, so "app" never matches inside "apply". */
function containsTerm(haystack: string, term: string) {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?:^|\\s)${escaped}(?:$|\\s)`).test(haystack);
}

/**
 * Figure out which projects a visitor's message is about, so only those
 * projects' features get loaded into the prompt.
 *
 * Deliberately keyword-based rather than embedding-based: with ~11 projects the
 * accuracy is comparable, and it stays deterministic and free — which matters
 * because the chat runs on free-tier models that cannot be relied on for tool
 * calling.
 */
export function matchProjects(message: string, limit = 2): string[] {
  const text = ` ${normalize(message)} `;
  const scored: Array<{ title: string; score: number }> = [];

  for (const project of getProjectsData()) {
    const title = normalize(project.title);
    let score = 0;

    // Full title match is the strongest signal ("tell me about Financial App").
    if (containsTerm(text, title)) {
      score += 10;
    } else {
      // Otherwise count distinctive words from the title ("retailku", "flowtooly").
      const words = title.split(/\s+/).filter((w) => w.length > 2 && !STOPWORDS.has(w));
      for (const word of words) {
        if (containsTerm(text, word)) score += 4;
      }
    }

    // A specific technology counts as a weaker hint toward the projects using it.
    for (const tech of project.techStack ?? []) {
      const normalized = normalize(tech).trim();
      if (normalized.length < 3 || GENERIC_STACK.has(normalized)) continue;
      if (containsTerm(text, normalized)) score += 1;
    }

    if (score > 0) scored.push({ title: project.title, score });
  }

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.title);
}
