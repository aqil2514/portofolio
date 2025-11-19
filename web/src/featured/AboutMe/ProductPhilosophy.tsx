"use client";

import { PhilosophyCard } from "@/components/atoms/PhilosophyCard";
import { motion } from "motion/react";

export function ProductPhilosophy() {
  return (
    <div className="w-full flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-2/3 flex flex-col gap-6"
      >
        <h2 className="text-white text-2xl font-bold mb-2">Product Philosophy</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <PhilosophyCard
            delay={0.1}
            icon={<span>⚙️</span>}
            title="Simplicity First"
            desc="Keep systems understandable and predictable."
          />

          <PhilosophyCard
            delay={0.15}
            icon={<span>⚡</span>}
            title="Automation First"
            desc="Eliminate repetitive tasks to focus on creativity."
          />

          <PhilosophyCard
            delay={0.2}
            icon={<span>⭐</span>}
            title="Real Users Matter"
            desc="Everything starts with solving real user needs."
          />

          <PhilosophyCard
            delay={0.25}
            icon={<span>🚀</span>}
            title="Performance is King"
            desc="Fast experiences create trust and retention."
          />

          <PhilosophyCard
            delay={0.3}
            icon={<span>🧱</span>}
            title="Clean Architecture"
            desc="Good foundations scale without breaking."
          />

        </div>
      </motion.div>
    </div>
  );
}
