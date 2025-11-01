import React from "react";
import { site } from "../config/site";
import { footerDetails } from "@/config/footer";

export default function Footer() {
  return (
    <footer className="relative mx-auto flex items-center justify-center overflow-x-clip">
      <span
        aria-hidden="true"
        className="
          absolute left-1/2 bottom-[10rem] md:bottom-[7rem] z-0
          text-[7rem] md:text-[10rem] text-muted-foreground
          font-bold opacity-20
          -translate-x-1/2 transform
          transition-all duration-500 ease-in-out
          hover:text-foreground hover:opacity-100 hover:translate-y-[-3.5rem] hover:cursor-pointer
        "
      >
        {site.siteName}
      </span>
      <div className="bg-background text-muted-foreground z-10 flex h-52 w-full items-center justify-center">
        <div className="flex w-[90vw] items-center justify-between text-sm md:w-[45rem] lg:w-[50rem]">
          <p>{footerDetails.copyrightNotice}</p>
          <div className="flex items-center justify-center gap-2">
            {footerDetails.socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  aria-label={link.label}
                  rel="noopener noreferrer"
                  className="hover:text-foreground text-primary duration-300 transition-colors"
                >
                  <Icon className="size-5 hover:cursor-pointer" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
