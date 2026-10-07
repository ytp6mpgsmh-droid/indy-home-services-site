# Lead flow

## Answer given to Wix AI

```
Yes, the site collects leads, but there are no payments or purchases on the site. Homeowners fill out a free "Get matched with a contractor" form (name, phone, email, ZIP code, service needed, short description of the problem, timeline, and optionally the contractor they prefer). On submit: (1) the homeowner gets an automatic confirmation email, (2) I get an email alert with the details, (3) the submission is saved as a new row in a Google Sheet, and (4) the lead is emailed automatically to the contractor the homeowner selected. Contractors are billed separately, outside the website, per qualified lead. Phone leads will be tracked later with CallRail call-tracking numbers on contractor profile pages, added as custom code.
```

## Stages

| Stage | When | What happens |
|---|---|---|
| 1. Launch | Day 1 | No form yet. GA4 click tracking on contractor phone/website links; Search Console. |
| 2. Form with automatic routing | First steady traffic | Form → lead emailed straight to the selected contractor (owner BCC'd) + confirmation to homeowner + Google Sheet row. "Match me" requests go to the owner to route by hand. Owner reviews the Sheet daily and marks spam/duplicates as not billable. |
| 3. Free trials | Contractors opted in (3–5 free leads each) | Same flow; only opted-in contractors appear in the dropdown. |
| 4. CallRail | First contractor agrees to pay per lead | One tracking number per paying contractor on their profile page. Calls forward to the contractor and are logged. A call counts as qualified only if it is a first-time caller, lasts 60+ seconds, is in the service area and is for a covered service. |

## Form fields

Required: first and last name, phone, email, ZIP code, service (dropdown of the 6), problem description.
Optional: preferred contractor ("match me" by default), timeline (ASAP / 1–3 months / just researching), photo upload.
Required checkbox: consent to be contacted by phone, text and email by the homeowner's chosen or matched contractor. Have an attorney approve the exact wording (TCPA); this is already on the attorney list in the plan PDF.

## Google Sheet columns

Date/time · Name · Phone · Email · ZIP · City · Service · Problem · Timeline · Preferred contractor · Sent to · Date sent · Source page · Status (new / sent / contacted / quoted / won / lost) · Billable (Y/N) · Credit reason · Invoice month

## Billing rules (shown to contractors)

A lead is billable when it is a real homeowner, in the service area, for a covered service, and not a duplicate within 30 days. Spam, duplicates, out-of-area requests and wrong services are credited back.

## Routing automation (Zapier or Make)

Wix Automations handle the homeowner confirmation and owner alert. Sending to a *different* contractor per submission uses Zapier (multi-step Zaps need a paid plan) or Make.com (free tier allows multi-step scenarios):

1. **Trigger:** Wix — new form submission.
2. **Google Sheets — Lookup row** in the `Contractors` tab where `Name` = the selected contractor.
3. **Gmail — Send email** to the looked-up `Lead email`; Reply-To = homeowner's email; BCC = owner.
4. **Google Sheets — Create row** in the `Leads` tab, filling `Sent to` and `Date sent`.

`Contractors` tab columns: Name (exactly as in the form dropdown) · Lead email · Active (Y/N) · Free leads left · Price per lead · Notes.
Add a row named **"Match me"** whose Lead email is the owner's, so unmatched requests route to the owner with no extra branching.
Contractor lead emails live only in this private Sheet, never in the public Wix CMS collection.

Dropdown rule: list only contractors who have agreed to receive leads (Active = Y), plus "Match me with a vetted contractor".

## Email to contractor

Subject: `New homeowner request: {Service} in {City} {ZIP} (IndyFoundationGuide.com)`

```
Hi {Contractor name},

A homeowner chose you on IndyFoundationGuide.com and asked to be contacted.

Name: {First} {Last}
Phone: {Phone}
Email: {Email}
Location: {City}, {ZIP}
Service: {Service}
Timeline: {Timeline}
Problem: {Description}
Photos: {Photo links}

They agreed to be contacted by you by phone, text or email. Please reach out within 1 business day. Reply to this email to contact the homeowner directly.

If this request is spam, a duplicate, outside your area or not a service you offer, reply "CREDIT" within 7 days and it won't be billed.

IndyFoundationGuide.com
```

## Confirmation to homeowner

Subject: `Your request was sent to {Contractor name}`

```
Hi {First},

Thanks for using IndyFoundationGuide.com. Your request for {Service} was sent to {Contractor name}. They usually reach out within 1 business day by phone or email.

While you wait: {link to the service's cost guide} and {link to How to Choose a Contractor}.

Haven't heard back in 2 business days? Reply to this email and we'll help.

IndyFoundationGuide.com
We're an independent guide, not a contractor. Contractors never pay to change their ranking.
```
