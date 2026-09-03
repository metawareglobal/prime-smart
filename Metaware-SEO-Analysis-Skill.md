# Metaware SEO Analysis Skill (reference copy)

> This is a readable copy of the saved skill **`metaware-seo-analysis`** (a.k.a. "Metaware SEO Analysis Skill"), which is stored globally on the account and auto-loads in future sessions. Editing this file does NOT change the saved skill — to update it, ask to update the skill (uses `save_skill` with overwrite).

End-to-end workflow to audit a website for **SEO, GEO (local + generative), and AEO**, research money keywords, tear down competitors, measure speed, and deliver a stress-tested 60-day ranking plan with an execution handoff. Built for local/e-commerce sites (e.g. WordPress + WooCommerce) targeting a specific city/market. White-hat only.

## When to use
"Analyze my website for SEO," "help me rank for [keywords] in [city]," "competitor/keyword research," "check my Google Business Profile / speed," "build an SEO action plan," or recurring SEO reviews.

## Guiding principles (do not violate)
- **Brutal honesty over flattery.** Real problems, realistic timelines. Competitive head terms are 4–6 month plays, not 60 days.
- **White-hat only.** Never replicate black/grey-hat (e.g. site-wide fake `AggregateRating`). Flag it; don't copy it. Real review counts only.
- **Evidence-based claims.** Verify competitor grey/black-hat in live page code (JSON-LD/HTML) before alleging; don't allege cloaking/hidden-text/PBNs without proof.
- **Quality over quota.** 4–5 strong money pages + 2–3 posts beat 15 thin ones.
- **Measure vs the real GSC baseline.** Success = movement vs Day-1, not vanity counts.
- Ask ≤2 clarifying questions, then start; begin research immediately.

## Inputs
Site URL, target market/city, money keywords (or derive), and access to Search Console, Google Business Profile, Keyword Planner/Ads (optional), WordPress admin + hosting (for execution). Never store credentials in files.

## Tools
Chrome MCP (GSC Performance + Page indexing, Google Maps local pack, competitor JSON-LD via `javascript_tool`, PageSpeed Insights); `mcp__workspace__web_fetch` (pages — strips scripts, so JSON-LD needs the browser); `WebSearch` + geo-targeted Google SERPs for PAA/related terms; `pagespeed.web.dev` (rate-limits after ~3–4 rapid runs); `create_artifact`/`update_artifact`.

## Process (in order)
1. **Site crawl & technical/on-page audit** — titles (keyword+city?), meta, canonical, `og:image` (leftover theme-demo URL?), placeholder text, `0.00`/broken prices, dead nav `#`, UTF-8 mojibake, alt text, empty blog, thin content; extract JSON-LD + scan hidden text in the browser.
2. **Search Console** — Performance 3mo: clicks/impressions/CTR/**avg position**; sort queries by impressions for **high-impression zero-click** wins; Page indexing: indexed vs not, esp. **"Crawled – currently not indexed"** (thin) + canonical facet bloat. If denied, try URL-prefix property.
3. **Keyword research** — money keywords first (intent + city), volume second; pull **live PAA + "people also search for"** per seed; Keyword Planner only if active Ads account; else estimate + label. One canonical URL per term.
4. **Competitor teardown** — page-1 players per term; inspect URL pattern, content depth (pillar word count), FAQ+schema, review stars, turnaround/price USPs, E-E-A-T, local-climate copy; reverse-engineer the winning architecture; find their weak spots (thin content, no AEO).
5. **White/Grey/Black hat audit** — classify with evidence + confidence; notify which to avoid; steer to legitimate equivalents.
6. **GBP / Map Pack** — Google Maps head term: businesses, ratings, **review counts**, categories, sponsored vs organic; note client's absence; fastest visible page-1; watch licence/address verification risks; one primary phone across citations.
7. **Speed / CWV** — PSI mobile on **each page type** (home, shop/archive, product, category — they differ a lot); record Perf/LCP/TBT/CLS + opportunities; real-browser `performance` scan (requests, CSS/JS file counts, image dims); don't over-invest if already good.
8. **Deliverables (research first, then build)** — audit `.md`; Keyword+Competitor artifact (tabs); 60-Day Plan artifact (Week 0 diagnosis → roadmap → keyword→page targets → SEO/GEO/AEO → KPIs → speed → living checklist w/ persistent checkboxes, metric tracker, rank tracker, daily/weekly); Pillar page `.md` (copy + FAQ + JSON-LD, `aggregateRating` commented out until real reviews); Review-collection flow (WhatsApp, ask everyone, no gating/incentives); Backlink strategy (citations → B2B → PR; exact competitor links need Ahrefs/Semrush/Moz); CLAUDE.md handoff (access to request, order, keyword→URL, guardrails, honest done — no credentials).
9. **Stress-test (on request)** — 2–3 critical reviewer subagents (organic/technical, local-GEO/AEO, red-team) to catch over-promised targets & under-diagnosed root causes (template duplication, thin-content indexing, cannibalization, intent mismatch, GBP verification, review compliance, scope realism); recalibrate KPIs.

## Realistic 60-day "done"
Errors gone; 80–100 quality pages indexed; 3–5 non-brand money terms in top 20 + 1–2 long-tail on page 1; GBP live + 15–25 genuine reviews for near-me; clicks/impressions up 2–3×; avg position ~20. Head term to page 1 by month 4–6.

## Gotchas
- Artifacts persist; state in `localStorage`. **In-artifact `callMcpTool('mcp__workspace__web_fetch')` can be blocked (HTTP 400)** — auto-verify from the live site may fail there; make checks fail safe (never tick on error) and run verification agent-side (optionally scheduled), reporting changes.
- Keyword Planner needs an active Ads account.
- PSI shows "No Data" (field/CrUX) for low-traffic sites — rely on lab.
- Save deliverables to the user's folder + present; keep dashboards as artifacts.
