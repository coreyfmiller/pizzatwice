import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Pizza } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: "Order Online | Pizza Twice",
    description: "Online ordering is coming soon to Pizza Twice!",
}

export default function OrderPage() {
    return (
        <>
            <Header />
            <main className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-background pt-20">
                {/* Background decorative elements */}
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-orange-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
                </div>

                <div className="relative z-10 px-4 text-center">
                    <div className="mb-8 flex justify-center">
                        <div className="rounded-full bg-primary/10 p-4">
                            <Pizza className="size-12 text-primary animate-pulse" />
                        </div>
                    </div>

                    <h1 className="text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl">
                        Online Ordering <br />
                        <span className="text-primary">Coming Soon</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground">
                        We're working hard to bring you a fast and easy online ordering experience.
                        In the meantime, please call your local Pizza Twice to place an order!
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button asChild size="lg" variant="primary-brand">
                            <Link href="/#locations">Find a Location to Call</Link>
                        </Button>
                        <Button asChild variant="tertiary-brand" size="lg">
                            <Link href="/menu">Browse the Menu</Link>
                        </Button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
