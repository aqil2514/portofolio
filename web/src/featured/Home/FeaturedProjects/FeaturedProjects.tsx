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
    title: "Flowtooly",
    image: {
      imageAlt: "Flowtooly",
      label: "Flowtooly",
      imageSrc: "/images/projects/flowtooly.png",
    },
    liveUrl: "https://flowtooly.com",
    techStack: ["Next.js", "Tailwind CSS", "ShadCN"],
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
