"use client";

import { fontPrompt } from "@/constant/fonts";
import { cn } from "@/lib/utils";
import { TypeAnimation } from "react-type-animation";

export function TypeAnimationClient() {
  return (
    <TypeAnimation
      sequence={["Full Stack Developer", 1000]}
      wrapper="span"
      repeat={Infinity}
      className={cn(
        fontPrompt.className,
        `
          block mt-2 font-medium
          text-sm sm:text-base md:text-lg
        `
      )}
    />
  );
}
