import type { Metadata } from "next";
import Link from "next/link";
import SafeImg from "@/components/SafeImg";
import { company, founder } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `Who runs ${company.name} and why it exists.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <p className="eyebrow text-mute">About</p>
      <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
        A front desk for people who fix things for a living.
      </h1>

      <div className="mt-14 grid gap-12 lg:grid-cols-[380px_1fr]">
        <figure className="relative aspect-[4/5] w-full max-w-sm overflow-hidden border border-line">
          <div className="cine-field" />
          {/* Shown until a real founder.jpg lands in /public/media/ */}
          <p className="eyebrow absolute inset-0 flex items-center justify-center p-6 text-center text-paper/50">
            [Placeholder — real founder photo]
          </p>
          <SafeImg
            src={founder.photo}
            alt={founder.photoAlt}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 right-0 bg-pine-2/85 p-4">
            <p className="font-display font-semibold text-paper">{founder.name}</p>
            <p className="eyebrow mt-1 text-paper/60">Founder, {company.name}</p>
          </figcaption>
        </figure>

        <div className="max-w-xl space-y-5 leading-relaxed">
          <p>
            I build phone systems for people who fix things for a living. Here's why.
          </p>
          <p>
            Every contractor I know is honest about the work and hopeless about the phone
            — not because they don't care, but because they're forty feet up, elbow-deep
            in a panel, or driving between jobs. The phone rings anyway. Whoever doesn't
            pick up loses the job to whoever does.
          </p>
          <p>
            That always struck me as unfair. The best plumber in town shouldn't lose work
            to the guy who happens to have a receptionist. So I started {company.name} to
            be that receptionist — one that never sleeps, never puts a customer on hold,
            and never forgets to follow up on a quote.
          </p>
          <p>
            I keep it month to month because I'd rather earn your business every four
            weeks than lock you into a contract. And I read every weekly report before it
            goes out, because numbers nobody looks at are just decoration.
          </p>
          <p>
            If that sounds like what you need, start with the free audit. It costs you
            nothing to know your numbers.
          </p>
          <p className="font-display font-semibold">— {founder.name}</p>
          <div className="pt-4">
            <Link
              href="/audit"
              className="eyebrow inline-block rounded-full bg-signal px-7 py-4 text-paper transition-opacity hover:opacity-90"
            >
              Get the free audit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
