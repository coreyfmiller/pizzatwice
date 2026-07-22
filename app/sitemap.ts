import { locations } from "@/data/locations"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.pizzatwice.com"
  const now = new Date()

  const staticPages = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/menu`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
  ]

  const locationPages = locations.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [...staticPages, ...locationPages]
}
