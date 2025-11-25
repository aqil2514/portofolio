import { getLocale } from "next-intl/server";
import { Locale } from "@/@types/Sanity";
import { generateOGImage } from "@/app/og/generator";

export default async function Image() {
  const locale = await getLocale();

  const titleLocale: Record<Locale, string> = {
    id: "Curriculum Vitae",
    en: "Curriculum Vitae",
  };

  const subtitleLocale: Record<Locale, string> = {
    id: "Lihat curriculum vitae lengkap saya yang memuat pengalaman, proyek, dan keahlian teknis.",
    en: "View my complete curriculum vitae showcasing experience, projects, and technical skills.",
  };

  return generateOGImage({
    title: titleLocale[locale],
    subtitle: subtitleLocale[locale],
  });
}
