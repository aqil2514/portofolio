import { MainContainer } from "../layouts/containers/MainContainer";
import { ParticleContainer } from "../layouts/containers/ParticlesContainer";
import { HomeGreetings } from "@/featured/Home/Greetings";
import { CTAButton } from "@/featured/Home/CTAButton";
import { SkillsSection } from "@/featured/Home/SkillsSection";
import { FeaturedProjects } from "@/featured/Home/FeaturedProjects/FeaturedProjects";
import { ShortAbout } from "@/featured/Home/ShortAbout";

export default function HomeTemplate() {
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
