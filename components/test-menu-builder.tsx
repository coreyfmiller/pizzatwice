"use client"

import { useState } from "react"
import { ShoppingCart, Plus, Minus, Trash2, Pizza, SplitSquareHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pizzaSizes, toppings, specialtyPizzas, menuItems, type PizzaSize } from "@/data/menu"
import { useCart, type PizzaHalf, type CartPizza, type CartEntry } from "@/hooks/use-cart"
import type { Location } from "@/data/locations"

function generateId() {
    return Math.random().toString(36).substring(2, 10)
}

function ToppingSelector({
    selected,
    onToggle,
    label,
}: {
    selected: string[]
    onToggle: (id: string) => void
    label: string
}) {
    const meats = toppings.filter((t) => t.category === "meat")
    const veggies = toppings.filter((t) => t.category === "veggie")

    return (
        <div>
            <p className="text-sm font-semibold text-muted-foreground mb-2">{label}</p>
            <div className="grid grid-cols-2 gap-1.5">
                {meats.map((t) => (
                    <button
                        key={t.id}
                        type="button"
                        onClick={() => onToggle(t.id)}
                        className={`text-left text-sm px-3 py-2 rounded-lg border transition-colors ${
                            selected.includes(t.id)
                                ? "bg-primary/10 border-primary text-primary font-medium"
                                : "border-border hover:border-primary/40"
                        }`}
                    >
                        {t.name}
                    </button>
                ))}
                {veggies.map((t) => (
                    <button
                        key={t.id}
                        type="button"
                        onClick={() => onToggle(t.id)}
                        className={`text-left text-sm px-3 py-2 rounded-lg border transition-colors ${
                            selected.includes(t.id)
                                ? "bg-green-500/10 border-green-500 text-green-700 dark:text-green-400 font-medium"
                                : "border-border hover:border-green-500/40"
                        }`}
                    >
                        {t.name}
                    </button>
                ))}
            </div>
        </div>
    )
}

function HalfBuilder({
    half,
    onChange,
    label,
    size,
}: {
    half: PizzaHalf
    onChange: (h: PizzaHalf) => void
    label: string
    size: PizzaSize
}) {
    const setSpecialty = (id: string) => {
        const sp = specialtyPizzas.find((s) => s.id === id)
        if (sp) {
            onChange({ type: "specialty", specialtyId: id, specialtyName: sp.name, toppings: [...sp.toppings] })
        }
    }

    const setCustom = () => {
        onChange({ type: "custom", toppings: [] })
    }

    const toggleTopping = (toppingId: string) => {
        const next = half.toppings.includes(toppingId)
            ? half.toppings.filter((t) => t !== toppingId)
            : [...half.toppings, toppingId]
        onChange({ ...half, toppings: next })
    }

    return (
        <div className="space-y-4">
            <p className="font-bold text-foreground">{label}</p>
            <div className="flex flex-wrap gap-2">
                <button
                    type="button"
                    onClick={setCustom}
                    className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                        half.type === "custom"
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border hover:border-primary/40"
                    }`}
                >
                    Build Your Own
                </button>
                {specialtyPizzas.map((sp) => (
                    <button
                        key={sp.id}
                        type="button"
                        onClick={() => setSpecialty(sp.id)}
                        className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                            half.type === "specialty" && half.specialtyId === sp.id
                                ? "bg-primary text-primary-foreground border-primary"
                                : "border-border hover:border-primary/40"
                        }`}
                    >
                        {sp.name}
                    </button>
                ))}
            </div>
            <ToppingSelector selected={half.toppings} onToggle={toggleTopping} label="Toppings" />
            {half.toppings.length > 0 && (
                <p className="text-xs text-muted-foreground">
                    {half.toppings.length} topping{half.toppings.length !== 1 ? "s" : ""} × ${size.toppingPrice.toFixed(2)} = ${(half.toppings.length * size.toppingPrice).toFixed(2)}
                </p>
            )}
        </div>
    )
}

