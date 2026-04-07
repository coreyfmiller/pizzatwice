"use client"

import { create } from "zustand"

export type PizzaHalf = {
    type: "specialty" | "custom"
    specialtyId?: string
    specialtyName?: string
    toppings: string[]
}

export type CartPizza = {
    id: string
    kind: "pizza"
    sizeId: string
    sizeLabel: string
    isHalfAndHalf: boolean
    left: PizzaHalf
    right: PizzaHalf
    quantity: number
    unitPrice: number
}

export type CartItem = {
    id: string
    kind: "item"
    menuItemId: string
    name: string
    quantity: number
    unitPrice: number
}

export type CartEntry = CartPizza | CartItem

type CartStore = {
    items: CartEntry[]
    addItem: (entry: CartEntry) => void
    removeItem: (id: string) => void
    updateQuantity: (id: string, quantity: number) => void
    clearCart: () => void
    totalItems: () => number
    totalPrice: () => number
}

export const useCart = create<CartStore>((set, get) => ({
    items: [],
    addItem: (entry) => set((state) => ({ items: [...state.items, entry] })),
    removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
    updateQuantity: (id, quantity) =>
        set((state) => ({
            items: state.items.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i)),
        })),
    clearCart: () => set({ items: [] }),
    totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
    totalPrice: () => get().items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0),
}))
