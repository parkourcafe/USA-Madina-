import type { Metadata } from "next";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy & SMS Terms",
  description: "Privacy policy and SMS terms, in plain English.",
};

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <p className="eyebrow text-mute">Legal</p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
        Privacy &amp; SMS Terms
      </h1>
      <p className="mt-4 text-sm text-mute">
        Plain English, on purpose. Last updated: July 2026.
      </p>

      <nav className="mt-8 flex gap-6 border-b border-line pb-6" aria-label="Sections">
        <a href="#privacy" className="eyebrow text-mute hover:text-ink">
          Privacy policy
        </a>
        <a href="#sms-terms" className="eyebrow text-mute hover:text-ink">
          SMS terms
        </a>
      </nav>

      <section id="privacy" className="mt-12 scroll-mt-20">
        <h2 className="font-display text-2xl font-semibold">Privacy policy</h2>
        <div className="mt-6 space-y-5 text-sm leading-relaxed">
          <div>
            <h3 className="font-semibold">What we collect</h3>
            <p className="mt-1 text-mute">
              When you fill out a form on this site, we collect what you type: your name,
              your company name, and your mobile number. If you call or text us, we keep
              a record of that conversation. We don't collect anything you don't give us.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">What we do with it</h3>
            <p className="mt-1 text-mute">
              We use your information to do what you asked us to do — run your audit,
              answer your questions, and provide our service if you become a client.
              That's it.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">What we never do</h3>
            <p className="mt-1 text-mute">
              We don't sell your information. We don't rent it. We don't share your phone
              number or opt-in data with third parties for their marketing. Your leads and
              your customer list stay yours.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Who we share with</h3>
            <p className="mt-1 text-mute">
              Only the service providers we need to operate (for example, the platform
              that sends our text messages) — and only as far as needed to deliver the
              service. Text messaging originator opt-in data and consent are not shared
              with any third parties.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Your choices</h3>
            <p className="mt-1 text-mute">
              Want your data deleted, corrected, or just want to know what we have? Email{" "}
              <a href={`mailto:${company.email}`} className="underline">
                {company.email}
              </a>{" "}
              and we'll take care of it.
            </p>
          </div>
        </div>
      </section>

      <section id="sms-terms" className="mt-16 scroll-mt-20">
        <h2 className="font-display text-2xl font-semibold">SMS terms</h2>
        <div className="mt-6 space-y-5 text-sm leading-relaxed">
          <div>
            <h3 className="font-semibold">What you're agreeing to</h3>
            <p className="mt-1 text-mute">
              By submitting a form with your mobile number, you consent to receive text
              messages from {company.name} at that number.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">What we send</h3>
            <p className="mt-1 text-mute">
              Your audit results, replies to your questions, appointment confirmations and
              reminders, and service updates if you're a client.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Frequency &amp; rates</h3>
            <p className="mt-1 text-mute">
              Message frequency varies. Message and data rates may apply — those come from
              your mobile carrier, not from us.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Opting out</h3>
            <p className="mt-1 text-mute">
              Reply <strong>STOP</strong> to any message to opt out at any time. Reply{" "}
              <strong>HELP</strong> for help, or contact us at{" "}
              <a href={`mailto:${company.email}`} className="underline">
                {company.email}
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Your consent stays with us</h3>
            <p className="mt-1 text-mute">
              Your consent to receive texts is not shared with, sold to, or transferred to
              third parties for their own marketing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
