"use client";

import { useEffect, useRef, useState } from "react";

/** Trailing cursor halo. Desktop only: renders nothing on touch
 *  devices or when the user prefers reduced motion. */
export default function CursorHalo() {
  const [enabled, setEnabled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    let tx = -400,
      ty = -400; // target
    let cx = tx,
      cy = ty; // current (trails behind)

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return <div ref={ref} className="cursor-halo" aria-hidden="true" />;
}
