import { Document, Page } from "@react-pdf/renderer";
import { PDFHeader } from "./PDFHeader";
import { styles } from "./styles";
import { PDFSummary } from "./PDFSummary";
import { PDFExperience } from "./PDFExperience";
import { PDFEducation } from "./PDFEducation";
import { PDFSkills } from "./PDFSkills";
import { PDFProjects } from "./PDFProjects";
import { PDFDocument as PDFDocumentType } from "@/@types/PDF";
import { LocaleLang } from "@/@types/General";

interface Props {
  pdfData: PDFDocumentType;
  locale: LocaleLang;
}

export function PDFDocument({ pdfData, locale }: Props) {
  return (
    <Document
      title="Muhamad Aqil Maulana - Full Stack Developer CV"
      author="Muhamad Aqil Maulana"
      subject="Full Stack Developer Curriculum Vitae"
      creator="cv.maqilm.site"
      producer="React-PDF"
      language={locale}
    >
      <Page size="A4" style={styles.page}>
        <PDFHeader />
        <PDFSummary data={pdfData.summary} locale={locale} />
        <PDFExperience data={pdfData.experience} locale={locale} />
        <PDFEducation data={pdfData.education} locale={locale} />
      </Page>
      <Page size="A4" style={styles.page}>
        <PDFSkills data={pdfData.skills} locale={locale} />
        <PDFProjects data={pdfData.projects} locale={locale} />
      </Page>
    </Document>
  );
}
