import AboutMeTemplate from "@/components/templates/AboutMeTemplate";
import { getAboutPage } from "@/data/getAboutPage";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Locale } from "@/@types/types";
import Script from "next/script";
import { generateBreadcrumbSchema } from "@/utils/breadcrumbs";
import { SITE_URL } from "@/constant/seo";

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
    alternates: {
      canonical: `${SITE_URL}/${locale}/about-me`,
      languages: {
        en: `${SITE_URL}/en/about-me`,
        id: `${SITE_URL}/id/about-me`,
      },
    },
  };
}

export default async function AboutMePage() {
  const [data, locale] = await Promise.all([getAboutPage(), getLocale()]);

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
