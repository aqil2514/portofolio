import { PageAboutTypes } from "@/@types/types";
import coreSkill from "../../data/about/core-skill.json";
import hero from "../../data/about/hero.json";
import productPhilosophy from "../../data/about/product-philosophy.json";
import roadmapTimeline from "../../data/about/roadmap-timeline.json";
import whoAmI from "../../data/about/who-am-i.json";

export function getAboutPage(): PageAboutTypes {
  return {
    coreSkill,
    hero,
    productPhilosophy,
    roadmapTimeline,
    whoAmI,
  } as unknown as PageAboutTypes;
}
