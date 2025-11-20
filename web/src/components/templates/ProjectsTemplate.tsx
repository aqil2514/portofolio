"use client";

import { usePageTransition } from "@/providers/PageTransitionProvider";
import { MainContainer } from "../layouts/containers/MainContainer";
import { useLocale } from "next-intl";
import { PageLoader } from "../layouts/loader/PageLoader";

export default function ProjectsTemplate() {
  const { isReady } = usePageTransition();
  const locale = useLocale();

  if (!isReady) return <PageLoader />;

  return <MainContainer>Soon</MainContainer>;
}
