import Link from "next/link";
import { company, nav } from "@/content/site";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="dot-open" aria-hidden="true" />
          <span className="font-display text-lg font-semibold tracking-tight">
            {company.name}
          </span>
        </Link>
        <nav className="flex items-center gap-5 sm:gap-7">
          {nav
            .filter((item) => item.href !== "/audit")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="eyebrow hidden text-mute transition-colors hover:text-ink sm:block"
              >
                {item.label}
              </Link>
            ))}
          <Link
            href="/audit"
            className="eyebrow rounded-full bg-signal px-4 py-2 text-paper transition-opacity hover:opacity-90"
          >
            Free audit
          </Link>
        </nav>
      </div>
    </header>
  );
}
