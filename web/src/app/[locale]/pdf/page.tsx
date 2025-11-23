import MyDocument from "@/components/templates/PortofolioDocument";
import { getAllCVData } from "@/sanity/actions/cv";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return {
    title: `CV ${locale.toUpperCase()}`,
  };
}

export default async function CVPage() {
  const [data, locale] = await Promise.all([getAllCVData(), getLocale()]);

  return <MyDocument pdfData={data} locale={locale} />;
}
