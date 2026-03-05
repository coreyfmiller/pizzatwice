import Image from "next/image"
import { CheckCircle2, DollarSign, MapPin, TrendingUp, Trophy, Users } from "lucide-react"

export function FranchiseEdgeSection() {
  return (
    <section className="border-t border-border bg-background py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
            The Competitive Advantage
          </p>
          <h2 className="text-balance text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-6xl">
            The Franchise Edge
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            We don't just sell pizza. We provide a refined, battle-tested system designed for market dominance and long-term legacy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2 h-full md:h-[700px]">
          {/* Main Powerhouse Card - Pizza */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card md:col-span-2 md:row-span-2 shadow-2xl transition-all duration-500 hover:border-primary/50">
            <Image
              src="/images/pizza.png"
              alt="Close up of a premium Pizza Twice pizza"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 lg:p-12 flex flex-col justify-end">
              <div className="mb-4 inline-flex size-14 items-center justify-center rounded-2xl bg-primary/20 backdrop-blur-md text-primary ring-1 ring-primary/40">
                <Trophy className="size-7" />
              </div>
              <h3 className="mb-4 text-3xl font-black text-white md:text-4xl">
                The 16-Inch Powerhouse
              </h3>
              <p className="max-w-md text-lg leading-relaxed text-gray-300">
                Our standard 16-inch pizza delivers unbeatable customer value and consistent quality across all locations.
              </p>
              <div className="mt-8 flex gap-4">
                <span className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm ring-1 ring-white/20">
                  Value Dominance
                </span>
                <span className="rounded-full bg-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur-sm ring-1 ring-primary/40">
                  Proven Format
                </span>
              </div>
            </div>
          </div>

          {/* Model Card - Tomato */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl transition-all duration-500 hover:border-primary/50">
            <Image
              src="/images/tomato.png"
              alt="Fresh tomatoes representing quality ingredients"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 blur-[1px] group-hover:blur-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-6 flex flex-col justify-end">
              <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-green-500/20 backdrop-blur-md text-green-400 ring-1 ring-green-500/40">
                <TrendingUp className="size-5" />
              </div>
              <h3 className="mb-2 text-xl font-extrabold text-white">
                Operational Excellence
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                35+ years of refinement. Systems built for consistency, fresh ingredients, and local sourcing.
              </p>
            </div>
          </div>

          {/* Roots Card - Family */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl transition-all duration-500 hover:border-primary/50">
            <Image
              src="/images/family.png"
              alt="Community legacy and family values"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent p-6 flex flex-col justify-end">
              <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-blue-500/20 backdrop-blur-md text-blue-400 ring-1 ring-blue-500/40">
                <Users className="size-5" />
              </div>
              <h3 className="mb-2 text-xl font-extrabold text-white">
                Atlantic Canadian Roots
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Built by neighbors, for neighbors. Instant brand trust from communities that have grown up with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
