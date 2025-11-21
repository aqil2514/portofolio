"use client";

import { usePageTransition } from "@/providers/PageTransitionProvider";
import { MainContainer } from "../layouts/containers/MainContainer";
import { PageLoader } from "../layouts/loader/PageLoader";
import { ProjectCard, ProjectCategory } from "@/@types/Projects";
import { ProjectsProvider } from "@/featured/Projects/provider";

interface Props {
  projects: ProjectCard[];
  projectCategories: ProjectCategory[];
}

export default function ProjectsTemplate({
  projectCategories,
  projects,
}: Props) {
  const { isReady } = usePageTransition();

  if (!isReady) return <PageLoader />;

  return (
    <ProjectsProvider projectCategories={projectCategories} projects={projects}>
      <MainContainer>Soon</MainContainer>;
    </ProjectsProvider>
  );
}
