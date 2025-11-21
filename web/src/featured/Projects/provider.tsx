import { ProjectCard, ProjectCategory } from "@/@types/Projects";
import React, { createContext, useContext } from "react";

interface ProjectsContextType {
  projects: ProjectCard[];
  projectCategories:ProjectCategory[];
}

const ProjectsContext = createContext<ProjectsContextType>(
  {} as ProjectsContextType
);

interface ProjectsProviderProps {
  children: React.ReactNode;
  projects: ProjectCard[];
  projectCategories:ProjectCategory[];
}

export function ProjectsProvider({ children, projectCategories, projects }: ProjectsProviderProps) {
  const value: ProjectsContextType = {
    projectCategories,
    projects
  };
  return (
    <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>
  );
}

export function useProjectsContext() {
  const ctx = useContext(ProjectsContext);
  if (!ctx)
    throw new Error("useProjectsContext must be used inside ProjectsProvider");
  return ctx;
}
