import { SITE_URL } from "@/constant/seo";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  const locales = ["id", "en"];

  // Semua route statis
  const routes = ["", "about-me", "contact", "pdf", "projects"];

  // Kombinasikan locale + route
  const sitemapEntries = locales.flatMap((locale) =>
    routes.map((route) => {
      const url =
        route === ""
          ? `${baseUrl}/${locale}`
          : `${baseUrl}/${locale}/${route}`;

      return {
        url,
        lastModified: new Date(),
      };
    })
  );

  return sitemapEntries;
}
