import { BannerContactMe } from "@/featured/ContactMe/BannerContactMe";
import { MainContainer } from "../layouts/containers/MainContainer";
import { ToggleMessage } from "@/featured/ContactMe/ToggleMessage";

export default function ContactMeTemplate() {
  return (
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

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <h2 className="col-span-2">Hubungi Saya Melalui</h2>
        <ToggleMessage />
        <p>Sisi Kanan</p>
      </div>
    </MainContainer>
  );
}
