import { redis } from "@/lib/redis";
import { client } from "../lib/client";
import { allTechName } from "../query/tech";

export async function getAllProjectTechStack(): Promise<string[]> {
  const cacheKey = "cms:projects:techstack";

  const cached = await redis.get(cacheKey);
  if (cached) return cached as string[];

  const res:string[] = await client.fetch(allTechName);

  await redis.set(cacheKey, res, { ex: 60 * 60 * 6 });

  return res.sort();
}
