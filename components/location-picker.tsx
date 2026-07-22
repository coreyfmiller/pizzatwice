import Link from "next/link"
import { MapPin } from "lucide-react"
import { locations } from "@/data/locations"

export function LocationPicker() {
  return (
    <div className="mb-12 rounded-2xl border border-primary/30 bg-primary/5 p-6 md:p-8">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 text-primary mb-2">
          <MapPin className="size-5" />
          <span className="text-sm font-semibold uppercase tracking-wider">Select Your Location</span>
        </div>
        <h2 className="text-2xl font-bold text-foreground">
          Choose your nearest Pizza Twice for the best prices
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Pricing may vary by location. Select yours to see accurate menu pricing.
        </p>
      </div>

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {locations.map((loc) => (
          <Link
            key={loc.slug}
            href={`/menu?location=${loc.slug}`}
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-primary/50 hover:bg-primary/5"
          >
            <MapPin className="size-4 text-primary shrink-0" />
            <div className="min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{loc.name.replace("Pizza Twice ", "")}</p>
              <p className="text-[0.65rem] text-muted-foreground truncate">{loc.address.split(",")[0]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
