"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";
import { site } from "@/config/site";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.div
      initial={{ opacity: 0, width: "25rem" }}
      animate={{ opacity: 1, width: scrolled ? "15rem" : "25rem" }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      className="bg-card border fixed top-5 right-4 left-4 z-50 mx-auto flex items-center justify-between gap-4 rounded-full p-2 shadow-sm"
    >
      <div className="flex items-center gap-3 overflow-hidden ml-4">
        <div className="relative shrink-0 flex items-center justify-center">
          <Image
            src={theme === "light" ? site.logos.light : site.logos.dark}
            alt={`${site.siteName} logo`}
            width={32}
            height={32}
            priority
            className="object-contain"
          />
        </div>
        <motion.span
          initial={false}
          animate={{ opacity: scrolled ? 0 : 1, x: scrolled ? -8 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-lg font-semibold tracking-tight"
        >
          {site.siteName}
        </motion.span>
      </div>
      <motion.button
        onClick={toggleTheme}
        aria-label="Toggle dark/light theme"
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer bg-accent border grid h-12 w-12 place-items-center rounded-full border transition-all duration-300"
      >
        <motion.div
          key={theme}
          initial={{ rotate: theme === "light" ? 90 : -90, scale: 0.85, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {theme === "light" ? (
            <Sun className="text-muted-foreground size-4" />
          ) : (
            <Moon className="text-muted-foreground size-4" />
          )}
        </motion.div>
        <span className="sr-only">Toggle theme</span>
      </motion.button>
    </motion.div>
  );
}
