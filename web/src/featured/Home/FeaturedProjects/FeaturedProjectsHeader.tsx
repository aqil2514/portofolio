import { fontCinzel } from "@/constant/fonts";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";

export function FeaturedProjectsHeader() {
  const t = useTranslations("HomePage");

  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 3.7 }}
      className={cn(
        fontCinzel.className,
        "text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-10 sm:mb-12 tracking-wide"
      )}
    >
      {t("featuredProjects")}
    </motion.h2>
  );
}
