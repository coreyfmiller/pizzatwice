import { CheckCircle2, DollarSign, MapPin } from "lucide-react"

const features = [
  {
    icon: CheckCircle2,
    title: "Proven Model",
    description:
      "Over 35 years of refined operations, training systems, and brand recognition. Our franchise model is battle-tested and built to succeed.",
  },
  {
    icon: DollarSign,
    title: "Unbeatable Value",
    description:
      "Our 16-inch standard pizza delivers incredible value to customers while maintaining strong margins for franchise owners.",
  },
  {
    icon: MapPin,
    title: "Local Roots",
    description:
      "Born in Fredericton, NB, we understand Atlantic Canadian communities. Each location is a neighborhood staple.",
  },
]

export function FranchiseEdgeSection() {
  return (
    <section className="border-t border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Why Pizza Twice
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            The Franchise Edge
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg border border-primary/20 bg-card p-8 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-10px] hover:shadow-primary/20"
            >
              <div className="mb-5 flex size-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                <feature.icon className="size-6" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
