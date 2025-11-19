/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { motion } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { useAboutMeContext } from "./provider";
import { getInternationalizationValue } from "@/utils/getInternationalizationValue";

export function RoadmapTimeline() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const { data } = useAboutMeContext();
  const locale = useLocale();
  const t = useTranslations("AboutPage");

  const activeData =
    activeItem !== null ? data.roadmapTimeline[activeItem] : null;

  return (
    <div className="relative w-full max-w-3xl mx-auto py-24 px-4 sm:px-8">
      {/* LINE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.3 }}
        className="
          absolute 
          left-4 
          sm:left-6 
          lg:left-1/2
          top-0 
          bottom-0 
          w-[3px] 
          bg-white/20 
          lg:-translate-x-1/2
        "
      />

      {/* ITEMS */}
      <div className="flex flex-col gap-20 relative">
        {data.roadmapTimeline.map((item, index) => {
          const isLeft = index % 2 === 0;

          const title = getInternationalizationValue(item.title, locale);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="flex relative lg:items-center"
            >
              {/* NODE */}
              <div
                className="
                  absolute
                  left-4 sm:left-6
                  lg:left-1/2 lg:-translate-x-1/2
                  w-5 h-5 rounded-full 
                  bg-white shadow-lg border border-white/40
                "
              />

              {/* CARD */}
              <div
                onClick={() => setActiveItem(index)}
                className={`
                  cursor-pointer mt-10 lg:mt-0
                  bg-white/10 backdrop-blur-lg 
                  border border-white/20 
                  p-4 rounded-xl 
                  hover:bg-white/20 hover:border-white/40 
                  transition-all w-full max-w-sm
                  ${
                    isLeft
                      ? "lg:ml-[calc(50%+2rem)]"
                      : "lg:mr-[calc(50%+2rem)] lg:ml-auto"
                  }
                `}
              >
                <p className="text-sm text-white/60">{new Date(item.date).getFullYear()}</p>
                <p className="text-lg font-semibold text-white">{title}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* DIALOG */}
      <Dialog
        open={activeItem !== null}
        onOpenChange={() => setActiveItem(null)}
      >
        <DialogContent
          className="
            bg-[#0f1e2e] text-white border-white/20 
            max-w-lg w-[90%]
          "
        >
          {activeData && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl">
                  {getInternationalizationValue(activeData.title, locale)}
                </DialogTitle>
                <p className="text-white/50 text-sm mt-1">{new Date(activeData.date).getFullYear()}</p>
              </DialogHeader>

              {/* DESCRIPTION */}
              <p className="text-white/80 mt-3 leading-relaxed">
                {getInternationalizationValue(activeData.description, locale)}
              </p>

              {/* LEARNING SKILLS */}
              {activeData.learningSkill?.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold text-white mb-2 text-sm tracking-wide">
                    {t("learningSkill")}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {activeData.learningSkill.map((skill, idx) => (
                      <div
                        key={idx}
                        className="
                          bg-white/10 p-2 rounded-lg 
                          border border-white/20 
                          flex items-center gap-2
                        "
                      >
                        <img
                          src={skill.imageSrc}
                          alt={skill.imageAlt}
                          className="w-8 h-8 rounded-md object-cover"
                        />
                        <span className="text-white/90 text-sm">
                          {skill.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CERTIFICATES */}
              {activeData.certificates?.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-semibold text-white mb-2 text-sm tracking-wide">
                    {t("certificates")}
                  </h3>

                  <div className="flex flex-col gap-3">
                    {activeData.certificates.map((cert, idx) => (
                      <a
                        key={idx}
                        href={cert.link}
                        target="_blank"
                        className="
                          group flex items-center gap-3 
                          bg-white/5 border border-white/10 
                          p-3 rounded-lg 
                          hover:bg-white/10 transition
                        "
                      >
                        <img
                          src={cert.imageSrc}
                          alt={cert.imageAlt}
                          className="w-12 h-12 rounded-md object-cover shadow-sm"
                        />
                        <div>
                          <p className="text-white/90 text-sm font-medium">
                            {cert.label}
                          </p>
                          <p className="text-white/40 text-xs group-hover:text-white/60 transition">
                            {t("viewCertificate")}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
