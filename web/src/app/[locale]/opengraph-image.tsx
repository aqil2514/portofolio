import { getLocale } from "next-intl/server";
import { generateOGImage } from "../og/generator";
import { Locale } from "@/@types/Sanity";

export default async function Image() {
  const locale = await getLocale();

  const titleLocale: Record<Locale, string> = {
    id: "Beranda",
    en: "Home",
  };

  const subtitleLocale: Record<Locale, string> = {
    id: "Full-Stack Developer dengan fokus pada rekayasa web modern dan otomasi.",
    en: "Full-Stack Developer specializing in modern web engineering and automation.",
  };

  return generateOGImage({
    title: titleLocale[locale],
    subtitle: subtitleLocale[locale],
  });
}
