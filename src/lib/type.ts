import { IconType } from "react-icons";

export interface IFAQs {
  question: string;
  answer: string;
}

export interface IFAQDetails {
  sectionId: string;
  sectionLabel: string;
  faqs: IFAQs[];
}

export interface IAboutFeature {
  icon: IconType;
  label: string;
}

export interface IAbout {
  sectionId: string;
  sectionLabel: string;
  description: string;
  features: IAboutFeature[];
  videoSrc: string;
}

export interface IFooterSocialLink {
  icon: IconType;
  href: string;
  label: string;
}

export interface IFooter {
  copyrightNotice: string;
  socialLinks: IFooterSocialLink[];
}

export interface IHeroBadge {
  icon: IconType;
  text: string;
}

export interface IHeroSocialProof {
  images: string[];
  text: string;
}

export interface IHero {
  sectionId: string;
  badge: IHeroBadge;
  title: string;
  subtitle: string;
  socialProof: IHeroSocialProof;
  heroImage: string;
}
