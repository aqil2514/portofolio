"use client";
import { MainContainer } from "../layouts/containers/MainContainer";
import { ProjectCard, ProjectCategory } from "@/@types/Projects";
import { ProjectsProvider } from "@/featured/Projects/provider";
import { Title } from "@/featured/Projects/Title";
import { FilterControl } from "@/featured/Projects/FilterControl";
import { ProjectItems } from "@/featured/Projects/ProjectItems";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";

interface Props {
  projects: ProjectCard[];
  projectCategories: ProjectCategory[];
  projectTechStacks: string[];
}

export default function ProjectsTemplate({
  projectCategories,
  projects,
  projectTechStacks,
}: Props) {
  const params = useSearchParams();
  const locale = useLocale();

  return (
    <ProjectsProvider
      projectCategories={projectCategories}
      projects={projects}
      projectTechStacks={projectTechStacks}
      initialStatus={params.get("status") ?? "all"}
      initialCategory={params.get("category") ?? "all"}
      initialTech={params.get("tech") ?? "all"}
      initialSearch={params.get("search") ?? ""}
      locale={locale}
    >
      <MainContainer className="space-y-6 min-h-screen">
        <Title />
        <FilterControl />
        <ProjectItems />
      </MainContainer>
    </ProjectsProvider>
  );
}
