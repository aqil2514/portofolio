import ProjectsTemplate from "@/components/templates/ProjectsTemplate";
import { getAllProjectCategory, getAllProjectsData, getAllProjectTechStack } from "@/sanity/actions/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const [projects, projectCategories, projectTechStacks] = await Promise.all([
    getAllProjectsData(),
    getAllProjectCategory(),
    getAllProjectTechStack()
  ]);

  return <ProjectsTemplate projectCategories={projectCategories} projects={projects} projectTechStacks={projectTechStacks} />;
}
