import { ProjectCard, ProjectCategory } from "@/@types/Projects";
import { client } from "../lib/client";
import { allProjectData, projectCategories, projectTechStack } from "../query/projects";

export async function getAllProjectsData(): Promise<ProjectCard[]> {
  const data = await client.fetch(allProjectData);

  return data;
}

export async function getAllProjectCategory(): Promise<ProjectCategory[]> {
  const res: { categories: string[] }[] = await client.fetch(projectCategories);

  const data = res.flatMap((data) => data.categories);
  const setData = new Set(data.map(d => d.trim()));

  return Array.from(setData).sort() as ProjectCategory[];
}

export async function getAllProjectTechStack(): Promise<string[]> {
  const res: { techStack: string[] }[] = await client.fetch(projectTechStack);

  const data = res.flatMap((data) => data.techStack);
  const setData = new Set(data.map(d => d.trim()));
  
  return Array.from(setData).sort();
}
