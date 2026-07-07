"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { company, links } from "@/content/site";

export default function AuditForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(links.ghlWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          website: data.get("website"),
          mobile: data.get("mobile"),
          salesChannels: data.get("salesChannels"),
          source: "audit-page",
        }),
      });
      if (!res.ok) throw new Error(`webhook responded ${res.status}`);
      router.push("/thanks");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-md border border-line bg-paper px-4 py-3 text-base outline-none transition-colors focus:border-signal";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="eyebrow mb-1.5 block text-mute">
          Your name
        </label>
        <input id="name" name="name" required autoComplete="name" className={field} />
      </div>
      <div>
        <label htmlFor="company" className="eyebrow mb-1.5 block text-mute">
          Company
        </label>
        <input id="company" name="company" required autoComplete="organization" className={field} />
      </div>
      <div>
        <label htmlFor="website" className="eyebrow mb-1.5 block text-mute">
          Website
        </label>
        <input
          id="website"
          name="website"
          inputMode="url"
          autoComplete="url"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="mobile" className="eyebrow mb-1.5 block text-mute">
          Mobile
        </label>
        <input
          id="mobile"
          name="mobile"
          type="tel"
          required
          autoComplete="tel"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="salesChannels" className="eyebrow mb-1.5 block text-mute">
          Sales channels
        </label>
        <textarea
          id="salesChannels"
          name="salesChannels"
          rows={3}
          className={`${field} min-h-24 resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="eyebrow w-full rounded-full bg-signal px-6 py-4 text-paper transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Text me my numbers"}
      </button>
      <p className="text-sm font-medium">We&apos;ll text you your numbers within 48 hours.</p>
      <p className="text-xs leading-relaxed text-mute">
        By submitting, you agree to receive text messages from us about your audit at the
        number provided. Message frequency varies. Message &amp; data rates may apply.
        Reply STOP to opt out, HELP for help.{" "}
        <Link href="/legal#sms-terms" className="underline">
          SMS terms
        </Link>
        .
      </p>
      {status === "error" && (
        <p className="text-sm text-signal">
          Something went wrong on our end. Call or text us instead:{" "}
          <a href={company.phoneHref} className="underline">
            {company.phone}
          </a>
        </p>
      )}
    </form>
  );
}
