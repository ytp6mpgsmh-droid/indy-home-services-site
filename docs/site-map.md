# Site map (funnel version)

★ = in the step 8 skeleton · ◇ = added later · ➜ = quote button on that page (prefills the form)

```
indyfoundationguide.com
│
├── HEADER (every page):  Problems ▾  Services ▾  Costs  Contractors ▾  How We Rank   [ Get Free Quotes ]
│                                                                                         └➜ /get-a-quote/
│
├── ★ Home  /
│      ➜ "What are you seeing?" cards → problem pages
│      ➜ "Get matched with a contractor" section (short form or button) → /get-a-quote/
│
├── ★ Problems  /problems/                                  STAGE 1: "What's wrong?"
│   ├── ★ Cracks in Your Foundation            /problems/foundation-cracks/      ➜ ?service=foundation-repair
│   ├── ★ Water in Your Basement               /problems/wet-basement/           ➜ ?service=basement-waterproofing
│   ├── ★ Bowing or Leaning Basement Walls     /problems/bowing-walls/           ➜ ?service=foundation-repair
│   ├── ★ Sagging or Bouncy Floors             /problems/sagging-floors/         ➜ ?service=crawl-space-repair
│   ├── ★ Damp or Musty Crawl Space            /problems/crawl-space-moisture/   ➜ ?service=crawl-space-repair
│   ├── ★ Sticking Doors and Windows           /problems/sticking-doors-windows/ ➜ ?service=foundation-repair
│   ├── ★ Sinking Driveway, Patio or Steps     /problems/sinking-concrete/       ➜ ?service=concrete-leveling
│   └── ★ Mold and Musty Smells                /problems/mold/                   ➜ ?service=mold-removal
│
├── Services (menu heading only)                            STAGE 2: "What fixes it?"
│   ├── ★ Foundation Repair                    /foundation-repair/               ➜ ?service=foundation-repair
│   │   ├── ★ Cost in Indianapolis             /foundation-repair/cost/          ➜ "Get your actual price"
│   │   ├── ★ Best Companies in Indianapolis   /foundation-repair/indianapolis/  ➜ "Request a quote" on every card
│   │   ├── ◇ Piers vs. Wall Anchors           /foundation-repair/piers-vs-wall-anchors/
│   │   └── ◇ Do I Need a Structural Engineer? /foundation-repair/structural-engineer/
│   ├── ★ Basement Waterproofing               /basement-waterproofing/          (same pattern for every service:
│   │   ├── ★ Cost · ★ Best Companies                                             guide ➜, cost ➜, best companies ➜)
│   │   └── ◇ Interior vs. Exterior            /basement-waterproofing/interior-vs-exterior/
│   ├── ★ Crawl Space Repair                   /crawl-space-repair/
│   │   ├── ★ Cost · ★ Best Companies
│   │   └── ◇ Encapsulation Explained          /crawl-space-repair/encapsulation/
│   ├── ★ Sump Pump Installation               /sump-pump-installation/
│   │   ├── ★ Cost · ★ Best Companies
│   │   └── ◇ Battery Backups                  /sump-pump-installation/battery-backup/
│   ├── ★ Concrete Leveling                    /concrete-leveling/
│   │   ├── ★ Cost · ★ Best Companies
│   │   └── ◇ Mudjacking vs. Foam              /concrete-leveling/mudjacking-vs-foam/
│   └── ★ Mold Removal                         /mold-removal/
│       ├── ★ Cost · ★ Best Companies
│       └── ◇ DIY or Hire a Pro?               /mold-removal/do-it-yourself-or-hire/
│
├── ★ Costs  /costs/                                        STAGE 2: "What will it cost?"
│      ➜ under the summary table: "Prices vary. Get your actual price →"
│
├── ★ Contractors  /contractors/                            STAGE 3: "Who should I call?"
│   │  ➜ "Request a quote" on every company card
│   ├── ★ How to Choose a Contractor           /contractors/how-to-choose/       ➜ at the end
│   └── ◇ 21 contractor profiles               /contractors/{company}/           STAGE 4: "This one."
│          ➜ "Request a quote from {Company}" near the top and at the end (?contractor={company})
│
├── ★ GET FREE QUOTES  /get-a-quote/                        STAGE 5: CONVERT
│   │  Form (service, problem, ZIP, contractor or "Help me choose", timeline,
│   │  name, phone, email, photos, consent) + what happens next + trust strip + FAQ
│   └── ★ Thank You  /thank-you/  (noindex)                 STAGE 6: CONFIRM
│          next steps + links to the cost guide and How to Choose
│
├── ★ How We Rank  /how-we-rank/                            TRUST (supports every stage)
│      ➜ soft link at the end: "Ready? Get free quotes"
│
└── FOOTER (every page)
    ├── Get Free Quotes → /get-a-quote/   (repeated here)
    ├── ★ About               /about/
    ├── ★ Disclosures         /disclosures/
    ├── ★ Contact             /contact/          (questions only, not quotes; links to /get-a-quote/)
    ├── ★ Privacy Policy      /privacy-policy/
    ├── ★ Areas We Serve      /areas-we-serve/   ➜ "Get quotes in your area"
    └── ★ News and Updates    /news/
        └── ◇ News posts      /news/{post-name}/ ➜ link to the matching guide + quote button
```

Counts: 40 skeleton pages (★), 7 extra guides + 21 profiles (◇), plus news posts.

## Funnel rules for every page
1. The header "Get Free Quotes" button is always visible, including on phones (sticky header or a slim bottom bar).
2. Each page shows the quote button at least twice: once after the first useful answer (never before it) and once at the end.
3. Buttons prefill the form: `?service=` on problem, service and cost pages; `?contractor=` on profiles and company cards.
4. One amber button style for quotes only. Everything else is a text link, so the quote button always stands out.
5. No pop-ups, countdowns or "Call now!" bars. Trust is what converts here.
