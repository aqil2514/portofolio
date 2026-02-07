import { useTranslations } from "next-intl";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";

import { IconType } from "react-icons/lib";

interface SosmedType {
  icon: IconType;
  title: string;
  link: string;
}

const sosmedAccounts: SosmedType[] = [
  {
    title: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/muhammadaqil2514",
  },
  {
    title: "Github",
    icon: FaGithub,
    link: "https://github.com/aqil2514/",
  },
  {
    title: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/aqil.co.id/",
  },
  {
    title: "Whatsapp",
    icon: FaWhatsapp,
    link: "https://wa.me/6285693273746/",
  },
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/aqil2514/",
  },
  {
    title: "Fiverr",
    icon: TbBrandFiverr,
    link: "https://www.fiverr.com/s/jjZLA9v/",
  },
];

export function SocialAccounts() {
  const t = useTranslations("Contact");
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold tracking-wide text-center">
        {t("meet-my-social-account")}:
      </h2>
      <div className="flex justify-center gap-4 flex-wrap">
        {sosmedAccounts.map((sosmed) => (
          <a href={sosmed.link} target="_blank" key={sosmed.title}>
            <div
              className="cursor-pointer hover:scale-105 active:scale-100 duration-200"
              title={sosmed.title}
            >
              <sosmed.icon size={48} className="size-12 md:size-14" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
