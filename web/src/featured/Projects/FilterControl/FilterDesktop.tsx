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
        className="
          w-full 
          max-w-6xl 
          mx-auto 
          flex 
          flex-col 
          gap-4 
          md:flex-row 
          md:items-end 
          md:justify-center
        "
      >
        <div className="w-full md:w-[180px]">
          <UiSelect
            label="Status"
            defaultValue={status}
            onValueChange={setStatus}
            options={statusOptions}
          />
        </div>
  
        <div className="w-full md:w-[180px]">
          <UiSelect
            label="Category"
            defaultValue={category}
            onValueChange={setCategory}
            options={categoryOptions}
          />
        </div>
  
        <div className="w-full md:w-[180px]">
          <UiSelect
            label="Tech Stack"
            defaultValue={tech}
            onValueChange={setTech}
            options={techOptions}
          />
        </div>
  
        <div className="flex-1">
          <UiInput
            label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
          />
        </div>
  
        <div className="w-full md:w-auto flex justify-end md:justify-center gap-2">
          <UiButton type="submit" label="Apply" className="md:mb-0.5" />
  
          <UiButton
            type="button"
            label="Reset"
            onClick={resetFilters}
            className="
              md:mb-0.5
              bg-white/0
              hover:bg-white/10 
              border-white/10
              text-white/70
            "
          />
        </div>
      </form>
    );
}
