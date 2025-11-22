import { Document, Page } from "@react-pdf/renderer";
import { PDFHeader } from "./PDFHeader";
import { styles } from "./styles";
import { PDFSummary } from "./PDFSummary";
import { PDFExperience } from "./PDFExperience";
import { PDFEducation } from "./PDFEducation";
import { PDFSkills } from "./PDFSkills";
import { PDFProjects } from "./PDFProjects";
import { PDFDocument as PDFDocumentType } from "@/@types/PDF";

interface Props {
  pdfData: PDFDocumentType;
}

export function PDFDocument({ pdfData }: Props) {
  return (
    <Document
      title="Muhamad Aqil Maulana - Full Stack Developer CV"
      author="Muhamad Aqil Maulana"
      subject="Full Stack Developer Curriculum Vitae"
      creator="cv.maqilm.site"
      producer="React-PDF"
    >
      <Page size="A4" style={styles.page}>
        <PDFHeader />
        <PDFSummary data={pdfData.summary} />
        <PDFExperience />
        <PDFEducation />
        <PDFSkills />
        <PDFProjects />
      </Page>
    </Document>
  );
}
