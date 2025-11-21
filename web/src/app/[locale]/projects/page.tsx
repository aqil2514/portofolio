import ProjectsTemplate from "@/components/templates/ProjectsTemplate";
import { getAllProjectCategory, getAllProjectsData } from "@/sanity/actions/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const [projects, projectCategories] = await Promise.all([
    getAllProjectsData(),
    getAllProjectCategory()
  ]);

  return <ProjectsTemplate projectCategories={projectCategories} projects={projects} />;
}
