"use client";

import { useEffect, useState } from "react";

/** Renders an <img> only after confirming the file exists (HEAD probe).
 *  Missing files render nothing — no broken icon, no console 404 spam —
 *  so whatever sits beneath (a CSS field, a placeholder frame) shows. */
export default function SafeImg({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(src, { method: "HEAD" })
      .then((res) => {
        const type = res.headers.get("content-type") ?? "";
        if (alive && res.ok && !type.includes("text/html")) setOk(true);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [src]);

  if (!ok) return null;
  return (
    <img src={src} alt={alt} loading="lazy" decoding="async" className={className} />
  );
}
