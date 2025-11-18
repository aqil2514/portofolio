"use client";

import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "@/i18n/navigations";

interface Props {
  variant?: "floating" | "menu";
  className?: string;
}

export function LanguageSwitcher({ variant = "floating", className }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: "en" | "id") => {
    router.replace(pathname, { locale: lang });
  };

  // Shared button style
  const buttonBase =
    "px-3 py-1 rounded-md text-sm border transition-all cursor-pointer";

  // Variant styles
  const variants = {
    floating: "absolute top-4 right-6 z-50 flex items-center gap-2",
    menu: "flex items-center gap-2 mt-2",
  };

  return (
    <div className={cn(variants[variant], className)}>
      <button
        onClick={() => changeLanguage("id")}
        className={cn(
          buttonBase,
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
          buttonBase,
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
