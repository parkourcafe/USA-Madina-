"use client";

import { useEffect, useRef, useState } from "react";
import type { MediaSlot } from "@/content/site";
import SafeImg from "@/components/SafeImg";

/**
 * Cinematic background for a section. Layered fallback:
 *   1. Pure CSS pine/orange field — always present, so the section
 *      is never broken or empty.
 *   2. Poster image on top, if the file exists.
 *   3. Video on top of that — desktop pointer devices only, never on
 *      mobile, never with reduced motion, and only once the section
 *      has scrolled into view. Nothing is fetched before that, and a
 *      missing/unplayable file quietly drops back to the poster.
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
  const [videoSrc, setVideoSrc] = useState<{ src: string; type: string } | null>(null);

  useEffect(() => {
    if (!slot.mp4 && !slot.webm) return;
    const desktop = window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!desktop.matches || reduced.matches) return;

    const el = containerRef.current;
    if (!el) return;
    let alive = true;

    // Prefer WebM (smaller), fall back to MP4 — probing each so a
    // missing file never produces a broken player or console errors.
    const pickSource = async () => {
      const candidates = [
        slot.webm ? { src: slot.webm, type: "video/webm" } : null,
        slot.mp4 ? { src: slot.mp4, type: "video/mp4" } : null,
      ].filter(Boolean) as { src: string; type: string }[];
      for (const candidate of candidates) {
        try {
          const res = await fetch(candidate.src, { method: "HEAD" });
          const type = res.headers.get("content-type") ?? "";
          if (res.ok && !type.includes("text/html")) return candidate;
        } catch {
          /* keep trying */
        }
      }
      return null;
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          pickSource().then((source) => {
            if (alive && source) setVideoSrc(source);
          });
        }
      },
      { rootMargin: "120px" }
    );
    io.observe(el);
    return () => {
      alive = false;
      io.disconnect();
    };
  }, [slot.mp4, slot.webm]);

  useEffect(() => {
    if (!videoSrc) return;
    const video = videoRef.current;
    if (!video) return;
    const fail = () => setVideoSrc(null);
    video.addEventListener("error", fail);
    video.play().catch(() => {
      /* autoplay refused — poster stays, which is fine */
    });
    return () => video.removeEventListener("error", fail);
  }, [videoSrc]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="cine-field" />
      <SafeImg
        src={slot.poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {videoSrc && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc.src}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
      )}
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
