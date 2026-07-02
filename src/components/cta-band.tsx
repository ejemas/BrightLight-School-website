import Link from "next/link";

export function CtaBand({
  title,
  text,
  href,
  label
}: {
  title: string;
  text: string;
  href: string;
  label: string;
}) {
  return (
    <section className="section-tight relative overflow-hidden bg-gradient-to-br from-[#08213f] via-[#0c2d50] to-[#0a4f8a] text-white">
      {/* Decorative blobs */}
      <div className="decoration-blob -top-20 right-[10%] h-56 w-56 bg-[#2382bf]/15" />
      <div className="decoration-blob -bottom-16 left-[5%] h-44 w-44 bg-[#f4d31f]/10" />
      <div className="decoration-blob top-1/2 right-[40%] h-28 w-28 bg-white/5" />

      <div className="container relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#f4d31f]">Next Step</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mt-4 text-[0.95rem] leading-8 text-[#c8e4f6]">{text}</p>
        </div>
        <Link href={href} className="button-primary shrink-0">
          {label}
        </Link>
      </div>
    </section>
  );
}
