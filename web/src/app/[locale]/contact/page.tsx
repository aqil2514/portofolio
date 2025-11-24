import ContactMeTemplate from "@/components/templates/ContactMetemplate";
import { Metadata } from "next";

export const metadata:Metadata = {
    title:"Contact Me"
}

export default async function ContactMe(){
    return <ContactMeTemplate />
}