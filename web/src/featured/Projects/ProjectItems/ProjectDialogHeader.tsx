import { ProjectCard } from "@/@types/Projects";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { fontCinzel } from "@/constant/fonts";
import { getInternationalizationValue } from "@/utils/getInternationalizationValue";
import { useLocale } from "next-intl";
import Image from "next/image";

interface Props {
  data: ProjectCard | null;
}

export function ProjectDialogHeader({ data }: Props) {
  const locale = useLocale();
  if (!data) return null;

  return (
    <DialogHeader className="px-6 pt-6 pb-2 space-y-4">
      {/* Title */}
      <DialogTitle
        className={`${fontCinzel.className} text-2xl font-semibold tracking-wide text-center text-white`}
      >
        {data.title}
      </DialogTitle>

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
          className="object-cover w-full h-full"
        />
      </div>

      {/* Full Description */}
      {data.fullDesc && (
        <DialogDescription
          className="
            mt-2
            text-white/70
            text-sm
            leading-relaxed
          "
        >
          {getInternationalizationValue(data.fullDesc, locale)}
        </DialogDescription>
      )}
    </DialogHeader>
  );
}
