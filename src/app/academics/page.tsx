import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, ClipboardCheck, type LucideIcon } from "lucide-react";
import { CheckList } from "@/components/check-list";
import { InfoCard } from "@/components/info-card";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { images, nurseryFocus, primaryFocus, subjects, teachingMethods } from "@/lib/content";

export const metadata: Metadata = {
  title: "Academics",
  description: "Building strong academic foundations through innovative teaching, discipline, and holistic learning."
};

function CurriculumCard({
  title,
  description,
  icon: Icon,
  image,
  imageAlt
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
}) {
  return (
    <article className="card hover-lift accent-bar-top group relative min-h-[260px] overflow-hidden p-7">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="pointer-events-none object-cover opacity-[0.5] transition-opacity duration-1000 ease-out [mask-image:linear-gradient(135deg,transparent_0%,transparent_22%,black_56%)] [object-position:right_bottom] group-hover:opacity-65 sm:opacity-[0.54]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/92 to-white/38" />
      <div className="relative z-10 max-w-[78%] sm:max-w-[70%]">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e9f7ff] to-[#d5efff] text-[#0a4f8a] transition-transform duration-300 group-hover:scale-110">
          <Icon size={24} />
        </div>
        <h3 className="text-lg font-extrabold text-[#08213f]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#5d6f82]">{description}</p>
      </div>
    </article>
  );
}

export default function AcademicsPage() {
  return (
    <>
      <PageHero eyebrow="Academics" title="Building strong academic foundations" subtitle="Innovative teaching, discipline, and holistic learning for nursery and primary pupils." image={images.academics} />

      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          <CurriculumCard
            title="Nursery Curriculum"
            description="Our nursery curriculum introduces young learners to the joy of learning through play, creativity, guided activities, songs, stories, and early literacy and numeracy development."
            icon={BookOpen}
            image="/images/school/df0da8bd-8339-4ba8-96d7-228ba02ce3c7.webp"
            imageAlt="Nursery pupils seated in a learning circle"
          />
          <CurriculumCard
            title="Primary Curriculum"
            description="Our primary curriculum builds strong foundations in literacy, numeracy, critical thinking, creativity, discipline, and confidence."
            icon={ClipboardCheck}
            image="/images/school/96f3d535-8982-4637-a210-4480dd353eea.webp"
            imageAlt="Primary pupils gathered outdoors"
          />
        </div>
      </section>

      <section className="section blue-band">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Nursery Focus" title="Early years learning" />
            <div className="mt-8"><CheckList items={nurseryFocus} /></div>
          </div>
          <div>
            <SectionHeading eyebrow="Primary Focus" title="Primary learning areas" />
            <div className="mt-8"><CheckList items={primaryFocus} /></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading centered eyebrow="Subjects Offered" title="Balanced academic and moral development" />
          <div className="mt-12"><CheckList items={subjects} /></div>
        </div>
      </section>

      <section className="section cream-band">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Teaching Methods" title="Child-centered and interactive" subtitle="Our teaching approach helps pupils understand, participate, and apply what they learn." />
            <div className="mt-8"><CheckList items={teachingMethods} /></div>
          </div>
          <div className="grid gap-6">
            <InfoCard title="Assessment System" description="Pupils are assessed through observation, class exercises, assignments, tests, oral activities, projects, and termly examinations." />
            <InfoCard title="Homework Policy" description="Homework reinforces classroom learning, encourages responsibility, and helps parents stay involved without overwhelming the child." />
          </div>
        </div>
      </section>
    </>
  );
}
