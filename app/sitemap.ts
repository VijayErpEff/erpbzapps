import type { MetadataRoute } from "next";

const BASE_URL = "https://erpbizapps.com";

const routes: { path: string; lastModified: string; changeFrequency: "weekly" | "monthly" | "yearly"; priority: number }[] = [
  { path: "/", lastModified: "2026-03-14", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services", lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/business-central", lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/salesforce", lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/custom-development", lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/integration", lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/support", lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries", lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.7 },
  { path: "/why-choose-us", lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", lastModified: "2026-03-10", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog/business-central-vs-quickbooks", lastModified: "2026-03-10", changeFrequency: "yearly", priority: 0.6 },
  { path: "/blog/signs-outgrown-spreadsheets", lastModified: "2026-03-05", changeFrequency: "yearly", priority: 0.6 },
  { path: "/blog/roi-business-central", lastModified: "2026-02-28", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact", lastModified: "2026-03-01", changeFrequency: "monthly", priority: 0.9 },
  { path: "/privacy-policy", lastModified: "2026-03-01", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-of-service", lastModified: "2026-03-01", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(route.lastModified),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
