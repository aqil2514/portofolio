// "use client";
import { HomeGreetings } from "@/featured/Home/Greetings";
import { CTAButton } from "@/featured/Home/CTAButton";
import { SkillsSection } from "@/featured/Home/SkillsSection";
import { FeaturedProjects } from "@/featured/Home/FeaturedProjects/FeaturedProjects";
import { ShortAbout } from "@/featured/Home/ShortAbout";
import { ParticleContainer } from "@/components/layouts/containers/ParticlesContainer";

export default function HomeClient() {

  return (
    <>
      <ParticleContainer />

      <HomeGreetings />
      <CTAButton />
      <SkillsSection />
      <FeaturedProjects />
      <ShortAbout />
    </>
  );
}
