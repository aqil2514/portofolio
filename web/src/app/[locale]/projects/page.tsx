import ProjectsTemplate from "@/components/templates/ProjectsTemplate";
import { getAllProjectsData } from "@/sanity/actions/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const data = await getAllProjectsData()
  console.log(data)
  return <ProjectsTemplate />;
}
