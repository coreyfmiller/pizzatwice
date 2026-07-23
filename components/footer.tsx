import Image from "next/image"

const footerLinks = [
  { label: "Menu", href: "/menu" },
  { label: "Locations", href: "/#locations" },
  { label: "Franchise Opportunities", href: "/#franchise" },
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
              width={240}
              height={66}
              className="h-16 w-auto lg:h-20"
            />
            <p className="max-w-xs text-center text-sm text-muted-foreground lg:text-left">
              {"Atlantic Canada's favorite pizza since 1989. More than just great pizza."}
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-sm text-muted-foreground">
            <a href="mailto:pizzatwice@hotmail.com" className="hover:text-primary transition-colors">
              pizzatwice@hotmail.com
            </a>
          </p>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-2">
            <span>© 2026 Pizza Twice. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <a href="https://fundylogic.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Built by Fundy Logic
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
