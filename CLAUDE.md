# CLAUDE.md — PrimeSmart.ae SEO/GEO/AEO Execution Handoff

> Project brief for Claude Code (or any developer/agent) to **execute** the SEO plan. All strategy, keyword research, competitor teardown and content are finalized in this folder. This file tells you what to do, in what order, and the guardrails.

## Project
- **Site:** https://primesmart.ae (WordPress + WooCommerce + Elementor)
- **Business:** Prime Smart Flags Advertising & Gifts Trading FZ LLC — custom flag printing, Dubai/UAE
- **Address:** 1st Floor, 20th Street, Al Khabaisi, Dubai · **Phone (primary):** +971 55 268 1786 · **Email:** info@primesmart.ae
- **Goal:** Page 1 of Google for the Dubai market. 60-day window; head term "flag printing dubai" is a 4–6 month play.
- **SEO plugin:** Rank Math. **Currency:** AED.

## Access you will need (ask the client — NOT in this repo)
Claude Code cannot act on the live site without these. Request before starting:
- WordPress admin login (to edit pages, Rank Math schema, WooCommerce prices, redirects).
- Google Search Console access (property: `https://primesmart.ae/`).
- Google Business Profile manager access.
- Hosting/FTP or a staging environment for template/speed work.
Do **not** hardcode any credentials into files in this repo.

## Read these first (in this folder)
1. `PrimeSmart-SEO-AEO-GEO-Audit.md` — full site audit + real GSC findings (baseline).
2. `PrimeSmart-Keyword-and-Competitor-Plan.html` — money keywords, PAA, competitor teardown, GBP, hat audit, backlinks.
3. `PrimeSmart-60-Day-Action-Plan.html` — the week-by-week roadmap (v2, stress-tested). **This is the master schedule.**
4. `Flag-Printing-Dubai-Pillar-Page.md` — ready-to-publish pillar page copy + JSON-LD schema.
5. `Review-Collection-Flow.md` — WhatsApp templates + review engine.

## Current baseline (from live GSC, 90 days)
- 33 clicks, 2,110 impressions, 1.6% CTR, avg position **30.6** (page 3).
- Indexing: **37 indexed vs 255 not indexed** (140 "crawled – currently not indexed", 92 "alternative page w/ canonical", 8 noindex, 6 redirect, 5×404, 2×4xx, 2×5xx).
- 0 reviews, not in Map Pack.

## Execution order (do NOT skip Week 0)

### WEEK 0 — Technical diagnosis (gate everything on this)
- [ ] Audit template overlap vs dlxprint.com (shared theme); list boilerplate that must be differentiated.
- [ ] Classify the 140 "crawled–not-indexed" URLs: thin / duplicate / facet. Decide fix vs `noindex` vs 301.
- [ ] WooCommerce facet audit: add `noindex,follow` (or robots rules) to `?orderby=`, `?filter_*`, `?attribute_*`, paginated/sort URLs. This addresses the 92 "alternative page w/ canonical".
- [ ] Build a keyword→URL map (ONE canonical URL per money term); 301 competing `/product/` or `/product-category/` URLs.
- [ ] Speed measured (PSI mobile, 17 Aug 2026): **homepage 99** (LCP 1.2s) but **/shop/ archive 74 with LCP 8.5s** (render-blocking 660ms, 235 KiB unused JS, SEO 92) and **product pages 74** (TBT 1,090ms, 326 KiB unused CSS). Priorities: (1) Fix archive LCP — prioritize/size the first grid image (`fetchpriority=high` + width/height + right-sized WebP), lazy-load the rest, defer render-blocking CSS/JS; (2) Fix product/category template — Elementor "Improved CSS/Asset Loading" + remove unused CSS (WP Rocket/FlyingPress/Perfmatters) + delay non-critical JS. Add width/height to all images (CLS). Re-test /shop/ and a product page after changes.
- [ ] Confirm `robots.txt` does not block GPTBot / Google-Extended / ClaudeBot (for AI citations).

### WEEK 1 — Credibility fixes + tracking (see 60-day plan)
- [ ] Replace sitewide OG image (currently points to `miniture.novaworks.net` theme demo) with branded 1200×630.
- [ ] Remove all placeholder text: contact "two little houses…", blog "Power of Brand", cut-off newsletter line.
- [ ] Fix/hide every `AED 0.00` product price (real price or "from AED X" / Request a quote).
- [ ] Fix "Flags" nav `#` link → point to `/flag-printing-dubai/`; homepage category tiles → real category URLs.
- [ ] Fix UTF-8 mojibake (`â€"`) in product copy/meta.
- [ ] Verify GSC + GA4 + Bing Webmaster; submit sitemap.
- [ ] Claim/verify Google Business Profile (see GEO guardrail below).

### WEEKS 2–8
Follow `PrimeSmart-60-Day-Action-Plan.html` (Roadmap tab): on-page/meta/alt + schema (wk2) → pillar + 5 money landing pages with FAQ schema (wk3–4) → 2–3 blog posts + speed + trust content + citations (wk5–6) → optimize from GSC data + report (wk7–8). Publish `Flag-Printing-Dubai-Pillar-Page.md` first and make it the Flags hub.

