import { getLocale } from "next-intl/server";
import { Locale } from "@/@types/Sanity";
import { generateOGImage } from "@/app/og/generator";

export default async function Image() {
  const locale = await getLocale();

  const titleLocale: Record<Locale, string> = {
    id: "Proyek",
    en: "Projects",
  };

  const subtitleLocale: Record<Locale, string> = {
    id: "Kumpulan proyek digital yang dibangun dengan fokus pada rekayasa web modern, otomasi, dan solusi nyata.",
    en: "A collection of digital projects built with modern web engineering, automation, and real-world problem solving.",
  };

  return generateOGImage({
    title: titleLocale[locale],
    subtitle: subtitleLocale[locale],
  });
}
