"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { fontCinzel } from "@/constant/fonts";
import * as motion from "motion/react-client";
import { ProjectCardData } from "@/@types/Projects";
import { getInternationalizationValue } from "@/utils/getInternationalizationValue";
import { useLocale, useTranslations } from "next-intl";
import { UiBadge } from "@/components/atoms/UiBadge";
import { VARIABEL_IMAGE_SIZE } from "@/constant/variables";

interface ProjectCardProps {
  data: ProjectCardData;
  index?: number;
  animate?: boolean;
  delay?: number;
  onClick?: () => void;
}

function hasLiveUrl(
  data: ProjectCardData
): data is ProjectCardData & { liveUrl: string } {
  return "liveUrl" in data && typeof data.liveUrl === "string";
}

export function ProjectCard({
  data,
  index = 0,
  animate = true,
  delay = 0.3 * index,
  onClick,
}: ProjectCardProps) {
  const locale = useLocale();
  const t = useTranslations();

  const Wrapper = onClick ? motion.div : motion.a;

  const wrapperProps = onClick
    ? {
        onClick,
        role: "button" as const,
        className: "cursor-pointer",
      }
    : hasLiveUrl(data)
      ? {
          href: data.liveUrl,
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {};

  return (
    <Wrapper
      {...wrapperProps}
      initial={animate ? { opacity: 0, y: 60 } : undefined}
      animate={animate ? { opacity: 1, y: 0 } : undefined}
      transition={animate ? { duration: 0.5, delay } : undefined}
      className="block cursor-pointer"
    >
      <div
        className="
          bg-white/10 backdrop-blur-lg
          border border-white/20 
          rounded-2xl 
          p-3 sm:p-4 
          transition-all duration-300 
          hover:scale-[1.02]
          hover:border-white/40 
          hover:bg-white/20
          shadow-[0_0_20px_rgba(0,0,0,0.2)]
        "
      >
        {/* Image */}
        <div className="relative w-full h-40 sm:h-48 lg:h-56 rounded-xl overflow-hidden mb-3 sm:mb-4">
          <Image
            alt={data.image.imageAlt}
            src={data.image.imageSrc}
            fill
            priority={index > 4}
            sizes={VARIABEL_IMAGE_SIZE.BASIC}
            className="object-cover"
          />
        </div>

        {/* Title */}
        <h3
          className={cn(
            fontCinzel.className,
            "text-lg sm:text-xl font-semibold text-white mb-2"
          )}
        >
          {data.title}
        </h3>

        {/* Short Desc for /projects only */}
        {"shortDesc" in data && (
          <p className="text-white/80 text-sm mb-2 line-clamp-2">
            {getInternationalizationValue(data.shortDesc, locale)}
          </p>
        )}

        {/* Stacks */}
        <div className="flex flex-wrap gap-2 mt-1">
          {data.techStack.slice(0, 3).map((tech, i) => {
            const totalTech = data.techStack.length;
            const isLast = totalTech > 2 && i === 2;

            return (
              <UiBadge key={i}>
                {isLast ? `${totalTech - 2} ${t("General.More")}` : tech}
              </UiBadge>
            );
          })}
        </div>

        {/* Categories */}
        {"categories" in data && (
          <div className="flex flex-wrap gap-2 mt-3">
            {data.categories.slice(0, 3).map((cat, i, arr) => {
              const total = data.categories.length;
              const isLast = total > 2 && i === arr.length - 1;

              return (
                <UiBadge key={cat} variant="outline">
                  {isLast ? `${total - 2} ${t("General.More")}` : cat}
                </UiBadge>
              );
            })}
          </div>
        )}
      </div>
    </Wrapper>
  );
}
