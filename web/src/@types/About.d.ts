import { BasicImage, ImageWithLink } from "./General";

export interface AboutHeroSection {
  title: string;
  description: string;
}

export interface WhoAmIItemType {
  content: string;
  imageAlt: string;
  imageSrc: string;
  subTitle: string;
  title: string;
  CtaButton?: WhoAmIItemButtonId;
}

export type WhoAmIItemButtonId = "none" | "download-cv";

export interface CoreSkillType {
  skillField: string;
  skillLevel: string;
  skillList: string[];
}

export interface ProductPhilosophyType {
  title: string;
  description: string;
}

export interface RoadmapAbout {
  title: string;
  date: string;
  description: string;
  learningSkill?: BasicImage[];
  certificates?: ImageWithLink[];
}
