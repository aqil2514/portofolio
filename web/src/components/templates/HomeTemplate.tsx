import { MainContainer } from "../layouts/containers/MainContainer";
import HomeClient from "@/featured/Home/HomeClient";

export default function HomeTemplate() {
  return (
    <MainContainer className="relative flex justify-center items-center flex-col space-y-6">
      <HomeClient />
    </MainContainer>
  );
}
