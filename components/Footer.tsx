import Link from "next/link";
import { company, footerLinks } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-pine-2 text-paper">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="dot-open" aria-hidden="true" />
              <span className="font-display text-lg font-semibold">{company.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/70">
              {company.tagline}
            </p>
            <p className="mt-6 text-sm text-paper/80">
              <a href={company.phoneHref} className="hover:text-signal">
                {company.phone}
              </a>
              <br />
              <a href={`mailto:${company.email}`} className="hover:text-signal">
                {company.email}
              </a>
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-1">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="eyebrow text-paper/70 transition-colors hover:text-paper"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-12 border-t border-paper/15 pt-6 text-xs text-paper/50">
          <p>
            © {new Date().getFullYear()} {company.legalName}. Month to month — no long
            contracts.{" "}
            <Link href="/legal" className="underline hover:text-paper">
              Privacy &amp; SMS terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
