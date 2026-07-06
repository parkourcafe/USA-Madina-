import type { Metadata } from "next";
import Link from "next/link";
import { links } from "@/content/site";

export const metadata: Metadata = {
  title: "Got it",
  description: "We'll text your numbers within 48 hours.",
};

export default function ThanksPage() {
  return (
    <div className="mx-auto flex min-h-[60svh] max-w-3xl flex-col justify-center px-4 py-20 sm:px-6">
      <p className="eyebrow flex items-center gap-2.5 text-mute">
        <span className="dot-open" aria-hidden="true" />
        Request received
      </p>
      <h1 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
        Got it — we'll text your numbers within 48 hours.
      </h1>
      <p className="mt-5 max-w-xl leading-relaxed text-mute">
        Keep an eye on your phone. You'll get one text with your missed-call numbers in
        plain English — no PDF, no meeting, no chasing.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href={links.calendlyUrl}
          className="eyebrow rounded-full bg-signal px-7 py-4 text-center text-paper transition-opacity hover:opacity-90"
        >
          Want to talk sooner? Book a call
        </a>
        <Link
          href="/"
          className="eyebrow rounded-full border border-line px-7 py-4 text-center transition-colors hover:border-ink"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
