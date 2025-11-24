import { defineQuery } from "next-sanity";

export const allCVData = defineQuery(`*[_type=="portofolio"][0]{
  summary{
    title,
    item
  },
  experience{
    title,
    "items":item[]{
      jobTitle,
      company,
      location,
      startDate,
      endDate,
      isCurrent,
      "bullets":bullets[]{
        text
      }
    }
  },
  education,
  skills,
  projects
}`);
