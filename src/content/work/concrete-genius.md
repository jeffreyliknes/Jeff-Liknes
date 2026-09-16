---
title: Marketing site, technical SEO and paid acquisition
client: Concrete Genius Mfg.
period: 2025 – 2026
role: Site build, technical SEO and paid acquisition, solo
summary: An 18-page Astro marketing site for an Alberta manufacturer of mobile volumetric concrete mixers, plus the 18 months of Google and Meta advertising behind it.
url: https://concretegenius.com
order: 1
featured: true
image: ../../assets/concrete-genius-hero.png
imageAlt: The Concrete Genius homepage hero, headlined "Fast, On-Demand Mobile Concrete Batching on Your Jobsite", beside a photograph of a mobile batching truck on a jobsite.
bullets:
  - Built and shipped an 18-page Astro 5 site with full technical SEO, JSON-LD across six schema types, and a consent-gated GTM measurement stack.
  - "Ran 18 months of Google and Meta advertising: €13,700 of spend, 205 enquiries, €67 blended cost per enquiry."
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
    label: Cost per enquiry on the campaign that was stopped
    tone: flag
  - value: 0 KB
    label: Client-side JavaScript shipped by default
    tone: neutral
---

## The build

Eighteen pages in Astro 5 and TypeScript, statically generated, shipping no client JavaScript unless a page needs it. No CSS framework: a hand-rolled design-token system, with IBM Plex self-hosted through Fontsource.

The site carries 34 MB of product photography and video. A Sharp-based image pipeline converts every raster asset to WebP at build time.

Deployed on Vercel with a preview URL per branch for stakeholder review. Canonical URLs are environment-driven, so a preview build cannot leak a preview canonical into the index. A 16-rule permanent-redirect map carried link equity through an information-architecture restructure.

## Technical SEO

Generated sitemap and robots.txt, canonical tags, Open Graph and Twitter cards, and JSON-LD across Organization, LocalBusiness, WebSite/SearchAction, Product, Brand and FAQPage. Search Console connected and monitored, with query and impression data setting which pages got written next.

## Measurement

Google Tag Manager, gated to production so preview traffic stays out of the data. Conversion tracking for form submissions and phone calls, a dedicated thank-you conversion page, and Google Consent Mode v2. CookieYes loads ahead of GTM so every marketing tag is consent-gated; I wrote the privacy and cookie policy pages that go with it. Lead capture runs through a lazy-loaded Tally form wired into the Ads conversion path, with no backend to maintain.

## What the spend returned

€13,700 over 18 months produced 205 enquiries at €67 blended cost per enquiry, for machines that sell in the six figures.

The assumption going in was that industrial buyers are reached through search. The data said otherwise: image-led campaigns produced 44% of enquiries for 35% of the spend, at €53 per enquiry against €77 on search.

A campaign built alongside a Google Ads specialist ran at €533 per enquiry against an account average of €67, and was stopped. The remaining search campaigns were paused rather than tuned, because the keyword targeting was wrong from the start.

The best unit economics in the account came from a tightly-scoped search test at €17.52 per lead, 13 leads on €228, which was never scaled.

*Counting note: conversions include Google's modeled conversions under Consent Mode v2, so the accurate description is "observed plus modeled".*
