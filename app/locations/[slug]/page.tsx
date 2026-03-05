import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { locations } from "@/data/locations"
import { Clock, MapPin, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
    return locations.map((loc) => ({
        slug: loc.slug,
    }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    const location = locations.find((l) => l.slug === params.slug)
    if (!location) {
        return { title: 'Location Not Found' }
    }
    return {
        title: `${location.name} | Pizza Twice`,
        description: `Information for ${location.name}. Located at ${location.address}. Order your favorite pizza today!`,
    }
}

export default function LocationPage({ params }: { params: { slug: string } }) {
    const location = locations.find((l) => l.slug === params.slug)

    if (!location) {
        return notFound()
    }

    return (
        <>
            <Header />
            <main className="min-h-[100dvh] pt-28 pb-20 bg-background text-foreground">
                <div className="mx-auto max-w-5xl px-4 lg:px-8">
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
                                <Link href={location.website.startsWith('http') ? location.website : '/menu'}>
                                    {location.status.includes("Accepting Online Order") ? "Order Online" : "View Menu"}
                                </Link>
                            </Button>
                            {location.website.startsWith('http') && (
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
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-foreground">
                                <MapPin className="text-primary size-6" /> Location Info
                            </h2>
                            <div className="space-y-4 text-muted-foreground text-lg">
                                <p className="font-medium text-foreground">{location.address}</p>
                                <p><a href={`tel:${location.phone}`} className="hover:text-primary transition-colors hover:underline">{location.phone}</a></p>
                                <div className="pt-4 border-t border-border mt-6">
                                    <p className="font-bold text-foreground mb-2">Order Status</p>
                                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                                        {location.status}
                                    </span>
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

                    <div className="mt-16 text-center">
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
