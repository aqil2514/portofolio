import { PDFDocument } from "@/@types/PDF";
import { client } from "../lib/client";
import { allCVData } from "../query/cv";

export async function getAllCVData(): Promise<PDFDocument> {
  const data = await client.fetch(allCVData);

  return data;
}
