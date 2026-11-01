import { ProjectGrid } from "./ProjectGrid";
import { ProjectSummary } from "@/@types/Projects";
import { FeaturedProjectsHeader } from "./FeaturedProjectsHeader";
import { FeaturedProjectsFooter } from "./FeaturedProjectsFooter";

const featuredItems: ProjectSummary[] = [
  {
    title: "Ajakkita",
    image: {
      imageAlt: "Ajakkita Image",
      label: "Ajakkita",
      imageSrc: "/images/projects/ajakkita.png",
    },
    liveUrl: "https://ajakkita.id",
    techStack: ["Next.js", "Prisma", "PostgreSQL"],
  },
  {
    title: "Retailku",
    image: {
      imageAlt: "Retailku",
      label: "Retailku",
      imageSrc: "/images/projects/retailku.png",
    },
    liveUrl: "https://www.retailku.com/",
    techStack: ["Next.js", "NestJS", "PostgreSQL"],
  },
  {
    title: "Financial App",
    image: {
      imageAlt: "Financial App Image",
      label: "Financial App",
      imageSrc: "/images/projects/financial-app.png",
    },
    liveUrl: "https://github.com/aqil2514/financial-tracker-app/releases/latest",
    techStack: ["Tauri", "Rust", "Next.js"],
  },
];

export function FeaturedProjects() {

  return (
    <section className="relative z-10 px-4 sm:px-6">
      <FeaturedProjectsHeader />

      <ProjectGrid items={featuredItems} />

      <FeaturedProjectsFooter />
    </section>
  );
}
