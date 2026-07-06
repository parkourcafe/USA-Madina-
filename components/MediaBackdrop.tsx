"use client";

import { useEffect, useRef, useState } from "react";
import type { MediaSlot } from "@/content/site";

/**
 * Cinematic background for a section. Receives a slot already resolved
 * at build time (lib/media.ts strips paths whose files don't exist), so
 * nothing here ever requests a missing file. Layered fallback:
 *   1. Pure CSS pine/orange field — always present, so the section
 *      is never broken or empty.
 *   2. Poster image on top, when the file exists.
 *   3. Video on top of that — desktop pointer devices only, never on
 *      mobile, never with reduced motion, and only once the section
 *      has scrolled into view (nothing is fetched before that).
 *
 * An `overlay` gradient sits above the media for text legibility.
 */
export default function MediaBackdrop({
  slot,
  overlayClassName = "bg-gradient-to-b from-pine-2/75 via-pine-2/45 to-pine-2/80",
}: {
  slot: MediaSlot;
  overlayClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoOn, setVideoOn] = useState(false);

  const hasVideo = Boolean(slot.mp4 || slot.webm);

  useEffect(() => {
    if (!hasVideo) return;
    const desktop = window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!desktop.matches || reduced.matches) return;

    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVideoOn(true);
          io.disconnect();
        }
      },
      { rootMargin: "120px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [hasVideo]);

  // If a file turns out unplayable, drop back to the poster quietly.
  useEffect(() => {
    if (!videoOn) return;
    const video = videoRef.current;
    if (!video) return;
    const fail = () => setVideoOn(false);
    video.addEventListener("error", fail);
    const sources = Array.from(video.querySelectorAll("source"));
    sources.forEach((s) => s.addEventListener("error", fail));
    video.play().catch(() => {
      /* autoplay refused — poster stays, which is fine */
    });
    return () => {
      video.removeEventListener("error", fail);
      sources.forEach((s) => s.removeEventListener("error", fail));
    };
  }, [videoOn]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="cine-field" />
      {slot.poster && (
        <img
          src={slot.poster}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {videoOn && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={slot.poster}
        >
          {slot.webm && <source src={slot.webm} type="video/webm" />}
          {slot.mp4 && <source src={slot.mp4} type="video/mp4" />}
        </video>
      )}
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
