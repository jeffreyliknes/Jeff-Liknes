---
title: Selling six-figure machines to people who don't click search ads
client: Concrete Genius Mfg.
period: 2025 – 2026
role: Site build, technical SEO, and paid acquisition — solo
summary: An 18-page Astro marketing site for an Alberta manufacturer of mobile volumetric concrete mixers, plus the 18 months of ad spend that told me my own assumptions were wrong.
url: https://concretegenius.com
order: 1
featured: true
stack:
  - Astro 5
  - TypeScript
  - Vercel
  - Google Tag Manager
  - Google Ads
  - Meta Ads
  - JSON-LD
evidence:
  - value: €67
    label: Blended cost per enquiry across 18 months and €13,700 of spend
  - value: 205
    label: Enquiries generated, for machines that sell in the six figures
  - value: €533
    label: Cost per enquiry on the campaign I stopped
    tone: flag
  - value: 0 KB
    label: Client-side JavaScript shipped by default
    tone: neutral
---

## The build

Eighteen pages in Astro 5 and TypeScript, statically generated, shipping no client JavaScript unless a page needs it. No CSS framework — a hand-rolled design-token system, and IBM Plex self-hosted through Fontsource so the page doesn't wait on a third-party font server.

The site is media-heavy: 34 MB of product photography and video of machines pouring concrete, because that is what convinces a contractor. A Sharp-based image pipeline converts every raster asset to WebP at build time, which is the difference between "media-heavy" and "slow."

Deployed on Vercel with a preview URL per branch so stakeholders could review before merge. Canonical URLs are environment-driven, so a preview build can never leak a preview canonical into Google's index — a small piece of plumbing that prevents a genuinely expensive mistake. When the information architecture was restructured, a 16-rule permanent-redirect map carried the link equity across.

## The SEO

Technical SEO end to end: generated sitemap and robots.txt, canonical tags, Open Graph and Twitter cards, and JSON-LD across Organization, LocalBusiness, WebSite/SearchAction, Product, Brand, and FAQPage. Search Console connected and monitored, with query and impression data driving which pages got written next.

## The measurement stack

Google Tag Manager, gated to production so preview traffic never pollutes the data. Conversion tracking for form submissions and phone calls, a dedicated thank-you conversion page, and Google Consent Mode v2. CookieYes loads ahead of GTM so every marketing tag is consent-gated, and I wrote the privacy and cookie policy pages that go with it. Lead capture runs through a lazy-loaded Tally form wired straight into the Ads conversion path — no backend to maintain.

## What the numbers actually said

The assumption going in was that industrial buyers are reached through search. Eighteen months and €13,700 later, the data said the opposite: the cheaper image-led campaigns produced **44% of all enquiries for 35% of the money** — €53 per enquiry against €77 on search.

A campaign built alongside a Google Ads specialist ran at €533 per enquiry against an account average of €67. I stopped it. The remaining search campaigns were paused rather than propped up, because the keyword targeting had been wrong from the beginning and rebuilding it honestly meant starting over rather than tuning.

The best unit economics of the whole account came from a tightly-scoped search test at €17.52 per lead — 13 leads on €228 — which never got scaled. That is the open question I would take back into this account.

*Counting note: conversions include Google's modeled conversions under Consent Mode v2, so the honest description is "observed plus modeled," not "observed."*
