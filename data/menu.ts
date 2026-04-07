export type PizzaSize = {
    id: string
    label: string
    slices: string
    basePrice: number
    toppingPrice: number
}

export type Topping = {
    id: string
    name: string
    category: "meat" | "veggie"
}

export type SpecialtyPizza = {
    id: string
    name: string
    description: string
    toppings: string[]
    extraPrice: number
}

export type MenuItem = {
    id: string
    name: string
    description: string
    price: number
    category: "subs" | "donairs" | "wings" | "sides"
}

export const pizzaSizes: PizzaSize[] = [
    { id: "9", label: "9\"", slices: "4 Slices", basePrice: 8.99, toppingPrice: 1.50 },
    { id: "12", label: "12\"", slices: "8 Slices", basePrice: 12.99, toppingPrice: 2.00 },
    { id: "16", label: "16\"", slices: "8 Slices", basePrice: 16.99, toppingPrice: 2.50 },
    { id: "12x24", label: "12x24", slices: "24 Slices", basePrice: 24.99, toppingPrice: 3.00 },
    { id: "24x24", label: "24x24", slices: "36 Slices", basePrice: 34.99, toppingPrice: 4.00 },
]

export const toppings: Topping[] = [
    { id: "ground-beef", name: "Ground beef", category: "meat" },
    { id: "pepperoni", name: "Pepperoni", category: "meat" },
    { id: "italian-sausage", name: "Italian sausage", category: "meat" },
    { id: "salami", name: "Salami", category: "meat" },
    { id: "bacon", name: "Bacon", category: "meat" },
    { id: "ham", name: "Ham", category: "meat" },
    { id: "donair-meat", name: "Donair meat", category: "meat" },
    { id: "chicken", name: "Chicken", category: "meat" },
    { id: "green-peppers", name: "Green peppers", category: "veggie" },
    { id: "onions", name: "Onions", category: "veggie" },
    { id: "mushrooms", name: "Mushrooms", category: "veggie" },
    { id: "green-olives", name: "Green olives", category: "veggie" },
    { id: "black-olives", name: "Black olives", category: "veggie" },
    { id: "hot-peppers", name: "Hot peppers", category: "veggie" },
    { id: "pineapple", name: "Pineapple", category: "veggie" },
    { id: "tomatoes", name: "Tomatoes", category: "veggie" },
    { id: "cheddar-cheese", name: "Cheddar cheese", category: "veggie" },
]

export const specialtyPizzas: SpecialtyPizza[] = [
    {
        id: "the-works",
        name: "The Works",
        description: "Tomato sauce, cheese, ground beef, pepperoni, bacon, green peppers, mushrooms.",
        toppings: ["ground-beef", "pepperoni", "bacon", "green-peppers", "mushrooms"],
        extraPrice: 0,
    },
    {
        id: "vegetarian",
        name: "Vegetarian",
        description: "Tomato sauce, cheese, green peppers, mushrooms, onions and your choice of pineapples, olives or tomatoes.",
        toppings: ["green-peppers", "mushrooms", "onions"],
        extraPrice: 0,
    },
    {
        id: "all-meats",
        name: "All Meats",
        description: "Tomato sauce, cheese, ground beef, pepperoni, bacon, salami, ham.",
        toppings: ["ground-beef", "pepperoni", "bacon", "salami", "ham"],
        extraPrice: 0,
    },
    {
        id: "hawaiian",
        name: "Hawaiian",
        description: "Ham, pineapple, cheese, tomato sauce.",
        toppings: ["ham", "pineapple"],
        extraPrice: 0,
    },
    {
        id: "donair-pizza",
        name: "Donair Pizza",
        description: "Donair sauce, donair meat, onions, tomatoes, cheese.",
        toppings: ["donair-meat", "onions", "tomatoes"],
        extraPrice: 0,
    },
    {
        id: "spicy-chicken",
        name: "Spicy Chicken",
        description: "Chicken, hot peppers, onions, green peppers, cheese.",
        toppings: ["chicken", "hot-peppers", "onions", "green-peppers"],
        extraPrice: 0,
    },
]

export const menuItems: MenuItem[] = [
    { id: "sub-italian", name: "Italian Sub", description: "Oven baked Italian sub", price: 9.99, category: "subs" },
    { id: "sub-hawaiian", name: "Hawaiian Sub", description: "Oven baked Hawaiian sub", price: 9.99, category: "subs" },
    { id: "sub-donair", name: "Donair Sub", description: "Oven baked donair sub", price: 9.99, category: "subs" },
    { id: "sub-chicken-pizza", name: "Chicken Pizza Sub", description: "Oven baked chicken pizza sub", price: 9.99, category: "subs" },
    { id: "sub-bacon-cheeseburger", name: "Bacon Double Cheeseburger Sub", description: "Oven baked bacon double cheeseburger sub", price: 10.99, category: "subs" },
    { id: "donair-regular", name: "Regular Donair", description: "Onion, tomatoes and donair sauce", price: 9.99, category: "donairs" },
    { id: "donair-plus", name: "Donair Plus", description: "Cheese, onions, lettuce, tomatoes, and donair sauce", price: 11.99, category: "donairs" },
    { id: "donair-1lb", name: "1lb Donair Supersized", description: "Cheese, onions, lettuce, tomatoes, and donair sauce", price: 15.99, category: "donairs" },
    { id: "wings-buffalo", name: "Buffalo Wings", description: "Classic buffalo wings", price: 12.99, category: "wings" },
    { id: "wings-honey-garlic", name: "Honey Garlic Wings", description: "Sweet honey garlic wings", price: 12.99, category: "wings" },
    { id: "wings-bbq", name: "BBQ Wings", description: "Smoky BBQ wings", price: 12.99, category: "wings" },
    { id: "wings-breaded", name: "Breaded Wings", description: "Crispy breaded wings", price: 12.99, category: "wings" },
    { id: "garlic-fingers", name: "Garlic Cheese Fingers", description: "With dipping sauce", price: 10.99, category: "sides" },
    { id: "donair-fingers", name: "Extra Cheesy Donair Fingers", description: "Loaded donair fingers", price: 11.99, category: "sides" },
    { id: "caesar-salad", name: "Caesar Salad", description: "Fresh caesar salad", price: 7.99, category: "sides" },
    { id: "fries", name: "Fries", description: "Golden fries", price: 5.99, category: "sides" },
    { id: "poutine", name: "Poutine", description: "Fries, cheese curds, and gravy", price: 8.99, category: "sides" },
]
