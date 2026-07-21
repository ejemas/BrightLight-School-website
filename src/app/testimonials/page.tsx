import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { images, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Hear from parents and guardians who trust Brightlight International School."
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title="What Parents Say" subtitle="Hear from parents and guardians who trust Brightlight International School." image={images.pupils} />

      <section className="section">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.quote} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section blue-band">
        <div className="container">
          <SectionHeading eyebrow="Student Success Stories" title="Stories of growth can be added here" subtitle="Add stories of pupils who have shown academic improvement, leadership, creativity, confidence, or success in competitions and school activities." />
        </div>
      </section>
    </>
  );
}
