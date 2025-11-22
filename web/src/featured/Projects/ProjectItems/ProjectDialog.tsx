import { ProjectCard } from "@/@types/Projects";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ProjectDialogHeader } from "./ProjectDialogHeader";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLocale, useTranslations } from "next-intl";
import { getInternationalizationValue } from "@/utils/getInternationalizationValue";
import { CheckCircle } from "lucide-react";
import { FancyButton } from "@/components/atoms/FancyButton";

interface Props {
  data: ProjectCard | null;
  setData: (d: ProjectCard | null) => void;
}

export function ProjectDialog({ data, setData }: Props) {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <Dialog open={!!data} onOpenChange={(open) => !open && setData(null)}>
      <DialogContent
        className="
          sm:max-w-6xl 
          sm:w-[95%] w-[95%]
          bg-white/10 backdrop-blur-xl
          border border-white/20
          text-white
          rounded-2xl
          shadow-[0_0_30px_rgba(0,0,0,0.4)]
          p-0
          overflow-hidden
        "
      >
        {/* ScrollArea membungkus semua isi dialog */}
        <ScrollArea className="max-h-[80vh] w-full">
          {/* HEADER */}
          <ProjectDialogHeader data={data} />

          {/* CONTENT */}
          {data?.fullDesc && (
            <div className="px-6 pb-6">
              <h3 className="text-white/90 text-lg font-semibold tracking-wide">
                {t("ProjectsPage.projectDescription")}
              </h3>
              <p className="text-white/85 mt-4 text-sm leading-relaxed">
                {getInternationalizationValue(data.fullDesc, locale)}
              </p>
            </div>
          )}

          {/* Fitur */}
          {data?.features && (
            <div className="px-6 pt-4 pb-8 space-y-3">
              <h3 className="text-white/90 text-lg font-semibold tracking-wide">
                {t("General.features")}
              </h3>

              <ul className="space-y-3">
                {data.features.map((feature) => (
                  <li
                    key={feature._key}
                    className="
            flex items-center gap-3 
            text-white/85 text-sm leading-relaxed
          "
                  >
                    {/* Bullet icon */}
                    <CheckCircle className="w-4 h-4 text-white/70 mt-0.5 shrink-0" />

                    {/* Feature text */}
                    <span>{feature[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex px-6 gap-4 pb-6">
            {data?.liveUrl && (
              <a href={data.liveUrl} target="_blank">
                <FancyButton>{t("ProjectsPage.liveLabel")}</FancyButton>
              </a>
            )}
            {data?.sourceCode && (
              <a href={data.sourceCode} target="_blank">
                <FancyButton>{t("ProjectsPage.sourceCodeLabel")}</FancyButton>
              </a>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
