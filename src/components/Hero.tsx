import React from "react";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { heroDetails } from "@/config/hero";
import WaitlistForm from "./WaitlistForm";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const BadgeIcon = heroDetails.badge.icon;

  return (
    <section
      id={heroDetails.sectionId}
      className="mx-auto flex min-h-screen w-[90vw] flex-col items-center justify-center overflow-hidden text-center md:w-[45rem] lg:w-[50rem]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center"
      >
        <motion.div
          variants={itemVariants}
          className="flex bg-card items-center justify-center gap-2 rounded-full border px-3 py-2 backdrop-blur-sm shadow-sm"
        >
          <BadgeIcon className="text-primary text-sm" />
          <p className="text-muted-foreground text-xs font-medium">{heroDetails.badge.text}</p>
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="mt-5 max-w-[20rem] text-center text-4xl font-semibold leading-tight sm:max-w-[28rem] sm:text-5xl md:max-w-[36rem] md:text-6xl"
        >
          {heroDetails.title}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground mt-4 text-center max-w-[25rem] text-sm md:text-base"
        >
          {heroDetails.subtitle}
        </motion.p>

        <motion.div variants={itemVariants} className="relative mt-8 h-[4rem] w-full md:w-[25rem]">
          <WaitlistForm />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-6 flex items-center justify-center gap-3">
          <div className="flex -space-x-2">
            {heroDetails.socialProof.images.map((imageSrc, index) => (
              <div
                key={index}
                className="relative h-7 w-7 overflow-hidden rounded-full border-[1.5px]"
              >
                <Image
                  src={imageSrc}
                  alt={`User ${index + 1}`}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-[0.83rem]">{heroDetails.socialProof.text}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
