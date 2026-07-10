// Build-time media resolution (server-only — uses fs).
//
// Static export means new files in /public/media/ only appear after a
// rebuild anyway, so we check for them at build time and simply don't
// reference missing ones. The browser never requests a file that isn't
// there — no broken images, no console 404s.

import fs from "node:fs";
import path from "node:path";
import {
  media as slots,
  founder,
  type MediaSlot,
} from "@/content/site";

function ifExists(publicPath?: string): string | undefined {
  if (!publicPath) return undefined;
  return fs.existsSync(path.join(process.cwd(), "public", publicPath))
    ? publicPath
    : undefined;
}

function resolveSlot(slot: MediaSlot): MediaSlot {
  return {
    poster: ifExists(slot.poster),
    mp4: ifExists(slot.mp4),
    webm: ifExists(slot.webm),
  };
}

export const media = {
  heroVideo: resolveSlot(slots.heroVideo),
  problemSequence: resolveSlot(slots.problemSequence),
  loopVisual: resolveSlot(slots.loopVisual),
  workVisual: resolveSlot(slots.workVisual),
  ctaVisual: resolveSlot(slots.ctaVisual),
};

/** Path to the founder photo, or undefined until the real file exists. */
export const founderPhoto = ifExists(founder.photo);
