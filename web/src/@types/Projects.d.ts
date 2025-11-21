import { BasicImage } from "./General";
import { InternationalizedArray } from "./Sanity";

export interface Projects {
  imageSrc: string;
  imageAlt: string;
  title: string;
  previewLink: string;
  stacks: string[];
}

export type ProjectSummary = Pick<
  Projects,
  "imageAlt" | "imageSrc" | "stacks" | "title" | "previewLink"
>;

export type ProjectStatus = "live" | "archived" | "on-progress";

export interface SubDemoTypes {
  description: InternationalizedArray;
  title: string;
  videoUrl: string;
}

// DARI CHATGPT
export interface ProjectCard {
  /** Unique ID */
  id: string;

  /** Project title in multiple languages */
  title: string;

  /** Short description */
  shortDesc: InternationalizedArray;

  /** Full description for detail modal/page */
  fullDesc?: InternationalizedArray;

  /** Featured image */
  image: BasicImage;

  /** Demo links */
  subDemos?: SubDemoTypes[];

  /** Demo video (optional) */
  mainDemo?: string;

  status: ProjectStatus;

  /** Technology stacks used */
  techStack: string[];

  /** Skill groups this project relates to */
  categories: (
    | "Frontend"
    | "Backend"
    | "Database"
    | "DevOps"
    | "Automation"
    | "AI Integration"
    | "Product Engineering"
  )[];
}
