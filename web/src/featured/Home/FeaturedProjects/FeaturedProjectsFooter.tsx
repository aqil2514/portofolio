import { fontCinzel } from "@/constant/fonts";
import { Link } from "@/i18n/navigations";
import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import { useTranslations } from "next-intl";

export function FeaturedProjectsFooter() {
  const t = useTranslations("HomePage");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 4.6 }}
      className="mt-10 text-center"
    >
      <Link href={"/projects"}>
      <button
        className={cn(
          fontCinzel.className,
          `
                    px-5 sm:px-6 
                    py-2 
                    border border-white/30 
                    text-white 
                    rounded-lg 
                    cursor-pointer
                    transition-all 
                    hover:bg-white/10 
                    hover:border-white/50
                    `
        )}
      >
        {t("viewAllProjects")}
      </button>
      </Link>
    </motion.div>
  );
}
