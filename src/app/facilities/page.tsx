import type { Metadata } from "next";
import { ImageCard } from "@/components/image-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { facilities, images } from "@/lib/content";

export const metadata: Metadata = {
  title: "Facilities",
  description: "A safe, conducive, and well-equipped environment that supports effective teaching and joyful learning."
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Facilities" title="Our Facilities" subtitle="A safe, conducive, and well-equipped environment that supports effective teaching and joyful learning." image={images.facilities} />

      <section className="section">
        <div className="container">
          <SectionHeading centered eyebrow="Learning Environment" title="Visual, practical, and child-friendly spaces" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((item) => <ImageCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
