import { BasicImage, ImageWithLink } from "./General";

export interface RoadmapAbout {
  title: string;
  date: string;
  description: string;
  learningSkill?: BasicImage[];
  certificates?: ImageWithLink[];
}
