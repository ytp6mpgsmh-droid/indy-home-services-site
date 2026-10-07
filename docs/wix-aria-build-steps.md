# Wix Aria build steps

Paste step 1 into Aria, wait for its report, then paste each next step one at a time. Do the manual checklist by hand in the Wix editor; Aria can't reliably do those items from chat.

**Before step 1:** confirm your editor can create a CMS collection with a dynamic item page (CMS > Create collection). Wix Harmony's CMS support has been limited; if it's missing, build in Wix Studio or the classic Wix Editor instead.

## Step 1 (main prompt)

```
Hi Aria. Please build IndyFoundationGuide.com. This is step 1 of several: build only what this message describes, then stop and send the report in rule 8. I'll send each next step after you finish. Don't publish the site.

WHAT IT IS
A free, independent consumer guide for homeowners in the Indianapolis metro (Indianapolis, Carmel, Fishers, Westfield, Noblesville, Greenwood, Franklin, Avon, Brownsburg, Plainfield) with foundation, basement or crawl space problems. We are NOT a contractor and do no repairs, inspections or engineering. We explain problems in plain English, show what repairs cost in Indianapolis, and compare local contractors using only public, checkable data: Google reviews, BBB rating, years in business, licensing and ownership (locally owned vs. national chain, franchise or dealer network). Contractors can't pay to be listed, removed or moved up.
Services: Foundation Repair, Basement Waterproofing, Crawl Space Repair, Sump Pump Installation, Concrete Leveling, Mold Removal.
Visitors are stressed homeowners, mostly on phones, who don't know industry terms and fear being overcharged. Every page should calm them and help them understand what they're seeing. Writing: friendly plain English (8th-grade level), like a knowledgeable neighbor; never a sales pitch or a pay-to-be-listed directory.
Look: calm, trustworthy and editorial, like an independent consumer-review publication, not a contractor ad. Text first, lots of white space, large type. Colors: Indy Navy #14243B (headings, footer, text on amber buttons), Ink #1F2937 (body), Slate #4B5563 (small text), Link Blue #1F5A96 (underlined links), Amber #F2A93B (primary buttons; never amber text on light backgrounds), backgrounds White, Paper #F7F5F0 and Mist #EEF1F5, borders #D9DEE5. No gradients. Fonts: Lora semibold for H1 and H2, Wix Madefor Text for everything else, body 18px.

RULES FOR EVERY STEP
1. Never invent contractor names, reviews, testimonials, star ratings, prices, statistics, team members, credentials, awards, years of experience, sources, links, phone numbers, addresses, license numbers, BBB grades, founding years, ranking criteria or survey methods. Use visible placeholders like [Contractor name], [Price range], [Your name], [Date]. General starter copy without numbers is fine; put [CHECK] after anything I should fact-check.
2. SEO comes first and beats design. Exactly one H1 per page, using the H1 text I give (not the SEO title); the Heading 1 style is used nowhere else. H2 for sections, H3 for items inside them (cards, FAQ questions, steps). Never skip levels or use a heading just for size.
3. Use my exact URLs (lowercase, hyphenated). Nested pages like /foundation-repair/cost are child pages of their parent. Breadcrumbs sit directly above the H1 on every page except the homepage. If Wix can't do something exactly, tell me and suggest an option; don't quietly substitute.
4. Guides are always regular pages, never blog posts. Under the H1 of every guide, cost guide, problem page and contractor list: "By [Your name] · Last updated [Month Day, Year]".
5. Phones first, fast. No sliders, carousels, parallax, animations, video backgrounds, autoplay, pop-ups, lightboxes, chat, social feeds, members area, login or site search. No text in images; tables are live text. Never hide text on phones that shows on desktop. Don't add pages, apps or features I didn't ask for; delete unused template pages.
6. Never add badges or seals, "#1 rated" or "certified" claims, "Sponsored", "Featured" or "Top pick" spots, "Call now!" bars, "Free estimate!" offers, urgency or countdowns, star widgets, review apps or testimonials. Photos are placeholders; never show people as our staff, customers or a contractor's crew.
7. Link text says where it goes, never "click here". If I ask for a link to a page that doesn't exist yet, write the link text followed by [link: /url]; we'll connect them at the end.
8. End every step with a report: each page you built (URL, H1, a draft SEO title under 60 characters with the keyword first, a draft meta description under 155 characters, no two alike); anything you couldn't do as asked; every [placeholder] and [CHECK] left. I'll paste the SEO text into the settings myself.

BUILD NOW
- Header: logo; Problems, Services, Costs and Contractors dropdowns (I'll fill them later); How We Rank; an amber "Compare Contractors" button linking to /contractors.
- Footer (navy): links to About, How We Rank, Disclosures, Contact, Privacy Policy, Areas We Serve and News (footer only, never the main menu).
- Homepage (/). H1: "Foundation and basement problems, explained, plus the Indianapolis contractors worth calling." No full-screen photo, slider or video. H2 sections in this order: What are you seeing? (8 problem cards); Top-rated contractors by service; What it costs in Indianapolis; How we rank; Who's behind this guide; Latest guides; Get matched with a contractor. Placeholder content for now; I'll send the details next.
- These pages, each with only breadcrumbs, its H1 and "[Draft]": /problems "Foundation and Basement Problems: What Are You Seeing?"; /costs "Foundation and Basement Repair Costs in Indianapolis"; /contractors "Indianapolis Foundation and Basement Contractors"; /how-we-rank "How We Rank Indianapolis Contractors"; /about "About IndyFoundationGuide"; /disclosures "How We Make Money"; /contact "Contact Us"; /privacy-policy "Privacy Policy"; /areas-we-serve "Areas We Serve in the Indianapolis Metro".
No other pages yet, and no city pages like /foundation-repair/carmel yet.
```

## Short fallback (if Aria limits length)

```
IndyFoundationGuide.com: a free, independent consumer guide (NOT a contractor) for Indianapolis-area homeowners with foundation, basement or crawl space problems. Plain-English guides, local repair costs, and contractor comparisons based only on public data; no one pays for position. Covers foundation repair, waterproofing, crawl spaces, sump pumps, concrete leveling and mold removal. Menu: Problems, Services, Costs, Contractors, How We Rank, plus a Compare Contractors button. SEO first, fast on phones. Calm editorial look, navy with amber buttons. Use [placeholders]; never invent contractor names, reviews, ratings, prices, credentials or team members. Don't publish.
```

## Step 2

