"use client";

import { fontCinzel } from "@/constant/fonts";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";
import { ProjectGrid } from "./ProjectGrid";
import { ProjectSummary } from "@/@types/Projects";

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
  const t = useTranslations("HomePage");

  return (
    <section className="relative z-10 px-4 sm:px-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3.7 }}
        className={cn(
          fontCinzel.className,
          "text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-10 sm:mb-12 tracking-wide"
        )}
      >
        {t("featuredProjects")}
      </motion.h2>

      <ProjectGrid items={featuredItems} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 4.6 }}
        className="mt-10 text-center"
      >
        <button
          className={cn(
            fontCinzel.className,
            `
            px-5 sm:px-6 
            py-2 
            border border-white/30 
            text-white 
            rounded-lg 
            cursor-pointer
            transition-all 
            hover:bg-white/10 
            hover:border-white/50
            `
          )}
        >
          {t("viewAllProjects")}
        </button>
      </motion.div>
    </section>
  );
}
