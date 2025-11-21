import { fontCinzel, fontPrompt } from "@/constant/fonts";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import { getTranslations } from "next-intl/server";

const skills = [
  "Next.js",
  "NestJS",
  "Supabase",
  "PostgreSQL",
  "TailwindCSS",
  "Docker",
  "n8n",
  "Cloudflare",
];

export async function SkillsSection() {
  const t = await getTranslations("HomePage");

  return (
    <div
      className="
        relative z-10 
        flex flex-col sm:flex-row 
        items-center sm:items-start 
        justify-center
        gap-3 sm:gap-4 
        px-4 text-center sm:text-left
      "
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 2 }}
        className={cn(
          fontCinzel.className,
          `
          text-white/80 
          tracking-wide 
          text-sm 
          sm:text-base 
        `
        )}
      >
        {t("skillsTools")}
      </motion.h2>

      {/* Skills */}
      <div
        className="
          flex flex-wrap 
          justify-center sm:justify-start 
          gap-2 sm:gap-3 
          max-w-[90vw]
        "
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.toLowerCase()}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: 2.3 + index * 0.15 }}
            className={cn(
              fontPrompt.className,
              `
              bg-linear-to-r from-[#06385c] to-[#456882]
              text-white text-xs sm:text-sm
              py-1 px-3 
              rounded-2xl 
              whitespace-nowrap
            `
            )}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
