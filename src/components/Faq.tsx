import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { motion } from "motion/react";
import { faqDetails, faqs } from "../config/faq";
import { IFAQs } from "@/lib/type";
import { LuCircleHelp } from "react-icons/lu";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leftColumn = faqs.filter((_, i) => i % 2 === 0);
  const rightColumn = faqs.filter((_, i) => i % 2 === 1);

  const renderFaqItem = (faq: IFAQs, indexInOriginal: number) => {
    const isOpen = openIndex === indexInOriginal;

    return (
      <button
        onClick={() => setOpenIndex(isOpen ? null : indexInOriginal)}
        key={indexInOriginal}
        className="bg-card border mb-4 w-full rounded-2xl border px-4 py-4 text-sm hover:cursor-pointer"
      >
        <div className="flex w-full items-center justify-between text-start">
          <p>{faq.question}</p>
          <div className={`${isOpen && "rotate-180"} transition-transform duration-300`}>
            <IoIosArrowDropdownCircle className="text-primary size-5" />
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-muted-foreground overflow-hidden text-start"
        >
          <p className="mt-3 text-[0.78rem]">{faq.answer}</p>
        </motion.div>
      </button>
    );
  };

  return (
    <section
      id={faqDetails.sectionId}
      className="mx-auto flex min-h-screen w-[90vw] flex-col items-center pt-24 pb-36 md:w-[45rem] lg:w-[50rem]"
    >
      <div className="flex bg-card items-center gap-2 self-start rounded-full border px-3 py-2">
        <LuCircleHelp className="text-primary size-4" />
        <p className="text-muted-foreground text-xs font-medium">{faqDetails.sectionLabel}</p>
      </div>

      <div className="mt-10 flex w-full flex-col lg:flex-row lg:gap-4">
        <div className="flex w-full flex-col">
          {leftColumn.map((faq, i) => renderFaqItem(faq, i * 2))}
        </div>
        <div className="flex w-full flex-col">
          {rightColumn.map((faq, i) => renderFaqItem(faq, i * 2 + 1))}
        </div>
      </div>
    </section>
  );
}
