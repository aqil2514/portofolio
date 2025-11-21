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
      imageSrc: "/fsd-dragon8.webp",
    },
    liveUrl: "https://www.dragon8travel.com",
    techStack: ["Next.js", "Tailwind", "Supabase"],
  },
  {
    title: "Studinesia",
    image: {
      imageAlt: "Studinesia Blog",
      label: "Studinesia Blog",
      imageSrc: "/fsd-studinesia-nextjs.webp",
    },
    techStack: ["Next.js", "AI Automation", "Supabase"],
    liveUrl: "https://www.studinesia.online",
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
