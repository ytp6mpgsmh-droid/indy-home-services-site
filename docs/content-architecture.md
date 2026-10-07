# Content architecture

Git-tracked JSON + MDX files instead of a database. There are about 20 companies, 10 cities and fewer than 50 pages, so a database adds hosting cost and adds nothing for SEO. Every page is statically generated: fast to load, fully crawlable, and each data change is a reviewable commit with a date. Move to SQLite or Postgres only when contractors or homeowners write data into the site (lead forms, contractor dashboards).

## Folders

```
content/
  companies/<slug>.json      one file per contractor: facts + sources + editorial
  locations/<slug>.json      Indianapolis + suburbs (county, licensing rules, neighbors)
  services/<slug>.mdx        6 pillar guides (one per service)
  guides/<slug>.mdx          cost / how-to / comparison articles (frontmatter: service, cities, updated)
src/lib/content/
  schema.ts                  Zod schemas; the single source of truth for fields
  companies.ts               loaders + the public ranking rule
scripts/validate-content.mts `npm run validate:content`
```

## Navigation (agreed 2026-10-07)

```
[Logo]  Problems ▾  Services ▾  Costs ▾  Contractors ▾  How We Rank   [Compare Contractors]
```

* **Problems** `/problems/<symptom>/`: cracks, wet basement, bowing walls, sagging floors, crawl space moisture, sticking doors/windows, sinking concrete, mold/musty smell. Each one routes to the services that fix it.
* **Services**: Foundation Repair, Basement Waterproofing, Crawl Space Repair, Sump Pumps, Concrete Leveling, Mold Removal.
* **Costs** `/costs/`: summary table linking to each service's `/cost/` page.
* **Contractors** `/contractors/`: directory, profiles at `/contractors/<slug>/`, and `/contractors/how-to-choose/`.
* Footer: About, Disclosures, Contact, areas served, News.
* **News**: feed page at `/news-and-updates/`, posts at `/news/<slug>/` (Wix Blog post prefix changed from `post` to `news`; Wix won't let the feed page and the post prefix share the same word): 1–2 dated posts a month, not in the main menu. Only timely content: quarterly Contractor Report Card updates, seasonal checklists (spring thaw, heavy rain, freeze), local weather or drought events, Indianapolis price survey results. Every post links to its matching evergreen guide. Evergreen guides are never blog posts; they're regular pages that get updated in place with a visible "Last updated" date.

## URL map (topic silos)

| URL | Page | Target keyword(s) |
|---|---|---|
| `/foundation-repair/` | Pillar: what it is, methods, signs | foundation repair |
| `/foundation-repair/cost/` | Cost guide with Indianapolis section | foundation repair cost (12.1k/mo, KD 29) |
| `/foundation-repair/bowing-basement-walls/` | Guide | bowing basement wall repair cost (880, KD 4) |
| `/foundation-repair/signs-of-foundation-problems/` | Guide (clay soil, frost depth) | signs of foundation problems (880) |
| `/foundation-repair/indianapolis/` | **Money page**: best companies | foundation repair indianapolis (320) |
| `/basement-waterproofing/…` | Same pattern: pillar, `/cost/`, `/interior-vs-exterior/`, `/indianapolis/` | basement waterproofing cost (9.9k, KD 7) |
| `/crawl-space-repair/…`, `/sump-pump-installation/…`, `/concrete-leveling/…` | Same pattern | |
| `/mold-removal/…` | Same pattern + `/mold-removal/do-it-yourself-or-hire/` (EPA 10 sq ft rule) | mold removal indianapolis |
| `/<service>/<city>/` | City pages, added only once a city has 3+ real companies and unique local copy | foundation repair carmel |
| `/contractors/<slug>/` | Contractor profile | "<company name> reviews" |
| `/how-we-rank/`, `/disclosures/`, `/about/`, `/contact/` | Trust pages (E-E-A-T, FTC) | |

The pillar links down to its guides and its city pages. Each guide links up to the pillar and across to the money page. Each company profile links to every service and city page it appears on.

## Company record rules

* **Every fact carries a source and a `checkedAt` date.** This supports the published method ("we rank only on public, checkable data") and the quarterly refresh.
* `editorial.status` (`vetted` / `borderline` / `not-vetted` / `unverified`) drives list order, together with Google review count. `paidRelationship` is shown as a label and **never** changes the order.
* `openQuestions` lists what still needs checking before a profile goes live.

## Structured data (JSON-LD)

* Guides: `Article` + `FAQPage` (FAQ rich results are limited now, but the markup still helps parsing) + `BreadcrumbList`.
* Money pages: `ItemList` of `HomeAndConstructionBusiness` items (name, url, address, areaServed).
* Company profiles: `HomeAndConstructionBusiness` **without `aggregateRating`**. Google's review-snippet rules forbid marking up ratings copied from Google or BBB. Show the ratings as text with the date they were checked.
* Site-wide: `Organization` + `WebSite`.
