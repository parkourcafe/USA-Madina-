// ============================================================
// SITE CONTENT — the ONE file you edit.
// Company details, phone, pricing, stats, links, media files.
// Changing anything here never requires touching components.
//
// Anything wrapped in [PLACEHOLDER ...], [LIKE THIS] or {LIKE_THIS}
// is fake and must be replaced with the real value before launch.
// ============================================================

export type MediaSlot = {
  /** Poster image shown on mobile, reduced-motion, or while video loads. */
  poster?: string;
  /** Optional MP4 (H.264). If the file is missing the poster (or a CSS field) shows instead. */
  mp4?: string;
  /** Optional WebM for smaller desktop transfer. */
  webm?: string;
};

export const company = {
  name: "Open Line", // working name — placeholder
  legalName: "[PLACEHOLDER — legal company name, LLC]",
  tagline:
    "The 24/7 AI front desk for home-service contractors. We answer, book, and report — so you never miss another job.",
  phone: "[YOUR NUMBER]", // e.g. "(555) 123-4567"
  phoneHref: "tel:+10000000000", // [PLACEHOLDER — real number in tel: format]
  email: "hello@openline.example", // [PLACEHOLDER — real email]
};

export const links = {
  calendlyUrl: "https://calendly.com/PLACEHOLDER", // [PLACEHOLDER — real Calendly link]
  ghlWebhookUrl: "https://services.leadconnectorhq.com/hooks/PLACEHOLDER", // [PLACEHOLDER — real GHL inbound webhook]
};

// Hero copy (wording ported from design-reference.html).
export const hero = {
  eyebrow: "Line open — 24/7 AI front desk for home services",
  // The part inside `h1Em` renders in safety orange.
  h1: "You're under the sink. Who's answering the phone?",
  h1Em: "answering the phone?",
  sub: "We answer every call, text back every missed one, and book the job — so your after-hours leads stop going to the competitor who picked up.",
  note: "Live in 7 days · Works with your current office · No new phone system",
  primaryCta: "Get your free missed-call audit",
  secondaryCta: "See how it works",
};

// The three homepage stats — wording is fixed (from design-reference.html).
// Do not add new statistics.
export const stats = [
  { value: "74%", label: "of calls to home-service contractors go unanswered" },
  { value: "$500–900", label: "lost on every missed emergency call" },
  { value: "78%", label: "of customers hire whoever answers first" },
];

export const pricing = {
  eyebrow: "Pricing",
  headline: "Pays for itself on the first recovered job.",
  intro:
    "One booked emergency call usually covers the month. Everything after that is margin you were leaving on the table.",
  tiers: [
    {
      name: "Starter",
      price: "$1,500",
      per: "/ month",
      setup: "+ $1,000 one-time setup",
      features: [
        "After-hours AI answering",
        "Missed-call text-back",
        "Lead qualification",
        "CRM sync",
        "Basic one-page site (if needed)",
      ],
      cta: "Start here",
      featured: false,
    },
    {
      name: "Growth",
      price: "$2,500",
      per: "/ month",
      setup: "+ $1,500 one-time setup",
      features: [
        "Everything in Starter",
        "Overflow call handling",
        "Online booking to calendar",
        "Lead-gen: LSA + Google Profile",
        "Automated review requests",
        "Weekly revenue report",
      ],
      cta: "Get the audit",
      featured: true,
    },
    {
      name: "Multi-location",
      price: "$4,000+",
      per: "/ month",
      setup: "+ $2,500 one-time setup",
      features: [
        "Everything in Growth",
        "Multi-location call routing",
        "Dispatch & crew logic",
        "Advanced scripting",
        "Custom reporting",
      ],
      cta: "Talk to us",
      featured: false,
    },
  ],
  note: "Month to month. Cancel anytime. A human reviews your numbers every week.",
};

export const founder = {
  name: "{FOUNDER_NAME}", // [PLACEHOLDER — real founder name]
  photo: "/media/founder.jpg", // [PLACEHOLDER — real founder photo, ~800x1000px]
  photoAlt: "[PLACEHOLDER — real founder photo]",
};

// "From the field" quotes on the homepage — placeholders until the
// first three real client results exist.
export const quotes = [
  {
    text: "“We were sending every night call to voicemail. First month back, we booked 11 jobs we'd have lost.”",
    who: "— [Owner], [Company] · HVAC, [City]",
  },
  {
    text: "“The text-back alone paid for it. People reply before they've called anyone else.”",
    who: "— [Owner], [Company] · Plumbing, [City]",
  },
  {
    text: "“I stopped answering the phone at dinner. Nothing slips. I just get the report on Fridays.”",
    who: "— [Owner], [Company] · Electrical, [City]",
  },
];

// Case-study cards on /results. Replace with real client results.
export const cases = [
  {
    metric: "11 jobs",
    metricLabel: "booked in the first month",
    story:
      "[PLACEHOLDER — replace with real client results] An HVAC shop was sending every night call to voicemail. We turned on after-hours answering and missed-call text-back. In the first month the line booked 11 jobs that used to ring out. The owner found out from the Friday report, not from a complaint.",
    client: "[Owner], [Company]",
    city: "HVAC, [City]",
  },
  {
    metric: "$8,400",
    metricLabel: "revenue recovered in 60 days",
    story:
      "[PLACEHOLDER — replace with real client results] A two-truck plumbing outfit missed most calls during jobs — hands full, phone in the van. Text-back caught the leads before they called the next company. Sixty days in, the recovered jobs added up to $8,400 the owner would never have seen.",
    client: "[Owner], [Company]",
    city: "Plumbing, [City]",
  },
  {
    metric: "0 missed",
    metricLabel: "after-hours calls in 90 days",
    story:
      "[PLACEHOLDER — replace with real client results] An electrician answered his own phone at dinner for years. We put the AI front desk on after-hours and overflow. Ninety days, zero missed calls, and every job landed on his calendar with the address and the problem already written down.",
    client: "[Owner], [Company]",
    city: "Electrical, [City]",
  },
];

// Cinematic media slots. Drop files into /public/media/ with these names —
// the site picks them up on the next deploy. Missing files are fine:
// each section falls back to its poster, then to a pure CSS pine field.
export const media = {
  heroVideo: {
    mp4: "/media/hero.mp4",
    webm: "/media/hero.webm",
    poster: "/media/hero-poster.jpg",
  } as MediaSlot,
  problemSequence: {
    mp4: "/media/problem.mp4",
    poster: "/media/problem-poster.jpg",
  } as MediaSlot,
  loopVisual: {
    poster: "/media/loop-poster.jpg",
  } as MediaSlot,
  workVisual: {
    poster: "/media/work-visual.jpg",
  } as MediaSlot,
  ctaVisual: {
    mp4: "/media/cta.mp4",
    poster: "/media/cta-poster.jpg",
  } as MediaSlot,
};

export const nav = [
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/audit", label: "Free audit" },
];

export const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/audit", label: "Free audit" },
  { href: "/legal", label: "Privacy & SMS terms" },
];
