"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { site } from "@/config/site";
import Image from "next/image";
import { useTheme } from "next-themes";

// env var to control visibility
const SHOW_INFO = String(process.env.NEXT_PUBLIC_SHOW_INFO ?? "")
  .toLowerCase()
  .trim() === "true";

const LINKS = {
  deploy:
    "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Findieceo%2FWaitlister&env=LOOPS_API_KEY,UPSTASH_REDIS_REST_URL,UPSTASH_REDIS_REST_TOKEN&project-name=my-waitlist",
  github: "https://github.com/indieceo/Waitlister",
  site: "https://waitlister.indietech.dev",
  creator: "https://indietech.dev",
} as const;

const TECH_STACK = ["Next.js", "Tailwind CSS", "Motion.dev", "Loops.so API", "Upstash Redis"];

const INTEGRATIONS = [
  { name: "Loops.so", icon: "/loops.svg" },
  { name: "Upstash", icon: "/upstash.svg" },
];


const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border px-2.5 py-0.5 text-[10px] font-medium text-foreground/80">
    {children}
  </span>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
    <path
      fill="currentColor"
      d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.41-4.04-1.41-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.51 1.01.11-.78.42-1.32.76-1.63-2.66-.3-5.46-1.33-5.46-5.9 0-1.3.47-2.36 1.25-3.19-.13-.31-.54-1.56.12-3.26 0 0 1.01-.32 3.3 1.22a11.47 11.47 0 016 0c2.29-1.54 3.3-1.22 3.3-1.22.66 1.7.25 2.95.12 3.26.78.83 1.25 1.89 1.25 3.19 0 4.58-2.8 5.6-5.47 5.9.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0012 .5z"
    />
  </svg>
);



export default function InfoCard() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  if (!SHOW_INFO || dismissed) return null;

  return (
    <div ref={containerRef} className="fixed left-2 top-5 z-50 select-none" role="complementary" aria-label="Waitlister information">
      <div className="relative">
        <div
          id="waitlister-info-panel"
          className={cn("w-72 rounded-2xl border bg-card p-2")}
        > 
          <div
            role="button"
            aria-expanded={open}
            aria-controls="waitlister-info-panel"
            onClick={() => setOpen((v) => !v)}
            className={cn("flex w-full items-center justify-between gap-3")}
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <Image src={theme === "light" ? site.logos.light : site.logos.dark} alt="Waitlister logo" width={20} height={20} className="rounded-sm" />
              <div className="flex min-w-0 flex-col">
                <span className="truncate text-sm font-semibold leading-tight">Waitlister</span>
                <span className="text-[11px] text-muted-foreground">Launch your waitlist in minutes</span>
              </div>
            </div>
            <div className={cn(open && "rotate-180", "transition-transform duration-300 shrink-0")}> 
              <IoIosArrowDropdownCircle className="text-primary size-5" />
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{
              height: open ? "auto" : 0,
              opacity: open ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-3 p-2 space-y-5">
              <div className="space-y-2">
                <h3 className="text-xs font-semibold tracking-wide text-foreground/90">Overview</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  A clean Next.js template for collecting emails fast. Seamless Loops.so integration,
                  built-in rate limiting, and ready-to-ship styling.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold tracking-wide text-foreground/90">Tech stack</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {TECH_STACK.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold tracking-wide text-foreground/90">Integrations</h3>
                  <div className="flex flex-wrap items-center gap-3">
                    {INTEGRATIONS.map((int) => (
                      <div key={int.name} className="inline-flex items-center gap-2">
                        <img src={int.icon} alt={int.name} width={16} height={16} className="opacity-80" />
                        <span className="text-xs text-foreground/80">{int.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-semibold tracking-wide text-foreground/90">Get started</h3>
                <div className="flex items-center gap-2">
                  <a
                    href={LINKS.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Deploy with Vercel"
                    className="inline-flex items-center justify-center rounded-md text-xs font-medium"
                  >
                    <img src="https://vercel.com/button" alt="Deploy with Vercel" className="h-6 w-auto" />
                  </a>
                  <button
                    onClick={() => window.open(LINKS.github, "_blank")}
                    className="inline-flex bg-muted items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
                  >
                    <GitHubIcon />
                    View repository
                  </button>
                </div>
              </div>

              <div className="pt-2 border-t">
                <button
                  onClick={(e) => { e.stopPropagation(); setDismissed(true); }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hide
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
