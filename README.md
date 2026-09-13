# rostragent.com

Static product site for Rostr — "The operating system for agent teams."
No build step. Plain HTML + CSS + vanilla JS.

## Files

- `index.html` — the whole page
- `styles.css` — dark developer-tool theme, one deep-blue accent, responsive
- `script.js` — scroll reveal, mobile nav, active-section highlight, copy button

## Deploy

```bash
cd ~/workspace/your_files/rostragent-site
vercel --prod
```

Then wire the domain in the Vercel dashboard: Project → Settings → Domains → add `rostragent.com` (and `www`), point DNS at Vercel's nameservers/A record as instructed there.

## Notes

- External links: the paper (`rostr-paper.vercel.app`), GitHub (`github.com/diamitani`), contact email. Update these if the canonical URLs change.
- The API sample points at `api.rostr.dev` — replace with the real Rostr Cloud endpoint when it launches.
- "Rostr Cloud" is marked "Coming soon" — flip that tier when the hosted API is live.
