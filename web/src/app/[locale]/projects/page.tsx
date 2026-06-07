import ProjectsTemplate from "@/components/templates/ProjectsTemplate";
import {
  getProjectCategories,
  getProjectsData,
  getProjectTechStack,
} from "@/data/getProjects";
import { getLocale } from "next-intl/server";
import { Metadata } from "next";
import { Locale } from "@/@types/types";
import Script from "next/script";
import { generateBreadcrumbSchema } from "@/utils/breadcrumbs";
import { SITE_URL } from "@/constant/seo";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale(); // "id" | "en"

  const titleLocale: Record<Locale, string> = {
    id: "Proyek",
    en: "Projects",
  };

  const descriptionLocale: Record<Locale, string> = {
    id: "Kumpulan proyek digital yang dibangun dengan rekayasa web modern, otomasi cerdas, dan pendekatan berbasis solusi.",
    en: "A collection of digital projects built with modern web engineering, intelligent automation, and a solution-driven approach.",
  };

  return {
    title: titleLocale[locale],
    description: descriptionLocale[locale],
    alternates: {
      canonical: `${SITE_URL}/${locale}/projects`,
      languages: {
        en: `${SITE_URL}/en/projects`,
        id: `${SITE_URL}/id/projects`,
      },
    },
  };
}

export default async function ProjectsPage() {
  const [locale] = await Promise.all([getLocale()]);
  const projects = getProjectsData();
  const projectCategories = getProjectCategories();
  const projectTechStacks = getProjectTechStack();

  return (
    <>
      <Script
        id="breadcrumb-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema({
              locale,
              path: "/projects",
              name: locale === "id" ? "Proyek" : "Projects",
            })
          ),
        }}
      />

      <ProjectsTemplate
        projectCategories={projectCategories}
        projects={projects}
        projectTechStacks={projectTechStacks}
      />
    </>
  );
}
