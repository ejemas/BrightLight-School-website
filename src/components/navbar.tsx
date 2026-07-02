"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { images, schoolInfo } from "@/lib/content";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/admissions", label: "Admissions" },
  { href: "/academics", label: "Academics" },
  { href: "/contact", label: "Contact" },
];

const exploreLinks = [
  { href: "/classes", label: "Classes", desc: "Creche through Primary 5" },
  { href: "/facilities", label: "Facilities", desc: "Learning spaces & environment" },
  { href: "/gallery", label: "Gallery", desc: "School photos & memories" },
  { href: "/activities", label: "Activities", desc: "Sports, music, drama & more" },
  { href: "/news-events", label: "News & Events", desc: "Updates & announcements" },
  { href: "/staff", label: "Staff", desc: "Meet our dedicated team" },
  { href: "/testimonials", label: "Testimonials", desc: "What parents say" },
  { href: "/faq", label: "FAQ", desc: "Common questions answered" },
];

const allLinks = [...primaryLinks, ...exploreLinks];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close menus on route change */
  useEffect(() => {
    const id = window.setTimeout(() => {
      setMobileOpen(false);
      setExploreOpen(false);
    }, 0);

    return () => window.clearTimeout(id);
  }, [pathname]);

  /* close dropdown on outside click */
  useEffect(() => {
    if (!exploreOpen) return;
    const close = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setExploreOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [exploreOpen]);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isExploreActive = exploreLinks.some((l) => pathname === l.href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[rgba(10,79,138,0.06)] bg-white/75 shadow-[0_1px_12px_rgba(8,33,63,0.05)] backdrop-blur-2xl"
          : "border-b border-transparent bg-white/95 backdrop-blur-xl"
      }`}
    >
      <div className="container flex min-h-[70px] items-center justify-between gap-6">
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 transition-opacity hover:opacity-80"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src={images.logo}
            alt={`${schoolInfo.name} logo`}
            width={48}
            height={34}
            className="h-[34px] w-[48px] rounded-lg object-cover"
            priority
          />
          <div className="min-w-0">
            <p className="truncate text-[0.88rem] font-extrabold leading-tight text-[#08213f]">
              {schoolInfo.shortName}
            </p>
            <p className="hidden text-[0.68rem] font-semibold text-[#2382bf] sm:block">
              Warri, Delta State
            </p>
          </div>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {primaryLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-[0.84rem] font-bold transition-all duration-200 ${
                  active
                    ? "bg-[#e9f7ff] text-[#0a4f8a]"
                    : "text-[#3a5068] hover:bg-[#f4fbff] hover:text-[#0a4f8a]"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-0.5 left-1/2 h-[2.5px] w-5 -translate-x-1/2 rounded-full bg-[#2382bf]" />
                )}
              </Link>
            );
          })}

          {/* Explore Dropdown Trigger */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setExploreOpen((v) => !v)}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.84rem] font-bold transition-all duration-200 ${
                exploreOpen || isExploreActive
                  ? "bg-[#e9f7ff] text-[#0a4f8a]"
                  : "text-[#3a5068] hover:bg-[#f4fbff] hover:text-[#0a4f8a]"
              }`}
            >
              Explore
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${exploreOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Dropdown Panel */}
            {exploreOpen && (
              <div className="absolute right-0 top-full mt-3 w-[440px] animate-slide-down rounded-2xl border border-[rgba(10,79,138,0.06)] bg-white p-2 shadow-[0_20px_60px_rgba(8,33,63,0.13)]">
                <div className="grid grid-cols-2 gap-0.5">
                  {exploreLinks.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`group rounded-xl px-4 py-3 transition-all duration-200 ${
                          active ? "bg-[#e9f7ff]" : "hover:bg-[#f8fcff]"
                        }`}
                        onClick={() => setExploreOpen(false)}
                      >
                        <p
                          className={`text-[0.84rem] font-bold ${
                            active
                              ? "text-[#0a4f8a]"
                              : "text-[#08213f] group-hover:text-[#0a4f8a]"
                          }`}
                        >
                          {link.label}
                        </p>
                        <p className="mt-0.5 text-[0.72rem] leading-relaxed text-[#5d6f82]">
                          {link.desc}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/admissions" className="button-primary min-h-[42px] px-6 text-[0.82rem]">
            Apply Now
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#d7e8f3] text-[#08213f] transition-colors hover:bg-[#e9f7ff] lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Full-Screen Menu ── */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[70px] z-40 animate-fade-in overflow-y-auto bg-white lg:hidden">
          <div className="container pb-8 pt-4">
            <p className="px-2 pb-2 text-[0.7rem] font-extrabold uppercase tracking-[0.12em] text-[#2382bf]">
              Menu
            </p>
            <div className="grid gap-0.5">
              {allLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl px-4 py-3.5 text-[0.92rem] font-bold transition-colors ${
                      active
                        ? "bg-[#e9f7ff] text-[#0a4f8a]"
                        : "text-[#08213f] hover:bg-[#f4fbff]"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 border-t border-[#d7e8f3] pt-6">
              <Link
                href="/admissions"
                className="button-primary w-full"
                onClick={() => setMobileOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
