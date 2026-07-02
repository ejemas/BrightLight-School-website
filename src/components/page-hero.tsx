import Image from "next/image";
import { MotionSection } from "@/components/motion-section";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  children
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#08213f] text-white">
      {image ? (
        <Image src={image} alt="" fill priority className="object-cover opacity-25" sizes="100vw" />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,33,63,0.95)_0%,rgba(8,33,63,0.78)_40%,rgba(35,130,191,0.45)_100%)]" />

      {/* Decorative floating shapes */}
      <div className="absolute top-16 right-[12%] h-48 w-48 animate-float rounded-full bg-[#2382bf]/10 blur-2xl" />
      <div className="absolute bottom-20 left-[8%] h-32 w-32 animate-float-slow rounded-full bg-[#f4d31f]/10 blur-xl" />
      <div className="absolute top-1/2 right-[30%] h-20 w-20 animate-float rounded-full bg-white/5 blur-lg" />

      <div className="container relative py-28 sm:py-32">
        <MotionSection className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#f4d31f]">{eyebrow}</p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 text-[1.05rem] leading-8 text-[#d0eafc]">{subtitle}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </MotionSection>
      </div>

      {/* Wave bottom */}
      <svg className="hero-wave" viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 72L60 60C120 48 240 24 360 18C480 12 600 24 720 30C840 36 960 36 1080 30C1200 24 1320 12 1380 6L1440 0V72H1380C1320 72 1200 72 1080 72C960 72 840 72 720 72C600 72 480 72 360 72C240 72 120 72 60 72H0Z" fill="white"/>
      </svg>
    </section>
  );
}
