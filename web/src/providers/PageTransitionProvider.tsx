"use client";

import { createContext, useContext, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useSelectedLayoutSegment } from "next/navigation";

interface PageTransitionContextProps {
  transition: TransitionStyle;
  setTransition: (style: TransitionStyle) => void;
}

export type TransitionStyle =
  | "fade"
  | "slideUp"
  | "slideLeft"
  | "slideRight"
  | "blur";

const PageTransitionContext = createContext<PageTransitionContextProps | null>(
  null,
);

const variants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideUp: {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -25 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  },
  slideRight: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
  },
  blur: {
    initial: { opacity: 0, filter: "blur(15px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(15px)" },
  },
};

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const segment = useSelectedLayoutSegment();
  const [transition, setTransition] = useState<TransitionStyle>("blur");

  return (
    <PageTransitionContext.Provider value={{ transition, setTransition }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={segment}
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

export function usePageTransition() {
  const ctx = useContext(PageTransitionContext);
  if (!ctx)
    throw new Error(
      "usePageTransition must be used inside PageTransitionProvider",
    );
  return ctx;
}
