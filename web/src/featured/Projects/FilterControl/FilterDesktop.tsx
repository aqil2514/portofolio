"use client";

import { UiButton } from "@/components/atoms/UiButton";
import { UiInput } from "@/components/atoms/UiInput";
import { UiSelect } from "@/components/atoms/UiSelect";
import { useProjectFilters } from "@/hooks/use-project-filters";

export function DesktopFilter() {
  const {
    status,
    category,
    tech,
    search,

    setStatus,
    setCategory,
    setTech,
    setSearch,

    applyFilters,
    resetFilters,

    categoryOptions,
    statusOptions,
    techOptions,
  } = useProjectFilters();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        applyFilters();
      }}
      className="w-full max-w-6xl mx-auto flex flex-col gap-4 md:flex-row md:items-end md:justify-center"
    >
      <UiSelect
        label="Status"
        value={status}
        onValueChange={setStatus}
        options={statusOptions}
        className="w-full md:w-[180px]"
      />

      <UiSelect
        label="Category"
        value={category}
        onValueChange={setCategory}
        options={categoryOptions}
        className="w-full md:w-[180px]"
      />

      <UiSelect
        label="Tech Stack"
        value={tech}
        onValueChange={setTech}
        options={techOptions}
        className="w-full md:w-[180px]"
      />

      <UiInput
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search projects..."
        className="flex-1"
      />

      <div className="w-full md:w-auto flex justify-end gap-2">
        <UiButton type="submit" label="Apply" />
        <UiButton
          type="button"
          label="Reset"
          onClick={resetFilters}
          className="bg-white/0 hover:bg-white/10 border-white/10 text-white/70"
        />
      </div>
    </form>
  );
}
