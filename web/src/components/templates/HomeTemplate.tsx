"use client";

import { HomeGreetings } from "@/featured/Home/Greetings";
import { MainContainer } from "../layouts/containers/MainContainer";
import { ParticleContainer } from "../layouts/containers/ParticlesContainer";
import { CTAButton } from "@/featured/Home/CTAButton";
import { SkillsSection } from "@/featured/Home/SkillsSection";
import { FeaturedProjects } from "@/featured/Home/FeaturedProjects/FeaturedProjects";
import { ShortAbout } from "@/featured/Home/ShortAbout";
import { usePageTransition } from "@/providers/PageTransitionProvider";
import { PageLoader } from "../layouts/loader/PageLoader";

export default function HomeTemplate() {
  const { isReady } = usePageTransition();

  if (!isReady) return <PageLoader />;

  return (
    <MainContainer className="relative flex justify-center items-center flex-col space-y-6">
      <ParticleContainer />

      <HomeGreetings />
      <CTAButton />
      <SkillsSection />
      <FeaturedProjects />
      <ShortAbout />
    </MainContainer>
  );
}
