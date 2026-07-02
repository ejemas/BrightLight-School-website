import type { Metadata } from "next";
import { Gallery } from "@/components/gallery";
import { PageHero } from "@/components/page-hero";
import { images } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Moments from BrightLight classrooms, celebrations, activities, and special school events."
};

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments from BrightLight" subtitle="Classrooms, celebrations, activities, and special school events." image={images.graduation} />

      <section className="section">
        <div className="container">
          <Gallery />
        </div>
      </section>
    </>
  );
}
