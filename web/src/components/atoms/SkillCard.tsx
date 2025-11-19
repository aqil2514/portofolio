"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  level?: string;
  delay?: number;
  className?: string;
}

export function SkillCard({
  icon,
  title,
  skills,
  level,
  delay = 0,
  className,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        `
        bg-white/10 backdrop-blur-lg border border-white/20
        rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)]
        hover:shadow-[0_12px_40px_rgba(130,180,230,0.35)]
        hover:bg-white/15 transition-all duration-300
        cursor-default select-none text-white
        `,
        className
      )}
    >
      <div className="flex items-center gap-3 mb-3 text-xl font-semibold">
        <span className="text-2xl">{icon}</span>
        {title}
      </div>

      <ul className="space-y-1 text-white/90 text-sm">
        {skills.map((skill) => (
          <li key={skill} className="leading-relaxed">
            • {skill}
          </li>
        ))}
      </ul>

      {level && (
        <p className="text-xs mt-3 text-white/60">Level: {level}</p>
      )}
    </motion.div>
  );
}
