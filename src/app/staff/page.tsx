import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { images, staffProfiles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Staff",
  description: "Meet the dedicated team guiding and nurturing BrightLight pupils."
};

export default function StaffPage() {
  return (
    <>
      <PageHero eyebrow="Our Staff" title="Meet the dedicated team" subtitle="Meet the dedicated team guiding and nurturing our pupils." image={images.classroom} />

      <section className="section">
        <div className="container">
          <SectionHeading centered eyebrow="Staff Profiles" title="Placeholders ready for real staff details" subtitle="Use these cards until official names, photos, and biographies are provided." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {staffProfiles.map((staff) => (
              <article key={staff.role} className="card group overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={staff.image}
                    alt={staff.role}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="25vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-lg font-extrabold text-[#08213f]">{staff.name}</p>
                  <p className="mt-1 text-sm font-extrabold text-[#0a4f8a]">{staff.role}</p>
                  <p className="mt-4 text-sm leading-7 text-[#5d6f82]">{staff.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
