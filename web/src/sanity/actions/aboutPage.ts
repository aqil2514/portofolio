import { PageAboutTypes } from "@/@types/Sanity";
import { client } from "../lib/client";
import { aboutPageGroq } from "../query/aboutPage";

export async function getAbutPageCms() {
  const data = await client.fetch(aboutPageGroq);

  return data as PageAboutTypes;
}