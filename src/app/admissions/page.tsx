import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { CheckList } from "@/components/check-list";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { admissionSteps, images, requiredDocuments } from "@/lib/content";

export const metadata: Metadata = {
  title: "Admissions",
  description: "Begin your child learning journey with The BrightLight Nursery and Primary School."
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero eyebrow="Admissions" title="Begin your child learning journey with BrightLight" subtitle="Our admission process is simple, clear, and designed to help us place each child in the right class based on age, ability, and learning readiness." image={images.graduation}>
        <Link href="/contact?type=Admission%20Enquiry" className="button-primary">Apply Now</Link>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHeading centered eyebrow="Admission Process" title="A clear step-by-step path for parents" />
          <div className="mt-14 grid gap-5">
            {admissionSteps.map(([title, description], index) => (
              <article key={title} className="card flex flex-col gap-5 p-6 sm:flex-row">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f4d31f] to-[#e6c400] text-lg font-extrabold text-[#08213f] shadow-sm">{index + 1}</div>
                <div>
                  <h2 className="text-lg font-extrabold text-[#08213f]">{title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#5d6f82]">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section blue-band">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Entry Requirements" title="Documents to prepare" />
            <div className="mt-8"><CheckList items={requiredDocuments} /></div>
          </div>
          <div className="card p-8">
            <p className="eyebrow">Assessment</p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#08213f] sm:text-3xl">Admission Assessment</h2>
            <p className="mt-5 text-sm leading-7 text-[#5d6f82]">The entrance assessment helps the school understand the child current learning level and readiness. The assessment includes written and oral activities suitable for the child age and intended class level.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2">
          <div className="card p-8">
            <p className="eyebrow">Fees</p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#08213f] sm:text-3xl">School Fees</h2>
            <p className="mt-5 text-sm leading-7 text-[#5d6f82]">School fees details are available on request from the school administration. Parents are encouraged to contact the school directly for the current fee structure, payment schedule, and other admission-related payments.</p>
            <Link href="/contact?type=School%20Fees%20Enquiry" className="button-dark mt-6">Contact School Admin</Link>
          </div>
          <div className="card p-8">
            <p className="eyebrow">Enrollment</p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#08213f] sm:text-3xl">Enrollment Deadlines</h2>
            <p className="mt-5 text-sm leading-7 text-[#5d6f82]">Enrollment deadlines may vary by term and academic session. Parents are encouraged to contact the school directly or visit our News and Events page for updates on available spaces, resumption dates, and admission closing deadlines.</p>
            <Link href="/contact?type=Admission%20Enquiry" className="button-primary mt-6">Make Admission Enquiry</Link>
          </div>
        </div>
      </section>

      <CtaBand title="Book a visit to BrightLight" text="Experience the school environment and speak with the admin team about your child placement." href="/contact?type=Book%20a%20Visit" label="Book a Visit" />
    </>
  );
}
