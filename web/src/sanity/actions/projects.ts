import { ProjectCard, ProjectCategory } from "@/@types/Projects";
import { client } from "../lib/client";
import { allProjectData, projectCategories } from "../query/projects";

export async function getAllProjectsData(): Promise<ProjectCard[]> {
  const data = await client.fetch(allProjectData);

  return data;
}

export async function getAllProjectCategory(): Promise<ProjectCategory[]> {
  const res: { categories: string[] }[] = await client.fetch(projectCategories);

  const data = res.flatMap((data) => data.categories);
  const setData = new Set(data);

  return Array.from(setData) as ProjectCategory[];
}
