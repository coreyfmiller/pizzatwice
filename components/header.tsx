"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
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
  { label: "About Us", href: "/#about" },
  { label: "Locations", href: "/#locations" },
  { label: "Contact Us", href: "/#contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md">
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
          <Button asChild className="ml-3 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/#franchise">Own a Franchise</Link>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-background border-border">
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-2 pt-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-4 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/#franchise" onClick={() => setOpen(false)}>
                  Own a Franchise
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
