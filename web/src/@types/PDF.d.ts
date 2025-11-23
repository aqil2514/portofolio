import { InternationalizedArray } from "./Sanity";

export interface PDFDocument {
  summary: SummarySection;
  experience: ExperienceSection;
  education: EducationSection;
  skills: SkillsSection;
  projects: ProjectsSection;
}

export interface SummarySection {
  title: InternationalizedArray[];
  item: InternationalizedArray[];
}

export interface ExperienceItem {
  bullets: {
    text: InternationalizedArray[];
  }[];
  company: string;
  endDate: string;
  jobTitle: InternationalizedArray[];
  location: InternationalizedArray[];
  startDate: string;
}

export interface ExperienceSection {
  title: InternationalizedArray[];
  items: ExperienceItem[];
}

export interface EducationItem {
  degree: InternationalizedArray[];
  endDate: string;
  gpa: string;
  location: string;
  major: InternationalizedArray[];
  startDate: string;
  university: string;
}

export interface EducationSection {
  title: InternationalizedArray[];
  items: EducationItem[];
}

export interface SkillsSection {
  title: InternationalizedArray[];
  skills: SkillItem[];
}

export interface SkillItem{
  label:string;
  value:string;
}

export interface ProjectItem {
  bullets: {
    text: InternationalizedArray[];
  }[];
  endDate: string;
  role?: InternationalizedArray[];
  startDate: string;
  title: InternationalizedArray[];
}

export interface ProjectsSection {
  title: InternationalizedArray[];
  items: ProjectItem[];
}
