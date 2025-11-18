"use client";
import { VARIABLE_COLOR } from "@/constant/variables";
import { MainContainer } from "../layouts/containers/MainContainer";
import { BallAnimation } from "@/featured/AboutMe/BallAnimation";
import { fontCinzel } from "@/constant/fonts";
import { usePageTransition } from "@/providers/PageTransitionProvider";
import { PageLoader } from "../layouts/loader/PageLoader";

export default function AboutMeTemplate() {
  const { isReady } = usePageTransition();

  if (!isReady) return <PageLoader />;

  return (
    <MainContainer
      style={{
        background: VARIABLE_COLOR.BLUE_DARK,
      }}
      className="min-h-screen relative"
    >
      <BallAnimation>
        <h1 className={fontCinzel.className + " text-3xl font-bold mb-2"}>
          About Me
        </h1>
        <p className="text-white/90 text-sm sm:text-base">
          A short description about who I am and what I do...
        </p>
      </BallAnimation>
    </MainContainer>
  );
}
