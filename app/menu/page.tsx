import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Info, Pizza, Flame } from "lucide-react"

export const metadata = {
    title: "Menu | Pizza Twice",
    description: "View the delicious menu options available at Pizza Twice locations.",
}

const sizes = [
    { size: "9''", slices: "4 Slices", desc: "Perfect for one" },
    { size: "12''", slices: "8 Slices", desc: "Great for two" },
    { size: "16''", slices: "8 Slices", desc: "For the family" },
    { size: "12x24", slices: "24 Slices", desc: "Party size" },
    { size: "24x24", slices: "36 Slices", desc: "Crowd pleaser" },
]

const toppings = {
    meats: ["Ground beef", "Pepperoni", "Italian sausage", "Salami", "Bacon", "Donair meat", "Chicken"],
    veggies: ["Green peppers", "Onions", "Mushrooms", "Green/black olives", "Hot peppers", "Pineapple", "Cheddar cheese"]
}

const specialtyPizzas = [
    { name: "The Works", desc: "Tomato sauce, cheese, ground beef, pepperoni, bacon, green peppers, mushrooms." },
    { name: "Vegetarian", desc: "Tomato sauce, cheese, green peppers, mushrooms, onions and your choice of pineapples, olives or tomatoes." },
    { name: "All Meats", desc: "Tomato sauce, cheese, ground beef, pepperoni, bacon, salami, ham." },
    { name: "Hawaiian", desc: "Ham, pineapple, cheese, tomato sauce" },
    { name: "Specialty Options", desc: "Also available: Vegetarian, Mexican, donair or spicy chicken" },
]

const ovenBakedSubs = [
    "Italian", "Hawaiian", "Donair",
    "Chicken pizza",
    "Bacon double cheese burger"
]

const donairs = [
    { name: "Regular", desc: "Onion, tomatoes and donair sauce" },
    { name: "Donair Plus", desc: "Cheese, onions, lettuce, tomatoes, and donair sauce" },
    { name: "1lb Donair Supersized", desc: "Cheese, onions, lettuce, tomatoes, and donair sauce" },
]

const wings = [
    "Buffalo", "Honey garlic",
    "BBQ", "Breaded"
]

const sides = [
    "Garlic cheese fingers with dipping sauce",
    "Extra cheesy donair fingers",
    "Caesar salad",
    "Fries",
    "Poutine",
    "Beverages",
]

const uBake = [
    "12'' u-bake pizza",
    "12'' u-bake garlic fingers"
]

export default function MenuPage() {
    return (
        <>
            <Header />
            <main className="min-h-[100dvh] pt-28 pb-20 bg-background text-foreground">
                <div className="mx-auto max-w-6xl px-4 lg:px-8">

                    <div className="mb-16 text-center">
                        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl border-b-4 border-primary inline-block pb-3">
                            Our Menu
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                            {"* Subject to change without notice. Please contact your local store for current pricing."}
                        </p>
                    </div>

                    <div className="space-y-20">
                        {/* Pizza Section */}
                        <section>
                            <div className="mb-8 flex items-center gap-3">
                                <Pizza className="size-8 text-primary" />
                                <h2 className="text-3xl font-bold text-foreground">Pizza Sizes</h2>
                            </div>
                            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                                {sizes.map((item, idx) => (
                                    <div key={idx} className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-6 text-center shadow-sm hover:border-primary/50 transition-colors">
                                        <span className="text-3xl font-black text-foreground mb-1">{item.size}</span>
                                        <span className="text-primary font-bold mb-2">{item.slices}</span>
                                        <span className="text-sm text-muted-foreground">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Build your own */}
                        <section className="rounded-2xl bg-muted/30 p-8 lg:p-12 border border-border">
                            <h2 className="text-3xl font-bold text-foreground mb-4">Make Your Own Creation</h2>
                            <p className="text-muted-foreground mb-8">Customize your perfect pizza with our fresh ingredients.</p>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-primary uppercase tracking-wider">Meat</h3>
                                    <ul className="space-y-2">
                                        {toppings.meats.map(meat => (
                                            <li key={meat} className="flex items-center gap-2">
                                                <div className="size-1.5 rounded-full bg-primary" />
                                                <span className="font-medium">{meat}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-green-600 uppercase tracking-wider">Veggies & More</h3>
                                    <ul className="space-y-2">
                                        {toppings.veggies.map(veg => (
                                            <li key={veg} className="flex items-center gap-2">
                                                <div className="size-1.5 rounded-full bg-green-600" />
                                                <span className="font-medium">{veg}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Specialty Pizzas */}
                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-8">Specialty Pizzas</h2>
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {specialtyPizzas.map((pizza, idx) => (
                                    <div key={idx} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                                        <h3 className="text-xl font-bold text-foreground mb-3">{pizza.name}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{pizza.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <div className="grid gap-16 lg:grid-cols-2">
                            {/* Donairs */}
                            <section>
                                <h2 className="text-3xl font-bold text-foreground mb-8">Classic Donairs</h2>
                                <div className="space-y-4">
                                    {donairs.map((donair, idx) => (
                                        <div key={idx} className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                            <div>
                                                <h3 className="text-lg font-bold text-foreground mb-1">{donair.name}</h3>
                                                <p className="text-sm text-muted-foreground">{donair.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Oven Baked Subs */}
                            <section>
                                <h2 className="text-3xl font-bold text-foreground mb-8">Oven Baked Subs</h2>
                                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                                    <ul className="grid sm:grid-cols-2 gap-4">
                                        {ovenBakedSubs.map((sub, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <Flame className="size-4 text-orange-500 shrink-0" />
                                                <span className="font-medium">{sub}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        </div>

                        <div className="grid gap-16 md:grid-cols-3">
                            {/* Chicken Wings */}
                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-6">Chicken Wings</h2>
                                <ul className="space-y-3">
                                    {wings.map(wing => (
                                        <li key={wing} className="flex items-center gap-2">
                                            <div className="size-1.5 rounded-full bg-primary" />
                                            <span className="font-medium text-muted-foreground">{wing}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Add Ons & Sides */}
                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-6">Great Add-Ons</h2>
                                <ul className="space-y-3">
                                    {sides.map(side => (
                                        <li key={side} className="flex items-center gap-2">
                                            <div className="size-1.5 rounded-full bg-primary" />
                                            <span className="font-medium text-muted-foreground">{side}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* U-Bake */}
                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-6">U-Bake, U-Make</h2>
                                <ul className="space-y-3 mb-8">
                                    {uBake.map(item => (
                                        <li key={item} className="flex items-center gap-2">
                                            <div className="size-1.5 rounded-full bg-orange-500" />
                                            <span className="font-medium text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="rounded-lg bg-primary/10 p-5 border border-primary/20">
                                    <div className="flex gap-3">
                                        <Info className="size-5 text-primary shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-foreground mb-1">Catering Available</h4>
                                            <p className="text-sm text-primary">We cater for parties and events! Contact your local store for details.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
