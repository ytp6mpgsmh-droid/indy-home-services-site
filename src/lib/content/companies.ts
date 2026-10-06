import "server-only";
import fs from "node:fs";
import path from "node:path";
import { Company, type ServiceSlug } from "./schema";

const DIR = path.join(process.cwd(), "content", "companies");

let cache: Company[] | null = null;

export function getAllCompanies(): Company[] {
  if (cache) return cache;
  cache = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map((file) => {
      const raw = JSON.parse(fs.readFileSync(path.join(DIR, file), "utf8"));
      const parsed = Company.safeParse(raw);
      if (!parsed.success) {
        throw new Error(`content/companies/${file}: ${parsed.error.message}`);
      }
      if (`${parsed.data.slug}.json` !== file) {
        throw new Error(`content/companies/${file}: slug must match file name`);
      }
      return parsed.data;
    });
  return cache;
}

export function getCompany(slug: string): Company | undefined {
  return getAllCompanies().find((c) => c.slug === slug);
}

/**
 * Companies offering a service, ordered only by public, checkable data
 * (vetted status, then Google review count). Payment never changes the order.
 */
export function getCompaniesForService(service: ServiceSlug): Company[] {
  const rank = { vetted: 0, borderline: 1, unverified: 2, "not-vetted": 3 } as const;
  return getAllCompanies()
    .filter((c) => c.services.includes(service))
    .sort(
      (a, b) =>
        rank[a.editorial.status] - rank[b.editorial.status] ||
        (b.ratings.google?.count ?? 0) - (a.ratings.google?.count ?? 0),
    );
}
