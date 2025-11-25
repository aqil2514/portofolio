import { getLocale } from "next-intl/server";
import { Locale } from "@/@types/Sanity";
import { generateOGImage } from "@/app/og/generator";

export default async function Image() {
  const locale = await getLocale();

  const titleLocale: Record<Locale, string> = {
    id: "Hubungi Saya",
    en: "Contact Me",
  };

  const subtitleLocale: Record<Locale, string> = {
    id: "Terbuka untuk kolaborasi, proyek baru, dan percakapan seputar pengembangan dan otomasi digital.",
    en: "Open for collaboration, new projects, and conversations around development and digital automation.",
  };

  return generateOGImage({
    title: titleLocale[locale],
    subtitle: subtitleLocale[locale],
  });
}