```
STEP 2: THEME AND LOGO. Only change the site theme and the logo. Don't change any page content.
- Text styles: save Heading 1, Heading 2, Heading 3 and Paragraph as global styles, each with its matching HTML tag (H1, H2, H3, p). Desktop (phone) sizes: H1 Lora semibold 44px (32px), line height 1.2; H2 Lora semibold 32px (26px); H3 Wix Madefor Text semibold 22px (20px); body 18px, line height 1.6; small text (bylines, dates, breadcrumbs, captions) 15px Slate #4B5563. Article text column at most 720px wide. Never justify, center or capitalize whole paragraphs.
- Buttons: primary Amber #F2A93B (hover #E0952A) with navy semibold text, at least 48px tall, 6px corners, no shadow, at most one per section. Secondary: white with a 1.5px navy outline and navy text.
- Cards and boxes: white, 1px #D9DEE5 border, 8px corners, no shadow. The whole card is clickable; on hover only the border turns navy (no lift, zoom or motion). Tags are fully rounded and always contain words, never color alone.
- Tables: Mist #EEF1F5 header row with navy semibold text, 1px #D9DEE5 row lines, caption above. On phones a table stacks into rows or scrolls inside its own box; the page never scrolls sideways.
- Reserved colors: Amber Tint #FDF3E1 for Indianapolis notes only; Alert Red #9B2C2C on #FBECEC for safety warnings and form errors only. All text passes WCAG AA contrast, and keyboard focus is visible.
- Icons: one simple outline set (about 2px stroke, navy, in a 48px Mist circle on cards): foundation crack, water drop, bowing wall, sagging floor, crawl space, door/window, sinking slab, mold/air, info, map pin, phone, external link. No emoji, 3D icons, clip art, hard hats or tools.
- Photos (placeholders I'll replace): documentary style, natural light, muted colors: Indianapolis-area brick ranches, 1920s bungalows and 2000s suburban two-story homes, unfinished basements with poured or block walls, crawl spaces with vapor barriers, sump pits, cracked or sunken driveways and patios. Never present a photo as a contractor's work or a real customer's home. No contractor logos, handshakes, hard hats, tool belts, blueprints, houses held in hands or shocked homeowners pointing at cracks. Decorative photos may be dropped on phones; text never is.
- Logo: make only the MARK an image: a minimal flat house outline sitting on a solid amber bar that stands for the foundation, two colors. Beside it, "IndyFoundationGuide" as live text in Lora semibold, Indy Navy. No tagline or ".com". No hard hats, tools, cracks, check marks, shields, seals or racing flags. Also make a white-and-amber version for the navy footer. Both link to the homepage.
Then report: anything you couldn't do as asked.
```

## Step 3

```
STEP 3: HEADER AND FOOTER. Only change the header and footer.
- Desktop header: white, 1px #D9DEE5 bottom border, 56-64px tall. In order: logo; Problems, Services, Costs and Contractors dropdowns; How We Rank; the amber "Compare Contractors" button linking to /contractors. For now add only the hub pages: Problems > All Problems (/problems); Costs > All Costs (/costs); Contractors > All Contractors (/contractors). Services gets its items later. I'll ask you to add the rest as pages are built.
- Phone header: slim and sticky, with the logo, the amber button ("Compare" if space is tight) and a menu icon. The menu shows the same items as expandable groups. The header never animates or shrinks, and the logo is never an H1.
- Footer: navy #14243B, white text, links #C9D3E0, plain links with no heading tags. In order: the white-and-amber logo; links to About, How We Rank, Disclosures, Contact, Privacy Policy, Areas We Serve and News (News is [link: /news-and-updates] for now and never goes in the main menu); "Areas we serve: Indianapolis, Carmel, Fishers, Westfield, Noblesville, Greenwood, Franklin, Avon, Brownsburg, Plainfield" as plain text; "How we make money: Some contractors pay us when a homeowner contacts them through this site. That never changes their ranking, which is based only on public data. Learn more", with "Learn more" linking to /disclosures; "We're an independent guide, not a contractor. Contractors never pay to change their ranking."; "© [Year] IndyFoundationGuide.com".
Then report: anything you couldn't do as asked.
```

## Step 4

```
STEP 4: HOMEPAGE. Only change the homepage.
H1, live text: "Foundation and basement problems, explained, plus the Indianapolis contractors worth calling." Text first: no full-screen photo, slider or video; one small photo may sit beside the text on desktop only. Each section title below is an H2.
1. Under the H1: "A free, independent guide. We're not a contractor, and contractors can't pay to rank higher." Then "What are you seeing?": 8 tappable cards (icon and short live-text label), 2 per row on phones, 4 on desktop: Foundation Cracks, Wet Basement, Bowing Walls, Sagging Floors, Crawl Space Moisture, Sticking Doors and Windows, Sinking Concrete, Mold and Musty Smells, each with a [link: ...] placeholder for now. Under them, a small link: "Already know what you need? Compare contractors", to /contractors.
2. Top-rated contractors by service. First, build the reusable "How we make money" box: the exact footer note in a white box with a 1px border, 4px Slate left border, info icon and normal readable text size (not small grey print). Site-wide rule: this box appears once on every page that names contractors, above the first contractor name, card or table. Then 6 short stacked rows (no tabs), one per service, each with 3 [Contractor name] placeholder cards and a link to that service's best-companies page ([link: /foundation-repair/indianapolis] and so on).
3. What it costs in Indianapolis: a table built with Wix's Table element or a grid of text boxes, never an image, app or embed. Columns: Service | Typical Indianapolis range | What changes the price | Guide. One row per service; every price cell is [Price range]; each Guide cell links to that service's cost guide ([link: /foundation-repair/cost] and so on). Caption above: "Prices checked [date]".
4. How we rank: 3 short points with icons (Public data only; No one pays for position; Updated every quarter) and a link to How We Rank.
5. Who's behind this guide: a round photo placeholder, 2-3 [placeholder] sentences about [Your name] and a link to About.
6. Latest guides: 3-4 links to guide pages (never blog posts), as [link: ...] placeholders for now.
7. Get matched with a contractor: a placeholder for the form, which comes in the next step. It sits on the page, never in a pop-up.
Then report: the homepage's draft SEO title and meta description, anything you couldn't do as asked, and placeholders left.
```

## Step 5

```
STEP 5: LEAD FORM. Only build the form, a new /thank-you page, and the form's spot on the homepage.
Build "Get matched with a contractor" once, as a section that's easy to hide and show (I may launch with only Call and Website buttons). Use Wix Forms, with submissions visible only to me. It always sits on the page, never in a pop-up. No payments, cart or checkout anywhere on the site.
Line above the form: "Free, with no obligation. We send your request only to the contractor you choose, or to one vetted contractor we match you with."
One column. Labels always visible above each field (not just placeholder text). Fields at least 48px tall. In this order:
1. Service needed: dropdown of the 6 services (required)
2. ZIP code: number keyboard (required)
3. What's going on?: short text box (required)
4. Timeline: ASAP / 1-3 months / Just researching (optional)
5. Preferred contractor (optional): a dropdown with only "Match me with a vetted contractor", as the default. I'll add the contractors who agreed to receive requests myself; never fill it from the directory.
6. First name, Last name (required)
7. Phone: phone keyboard (required)
8. Email (required)
9. Photos: optional upload
10. Required checkbox, unchecked by default: "[Consent wording - my attorney will approve. Meaning: I agree to be contacted by phone, text and email about my request by the contractor I chose or was matched with.]", with a link to /privacy-policy.
Button: "Send my request". Under it: "Free for homeowners." and a "How we make money" link to /disclosures. Explain each error in words next to its field, not just with a red outline.
After sending, take the visitor to /thank-you (not in any menu). H1: "Thanks, your request was received". Text: "You'll usually hear from a contractor within 1-2 business days by phone or email. Haven't heard back in 2 business days? Contact us." (linking to /contact), plus links to /costs and How to Choose a Contractor ([link: /contractors/how-to-choose]).
Put the form at the bottom of the homepage, replacing the placeholder.
Then report: URL, H1, draft SEO title and meta description for each page built; anything you couldn't do as asked; placeholders left.
```

