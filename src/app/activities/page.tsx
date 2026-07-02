import type { Metadata } from "next";
import { InfoCard } from "@/components/info-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { activities, images } from "@/lib/content";

export const metadata: Metadata = {
  title: "Co-Curricular Activities",
  description: "Helping pupils discover talents, build confidence, and develop beyond the classroom."
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHero eyebrow="Beyond the Classroom" title="Co-Curricular Activities" subtitle="Helping pupils discover talents, build confidence, and develop beyond the classroom." image={images.culturalTwo} />

      <section className="section">
        <div className="container">
          <SectionHeading centered eyebrow="Activities" title="Talent, confidence, teamwork, and expression" />
          <div className="mt-14 grid-auto">
            {activities.map(([title, description, Icon]) => (
              <InfoCard key={title} title={title} description={description} icon={Icon} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
