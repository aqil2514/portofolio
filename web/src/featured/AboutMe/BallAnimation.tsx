"use client";

import * as motion from "motion/react-client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function BallAnimation({ children }: { children: React.ReactNode }) {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="flex justify-center items-start w-full min-h-[260px] relative pt-20">
      
      {/* SHADOW */}
      {!showCard && (
        <motion.div
          className="absolute bottom-10 w-10 h-2 rounded-full bg-black/30 blur-md"
          initial={{ scale: 0.2, opacity: 0.3 }}
          animate={{
            scale: [
              0.2, // bola masih di atas
              1.4, // jatuh
              0.9, // naik memantul
              1.2, // jatuh lagi
              1.0  // settle
            ],
            opacity: [0.2, 0.45, 0.3, 0.4, 0.35],
          }}
          transition={{
            duration: 1.6,
            delay: 1,
            ease: "easeOut",
            times: [0, 0.35, 0.55, 0.75, 1]
          }}
        />
      )}

      {/* BOUNCING BALL */}
      {!showCard && (
        <motion.div
          className="w-4 h-4 rounded-full bg-[#8ab4d2] shadow-lg shadow-black/30"
          initial={{ y: -200, scale: 1 }}
          animate={{
            y: [-200, 0, -60, 0, -25, 0],
            scale: [1, 1, 1, 1.1, 1.2, 1.3],
          }}
          transition={{
            duration: 1.6,
            ease: "easeOut",
            times: [0, 0.35, 0.55, 0.75, 0.9, 1],
          }}
          onAnimationComplete={() => setShowCard(true)}
        />
      )}

      {/* CARD APPEARS */}
      {showCard && (
        <motion.div
          initial={{
            width: 16,
            height: 16,
            borderRadius: 9999,
            opacity: 0,
            backgroundColor: "rgba(255,255,255,0.15)",
          }}
          animate={{
            width: "min(90%, 650px)",
            height: "auto",
            borderRadius: 20,
            opacity: 1,
          }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={cn(
            "bg-white/10 backdrop-blur-lg border border-white/20 p-6 shadow-xl text-white text-center"
          )}
        >
          {/* HERO CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}

    </div>
  );
}