## Step 6

```
STEP 6: CONTRACTOR DATA (CMS). Only work in the CMS. Don't change any page.
First, tell me whether this editor can do all of these: create a CMS collection, make a dynamic item page at /contractors/{slug}, and show a list connected to the collection with a filter and a sort. If it can't, stop and tell me before building anything.
Create a collection named "Contractors" with these fields. I prepare every value in my Google Sheet and import it, so you never need to calculate or combine fields:
- Name; Slug (lowercase-hyphens, e.g. acculevel; never "how-to-choose"); Page H1 (e.g. "Acculevel Reviews, Ratings and Services")
- Based in (city); Street; City; State; ZIP
- Website (URL); Phone (the company's own number); Display phone (the number visitors see and tap)
- Service tags; City tags (tags, used for filters)
- Google (text, e.g. "4.8 (49 reviews)" or "No Google listing found"); BBB (text, e.g. "A+, accredited" or "No BBB profile found"); Founded (text, e.g. "1995 (not yet verified)" or "Not found"); Indianapolis license (text); Ratings checked (date)
- Review links (rich text: links to the company's own Google and BBB pages, only where they exist)
- Ownership type (Local / Regional / National / Franchise / Dealer network / Unknown); Parent company
- Status (Vetted / Borderline / Unverified / Not vetted); Status reason; List order (number)
- Our summary (rich text); Best for; Watch-outs; Other services
- Services links (rich text); Areas served (rich text)
- Participating label (text: empty, or "Participating contractor")
- Sources (rich text: a link and date checked for each fact); Last reviewed (date)
Add 3 obviously fake sample items, [Sample contractor 1] to [Sample contractor 3], filled with placeholder values so I can see the layouts. I'll import my real contractors and delete the samples.
RANKING RULE, everywhere contractors are listed: sort by List order, low to high. I set List order from Status first, then Google review count. Participating label is never used to sort or filter, and never changes a company's position, card size or styling. Show every matching item on the page at once: no "Load more" button, no pages, no infinite scroll; allow up to 50 items.
PRIVATE DATA: visitors can read Wix collections. Never add fields for lead emails, price per lead, free leads left, billing, internal research notes or open questions; those stay in my private Google Sheet. Our summary, Status reason and Watch-outs are public text written for homeowners.
Then send me the field list and anything you couldn't do as asked.
```

## Step 7

```
STEP 7: CONTRACTOR PROFILE. Only build the Contractors item page at /contractors/{slug}. Don't change any other page. In this order:
1. Breadcrumbs: Home > Contractors > {Name}. If Wix's Breadcrumbs element can't show this path, build it as one line of plain text links, with {Name} connected to the collection.
2. H1 connected to Page H1. Next to it, the Participating label as a neutral tag linking to /disclosures. Under it: "Last reviewed" + Last reviewed.
3. Quick facts box: Based in, Service tags, City tags, Founded, Ownership type, Website, Display phone.
4. The "How we make money" box.
5. H2 Ratings at a glance, as plain text with no stars: Google, BBB, Indianapolis license, "Checked" + Ratings checked, then Review links so readers can read reviews there. Never copy reviews or testimonials onto our site.
6. H2 Our take: Status, Status reason, Our summary, Best for, Watch-outs.
7. H2 Services offered: the Services links field.
8. H2 Areas served: the Areas served field, then a link to /areas-we-serve.
9. H2 Sources: the Sources field.
10. H2 Contact this company: a Call button (primary, tap-to-call Display phone) and a Visit website button (secondary, opens in a new tab). Under them, the "Get matched with a contractor" form, the same on every profile.
11. An "Is this your company? Report a correction" link to /contact, and a link to How We Rank.
Any element connected to an empty field must not show: no empty tags, labels or buttons. If you can't do that, tell me.
Then report: anything you couldn't do as asked, and placeholders left.
```

## Step 8

```
STEP 8: CONTRACTOR CARDS AND DIRECTORY. Only change /contractors and the homepage contractor rows.
Build these reusable sections once:
- Page header: the H1, an optional one-sentence summary, then "By [Your name] · Last updated [Month Day, Year]" in small Slate text. Never add a "Reviewed by" line; I'll add one myself only after a real expert review.
- Contractor card, identical in size and style for every company, paying or not: the Name as H3 text (never a logo) linking to its profile; the Participating label next to the name as a neutral tag, the same size as the other facts, linking to /disclosures; "Based in" + Based in; Service tags; facts as plain text, never stars: "Google:" + Google, "BBB:" + BBB, "In business since:" + Founded, "Checked" + Ratings checked; Status as a neutral tag with the word; a "View profile" secondary button; "Call" (tap-to-call Display phone) and "Website" (new tab) links. Nothing styled as Featured, Top pick or Sponsored.
- Compact card: the same card without the Call and Website links.
- Any element connected to an empty field must not show (no empty tags or links).
Directory /contractors, in order: breadcrumbs (Home > Contractors); page header; a short intro; the "How we make money" box and one line on how we rank, linking to /how-we-rank; Service and City filters using Service tags and City tags (if this editor can't filter, tell me); every contractor as a compact card, in ranking-rule order, all on the page; H2 "Best by service" with links to the 6 best-companies pages ([link: ...] for now); links to How to Choose a Contractor ([link: /contractors/how-to-choose]) and How We Rank.
Homepage: connect the 6 contractor rows to the collection. Each row shows 3 compact cards whose Service tags include that service, sorted by List order.
Then report: the directory's H1, draft SEO title and meta description; anything you couldn't do as asked; placeholders left.
```

## Step 9

