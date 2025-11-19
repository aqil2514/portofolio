import React from "react";

export interface WhoAmIItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  subTitle: string;
  content: string;
  CtaButton?: React.ReactNode;
}
