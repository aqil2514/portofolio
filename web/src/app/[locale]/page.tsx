import HomeTemplate from "@/components/templates/HomeTemplate";
import { Metadata } from "next";

export const metadata:Metadata = {
  title:"Home | Muhamad Aqil Maulana"
}

export default async function Home() {
  return <HomeTemplate />;
}
