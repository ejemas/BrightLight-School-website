import type { LucideIcon } from "lucide-react";

export function InfoCard({
  title,
  description,
  icon: Icon
}: {
  title: string;
  description: string;
  icon?: LucideIcon;
}) {
  return (
    <article className="card hover-lift accent-bar-top group p-7">
      {Icon ? (
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e9f7ff] to-[#d5efff] text-[#0a4f8a] transition-transform duration-300 group-hover:scale-110">
          <Icon size={24} />
        </div>
      ) : null}
      <h3 className="text-lg font-extrabold text-[#08213f]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#5d6f82]">{description}</p>
    </article>
  );
}
