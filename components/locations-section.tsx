"use client"

import { useState } from "react"
import Link from "next/link"
import { Clock, MapPin, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { locations } from "@/data/locations"

const provinceNames: Record<string, string> = {
  NB: "New Brunswick",
  NS: "Nova Scotia",
  NL: "Newfoundland"
}

export function LocationsSection() {
  const [search, setSearch] = useState("")

  const filtered = locations.filter(
    (loc) =>
      loc.name.toLowerCase().includes(search.toLowerCase()) ||
      loc.address.toLowerCase().includes(search.toLowerCase()) ||
      provinceNames[loc.province as keyof typeof provinceNames]?.toLowerCase().includes(search.toLowerCase())
  )

  // Group by province
  const grouped = filtered.reduce((acc, loc) => {
    const p = loc.province
    if (!acc[p]) {
      acc[p] = []
    }
    acc[p].push(loc)
    return acc
  }, {} as Record<string, typeof locations>)

  // Sort provinces NB first, then NS, then NL
  const sortedProvinces = Object.keys(grouped).sort((a, b) => {
    const order = { NB: 1, NS: 2, NL: 3 }
    return (order[a as keyof typeof order] || 4) - (order[b as keyof typeof order] || 4)
  })

  return (
    <section id="locations" className="border-t border-border bg-muted/20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Near You
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl gap-2">
            Find a Shop
          </h2>
        </div>

        <div className="mx-auto mb-10 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by city, name, or province..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-11 bg-card pl-10 text-foreground placeholder:text-muted-foreground border-border"
            />
          </div>
        </div>

        <div className="space-y-16">
          {sortedProvinces.map((province) => (
            <div key={province}>
              <h3 className="mb-8 text-2xl font-bold pb-2 border-b border-border text-foreground">
                {provinceNames[province as keyof typeof provinceNames]}
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {grouped[province].map((location) => (
                  <div
                    key={location.name}
                    className="flex flex-col rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 shadow-sm hover:shadow h-full"
                  >
                    <div>
                      <h4 className="mb-3 text-lg font-bold text-card-foreground">
                        {location.name}
                      </h4>
                      <div className="mb-2 flex items-start gap-2 text-sm text-muted-foreground">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{location.address}</span>
                      </div>
                      <div className="mb-4 flex items-start gap-2 text-sm text-muted-foreground">
                        <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{location.hours}</span>
                      </div>
                      <div className="mb-4 text-sm font-medium text-primary">
                        {location.status}
                      </div>
                    </div>
                    <div className="mt-auto flex flex-col gap-2 pt-5">
                      <Button
                        asChild
                        variant="tertiary-brand"
                        className="w-full"
                      >
                        <Link href={`/locations/${location.slug}`}>
                          View Location Details
                        </Link>
                      </Button>
                      {location.status === "Accepting Online Order" && (
                        <Button asChild variant="primary-brand" className="w-full">
                          <Link href={location.website} target={location.website.startsWith('http') ? "_blank" : undefined} rel={location.website.startsWith('http') ? "noopener noreferrer" : undefined}>
                            Order Online
                          </Link>
                        </Button>
                      )}
                      <Button
                        asChild
                        variant="menu-brand"
                        className="w-full border-none"
                      >
                        <Link href={`/menu?location=${location.slug}`}>
                          View Menu
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="tertiary-brand"
                        className="w-full"
                      >
                        <a href={`tel:${location.phone}`}>Call {location.phone}</a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-muted-foreground">
            {"No locations found matching your search."}
          </p>
        )}
      </div>
    </section>
  )
}
