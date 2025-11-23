import { PDFDocument } from "@/@types/PDF";
import { client } from "../lib/client";
import { allCVData } from "../query/cv";
import { redis } from "@/lib/redis";

export async function getAllCVData(): Promise<PDFDocument> {
  const cacheKey = "cms:cv-data";

  // 1. Cek cache
  const cached = await redis.get(cacheKey);
  if (cached) {
    // Redis akan simpan sebagai JSON → convert kembali
    return cached as PDFDocument;
  }

  // 2. Fetch ke Sanity
  const data: PDFDocument = await client.fetch(allCVData);

  // 3. Simpan ke Redis (TTL: 6 jam)
  await redis.set(cacheKey, data, { ex: 60 * 60 * 6 });

  return data;
}
