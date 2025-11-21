import { PageAboutTypes } from "@/@types/Sanity";
import { client } from "../lib/client";
import { aboutPageGroq } from "../query/aboutPage";
import { redis } from "@/lib/redis";

// TODO : HAPUS SAAT PRODUCTION
export async function getAbutPageCms() {
  const data = await client.fetch(aboutPageGroq);

  return data as PageAboutTypes;
}

// const CACHE_KEY = "cms:about-page";
// const CACHE_TTL = 60 * 60 * 6; // 6 hours

// export async function getAbutPageCms(): Promise<PageAboutTypes> {
//   try {
//     // 1. Try read from cache
//     const cache = await redis.get<PageAboutTypes>(CACHE_KEY);
//     if (cache) return cache;
//   } catch {
//     // Jika Redis error → tetap fetch Sanity
//     console.warn("Redis unavailable — fetching from Sanity");
//   }

//   // 2. Fetch from Sanity
//   const data = await client.fetch<PageAboutTypes>(aboutPageGroq);

//   // 3. Save to cache
//   try {
//     await redis.set(CACHE_KEY, data, { ex: CACHE_TTL });
//   } catch {
//     console.warn("Failed to write cache to Redis");
//   }

//   return data;
// }
