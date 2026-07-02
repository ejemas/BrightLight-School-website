import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { events, images } from "@/lib/content";

export const metadata: Metadata = {
  title: "News and Events",
  description: "Important school dates, activities, meetings, and announcements."
};

export default function NewsEventsPage() {
  return (
    <>
      <PageHero eyebrow="News and Events" title="Stay updated with BrightLight" subtitle="Important school dates, activities, meetings, and announcements." image={images.event} />

      <section className="section">
        <div className="container">
          <SectionHeading centered eyebrow="Announcements" title="Dates will be updated when confirmed" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map(([title, description, date]) => (
              <article key={title} className="card hover-lift group p-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#fff9e5] to-[#fdf6d0] px-4 py-2 text-sm font-extrabold text-[#08213f]">
                  <CalendarDays size={16} />
                  {date}
                </div>
                <h2 className="mt-6 text-xl font-extrabold text-[#08213f]">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#5d6f82]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
