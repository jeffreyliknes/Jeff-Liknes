---
title: Nine government data sources, one weekly digest, five dollars a month
client: Balloon Sight Intelligence
period: 2026 – present
role: Founder and sole engineer
summary: A B2B construction-project intelligence feed for Canadian contractors. Python agents ingest and enrich public project data unattended on a VPS; a Next.js product sells access to it. Pre-revenue and still validating.
order: 2
featured: true
stack:
  - Python
  - SQLite
  - Next.js 16
  - React 19
  - TypeScript
  - Tailwind 4
  - Stripe
  - Claude API
  - Hetzner
  - systemd
evidence:
  - value: 3,161
    label: Canadian construction projects tracked
  - value: 9
    label: Government and municipal sources normalised into one schema
  - value: $110–150
    label: Monthly cost across five paid APIs, running on a $5 VPS
  - value: 1
    label: Source still blocked by Cloudflare, unsolved
    tone: flag
---

## What it does

Nine public data sources — municipal permit APIs over Socrata, ArcGIS REST and OpenDataSoft, the BC Major Projects CSV, the BC Environmental Assessment registry, federal CanadaBuys tenders — each arriving in a different shape, normalised into a single SQLite schema with deduplication and per-source incremental fetch state. Roughly 9,800 lines of Python across 11 agent packages, 131 commits.

Every subscriber gets a weekly digest filtered and ranked to their sector and trades, read from their Stripe profile metadata and generated as Markdown and HTML through the Claude API.

**Status: pre-revenue, validating with Alberta and BC contractors.** There are no customers to point at. The engineering is the claim.

## Unattended, not just scripted

Eleven agent packages — ingestion, contact enrichment, digest generation, outreach, analytics — run on systemd timers with `OnFailure` units that email when something breaks. That last part is the whole difference between a script and a system: a script that fails silently at 3am is worse than no script.

Cost was a hard design constraint from the start, not an afterthought. Five paid APIs on a $5 VPS, held to $110–150 a month. That number is a design output: I added per-run budget caps after a hung Apify run exhausted the monthly quota and took the enrichment agent offline entirely. The incident is the reason the caps exist.

## The front end

The customer-facing product is Next.js 16, React 19, TypeScript and Tailwind 4 on Vercel: marketing site, gated free-sample funnel, Stripe Checkout and subscription onboarding, and an internal dashboard for approving outreach before it sends.

Outbound email is CASL-compliant by construction — verified sending domain, physical-address footer, reply-to-unsubscribe, suppression list checked before every send, daily send cap. Compliance is cheaper to build in than to retrofit.

## What I'd do differently

Build the outreach and reply loop *before* the intelligence, SEO, and community agents. Distribution was the bottleneck the entire time; features were not. I built in the order that was interesting rather than the order that was binding.

Two known weaknesses I'd rather state than have found: send state is currently split across two SQLite copies, laptop and VPS, because either can run outreach — the fix is a single authoritative database, and Postgres is already installed on the box. And there's no IMAP reply polling, because inbound volume was two emails; that's a scope call I'll defend until the volume changes.