```
STEP 9: BEST-COMPANIES PAGE. Only build /foundation-repair/indianapolis, a child page of /foundation-repair. If /foundation-repair doesn't exist yet, create it with only breadcrumbs, its H1 "Foundation Repair: A Plain-English Guide for Indianapolis Homeowners" and "[Draft]".
This is the site's most important page type. H1: "Best Foundation Repair Companies in Indianapolis". In this order:
1. Breadcrumbs (Home > Foundation Repair > Best Companies in Indianapolis); page header; a reusable Quick answer box (Mist background, 4px navy left border, bold label "Quick answer", 2-3 sentences) with [2-3 sentence summary of our picks].
2. The "How we make money" box.
3. H2 How we picked these companies: exactly these 3 points: Public data only; No one pays for position; Updated every quarter. Then a link to How We Rank.
4. H2 At a glance: a comparison table (Company | Based in | Google rating (reviews) | BBB | Founded | Status), caption "Ratings checked [date]" above, built as rows of text connected to the collection, never an image, app or embed. Each name links to its profile, followed by its Participating label when it has one.
5. H2 Top-rated foundation repair companies: Status = Vetted, as full cards (the contractor card plus Our summary, Best for and Watch-outs).
6. H2 Other companies we checked: every other status, the same full cards plus Status reason.
7. H2 What foundation repair costs in Indianapolis: 1-2 sentences with [Price range] and a link to /foundation-repair/cost.
8. H2 How to choose: a short "questions to ask before you hire" checklist and a link to How to Choose a Contractor.
9. H2 Areas served: the 10 cities as text and a link to /areas-we-serve.
10. A reusable FAQ: H2 "Frequently asked questions", each question an H3 with its answer visible right below (no accordion or FAQ app).
11. H2 Sources and method: [placeholder] text, with each source as [Source name - link - date checked].
12. The "Get matched with a contractor" form.
13. Reusable Related guides: 3-4 text cards linking to /foundation-repair, /foundation-repair/cost and a sibling guide.
Every list shows only contractors whose Service tags include Foundation Repair, sorted by List order, all on the page. Add this page to the Contractors dropdown.
Then report: URL, H1, draft SEO title and meta description for each page built; anything you couldn't do as asked; placeholders left.
```

## Step 10

```
STEP 10: OTHER BEST-COMPANIES PAGES. Only create the pages below. Duplicate /foundation-repair/indianapolis for each one, and change the URL, H1, breadcrumbs, Quick answer, every mention of the service, the service filter on every list, and the cost guide and main guide links. Each is a child page of its service page. If that parent doesn't exist yet, create it with only breadcrumbs, its H1 and "[Draft]".
- /basement-waterproofing/indianapolis "Best Basement Waterproofing Companies in Indianapolis" (parent /basement-waterproofing "Basement Waterproofing: A Plain-English Guide for Indianapolis Homeowners")
- /crawl-space-repair/indianapolis "Best Crawl Space Repair Companies in Indianapolis" (parent /crawl-space-repair "Crawl Space Repair: A Plain-English Guide for Indianapolis Homeowners")
- /sump-pump-installation/indianapolis "Best Sump Pump Installers in Indianapolis" (parent /sump-pump-installation "Sump Pump Installation: A Plain-English Guide for Indianapolis Homeowners")
- /concrete-leveling/indianapolis "Best Concrete Leveling Companies in Indianapolis" (parent /concrete-leveling "Concrete Leveling: A Plain-English Guide for Indianapolis Homeowners")
- /mold-removal/indianapolis "Best Mold Removal Companies in Indianapolis" (parent /mold-removal "Mold Removal: A Plain-English Guide for Indianapolis Homeowners")
Add the 6 best-companies pages to the Contractors dropdown and the 6 service pages to the Services dropdown. Connect the "Best by service" links on /contractors and the homepage row links. No two pages may share a title or description.
Then report: URL, H1, draft SEO title and meta description for each page built; anything you couldn't do as asked.
```

## Step 11

```
STEP 11: TRUST PAGES. Only change /how-we-rank, /disclosures and /about, replacing their drafts. Each gets breadcrumbs and the page header with byline. Use the exact text below.
/how-we-rank, H1 "How We Rank Indianapolis Contractors". Plain English, as 6 numbered H2 steps:
1. We use only public, checkable data: Google reviews, BBB rating, years in business, licensing (checked where records exist) and ownership (locally owned, or part of a national chain, franchise or dealer network). Each fact shows where it came from and when we checked it.
2. Our 4 status labels: a table of Vetted, Borderline, Unverified and Not vetted, each with [what each means]. I'll write the criteria. Don't invent weights, scores or thresholds.
3. The order: status first, then number of Google reviews.
4. What payment does and doesn't change: companies that pay us are labeled "Participating contractor", and payment never changes the order.
5. We recheck the data every quarter.
6. How a company can request a correction (link to /contact).
/disclosures, H1 "How We Make Money". At the top: "[Draft - attorney to confirm wording]". Then exactly:
"IndyFoundationGuide.com is free for homeowners. We earn money when participating contractors pay a fee for homeowner requests sent through our forms or tracked phone numbers. Contractors who pay us are labeled "Participating contractor."
Payment never affects rankings, ratings, reviews or what we write. Rankings use only public, checkable information (Google reviews, BBB rating, years in business, licensing and ownership) [CHECK: ownership added], and our method is published on our How We Rank page. Contractors can't pay to be listed, removed or moved up. We include highly rated companies that don't pay us.
We are not a contractor, engineer or inspector, and our guides are general information, not professional advice for your home. Questions or corrections: [email]."
/about, H1 "About IndyFoundationGuide". One founder only: [Your name], an Indianapolis-area homeowner, not a contractor, with a [photo] placeholder. No team members, credentials or years of experience. H2 sections:
- Why I started this site, with this story word for word: "I started IndyFoundationGuide after researching what Indianapolis homeowners find when they search for help with foundation cracks, wet basements or crawl space problems. The answers were scattered: Reddit threads, contractor sales pages, out-of-state companies writing about Chicago or Fort Wayne, and national directories that don't make clear who pays them. There was no single, honest, Indianapolis-specific place to learn what's wrong, what it should cost here, and which local companies have a track record. So I built one: plain-English guides, real local costs, and contractor comparisons based only on public, checkable data."
- What this site is and isn't: a guide, not a contractor.
- How our content is made: research from public sources such as BBB, Google reviews, Indianapolis licensing records, building codes, contractor interviews and local price quotes, linked on each page; drafts written with AI help, with every fact checked by me; a "Reviewed by" credit appears on a guide only after a real review by a licensed engineer or home inspector.
- How to report an error, with a link to /contact.
Then report: URL, H1, draft SEO title and meta description for each page; anything you couldn't do as asked; placeholders left.
```

## Step 12

