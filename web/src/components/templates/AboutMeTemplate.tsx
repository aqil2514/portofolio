import { VARIABLE_COLOR } from "@/constant/variables";
import { MainContainer } from "../layouts/containers/MainContainer";
import { BallAnimation } from "@/featured/AboutMe/BallAnimation";
import { fontCinzel } from "@/constant/fonts";
import { RoadmapTimeline } from "@/featured/AboutMe/RoadmapTimeline";
import { WhoAmI } from "@/featured/AboutMe/WhoAmI";
import { CoreSkills } from "@/featured/AboutMe/CoreSkill";
import { ProductPhilosophy } from "@/featured/AboutMe/ProductPhilosophy";
import { PageAboutTypes } from "@/@types/Sanity";
import { AboutMeProvider } from "@/featured/AboutMe/provider";
import { getInternationalizationValue } from "@/utils/getInternationalizationValue";
import { LocaleLang } from "@/@types/General";

interface Props {
  data: PageAboutTypes;
  locale: LocaleLang;
}

export default async function AboutMeTemplate({ data, locale }: Props) {
  return (
    <AboutMeProvider data={data}>
      <MainContainer
        style={{
          background: VARIABLE_COLOR.BLUE_DARK,
        }}
        className="relative space-y-12"
      >
        <BallAnimation>
          <h1 className={fontCinzel.className + "text-3xl font-bold"}>
            {getInternationalizationValue(data.hero.title, locale)}
          </h1>
          <p className="text-white/90 text-sm sm:text-base">
            {getInternationalizationValue(data.hero.description, locale)}
          </p>
        </BallAnimation>
        <WhoAmI />
        <CoreSkills data={data} />
        <ProductPhilosophy data={data} locale={locale} />
        <RoadmapTimeline />
      </MainContainer>
    </AboutMeProvider>
  );
}