## Money keyword → page (build these URLs)
| URL | Primary keyword | Priority |
|---|---|---|
| /flag-printing-dubai/ (pillar/hub) | flag printing dubai | P1 |
| /telescopic-flag-pole-dubai/ | telescopic flag pole dubai/uae | P1 |
| /table-flags-dubai/ | table flags dubai | P1 |
| /sail-flag-printing-dubai/ | sail flags dubai | P1 |
| /conference-flags-dubai/ | conference flags dubai | P1 |
| /l-shape-flags-dubai/ | l shape flags dubai | P2 |
| /advertising-flags-dubai/ | advertising flags dubai | P2 |
| /teardrop-flags-dubai/ | teardrop flags dubai | P2 |
| /car-flags-dubai/ | car flags dubai | P3 |

Each page: keyword in URL + H1 + title + first 100 words + image alt + ≥1 FAQ; add Product + FAQPage schema; internal-link to/from the pillar; request indexing after publish.

## Guardrails (do not violate)
- **White-hat only.** NEVER replicate Deluxe Printing's site-wide `AggregateRating` (identical 4.7/1,266 on every product). Only add `aggregateRating` schema with **real** review counts once reviews exist.
- **GEO / GBP:** the entity is a **Free-Zone LLC** but the pin is a Dubai mainland address — confirm trade-licence vs address before verifying, or register as a Service-Area Business. Use **ONE** primary phone across GBP + all citations. Primary category "Flag store" (+ secondary Sign shop / Digital printer). Verify the 7:30am–11:30pm hours are real.
- **Reviews:** ask **every** customer (no gating), **no** incentives/discounts-for-reviews, stagger requests.
- **Content:** differentiate from the dlxprint template — no near-duplicate boilerplate. Quality over quota (4–5 strong money pages + 2–3 strong posts beat 15 thin ones).
- **Links:** relevance > volume. No PBNs, link farms, or comment spam.
- Never place personal data in URLs; follow Google structured-data policies.

## Definition of done (Day 60 — honest targets)
- Site errors gone; 80–100 quality pages indexed; 140-unindexed problem materially reduced.
- 3–5 **non-branded** money terms in top 20; 1–2 long-tail on page 1.
- GBP live + optimized, 15–25 genuine reviews, showing for long-tail/near-me searches.
- Clicks & impressions up 2–3×; avg position ~20.
- **Not** success: "published 10 pages" or a +2 branded-search bump.

## Suggested Claude Code workflow
1. Confirm access (above). 2. Do Week 0 as a technical audit branch; produce a findings doc + redirect map before editing content. 3. Execute week-by-week; after each publish, validate schema (Rich Results Test) and request indexing. 4. Every Monday: pull GSC, log the money-keyword positions, push anything at position 11–20.

## Saved skill
A reusable skill **`metaware-seo-analysis`** ("Metaware SEO Analysis Skill") is saved on the account and captures this full SEO/GEO/AEO workflow. Invoke it for audits, re-analysis, or applying the same process to another site. Reference copy: `Metaware-SEO-Analysis-Skill.md`.

## Deliverables in this folder (context for execution)
- `PrimeSmart-SEO-AEO-GEO-Audit.md` — full audit + live GSC findings (baseline).
- `PrimeSmart-Keyword-and-Competitor-Plan.html` — money keywords, PAA, competitor teardown, Map Pack, hat audit, backlinks.
- `PrimeSmart-60-Day-Action-Plan.html` — master roadmap (v2, stress-tested) + Speed tab + **Checklist & Tracker** (persistent progress).
- `Flag-Printing-Dubai-Pillar-Page.md` — ready-to-publish pillar copy + JSON-LD schema.
- `Review-Collection-Flow.md` — WhatsApp templates + review engine.
- `Metaware-SEO-Analysis-Skill.md` — the reusable process.

## Full session context
`SESSION-CONTEXT.md` holds all data, findings, decisions and open questions from the original analysis chat (GSC numbers, competitor teardown, hat audit, GBP pack, speed results). Read it first for complete context.

## Kickoff prompt — paste into a NEW Claude Code session (run `claude` inside this folder)
> Read CLAUDE.md and SESSION-CONTEXT.md and all deliverable files in this folder. Use the `metaware-seo-analysis` skill. We are executing the PrimeSmart 60-day SEO/GEO/AEO plan. Start with **Week 0 (technical diagnosis)** only — do not edit content yet. Before touching the live site, ask me for WordPress admin, Google Search Console, and Google Business Profile access. Produce: (1) a Week 0 findings doc, (2) the 140 "crawled–not-indexed" URL classification, (3) the keyword→URL map with the 301 redirect plan, and (4) the WooCommerce facet/canonical fix list. Then stop and check in before Week 1. Follow the guardrails in CLAUDE.md (white-hat only; never hardcode credentials).
