# Lead flow

## Answer given to Wix AI

```
Yes, the site collects leads, but there are no payments or purchases on the site. Homeowners fill out a free "Get matched with a contractor" form (name, phone, email, ZIP code, service needed, short description of the problem, timeline, and optionally the contractor they prefer). On submit: (1) the homeowner gets an automatic confirmation email, (2) I get an email alert with the details, and (3) the submission is saved as a new row in a Google Sheet. Later, each lead will be emailed automatically to the chosen contractor. Contractors are billed separately, outside the website, per qualified lead. Phone leads will be tracked later with CallRail call-tracking numbers on contractor profile pages, added as custom code.
```

## Stages

| Stage | When | What happens |
|---|---|---|
| 1. Launch | Day 1 | No form yet. GA4 click tracking on contractor phone/website links; Search Console. |
| 2. Form, manual routing | First steady traffic | Form → confirmation email to homeowner + alert email to owner + Google Sheet row. Owner reviews each lead (spam, duplicate, out of area) before forwarding to a contractor. |
| 3. Automatic routing | Contractors on free trial (3–5 leads each) | Automation emails the lead straight to the chosen contractor; Sheet tracks contractor, status, billable yes/no. |
| 4. CallRail | First contractor agrees to pay per lead | One tracking number per paying contractor on their profile page. Calls forward to the contractor and are logged. A call counts as qualified only if it is a first-time caller, lasts 60+ seconds, is in the service area and is for a covered service. |

## Form fields

Required: first and last name, phone, email, ZIP code, service (dropdown of the 6), problem description.
Optional: preferred contractor ("match me" by default), timeline (ASAP / 1–3 months / just researching), photo upload.
Required checkbox: consent to be contacted by phone, text and email by the homeowner's chosen or matched contractor. Have an attorney approve the exact wording (TCPA); this is already on the attorney list in the plan PDF.

## Google Sheet columns

Date/time · Name · Phone · Email · ZIP · City · Service · Problem · Timeline · Preferred contractor · Sent to · Date sent · Source page · Status (new / sent / contacted / quoted / won / lost) · Billable (Y/N) · Credit reason · Invoice month

## Billing rules (shown to contractors)

A lead is billable when it is a real homeowner, in the service area, for a covered service, and not a duplicate within 30 days. Spam, duplicates, out-of-area requests and wrong services are credited back.
