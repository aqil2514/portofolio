"use client";

import { PDFViewer } from "@react-pdf/renderer";
import { PDFDocument } from "../pdf/Document";
import { PDFDocument as PDFDocumentType } from "@/@types/PDF";
import { LocaleLang } from "@/@types/General";

interface Props {
  pdfData: PDFDocumentType;
  locale:LocaleLang;
}

export default function MyDocument({ pdfData, locale }: Props) {
  return (
    <PDFViewer className="w-full h-screen">
      <PDFDocument pdfData={pdfData} locale={locale} />
    </PDFViewer>
  );
}
