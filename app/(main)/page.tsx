import Link from "next/link";
import HeroTitle from "@/components/HeroTitle";
import MediaBackdrop from "@/components/MediaBackdrop";
import Reveal from "@/components/Reveal";
import { company, hero, links, pricing, quotes, stats } from "@/content/site";
import { media } from "@/lib/media";

function Eyebrow({
  children,
  dark = false,
  dot = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
  dot?: boolean;
}) {
  return (
    <p className={`eyebrow flex items-center gap-2.5 ${dark ? "text-paper/70" : "text-mute"}`}>
      {dot && <span className="dot-open" aria-hidden="true" />}
      {children}
    </p>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="relative flex min-h-[92svh] items-center text-paper">
      <MediaBackdrop
        slot={media.heroVideo}
        overlayClassName="bg-gradient-to-b from-pine-2/60 via-pine-2/35 to-pine-2/85"
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
        <Eyebrow dark dot>
          {hero.eyebrow}
        </Eyebrow>
        <HeroTitle
          text={hero.h1}
          em={hero.h1Em}
          className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
        />
        <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/85 sm:text-lg">
          {hero.sub}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/audit"
            className="eyebrow rounded-full bg-signal px-7 py-4 text-center text-paper transition-opacity hover:opacity-90"
          >
            {hero.primaryCta}
          </Link>
          <a
            href="#how"
            className="eyebrow rounded-full border border-paper/40 px-7 py-4 text-center text-paper transition-colors hover:border-paper"
          >
            {hero.secondaryCta}
          </a>
        </div>
        <p className="eyebrow mt-8 text-paper/60">{hero.note}</p>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */

function Stats() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat, i) => (
          <Reveal key={i} delay={i * 0.08} className="px-4 py-10 sm:px-8">
            <p className="font-mono text-4xl font-medium text-signal">{stat.value}</p>
            <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-mute">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- The leak ---------------- */

const leaks = [
  {
    title: "After hours",
    body: "The pipe bursts at 9pm. They call. It goes to voicemail. They call the next guy. You never knew it happened.",
  },
  {
    title: "Overflow",
    body: "Two techs, one office. When three calls come in at once, two of them roll to a mailbox nobody checks until tomorrow.",
  },
  {
    title: "No callback",
    body: "Up to 85% of people never call a business back after one missed call. That lead is gone the second it rings out.",
  },
  {
    title: "Slow to respond",
    body: "The customer who spoke to a human — or got a text in 60 seconds — books. The one who waited moved on.",
  },
];

function Problem() {
  return (
    <section id="problem" className="relative text-paper">
      <MediaBackdrop
        slot={media.problemSequence}
        overlayClassName="bg-gradient-to-b from-pine-2/85 via-pine-2/70 to-pine-2/90"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <Reveal>
          <Eyebrow dark>The leak</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Your marketing is working. Your phone isn't.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-paper/80">
            You pay for Google, LSA, trucks, and referrals to make the phone ring. Then
            the jobs leak out the moment nobody picks up.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-px border border-paper/15 bg-paper/15 sm:grid-cols-2">
          {leaks.map((leak, i) => (
            <Reveal key={i} delay={i * 0.06} className="bg-pine-2/90 p-6 sm:p-8">
              <p className="font-mono text-sm text-signal">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-xl font-semibold">{leak.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/75">{leak.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- What we do ---------------- */

const services = [
  { k: "Lead flow", title: "More calls in", body: "We set up your Google Local Services & Business Profile so new calls actually come through." },
  { k: "Answer", title: "Every call, 24/7", body: "After-hours and overflow calls get answered by a natural-sounding AI — no more voicemail." },
  { k: "Recover", title: "Missed-call text-back", body: "Any call that slips through gets an automatic text within 60 seconds. The lead stays warm." },
  { k: "Qualify", title: "The right questions", body: "Service type, address, urgency, equipment, budget — captured before it ever reaches you." },
  { k: "Book", title: "Straight to the calendar", body: "Jobs get scheduled into your slots, or handed to a person warm. No lead left sitting." },
  { k: "Sync", title: "Into your CRM", body: "Every lead lands in your pipeline automatically — no copying, no sticky notes." },
  { k: "Reviews", title: "More 5-stars", body: "Every finished job auto-requests a Google review — which lifts you higher and rings the phone more." },
  { k: "Report", title: "Your weekly numbers", body: "Calls answered, jobs booked, revenue recovered — one clear email every week. No dashboards to learn." },
  { k: "Managed", title: "We run it for you", body: "You're on the job, not in a dashboard. We handle setup, tuning, and upkeep. You just get the jobs." },
];

function WhatWeDo() {
  return (
    <section id="work" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <Reveal>
          <Eyebrow>What we do</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            One system that fills the phone — and answers it.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-mute">
            Not a chatbot. A managed front desk that captures the lead, books the job, and
            reports back every week.
          </p>
        </Reveal>
        <div className="hairline-grid mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={i} delay={(i % 3) * 0.05} className="p-6 sm:p-8">
              <p className="eyebrow text-signal">{service.k}</p>
              <h3 className="mt-3 font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{service.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */

const steps = [
  {
    title: "Free missed-call audit",
    body: "We call your line after hours and on a Saturday, and show you exactly how many jobs you're losing right now — with the numbers.",
  },
  {
    title: "We set it up — 7 days",
    body: "We build the answering, text-back, booking, CRM sync, and lead flow around your current office. You don't change your number.",
  },
  {
    title: "You stop losing calls",
    body: "The line is covered day one. Every week you get a report of what came in, what booked, and what it earned you.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="relative text-paper">
      <MediaBackdrop
        slot={media.loopVisual}
        overlayClassName="bg-gradient-to-b from-pine-2/80 via-pine-2/70 to-pine-2/85"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <Reveal>
          <Eyebrow dark>How it works</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Live in a week. Not a big project.
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 0.08} className="border-t border-signal/60 pt-5">
              <p className="font-mono text-sm text-signal">STEP {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/75">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */

function Pricing() {
  return (
    <section id="pricing" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <Reveal>
          <Eyebrow>{pricing.eyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            {pricing.headline}
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-mute">{pricing.intro}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricing.tiers.map((tier, i) => (
            <Reveal
              key={i}
              delay={i * 0.08}
              className={`relative flex flex-col border p-8 ${
                tier.featured ? "border-signal bg-pine text-paper" : "border-line bg-paper"
              }`}
            >
              {tier.featured && (
                <span className="eyebrow absolute -top-3 left-8 bg-signal px-3 py-1 text-paper">
                  Most popular
                </span>
              )}
              <p className={`eyebrow ${tier.featured ? "text-paper/70" : "text-mute"}`}>
                {tier.name}
              </p>
              <p className="mt-4 font-mono text-4xl font-medium">
                {tier.price}
                <span className={`text-base ${tier.featured ? "text-paper/60" : "text-mute"}`}>
                  {" "}
                  {tier.per}
                </span>
              </p>
              <p className={`mt-1 text-sm ${tier.featured ? "text-paper/60" : "text-mute"}`}>
                {tier.setup}
              </p>
              <ul className="mt-6 flex-1 space-y-2.5">
                {tier.features.map((feature, fi) => (
                  <li key={fi} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-signal" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/audit"
                className={`eyebrow mt-8 block rounded-full px-6 py-3.5 text-center transition-opacity hover:opacity-90 ${
                  tier.featured ? "bg-signal text-paper" : "border border-ink text-ink"
                }`}
              >
                {tier.cta}
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-mute">{pricing.note}</p>
      </div>
    </section>
  );
}

/* ---------------- Comparison ---------------- */

const comparison = {
  columns: ["A DIY answering app", "A human answering service", "Doing nothing", company.name],
  rows: [
    {
      label: "What it costs",
      cells: [
        "A small monthly fee — plus your evenings setting it up and babysitting it",
        "Per-call or per-minute fees that climb with your call volume",
        "“Free.” You pay in missed jobs instead",
        `From ${pricing.tiers[0].price}/mo, month to month`,
      ],
    },
    {
      label: "Who sets it up",
      cells: ["You do", "You do", "Nobody", "We do — and we maintain it"],
    },
    {
      label: "Brings NEW calls?",
      cells: [
        "No — it only handles what already rings",
        "No — they answer, they don't recover",
        "No",
        "Yes — lead flow setup plus text-back that turns hang-ups into booked jobs",
      ],
    },
    {
      label: "Who reviews your numbers weekly",
      cells: ["You, if you remember", "No one", "No one", "A human on our team, every week"],
    },
  ],
};

function Comparison() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <Reveal>
          <Eyebrow>The honest comparison</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Why not just a $99 answering app?
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-mute">
            Fair question. Here's the difference, without the sales fog:
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="border border-line p-4" aria-label="Criteria" />
                {comparison.columns.map((col, i) => (
                  <th
                    key={i}
                    className={`eyebrow border border-line p-4 align-bottom ${
                      i === comparison.columns.length - 1 ? "bg-pine text-paper" : "text-mute"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, ri) => (
                <tr key={ri}>
                  <th className="eyebrow border border-line p-4 align-top text-mute">
                    {row.label}
                  </th>
                  {row.cells.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`border border-line p-4 align-top leading-relaxed ${
                        ci === row.cells.length - 1 ? "bg-pine font-medium text-paper" : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- What we are NOT ---------------- */

const nots = [
  "Not a call center you have to manage.",
  "Not a website agency.",
  "No long contracts — month to month.",
];

function NotStrip() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <Eyebrow>What we are not</Eyebrow>
        </Reveal>
        <div className="hairline-grid mt-8 sm:grid-cols-3">
          {nots.map((item, i) => (
            <Reveal key={i} delay={i * 0.06} className="p-6 sm:p-8">
              <p className="font-display text-lg font-semibold">{item}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- From the field ---------------- */

function FromTheField() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <Reveal>
          <Eyebrow>From the field</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            Contractors stopped losing after-hours jobs.
          </h2>
          <p className="eyebrow mt-4 text-signal">
            ↳ Replace these with your first 3 real client results
          </p>
        </Reveal>
        <div className="hairline-grid mt-12 lg:grid-cols-3">
          {quotes.map((quote, i) => (
            <Reveal key={i} delay={i * 0.06} className="flex flex-col p-6 sm:p-8">
              <p className="flex-1 font-display text-lg leading-snug">{quote.text}</p>
              <p className="eyebrow mt-6 text-mute">{quote.who}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust strip + final CTA ---------------- */

const trust = [
  "Your number stays yours.",
  "Your leads stay yours.",
  "Cancel monthly.",
  "A human reviews every report.",
];

function FinalCta() {
  return (
    <section id="book" className="relative text-paper">
      <MediaBackdrop
        slot={media.ctaVisual}
        overlayClassName="bg-gradient-to-b from-pine-2/80 via-pine-2/60 to-pine-2/90"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-36">
        <Reveal>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {trust.map((item, i) => (
              <li key={i} className="eyebrow flex items-center gap-2 text-paper/75">
                <span className="h-1 w-1 rounded-full bg-signal" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-10 flex items-center gap-2.5 text-paper/70">
            <span className="dot-open" aria-hidden="true" />
            Free · no obligation
          </p>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            See how many jobs your phone is losing.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-paper/80">
            We'll run a free missed-call audit on your line and send you the numbers. If
            it's nothing, we'll tell you. If it's real, we'll fix it in 7 days.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/audit"
              className="eyebrow rounded-full bg-signal px-7 py-4 text-center text-paper transition-opacity hover:opacity-90"
            >
              Get my free audit
            </Link>
            <a
              href={links.calendlyUrl}
              className="eyebrow rounded-full border border-paper/40 px-7 py-4 text-center transition-colors hover:border-paper"
            >
              Or book a 15-min call
            </a>
          </div>
          <p className="mt-8 text-sm text-paper/60">
            Or call/text us: {company.phone} ·{" "}
            <a href={`mailto:${company.email}`} className="underline hover:text-paper">
              {company.email}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Problem />
      <WhatWeDo />
      <HowItWorks />
      <Pricing />
      <Comparison />
      <NotStrip />
      <FromTheField />
      <FinalCta />
    </>
  );
}
