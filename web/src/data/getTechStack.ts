import techStackData from "../../data/tech-stack.json";

export function getTechStack(): string[] {
  return techStackData as string[];
}
