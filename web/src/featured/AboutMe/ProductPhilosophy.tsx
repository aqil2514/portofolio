"use client";

import { PhilosophyCard } from "@/components/atoms/PhilosophyCard";
import { motion } from "motion/react";
import { useAboutMeContext } from "./provider";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";
import { getInternationalizationValue } from "@/utils/getInternationalizationValue";
import GraphemeSplitter from "grapheme-splitter";


export function ProductPhilosophy() {
  const { data } = useAboutMeContext();
  const locale = useLocale();
  const t = useTranslations("AboutPage");

  return (
    <div className="w-full flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-2/3 flex flex-col gap-6"
      >
        <h2 className="text-white text-2xl font-bold mb-2">
          {t("productPhilosophy")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.productPhilosophy.map((item, i) => {
            const splitter = new GraphemeSplitter();
            const graphemes = splitter.splitGraphemes(getInternationalizationValue(item.title, locale))

            const icon = graphemes[0];
            const title = graphemes.slice(1).join("");
            const desc = getInternationalizationValue(item.description, locale);

            return (
              <PhilosophyCard
                key={`Philosopy-${i + 1}`}
                delay={0.1 + 0.1 * i}
                icon={<span>{icon}</span>}
                title={title}
                desc={desc}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
