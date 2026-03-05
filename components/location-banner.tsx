"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Phone, Clock, MapPin } from "lucide-react"
import type { Location } from "@/data/locations"

export function LocationBanner({ location }: { location: Location }) {
    const [dismissed, setDismissed] = useState(false)

    if (dismissed) return null

    return (
        <div className="relative mb-10 rounded-2xl border border-[#4a9e42]/40 bg-[#2D5A27]/15 p-5 pr-12">
            <button
                onClick={() => setDismissed(true)}
                aria-label="Dismiss location banner"
                className="absolute right-3 top-3 rounded-md p-1 text-foreground/60 hover:text-foreground hover:bg-muted transition-colors"
            >
                <X className="size-4" />
            </button>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                <div className="flex items-start gap-2.5">
                    <MapPin className="size-4 mt-0.5 shrink-0 text-[#6dba65]" />
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#6dba65] mb-0.5">
                            Browsing for
                        </p>
                        <Link
                            href={`/locations/${location.slug}`}
                            className="font-bold text-foreground hover:text-[#6dba65] transition-colors"
                        >
                            {location.name}
                        </Link>
                    </div>
                </div>

                <div className="flex items-start gap-2.5">
                    <Phone className="size-4 mt-0.5 shrink-0 text-[#6dba65]" />
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#6dba65] mb-0.5">
                            Call to Order
                        </p>
                        <a
                            href={`tel:${location.phone}`}
                            className="font-bold text-foreground hover:text-[#6dba65] transition-colors"
                        >
                            {location.phone}
                        </a>
                    </div>
                </div>

                <div className="flex items-start gap-2.5">
                    <Clock className="size-4 mt-0.5 shrink-0 text-[#6dba65]" />
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#6dba65] mb-0.5">
                            Hours
                        </p>
                        <p className="text-sm text-foreground leading-relaxed">
                            {location.hours.split(" | ").join(" · ")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
