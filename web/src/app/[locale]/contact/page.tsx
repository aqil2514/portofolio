import ContactMeTemplate from "@/components/templates/ContactMetemplate";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Locale } from "@/@types/types";
import Script from "next/script";
import { generateBreadcrumbSchema } from "@/utils/breadcrumbs";
import { SITE_URL } from "@/constant/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const titleLocale: Record<Locale, string> = {
    id: "Hubungi Saya",
    en: "Contact Me",
  };

  const descriptionLocale: Record<Locale, string> = {
    id: "Hubungi saya untuk kolaborasi, proyek baru, konsultasi teknis, atau peluang kerja sama di bidang pengembangan web dan otomasi.",
    en: "Contact me for collaborations, new projects, technical consultations, or partnership opportunities in web development and automation.",
  };

  return {
    title: titleLocale[locale],
    description: descriptionLocale[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/contact`,
      languages: {
        en: `${SITE_URL}/en/contact`,
        id: `${SITE_URL}/id/contact`,
      },
    },
  };
}

export default async function ContactMe() {
  const locale = await getLocale();
  return (
    <>
      <Script
        id="breadcrumb-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema({
              locale,
              path: "/contact",
              name: locale === "id" ? "Hubungi Saya" : "Contact Me",
            })
          ),
        }}
      />
      <ContactMeTemplate />
    </>
  );
}
