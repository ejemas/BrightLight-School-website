import type { Metadata } from "next";
import Image from "next/image";
import { AboutStatementsAccordion } from "@/components/about-statements-accordion";
import { CtaBand } from "@/components/cta-band";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { boardMembers, chairmanProfile, coreValues, images, schoolInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about The BrightLight International Nursery and Primary School history, vision, mission, values, and leadership."
};

const coreValueImages = [
  {
    src: "/images/school/df0da8bd-8339-4ba8-96d7-228ba02ce3c7.webp",
    alt: "Pupils learning together in a circle"
  },
  {
    src: "/images/school/a36cc9ec-01b7-4479-9d60-cdea1d46caf5.webp",
    alt: "Teacher guiding pupils during a creative activity"
  },
  {
    src: "/images/school/96f3d535-8982-4637-a210-4480dd353eea.webp",
    alt: "BrightLight pupils gathered outdoors"
  },
  {
    src: "/images/school/765913dd-c489-4643-8d0d-810f6eee0945.webp",
    alt: "BrightLight School entrance welcoming pupils"
  },
  {
    src: "/images/school/c0e769a1-8d48-4b69-ab32-537f79c2c992.webp",
    alt: "Clean and safe BrightLight school corridor"
  },
  {
    src: "/images/school/83ff1ace-f8a8-4388-a3b1-eb08a376431e.webp",
    alt: "BrightLight classroom prepared for learning"
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title={`About ${schoolInfo.name}`} subtitle="A school committed to academic excellence, discipline, godly values, and the holistic development of every child." image={images.about} />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1fr_0.85fr]">
          <MotionSection>
            <SectionHeading eyebrow="Our History" title={`A trusted learning foundation since ${schoolInfo.founded}`} />
            <div className="mt-6 space-y-5 text-[0.95rem] leading-8 text-[#5d6f82]">
              <p>Founded in 2013, The BrightLight School was established with a strong passion for providing quality education and building a solid foundation for young learners. What began as a humble vision to nurture children academically, morally, and socially has grown into a respected school known for excellence, discipline, and holistic child development.</p>
              <p>From the beginning, the school was created to provide a safe and supportive learning environment where children receive not only sound academic training, but also strong character formation rooted in positive values. Starting with a few pupils and dedicated teachers, The BrightLight School has steadily grown in size, facilities, and impact.</p>
              <p>Over the years, the school has celebrated outstanding academic achievements, successful graduations, and impressive performances in extracurricular activities. Today, The BrightLight School remains committed to innovative teaching, child-centered learning, and raising confident future leaders in a safe, caring, and inspiring environment.</p>
            
            </div>
          </MotionSection>
          <MotionSection delay={0.1}>
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-gradient-to-br from-[#2382bf]/12 to-[#f4d31f]/8" />
              <div className="image-frame relative aspect-[4/5] rounded-2xl">
                <Image src="/images/school/765913dd-c489-4643-8d0d-810f6eee0945.webp" alt="BrightLight School entrance with pupils" fill className="object-cover" sizes="40vw" />
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      <section className="section blue-band">
        <div className="container">
          <AboutStatementsAccordion
            items={[
              { title: "Mission", body: schoolInfo.mission },
              { title: "Vision", body: schoolInfo.vision },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading centered eyebrow="Core Values" title="What guides our school community" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {coreValues.map(([title, description], index) => {
              const image = coreValueImages[index];

              return (
                <article key={title} className="group relative min-h-[300px] overflow-hidden rounded-2xl shadow-[0_18px_50px_rgba(8,33,63,0.14)]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,33,63,0.1)_0%,rgba(8,33,63,0.48)_48%,rgba(8,33,63,0.9)_100%)]" />
                  <div className="absolute left-6 right-6 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-[#2382bf] via-[#7bbddf] to-[#f4d31f]" />
                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/25 bg-white/18 p-5 text-white shadow-[0_14px_34px_rgba(0,0,0,0.18)] backdrop-blur-md">
                    <h3 className="text-lg font-extrabold leading-snug">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/86">{description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section cream-band">
        <div className="container">
          <div className="max-w-3xl">
            <SectionHeading eyebrow="Philosophy" title="Education beyond memorization" subtitle="Every child deserves a learning experience that builds intelligence, confidence, discipline, creativity, and strong moral character." />
            <p className="section-lead">We combine academic excellence with moral instruction, godly values, creativity, and social development to prepare our pupils for future success.</p>
          </div>
          <MotionSection delay={0.08} className="mt-12">
            <article className="overflow-hidden rounded-2xl border border-[#d5efff] bg-white shadow-[0_22px_55px_rgba(8,33,63,0.12)]">
              <div className="grid md:grid-cols-[0.78fr_1.22fr]">
                <div className="relative min-h-[360px] overflow-hidden md:min-h-[460px]">
                  <Image
                    src={chairmanProfile.image}
                    alt={chairmanProfile.alt}
                    fill
                    className="object-cover object-[center_28%] transition duration-700 hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08213f]/30 via-transparent to-transparent" />
                  <div className="absolute inset-x-6 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-[#2382bf] via-[#7bbddf] to-[#f4d31f]" />
                </div>
                <div className="relative flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <div className="absolute left-7 right-7 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-[#2382bf] via-[#7bbddf] to-[#f4d31f] md:left-10 md:right-10 lg:left-12 lg:right-12" />
                  <p className="eyebrow">Message from the Chairman</p>
                  <h3 className="mt-3 text-2xl font-extrabold text-[#08213f] sm:text-3xl">Welcome to our school.</h3>
                  <p className="mt-5 text-sm leading-7 text-[#5d6f82]">Our vision is to provide every child with a strong educational foundation in a safe, nurturing, and inspiring environment. We are committed to helping each child discover, develop, and maximize their potential through quality education, moral instruction, and innovative learning methods.</p>
                  <div className="mt-7 border-l-[3px] border-[#f4d31f] pl-5">
                    <p className="font-extrabold text-[#08213f]">{chairmanProfile.name}</p>
                    <p className="text-sm font-semibold text-[#0a4f8a]">{chairmanProfile.role}</p>
                  </div>
                </div>
              </div>
            </article>
          </MotionSection>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading centered eyebrow="Leadership" title="Our Board" />
          <div className="mx-auto mt-12 grid max-w-6xl gap-7 md:grid-cols-2 xl:grid-cols-3">
            {boardMembers.map((member) => (
              <article key={member.name} className="group relative min-h-[440px] overflow-hidden rounded-2xl shadow-[0_22px_55px_rgba(8,33,63,0.16)]">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,130,191,0.08)_0%,rgba(10,79,138,0.36)_48%,rgba(8,33,63,0.9)_100%)]" />
                <div className="absolute left-6 right-6 top-0 h-[3px] rounded-b-full bg-gradient-to-r from-[#2382bf] via-[#7bbddf] to-[#f4d31f]" />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/25 bg-[#0a4f8a]/35 p-5 text-white shadow-[0_16px_38px_rgba(8,33,63,0.2)] backdrop-blur-md">
                  <div className="flex items-end gap-4">
                    <span className="h-14 w-[3px] rounded-full bg-gradient-to-b from-[#f4d31f] via-[#7bbddf] to-[#2382bf]" />
                    <div>
                      <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#d5efff]">{member.role}</p>
                      <h3 className="mt-1 text-2xl font-extrabold leading-tight">{member.name}</h3>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Ready to speak with the school?" text="Contact the school admin for admission, visits, and parent enquiries." href="/contact" label="Contact Us" />
    </>
  );
}
