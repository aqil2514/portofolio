import { MainContainer } from "../layouts/containers/MainContainer";
import { ProjectCard, ProjectCategory } from "@/@types/Projects";
import { ProjectsProvider } from "@/featured/Projects/provider";
import { Title } from "@/featured/Projects/Title";
import { FilterControl } from "@/featured/Projects/FilterControl";
import { ProjectItems } from "@/featured/Projects/ProjectItems";

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

  return (
    <ProjectsProvider
      projectCategories={projectCategories}
      projects={projects}
      projectTechStacks={projectTechStacks}
    >
      <MainContainer className="space-y-6 min-h-screen">
        <Title />
        <FilterControl />
        <ProjectItems />
      </MainContainer>
    </ProjectsProvider>
  );
}
