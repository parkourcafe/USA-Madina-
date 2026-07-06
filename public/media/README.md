# /public/media/ — cinematic assets go here

Drop the Higgsfield-generated files into this folder with EXACTLY these names
(the site already references them via `content/site.ts`):

| File | Used for | Spec |
| --- | --- | --- |
| `hero.mp4` | Homepage hero background loop | 8–12 s seamless loop, H.264, ≤ 2.5 MB |
| `hero.webm` | Same, smaller desktop transfer | WebM convert of hero.mp4 |
| `hero-poster.jpg` | Hero still (mobile / reduced-motion / fallback) | Frame from the video, ~1920×1080 |
| `problem.mp4` | "Where jobs leak out" section | 6–10 s, chaos → order, ≤ 2.5 MB |
| `problem-poster.jpg` | Poster for the above | ~1920×1080 |
| `loop-poster.jpg` | "How the loop runs" background still | ~1920×1080 |
| `cta.mp4` | Final CTA background loop | Seamless loop, ≤ 2.5 MB |
| `cta-poster.jpg` | Poster for the above | ~1920×1080 |
| `founder.jpg` | /about founder photo | ~800×1000, real photo |

Prompts and full generation instructions: see `kino-assets-higgsfield.md` in the
repo root.

**Missing files are fine.** Every slot falls back to its poster, and if the
poster is missing too, to a pure CSS pine/orange field. The site never breaks
while assets are pending. After adding files, redeploy — they're picked up
automatically.
