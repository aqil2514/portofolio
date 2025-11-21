import { defineQuery } from "next-sanity";

const mapping = `{
  hero{
    title,
    description
  },
  whoAmI[]{
    content,
    "imageSrc": imageSrc.asset->url,
    imageAlt,
    title,
    subtitle,
    ctaButtonId
  },
  coreSkill[]{
    skillField,
    skillLevel,
    skillList
  },
  productPhilosophy[]{
    title,
    description
  },
  roadmapTimeline[]{
    title,
    description,
    date,
    learningSkill[]{
      label,
      "imageSrc":imageSrc.asset -> url,
      imageAlt
    },
    certificates[]{
      label,
      "imageSrc":imageSrc.asset -> url,
      imageAlt,
      link
    }
  }
}`

export const aboutPageGroq = defineQuery(`*[_type=="about-page"][0]${mapping}`);
