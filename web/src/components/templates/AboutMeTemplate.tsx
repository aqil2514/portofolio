"use client";
import { VARIABLE_COLOR } from "@/constant/variables";
import { MainContainer } from "../layouts/containers/MainContainer";
import { BallAnimation } from "@/featured/AboutMe/BallAnimation";
import { fontCinzel } from "@/constant/fonts";
import { usePageTransition } from "@/providers/PageTransitionProvider";
import { PageLoader } from "../layouts/loader/PageLoader";
import { RoadmapTimeline } from "@/featured/AboutMe/RoadmapTimeline";
import { WhoAmI } from "@/featured/AboutMe/WhoAmI";
import { CoreSkills } from "@/featured/AboutMe/CoreSkill";
import { ProductPhilosophy } from "@/featured/AboutMe/ProductPhilosophy";

export default function AboutMeTemplate() {
  const { isReady } = usePageTransition();

  if (!isReady) return <PageLoader />;

  return (
    <MainContainer
      style={{
        background: VARIABLE_COLOR.BLUE_DARK,
      }}
      className="min-h-screen relative space-y-12"
    >
      <BallAnimation>
        <h1 className={fontCinzel.className + " text-3xl font-bold"}>
          About Me
        </h1>
        <p className="text-white/90 text-sm sm:text-base">
          I love coding because it allows me to turn ideas into real, functional systems that people can actually use.
        </p>
      </BallAnimation>
      <WhoAmI />
      <CoreSkills />
      <ProductPhilosophy />
      <RoadmapTimeline />
    </MainContainer>
  );
}
