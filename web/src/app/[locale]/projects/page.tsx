import ProjectsTemplate from "@/components/templates/ProjectsTemplate";
import {
  getAllProjectCategory,
  getAllProjectsData,
} from "@/sanity/actions/projects";
import { getAllProjectTechStack } from "@/sanity/actions/tech";
import { getLocale } from "next-intl/server";
import { Metadata } from "next";
import { Locale } from "@/@types/Sanity";
import Script from "next/script";
import { generateBreadcrumbSchema } from "@/utils/breadcrumbs";

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
  };
}

export default async function ProjectsPage() {
  const [projects, projectCategories, projectTechStacks, locale] =
    await Promise.all([
      getAllProjectsData(),
      getAllProjectCategory(),
      getAllProjectTechStack(),
      getLocale(),
    ]);

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
