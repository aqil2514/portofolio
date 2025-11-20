export interface Projects {
  imageSrc: string;
  imageAlt: string;
  title: string;
  previewLink:string;
  stacks: string[];
}

export type ProjectSummary = Pick<
  Projects,
  "imageAlt" | "imageSrc" | "stacks" | "title" | "previewLink"
>;


// DARI CHATGPT
export interface ProjectCard {
  /** Unique ID */
  id: string;

  /** Project title in multiple languages */
  title: {
    id: string;
    en: string;
  };

  /** Short description */
  shortDesc: {
    id: string;
    en: string;
  };

  /** Full description for detail modal/page */
  fullDesc?: {
    id: string;
    en: string;
  };

  /** Featured image */
  image: {
    src: string;
    alt: string;
    caption?: string;
  };

  /** Demo links */
  links?: {
    liveDemo?: string;
    adminDemo?: string;
    apiDocs?: string;
    repo?: string;
    download?: string;
  };

  /** Demo video (optional) */
  demoVideo?: string;

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

  /** Key features of the project */
  features?: {
    id: string; // Indonesian description
    en: string; // English description
  }[];

  /** Extra demo per feature */
  featureDemos?: {
    title: string;
    demoUrl: string;
  }[];

  /** Is the project still maintained? */
  status?: "active" | "archived" | "prototype";
}
