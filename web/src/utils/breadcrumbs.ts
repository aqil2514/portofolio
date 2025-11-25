export function generateBreadcrumbSchema({
  locale,
  path,
  name,
}: {
  locale: string;
  path: string;
  name: string;
}) {
  const baseUrl = "https://maqilm-portofolio.vercel.app";

  const localizedUrl = `${baseUrl}/${locale}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "id" ? "Beranda" : "Home",
        item: `${baseUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name,
        item: localizedUrl,
      },
    ],
  };
}