```
STEP 12: CONTACT, PRIVACY AND AREAS. Only change /contact, /privacy-policy and /areas-we-serve, replacing their drafts. Each gets breadcrumbs and its H1.
- /contact "Contact Us": [email] and no street address. A simple form: Name, Email, Topic (Question / Report an error / I'm a contractor), Message. It is not the lead form and never goes to contractors. Note: "We're not a contractor. For help with a repair, use Compare Contractors." (linking to /contractors).
- /privacy-policy "Privacy Policy": only "[Privacy policy - my attorney will provide]".
- /areas-we-serve "Areas We Serve in the Indianapolis Metro": a short intro, then the 10 cities grouped by county, one H2 per county: Marion County: Indianapolis. Hamilton County: Carmel, Fishers, Westfield, Noblesville. Johnson County: Greenwood, Franklin. Hendricks County: Avon, Brownsburg, Plainfield. Then a reusable "Indianapolis note" callout (Amber Tint #FDF3E1 background, 4px amber left border, map-pin icon, for local facts only): "The Indianapolis contractor license (Sec. 875-101) covers the Consolidated City. It excludes Lawrence, Beech Grove, Speedway and Southport." Then links to the 6 best-companies pages. Don't create city pages.
Then report: URL, H1, draft SEO title and meta description for each page; anything you couldn't do as asked; placeholders left.
```

## Step 13

```
STEP 13: MAIN SERVICE GUIDE. Only change /foundation-repair, replacing its draft. H1: "Foundation Repair: A Plain-English Guide for Indianapolis Homeowners". On phones the first screen is breadcrumbs, H1, byline and Quick answer, with no large image above the H1. In this order:
1. Breadcrumbs (Home > Foundation Repair); page header; Quick answer box; "On this page": a short list of jump links to the page's H2s.
2. H2 What it is.
3. H2 Signs you may need it: an H3 per sign, each linking to its problem page ([link: /problems/foundation-cracks], [link: /problems/bowing-walls], [link: /problems/sagging-floors], [link: /problems/sticking-doors-windows]).
4. H2 Repair options explained: an H3 per method.
5. H2 What it costs in Indianapolis: a short summary with [Price range] and a link to /foundation-repair/cost.
6. H2 More foundation repair guides: links to /foundation-repair/bowing-basement-walls and /foundation-repair/signs-of-foundation-problems.
7. H2 Top-rated foundation repair companies in Indianapolis: the "How we make money" box, 3 contractor cards (Service tags include Foundation Repair, sorted by List order) and a link to /foundation-repair/indianapolis.
8. FAQ; H2 Sources; a reusable author box (round photo placeholder, [Your name], a two-line [bio], link to About); a reusable "Ready to get quotes?" box (one line and a button to /foundation-repair/indianapolis); Related guides.
Also build two reusable callouts for later pages: "Tip" (Mist background) and "Safety warning" (Alert Red colors, for urgent warning signs only).
Write only general starter copy. Put [CHECK] after anything that needs verifying, including local facts like clay soil or frost depth.
Then report: URL, H1, draft SEO title and meta description; anything you couldn't do as asked; placeholders left.
```

## Step 14

```
STEP 14: COST GUIDES. Only build /foundation-repair/cost and /costs (replacing the /costs draft).
/foundation-repair/cost, a child page of /foundation-repair. H1: "Foundation Repair Cost ([Year]): What Indianapolis Homeowners Pay". In this order:
1. Breadcrumbs (Home > Foundation Repair > Cost); page header; Quick answer: "Most homeowners pay [Price range] for foundation repair. In Indianapolis, typical jobs run [Price range]."
2. H2 Cost by repair type: a table in the homepage table's style, with the columns Repair type | Typical Indianapolis range | What changes the price, [Price range] in every price cell, and the caption "Prices checked [date]".
3. H2 What affects the price in Indianapolis: H3s such as clay soil, frost depth, access and permits, with Indianapolis note callouts and [CHECK] after each local fact.
4. H2 How to avoid overpaying: a link to How to Choose a Contractor.
5. H2 Compare Indianapolis foundation repair companies: a link to /foundation-repair/indianapolis.
6. FAQ; H2 How we gathered these prices, with [placeholder] text only; the "Ready to get quotes?" box; Related guides. Also link up to /foundation-repair and /costs.
/costs "Foundation and Basement Repair Costs in Indianapolis": breadcrumbs, page header, a short intro, the homepage cost table (one row per service, each linking to its cost guide) and a short FAQ.
Add Foundation Repair Cost to the Costs dropdown.
Then report: URL, H1, draft SEO title and meta description for each page; anything you couldn't do as asked; placeholders left.
```

## Step 15

```
STEP 15: PROBLEM PAGES. Only build /problems/wet-basement and /problems (replacing the /problems draft).
Problem pages are short and practical. They answer the symptom question ("why is there water in my basement?"). Repair detail and cost live in the service guides, so link to those early and don't repeat them.
/problems/wet-basement, a child page of /problems. H1: "Water in the Basement: Causes and What to Do". In this order:
1. Breadcrumbs (Home > Problems > Wet Basement); page header; Quick answer, with an early link to /basement-waterproofing.
2. H2 How serious is it?: a reusable seriousness scale with 3 levels written as words, never color alone: "Watch it", "Get it checked", "Call a pro soon". Use the Safety warning callout only for urgent signs.
3. H2 Common causes: H3s, plus an Indianapolis note.
4. H2 What you can check yourself.
5. H2 Which repair fixes it: service cards linking to /basement-waterproofing and /sump-pump-installation.
6. H2 What it might cost: links to /basement-waterproofing/cost and /sump-pump-installation/cost.
7. H2 Who to call: links to /basement-waterproofing/indianapolis and /sump-pump-installation/indianapolis.
8. FAQ; Related guides (including /basement-waterproofing/interior-vs-exterior).
/problems hub, "Foundation and Basement Problems: What Are You Seeing?": breadcrumbs, H1, a short intro and the 8 problem cards (live text and a simple icon) linking to /problems/foundation-cracks, /problems/wet-basement, /problems/bowing-walls, /problems/sagging-floors, /problems/crawl-space-moisture, /problems/sticking-doors-windows, /problems/sinking-concrete and /problems/mold-musty-smell.
Add Wet Basement to the Problems dropdown.
Then report: URL, H1, draft SEO title and meta description for each page; anything you couldn't do as asked; placeholders left.
```

## Step 16

```
STEP 16: EXTRA GUIDES. Only create the 5 pages below, one at a time, finishing each before the next. Use the /foundation-repair layout without the "Top-rated companies" block: breadcrumbs, page header, Quick answer, On this page, H2 sections on the topic, FAQ, Sources, author box, "Ready to get quotes?" box, Related guides. Each service guide links up to its main guide and across to its cost guide and best-companies page. Write general starter copy only, with [CHECK] after anything to verify.
- /foundation-repair/bowing-basement-walls: "Bowing Basement Wall Repair: Options and Cost"
- /foundation-repair/signs-of-foundation-problems: "Signs of Foundation Problems in Indianapolis Homes" (covers clay soil and frost depth)
- /basement-waterproofing/interior-vs-exterior: "Interior vs. Exterior Basement Waterproofing: Which Do You Need?"
- /mold-removal/do-it-yourself-or-hire: "Mold Removal: Do It Yourself or Hire a Pro?" (covers the EPA 10-square-foot guideline)
- /contractors/how-to-choose: "How to Choose a Foundation or Basement Contractor": questions to ask, red flags and how to compare quotes, with links to /contractors and /how-we-rank instead of a service. It's a normal page, not a contractor profile. If Wix won't allow this URL next to the profiles, use /how-to-choose-a-contractor and tell me.
Add How to Choose a Contractor to the Contractors dropdown.
Then report: URL, H1, draft SEO title and meta description for each page; anything you couldn't do as asked; placeholders left.
```

