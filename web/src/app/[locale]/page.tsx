import HomeTemplate from "@/components/templates/HomeTemplate";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Locale } from "@/@types/Sanity";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const titleLocale: Record<Locale, string> = {
    id: "Beranda | Muhamad Aqil Maulana",
    en: "Home | Muhamad Aqil Maulana",
  };

  return {
    title: titleLocale[locale],
    description:
      locale === "id"
        ? "Beranda portofolio dan profil profesional Muhamad Aqil Maulana."
        : "Homepage of the professional portfolio of Muhamad Aqil Maulana.",
  };
}

export default async function Home() {
  return <HomeTemplate />;
}
