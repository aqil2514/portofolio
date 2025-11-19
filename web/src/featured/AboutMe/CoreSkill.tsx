"use client";

import { SkillCard } from "@/components/atoms/SkillCard";
import { motion } from "motion/react";
import { useAboutMeContext } from "./provider";
import { useLocale, useTranslations } from "next-intl";
import GraphemeSplitter from "grapheme-splitter";

{
  /* <SkillCard
          delay={0.1}
          icon={<span>⚛️</span>}
          title="Frontend"
          level="Advanced"
          skills={[
            "React.js",
            "Next.js",
            "Tailwind CSS",
            "Zustand / Context",
            "Framer Motion",
          ]}
        />

        <SkillCard
          delay={0.2}
          icon={<span>🟩</span>}
          title="Backend"
          level="Advanced"
          skills={["Node.js", "NestJS", "Express", "Prisma ORM", "REST API"]}
        />

        <SkillCard
          delay={0.3}
          icon={<span>🗄️</span>}
          title="Database"
          level="Intermediate"
          skills={["PostgreSQL", "Supabase", "Firebase", "Prisma Schema"]}
        />

        <SkillCard
          delay={0.4}
          icon={<span>🐳</span>}
          title="DevOps"
          level="Intermediate"
          skills={["Docker", "Railway", "Render", "Nginx Reverse Proxy"]}
        />

        <SkillCard
          delay={0.5}
          icon={<span>🛠️</span>}
          title="Tools"
          skills={["Git / GitHub", "VSCode", "Figma", "Postman"]}
        />

        <SkillCard
          delay={0.6}
          icon={<span>💡</span>}
          title="Methodology"
          skills={[
            "Clean Architecture",
            "OOP",
            "Design Patterns",
            "Responsive Design",
          ]}
        /> */
}

export function CoreSkills() {
  const { data } = useAboutMeContext();
  const t = useTranslations("AboutPage");
  return (
    <div className="w-full flex justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-2/3"
      >
        <h2 className="text-white text-2xl font-bold mb-2 lg:col-span-3 md:col-span-2 col-span-1">
          {t("coreSkill")}
        </h2>
        {data.coreSkill.map((item, i) => {
          const splitter = new GraphemeSplitter();
          const graphemes = splitter.splitGraphemes(item.skillField);

          const icon = graphemes[0];
          const title = graphemes.slice(1).join("");
          return (
            <SkillCard
              key={`core-skill-${i + 1}`}
              delay={0.1}
              icon={<span>{icon}</span>}
              title={title}
              level={item.skillLevel}
              skills={item.skillList}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
