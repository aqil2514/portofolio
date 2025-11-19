import AboutMeTemplate from "@/components/templates/AboutMeTemplate";
import { getAbutPageCms } from "@/sanity/actions/aboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

export default async function AboutMePage() {
  const data = await getAbutPageCms();

  return <AboutMeTemplate data={data} />;
}
