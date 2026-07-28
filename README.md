# Jeff-Liknes

Personal site: portfolio, resume, and contact. Astro 5, static, no client JS by default.

```bash
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

## Where the content lives

| What | Where |
|---|---|
| Case studies | `src/content/work/*.md`, one file per project, schema in `src/content.config.ts` |
| Resume | `src/pages/resume.astro`, data arrays at the top of the file |
| Bio, skills, hero numbers | `src/pages/index.astro`, data arrays at the top |
| Colours, type, spacing | `src/styles/global.css` |

Seeded once from `../master-resume.md`. It does **not** stay in sync. This copy is now
independent, and the master resume remains the source for the PDF sent to employers.

## Evidence rail

Every case study's frontmatter carries an `evidence` list. Each entry has a `tone`:

- `signal` (default): forest green, a result that went well
- `flag`: clay, a result that went badly and is published anyway
- `neutral`: ochre, a fact that is neither

The flags are the point of the design. Don't quietly delete them.

## Resume PDF

The "Download as PDF" button renders only if `public/jeff-liknes-resume.pdf` exists.
Generate it from the parent directory and copy it in:

```bash
cd .. && python3 build-resume.py resume-marketing-engineer.md
# open the .html in Chrome -> Print -> Save as PDF (A4, Margins: None)
# save it to site/public/jeff-liknes-resume.pdf
```

## If images render blank or overflow in dev

The dev server caches the content layer and scoped CSS, and goes stale when you add
files to `src/assets/` or change `src/content.config.ts`. The build output is fine;
only dev is wrong. Fix:

```bash
npx astro dev stop && rm -rf .astro node_modules/.vite && npm run dev
```

## Deploy

Vercel, static output, no adapter needed. Set the real domain in `astro.config.mjs`
(`site:`) once one is attached. Canonicals and the sitemap both read from it.
