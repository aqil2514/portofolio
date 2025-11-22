import { PDFDocument, SummarySection } from "@/@types/PDF";
import { getAboutPageCms } from "@/sanity/actions/aboutPage";
import { getInternationalizationValue } from "@/utils/getInternationalizationValue";
import { getLocale } from "next-intl/server";

export async function getPDFData(): Promise<PDFDocument> {
  const [summary] = await Promise.all([getPdfSummary()]);

  const data: PDFDocument = {
    summary,
    education: {} as PDFDocument["education"],
    experience: {} as PDFDocument["experience"],
    projects: {} as PDFDocument["projects"],
    skills: {} as PDFDocument["skills"],
  };

  return data;
}

export async function getPdfSummary(): Promise<SummarySection> {
  const [raw, locale] = await Promise.all([getAboutPageCms(), getLocale()]);

  return {
    title: locale === "en" ? "SUMMARY" : "RINGKASAN PROFIL",
    item: getInternationalizationValue(raw.whoAmI[1].content, locale),
  };
}
