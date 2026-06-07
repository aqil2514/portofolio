import { SITE_URL } from "@/constant/seo";
import { MetadataRoute } from "next";

const LAST_MODIFIED: Record<string, string> = {
  "":          "2026-06-08",
  "about-me":  "2026-06-08",
  "projects":  "2026-06-08",
  "pdf":       "2026-06-08",
  "contact":   "2026-02-01",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const locales = ["id", "en"];
  const routes = ["", "about-me", "contact", "pdf", "projects"];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: route === "" ? `${baseUrl}/${locale}` : `${baseUrl}/${locale}/${route}`,
      lastModified: new Date(LAST_MODIFIED[route]),
    }))
  );
}
