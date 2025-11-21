import { ProjectCard } from "@/featured/Home/FeaturedProjects/ProjectCard";
import { useProjectsContext } from "../provider";
import { useState } from "react";
import { ProjectCard as ProjectCardType } from "@/@types/Projects";
import { ProjectDialog } from "./ProjectDialog";

export function ProjectItems() {
  const { projects } = useProjectsContext();
  const [data, setData] = useState<ProjectCardType | null>(null);

  return (
    <>
      <div
        className="grid 
      grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      justify-center gap-4
      max-w-6xl
      mx-auto"
      >
        {projects.map((pro) => (
          <ProjectCard onClick={() => setData(pro)} data={pro} key={pro.id} />
        ))}
      </div>

      <ProjectDialog data={data} setData={setData} />
    </>
  );
}
