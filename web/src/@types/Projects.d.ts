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
