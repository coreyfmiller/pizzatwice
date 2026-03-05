"use client"

import { useState } from "react"
import { Clock, MapPin, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const locations = [
  {
    name: "Fredericton - Downtown",
    address: "456 Queen St, Fredericton, NB",
    hours: "Sun-Thu: 11am-11pm | Fri-Sat: 11am-1am",
    phone: "(506) 555-0101",
  },
  {
    name: "Fredericton - Northside",
    address: "123 Main St, Fredericton, NB",
    hours: "Sun-Thu: 11am-11pm | Fri-Sat: 11am-1am",
    phone: "(506) 555-0102",
  },
  {
    name: "Moncton - Mountain Rd",
    address: "789 Mountain Rd, Moncton, NB",
    hours: "Sun-Thu: 11am-11pm | Fri-Sat: 11am-1am",
    phone: "(506) 555-0103",
  },
  {
    name: "Saint John - Uptown",
    address: "321 King St, Saint John, NB",
    hours: "Sun-Thu: 11am-11pm | Fri-Sat: 11am-1am",
    phone: "(506) 555-0104",
  },
  {
    name: "Miramichi",
    address: "555 Water St, Miramichi, NB",
    hours: "Sun-Thu: 11am-10pm | Fri-Sat: 11am-12am",
    phone: "(506) 555-0105",
  },
  {
    name: "Oromocto",
    address: "88 Restigouche Rd, Oromocto, NB",
    hours: "Sun-Thu: 11am-10pm | Fri-Sat: 11am-12am",
    phone: "(506) 555-0106",
  },
]

export function LocationsSection() {
  const [search, setSearch] = useState("")

  const filtered = locations.filter(
    (loc) =>
      loc.name.toLowerCase().includes(search.toLowerCase()) ||
      loc.address.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section id="locations" className="border-t border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Near You
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Find a Shop
          </h2>
        </div>

        <div className="mx-auto mb-10 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search by city or location name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-11 bg-card pl-10 text-foreground placeholder:text-muted-foreground border-border"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((location) => (
            <div
              key={location.name}
              className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30"
            >
              <h3 className="mb-3 text-lg font-bold text-card-foreground">
                {location.name}
              </h3>
              <div className="mb-2 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{location.address}</span>
              </div>
              <div className="mb-4 flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{location.hours}</span>
              </div>
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href={`tel:${location.phone}`}>Order Now</a>
              </Button>
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
