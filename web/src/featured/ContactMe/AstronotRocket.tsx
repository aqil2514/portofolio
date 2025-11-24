import * as motion from "motion/react-client";

export function AstronotRocket() {
  return (
    <motion.div
      className="
              absolute w-48 h-48 top-0 left-0 z-10 
              bg-[url('/rocket-astronot.gif')] bg-contain bg-no-repeat bg-center
            "
      initial={{ rotate: 45 }}
      animate={{
        x: ["-20%", "110vw"],
        y: [0, -12, 0, 8, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
