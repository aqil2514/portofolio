import { ProjectSummary } from "@/@types/Projects";
import { fontCinzel } from "@/constant/fonts";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import * as motion from "motion/react-client";

const items: ProjectSummary[] = [
  {
    title: "Dragon 8 Travel",
    imageAlt: "Dragon 8 Travel",
    imageSrc: "/fsd-dragon8.webp",
    previewLink: "https://www.dragon8travel.com",
    stacks: ["Next.js", "Tailwind", "Supabase"],
  },
  {
    title: "Studinesia",
    imageAlt: "Studinesia Blog",
    imageSrc: "/fsd-studinesia-nextjs.webp",
    stacks: ["Next.js", "AI Automation", "Supabase"],
    previewLink: "https://www.studinesia.online",
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
        viewport={{ once: true }}
        className={cn(
          fontCinzel.className,
          `
          text-center 
          text-2xl sm:text-3xl lg:text-4xl
          font-semibold 
          text-white 
          mb-10 sm:mb-12 
          tracking-wide
        `
        )}
      >
        {t("featuredProjects")}
      </motion.h2>

      {/* Grid */}
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
        {items.map((item, index) => (
          <motion.a
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 4 + index * 0.3 }}
            viewport={{ once: true }}
            href={item.previewLink}
            target="_blank"
            className="block"
          >
            <div
              className="
              bg-white/10 backdrop-blur-lg
              border border-white/20 
              rounded-2xl 
              p-3 sm:p-4 
              transition-all duration-300 
              hover:scale-[1.02]
              hover:border-white/40 
              hover:bg-white/20
              shadow-[0_0_20px_rgba(0,0,0,0.2)]
            "
            >
              {/* Image wrapper */}
              <div
                className="
                relative 
                w-full 
                h-40 sm:h-48 lg:h-56
                rounded-xl 
                overflow-hidden 
                mb-3 sm:mb-4
              "
              >
                <Image
                  alt={item.imageAlt}
                  src={item.imageSrc}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3
                className={cn(
                  fontCinzel.className,
                  `
                  text-lg sm:text-xl 
                  font-semibold 
                  text-white 
                  mb-2
                `
                )}
              >
                {item.title}
              </h3>

              {/* Stacks */}
              <div className="flex flex-wrap gap-2 mt-1">
                {item.stacks.map((tech) => (
                  <span
                    key={tech}
                    className="
                    text-white/85 
                    text-xs sm:text-sm 
                    px-3 py-1 
                    rounded-md 
                    border border-white/20 
                    bg-white/5
                    backdrop-blur-sm
                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* CTA All Projects */}
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
