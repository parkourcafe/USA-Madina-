import type { Metadata } from "next";
import Link from "next/link";
import AuditForm from "@/components/AuditForm";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Free missed-call audit",
  description:
    "Find out how many calls your company is missing and what they're worth. We'll text you your numbers within 48 hours.",
};

const steps = [
  {
    title: "Send the form",
    body: "Takes 30 seconds. Name, company, website, mobile, channels.",
  },
  {
    title: "We run your numbers",
    body: "Missed calls, after-hours calls, and calls that never got a follow-up.",
  },
  {
    title: "You get a text",
    body: "Your numbers, in plain English, within 48 hours. No meeting required.",
  },
];

export default function AuditPage() {
  return (
    <>
      <header className="border-b border-line bg-paper">
        <div className="mx-auto flex h-14 max-w-3xl items-center px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="dot-open" aria-hidden="true" />
            <span className="font-display text-lg font-semibold tracking-tight">
              {company.name}
            </span>
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="eyebrow text-mute">Free · no meeting · no obligation</p>
        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
          How many calls is your company missing? Find out — free.
        </h1>
        <p className="mt-5 max-w-xl leading-relaxed text-mute">
          We'll pull together your missed-call picture and text you the numbers. If they're
          ugly, you'll know what it's costing you. If they're fine, you lose nothing.
        </p>

        <div className="mt-10 border border-line bg-paper p-6 sm:p-8">
          <AuditForm />
        </div>

        <section className="mt-14">
          <h2 className="eyebrow text-mute">What happens next</h2>
          <ol className="mt-6 space-y-6">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-sm text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-mute">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
}
