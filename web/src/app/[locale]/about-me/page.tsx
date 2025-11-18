import AboutMeTemplate from "@/components/templates/AboutMeTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutMePage(){
    return <AboutMeTemplate />
}