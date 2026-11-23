# CiCi Wang website

Public Chinese website: https://eucagit.github.io/Cici-Wang-Site/
Public English website: https://eucagit.github.io/Cici-Wang-Site/en/
Private administration service: https://cici-wang-growth-portal.workspace-743587.chatgpt.site/admin/

## Design
Independent Chinese and English documents, with matching language switches and hreflang. Apple system fonts are requested through CSS rather than bundling restricted font binaries. Body text is 20px, navigation 17px, desktop titles up to 80px. Serif headings use ui-serif with Chinese and non-Apple fallbacks. Dark forest-green transparent logo and conservatively restored portrait are derived from the supplied originals; originals remain in assets/. Gray translucent overlays provide hierarchy without reducing text contrast.

## Verified records
47 MLSListings Recent Transactions, verified November 17, 2026, each with an independent Chinese and English page. This is not a lifetime or seller-only total. Property sources remain on each page. See sources.html for biography, photography, restoration, and performance attribution.

## Administration and publishing
The administration service is deployed with a real D1 database, server-side password verification, HttpOnly sessions, login throttling, private drafts, review/edit/publish/unpublish, and private lead records. Its source is maintained separately in the task's work/cici-backend directory and the Site source repository. Passwords and service credentials are hosted runtime secrets, not in this public repository.

Access remains owner-private. A request to make the service public was rejected by automatic review; no workaround was used. Public article access and automatic public lead collection remain disabled until the user approves that audience change. The public site still supports email preparation and phone contact. config.js publicApiEnabled must stay false until approval and successful public access checks. The privacy notice must be updated when public collection is activated.

Published backend articles are server-rendered HTML with canonical URLs, language alternates, structured data, and a sitemap. While the service is private, these pages are only available to authorized visitors and are not publicly indexable.

## Daily ideas
The Codex automation 'CiCi 每日 Blog 选题' (cici-blog) is enabled daily at 09:00 America/Los_Angeles, delivering to the current chat. It prepares a draft in data/daily-idea.json, then asks whether to publish. The administration service syncs that file after login. No article is published without review. scripts/prepare-daily-idea.mjs creates an evergreen editorial draft structure; the daily task should improve it, check any current facts, avoid repetition, and commit only the draft file. Automation execution depends on the Codex automation environment being available. No traffic, indexing, ranking, or daily lead guarantee is made.

## Local preview
Serve this directory with a static HTTP server. No build dependencies are required for the public site. Root and en/ contain complete independent HTML pages. GitHub Pages publishes main at the root.

## Reviewed public articles

On November 23, 2026, the owner approved publication of the November 21, 22, and 23 bilingual drafts. These are published as static HTML under clog/ and en/clog/ on the existing public GitHub Pages site, with article-list links, language alternates, canonical URLs, BlogPosting metadata, and sitemap entries. Approved source records and public URLs are archived in data/published/YYYY-MM-DD.json. The private administration service and its database remain separate; static publication does not change its access or mark its database rows as published.
