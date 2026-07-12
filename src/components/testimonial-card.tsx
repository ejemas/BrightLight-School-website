import { Quote } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  const guardianName = name.trim().replace(/^(mr|mrs|ms|dr)\.?\s+/i, "");
  const initial = guardianName.charAt(0).toUpperCase() || "?";

  return (
    <article className="card hover-lift p-7">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#e9f7ff] to-[#d5efff]">
        <Quote className="text-[#2382bf]" size={20} />
      </div>
      <p className="mt-5 text-sm leading-7 text-[#5d6f82]">{quote}</p>
      <div className="mt-6 flex items-center gap-3 border-t border-[#d7e8f3] pt-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#bfe4fb] bg-[#e9f7ff] text-base font-extrabold text-[#0a4f8a]" aria-hidden="true">
          {initial}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-extrabold text-[#08213f]">{name}</span>
          <span className="block text-sm font-semibold text-[#0a4f8a]">{role}</span>
        </span>
      </div>
    </article>
  );
}