function calcPizzaPrice(size: PizzaSize, left: PizzaHalf, right: PizzaHalf, isHalf: boolean): number {
    if (!isHalf) {
        return size.basePrice + left.toppings.length * size.toppingPrice
    }
    // Half & half: charge for the side with more toppings
    const leftCost = left.toppings.length * size.toppingPrice
    const rightCost = right.toppings.length * size.toppingPrice
    return size.basePrice + Math.max(leftCost, rightCost)
}

function PizzaBuilder() {
    const { addItem } = useCart()
    const [selectedSize, setSelectedSize] = useState<PizzaSize>(pizzaSizes[1])
    const [isHalfAndHalf, setIsHalfAndHalf] = useState(false)
    const defaultHalf: PizzaHalf = { type: "custom", toppings: [] }
    const [left, setLeft] = useState<PizzaHalf>(defaultHalf)
    const [right, setRight] = useState<PizzaHalf>(defaultHalf)

    const price = calcPizzaPrice(selectedSize, left, right, isHalfAndHalf)

    const handleAdd = () => {
        const entry: CartPizza = {
            id: generateId(),
            kind: "pizza",
            sizeId: selectedSize.id,
            sizeLabel: selectedSize.label,
            isHalfAndHalf,
            left,
            right: isHalfAndHalf ? right : left,
            quantity: 1,
            unitPrice: price,
        }
        addItem(entry)
        setLeft({ type: "custom", toppings: [] })
        setRight({ type: "custom", toppings: [] })
        setIsHalfAndHalf(false)
    }

    return (
        <section className="rounded-2xl border border-border bg-card p-6 lg:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
                <Pizza className="size-7 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Build Your Pizza</h2>
            </div>

            {/* Size selector */}
            <div className="mb-6">
                <p className="font-semibold mb-3">Choose Size</p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {pizzaSizes.map((s) => (
                        <button
                            key={s.id}
                            type="button"
                            onClick={() => setSelectedSize(s)}
                            className={`flex flex-col items-center rounded-xl border p-4 transition-colors ${
                                selectedSize.id === s.id
                                    ? "border-primary bg-primary/10"
                                    : "border-border hover:border-primary/40"
                            }`}
                        >
                            <span className="text-xl font-black">{s.label}</span>
                            <span className="text-xs text-muted-foreground">{s.slices}</span>
                            <span className="text-sm font-bold text-primary mt-1">${s.basePrice.toFixed(2)}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Half & half toggle */}
            <div className="mb-6">
                <button
                    type="button"
                    onClick={() => setIsHalfAndHalf(!isHalfAndHalf)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
                        isHalfAndHalf
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border hover:border-primary/40"
                    }`}
                >
                    <SplitSquareHorizontal className="size-4" />
                    Make it Half &amp; Half
                </button>
            </div>

            {/* Topping builders */}
            {isHalfAndHalf ? (
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div className="rounded-xl border border-border p-4 bg-background">
                        <HalfBuilder half={left} onChange={setLeft} label="Left Half" size={selectedSize} />
                    </div>
                    <div className="rounded-xl border border-border p-4 bg-background">
                        <HalfBuilder half={right} onChange={setRight} label="Right Half" size={selectedSize} />
                    </div>
                </div>
            ) : (
                <div className="mb-6">
                    <HalfBuilder half={left} onChange={setLeft} label="Choose Your Pizza" size={selectedSize} />
                </div>
            )}

            {/* Add to cart */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
                <p className="text-2xl font-bold text-foreground">${price.toFixed(2)}</p>
                <Button onClick={handleAdd} size="lg" variant="primary-brand">
                    <Plus className="mr-2 size-4" /> Add to Cart
                </Button>
            </div>
        </section>
    )
}

function MenuItemsSection() {
    const { addItem } = useCart()
    const categories = [
        { key: "subs" as const, label: "Oven Baked Subs" },
        { key: "donairs" as const, label: "Classic Donairs" },
        { key: "wings" as const, label: "Chicken Wings" },
        { key: "sides" as const, label: "Sides & Add-Ons" },
    ]

    const handleAdd = (item: (typeof menuItems)[number]) => {
        addItem({
            id: generateId(),
            kind: "item",
            menuItemId: item.id,
            name: item.name,
            quantity: 1,
            unitPrice: item.price,
        })
    }

    return (
        <div className="space-y-12">
            {categories.map((cat) => {
                const items = menuItems.filter((i) => i.category === cat.key)
                if (items.length === 0) return null
                return (
                    <section key={cat.key}>
                        <h2 className="text-2xl font-bold text-foreground mb-6">{cat.label}</h2>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm"
                                >
                                    <div>
                                        <h3 className="font-bold text-foreground mb-1">{item.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-primary">${item.price.toFixed(2)}</span>
                                        <Button onClick={() => handleAdd(item)} size="sm" variant="outline">
                                            <Plus className="mr-1 size-3.5" /> Add
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )
            })}
        </div>
    )
}

function CartSidebar() {
    const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()

    if (items.length === 0) {
        return (
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm text-center">
                <ShoppingCart className="size-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground">Your cart is empty</p>
            </div>
        )
    }

    const getToppingNames = (ids: string[]) =>
        ids.map((id) => toppings.find((t) => t.id === id)?.name ?? id).join(", ")

    return (
        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <ShoppingCart className="size-5 text-primary" /> Your Cart
                </h2>
                <button
                    type="button"
                    onClick={clearCart}
                    className="text-xs text-muted-foreground hover:text-destructive transition-colors"
                >
                    Clear all
                </button>
            </div>
            <div className="space-y-4 mb-6">
                {items.map((entry) => (
                    <div key={entry.id} className="border-b border-border pb-4 last:border-0">
                        {entry.kind === "pizza" ? (
                            <div>
                                <p className="font-bold text-foreground">
                                    {entry.sizeLabel} Pizza
                                    {entry.isHalfAndHalf ? " (Half & Half)" : ""}
                                </p>
                                {entry.isHalfAndHalf ? (
                                    <>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            L: {entry.left.specialtyName ?? "Custom"} — {getToppingNames(entry.left.toppings) || "Cheese"}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            R: {entry.right.specialtyName ?? "Custom"} — {getToppingNames(entry.right.toppings) || "Cheese"}
                                        </p>
                                    </>
                                ) : (
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {entry.left.specialtyName ?? "Custom"} — {getToppingNames(entry.left.toppings) || "Cheese"}
                                    </p>
                                )}
                            </div>
                        ) : (
                            <p className="font-bold text-foreground">{entry.name}</p>
                        )}
                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => updateQuantity(entry.id, entry.quantity - 1)}
                                    className="size-7 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors"
                                    aria-label="Decrease quantity"
                                >
                                    <Minus className="size-3" />
                                </button>
                                <span className="text-sm font-medium w-6 text-center">{entry.quantity}</span>
                                <button
                                    type="button"
                                    onClick={() => updateQuantity(entry.id, entry.quantity + 1)}
                                    className="size-7 rounded-md border border-border flex items-center justify-center hover:bg-muted transition-colors"
                                    aria-label="Increase quantity"
                                >
                                    <Plus className="size-3" />
                                </button>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="font-bold text-foreground">
                                    ${(entry.unitPrice * entry.quantity).toFixed(2)}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => removeItem(entry.id)}
                                    className="text-muted-foreground hover:text-destructive transition-colors"
                                    aria-label="Remove item"
                                >
                                    <Trash2 className="size-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary">${totalPrice().toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}

export function TestMenuBuilder({ location }: { location: Location | null }) {
    return (
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
            <div className="space-y-12">
                <PizzaBuilder />
                <MenuItemsSection />
            </div>
            <div className="lg:sticky lg:top-28">
                <CartSidebar />
            </div>
        </div>
    )
}
