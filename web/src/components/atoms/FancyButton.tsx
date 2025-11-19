"use client";

import * as motion from "motion/react-client";
import { cn } from "@/lib/utils";
import { fontCinzel } from "@/constant/fonts";

interface FancyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  gradient?: string; // background wrapper
  delay?: number; // animation delay
}

export function FancyButton({
  children,
  onClick,
  className,
  gradient = "bg-linear-to-r from-[#456882] to-[#0989e4]",
  delay = 0,
}: FancyButtonProps) {
  return (
    <motion.div
      className={cn("p-0.5 rounded-xl inline-block", gradient)}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <button
        onClick={onClick}
        className={cn(
          fontCinzel.className,
          `
            rounded-xl bg-black text-white 
            transition-all duration-150 
            hover:bg-transparent active:scale-95
            font-semibold cursor-pointer
            px-4 py-2 sm:px-6 sm:py-2
          `,
          className
        )}
      >
        {children}
      </button>
    </motion.div>
  );
}
