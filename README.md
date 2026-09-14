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

- External links: the paper (`rostr-paper.vercel.app`), the repos (`github.com/diamitani/rostr-core` for the runtime, `github.com/diamitani/rostr-skills` for skills, the `skills/` directory on `rostr-platform` main for the full 369-skill catalog), contact email. Update these if the canonical URLs change.
- The API sample points at the live hosted endpoint (`https://rostr-platform.vercel.app/api/v1/run`). It currently runs in preview/mock mode until the production model key is configured — the page says so, and the README of that deploy tracks the status.
- "Rostr Cloud" is marked "Coming soon" with a real waitlist capture (mailto with a waitlist subject). Flip that tier when the hosted API is live with real models and billing.
- The jobs-to-be-done builder section is labeled "Now building" — keep it future-tense until the builder is a real product surface.
- Skill count on the page (369) must match the canonical library (`~/workspace/skill-library`); update both together.
