import { PageAboutTypes } from "@/@types/Sanity";
import React, { createContext, useContext } from "react";

interface AboutMeContextType {
  data: PageAboutTypes;
}

const AboutMeContext = createContext<AboutMeContextType>(
  {} as AboutMeContextType
);

interface AboutMeProviderProps {
  children: React.ReactNode;
  data: PageAboutTypes;
}

export function AboutMeProvider({ children, data }: AboutMeProviderProps) {
  const value: AboutMeContextType = {
    data,
  };
  return (
    <AboutMeContext.Provider value={value}>{children}</AboutMeContext.Provider>
  );
}

export function useAboutMeContext() {
  const ctx = useContext(AboutMeContext);
  if (!ctx)
    throw new Error("useAboutMeContext must be used inside AboutMeProvider");
  return ctx;
}
