import { BannerContactMe } from "@/featured/ContactMe/BannerContactMe";
import { MainContainer } from "../layouts/containers/MainContainer";
import { ContactProvider } from "@/featured/ContactMe/provider";
import { FormMessage } from "@/featured/ContactMe/FormMessage";
import { LeftSide } from "@/featured/ContactMe/LeftSide";

export default function ContactMeTemplate() {
  return (
    <ContactProvider>
      <MainContainer
        className="
        bg-linear-to-b
        from-[#0f1f2e]
        via-[#12354a]
        to-[#153f55]
        pb-20
    "
      >
        <BannerContactMe />

        <div className="space-y-4 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* <ToggleMessage /> */}
            <LeftSide />
            <FormMessage />
          </div>
        </div>
      </MainContainer>
    </ContactProvider>
  );
}
