import { ProjectCard, ProjectCategory } from "@/@types/Projects";
import dragon8Travel from "../../data/projects/dragon-8-travel.json";
import kompasianaScrapper from "../../data/projects/kompasiana-scrapper.json";
import miniQuiz from "../../data/projects/mini-quiz.json";
import developerPortfolioPlatform from "../../data/projects/developer-portfolio-platform.json";
import flowtooly from "../../data/projects/flowtooly.json";
import n8nAutomation from "../../data/projects/n8n-automation.json";
import internalOperatingSystem from "../../data/projects/internal-operating-system.json";
import studinesia from "../../data/projects/studinesia.json";
import cromachainPresale from "../../data/projects/cromachain-presale.json";
import retailku from "../../data/projects/retailku.json";

const projectsData = [
  dragon8Travel,
  kompasianaScrapper,
  miniQuiz,
  developerPortfolioPlatform,
  flowtooly,
  n8nAutomation,
  internalOperatingSystem,
  studinesia,
  cromachainPresale,
  retailku,
];

export function getProjectsData(): ProjectCard[] {
  return projectsData as unknown as ProjectCard[];
}

export function getProjectCategories(): ProjectCategory[] {
  const all = projectsData.flatMap((p) => p.categories ?? []);
  return Array.from(new Set(all)).sort() as ProjectCategory[];
}

export function getProjectTechStack(): string[] {
  const all = projectsData.flatMap((p) => p.techStack ?? []);
  return Array.from(new Set(all)).sort();
}
