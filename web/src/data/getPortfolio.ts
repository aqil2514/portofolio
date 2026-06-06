import { PDFDocument } from "@/@types/PDF";
import education from "../../data/portfolio/education.json";
import experience from "../../data/portfolio/experience.json";
import projects from "../../data/portfolio/projects.json";
import skills from "../../data/portfolio/skills.json";
import summary from "../../data/portfolio/summary.json";

export function getPortfolio(): PDFDocument {
  return { education, experience, projects, skills, summary } as unknown as PDFDocument;
}
