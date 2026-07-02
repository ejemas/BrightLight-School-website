import type { Metadata } from "next";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { images } from "@/lib/content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common parent questions about BrightLight School."
};

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions" subtitle="Answers to common parent questions about BrightLight School." image={images.about} />

      <section className="section">
        <div className="container">
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
