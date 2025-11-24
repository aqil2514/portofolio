"use client";

import { ProjectCard, ProjectCategory } from "@/@types/Projects";
import { Locale } from "@/@types/Sanity";
import { getInternationalizationValue } from "@/utils/getInternationalizationValue";
import React, { createContext, useContext, useMemo, useState } from "react";

interface ProjectsContextType {
  projectCategories: ProjectCategory[];
  projectTechStacks: string[];

  filteredProjects: ProjectCard[];

  // filter states
  selectedStatus: string;
  selectedCategory: string;
  selectedTech: string;
  searchQuery: string;

  // setters
  setSelectedStatus: (v: string) => void;
  setSelectedCategory: (v: string) => void;
  setSelectedTech: (v: string) => void;
  setSearchQuery: (v: string) => void;

  clearFilters: () => void;
}

const ProjectsContext = createContext<ProjectsContextType>(
  {} as ProjectsContextType
);

export function ProjectsProvider({
  children,
  projects,
  projectCategories,
  projectTechStacks,
  initialStatus,
  initialCategory,
  initialTech,
  initialSearch,
  locale,
}: {
  children: React.ReactNode;
  projects: ProjectCard[];
  projectCategories: ProjectCategory[];
  projectTechStacks: string[];
  initialStatus: string;
  initialCategory: string;
  initialTech: string;
  initialSearch: string;
  locale: Locale;
}) {
  // --- STATE (controlled via URL)
  const [selectedStatus, setSelectedStatus] = useState(initialStatus);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedTech, setSelectedTech] = useState(initialTech);
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  // --- CLEAR FILTERS
  const clearFilters = () => {
    setSelectedStatus("all");
    setSelectedCategory("all");
    setSelectedTech("all");
    setSearchQuery("");
  };

  // --- FILTER LOGIC
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // STATUS filter
      if (selectedStatus !== "all") {
        if (p.status !== selectedStatus) return false;
      }

      // CATEGORY filter (ANY)
      if (selectedCategory !== "all") {
        const slug = selectedCategory;
        const hasCategory = p.categories.some((c) => slugify(c) === slug);
        if (!hasCategory) return false;
      }

      // TECH STACK filter (ANY)
      if (selectedTech !== "all") {
        const slug = selectedTech;
        const hasTech = p.techStack.some((t) => slugify(t) === slug);
        if (!hasTech) return false;
      }

      // SEARCH filter (locale aware)
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const title = p.title.toLowerCase();

        const desc = getInternationalizationValue(
          p.shortDesc,
          locale
        ).toLowerCase();

        if (!title.includes(query) && !desc.includes(query)) return false;
      }

      return true;
    });
  }, [
    projects,
    selectedStatus,
    selectedCategory,
    selectedTech,
    searchQuery,
    locale,
  ]);

  return (
    <ProjectsContext.Provider
      value={{
        projectCategories,
        projectTechStacks,
        filteredProjects,

        selectedStatus,
        selectedCategory,
        selectedTech,
        searchQuery,

        setSelectedStatus,
        setSelectedCategory,
        setSelectedTech,
        setSearchQuery,

        clearFilters,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjectsContext() {
  return useContext(ProjectsContext);
}

// Local slugify helper
function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-");
}
