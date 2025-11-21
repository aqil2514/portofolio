"use client";

import { BasicSelect } from "@/@types/General";
import { useProjectsContext } from "@/featured/Projects/provider";
import { useRouter } from "@/i18n/navigations";
import { generateSlug } from "@/utils/generateSlug";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export function useProjectFilters() {
  const router = useRouter();
  const params = useSearchParams();

  const initialStatus = params.get("status") ?? "all";
  const initialCategory = params.get("category") ?? "all";
  const initialTech = params.get("tech") ?? "all";
  const initialSearch = params.get("search") ?? "";

  const [status, setStatus] = useState(initialStatus);
  const [category, setCategory] = useState(initialCategory);
  const [tech, setTech] = useState(initialTech);
  const [search, setSearch] = useState(initialSearch);

  const { projectCategories, projectTechStacks } = useProjectsContext();

  const applyFilters = () => {
    const query = new URLSearchParams();

    if (status !== "all") query.set("status", status);
    if (category !== "all") query.set("category", category);
    if (tech !== "all") query.set("tech", tech);
    if (search.trim() !== "") query.set("search", search);

    router.replace(`/projects?${query.toString()}`);
  };

  const resetFilters = () => {
    setStatus("all");
    setCategory("all");
    setTech("all");
    setSearch("");
    router.replace("/projects");
  };

    const categoryOptions: BasicSelect[] = [
    { label: "All", value: "all" },
    ...projectCategories.map((p) => ({ label: p, value: generateSlug(p) })),
  ];

  const techOptions: BasicSelect[] = [
    { label: "All", value: "all" },
    ...projectTechStacks.map((p) => ({ label: p, value: generateSlug(p) })),
  ];

  const statusOptions = [
    { value: "all", label: "All" },
    { value: "live", label: "Live" },
    { value: "archived", label: "Archived" },
    { value: "on-progress", label: "On Progress" },
  ];

  return {
    // State
    status,
    category,
    tech,
    search,
    
    // Set State
    setStatus,
    setCategory,
    setTech,
    setSearch,

    // Filter Handler
    applyFilters,
    resetFilters,

    // Data
    categoryOptions,
    techOptions,
    statusOptions
  };
}
