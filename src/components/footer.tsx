import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { images, schoolInfo, socialLinks } from "@/lib/content";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const exploreLinks = [
  { label: "Classes", href: "/classes" },
  { label: "Facilities", href: "/facilities" },
  { label: "Activities", href: "/activities" },
  { label: "News & Events", href: "/news-events" },
  { label: "Staff", href: "/staff" },
  { label: "FAQ", href: "/faq" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0b2a4a] to-[#08213f] text-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2382bf]/25 to-transparent" />
      <div className="decoration-blob -top-32 -right-32 h-72 w-72 bg-[#2382bf]/8" />
      <div className="decoration-blob -bottom-20 -left-20 h-56 w-56 bg-[#f4d31f]/6" />

      <div className="container relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.7fr_0.8fr]">
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={images.logo}
              alt={`${schoolInfo.name} logo`}
              width={64}
              height={44}
              className="h-11 w-16 rounded-lg object-cover"
            />
            <div>
              <p className="text-[1.05rem] font-extrabold leading-tight">{schoolInfo.name}</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#93bdd8]">
            {schoolInfo.tagline}
          </p>
          <div className="mt-6 space-y-2.5 text-sm text-[#a8cfe6]">
            <p>{schoolInfo.address}</p>
            <p>{schoolInfo.phone}</p>
            <p>{schoolInfo.email}</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#f4d31f]">
            Quick Links
          </p>
          <div className="mt-5 grid gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#a8cfe6] transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#f4d31f]">
            Explore
          </p>
          <div className="mt-5 grid gap-3">
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#a8cfe6] transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#f4d31f]">
            Connect
          </p>
          <div className="mt-5 grid gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-sm text-[#a8cfe6] transition-all duration-200 hover:translate-x-1 hover:text-white"
              >
                {item.label}
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            ))}
          </div>
          <Link href="/admissions" className="button-primary mt-8 min-h-[42px] px-5 text-[0.82rem]">
            Apply Now
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container py-6 text-center">
          <p className="text-xs font-medium text-[#6b9fc0]">
            © 2026 The BrightLight Nursery and Primary School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
