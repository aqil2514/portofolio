import ProjectsTemplate from "@/components/templates/ProjectsTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  return <ProjectsTemplate />;
}
