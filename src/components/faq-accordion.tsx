"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/content";

export function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto grid max-w-3xl gap-4">
      {faqs.map(([question, answer], index) => {
        const expanded = open === index;
        return (
          <div
            key={question}
            className={`card overflow-hidden transition-all duration-300 ${
              expanded ? "border-l-[3px] border-l-[#2382bf]" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(expanded ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
              aria-expanded={expanded}
            >
              <span className="text-[0.92rem] font-extrabold text-[#08213f]">{question}</span>
              <ChevronDown
                className={`shrink-0 text-[#0a4f8a] transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
                size={20}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="border-t border-[#d7e8f3] px-5 py-5 text-sm leading-7 text-[#5d6f82]">
                  {answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
