import { ProjectGrid } from "./ProjectGrid";
import { ProjectSummary } from "@/@types/Projects";
import { FeaturedProjectsHeader } from "./FeaturedProjectsHeader";
import { FeaturedProjectsFooter } from "./FeaturedProjectsFooter";

const featuredItems: ProjectSummary[] = [
  {
    title: "Dragon 8 Travel",
    image: {
      imageAlt: "Dragon 8 Travel",
      label: "Dragon 8 Travel",
      imageSrc: "/images/projects/dragon-8-travel.png",
    },
    liveUrl: "https://dragon8travel.com/",
    techStack: ["Next.js", "Tailwind CSS", "Supabase"],
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
