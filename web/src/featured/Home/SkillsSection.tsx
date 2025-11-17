import { fontCinzel, fontPrompt } from "@/constant/fonts";
import { cn } from "@/lib/utils";

const skills = [
  "Next.js",
  "NestJS",
  "Supabase",
  "PostgreSQL",
  "TailwindCSS",
  "Docker",
  "n8n",
  "Cloudflare",
];

export function SkillsSection() {
  return (
    <div className="relative z-10 flex items-center gap-4">
      <h2 className={cn(fontCinzel.className, "text-white/80 text-sm tracking-wide")}>
        Skills & Tools =&gt;
      </h2>
      <div className="flex gap-4 ">
        {skills.map((skill) => (
          <div className={cn(fontPrompt.className,"bg-linear-to-r from-[#06385c] to-[#456882] text-white py-0.5 px-2 rounded-2xl")} key={skill.toLowerCase()}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
