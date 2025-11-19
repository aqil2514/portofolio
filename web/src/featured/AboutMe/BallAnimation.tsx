"use client";

import * as motion from "motion/react-client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function BallAnimation({ children }: { children: React.ReactNode }) {
  const [showCard, setShowCard] = useState(false);

  return (
    <div
      className="
        flex justify-center items-start w-full 
        relative 
        px-4 sm:px-0   /* padding mobile biar tidak mepet */
      "
    >
      {/* SHADOW */}
      {!showCard && (
        <motion.div
          className="
            absolute 
            bottom-8 sm:bottom-10 
            w-8 sm:w-10 
            h-2 
            rounded-full bg-black/30 blur-md
          "
          initial={{ scale: 0.2, opacity: 0.3 }}
          animate={{
            scale: [0.2, 1.4, 0.9, 1.2, 1.0],
            opacity: [0.2, 0.45, 0.3, 0.4, 0.35],
          }}
          transition={{
            duration: 1.6,
            delay: 1,
            ease: "easeOut",
            times: [0, 0.35, 0.55, 0.75, 1],
          }}
        />
      )}

      {/* BOUNCING BALL */}
      {!showCard && (
        <motion.div
          className="
            w-3 h-3 sm:w-4 sm:h-4 
            rounded-full 
            bg-[#8ab4d2] 
            shadow-lg shadow-black/30
          "
          initial={{ y: -150, scale: 1 }} // lebih kecil untuk mobile
          animate={{
            y: [-150, 0, -50, 0, -25, 0],
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
            width: 20,
            height: 20,
            borderRadius: 9999,
            opacity: 0,
            backgroundColor: "rgba(255,255,255,0.15)",
          }}
          animate={{
            width: "min(95%, 680px)",  // lebih lega di mobile & max lebih proporsional
            height: "auto",
            borderRadius: 20,
            opacity: 1,
          }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={cn(
            `
            bg-white/10 backdrop-blur-lg border border-white/20
            p-4 sm:p-6
            shadow-xl text-white text-center
            `
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
