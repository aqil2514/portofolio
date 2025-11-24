import * as motion from "motion/react-client";

export function AstronotBottom(){
    return <motion.div
            className="
              absolute w-28 h-28 bottom-10 left-0 z-10
              bg-[url('/hello-astronot.gif')] bg-contain bg-no-repeat bg-center
            "
            animate={{
              x: ["-20%", "110vw"],
              y: [0, -8, 0, 6, 0],
              rotate: [0, -25, 18, -30, 15, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
}