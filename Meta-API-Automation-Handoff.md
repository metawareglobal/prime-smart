# Meta (Facebook/Instagram) Automation — Handoff Notes

> Progress log for setting up Facebook Page + Instagram posting automation and Insights access for Prime Smart Flags. Written because this session (claude.ai/code) has no outbound network access and cannot execute any of this itself — see "Hard blocker" below. Pair with `Social-Growth-Session-Summary.md` for the broader SMM project context.

## What's been done so far (as of 15 Sep 2026)

1. **Meta Developer app created**: named **"PrimeSmart Automation"**.
2. **Use case added**: **"Manage everything on your Page"** (the correct one for Facebook Page posting + insights — covers `pages_*` permissions).
3. **Permissions being configured** in Graph API Explorer under that app, including at least:
   - `pages_show_list`
   - `pages_read_engagement` (in progress)
   - `instagram_manage_comments` (seen in permissions list — Instagram use case may need to be added separately if not already; "Manage everything on your Page" only covers Facebook, not Instagram)
4. **Graph API Explorer reached** (developers.facebook.com/tools/explorer/), app switched to "PrimeSmart Automation", a **User Access Token** generated (short-lived, User-level — not yet the Page-level token needed for actual posting).

## Not yet done
- Running `me/accounts` in the Explorer to get the **Page-specific access token** for the Prime Smart Flags Page (this is the token that actually works for posting/insights, not the User token).
- Exchanging that for a **long-lived Page token** (~60 days).
- Confirming whether a separate **Instagram** use case/permissions (`instagram_basic`, `instagram_content_publish`, `instagram_manage_insights`) has been added — "Manage everything on your Page" alone does not cover Instagram.
- Writing/running the actual posting + Insights script.

## Hard blocker — read this before continuing

**This Claude Code session (claude.ai/code) has zero outbound network access.** Confirmed repeatedly by testing `curl`/`WebFetch` against: primesmart.ae, facebook.com, graph.facebook.com, google.com, and even a generic test domain (example.com) — all rejected at the network egress proxy level (`EGRESS_BLOCKED` / `403 connect_rejected`). This is not a permissions issue and no access token fixes it — the connection never leaves the container.

Checked the MCP connector registry for a Facebook/Instagram posting connector that could be added to this session — **none exists**. The social-adjacent connectors available (Supermetrics, Windsor.ai, AdWhispr) are ad-analytics/reporting tools, not organic-post publishers.

**Consequence**: whoever continues this needs to do it from an environment with real internet access — a local Claude Code / Claude Desktop session, a script run on your own machine, or a no-code tool (Buffer, Meta Business Suite Planner, Make.com, Zapier) that connects directly to the Facebook/Instagram account through your browser.

## Security notes
- **Two access tokens were pasted directly into the previous chat session** (in plaintext). Both should be treated as exposed/compromised. **Regenerate them** in the Meta app dashboard before relying on either for real automation.
- Never paste a full, unredacted access token into a chat with an AI assistant going forward — screenshots of the Graph API Explorer's `me/accounts` response should have the `access_token` field values blurred/redacted before sharing.
- Long-lived Page tokens should live in an environment variable or secrets manager on whatever machine/service actually runs the posting script — never hardcoded into a repo file.

## Next steps for whoever/whatever continues this
1. In Graph API Explorer (with the User token active), run:
   ```
   GET me/accounts
   ```
   This returns each Page you manage with its own `access_token` — that's the Page Access Token needed for posting.
2. Exchange it for a long-lived token:
   ```
   GET /oauth/access_token?grant_type=fb_exchange_token&client_id={app-id}&client_secret={app-secret}&fb_exchange_token={short-lived-page-token}
   ```
3. If Instagram automation is wanted too, in the Meta app dashboard add the Instagram use case and enable `instagram_basic`, `instagram_content_publish`, `instagram_manage_insights` — then find the linked Instagram Business Account ID via:
   ```
   GET /{page-id}?fields=instagram_business_account
   ```
4. Write a script (Python or Node — ask Claude in a network-capable session to generate it) that:
   - Posts to the Facebook Page: `POST /{page-id}/feed` (text) or `/{page-id}/photos` / `/{page-id}/videos` (media)
   - Posts to Instagram (2-step): `POST /{ig-user-id}/media` (create container) then `POST /{ig-user-id}/media_publish` (publish it)
   - Pulls Insights: `GET /{page-id}/insights` and `GET /{ig-user-id}/insights`
5. Content to post is already produced and ready — see:
   - **PrimeSmart SMM Growth artifact**: https://claude.ai/code/artifact/c6702320-7c5f-49e9-b6d1-b1c0b44c2b2d (business summary, competitor comparison, full 3-month Content Calendar, checklist)
   - Week 1 Day 1 script (the "Who we are" intro post) — captions and hashtags for FB/IG/TikTok are in the Content Calendar tab of that artifact
   - A rendered intro video exists two ways: a Higgsfield AI-generated Reel (hosted on Higgsfield's CDN, 30s) and a Remotion motion-graphics version (rendered locally, sent to the user as a file) — both match the Week 1 Day 1 script

## Repo / project context
- Repo: `metawareglobal/prime-smart`, branch `claude/repo-analysis-summary-6gt8qj`
- See `CLAUDE.md`, `SESSION-CONTEXT.md`, and `Social-Growth-Session-Summary.md` for the full SEO/GEO/AEO + social media project background
