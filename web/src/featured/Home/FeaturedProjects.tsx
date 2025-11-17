import { ProjectSummary } from "@/@types/Projects";
import { fontCinzel} from "@/constant/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

const items: ProjectSummary[] = [
  {
    title: "Dragon 8 Travel",
    imageAlt: "Dragon 8 Travel",
    imageSrc: "/fsd-dragon8.webp",
    stacks: ["Next.js", "Tailwind", "Supabase"],
  },
  {
    title: "Studinesia",
    imageAlt: "Studinesia Blog",
    imageSrc: "/fsd-studinesia-nextjs.webp",
    stacks: ["Next.js", "AI Automation", "Supabase"],
  },
];

export function FeaturedProjects() {
  return (
    <section className="relative z-10 px-6">
      <h2
        className={cn(
          fontCinzel.className,
          "text-center text-3xl font-semibold text-white mb-12 tracking-wide"
        )}
      >
        Featured Projects
      </h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {items.map((item) => (
          <div
            key={item.title.toLowerCase()}
            className="
              bg-white/10 backdrop-blur-lg
              border border-white/20 
              rounded-2xl 
              p-4 
              transition-all duration-300 
              hover:scale-[1.02]
              hover:border-white/40 
              hover:bg-white/20
              shadow-[0_0_20px_rgba(0,0,0,0.2)]
            "
          >

            {/* Image Wrapper */}
            <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
              <Image
                alt={item.imageAlt}
                src={item.imageSrc}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <h3
              className={cn(
                fontCinzel.className,
                "text-xl font-semibold text-white mb-1"
              )}
            >
              {item.title}
            </h3>

            {/* Stacks */}
            <div className="flex flex-wrap gap-2 mt-2">
              {item.stacks.map((tech) => (
                <span
                  key={tech}
                  className="
                    text-white/85 text-sm px-3 py-1 
                    rounded-md border border-white/20 
                    bg-white/5
                    backdrop-blur-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA: View All */}
      <div className="mt-10 text-center">
        <button
          className={cn(
            fontCinzel.className,
            "px-6 py-2 border border-white/30 text-white rounded-lg cursor-pointer",
            "transition-all hover:bg-white/10 hover:border-white/50"
          )}
        >
          View All Projects
        </button>
      </div>
    </section>
  );
}
