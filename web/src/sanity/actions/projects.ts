import { ProjectCard } from "@/@types/Projects";
import { client } from "../lib/client";
import { allProjectData } from "../query/projects";

export async function getAllProjectsData(): Promise<ProjectCard[]> {
  const data = await client.fetch(allProjectData);

  return data;
}
