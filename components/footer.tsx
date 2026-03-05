import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Franchise Inquiries", href: "#franchise" },
  { label: "Contact Us", href: "#contact" },
]

const socialLinks = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Twitter", href: "#", icon: Twitter },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-[oklch(0.12_0.005_250)]">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <Image
              src="/images/pizzalogo.png"
              alt="Pizza Twice - More Than Just Great Pizza"
              width={160}
              height={44}
              className="h-10 w-auto"
            />
            <p className="max-w-xs text-center text-sm text-muted-foreground lg:text-left">
              {"Atlantic Canada's favorite pizza since 1989. More than just great pizza."}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label={social.label}
              >
                <social.icon className="size-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {"© 2026 Pizza Twice. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
