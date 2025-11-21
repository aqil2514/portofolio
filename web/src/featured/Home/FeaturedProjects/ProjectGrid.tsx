import { ProjectSummary } from "@/@types/Projects";
import { ProjectCard } from "./ProjectCard";

interface ProjectGridProps {
  items: ProjectSummary[];
  animate?: boolean;
}

export function ProjectGrid({ items, animate = true }: ProjectGridProps) {
  return (
    <div
      className="
        grid 
        grid-cols-1
        sm:grid-cols-2 
        gap-6 sm:gap-8 lg:gap-10
        max-w-6xl
        mx-auto
      "
    >
      {items.map((item, i) => (
        <ProjectCard key={item.title} data={item} delay={4 + 0.3 * i} index={i} animate={animate} />
      ))}
    </div>
  );
}
