import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export function ImageCard({
  title,
  description,
  image,
  icon: Icon
}: {
  title: string;
  description: string;
  image: string;
  icon?: LucideIcon;
}) {
  return (
    <article className="card hover-lift group overflow-hidden rounded-2xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08213f]/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="p-6">
        {Icon ? (
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#fff9e5] to-[#fdf6d0] text-[#08213f]">
            <Icon size={20} />
          </div>
        ) : null}
        <h3 className="text-lg font-extrabold text-[#08213f]">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-[#5d6f82]">{description}</p>
      </div>
    </article>
  );
}
