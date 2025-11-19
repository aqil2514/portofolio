import { WhoAmIItemButtonId } from "./About";

export type Locale = "en" | "id";

export interface InternationalizedArray {
  _key: Locale;
  _type: string;
  value: string;
}

export interface PageAboutTypes {
  coreSkill: {
    skillField: string
    skillLevel: "beginner" | "intermediate" | "advanced"
    skillList: string[]
  }[]

  hero: {
    title: InternationalizedArray[]
    description: InternationalizedArray[]
  }

  productPhilosophy: {
    title: InternationalizedArray[]
    description: InternationalizedArray[]
  }[]

  roadmapTimeline: {
    date: string
    title: InternationalizedArray[]
    description: InternationalizedArray[]
    learningSkill: {
      label: string
      imageSrc: string
      imageAlt: string
    }[]
    certificates: {
      label: string
      imageSrc: string
      imageAlt: string
      link: string
    }[]
  }[]

  whoAmI: {
    title: InternationalizedArray[]
    content: InternationalizedArray[]
    subtitle: InternationalizedArray[]
    ctaButtonId: WhoAmIItemButtonId
    imageSrc: string
    imageAlt: string
  }[]
}
