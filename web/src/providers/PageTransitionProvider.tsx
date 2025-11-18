"use client";

import { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

// ---- TYPES ----
interface PageTransitionContextProps {
  transition: TransitionStyle;
  setTransition: (style: TransitionStyle) => void;
}

type TransitionStyle = "fade" | "slideUp" | "slideLeft" | "blur";

// ---- CONTEXT ----
const PageTransitionContext = createContext<PageTransitionContextProps | null>(null);

// ---- VARIANTS ----
const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  slideUp: {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -25 }
  },
  slideLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 }
  },
  blur: {
    initial: { opacity: 0, filter: "blur(15px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(15px)" }
  }
};

// ---- PROVIDER ----
export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [transition, setTransition] = useState<TransitionStyle>("blur");

  return (
    <PageTransitionContext.Provider value={{ transition, setTransition }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={variants[transition].initial}
          animate={variants[transition].animate}
          exit={variants[transition].exit}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </PageTransitionContext.Provider>
  );
}

// ---- HOOK ----
export function usePageTransition() {
  const ctx = useContext(PageTransitionContext);
  if (!ctx) throw new Error("usePageTransition must be used inside PageTransitionProvider");
  return ctx;
}
