import type { Metadata } from "next";
import Link from "next/link";
import { cases } from "@/content/site";

export const metadata: Metadata = {
  title: "Results",
  description: "What answered phones turn into: booked jobs and recovered revenue.",
};

export default function ResultsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <p className="eyebrow text-mute">Results</p>
      <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
        What an answered phone turns into.
      </h1>

      <div className="hairline-grid mt-14 lg:grid-cols-3">
        {cases.map((c, i) => (
          <article key={i} className="flex flex-col p-6 sm:p-8">
            <p className="font-mono text-4xl font-medium text-signal">{c.metric}</p>
            <p className="eyebrow mt-2 text-mute">{c.metricLabel}</p>
            <p className="mt-6 flex-1 text-sm leading-relaxed">{c.story}</p>
            <p className="eyebrow mt-6 border-t border-line pt-4 text-mute">
              {c.client} · {c.city}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-14 border border-line bg-pine p-8 text-paper sm:p-10">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Want to know what your missed calls are worth?
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-paper/80">
          The free audit shows you — missed calls, after-hours calls, quotes with no
          follow-up — texted to you within 48 hours.
        </p>
        <Link
          href="/audit"
          className="eyebrow mt-8 inline-block rounded-full bg-signal px-7 py-4 text-paper transition-opacity hover:opacity-90"
        >
          Get the free audit
        </Link>
      </div>
    </div>
  );
}
