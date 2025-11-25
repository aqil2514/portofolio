import AboutMeTemplate from "@/components/templates/AboutMeTemplate";
import { getAboutPageCms } from "@/sanity/actions/aboutPage";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Locale } from "@/@types/Sanity";
import Script from "next/script";
import { generateBreadcrumbSchema } from "@/utils/breadcrumbs";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const titleLocale: Record<Locale, string> = {
    id: "Tentang Saya",
    en: "About Me",
  };

  const descriptionLocale: Record<Locale, string> = {
    id: "Pelajari lebih lanjut tentang perjalanan, pengalaman, dan keahlian Muhamad Aqil Maulana sebagai Full-Stack Developer.",
    en: "Learn more about the journey, experience, and expertise of Muhamad Aqil Maulana as a Full-Stack Developer.",
  };

  return {
    title: titleLocale[locale],
    description: descriptionLocale[locale],
  };
}

export default async function AboutMePage() {
  const [data, locale] = await Promise.all([getAboutPageCms(), getLocale()]);

  return (
    <>
      <Script
        id="breadcrumb-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema({
              locale,
              path: "/about-me",
              name: locale === "id" ? "Tentang Saya" : "About Me",
            })
          ),
        }}
      />

      <AboutMeTemplate data={data} locale={locale} />
    </>
  );
}
