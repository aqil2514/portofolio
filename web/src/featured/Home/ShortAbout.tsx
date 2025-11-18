import * as motion from "motion/react-client";
import Image from "next/image";
import { fontCinzel, fontPrompt } from "@/constant/fonts";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export function ShortAbout() {
  const t = useTranslations("HomePage");

  return (
    <motion.section
      className="relative z-10 px-4 sm:px-6 text-center space-y-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
    >
      {/* Title */}
      <motion.h2
        className={cn(
          fontCinzel.className,
          `
          text-2xl sm:text-3xl 
          text-white 
          font-semibold 
          tracking-wide 
          mb-6 sm:mb-10
        `
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {t("about-me")}
      </motion.h2>

      {/* Optional Profile Photo */}
      <motion.div
        className="flex justify-center mb-4 sm:mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-white/20 shadow-lg shadow-black/40">
          <Image
            src="/me.jpg"
            alt="Aqil Profile"
            width={150}
            height={150}
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Description */}
      <motion.p
        className={cn(
          fontPrompt.className,
          `
          text-white/90 
          max-w-md sm:max-w-xl 
          mx-auto 
          leading-relaxed 
          text-base sm:text-[17px]
        `
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        My name is Aqil, a full-stack developer who enjoys building digital
        systems, AI-powered automation, and real-world projects that people
        actually use.
      </motion.p>

      {/* CTA Row */}
      <motion.div
        className="
          flex flex-col sm:flex-row 
          items-center sm:items-center 
          justify-between 
          gap-3 sm:gap-4 
          text-center sm:text-left
          mt-4
        "
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2
          className={cn(
            fontCinzel.className,
            `
            text-white
            text-lg sm:text-xl
            font-semibold
          `
          )}
        >
          {t("wantToWorkTogether")}
        </h2>

        <button
          className={cn(
            fontPrompt.className,
            `
            text-white 
            border border-white 
            rounded-2xl 
            py-1 px-4 
            text-sm sm:text-base
            hover:bg-white/10 
            transition
          `
          )}
        >
          {t("contact-me")}
        </button>
      </motion.div>
    </motion.section>
  );
}
