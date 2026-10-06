import { z } from "zod";

/**
 * Content schemas. Every file under /content is validated against these at
 * build time, so a typo in a JSON file fails the build instead of shipping.
 */

export const SERVICE_SLUGS = [
  "foundation-repair",
  "crawl-space-repair",
  "basement-waterproofing",
  "sump-pump-installation",
  "concrete-leveling",
] as const;
export const ServiceSlug = z.enum(SERVICE_SLUGS);
export type ServiceSlug = z.infer<typeof ServiceSlug>;

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "use YYYY-MM-DD");

/** Where a fact came from and when it was last checked. */
export const Source = z.object({
  url: z.url().optional(),
  label: z.string(),
  checkedAt: isoDate,
});

/** A single fact plus its provenance. Unverified facts are kept but never ranked on. */
const sourced = <T extends z.ZodType>(value: T) =>
  z.object({
    value,
    source: Source,
    verified: z.boolean().default(false),
  });

export const Person = z.object({
  name: z.string(),
  role: z.string(),
  source: Source,
});

export const Company = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  name: z.string(),
  legalName: z.string().optional(),
  website: z.url().optional(),
  phone: z.string().optional(),
  address: z
    .object({
      street: z.string().optional(),
      city: z.string(),
      county: z.string().optional(),
      state: z.literal("IN").or(z.string()),
      zip: z.string().optional(),
    })
    .optional(),
  /** Location slugs from /content/locations this company serves. */
  serviceAreas: z.array(z.string()).default([]),
  services: z.array(ServiceSlug),
  otherServices: z.array(z.string()).default([]),

  ownership: z.object({
    type: z.enum(["local", "regional", "national", "franchise", "dealer-network", "unknown"]),
    parent: z.string().optional(),
    owners: z.array(Person).default([]),
    notes: z.string().optional(),
  }),
  founded: sourced(z.number().int()).optional(),

  ratings: z.object({
    google: z
      .object({ rating: z.number(), count: z.number().int(), checkedAt: isoDate })
      .optional(),
    bbb: z
      .object({
        grade: z.string().nullable(),
        accredited: z.boolean(),
        url: z.url().optional(),
        checkedAt: isoDate,
      })
      .optional(),
  }),
  indianapolisLicense: z
    .object({ number: z.string().optional(), verified: z.boolean(), checkedAt: isoDate })
    .optional(),

  /** Editorial layer (our words, not the company's). */
  editorial: z.object({
    status: z.enum(["vetted", "borderline", "not-vetted", "unverified"]),
    statusReason: z.string(),
    summary: z.string(),
    bestFor: z.array(z.string()).default([]),
    watchOuts: z.array(z.string()).default([]),
    openQuestions: z.array(z.string()).default([]),
  }),

  /** FTC 16 CFR 255.5: true if this company pays us in any way. Never affects order. */
  paidRelationship: z.boolean().default(false),
  lastReviewed: isoDate,
});
export type Company = z.infer<typeof Company>;

export const Location = z.object({
  slug: z.string(),
  name: z.string(),
  county: z.string(),
  /** Whether Indianapolis's contractor license (Sec. 875-101) applies here. */
  indianapolisLicenseApplies: z.boolean(),
  nearby: z.array(z.string()).default([]),
  notes: z.string().optional(),
});
export type Location = z.infer<typeof Location>;
