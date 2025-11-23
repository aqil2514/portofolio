import MyDocument from "@/components/templates/PortofolioDocument";
import { getAllCVData } from "@/sanity/actions/cv";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "CV",
};

export default async function CVPage() {
  const [data, locale] = await Promise.all([getAllCVData(), getLocale()]);

  return <MyDocument pdfData={data} locale={locale} />;
}
