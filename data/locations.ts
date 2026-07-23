export type Location = {
    slug: string
    name: string
    address: string
    province: string
    phone: string
    website: string
    hours: string
    status: string
    description: string
}

export const locations: Location[] = [
    {
        slug: "oromocto",
        name: "Pizza Twice Oromocto",
        address: "291 Restigouche Road, Oromocto, NB, E2V 2H5",
        province: "NB",
        phone: "506-446-9111",
        website: "/order",
        hours: "Sun-Thu: 11:00am - 10:00pm | Fri-Sat: 11:00am - 11:00pm",
        status: "Accepting Online Order",
        description: "The original Pizza Twice location, serving the Oromocto and CFB Gagetown community since 1989. Full dine-in, takeout, delivery, and online ordering available."
    },
    {
        slug: "edmundston",
        name: "Pizza Twice Edmundston",
        address: "56 CH, Edmundston, NB, E3V 1V3",
        province: "NB",
        phone: "506-739-1976",
        website: "/menu",
        hours: "Tue, Wed, Sun: 11:00am - 8:00pm | Thu-Sat: 11:00am - 9:00pm | Mon: Closed",
        status: "Order by Phone",
        description: "Serving the Edmundston community with the same great Pizza Twice recipes. Dine-in and takeout with online ordering available."
    },
    {
        slug: "nackawic",
        name: "Pizza Twice Nackawic",
        address: "135 Otis Drive, Nackawic, NB, E6G 1G9",
        province: "NB",
        phone: "506-575-0101",
        website: "/menu",
        hours: "Mon-Fri: 11:30am - 7:00pm | Sat: 1:00pm - 7:00pm | Sun: CLOSED",
        status: "Order by Phone",
        description: "Bringing Pizza Twice to the Nackawic area. Fresh pizzas, subs, and donairs made to order. Call ahead for quick pickup."
    },
    {
        slug: "hartland",
        name: "Pizza Twice Hartland",
        address: "380 Main Street, Unit 1, Hartland, NB, E7P 2N6",
        province: "NB",
        phone: "506-375-4984",
        website: "/menu",
        hours: "Mon-Sat: 7:00am - 10:00pm | Sun: 8:00am - 9:00pm",
        status: "Order by Phone",
        description: "Located on Main Street in Hartland, home of the world's longest covered bridge. Early morning hours with full breakfast and pizza menu all day."
    },
    {
        slug: "canning-valufood",
        name: "Pizza Twice Canning",
        address: "9380 Main Street, Canning, NS, B0P 1H0",
        province: "NS",
        phone: "902-582-3555",
        website: "/menu",
        hours: "Mon-Sat: 8:00am - 9:00pm | Sun: 10:00am - 8:00pm",
        status: "Order by Phone",
        description: "Conveniently located inside Canning Valufood. Grab a fresh Pizza Twice pizza while you shop. Serving the Annapolis Valley community."
    },
    {
        slug: "florenceville-bristol",
        name: "Pizza Twice Florenceville-Bristol",
        address: "8850 Main Street, Florenceville-Bristol, NB, E7L 2A3",
        province: "NB",
        phone: "506-392-1159",
        website: "/menu",
        hours: "Mon-Tue: 11am-7pm | Wed-Thu: 11am-8pm | Fri: 11am-9pm | Sat: 12pm-8pm | Sun: 12pm-7pm",
        status: "Order by Phone",
        description: "Serving Florenceville-Bristol and the surrounding Carleton County area with fresh pizzas, subs, and donairs made daily."
    },
    {
        slug: "marysville",
        name: "Pizza Twice Marysville",
        address: "247 Canada Street, Fredericton, NB, E3A 4A1",
        province: "NB",
        phone: "506-453-0099",
        website: "/menu",
        hours: "Mon: 11am-8pm | Tue-Thu: 11am-9pm | Fri: 11am-10pm | Sat: 11am-9pm | Sun: 3pm-8pm",
        status: "Order by Phone",
        description: "Located at the Ultramar on Canada Street in the Marysville area of Fredericton. Quick pickup and late-night weekend hours."
    },
    {
        slug: "grand-barachois-valufoods",
        name: "Pizza Twice Grand Barachois",
        address: "1343 Route 133, Grand Barachois, NB, E4P 8C7",
        province: "NB",
        phone: "506-532-6623",
        website: "/menu",
        hours: "Mon-Fri: 6:00am - 9:00pm | Sat-Sun: 7:00am - 9:00pm",
        status: "Order by Phone",
        description: "Inside Grand Barachois Valufoods, serving the Shediac and Cap-Pele area. Open early for breakfast with pizza available all day."
    },
    {
        slug: "churchs-valufood-and-esso",
        name: "Pizza Twice Marion Bridge",
        address: "3966 Gabarus Hwy, Marion Bridge, NS, B1K 1A7",
        province: "NS",
        phone: "902-727-2685",
        website: "/menu",
        hours: "Mon-Sat: 9:00am - 7:00pm | Sun: 12:00pm - 6:00pm",
        status: "Order by Phone",
        description: "Serving the Marion Bridge and Gabarus area of Cape Breton. Convenient one-stop shop for fuel, groceries, and fresh Pizza Twice."
    },
    {
        slug: "mccloskeys-general-store",
        name: "Pizza Twice Boiestown",
        address: "6156 Route 8, Boiestown, NB, E6A 1M3",
        province: "NB",
        phone: "506-369-2282",
        website: "/menu",
        hours: "Mon-Thu: 9:00am - 7:00pm | Fri-Sat: 9:00am - 9:00pm | Sun: 11:00am - 7:00pm",
        status: "Order by Phone",
        description: "Located in McCloskey's General Store on Route 8 in Boiestown. A community favourite in the Miramichi region with extended weekend hours."
    },
    {
        slug: "cornwallis",
        name: "Pizza Twice Cornwallis",
        address: "Hwy 1, Cornwallis, NS",
        province: "NS",
        phone: "902-638-3518",
        website: "/menu",
        hours: "Mon-Sat: 11:00am - 7:00pm | Sun: 12:00pm - 6:00pm",
        status: "Order by Phone",
        description: "Serving the Cornwallis and Annapolis Valley area off Highway 1. Fresh pizza, subs, and donairs for lunch and dinner."
    },
    {
        slug: "upper-musquodoboit-mini-mart",
        name: "Pizza Twice Upper Musquodoboit",
        address: "22 Hwy 336, Upper Musquodoboit NS, B0N 2M0",
        province: "NS",
        phone: "902-568-2999",
        website: "/menu",
        hours: "Mon-Sat: 9:00am - 8:00pm | Sun: 12:00pm - 5:00pm",
        status: "Order by Phone",
        description: "Bringing Pizza Twice to the Musquodoboit Valley. Located in the Mini Mart on Highway 336, serving the rural Halifax County community."
    },
    {
        slug: "bridgetown",
        name: "Pizza Twice Bridgetown",
        address: "49 Queen St, Bridgetown NS, B0S 1C0",
        province: "NS",
        phone: "902-665-4788",
        website: "/menu",
        hours: "Mon-Sat: 10:00am - 8:30pm | Sun: 10:00am - 4:30pm",
        status: "Order by Phone",
        description: "On Queen Street in historic Bridgetown, Nova Scotia. Pizza, broaster chicken, and more serving the South Shore community."
    },
    {
        slug: "parkview-superette",
        name: "Pizza Twice Belledune",
        address: "3711 Main St Belledune, NB, E8G 2K1",
        province: "NB",
        phone: "506-237-2299",
        website: "/menu",
        hours: "Mon-Sun: 8:00am - 8:00pm",
        status: "Order by Phone",
        description: "Inside Parkview Superette in Belledune, serving the Chaleur Bay region. Open 7 days a week with fresh pizza all day."
    },
    {
        slug: "collins-convenience",
        name: "Pizza Twice Fortune",
        address: "14 Eldon Street, Fortune, NL",
        province: "NL",
        phone: "709-832-1163",
        website: "/menu",
        hours: "Mon-Sun: 8:00am - 8:00pm",
        status: "Order by Phone",
        description: "Pizza Twice reaches Newfoundland! Located in Collin's Convenience in Fortune on the Burin Peninsula. Open daily."
    },
    {
        slug: "marystown",
        name: "Pizza Twice Marystown",
        address: "192-200 Ville Marie Dr, Marystown, NL, A0E 2M0",
        province: "NL",
        phone: "709-357-3008",
        website: "/menu",
        hours: "Mon-Sun: 8:00am - 8:00pm",
        status: "Order by Phone",
        description: "Serving Marystown and the Burin Peninsula with the same great Pizza Twice recipes Atlantic Canada knows and loves. Open 7 days."
    },
    {
        slug: "penniac-ultramar",
        name: "Pizza Twice Penniac",
        address: "22 Route 628 Penniac NB E3A 8X3",
        province: "NB",
        phone: "506-474-1587",
        website: "/menu",
        hours: "Sun-Wed: 11:00 am - 8:00 pm | Thu-Sat: 11:00 am - 9:00 pm",
        status: "Order by Phone",
        description: "At the Gateway Convenience Ultramar in Penniac, just outside Fredericton. Convenient stop for fresh pizza on Route 628."
    }
]
