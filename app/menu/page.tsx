import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata = {
    title: "Menu | Pizza Twice",
    description: "View the delicious menu options available at Pizza Twice locations.",
}

export default function MenuPage() {
    return (
        <>
            <Header />
            <main className="min-h-[100dvh] pt-24 pb-20 bg-background text-foreground">
                <div className="mx-auto max-w-5xl px-4 lg:px-8">
                    <div className="mb-12 text-center md:mb-16">
                        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                            Our Menu
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
                            Discover mouth-watering pizzas, oven-baked subs, and more at your local Pizza Twice!
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-12 text-center shadow-sm">
                        <div className="mb-6 rounded-full bg-primary/10 p-6 text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="48"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M15 11h.01" />
                                <path d="M11 15h.01" />
                                <path d="M16 16h.01" />
                                <path d="m2 16 20 6-6-20A20 20 0 0 0 2 16" />
                                <path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4" />
                            </svg>
                        </div>
                        <h2 className="mb-2 text-2xl font-bold text-card-foreground">Full Menu Coming Soon</h2>
                        <p className="mb-8 max-w-md text-muted-foreground">
                            We&apos;re currently updating our online menu. In the meantime, please contact your nearest location to order!
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
