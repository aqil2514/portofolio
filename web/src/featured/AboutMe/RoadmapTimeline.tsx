/* eslint-disable @next/next/no-img-element */
"use client";

const aboutRoadmap: RoadmapAbout[] = [
  {
    date: "2023",
    title: "Mulai Belajar Pemrograman",
    description:
      "Pertama kali belajar HTML, CSS, dan JavaScript secara otodidak.",
    learningSkill: [
      { label: "HTML", imageSrc: "/fe_html.png", imageAlt: "HTML" },
      { label: "CSS", imageSrc: "/fe_css.png", imageAlt: "CSS" },
    ],
    certificates: [
      {
        label: "Basic Web Certificate",
        imageSrc: "/Certificates/fsd-rwd.webp",
        imageAlt: "Certificate",
        link: "https://www.freecodecamp.org/certification/aqil2514/responsive-web-design",
      },
    ],
  },
];

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { motion } from "motion/react";
import { RoadmapAbout } from "@/@types/Roadmap";

export function RoadmapTimeline() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <div className="relative w-full max-w-xl mx-auto py-32 min-h-[500px]">
      {/* Vertical Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.3 }}
        className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-white/20 -translate-x-1/2"
      />

      {/* Items */}
      <div className="flex flex-col gap-16 relative">
        {aboutRoadmap.map((item, index) => {
          const isLeft = index % 2 === 0;

          const baseDelay = index === 0 || index === 1 ? 2.3 : 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: baseDelay }}
              className={`flex items-center gap-6 ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              {/* Card */}
              <div
                onClick={() => setActiveItem(index)}
                className="
                  cursor-pointer
                  bg-white/10 backdrop-blur-lg 
                  border border-white/20 
                  p-4 rounded-xl max-w-xs
                  hover:bg-white/20 hover:border-white/40
                  transition-all
                "
              >
                <p className="text-sm text-white/60">{item.date}</p>
                <p className="text-lg font-semibold text-white">{item.title}</p>
              </div>

              {/* Node */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: baseDelay }}
                className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white shadow-lg border border-white/40"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Dialog */}
      <Dialog
        open={activeItem !== null}
        onOpenChange={() => setActiveItem(null)}
      >
        <DialogContent className="bg-[#0f1e2e] text-white border-white/20 max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl">
              {aboutRoadmap[activeItem!]?.title}
            </DialogTitle>
            <p className="text-white/50 text-sm mt-1">
              {aboutRoadmap[activeItem!]?.date}
            </p>
          </DialogHeader>

          {/* DESCRIPTION */}
          <p className="text-white/80 mt-3 leading-relaxed">
            {aboutRoadmap[activeItem!]?.description}
          </p>

          {/* LEARNING SKILLS */}
          {aboutRoadmap[activeItem!]?.learningSkill && (
            <div className="mt-6">
              <h3 className="font-semibold text-white mb-2 text-sm tracking-wide">
                Learning Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {aboutRoadmap[activeItem!].learningSkill!.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 p-2 rounded-lg border border-white/20 flex items-center gap-2"
                  >
                    <img
                      src={skill.imageSrc}
                      alt={skill.imageAlt}
                      className="w-8 h-8 rounded-md object-cover"
                    />
                    <span className="text-white/90 text-sm">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CERTIFICATES */}
          {aboutRoadmap[activeItem!]?.certificates && (
            <div className="mt-6">
              <h3 className="font-semibold text-white mb-2 text-sm tracking-wide">
                Certificates
              </h3>

              <div className="flex flex-col gap-3">
                {aboutRoadmap[activeItem!].certificates!.map((cert, idx) => (
                  <a
                    key={idx}
                    href={cert.link}
                    target="_blank"
                    className="group flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg hover:bg-white/10 transition"
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
                        Lihat sertifikat →
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
