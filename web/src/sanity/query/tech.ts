import { defineQuery } from "next-sanity";

export const allTechName = defineQuery(`*[_type=="tech"].name`);
