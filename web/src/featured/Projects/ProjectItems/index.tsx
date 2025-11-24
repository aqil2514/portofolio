"use client";

import { ProjectCard } from "@/featured/Home/FeaturedProjects/ProjectCard";
import { useState } from "react";
import { ProjectCard as ProjectCardType } from "@/@types/Projects";
import { ProjectDialog } from "./ProjectDialog";
import { useProjectsContext } from "../provider";

export function ProjectItems() {
  const { filteredProjects } = useProjectsContext();
  const [data, setData] = useState<ProjectCardType | null>(null);

  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 max-w-6xl mx-auto"
      >
        {filteredProjects.map((pro, i) => (
          <ProjectCard
            index={i}
            onClick={() => setData(pro)}
            data={pro}
            key={pro.id}
          />
        ))}

        {filteredProjects.length === 0 && (
          <div className="col-span-full text-center text-white/70 py-20">
            No projects found.
          </div>
        )}
      </div>

      <ProjectDialog data={data} setData={setData} />
    </>
  );
}
