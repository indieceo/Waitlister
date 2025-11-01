import { IFAQDetails, IFAQs } from "@/lib/type";
import { site } from "./site";

export const faqs: IFAQs[] = [
  {
    question: `Is ${site.siteName} free to use?`,
    answer: `Yes! Free, open-source Next.js template. Deploy anywhere and customize to match your brand.`,
  },
  {
    question: `How does ${site.siteName} integrate with Loops.so?`,
    answer: `New sign-ups are automatically added to your Loops.so audience via API integration.`,
  },
  {
    question: `Can I customize the design?`,
    answer: `Yes! Full control over design, colors, and content. Customize everything to match your brand.`,
  },
  {
    question: `Do I need coding experience to use ${site.siteName}?`,
    answer: `Basic Next.js knowledge helps, but you can customize content and colors without deep coding experience.`,
  },
  {
    question: `How do I deploy ${site.siteName}?`,
    answer: `Deploy to Vercel, Netlify, or any platform that supports Next.js. All configuration files included.`,
  },
  {
    question: `Is my waitlist data secure?`,
    answer: `Yes. Follows Next.js security best practices. Emails sent securely to Loops.so via API. Keep your API keys private.`,
  },
];

export const faqDetails: IFAQDetails = {
  sectionId: "faq",
  sectionLabel: "FAQ",
  faqs: faqs,
};