## Step 17

```
STEP 17: COPY THE SERVICE GUIDES AND COST GUIDES. Work on one service at a time and report after each. For each service below, copy /foundation-repair into its main guide (replacing the draft) and /foundation-repair/cost into its cost guide (a child of its main guide). On every copy, change the H1, breadcrumbs, Quick answer, all copy about the service, the service filter on the contractor cards, and every link. Each copy links to its own cost guide and best-companies page (/[service]/indianapolis). Main guide H1: "[Service]: A Plain-English Guide for Indianapolis Homeowners". Cost guide H1: "[Service] Cost ([Year]): What Indianapolis Homeowners Pay". Leave out "More ... guides" when a service has no extra guide.
- Basement Waterproofing: /basement-waterproofing and /basement-waterproofing/cost. Signs link to Foundation Cracks, Wet Basement, and Mold and Musty Smells. Extra guide: /basement-waterproofing/interior-vs-exterior.
- Crawl Space Repair: /crawl-space-repair and /crawl-space-repair/cost. Signs: Sagging Floors, Crawl Space Moisture, Mold and Musty Smells.
- Sump Pump Installation: /sump-pump-installation and /sump-pump-installation/cost. Signs: Wet Basement.
- Concrete Leveling: /concrete-leveling and /concrete-leveling/cost. Signs: Sinking Concrete.
- Mold Removal: /mold-removal and /mold-removal/cost. Signs: Crawl Space Moisture, Mold and Musty Smells. Extra guide: /mold-removal/do-it-yourself-or-hire.
Add the 5 cost guides to the Costs dropdown.
Then report: URL, H1, draft SEO title and meta description for each page; anything you couldn't do as asked; placeholders left.
```

## Step 18

```
STEP 18: COPY THE PROBLEM PAGES. Work on one page at a time and report after each. Copy /problems/wet-basement for each page below, as a child page of /problems. Change the H1, breadcrumbs (Home > Problems > [label]), Quick answer, all copy, and the links in "Which repair fixes it" (main guides), "What it might cost" (their cost guides) and "Who to call" (their best-companies pages). Link early to the deeper guide where one is listed.
- /problems/foundation-cracks, label Foundation Cracks: "Foundation Cracks: Which Ones Are Serious?" Services: Foundation Repair, Basement Waterproofing. Deeper guide: /foundation-repair/signs-of-foundation-problems.
- /problems/bowing-walls, label Bowing Walls: "Bowing Basement Walls: What It Means and How Urgent It Is". Services: Foundation Repair. Deeper guide: /foundation-repair/bowing-basement-walls.
- /problems/sagging-floors, label Sagging Floors: "Sagging or Bouncy Floors: Causes and Fixes". Services: Crawl Space Repair, Foundation Repair.
- /problems/crawl-space-moisture, label Crawl Space Moisture: "Crawl Space Moisture: Causes and Fixes". Services: Crawl Space Repair, Mold Removal.
- /problems/sticking-doors-windows, label Sticking Doors and Windows: "Sticking Doors and Windows: Is It Your Foundation?" Services: Foundation Repair. Deeper guide: /foundation-repair/signs-of-foundation-problems.
- /problems/sinking-concrete, label Sinking Concrete: "Sinking Concrete: Driveways, Patios, Steps and Garage Floors". Services: Concrete Leveling.
- /problems/mold-musty-smell, label Mold and Musty Smells: "Musty Smell or Mold in Your Basement or Crawl Space". Services: Mold Removal, Crawl Space Repair, Basement Waterproofing. Deeper guide: /mold-removal/do-it-yourself-or-hire.
Set the Problems dropdown to: All Problems, Foundation Cracks, Wet Basement, Bowing Walls, Sagging Floors, Crawl Space Moisture, Sticking Doors and Windows, Sinking Concrete, Mold and Musty Smells. Link the homepage and /problems cards to these pages.
Then report: URL, H1, draft SEO title and meta description for each page; anything you couldn't do as asked; placeholders left.
```

## Step 19

```
STEP 19: NEWS BLOG. Only add the blog. Don't change any other page.
- Add a Wix Blog named "News". I'll set its URLs myself (feed page /news-and-updates, posts at /news/{post-slug}). Feed page H1: "News and Updates".
- Categories: Contractor Report Card, Seasonal Checklists, Local Weather, Indianapolis Price Survey.
- Style the post page like the guides: H1 = the post title; a byline with the published date and Last updated; short, dated content; a "Read the full guide" box near the top and at the bottom, linking to the matching guide. If Wix's breadcrumbs can't show Home > News > the post title, tell me.
- Make one example post and leave it as a draft. Don't publish sample posts.
- Turn comments off. Don't add a Members Area, login bar, chat or any other app; if the blog installs one, tell me.
- Link "News" in the footer to the feed page. Never put it in the main menu.
Then report: anything you couldn't do as asked, and every app the blog installed.
```

## Step 20

```
STEP 20: FINAL CHECK. Check every page and fix what doesn't match, without redesigning anything:
- Connect every [link: /url] placeholder to its page. Every page has at least one link from another page. List any link whose page doesn't exist.
- Exactly one H1 per page, matching the H1 I gave; H2s and H3s in order, as real heading tags; breadcrumbs above the H1 on every page except the homepage; URLs and parent pages exactly as I gave them.
- The "How we make money" box appears once on every page that names contractors, above the first contractor name, card or table. No card is styled as Featured, Sponsored or Top pick. Contractor website links appear only on cards and profiles, never in guide text, and open in a new tab.
- Made-up content: list every contractor name, rating, review, testimonial, price, statistic, team member, credential, award, badge, source or link I didn't give you, and replace each with a [placeholder].
- At 375px wide: no sideways scrolling; tables stack or scroll inside their own box; buttons and links at least 48px tall with space between; body text 18px; no amber text on light backgrounds; visible labels on every form field; nothing animated, autoplaying or popping up; on guides, the first screen is breadcrumbs, H1, byline and Quick answer.
- No text in images or hidden on phones; descriptive alt text on meaningful images; decorative images marked decorative.
Then send the final report: a table of every page (URL, H1, draft SEO title, draft meta description, parent page); everything you couldn't build exactly as asked and what you did instead; everything I must set by hand; and every [placeholder] and [CHECK] left, by page. Don't publish the site.
```

