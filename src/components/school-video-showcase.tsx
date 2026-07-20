"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { MotionSection } from "@/components/motion-section";

export function SchoolVideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  async function togglePlay() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.muted = false;
      video.defaultMuted = false;
      video.volume = 1;

      try {
        await video.play();
      } catch {
        setPlaying(false);
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <section className="section relative overflow-hidden bg-white">
      {/* Decorative blobs */}
      <div className="decoration-blob -top-28 -left-20 h-72 w-72 bg-[#2382bf]/6" />
      <div className="decoration-blob -bottom-20 right-[8%] h-56 w-56 bg-[#f4d31f]/5" />

      <div className="container relative grid items-center gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
        {/* ── Left: Text Content ── */}
        <MotionSection>
          <p className="eyebrow">School Tour</p>

          <h2 className="section-title mt-4">
            Experience the BrightLight environment
          </h2>

          <p className="section-lead">
            Take a glimpse into our school surroundings — the classrooms, outdoor spaces, and learning areas where children feel safe, happy, and inspired to grow every day.
          </p>

          <div className="mt-8 space-y-4">
            {[
              ["Safe & Welcoming", "A secure, child-friendly campus parents can trust"],
              ["Vibrant Spaces", "Bright classrooms and play areas designed for active learning"],
              ["Nurturing Atmosphere", "A warm environment where every child feels valued"],
            ].map(([title, desc]) => (
              <div key={title} className="flex items-start gap-3">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-[#f4d31f] to-[#e6c400]" />
                <div>
                  <p className="text-sm font-extrabold text-[#08213f]">{title}</p>
                  <p className="text-[0.8rem] leading-relaxed text-[#5d6f82]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </MotionSection>

        {/* ── Right: Portrait Video ── */}
        <MotionSection delay={0.15}>
          <div className="relative mx-auto w-full max-w-[340px] lg:max-w-[380px]">
            {/* Gradient glow behind video */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#2382bf]/25 via-[#f4d31f]/10 to-[#2382bf]/20 blur-2xl" />
            <div className="absolute -inset-1 rounded-[1.8rem] bg-gradient-to-br from-[#2382bf]/30 to-[#f4d31f]/15" />

            {/* Video container */}
            <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0a1f35] shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
              {/* Aspect ratio wrapper for portrait video */}
              <div className="relative aspect-[9/16]">
                <video
                  ref={videoRef}
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/images/school-video/school-environs.mov"
                  playsInline
                  loop
                  preload="metadata"
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  onEnded={() => setPlaying(false)}
                />

                {/* Gradient overlays on video */}
                <div className={`absolute inset-0 bg-gradient-to-t from-[#08213f]/70 via-transparent to-[#08213f]/30 transition-opacity duration-500 ${playing ? "opacity-0" : "opacity-100"}`} />

                {/* Play/Pause button */}
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={playing ? "Pause video" : "Play video"}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${playing ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
                >
                  <span className={`relative flex items-center justify-center ${!playing ? "" : ""}`}>
                    {/* Pulse ring behind play button */}
                    {!playing && (
                      <span className="absolute h-20 w-20 rounded-full bg-white/20 animate-pulse-ring" />
                    )}
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#08213f] shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-transform duration-300 hover:scale-110">
                      {playing ? (
                        <Pause size={24} fill="currentColor" />
                      ) : (
                        <Play size={26} fill="currentColor" className="ml-1" />
                      )}
                    </span>
                  </span>
                </button>

                {/* Bottom label on video */}
                {!playing && (
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-center text-xs font-bold uppercase tracking-[0.1em] text-white/80">
                      Tap to explore our school
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
