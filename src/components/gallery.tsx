"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { galleryCategories, galleryItems } from "@/lib/content";

export function Gallery() {
  const [active, setActive] = useState("Classroom Activities");
  const [selected, setSelected] = useState<(typeof galleryItems)[number] | null>(null);

  const items = useMemo(() => galleryItems.filter((item) => item.category === active), [active]);

  return (
    <div>
      {/* Filter Pills */}
      <div className="flex gap-2 overflow-x-auto pb-4">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-extrabold transition-all duration-250 ${
              active === category
                ? "border-[#08213f] bg-[#08213f] text-white shadow-md"
                : "border-[#d7e8f3] bg-white text-[#3a5068] hover:border-[#2382bf] hover:text-[#0a4f8a]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            className="group mb-5 block w-full overflow-hidden rounded-xl bg-[#e9f7ff] text-left shadow-[0_4px_20px_rgba(8,33,63,0.08)] transition-all duration-300 hover:shadow-[0_12px_36px_rgba(8,33,63,0.14)]"
            onClick={() => setSelected(item)}
          >
            <span className="relative block aspect-[4/3] overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-[#08213f]/0 transition-all duration-300 group-hover:bg-[#08213f]/20">
                <span className="scale-0 rounded-full bg-white/90 p-2.5 text-[#08213f] transition-transform duration-300 group-hover:scale-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected ? (
        <div
          className="fixed inset-0 z-[70] grid place-items-center bg-[#08213f]/85 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close gallery image"
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#08213f] shadow-lg transition-transform duration-200 hover:scale-110"
          >
            <X size={22} />
          </button>
          <div
            className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={selected.src} alt={selected.alt} fill className="object-contain" sizes="100vw" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
