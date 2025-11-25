import { getLocale } from "next-intl/server";
import { Locale } from "@/@types/Sanity";
import { generateOGImage } from "@/app/og/generator";

export default async function Image() {
  const locale = await getLocale();

  const titleLocale: Record<Locale, string> = {
    id: "Tentang Saya",
    en: "About Me",
  };

  const subtitleLocale: Record<Locale, string> = {
    id: "Membangun solusi digital yang berdampak melalui rekayasa web modern dan otomasi cerdas.",
    en: "Building impactful digital solutions through modern web engineering and intelligent automation.",
  };

  return generateOGImage({
    title: titleLocale[locale],
    subtitle: subtitleLocale[locale],
  });
}