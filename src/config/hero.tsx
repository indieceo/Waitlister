import { IHero, IHeroBadge, IHeroSocialProof } from "@/lib/type";
import { LuSparkles } from "react-icons/lu";

export const heroBadge: IHeroBadge = {
  icon: LuSparkles,
  text: "Waitlist Template",
};

export const heroSocialProof: IHeroSocialProof = {
  images: ["/images/avatar1.webp", "/images/avatar2.webp", "/images/avatar3.webp" ,"/images/avatar4.webp"],
  text: "100+ already joined the waitlist",
};

export const heroDetails: IHero = {
  sectionId: "hero",
  badge: heroBadge,
  title: "Good things come to those who wait.",
  subtitle: "Generate leads, build excitement, and grow your email list ahead of launch day.",
  socialProof: heroSocialProof,
  heroImage: "/images/hero_image.webp",
};
