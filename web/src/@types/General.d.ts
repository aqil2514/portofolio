export interface BasicSelect {
  label: string;
  value: string;
}

export interface BasicLink {
  label: string;
  link: string;
}

export interface BasicImage {
  label: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ImageWithLink extends BasicImage {
  link: string;
  labelLink?: string;
}

export type LocaleLang = "en" | "id"