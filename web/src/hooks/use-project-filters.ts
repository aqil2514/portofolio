"use client";

import { useProjectsContext } from "@/featured/Projects/provider";
import { useRouter, usePathname } from "@/i18n/navigations";

export function useProjectFilters() {
  const router = useRouter();
  const pathname = usePathname(); // gives /id/projects or /en/projects

  const {
    selectedStatus,
    selectedCategory,
    selectedTech,
    searchQuery,

    setSelectedStatus,
    setSelectedCategory,
    setSelectedTech,
    setSearchQuery,

    clearFilters,

    projectCategories,
    projectTechStacks,
  } = useProjectsContext();

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (selectedStatus !== "all") params.set("status", selectedStatus);
    if (selectedCategory !== "all") params.set("category", selectedCategory);
    if (selectedTech !== "all") params.set("tech", selectedTech);
    if (searchQuery.trim() !== "") params.set("search", searchQuery.trim());

    router.replace(
      params.toString() === "" ? pathname : `${pathname}?${params.toString()}`
    );
  };

  const resetFilters = () => {
    clearFilters();
    router.replace(pathname);
  };

  const categoryOptions = [
    { label: "All", value: "all" },
    ...projectCategories
      .slice()
      .sort((a, b) => a.localeCompare(b))
      .map((c) => ({
        label: c,
        value: slugify(c),
      })),
  ];

  const techOptions = [
    { label: "All", value: "all" },
    ...projectTechStacks
      .slice()
      .sort((a, b) => a.localeCompare(b))
      .map((t) => ({
        label: t,
        value: slugify(t),
      })),
  ];

  const statusOptions = [
    { label: "All", value: "all" },
    { label: "Live", value: "live" },
    { label: "Archived", value: "archived" },
    { label: "On Progress", value: "on-progress" },
  ];

  return {
    status: selectedStatus,
    category: selectedCategory,
    tech: selectedTech,
    search: searchQuery,

    setStatus: setSelectedStatus,
    setCategory: setSelectedCategory,
    setTech: setSelectedTech,
    setSearch: setSearchQuery,

    applyFilters,
    resetFilters,

    categoryOptions,
    techOptions,
    statusOptions,
  };
}

function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-");
}
