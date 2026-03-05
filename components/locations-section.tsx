"use client"

import { useState } from "react"
import Link from "next/link"
import { Clock, MapPin, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const locations = [
  {
    name: "Pizza Twice Oromocto",
    address: "291 Restigouche Road, Oromocto, NB, E2V 2H5",
    province: "NB",
    phone: "506-446-9111",
    website: "https://www.pizzatwiceoromocto.ca",
    hours: "Sun-Thu: 11:00am - 10:00pm | Fri-Sat: 11:00am - 11:00pm",
    status: "Accepting Online Order"
  },
  {
    name: "Pizza Twice Edmundston",
    address: "56 CH, Edmundston, NB, E3V 1V3",
    province: "NB",
    phone: "506-739-1976",
    website: "https://www.pizzatwice-edmundston.com",
    hours: "Tue, Wed, Sun: 11:00am - 8:00pm | Thu-Sat: 11:00am - 9:00pm | Mon: Closed",
    status: "Accepting Online Order"
  },
  {
    name: "Pizza Twice Nackawic",
    address: "135 Otis Drive, Nackawic, NB, E6G 1G9",
    province: "NB",
    phone: "506-575-0101",
    website: "/menu",
    hours: "Mon-Fri: 11:30am - 7:00pm | Sat: 1:00pm - 7:00pm | Sun: CLOSED",
    status: "Online Order Coming Soon"
  },
  {
    name: "Pizza Twice Hartland",
    address: "380 Main Street, Unit 1, Hartland, NB, E7P 2N6",
    province: "NB",
    phone: "506-375-4984",
    website: "/menu",
    hours: "Mon-Sat: 7:00am - 10:00pm | Sun: 8:00am - 9:00pm",
    status: "Order by Phone"
  },
  {
    name: "Pizza Twice at Canning Valufood",
    address: "9380 Main Street, Canning, NS, B0P 1H0",
    province: "NS",
    phone: "902-582-3555",
    website: "/menu",
    hours: "Mon-Sat: 8:00am - 9:00pm | Sun: 10:00am - 8:00pm",
    status: "Order by Phone"
  },
  {
    name: "Pizza Twice Florenceville-Bristol",
    address: "8850 Main Street, Florenceville-Bristol, NB, E7L 2A3",
    province: "NB",
    phone: "506-392-1159",
    website: "/menu",
    hours: "Mon-Tue: 11am-7pm | Wed-Thu: 11am-8pm | Fri: 11am-9pm | Sat: 12pm-8pm | Sun: 12pm-7pm",
    status: "Order by Phone"
  },
  {
    name: "Pizza Twice Marysville",
    address: "247 Canada Street, Fredericton, NB, E3A 4A1",
    province: "NB",
    phone: "506-453-0099",
    website: "/menu",
    hours: "Mon: 11am-8pm | Tue-Thu: 11am-9pm | Fri: 11am-10pm | Sat: 11am-9pm | Sun: 3pm-8pm",
    status: "Order by Phone"
  },
  {
    name: "Pizza Twice at Grand Barachois Valufoods",
    address: "1343 Route 133, Grand Barachois, NB, E4P 8C7",
    province: "NB",
    phone: "506-532-6623",
    website: "/menu",
    hours: "Mon-Fri: 6:00am - 9:00pm | Sat-Sun: 7:00am - 9:00pm",
    status: "Order by Phone"
  },
  {
    name: "Pizza Twice at Church’s Valufood and Esso",
    address: "3966 Gabarus Hwy, Marion Bridge, NS, B1K 1A7",
    province: "NS",
    phone: "902-727-2685",
    website: "/menu",
    hours: "Mon-Sat: 9:00am - 7:00pm | Sun: 12:00pm - 6:00pm",
    status: "Order by Phone"
  },
  {
    name: "Pizza Twice at McCloskey’s General Store",
    address: "6156 Route 8, Boiestown, NB, E6A 1M3",
    province: "NB",
    phone: "506-369-2282",
    website: "/menu",
    hours: "Mon-Thu: 9:00am - 7:00pm | Fri-Sat: 9:00am - 9:00pm | Sun: 11:00am - 7:00pm",
    status: "Order by Phone"
  },
  {
    name: "Pizza Twice Cornwallis",
    address: "Hwy 1, Cornwallis, NS",
    province: "NS",
    phone: "902-638-3518",
    website: "/menu",
    hours: "Mon-Sat: 11:00am - 7:00pm | Sun: 12:00pm - 6:00pm",
    status: "Order by Phone"
  },
  {
    name: "Pizza Twice at Upper Musquodoboit Mini Mart",
    address: "22 Hwy 336, Upper Musquodoboit NS, B0N 2M0",
    province: "NS",
    phone: "902-568-2999",
    website: "/menu",
    hours: "Mon-Sat: 9:00am - 8:00pm | Sun: 12:00pm - 5:00pm",
    status: "Order by Phone"
  },
  {
    name: "Pizza Twice Bridgetown",
    address: "49 Queen St, Bridgetown NS, B0S 1C0",
    province: "NS",
    phone: "902-665-4788",
    website: "/menu",
    hours: "Mon-Sat: 10:00am - 8:30pm | Sun: 10:00am - 4:30pm",
    status: "Order by Phone"
  },
  {
    name: "Pizza Twice at Parkview Superette",
    address: "3711 Main St Belledune, NB, E8G 2K1",
    province: "NB",
    phone: "506-237-2299",
    website: "/menu",
    hours: "Mon-Sun: 8:00am - 8:00pm",
    status: "Order by Phone"
  },
  {
    name: "Pizza Twice at Collin’s Convenience",
    address: "14 Eldon Street, Fortune, NL",
    province: "NL",
    phone: "709-832-1163",
    website: "/menu",
    hours: "Mon-Sun: 8:00am - 8:00pm",
    status: "Order by Phone"
  },
  {
    name: "Pizza Twice Marystown",
    address: "192-200 Ville Marie Dr, Marystown, NL, A0E 2M0",
    province: "NL",
    phone: "709-357-3008",
    website: "/menu",
    hours: "Mon-Sun: 8:00am - 8:00pm",
    status: "Order by Phone"
  },
  {
    name: "Pizza Twice at Penniac Ultramar",
    address: "22 Route 628 Penniac NB E3A 8X3",
    province: "NB",
    phone: "506-474-1587",
    website: "/menu",
    hours: "Sun-Wed: 11:00 am - 8:00 pm | Thu-Sat: 11:00 am - 9:00 pm",
    status: "Order by Phone"
  }
]

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
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <Link href={location.website}>
                          {location.status.includes("Accepting Online Order") ? "Order Online" : "View Menu"}
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-border text-foreground hover:bg-muted"
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
