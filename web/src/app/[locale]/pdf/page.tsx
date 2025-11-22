import MyDocument from "@/components/templates/PortofolioDocument";
import { getPDFData } from "@/lib/pdf/fetcher";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV",
};

export default async function CVPage() {
  const pdfData = await getPDFData();

  return <MyDocument pdfData={pdfData} />;
}
