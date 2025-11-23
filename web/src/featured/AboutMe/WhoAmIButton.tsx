import { WhoAmIItemButtonId } from "@/@types/About";
import { FancyButton } from "@/components/atoms/FancyButton";
import { Link } from "@/i18n/navigations";
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
    </div>
  );
};
