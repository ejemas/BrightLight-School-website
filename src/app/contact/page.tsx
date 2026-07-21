import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { InfoCard } from "@/components/info-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { contactCards, images, schoolInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Brightlight International School for admission enquiries, school visits, and general information."
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="We would love to hear from you" subtitle="Contact us for admission enquiries, school visits, and general information." image={images.event} />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Contact Details" title="Speak with the school admin" />
            <div className="mt-8 grid gap-5">
              {contactCards.map((card) => <InfoCard key={card.title} title={card.title} description={card.value} icon={card.icon} />)}
            </div>
            <Link href={schoolInfo.whatsapp} className="button-primary mt-8">Chat with Us on WhatsApp</Link>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section-tight blue-band">
        <div className="container">
          <div className="card overflow-hidden rounded-2xl p-8">
            <p className="eyebrow">Google Map</p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#08213f] sm:text-3xl">Map placeholder</h2>
            <p className="mt-4 text-sm leading-7 text-[#5d6f82]">{schoolInfo.address}</p>
          </div>
        </div>
      </section>
    </>
  );
}
