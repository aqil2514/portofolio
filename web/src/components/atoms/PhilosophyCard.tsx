"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface PhilosophyCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay?: number;
  className?: string;
}

export function PhilosophyCard({
  icon,
  title,
  desc,
  delay = 0,
  className,
}: PhilosophyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={cn(
        `
        bg-white/10 backdrop-blur-xl border border-white/20
        rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.25)]
        hover:bg-white/15 hover:shadow-[0_12px_40px_rgba(130,180,230,0.35)]
        transition-all duration-300 cursor-default select-none
        text-white flex flex-col gap-1
        `,
        className
      )}
    >
      <div className="flex items-center gap-2 text-sm font-semibold">
        <span className="text-lg">{icon}</span>
        {title}
      </div>

      <p className="text-xs text-white/70 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
