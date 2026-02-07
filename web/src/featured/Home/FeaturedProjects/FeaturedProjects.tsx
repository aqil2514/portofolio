import { ProjectGrid } from "./ProjectGrid";
import { ProjectSummary } from "@/@types/Projects";
import { FeaturedProjectsHeader } from "./FeaturedProjectsHeader";
import { FeaturedProjectsFooter } from "./FeaturedProjectsFooter";

const featuredItems: ProjectSummary[] = [
  {
    title: "Flowtooly",
    image: {
      imageAlt: "Flowtooly",
      label: "Flowtooly",
      imageSrc: "https://cdn.sanity.io/images/30c680d2/production/22e2a190189476fefe06ad9cde5fd69e43ff6198-1918x899.png",
    },
    liveUrl: "https://www.flowtooly.com",
    techStack: ["Next.js", "Tailwind", "ShadCn"],
  },
  {
    title: "Internal Operating System",
    image: {
      imageAlt: "Internal Operating System",
      label: "Internal Operating System",
      imageSrc: "https://cdn.sanity.io/images/30c680d2/production/8fad0eb555f9f02bb7883e449c443a7c258a7348-1918x912.png",
    },
    techStack: ["Next.js", "NestJs", "Supabase"],
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
