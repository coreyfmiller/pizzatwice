import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-pizza2.png"
        alt="Delicious pepperoni pizza"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center lg:px-8">
        <Image
          src="/images/pizzalogo.png"
          alt="Pizza Twice Logo"
          width={400}
          height={110}
          className="mx-auto mb-8 h-[100px] w-auto lg:h-[120px]"
          priority
        />
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          {"Est. 1989 — Atlantic Canada"}
        </p>
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-7xl">
          Delicious Pizzas{" "}
          <span className="text-primary">&amp; Great Prices</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
          Enjoy mouth-watering pizzas, oven-baked subs and much more at Pizza Twice.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            variant="primary-brand"
            className="h-12 px-8 text-base shadow-lg shadow-[#E63946]/20"
          >
            <Link href="#franchise-edge">Own a Franchise</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="tertiary-brand"
            className="h-12 px-8 text-base"
          >
            <Link href="#locations">Find a Location</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground">Scroll</span>
          <div className="h-8 w-px animate-pulse bg-primary/50" />
        </div>
      </div>
    </section>
  )
}
