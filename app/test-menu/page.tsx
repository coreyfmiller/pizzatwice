import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LocationBanner } from "@/components/location-banner"
import { TestMenuBuilder } from "@/components/test-menu-builder"
import type { Location } from "@/data/locations"

export const metadata = {
    title: "Test Menu | Pizza Twice Quispamsis",
    description: "Online ordering test page for Pizza Twice Quispamsis.",
}

const testLocation: Location = {
    slug: "quispamsis",
    name: "Pizza Twice Quispamsis",
    address: "123 Main Street, Quispamsis, NB, E2E 0A0",
    province: "NB",
    phone: "506-222-3333",
    website: "/order",
    hours: "Mon-Thu: 11:00am - 9:00pm | Fri-Sat: 11:00am - 10:00pm | Sun: 12:00pm - 8:00pm",
    status: "Accepting Online Order",
}

export default function TestMenuPage() {
    return (
        <>
            <Header />
            <main className="min-h-[100dvh] pt-28 pb-20 bg-background text-foreground">
                <div className="mx-auto max-w-6xl px-4 lg:px-8">
                    <LocationBanner location={testLocation} />
                    <div className="mb-12 text-center">
                        <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
                            Test Environment
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl border-b-4 border-primary inline-block pb-3">
                            Order Builder
                        </h1>
                    </div>
                    <TestMenuBuilder location={testLocation} />
                </div>
            </main>
            <Footer />
        </>
    )
}
