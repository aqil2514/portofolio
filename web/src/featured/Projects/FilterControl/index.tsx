"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { DesktopFilter } from "./FilterDesktop";
import { MobileFilter } from "./FilterMobile";

export function FilterControl() {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return isMobile ? <MobileFilter /> : <DesktopFilter />;
}
