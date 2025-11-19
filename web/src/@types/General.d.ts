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
