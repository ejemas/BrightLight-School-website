import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { images, staffProfiles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Staff",
  description: "Meet the dedicated team guiding and nurturing Brightlight International School pupils."
};

export default function StaffPage() {
  return (
    <>
      <PageHero eyebrow="Our Staff" title="Meet the dedicated team" subtitle="Meet the dedicated team guiding and nurturing our pupils." image={images.classroom} />

      <section className="section">
        <div className="container">
          <SectionHeading centered eyebrow="Our Team" title="Meet our school leadership and staff" subtitle="A dedicated team committed to helping every pupil learn, grow, and thrive." />
          <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-6">
            {staffProfiles.map((staff, index) => (
              <article
                key={staff.role}
                className={`group relative min-h-[420px] overflow-hidden rounded-2xl shadow-[0_22px_55px_rgba(8,33,63,0.16)] xl:col-span-2 ${index === 3 ? "xl:col-start-2" : ""}`}
              >
                <Image
                  src={staff.image}
                  alt={staff.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,130,191,0.08)_0%,rgba(10,79,138,0.36)_48%,rgba(8,33,63,0.9)_100%)]" />
                <div className="absolute left-6 right-6 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-[#2382bf] via-[#7bbddf] to-[#f4d31f]" />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/25 bg-[#0a4f8a]/35 p-5 text-white shadow-[0_16px_38px_rgba(8,33,63,0.2)] backdrop-blur-md">
                  <div className="flex items-end gap-4">
                    <span className="h-14 w-[3px] shrink-0 rounded-full bg-gradient-to-b from-[#f4d31f] via-[#7bbddf] to-[#2382bf]" />
                    <div>
                      <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#d5efff]">{staff.role}</p>
                      <h3 className="mt-1 text-2xl font-extrabold leading-tight">{staff.name}</h3>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
