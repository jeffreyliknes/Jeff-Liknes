---
title: Owning the technical SEO for seventy-odd hotel sites in two languages
client: Sojern (formerly Myhotelshop, via RateGain)
period: 2021 – present
role: Web Designer / Developer
summary: The web and marketing stack behind a multilingual hotel portfolio. Structured data, consent architecture, redirect and routing design, and the case for moving all of it onto a headless stack.
order: 3
featured: true
image: ../../assets/sojern-gorki-apartments.png
imageAlt: Homepage of Gorki Apartments Berlin, one of the hotel sites in the portfolio, showing a full-bleed room photograph behind a booking availability bar.
stack:
  - JavaScript
  - SCSS
  - Google Tag Manager
  - Consent Mode v2
  - JSON-LD
  - Storyblok
  - Astro
  - Sitejet
  - Webflow
evidence:
  - value: 70+
    label: Multilingual (DE/EN) hotel sites under one technical SEO strategy
  - value: 5 yrs
    label: Continuous scope through two acquisitions, Myhotelshop to RateGain to Sojern
    tone: neutral
  - value: v2
    label: Google Consent Mode compliance portfolio-wide, via Cookiebot and consentmanager
    tone: neutral
---

## Structured data and site architecture

Technical SEO across a 70+ site multilingual portfolio: JSON-LD structured data using Hotel and LodgingBusiness schema deployed across multiple hotel brands, hreflang and multilingual architecture, and the redirect design that holds it together. That means 301, 302, 410 and 415 handling, and path-versus-absolute URL resolution across multi-site deployments, which is exactly the kind of problem that only appears at portfolio scale.

## Tag management and consent

Google Tag Manager implementation and consent architecture across the portfolio, with Google Consent Mode v2 compliance through Cookiebot and consentmanager, and GDPR-compliant lazy-loading GTM setups. Alongside it, the ordinary unglamorous work of debugging Google Ads tracking parameters through consent-gated setups, where the tag fires but the parameter doesn't survive.

## The conflict nobody else wanted

I wrote `language-v2.js` to resolve a conflict between the site routing layer and a third-party translation widget that was breaking language switching across the portfolio. Third-party script conflicts, whether CMP ordering, translation widgets or tracking scripts all competing for the same page, are most of what front-end debugging actually is at this scale.

## Making the case for a headless stack

I led the evaluation for moving 70 hotel sites off Sitejet onto a headless stack: Astro, Storyblok and TinaCMS, GitHub, Vercel and Cloudflare. That meant cost models comparing Sitejet, Webflow and a custom build at portfolio scale, and coordination across several teams.

It also meant arguing for a Claude Code and Storyblok pipeline against an internally preferred Webflow approach, and building the thing to argue with: an AI-assisted build pipeline using Claude Code CLI, Cursor and a headless CMS that generates a full site from a single prompt. Around it, n8n workflows for hotel widget and schema deployment, and a Postgres pipeline pulling Google Search Console and Google Ads API data.
