import MyDocument from "@/components/templates/PortofolioDocument";
import { getPortfolio } from "@/data/getPortfolio";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Locale } from "@/@types/types";
import Script from "next/script";
import { generateBreadcrumbSchema } from "@/utils/breadcrumbs";
import { SITE_URL } from "@/constant/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const titleLocale: Record<Locale, string> = {
    id: "Curriculum Vitae",
    en: "Curriculum Vitae",
  };

  const descriptionLocale: Record<Locale, string> = {
    id: "Lihat curriculum vitae lengkap saya yang memuat pengalaman kerja, proyek, pendidikan, dan keahlian teknis sebagai Full-Stack Developer.",
    en: "View my complete curriculum vitae showcasing work experience, projects, education, and technical skills as a Full-Stack Developer.",
  };

  return {
    title: titleLocale[locale],
    description: descriptionLocale[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/pdf`,
      languages: {
        en: `${SITE_URL}/en/pdf`,
        id: `${SITE_URL}/id/pdf`,
      },
    },
  };
}

export default async function CVPage() {
  const [locale] = await Promise.all([getLocale()]);
  const data = getPortfolio();

  return (
    <>
      <Script
        id="breadcrumb-cv"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema({
              locale,
              path: "/pdf",
              name: "Curriculum Vitae",
            })
          ),
        }}
      />
      <MyDocument pdfData={data} locale={locale} />
    </>
  );
}
