"use client";

import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "@/i18n/navigations";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: "en" | "id") => {
    router.replace(pathname, { locale: lang });
  };

  return (
    <div className="absolute top-4 right-6 z-50 flex items-center gap-2">
      <button
        onClick={() => changeLanguage("id")}
        className={cn(
          "px-3 py-1 rounded-md text-sm border transition-all",
          locale === "id"
            ? "bg-white text-black border-white"
            : "bg-transparent text-white border-white/40 hover:border-white"
        )}
      >
        ID
      </button>

      <button
        onClick={() => changeLanguage("en")}
        className={cn(
          "px-3 py-1 rounded-md text-sm border transition-all",
          locale === "en"
            ? "bg-white text-black border-white"
            : "bg-transparent text-white border-white/40 hover:border-white"
        )}
      >
        EN
      </button>
    </div>
  );
}
