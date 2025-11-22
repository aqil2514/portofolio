export interface PDFDocument {
  summary: SummarySection;
  experience: ExperienceSection;
  education: EducationSection;
  skills: SkillsSection;
  projects: ProjectsSection;
}

export interface SummarySection {
  title: string;
  item: string;
}

export interface ExperienceItem {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface ExperienceSection {
  title: string;
  items: ExperienceItem[];
}

export interface EducationItem {
  degree: string;
  major: string;
  university: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

export interface EducationSection {
  title: string;
  items: EducationItem[];
}

export interface SkillsSection {
  title: string;
  skills: string[];
}

export interface ProjectItem {
  title: string;
  role?: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface ProjectsSection {
  title: string;
  items: ProjectItem[];
}
