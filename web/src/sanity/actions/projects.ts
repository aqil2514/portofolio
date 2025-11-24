import { ProjectCard, ProjectCategory } from "@/@types/Projects";
import { client } from "../lib/client";
import {
  allProjectData,
  projectCategories,
} from "../query/projects";
import { redis } from "@/lib/redis";

export async function getAllProjectsData(): Promise<ProjectCard[]> {
  const cacheKey = "cms:projects:all";

  // Cek cache
  const cached = await redis.get(cacheKey);
  if (cached) return cached as ProjectCard[];

  // Fetch dari Sanity
  const data: ProjectCard[] = await client.fetch(allProjectData);

  // Cache 6 jam
  await redis.set(cacheKey, data, { ex: 60 * 60 * 6 });

  return data;
}

export async function getAllProjectCategory(): Promise<ProjectCategory[]> {
  const cacheKey = "cms:projects:categories";

  const cached = await redis.get(cacheKey);
  if (cached) return cached as ProjectCategory[];

  const res: { categories: string[] }[] = await client.fetch(projectCategories);

  const data = res.flatMap((d) => d.categories).map((c) => c.trim());

  const uniqueSorted = Array.from(new Set(data)).sort() as ProjectCategory[];

  await redis.set(cacheKey, uniqueSorted, { ex: 60 * 60 * 6 });

  return uniqueSorted;
}
