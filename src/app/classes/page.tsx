import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { InfoCard } from "@/components/info-card";
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
          <div className="mt-14 grid-auto">
            {classes.map((item) => <InfoCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      <CtaBand title="Find the right class for your child" text="Contact the school admin to discuss age, readiness, and placement." href="/contact?type=Admission%20Enquiry" label="Ask About Placement" />
    </>
  );
}
