import { LuMail, LuRocket, LuSettings, LuSparkles } from "react-icons/lu";

import { IAboutFeature, IAbout } from "@/lib/type";
import { site } from "./site";

export const aboutFeatures: IAboutFeature[] = [
  {
    icon: LuRocket,
    label: "Quick Setup",
  },
  {
    icon: LuMail,
    label: "Email Collection",
  },
  {
    icon: LuSparkles,
    label: "Customizable",
  },
  {
    icon: LuSettings,
    label: "Loops.so Integration",
  },
];

export const aboutDetails: IAbout = {
  sectionId: "about",
  sectionLabel: `About ${site.siteName}`,
  description:
    `${site.siteName} is a customizable Next.js waitlist template integrated with Loops.so. Collect emails and engage users before your launch with minimal effort.`,
  features: aboutFeatures,
  videoSrc: "https://www.pexels.com/download/video/4974883/",
};
