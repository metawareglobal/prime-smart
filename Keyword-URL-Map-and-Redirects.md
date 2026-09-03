# Keyword → URL Map + Cannibalization / Redirect Plan (Week 0 deliverable #3)

> One canonical URL per money term. Built from the LIVE category tree (30 products / 39 categories) pulled via WC REST API, 2026-08-17. Resolves the pillar-vs-category-vs-product cannibalization the stress test flagged.

## Core decision: enrich CATEGORIES in place — do NOT build parallel Pages
Every money term already has a WooCommerce **category** that holds the products and (for several) already earns GSC impressions. Creating standalone Elementor **Pages** at `/table-flags-dubai/` etc. **while the category also targets "table flags dubai" = page-vs-category cannibalization** — the exact risk flagged in the plan. So:

- **Money terms → use the existing category as the ranking page** (enrich description + Rank Math title/H1 with "Dubai"). Competitors rank this way (zamadina.com `/table-flags/` is a category, not a page).
- **Only ONE net-new Page:** the `/flag-printing-dubai/` pillar hub — it has no category equivalent, so no cannibalization.
- **Telescopic:** keep the single `telescopic-flags` category but rewrite it to cover BOTH the pole/mast hardware AND the printed flag + price (mixed-intent term, ~700 impressions). One URL, both intents — don't split into a competing page.

> Note on URL prettiness: I am **not** renaming the `/product-category/` base or adding `-dubai` to slugs right now. Those changes 301 every category URL at once and risk the handful already earning impressions. Locale is inferred from content + GBP; competitors rank with plain `/table-flags/`. Revisit only if impressions plateau.

## The map — one canonical URL per money term

| Money keyword | Canonical URL (existing category unless noted) | id | Action | Priority |
|---|---|---|---|---|
| flag printing dubai (head) | **/flag-printing-dubai/** (NEW Page — pillar hub) | — | create | P1 hub |
| telescopic flag pole dubai/uae | /product-category/event-branding-flags/telescopic-flags/ | 101 | enrich (pole+flag+price) | P1 |
| table flags dubai | /product-category/office-flags/table-flags/ | 149 | enrich | P1 |
| conference flags dubai | /product-category/office-flags/conference-flag/ | 244 | enrich (proven winner) | P1 |
| l shape flags dubai | /product-category/event-branding-flags/l-shape-flags/ | 80 | enrich | P1/P2 |
| sail flags dubai | /product-category/event-branding-flags/sail-flag/ | 251 | enrich | P1/P2 |
| advertising flags dubai | /product-category/event-branding-flags/advertising-flags/ | 107 | enrich | P2 |
| teardrop flags dubai | /product-category/event-branding-flags/tear-drop-flag/ | 74 | enrich | P2 |
| royal table flags dubai | /product-category/office-flags/table-flags-royal/ | 162 | enrich (distinct long-tail) | P2 |
| car flags dubai | /product-category/decorative-flags/car-flags/ | 210 | enrich | P3 |

## Cannibalization fixes — 301 vs noindex (per URL)

**A. 301 REDIRECT — genuine duplicates of a money category** (recategorize the product first, then redirect the empty dupe):
| From (dupe) | id | → 301 To | Why |
|---|---|---|---|
| /…/sail-flag/curve-top-flag/ | 252 | …/sail-flag/ | "Curve Top" IS the sail flag product — same term |
| /…/sail-flag/compact-sail-flag/ | 253 | …/sail-flag/ | compact variant of same term |
| /…/l-shape-flags/large/ | 85 | …/l-shape-flags/ | "large" = size variant, not a query |
| /…/l-shape-flags/marker/ | 92 | …/l-shape-flags/ | marker = same L-shape term |
| /…/conference-flag/premium-flag/ | 248 | …/conference-flag/ | variant of conference |
| /…/conference-flag/royal-flag/ | 245 | …/conference-flag/ | variant of conference |
| /…/conference-flags-hanging/ | 246 | …/conference-flag/ | sub-variant |

> Each 301: (1) move its 1 product into the parent category, (2) set the redirect in **Rank Math → Redirections** (301), (3) remove the emptied category from menus. Products keep their own `/product/…` URLs — only the redundant category URLs redirect.

**B. NOINDEX,follow — thin single-product categories that are NOT money terms** (keep for internal nav, out of the index; Rank Math per-term metabox → Advanced → Robots = No Index):
`blade-flags (97), body-flags (160), fan-scarf (166), finish-line (139), hand-flags (134), pole-flags (125), festival-flags (191), hoisting-flags (185), stadium-flags (187), wall-mounted-flags (186), bunting-flag (256), car-desert-flags (221), dashboard-flags (231), pennant-flags (237), toothpick-flag (254)` — ~15 URLs.

**C. KEEP INDEX + ENRICH — the money categories** (table above) + the 5 parent hubs (event-branding-flags 73, office-flags 148, outdoor-flags 184, event-gear 124, decorative-flags 209): give each parent a short unique intro so it's a real hub, not an empty grid.

**D. DELETE — demo junk** (0 products, non-flag niche): categories `women-clothing (43)`, `compact (109)`; tags `bags, fashion, kids, shoes, women, woocommerce, m71, m72, m73, event-branding-flags(dup), tear-drop-flag(dup)`. *(Blocked by safety classifier via API — do via wp-admin bulk-delete or approve the API call.)*

**E. LEAVE — `?orderby`/filter facets**: already `canonical → /shop/` (the benign "92"). No action.

## Net effect on the 140 "crawled – not indexed"
- 7 dupe categories → 301'd into money parents (removes 7 competing URLs, consolidates link equity).
- ~15 thin non-money categories → noindex (leave the index cleanly).
- Demo junk deleted.
- 9 money categories enriched → become *indexable, rankable* instead of thin.
Remainder of the 140 (products, media, old URLs) → confirm against the **GSC export** when access is granted.

## Internal linking (do during enrichment)
Pillar `/flag-printing-dubai/` ↔ every money category (both directions). Each money category links up to the pillar and sideways to 2–3 sibling money categories. Blog posts (Week 4+) link down to money categories with keyword anchors.
