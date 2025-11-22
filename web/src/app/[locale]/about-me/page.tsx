import AboutMeTemplate from "@/components/templates/AboutMeTemplate";
import { getAboutPageCms } from "@/sanity/actions/aboutPage";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "About Me",
};

export default async function AboutMePage() {
  const [data, locale] = await Promise.all([getAboutPageCms(), getLocale()]);

  return <AboutMeTemplate data={data} locale={locale} />;
}
