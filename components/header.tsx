"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Locations", href: "/#locations" },
  { label: "About Us", href: "/#about" },
  { label: "Contact Us", href: "/#contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility Bar */}
      <div className="bg-[#E63946] py-2 text-center text-[10px] font-black tracking-[0.2em] text-white">
        <Link href="/#locations" className="flex items-center justify-center gap-2 transition-opacity hover:opacity-90">
          <MapPin className="size-3" />
          FIND YOUR LOCAL STORE TO CALL & ORDER
        </Link>
      </div>

      {/* Main Header */}
      <div className="border-b border-border/50 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/pizzalogo.png"
              alt="Pizza Twice - More Than Just Great Pizza"
              width={180}
              height={50}
              className="h-10 w-auto lg:h-12"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="primary-brand" className="ml-3">
              <Link href="/#franchise-edge">Own a Franchise</Link>
            </Button>
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-background border-border p-0">
              <SheetHeader className="border-b border-border p-6 text-left">
                <SheetTitle className="text-xl font-black text-foreground">Navigation</SheetTitle>
              </SheetHeader>

              <div className="p-4">
                {/* Mobile Specific Store CTA */}
                <Link
                  href="/#locations"
                  onClick={() => setOpen(false)}
                  className="mb-6 flex items-center justify-between rounded-xl bg-primary/10 p-4 font-bold text-primary ring-1 ring-primary/20"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="size-5" />
                    <span>Find Your Store to Order</span>
                  </div>
                  <ChevronRight className="size-4" />
                </Link>

                <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-4 py-3 text-lg font-bold text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-4 border-t border-border pt-4">
                    <Button
                      asChild
                      variant="primary-brand"
                      className="w-full h-12 text-base font-black"
                    >
                      <Link href="/#franchise-edge" onClick={() => setOpen(false)}>
                        Own a Franchise
                      </Link>
                    </Button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
