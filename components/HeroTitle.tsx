"use client";

import { motion, useReducedMotion } from "motion/react";

/** Word-by-word hero headline reveal. Words inside `em` render in
 *  safety orange. Static headline when the user prefers reduced motion. */
export default function HeroTitle({
  text,
  em,
  className,
}: {
  text: string;
  em?: string;
  className?: string;
}) {
  const reduced = useReducedMotion();

  // Mark which words fall inside the emphasized substring.
  const emStart = em ? text.indexOf(em) : -1;
  const words = text.split(" ").map((word, i, all) => {
    const charStart = all.slice(0, i).reduce((n, w) => n + w.length + 1, 0);
    const emphasized =
      emStart >= 0 && charStart >= emStart && charStart < emStart + (em?.length ?? 0);
    return { word, emphasized };
  });

  if (reduced) {
    return (
      <h1 className={className}>
        {words.map(({ word, emphasized }, i) => (
          <span key={i} className={emphasized ? "text-signal" : undefined}>
            {word}{" "}
          </span>
        ))}
      </h1>
    );
  }

  return (
    <h1 className={className} aria-label={text}>
      {words.map(({ word, emphasized }, i) => (
        <span key={i} aria-hidden="true">
          <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
            <motion.span
              className={`inline-block ${emphasized ? "text-signal" : ""}`}
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>{" "}
        </span>
      ))}
    </h1>
  );
}
