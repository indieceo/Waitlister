import { IFooter, IFooterSocialLink } from "@/lib/type";
import { site } from "./site";
import { TbBrandX } from "react-icons/tb";
import { LuGithub } from "react-icons/lu";

export const socialLinks: IFooterSocialLink[] = [
  {
    icon: TbBrandX,
    href: "https://twitter.com/indieceo",
    label: "Twitter",
  },
  {
    icon: LuGithub,
    href: "https://github.com/indieceo",
    label: "GitHub",
  },
];

export const footerDetails: IFooter = {
  copyrightNotice: `© 2025, ${site.siteName}. All rights reserved`,
  socialLinks,
};
