import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { ImageCard } from "@/components/image-card";
import { InfoCard } from "@/components/info-card";
import { MotionSection } from "@/components/motion-section";
import { SchoolVideoShowcase } from "@/components/school-video-showcase";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { facilities, highlights, images, quickActions, schoolInfo, stats, testimonials } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* ══════ Hero ══════ */}
      <section className="relative overflow-hidden bg-[#08213f] text-white">
        <Image src={images.hero} alt={`${schoolInfo.name} pupils in a learning circle`} fill priority className="object-cover opacity-25" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,33,63,0.96)_0%,rgba(8,33,63,0.78)_40%,rgba(35,130,191,0.4)_100%)]" />

        {/* Decorative shapes */}
        <div className="absolute top-20 right-[10%] h-52 w-52 animate-float rounded-full bg-[#2382bf]/10 blur-2xl" />
        <div className="absolute bottom-28 left-[6%] h-36 w-36 animate-float-slow rounded-full bg-[#f4d31f]/10 blur-xl" />
        <div className="absolute top-1/3 right-[35%] h-24 w-24 animate-float rounded-full bg-white/5 blur-lg" />

        <div className="container relative grid min-h-[calc(100vh-70px)] items-center gap-10 py-16 lg:grid-cols-[1fr_0.72fr]">
          <MotionSection>
            <div className="inline-flex flex-col items-start gap-2 text-sm font-extrabold text-[#f4d31f]">
              <span className="h-[2px] w-12 rounded-full bg-gradient-to-r from-[#2382bf] to-[#f4d31f]" />
              Premium international education in Warri
            </div>
            <h1 className="mt-5 max-w-[680px] text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.6rem]">{schoolInfo.tagline}</h1>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-8 text-[#c8e4f6]">
              At {schoolInfo.name}, we provide a safe, nurturing, and inspiring learning environment where every child is guided to grow academically, morally, socially, and spiritually.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/admissions" className="button-primary">Apply Now</Link>
              <Link href="/contact?type=Book%20a%20Visit" className="button-light">Book a Visit</Link>
              <Link href="/contact" className="button-secondary bg-white/10 border-white/20 text-white hover:bg-white/20">Contact Us</Link>
            </div>
          </MotionSection>
          <MotionSection delay={0.16} className="hidden lg:block">
            <div className="image-frame relative aspect-[4/5] rounded-2xl">
              <Image src={images.academics} alt={`${schoolInfo.name} pupils seated together for learning`} fill className="object-cover" sizes="35vw" />
            </div>
          </MotionSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
          <ChevronDown size={22} className="animate-scroll-hint" />
        </div>

        {/* Wave */}
        <svg className="hero-wave" viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 72L60 60C120 48 240 24 360 18C480 12 600 24 720 30C840 36 960 36 1080 30C1200 24 1320 12 1380 6L1440 0V72H1380C1320 72 1200 72 1080 72C960 72 840 72 720 72C600 72 480 72 360 72C240 72 120 72 60 72H0Z" fill="white"/>
        </svg>
      </section>

      {/* ══════ School Video Tour ══════ */}
      <SchoolVideoShowcase />

      {/* ══════ Quick Actions ══════ */}
      <section className="section-tight relative overflow-hidden blue-band">
        <div className="decoration-blob -top-20 right-[15%] h-40 w-40 bg-[#2382bf]/8" />
        <div className="decoration-blob -bottom-16 left-[10%] h-36 w-36 bg-[#f4d31f]/6" />
        <div className="container relative grid gap-6 md:grid-cols-3">
          {quickActions.map((action) => (
            <Link key={action.title} href={action.href} className="card glass hover-lift flex items-start gap-4 p-6">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fff9e5] to-[#fdf6d0] text-[#08213f]">
                <action.icon size={22} />
              </span>
              <span>
                <span className="block text-[1.02rem] font-extrabold text-[#08213f]">{action.title}</span>
                <span className="mt-2 block text-sm leading-6 text-[#5d6f82]">{action.description}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ══════ Highlights ══════ */}
      <section className="section">
        <div className="container">
          <SectionHeading centered eyebrow="School Highlights" title="A safe, disciplined, and caring place to learn" subtitle={`${schoolInfo.name} combines academic seriousness with warmth, moral development, and child-centered guidance.`} />
          <div className="mt-14 grid-auto">
            {highlights.map((item) => (
              <MotionSection key={item.title}>
                <InfoCard {...item} />
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Welcome / Principal ══════ */}
      <section className="section blue-band">
        <div className="container grid items-center gap-12 lg:grid-cols-[0.88fr_1fr]">
          <MotionSection>
            <div className="relative">
              {/* Decorative offset border */}
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl bg-gradient-to-br from-[#2382bf]/15 to-[#f4d31f]/10" />
              <div className="image-frame relative aspect-[4/3] rounded-2xl">
                <Image src={images.hero} alt={`${schoolInfo.name} pupils seated in a learning circle`} fill className="object-cover" sizes="50vw" />
              </div>
            </div>
          </MotionSection>
          <MotionSection delay={0.1}>
            <p className="eyebrow">Welcome from the Principal</p>
            <h2 className="section-title">Children are loved, guided, inspired, and prepared for a bright future.</h2>
            <p className="section-lead">
              We believe every child has unique gifts and abilities. At {schoolInfo.name}, learning goes beyond the classroom through a safe, caring, and engaging environment where pupils ask questions, explore ideas, develop talents, and build the right foundation for lifelong success.
            </p>
            <div className="mt-8 border-l-[3px] border-[#f4d31f] pl-5">
              <p className="font-extrabold text-[#08213f]">Mrs Deborah Uloko</p>
              <p className="text-sm font-semibold text-[#5d6f82]">Principal, {schoolInfo.name}</p>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* ══════ About / Stats ══════ */}
      <section className="section">
        <div className="container grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <MotionSection>
            <SectionHeading eyebrow={`About ${schoolInfo.name}`} title={`Founded in ${schoolInfo.founded} with a passion for strong foundations`} subtitle="The school continues to nurture young minds, discover talents, and raise future leaders through quality education, discipline, and holistic development." />
            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map(([value, label]) => (
                <div key={label} className="rounded-xl border border-[#d5efff] bg-gradient-to-br from-[#f7fcff] to-[#eef8ff] p-5 transition-all duration-200 hover:shadow-md">
                  <p className="text-2xl font-extrabold text-[#0a4f8a]">{value}</p>
                  <p className="mt-1 text-sm font-bold text-[#5d6f82]">{label}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="button-dark mt-8">Learn More About Us <ArrowRight size={18} /></Link>
          </MotionSection>
          <MotionSection delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                "/images/school/334b3c7e-ae2e-4354-8d66-124135cf66ad.webp",
                "/images/school/aed7536d-4d24-4391-b715-417cffb6d8b7.webp",
                "/images/school/c0e769a1-8d48-4b69-ab32-537f79c2c992.webp",
                "/images/school/cea7d202-1842-4b46-a64c-687ae4169ffc.webp",
              ].map((src, index) => (
                <div key={src} className={`image-frame relative rounded-2xl ${index === 0 ? "aspect-[3/4]" : "aspect-square"} ${index === 1 ? "-translate-y-3" : ""} ${index === 2 ? "translate-y-3" : ""}`}>
                  <Image src={src} alt={`${schoolInfo.name} school moment`} fill className="object-cover" sizes="25vw" />
                </div>
              ))}
            </div>
          </MotionSection>
        </div>
      </section>

      {/* ══════ Facilities ══════ */}
      <section className="section cream-band">
        <div className="container">
          <SectionHeading centered eyebrow="Facilities" title="Learning spaces that support confidence and creativity" subtitle="Explore a visual preview of the school environment parents can trust." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {facilities.map((facility) => (
              <ImageCard key={facility.title} {...facility} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/facilities" className="button-dark">Explore Our Facilities</Link>
          </div>
        </div>
      </section>

      {/* ══════ Testimonials ══════ */}
      <section className="section">
        <div className="container">
          <SectionHeading centered eyebrow="Testimonials" title="What parents say" subtitle={`Hear from parents and guardians who value the care, learning, and support their children receive at ${schoolInfo.name}.`} />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.quote} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Admission is Open" text={`Begin your child journey at ${schoolInfo.name}. Our admission process is simple, clear, and designed to help us place each child in the right class.`} href="/admissions" label="View Admission Process" />
    </>
  );
}
