import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import CursorHalo from "@/components/CursorHalo";
import { company } from "@/content/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

const body = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} — Every call answered. Every job booked.`,
    template: `%s — ${company.name}`,
  },
  description:
    "AI front desk for home-service contractors. We answer every call, text back every missed one, and book jobs into your calendar.",
};

export const viewport: Viewport = {
  themeColor: "#0e3b36",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        {children}
        <CursorHalo />
        <div className="grain-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
