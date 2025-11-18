import * as motion from "motion/react-client";
import { fontCinzel, fontPrompt } from "@/constant/fonts";
import { cn } from "@/lib/utils";
import { TypeAnimation } from "react-type-animation";

export function HomeGreetings() {
  return (
    <div className="relative z-10 text-center text-white space-y-3 px-4">
      {/* Greeting */}
      <motion.p
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-1 text-base sm:text-lg md:text-xl"
      >
        Hello I am
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, scale: 2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className={cn(
          fontCinzel.className,
          `
          font-semibold 
          leading-tight 
          text-3xl        /* mobile small */
          sm:text-4xl 
          md:text-5xl 
          lg:text-6xl 
          xl:text-7xl
        `
        )}
      >
        Muhamad Aqil Maulana
      </motion.h1>

      {/* Type Animation */}
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
    </div>
  );
}
