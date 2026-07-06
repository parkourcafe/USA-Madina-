# CLAUDE.md — Agency website (working name: Open Line — placeholder)

## Project
Cinematic marketing site for an AI front-desk agency serving US home-service contractors (HVAC, plumbing, electrical). Built with Next.js. `design-reference.html` in the repo root is the finished homepage design and the **visual + copy source of truth for tokens, type, sections, and voice — port it, then layer cinematic media on top. Never discard its design system.**

## Stack (fixed — do not substitute)
- Next.js (latest stable, App Router) + TypeScript
- **Static export**: `output: 'export'` in next.config — build must produce a fully static `out/` folder. No server actions, no API routes, no middleware. `images: { unoptimized: true }`.
- Tailwind CSS + CSS custom properties for the design tokens below
- `motion` (framer-motion) for scroll storytelling, sticky sections, reveals, hero word-reveal — ALL gated by `useReducedMotion` / `prefers-reduced-motion`
- Fonts via `next/font/google`: Bricolage Grotesque (display), Public Sans (body), IBM Plex Mono (labels/numbers)
- List any other dependency in the final report

## Operator constraint
Maintained by non-developers via Claude Code:
- ALL editable business values + key copy live in ONE file `content/site.ts` — company name, phone, email, Calendly URL, GHL webhook URL, pricing, the three stats, case placeholders, AND every media asset path. Changing copy, a price, or swapping a video must never require touching JSX.
- Components stay boring and few.

## Design system (port EXACTLY from design-reference.html)
- Tokens: `--paper #FAF9F6`, `--ink #17160F`, `--pine #0E3B36`, `--pine-2 #0A2C29`, `--signal #F2601F` (safety orange), `--line #DED9CD`, `--mute #6C6B61`
- Signature: pulsing "line open" dot; mono uppercase eyebrows; hairline-grid cards; film-grain overlay; trailing cursor halo (desktop only)
- Copy voice: plain trade English, short sentences, jobs/calls/money. Banned: revolutionary, cutting-edge, AI-powered future, game-changer, guaranteed results, bank-grade security.

## CINEMATIC MEDIA LAYER (this is the premium upgrade)
Aesthetic = abstract, cinematic, NO people, NO stock photos, NO fake dashboards, NO 3D clichés. Motif: a phone line connecting, sound waves resolving into order, scattered call data organizing into booked jobs — in pine + safety-orange.

Media is provided as files dropped into `/public/media/` LATER (generated separately in Higgsfield). Your job now: build the site so these slots exist, are referenced from `content/site.ts`, and degrade gracefully when a file is missing.

Asset slots (define each in `content/site.ts` with a poster image + optional video):
- `heroVideo` — fullscreen ambient background loop behind the hero headline. MP4 (H.264) + WebM + **poster JPG fallback**. Muted, autoplay, loop, playsInline. On mobile OR reduced-motion OR no-file: show the poster still, never the video.
- `problemSequence` — scroll-driven visual for the "where jobs leak out" section (chaos → order). Poster-image fallback required.
- `loopVisual` — the core-loop section ambient still/loop.
- `ctaVisual` — final CTA ambient background.
Every video slot MUST have a static poster image that looks complete on its own. If a media file is absent, the section renders with the poster (or a pure CSS pine/gradient field) and stays beautiful — the site is never broken or empty while assets are pending. Mark missing files clearly in the final report.

## Performance budget (HARD — cinema must not kill speed)
Audience: 45–60 y.o. contractor on a phone on LTE.
- Hero video: never autoplay on mobile (poster only); desktop video lazy-loaded, ≤ 2.5 MB, `preload="none"` until in view.
- Total initial mobile transfer (before any user-triggered video) ≤ 1.2 MB.
- Mobile Lighthouse performance ≥ 85. Every image lazy-loaded, width/height set, no layout shift.
- If a cinematic idea forces mobile below budget, the mobile version drops the video and keeps the poster. Speed wins over spectacle on mobile, always.

## Routes
1. `/` — port design-reference.html section-for-section (same order/tokens), upgrade hero + sections with the media layer above, then ADD:
   a) After pricing: **"Why not just a $99 answering app?"** comparison — DIY app / human answering service / doing nothing / us. Rows: cost, who sets it up, brings NEW calls?, who reviews your numbers weekly. Sharp but fair; no invented competitor claims.
   b) **"What we are NOT"** strip: not a call center you manage, not a website agency, no long contracts — month to month.
   c) Quiet **trust strip** near final CTA: your number stays yours, your leads stay yours, cancel monthly, a human reviews every report.
2. `/audit` — single-goal conversion page for cold-email traffic. H1 on the free missed-call audit. 3-field form (name, company, mobile) + "We'll text you your numbers within 48 hours." Client-side fetch POST to `ghlWebhookUrl` (placeholder in site.ts); on success go to `/thanks`. 3 steps of what happens next. Minimal nav (logo → home). Keep this page lighter on media — conversion speed matters most here.
3. `/about` — founder page. `{FOUNDER_NAME}` placeholder + **a real photo slot** (`founderPhoto` in site.ts, marked `[PLACEHOLDER — real founder photo]`), 150–200 word first-person founder story. Human, zero corporate speak.
4. `/results` — case-study grid: big metric, 3–4 sentence story, client/city placeholders. 3 cards marked `[PLACEHOLDER — replace with real client results]` + CTA to `/audit`.
5. `/legal` — Privacy + SMS Terms, anchor nav. MUST include A2P 10DLC SMS consent language: what messages are sent, frequency varies, msg & data rates may apply, reply STOP to opt out, HELP for help, consent not shared with third parties. Plain English. Non-cinematic, clean.
6. `/thanks` — "Got it — we'll text your numbers within 48 hours." + what to expect.

Shared nav + footer everywhere (except `/audit` minimal nav); all cross-links working.

## Honesty rules (all pages)
- No invented numbers, testimonials, logos, certifications, guarantees. Placeholders clearly marked `[PLACEHOLDER]`.
- Keep the homepage's three stats exactly as worded; add no new statistics.
- Media shows abstract visuals only — never fake private customer data, fake documents, or fake certifications.

## Definition of done
- `npm run build` succeeds → working static `out/`
- Every route: zero console errors, working nav, designed (not shrunk) at 375px, and still beautiful with ALL media files absent (posters/CSS only)
- Homepage matches design-reference.html tokens/type/spacing
- Final report: what was built, dependencies added, EXACT list of media files expected in /public/media/ with dimensions + duration for each slot, how to deploy (Vercel + drag-and-drop `out/`), anything unverified
