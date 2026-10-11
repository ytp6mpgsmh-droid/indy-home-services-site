# Sales funnel

Every page moves the visitor one step closer to `/get-a-quote/`. The guides build trust; the quote page converts it.

```
1. PROBLEM        /problems/*                   "What's wrong with my house?"
       ↓
2. LEARN          service guides, /costs, */cost "What fixes it, and what will it cost?"
       ↓
3. COMPARE        */indianapolis, /contractors,  "Who should I call?"
                  /contractors/how-to-choose
       ↓
4. DECIDE         /contractors/{company}         "This one looks right."
       ↓
5. CONVERT        /get-a-quote/                  Form submitted
       ↓
6. CONFIRM        /thank-you/                    Next steps + related guides
```

## Calls to action by page type

| Page type | Main CTA | Where |
|---|---|---|
| Every page | "Get Free Quotes" button | Header, always visible |
| Problem page | "Get a free quote for {service}" → `/get-a-quote/?service={service}` | After the "Is it serious?" section, and at the end |
| Service guide | Same, with the service preselected | After the cost summary, and at the end |
| Cost guide | "Get your actual price: free quotes from vetted contractors" | Right after the price table, and at the end |
| Best Companies / directory | "Request a quote" on each company card | On each card, plus one at the end of the list |
| Contractor profile | "Request a quote from {Company}" → `/get-a-quote/?contractor={slug}` | Near the top and at the end |
| Homepage | "Get matched with a contractor" section | Last section, plus the header button |

Keep it to one main CTA style per page (amber button), repeated, never pop-ups or countdowns. A plain text link ("Not ready? See what it costs →") is the soft option on decision pages.

## /get-a-quote/ page

**H1:** Get Free Quotes from Vetted Indianapolis Contractors
**SEO title:** Free Foundation & Basement Repair Quotes | Indianapolis

Layout, top to bottom (mobile first):
1. One line under the H1: "Tell us what's going on. We'll send your request to the contractor you choose, or help you pick one. Free, no obligation."
2. **The form** (above the fold on desktop, right after the intro on phones):
   - Service needed (dropdown of the 6, preselected from `?service=`)
   - What are you seeing? (short text)
   - ZIP code
   - Preferred contractor (dropdown of opted-in contractors + "Help me choose", preselected from `?contractor=`)
   - Timeline (ASAP / 1–3 months / Just researching)
   - First name, last name, phone, email
   - Photos (optional)
   - Consent checkbox (attorney-approved wording, must name sharing with the chosen contractor)
   - Button: "Send My Request"
3. "What happens next" (3 steps: we send your request → the contractor calls within 1–2 business days → you get a quote, with no obligation).
4. Trust strip: "Independent guide, not a contractor" · "Contractors can't pay for ranking" · link to How We Rank.
5. "How we make money" note with a link to /disclosures.
6. Short FAQ: Is this free? Will I get spammed with calls? (No, only the contractor you choose.) Can I get more than one quote?

Keep fields to what contractors need. Every extra field lowers completion. Name, phone, ZIP and service are the core; the rest can be optional if completion is low.

## /thank-you/

- H1: "Thanks, your request was sent"
- What happens next, and when to expect the call
- Links to the matching cost guide and to "How to Choose a Contractor" (questions to ask on the call)
- Set to **noindex** in the SEO plugin, and mark it as the conversion page in Google Analytics

## WordPress form plugin

Pick one that supports: prefilling fields from the URL (`?service=`, `?contractor=`), redirecting to `/thank-you/`, email notifications, file upload, and sending entries to Google Sheets or a webhook (for Make/Zapier). Gravity Forms and WPForms (paid tiers) both qualify; confirm the URL prefill feature on the plan you buy.
