import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { locations } from "@/data/locations"
import { Clock, MapPin, Phone, ExternalLink, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
    return locations.map((loc) => ({
        slug: loc.slug,
    }))
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string }
}): Promise<Metadata> {
    const location = locations.find((l) => l.slug === params.slug)
    if (!location) {
        return { title: "Location Not Found | Pizza Twice" }
    }

    const title = `${location.name} | Pizza Twice`
    const description = `Order pizza, donairs, subs and wings at ${location.name}. Located at ${location.address}. Call us at ${location.phone} or order online today!`
    const url = `https://pizzatwice.ca/locations/${location.slug}`

    return {
        title,
        description,
        keywords: [
            "pizza",
            "pizza delivery",
            "donairs",
            "subs",
            "wings",
            location.name,
            location.address,
            "Pizza Twice",
        ],
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: "Pizza Twice",
            type: "website",
            locale: "en_CA",
            images: [
                {
                    url: "https://pizzatwice.ca/images/pizzalogo.png",
                    width: 320,
                    height: 88,
                    alt: "Pizza Twice Logo",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    }
}

export default function LocationPage({ params }: { params: { slug: string } }) {
    const location = locations.find((l) => l.slug === params.slug)

    if (!location) {
        return notFound()
    }

    const mapsQuery = encodeURIComponent(location.address)
    const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&output=embed&hl=en&z=15`
    const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

    // JSON-LD structured data for local business SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FastFoodRestaurant",
        name: location.name,
        address: {
            "@type": "PostalAddress",
            streetAddress: location.address,
            addressCountry: "CA",
        },
        telephone: location.phone,
        url: location.website.startsWith("http")
            ? location.website
            : `https://pizzatwice.ca`,
        openingHours: location.hours,
        servesCuisine: ["Pizza", "Donairs", "Subs", "Wings"],
        parentOrganization: {
            "@type": "Organization",
            name: "Pizza Twice",
            url: "https://pizzatwice.ca",
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main className="min-h-[100dvh] pt-28 pb-20 bg-background text-foreground">
                <div className="mx-auto max-w-5xl px-4 lg:px-8">

                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground flex-wrap">
                            <li>
                                <Link href="/" className="hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <ChevronRight className="size-3.5" />
                            </li>
                            <li>
                                <Link href="/#locations" className="hover:text-primary transition-colors">
                                    Locations
                                </Link>
                            </li>
                            <li>
                                <ChevronRight className="size-3.5" />
                            </li>
                            <li className="text-foreground font-medium truncate max-w-[200px] sm:max-w-none">
                                {location.name}
                            </li>
                        </ol>
                    </nav>

                    {/* Hero Section */}
                    <div className="rounded-3xl bg-muted/30 border border-border overflow-hidden mb-12 relative isolate flex flex-col items-center justify-center p-12 text-center sm:p-24 shadow-sm">
                        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-orange-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
                        </div>

                        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl mb-4">
                            {location.name}
                        </h1>
                        <p className="text-xl text-primary font-medium tracking-wide mb-8">
                            More Than Just Great Pizza
                        </p>

                        <div className="flex gap-4 justify-center flex-wrap">
                            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                                <Link href={location.website.startsWith("http") ? location.website : "/menu"}>
                                    {location.status.includes("Accepting Online Order") ? "Order Online" : "View Menu"}
                                </Link>
                            </Button>
                            {location.website.startsWith("http") && (
                                <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-muted">
                                    <a href={location.website} target="_blank" rel="noopener noreferrer">
                                        Store Website <ExternalLink className="ml-2 size-4" />
                                    </a>
                                </Button>
                            )}
                            <Button asChild variant="secondary" size="lg">
                                <a href={`tel:${location.phone}`}>
                                    <Phone className="mr-2 size-4" /> Call to Order
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Details Content */}
                    <div className="grid gap-8 lg:grid-cols-2 mb-8">
                        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                                <MapPin className="text-primary size-6" /> Location Info
                            </h2>
                            <div className="space-y-4 text-muted-foreground text-lg">
                                <p className="font-medium text-foreground">{location.address}</p>
                                <p>
                                    <a
                                        href={`tel:${location.phone}`}
                                        className="hover:text-primary transition-colors hover:underline"
                                    >
                                        {location.phone}
                                    </a>
                                </p>
                                <div className="pt-4 border-t border-border mt-6">
                                    <p className="font-bold text-foreground mb-2">Order Status</p>
                                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                                        {location.status}
                                    </span>
                                </div>
                                <div className="pt-2">
                                    <a
                                        href={mapsLinkUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                                    >
                                        Open in Google Maps <ExternalLink className="size-3.5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                                <Clock className="text-primary size-6" /> Store Hours
                            </h2>
                            <div className="text-muted-foreground text-lg space-y-2">
                                {location.hours.split(" | ").map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="rounded-2xl overflow-hidden border border-border shadow-sm mb-12">
                        <iframe
                            title={`Map of ${location.name}`}
                            src={mapsEmbedUrl}
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className="mt-8 text-center">
                        <Button asChild variant="outline" size="lg" className="border-border text-foreground">
                            <Link href="/menu">Browse the Full Menu &rarr;</Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
