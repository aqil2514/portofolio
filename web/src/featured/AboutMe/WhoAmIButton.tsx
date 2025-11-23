import { WhoAmIItemButtonId } from "@/@types/About";
import { FancyButton } from "@/components/atoms/FancyButton";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from "@/i18n/navigations";
import { Info } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

interface Props {
  buttonId: WhoAmIItemButtonId;
}

export function WhoAmIButton({ buttonId }: Props) {
  if (buttonId === "download-cv") return <DownloadItem />;
  return null;
}

const DownloadItem = () => {
  const t = useTranslations("AboutPage");
  const locale = useLocale();

  return (
    <div className="flex gap-2 items-center">
      <Link href={"/pdf"} target="_blank">
        <FancyButton>{t("whoAmIseeCV")}</FancyButton>
      </Link>

      <a href={`/api/cv?locale=${locale}`} target="_blank">
        <FancyButton>{t("whoAmIDownloadCV")}</FancyButton>
      </a>

      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            className="p-1 rounded-full hover:bg-white/10 transition"
          >
            <Info size={16} className="text-white opacity-70" />
          </button>
        </TooltipTrigger>

        <TooltipContent side="top">
          <p className="text-xs">{t("cvLanguageNote")}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};