# Claude in Chrome: build the site skeleton with Astra

Before pasting: turn on "Coming soon" mode, take a backup, and make sure your WordPress plan allows installing themes and plugins. Paste the whole prompt once. If Claude in Chrome loses track, paste one stage at a time.

```
You're helping me build IndyFoundationGuide.com in my WordPress dashboard, using the free Astra theme and the built-in WordPress block editor. I'm not technical. Work in this browser.

GROUND RULES
- Work one STAGE at a time. At the end of each stage, give me a short report (what you did, anything you couldn't do, anything that needs my decision) and WAIT for my OK before the next stage.
- Never publish pages. Everything stays a draft unless I say otherwise. My site is in "Coming soon" mode.
- Ask before deleting anything other than WordPress's sample content, and before installing anything not listed here.
- Do NOT install Elementor, Beaver Builder, Spectra, or any page builder. Do NOT import an Astra Starter Template or demo content. We build from the plain Astra theme.
- Never invent contractor names, reviews, ratings, prices, statistics, credentials or team members. Use placeholders like [Your name], [Price range], [Draft].
- If something in Astra needs the paid Astra Pro to work, tell me instead of buying or installing it.

WHAT THE SITE IS
A free, independent consumer guide for Indianapolis-area homeowners with foundation, basement, crawl space or mold problems. We are NOT a contractor. We explain problems in plain English, show local repair costs, compare local contractors using public data, and the whole site funnels visitors to one page: /get-a-quote/ (a free quote request form). SEO and page speed come first. The look is calm, editorial and light, like an independent consumer-review site, not a contractor ad.

STAGE 1: THEME AND BASIC SETTINGS
1. Appearance → Themes: install and activate Astra (free). If WordPress asks to install the "Starter Templates" plugin, skip it.
2. Plugins: install and activate Rank Math SEO (free). Run its setup wizard in "Easy" mode; when it asks what kind of site this is, choose a blog/other website type, NOT a local business. Turn on Sitemap and Breadcrumbs. Skip anything that needs a paid plan.
3. Settings → General: Site Title "IndyFoundationGuide". Tagline "Independent guide to foundation, basement and crawl space repair in Indianapolis". Timezone "Indianapolis".
4. Settings → Permalinks: Custom Structure /news/%postname%/
5. Settings → Discussion: uncheck "Allow people to submit comments on new posts".
6. Delete the "Hello world!" post and the "Sample Page" page. Keep the "Privacy Policy" draft.

STAGE 2: ASTRA DESIGN (Appearance → Customize)
1. Global → Colors → Global palette. Set:
   - Theme/accent (buttons): #F2A93B
   - Link color: #1F5A96
   - Heading color: #14243B
   - Body text: #1F2937
   - Small/muted text: #4B5563
   - Backgrounds: #FFFFFF (main), #F7F5F0 (soft sections), #EEF1F5 (cards/table headers)
   - Borders: #D9DEE5
   Links underlined. Button text color: #14243B (navy text on amber buttons).
2. Global → Typography: headings (H1–H3) font Lora, weight 600. Body font: default system font (fastest), 18px, line height 1.6. H1 about 42px desktop / 32px mobile, H2 about 30px / 26px, H3 about 22px / 20px.
3. Global → Container: Layout "Full width / Contained" for pages; content width about 1200px. Sidebar: No Sidebar everywhere (pages, posts, archives).
4. Buttons: 6px rounded corners, no shadow, padding generous (at least 48px tall).
5. Make sure page titles display as the H1 on every page, and that the theme adds no other H1.
6. Breadcrumbs (Astra → Breadcrumb, or Rank Math's): show them directly above the page title on every page except the homepage. Use Rank Math as the breadcrumb source if Astra offers that choice.
7. Turn off anything animated or decorative: no scroll-to-top animations, no preloaders, no transparent header.

STAGE 3: CREATE THE PAGES (all drafts, body text "[Draft]")
For each: Pages → Add New Page, type the exact title, set the slug (URL) and Parent in the right sidebar, Save draft. Create group A before group B. Reuse the existing Privacy Policy draft.

GROUP A (no parent) — title | slug
1. Home | home
2. Foundation and Basement Problems: What Are You Seeing? | problems
3. Foundation Repair: A Plain-English Guide for Indianapolis Homeowners | foundation-repair
4. Basement Waterproofing: A Plain-English Guide for Indianapolis Homeowners | basement-waterproofing
5. Crawl Space Repair: A Plain-English Guide for Indianapolis Homeowners | crawl-space-repair
6. Sump Pump Installation: A Plain-English Guide for Indianapolis Homeowners | sump-pump-installation
7. Concrete Leveling: A Plain-English Guide for Indianapolis Homeowners | concrete-leveling
8. Mold Removal: A Plain-English Guide for Indianapolis Homeowners | mold-removal
9. Foundation and Basement Repair Costs in Indianapolis | costs
10. Indianapolis Foundation and Basement Contractors | contractors
11. How We Rank Indianapolis Contractors | how-we-rank
12. About IndyFoundationGuide | about
13. How We Make Money | disclosures
14. Contact Us | contact
15. Privacy Policy | privacy-policy
16. Areas We Serve in the Indianapolis Metro | areas-we-serve
17. News and Updates | news
18. Get Free Quotes from Vetted Indianapolis Contractors | get-a-quote
19. Thanks, Your Request Was Sent | thank-you

GROUP B (child pages)
Parent = Problems (page 2):
- Cracks in Your Foundation: What They Mean and When to Worry | foundation-cracks
- Water in Your Basement: Causes and Fixes | wet-basement
- Bowing or Leaning Basement Walls: Causes and Fixes | bowing-walls
- Sagging or Bouncy Floors: Causes and Fixes | sagging-floors
- Damp or Musty Crawl Space: Causes and Fixes | crawl-space-moisture
- Sticking Doors and Windows: Is It Your Foundation? | sticking-doors-windows
- Sinking Driveway, Patio or Steps: Causes and Fixes | sinking-concrete
- Mold and Musty Smells in Your Basement | mold
For EACH service page (pages 3–8), two children, where {Service} is that page's service name:
- {Service} Cost in Indianapolis | cost
- Best {Service} Companies in Indianapolis | indianapolis
Parent = Contractors (page 10):
- How to Choose a Foundation or Basement Contractor | how-to-choose

Then: Settings → Reading → "A static page": Homepage = Home, Posts page = News and Updates.
Report: a list of all 40 pages with their full URLs. Child URLs must look like /problems/wet-basement/ and /foundation-repair/cost/.

STAGE 4: MENUS, HEADER AND FOOTER
1. Appearance → Menus, create "Main Menu":
   - Problems → /problems/ , with the 8 problem pages as sub-items
   - Services (Custom Link, URL "#") , with the 6 service guide pages as sub-items, labels shortened to: Foundation Repair, Basement Waterproofing, Crawl Space Repair, Sump Pumps, Concrete Leveling, Mold Removal
   - Costs → /costs/
   - Contractors → /contractors/ , sub-items: All Contractors (/contractors/), How to Choose a Contractor
   - How We Rank → /how-we-rank/
   Assign it as the Primary menu. (If the menu screen only lists published pages, tell me; don't publish anything yourself.)
2. Create "Footer Menu": Get Free Quotes (/get-a-quote/), About, How We Rank, Disclosures, Contact, Privacy Policy, Areas We Serve, News (/news/).
3. Customize → Header Builder:
   - Desktop: logo/site title on the left, Primary menu, then a Button element on the right: text "Get Free Quotes", link /get-a-quote/, amber background, navy text.
   - Mobile: site title, the same "Get Free Quotes" button visible WITHOUT opening the menu, and the hamburger menu.
   - Header background white with a thin #D9DEE5 bottom border. No transparent header, no top bar.
   - If a sticky header needs Astra Pro, tell me and skip it.
4. Customize → Footer Builder: navy (#14243B) background, white text. Footer Menu in one column; in another, this text: "IndyFoundationGuide is an independent guide, not a contractor. Contractors can't pay to change their ranking. How we make money" (link "How we make money" to /disclosures/). Copyright line: "© 2026 IndyFoundationGuide.com".

STAGE 5: PAGE LAYOUT PLACEHOLDERS
1. Create an (unsynced) pattern named "Quote CTA": a #F7F5F0 box with an H2 "Get free quotes from vetted local contractors", one line "Free, no obligation. Only the contractor you choose will contact you.", and an amber button "Get Free Quotes" linking to /get-a-quote/.
2. Home page: below the title, add these H2 sections with "[Draft]" under each: What are you seeing? · Top-rated contractors by service · What it costs in Indianapolis · How we rank · Who's behind this guide · Latest guides · Get matched with a contractor (insert the Quote CTA pattern here).
3. Get a Quote page: one intro line "Tell us what's going on. We'll send your request to the contractor you choose, or help you pick one. Free, no obligation." then "[FORM GOES HERE]", then H2 sections: What happens next · Why homeowners trust us · How we make money · Questions (each "[Draft]").
4. Thank You page: H2 sections "What happens next" and "While you wait" (each "[Draft]").
5. Insert the Quote CTA pattern at the end of: every problem page, every service guide, every cost page, every Best Companies page, Costs, Contractors, How to Choose, How We Rank, and Areas We Serve.
6. Rank Math: set /thank-you/ to "noindex" and exclude it from the sitemap.

STAGE 6: FINAL CHECK
Preview (don't publish) the Home page, one problem page and the Get a Quote page on desktop and in mobile view. Confirm: one H1 per page (the title), breadcrumbs above the title (not on Home), the header button visible on mobile, colors and fonts applied, no sidebar, nothing animated. Report what you see and anything that looks off.
```