## Manual checklist

- Before you paste anything, open the editor and check that you can create a CMS collection with a dynamic item page (CMS > Create collection). If you're in Wix Harmony and can't find both, build the site in Wix Studio (or the classic Wix Editor) instead, and don't rely on the third-party "CMS for Harmony" app. Not sure? Ask Aria: "Can this editor create CMS collections, a dynamic item page at /contractors/{slug}, lists with a filter and sort, and child page URLs like /foundation-repair/cost?"
- Paste the main prompt first. Then paste steps 2 to 20 one at a time, and wait for each report before sending the next. Save every report: it holds the draft SEO titles and the list of placeholders.
- Settings > Business Info: describe the site as an online publication or consumer guide, not a home-services business. Leave the street address blank, and delete any address a template added to the footer or a contact block.
- Theme fine-tuning: confirm Heading 1, 2 and 3 and Paragraph use the H1, H2, H3 and p tags. Use an 8px spacing scale (8, 16, 24, 32, 48, 64, 80): sections 48px top and bottom on phones and 80px on desktop, 20px side margins on phones, content at most 1200px wide, 48px above each H2 and 32px above each H3, and card padding of 20px on phones and 24px on desktop.
- Upload the favicon (the logo mark on a navy square) and the social sharing image. Confirm the name beside the logo is live text, not part of the image.
- Before the CMS import, clean the public text in your Sheet. Rewrite Our summary, Status reason and Watch-outs for homeowners in these 9 records: acculevel, americrawl, crossroads-foundation-repair, erie-home, everdry-greater-indiana, healthy-home-foundation-repair, indiana-crawl-space-repair, jaco-waterproofing and smartcrawl. Remove notes about our PDF, SEO, ads or branding, for example "flagged as a judgment call in the PDF", "it ranks for most foundation searches", "buys Local Services Ads", "reclassify from 'local' to 'regional' on the site", "Do not use 'Crossroads' in our own domain/brand" and "becomes eligible Nov 2026". Don't import openQuestions or ownership notes.
- Fill the display fields in your Sheet:
- Page H1: "{Name} Reviews, Ratings and Services".
- Google: "4.8 (49 reviews)", or "No Google listing found".
- BBB: "A+, accredited", or "No BBB profile found" (A-1 Indiana Waterproofing and Indiana Crawl Space Repair).
- Founded: add "(not yet verified)" for every company except Crossroads, Healthy Home and Hitman; use "Not found" for Indiana Crawl Space Repair and Trusted Foundation Solutions.
- Indianapolis license: "Not yet checked" until you have the record (none are collected yet).
- Display phone: the real number now, a tracking number later. Only 4 of 21 companies have a phone so far.
- Participating label: empty unless the company pays you.
- Service tags and City tags.
- Services links: each service linked to its main guide and best-companies page.
- Areas served.
- Review links: only links that exist, never guessed.
- List order: sort the Sheet by Status (Vetted, Borderline, Unverified, Not vetted), then by Google review count from high to low (use 0 when missing), and number the rows 1 to N. Payment never changes it. Import only the rows that are ready to publish (Show profile = yes), then delete the 3 sample contractors.
- CMS permissions: visitors can read but never write. Lead emails, price per lead, free leads left, billing and research notes stay only in your private Sheet.
- Contractor profile page settings: URL /contractors/{slug}. SEO title pattern: "{Name} Reviews & Ratings in Indianapolis". Meta description pattern: "{Name} at a glance: Google and BBB ratings, years in business, services and areas served. Checked {Last reviewed}." If Aria moved How to Choose to /how-to-choose-a-contractor, update the menu, footer and every link to it.
- Every page: check its URL slug and parent page against the URL map (Page Settings > SEO, and SEO Settings > site hierarchy), then paste the reviewed SEO title and meta description. No two pages may share a title, H1 or description.
- If Aria is slow at steps 10, 17 or 18, duplicate the pages yourself (Pages > Duplicate). On each copy, edit the H1, URL, parent page, breadcrumbs, Quick answer, contractor list filter and links.
- Lead form: add the Preferred contractor options yourself (only contractors who agreed to receive requests). Add a hidden "Source page" field if Wix Forms offers one. Confirm the form goes to /thank-you and that only you can see submissions. Hide the form if you launch with only the Call and Website buttons.
- Wix Automations, two emails:
1. An alert to you with every field.
2. The homeowner confirmation. Subject: "Your request was sent". Body: "Hi {First name}, thanks for using IndyFoundationGuide.com. Your request for {Service} was sent. Contractor: {Preferred contractor}. You'll usually hear back within 1-2 business days by phone or email. While you wait: [link to the service's cost guide, or /costs] and [link to How to Choose a Contractor]. Haven't heard back in 2 business days? Reply to this email and we'll help. IndyFoundationGuide.com. We're an independent guide, not a contractor. Contractors never pay to change their ranking."
If Wix can switch wording, use "Your request was sent to {Preferred contractor}" when the homeowner chose a contractor, and "Your request was received ... we'll match you with a vetted contractor" for Match me.
- Make or Zapier: new Wix submission > look up the chosen contractor in your Sheet's Contractors tab > email them the request (Reply-To the homeowner, BCC you) > add a row to the Leads tab. Add a "Match me" row with your own email so unmatched requests come to you.
- Blog: set the post URL prefix to "news" (posts at /news/{slug}) and the feed page slug to /news-and-updates, because Wix won't let both use "news". Create the 4 categories, turn comments off, keep sample posts as drafts, and point the footer News link to the feed page.
- Manage Apps: remove anything you didn't ask for, such as a Members Area, login bar, chat or Wix Search.
- Indexing: noindex /thank-you and keep it out of the sitemap. Noindex blog tag, category and archive pages. Make sure sample items, draft posts and leftover template pages aren't in the sitemap.
- Structured data (SEO Settings > structured data markup):
- Site-wide: Organization and WebSite. Never LocalBusiness for your own site.
- BreadcrumbList on every page with breadcrumbs.
- Article on guides, cost guides and problem pages (author [Your name], dateModified = the Last updated date shown).
- FAQPage only where an FAQ is visible.
- The 6 best-companies pages: an ItemList of HomeAndConstructionBusiness items (name, profile URL, address, areaServed), in page order.
- Profiles: HomeAndConstructionBusiness (name, address, the company's real Phone and never the tracking number, areaServed, website), with NO aggregateRating or review markup.
- Blog posts keep Wix's BlogPosting.
Test everything with Google's Rich Results Test.
- Contractor website links and buttons (cards and profiles): set them to open in a new tab with rel="nofollow". For Participating contractors use rel="sponsored nofollow". Check the CMS-connected buttons too.
- Custom 404 page with links to Problems, Services, Costs and Contractors.
- Photos: replace every AI or stock photo. Delete any that show people as staff or customers, hard hats, handshakes, contractor logos or before-and-after sliders. Use descriptive file names (for example wet-basement-floor-water.webp) and alt text, and mark decorative images as decorative.
- "Reviewed by": add it to a guide only after a real review by a licensed engineer or home inspector, using their real name and credential.
- Checks: preview every page in mobile view (about 375px wide). Check that each page has one H1, using a heading-checker browser extension. After publishing, use Search Console's URL Inspection to confirm that table text and every listed contractor appear in the rendered HTML.
- Connect the domain, Google Analytics 4 and Google Search Console, submit the sitemap, and check that clicks on Call and Website links are tracked.
- Decide before launch whether to keep "Areas We Serve" or rename it "Areas We Cover" (/areas-we-cover), which sounds less like a contractor. Settle the URL before publishing so it never has to change.
- Before publishing, replace every [placeholder] and [CHECK] with verified facts. Get your attorney's consent wording, the Disclosures text (including the added "ownership" wording) and the Privacy Policy.
- Later:
- Add CallRail through Settings > Custom Code (check that your plan allows it) and put each paying contractor's tracking number in Display phone.
- Optional, needs Wix Studio code: preselect the company in a profile's form, driven by a new "Accepts requests" field (free-trial contractors receive requests but aren't Participating).
- Add city pages only when a city has 3+ real companies and its own local writing.

