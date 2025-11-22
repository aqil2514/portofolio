"use client";

import { PDFViewer } from "@react-pdf/renderer";
import { PDFDocument } from "../pdf/Document";
import { PDFDocument as PDFDocumentType } from "@/@types/PDF";

interface Props {
  pdfData: PDFDocumentType;
}

export default function MyDocument({ pdfData }: Props) {
  return (
    <PDFViewer className="w-full h-screen">
      <PDFDocument pdfData={pdfData} />
    </PDFViewer>
  );
}
