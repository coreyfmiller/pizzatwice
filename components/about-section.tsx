import Image from "next/image"

const stats = [
  { value: "1989", label: "Founded" },
  { value: '16"', label: "Standard Size" },
  { value: "18+", label: "Current Stores" },
  { value: "35+", label: "Years of Success" },
]

export function AboutSection() {
  return (
    <section id="about" className="border-t border-border bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Story
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            About Pizza Twice
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/images/about-kitchen.png"
              alt="Pizza Twice kitchen with chef preparing fresh pizza"
              width={640}
              height={420}
              className="h-auto w-full rounded-lg object-cover shadow-2xl"
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/10" />
          </div>

          <div>
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              {"Born in Fredericton. Loved Across Atlantic Canada."}
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              {"In 1989, Pizza Twice opened its doors in Fredericton, New Brunswick, with a simple mission: deliver unbeatable pizza at an unbeatable value. Our signature 16-inch pizza quickly became the talk of the town, and the word spread fast."}
            </p>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              {"Today, with over 18 locations across Atlantic Canada, we remain committed to that same promise. Every pizza is made fresh with quality ingredients and a recipe perfected over three decades. We are more than just great pizza — we are a community."}
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border bg-card p-4 text-center"
                >
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
