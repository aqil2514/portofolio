import * as motion from "motion/react-client";
import { BasicLink } from "@/@types/General";
import { fontCinzel } from "@/constant/fonts";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigations";
import { getTranslations } from "next-intl/server";

const items: BasicLink[] = [
  { label: "about-me", link: "/about-me" },
  { label: "contact-me", link: "#" },
];

export async function CTAButton() {
  const t = await getTranslations("HomePage");

  return (
    <section
      className="
        flex flex-wrap justify-center 
        gap-3 sm:gap-6 
        relative z-10
      "
    >
      {items.map((item, index) => (
        <Link key={item.label} href={item.link}>
          <motion.div
            className="
            p-0.5 rounded-xl 
            bg-linear-to-r from-[#456882] to-[#0989e4]
          "
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.5 }}
          >
            <button
              className={cn(
                fontCinzel.className,
                `
              rounded-xl bg-black text-white 
              transition-all duration-100 
              hover:bg-transparent active:scale-95 font-semibold cursor-pointer
              px-4 py-2             
              sm:px-6 sm:py-2     
              w-full sm:w-auto    
            `
              )}
            >
              {t(item.label as "about-me" | "contact-me")}
            </button>
          </motion.div>
        </Link>
      ))}
    </section>
  );
}
