"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

type AboutStatement = {
  title: string;
  body: string;
};

export function AboutStatementsAccordion({ items }: { items: AboutStatement[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-5xl">
      {items.map((item, index) => {
        const expanded = openIndex === index;
        const contentId = `about-statement-${index}`;

        return (
          <div key={item.title} className="border-t border-[#c7d7e3] last:border-b">
            <button
              type="button"
              onClick={() => setOpenIndex(expanded ? null : index)}
              className="group flex w-full items-center justify-between gap-6 py-8 text-left sm:py-11"
              aria-expanded={expanded}
              aria-controls={contentId}
            >
              <span className="text-3xl font-semibold leading-tight text-[#08213f] sm:text-5xl">
                Our {item.title}
              </span>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#08213f] text-[#08213f] transition-all duration-300 group-hover:border-[#2382bf] group-hover:bg-[#e9f7ff] group-hover:text-[#0a4f8a] sm:h-12 sm:w-12">
                <Plus
                  size={28}
                  strokeWidth={2.6}
                  className={`transition-transform duration-500 ease-out ${
                    expanded ? "rotate-45" : "rotate-0"
                  }`}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  id={contentId}
                  initial={{ height: 0, opacity: 0, y: -8 }}
                  animate={{ height: "auto", opacity: 1, y: 0 }}
                  exit={{ height: 0, opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-10"
                  >
                    <div className="mb-5 h-[3px] w-full max-w-md rounded-full bg-gradient-to-r from-[#2382bf] via-[#7bbddf] to-[#f4d31f]" />
                    <p className="max-w-4xl text-[0.98rem] leading-8 text-[#5d6f82] sm:text-[1.04rem]">
                      {item.body}
                    </p>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
