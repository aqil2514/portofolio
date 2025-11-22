import { ProjectCard } from "@/@types/Projects";
import { BadgeVariants, UiBadge } from "@/components/atoms/UiBadge";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { fontCinzel } from "@/constant/fonts";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

interface Props {
  data: ProjectCard | null;
}

export function ProjectDialogHeader({ data }: Props) {
  const t = useTranslations();
  if (!data) return null;

  return (
    <DialogHeader className="px-6 pt-6 pb-2 space-y-4">
      {/* Title */}
      <DialogTitle
        className={`${fontCinzel.className} text-2xl font-semibold tracking-wide text-center text-white`}
      >
        {data.title}
      </DialogTitle>

      <DialogDescription></DialogDescription>

      {/* Image wrapper */}
      <div
        className="
          relative 
          w-full 
          rounded-xl 
          overflow-hidden
          max-h-80 sm:max-h-[380px] lg:max-h-[420px]
        "
      >
        <Image
          src={data.image.imageSrc}
          alt={data.image.imageAlt}
          width={1000}
          height={600}
          loading="eager"
          className="object-cover w-full h-full"
        />
      </div>

      <BadgeItem
        data={data.techStack}
        title={t("General.techStack")}
        variant="fill"
      />
      <BadgeItem
        data={data.categories}
        title={t("General.category")}
        variant="outline"
      />
    </DialogHeader>
  );
}

const BadgeItem: React.FC<{
  title: string;
  data: string[];
  variant: BadgeVariants;
}> = ({ data, title, variant }) => {
  return (
    <div className="space-y-4">
      <p className={cn(fontCinzel.className, "font-semibold")}>{title}</p>
      <div className="flex gap-4 flex-wrap">
        {data.map((item) => (
          <UiBadge key={item} variant={variant}>
            {item}
          </UiBadge>
        ))}
      </div>
    </div>
  );
};
