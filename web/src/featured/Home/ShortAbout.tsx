import Image from "next/image";
import { fontCinzel, fontPrompt } from "@/constant/fonts";
import { cn } from "@/lib/utils";

export function ShortAbout() {
  return (
    <section className="relative z-10 px-6 text-center space-y-6">
      {/* Title */}
      <h2
        className={cn(
          fontCinzel.className,
          "text-3xl text-white font-semibold tracking-wide mb-10"
        )}
      >
        About Me
      </h2>

      {/* Optional Profile Photo */}
      <div className="flex justify-center mb-6">
        <div className="w-28 h-28 rounded-full overflow-hidden border border-white/20 shadow-lg shadow-black/40">
          <Image
            src="/me.jpg"
            alt="Aqil Profile"
            width={150}
            height={150}
            className="object-cover"
          />
        </div>
      </div>

      {/* Description */}
      <p
        className={cn(
          fontPrompt.className,
          "text-white/90 max-w-xl mx-auto leading-relaxed text-[17px]"
        )}
      >
        My name is Aqil, a full-stack developer who enjoys building digital
        systems, AI-powered automation, and real-world projects that people
        actually use.
      </p>

      <div className="text-left flex justify-between gap-4 items-center">
        <h2 className={cn(fontCinzel.className, "text-white")}>
          Want to work together?
        </h2>
        <button
          className={cn(
            fontPrompt.className,
            "text-white border border-white rounded-2xl p-1 px-3"
          )}
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}
