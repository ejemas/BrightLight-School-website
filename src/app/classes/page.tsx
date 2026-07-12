import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { classes, images } from "@/lib/content";

export const metadata: Metadata = {
  title: "Classes and Sections",
  description: "Age-appropriate learning experiences from early years to primary level."
};

export default function ClassesPage() {
  return (
    <>
      <PageHero eyebrow="Classes" title="Classes and Sections" subtitle="We provide age-appropriate learning experiences for children from early years to primary level." image={images.pupils} />

      <section className="section">
        <div className="container">
          <SectionHeading centered eyebrow="School Levels" title="From creche to primary level" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {classes.map((item) => (
              <article
                key={item.title}
                className="group relative min-h-[300px] overflow-hidden rounded-2xl bg-[#08213f] shadow-[0_16px_38px_rgba(8,33,63,0.14)]"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} pupils at The BrightLight School`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,33,63,0.08)_0%,rgba(8,33,63,0.3)_42%,rgba(8,33,63,0.82)_100%)]" />
                <div className="absolute left-6 right-6 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-[#2382bf] via-[#7bbddf] to-[#f4d31f]" />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/25 bg-[#08213f]/48 p-4 text-white shadow-[0_12px_28px_rgba(0,0,0,0.2)] backdrop-blur-md">
                  <h3 className="text-lg font-extrabold leading-snug">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/90">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Find the right class for your child" text="Contact the school admin to discuss age, readiness, and placement." href="/contact?type=Admission%20Enquiry" label="Ask About Placement" />
    </>
  );
}
