import { fontCinzel } from "@/constant/fonts";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import { StarField } from "./StarField";
import { AstronotBottom } from "./AstronotBottom";
import { AstronotRocket } from "./AstronotRocket";
import * as motion from "motion/react-client";

export async function BannerContactMe() {
  const t = await getTranslations();

  return (
    <div
      className="
    relative w-full h-96 -mt-20 overflow-hidden
    flex items-center justify-center
    bg-linear-to-b
    from-[#0f1f2e] via-[#102a3d] to-[#153f55]
  "
    >
      <StarField />

      <AstronotBottom />

      <AstronotRocket />

      {/* TITLE */}
      <motion.h1
        className={cn(
          fontCinzel.className,
          "z-20 font-bold text-white text-4xl sm:text-5xl drop-shadow-xl"
        )}
        animate={{
          rotate: [0, -1.5, 1.5, -1, 0],
          scale: [1, 1.02, 1, 1.03, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {t("HomePage.wantToWorkTogether")}
      </motion.h1>
    </div>
  );
}
