import { fontCinzel, fontPoppins } from "@/constant/fonts";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function Title() {
  const t = useTranslations("ProjectsPage");

  return (
    <div className="text-center text-white">
      <h1 className={cn(fontCinzel.className, "text-4xl font-bold")}>
        {t("title")}
      </h1>
      <p className={cn(fontPoppins.className, "text-xl font-light")}>
        {t("subtitle")}
      </p>
    </div>
  );
}
