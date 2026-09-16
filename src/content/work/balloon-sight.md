---
title: A construction-project data pipeline and the product on top of it
client: Balloon Sight Intelligence
period: 2026 – present
role: Founder and sole engineer
summary: A B2B construction-project intelligence feed for Canadian contractors. Python agents ingest and enrich public project data unattended on a VPS; a Next.js product sells access to it. Pre-revenue and still validating.
order: 2
featured: true
image: ../../assets/balloon-sight-digest.png
imageAlt: The Balloon Sight sample-digest section, showing what a weekly send contains beside four coloured stat cards for sources monitored, cadence, coverage and price.
bullets:
  - Nine government and municipal data sources normalised into one SQLite schema, 3,161 projects tracked, ingestion through to weekly digest running unattended.
  - Eleven Python agent packages on systemd timers plus a Next.js 16 and Stripe product, held to $110–150 a month across five paid APIs on a $5 VPS.
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

Nine public data sources feed it: municipal permit APIs over Socrata, ArcGIS REST and OpenDataSoft, the BC Major Projects CSV, the BC Environmental Assessment registry, and federal CanadaBuys tenders. Each arrives in a different shape and is normalised into a single SQLite schema with deduplication and per-source incremental fetch state. Roughly 9,800 lines of Python across 11 agent packages, 131 commits.

Every subscriber gets a weekly digest filtered and ranked to their sector and trades, read from their Stripe profile metadata and generated as Markdown and HTML through the Claude API.

Status: pre-revenue, validating with Alberta and BC contractors. There are no customers to point at.

## Operations

Eleven agent packages covering ingestion, contact enrichment, digest generation, outreach and analytics run on systemd timers with `OnFailure` units that email when something breaks.

Cost was a design constraint from the start: five paid APIs on a $5 VPS, held to $110–150 a month. Per-run budget caps were added after a hung Apify run exhausted the monthly quota and took the enrichment agent offline.

## The front end

The customer-facing product is Next.js 16, React 19, TypeScript and Tailwind 4 on Vercel: marketing site, gated free-sample funnel, Stripe Checkout and subscription onboarding, and an internal dashboard for approving outreach before it sends.

Outbound email is CASL-compliant by construction: verified sending domain, physical-address footer, reply-to-unsubscribe, a suppression list checked before every send, and a daily send cap.

## Known limitations

Send state is split across two SQLite copies, laptop and VPS, because either can run outreach. The fix is a single authoritative database; Postgres is already installed on the box.

There is no IMAP reply polling, because inbound volume was two emails.

In hindsight the outreach and reply loop should have been built before the intelligence, SEO and community agents. Distribution was the bottleneck throughout, not features.