## What we learned about Aria (Oct 2026, from search summaries)

CAVEAT: The network proxy blocked direct fetches of wix.com, support.wix.com, dev.wix.com and the review sites, so everything below comes from search-result summaries of those pages. I found no published limit on prompt length.

WHAT ARIA IS AND DOES
- Aria is the AI agent inside Wix Harmony, Wix's hybrid AI/drag-and-drop editor launched in January 2026. Given a site description, it generates pages, layouts, colors, starter text and images. After that you chat with it ("Ask Aria", bottom right) to redesign pages or sections, change the palette and fonts, restructure navigation, write copy, add business features and apps, change some site settings and give SEO guidance. Everything it makes can also be edited by hand.
  Sources: https://www.wix.com/blog/aria-wix-ai-assistant, https://support.wix.com/en/article/wix-harmony-editor-working-with-aria, https://support.wix.com/en/article/wix-harmony-editor-creating-a-site-with-ai, https://tech.co/news/wix-harmony-ai-website-builder-what-how-get

HOW WIX SAYS TO PROMPT IT
- Wix's own advice favors short, scoped prompts:
  - Select the element first, then ask.
  - Describe the result you want (for example "make this hero feel more premium") rather than step-by-step actions.
  - Mix AI generation with manual editing.
  Source: https://www.createwith.com/tool/wix/updates/wix-shares-best-practices-for-using-aria-in-harmony
- Wix's "How to prompt a website" article says a good creation prompt has 4 parts: business type, the site's purpose, the audience and the design style. It also says to include your specific services, and that Aria can't invent what makes the business special.
  Source: https://www.wix.com/blog/how-to-prompt-a-website-with-wix

LIMITS AND GAPS
- Usage: chatting with Aria doesn't use AI credits. There's no stated cap on chats or messages, but heavy use can switch the service off until the next day.
  Source: https://support.wix.com/en/article/about-ai-credits
- No custom code: Harmony doesn't support Velo or the JavaScript SDK. Wix tells you to use Wix Studio or the classic Wix Editor if you need code. A dashboard snippet feature for HTML, JS and CSS is mentioned separately.
  Source: https://dev.wix.com/docs/develop-websites/articles/get-started/about-wix-harmony
- Missing features: Wix Search isn't supported in Harmony yet, and Wix Blocks apps aren't compatible.
  Source: https://support.wix.com/en/article/wix-harmony-editor-the-difference-between-wix-editor-and-wix-harmony
- CMS: at launch Harmony had no CMS, and a third-party app called "CMS for Harmony" (by The Wix Wiz, watermarked on its free plan) filled the gap. A later Wix article ("What's new with the CMS") says Harmony's CMS links collections straight to the design with no datasets. Reviewers describe Harmony as having a reduced CMS and restricted custom code compared with Wix Studio. Conclusion: check in your own editor that CMS collections and dynamic pages actually work before relying on them.
  Sources: https://www.issoh.co.jp/tech/details/11375/, https://www.wix.com/app-market/the-wix-wiz-cms-for-harmony, https://support.wix.com/ja/article/wix-harmony-whats-new-with-the-cms, https://vibecoding.app/blog/wix-harmony-review, https://durable.com/ai-tools/wix-harmony-review
- Speed and quality: users on the Wix forum report slow edits (about 10 minutes for a small section change) and plain layouts.
  Source: https://forum.wixstudio.com/t/wix-harmony-feedback/78125

SEO SETTINGS
- Every page has SEO settings (URL slug, title tag, meta description, index status, structured-data markup) in the SEO panel and SEO Settings. Harmony offers per-page SEO tasks (focus keyword, meta description) that AI can fill in or you can do by hand.
- Wix adds structured data automatically for blog posts and some other page types. Custom markup is added in the SEO Settings panel.
  Sources: https://support.wix.com/en/article/wix-harmony-editor-optimizing-your-site-with-seo, https://www.wix.com/seo/learn/resource/structured-data-on-wix, https://www.searchenginejournal.com/wix-page-level-seo-settings/471515

URLS, BREADCRUMBS AND THE BLOG
- Nested URLs: a parent page / child page hierarchy (for example /parent/child) is set under SEO Settings, site hierarchy.
  Source: https://support.wix.com/en/article/defining-your-site-hierarchy-for-main-pages-url-and-breadcrumbs-structure
- Breadcrumbs: Wix's Breadcrumbs element follows that hierarchy. Pages that belong to Wix apps (such as the Blog) can't be given a parent, and breadcrumbs on dynamic pages needed Velo in the classic Editor.
  Source: https://support.wix.com/en/article/wix-editor-adding-and-setting-up-breadcrumbs
- Blog URLs: the post URL prefix ("post") can be changed, but not to the same word as the Blog page's own slug. So a blog page at /news with posts at /news/{slug} is NOT possible.
  Sources: https://support.wix.com/en/article/wix-blog-request-customize-blog-post-urls-to-match-the-main-blog-url, https://support.wix.com/en/article/wix-blog-about-blog-post-web-addresses-urls
- URL conflicts: dynamic page URLs can't clash with slugs already in use. Each collection can have up to 64 dynamic pages.
  Sources: https://support.wix.com/en/article/creating-a-unique-dynamic-page-url, https://support.wix.com/en/article/adding-additional-dynamic-item-pages-for-a-collection

FORMS
- Wix Forms has a file upload field.
  Source: https://support.wix.com/en/article/wix-forms-adding-a-file-upload-field
- I found no confirmation that Harmony supports hidden fields, conditional email wording, or presetting the form's contractor choice from a dynamic page's data.
