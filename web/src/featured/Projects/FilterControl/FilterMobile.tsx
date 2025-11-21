"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { UiButton } from "@/components/atoms/UiButton";
import { UiInput } from "@/components/atoms/UiInput";
import { UiSelect } from "@/components/atoms/UiSelect";
import { useProjectFilters } from "@/hooks/use-project-filters";

export function MobileFilter() {
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
    <div className="w-full px-4 mt-4">
      <Accordion
        type="single"
        collapsible
        className="w-full border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm"
      >
        <AccordionItem value="filter" className="border-none">
          <AccordionTrigger
            className="
              px-4 py-3 
              text-white text-lg font-semibold 
              hover:no-underline
              flex justify-between items-center
            "
          >
            Filters
          </AccordionTrigger>

          <AccordionContent className="px-4 pb-4 pt-1">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                applyFilters();
              }}
              className="flex flex-col gap-4 mt-2"
            >
              <UiSelect
                label="Status"
                defaultValue={status}
                onValueChange={setStatus}
                options={statusOptions}
              />

              <UiSelect
                label="Category"
                defaultValue={category}
                onValueChange={setCategory}
                options={categoryOptions}
              />

              <UiSelect
                label="Tech Stack"
                defaultValue={tech}
                onValueChange={setTech}
                options={techOptions}
              />

              <UiInput
                label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects..."
              />

              <div className="flex gap-2 w-full pt-2">
                <UiButton type="submit" label="Apply" className="flex-1" />

                <UiButton
                  type="button"
                  label="Reset"
                  onClick={resetFilters}
                  className="
                    flex-1 
                    bg-white/0 
                    hover:bg-white/10 
                    border-white/10 
                    text-white/70
                  "
                />
              </div>
            </form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
