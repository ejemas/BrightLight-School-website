"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, MessageCircle, X } from "lucide-react";
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
  { href: "/faq", label: "FAQ", desc: "Common questions answered" },
];

const allLinks = [...primaryLinks, ...exploreLinks];

const menuEase = [0.22, 1, 0.36, 1] as const;

const mobileMenuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.28, ease: menuEase } },
  exit: { opacity: 0, transition: { duration: 0.22, ease: menuEase } },
};

const mobilePanelVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: menuEase } },
  exit: { opacity: 0, y: 18, scale: 0.985, transition: { duration: 0.24, ease: menuEase } },
};

const mobileListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035, delayChildren: 0.08 } },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.36, ease: menuEase } },
};

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

  /* close mobile menu with Escape */
  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
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
            <p className="max-w-[155px] whitespace-normal text-[0.7rem] font-extrabold leading-[1.15] text-[#08213f] sm:max-w-none sm:whitespace-nowrap sm:text-[0.88rem] sm:leading-tight">
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
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation-menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b9dff5] bg-white/60 text-[#08213f] shadow-[0_8px_24px_rgba(8,33,63,0.08)] transition-colors hover:bg-[#e9f7ff] lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 180 : 0, scale: mobileOpen ? 0.94 : 1 }}
            transition={{ duration: 0.32, ease: menuEase }}
            className="inline-flex"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.span>
        </button>
      </div>

      {/* ── Mobile Full-Screen Menu ── */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-navigation-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-x-0 top-[70px] z-40 h-[calc(100dvh-70px)] overflow-y-auto bg-[#08213f] text-white lg:hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0%,rgba(35,130,191,0.35),transparent_34%),radial-gradient(circle_at_92%_12%,rgba(244,211,31,0.18),transparent_30%),linear-gradient(180deg,#08213f_0%,#0a345e_52%,#06182e_100%)]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f4d31f]/70 to-transparent" />
            <motion.div
              variants={mobilePanelVariants}
              className="container relative flex min-h-full flex-col px-5 pb-6 pt-5"
            >
              <motion.nav
                variants={mobileListVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-0"
                aria-label="Mobile navigation"
              >
                {allLinks.map((link, index) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div key={link.href} variants={mobileLinkVariants}>
                      <Link
                        href={link.href}
                        className={`group flex items-center justify-between gap-4 border-b border-white/12 px-0 py-2.5 transition-all duration-300 ${
                          active
                            ? "text-[#f4d31f]"
                            : "text-white hover:text-[#f4d31f]"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="flex min-w-0 items-baseline gap-2">
                          <span className="truncate text-[0.98rem] font-extrabold uppercase leading-none tracking-[0.01em]">
                            {link.label}
                          </span>
                          <span className={`text-[0.58rem] font-bold ${active ? "text-[#fff3a3]" : "text-[#9fcbe6]"}`}>
                            ({String(index + 1).padStart(2, "0")})
                          </span>
                        </span>
                        <span className={`inline-flex h-7 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          active
                            ? "border-[#f4d31f]/70 bg-[#f4d31f] text-[#08213f]"
                            : "border-white/22 text-white group-hover:border-[#f4d31f]/60 group-hover:text-[#f4d31f]"
                        }`}>
                          <ArrowRight size={14} />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              <div className="mt-auto border-t border-white/14 pt-5">
                <div>
                  <p className="text-[0.7rem] font-semibold text-[#c8e4f6]">
                    Ready to begin?
                  </p>
                  <Link
                    href="/admissions"
                    className="button-primary mt-3 min-h-[42px] w-full text-[0.82rem]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Apply Now
                  </Link>
                  <Link
                    href={schoolInfo.whatsapp === "#" ? "/contact" : schoolInfo.whatsapp}
                    className="mt-2 flex items-center justify-center gap-2 rounded-full border border-white/18 px-5 py-2.5 text-[0.82rem] font-extrabold text-white transition-colors hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    <MessageCircle size={15} />
                    Contact School Admin
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
