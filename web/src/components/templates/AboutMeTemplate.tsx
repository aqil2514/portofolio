import { VARIABLE_COLOR } from "@/constant/variables";
import { MainContainer } from "../layouts/containers/MainContainer";

export default function AboutMeTemplate() {
  return (
    <MainContainer
      style={{
        background: VARIABLE_COLOR.BLUE_DARK,
      }}
      className="min-h-screen"
    >
      OK
    </MainContainer>
  );
}
