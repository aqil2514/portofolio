import { BasicLink } from "@/@types/General";
import { fontCinzel } from "@/constant/fonts";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const items: BasicLink[] = [
  {
    label: "About Me",
    link: "#",
  },
  {
    label: "Contact Me",
    link: "#",
  },
];

export function CTAButton() {
  const router = useRouter();

  return (
    <section className="flex gap-6 relative z-10">
      {/* Outer gradient wrapper */}
      {items.map((item) => (
        <div
          key={item.label}
          className="p-0.5 rounded-xl bg-linear-to-r to-[#0989e4] from-[#456882]"
        >
          {/* Inner button (black) */}
          <button
            className={cn(
              fontCinzel.className,
              "px-6 py-2 rounded-xl bg-black text-white transition-all duration-100 hover:bg-transparent active:scale-95 font-semibold cursor-pointer"
            )}
            onClick={() => router.push(item.link)}
          >
            {item.label}
          </button>
        </div>
      ))}
    </section>
  );
}
