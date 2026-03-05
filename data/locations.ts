export type Location = {
    slug: string
    name: string
    address: string
    province: string
    phone: string
    website: string
    hours: string
    status: string
}

export const locations: Location[] = [
    {
        slug: "oromocto",
        name: "Pizza Twice Oromocto",
        address: "291 Restigouche Road, Oromocto, NB, E2V 2H5",
        province: "NB",
        phone: "506-446-9111",
        website: "https://www.pizzatwiceoromocto.ca",
        hours: "Sun-Thu: 11:00am - 10:00pm | Fri-Sat: 11:00am - 11:00pm",
        status: "Accepting Online Order"
    },
    {
        slug: "edmundston",
        name: "Pizza Twice Edmundston",
        address: "56 CH, Edmundston, NB, E3V 1V3",
        province: "NB",
        phone: "506-739-1976",
        website: "/menu",
        hours: "Tue, Wed, Sun: 11:00am - 8:00pm | Thu-Sat: 11:00am - 9:00pm | Mon: Closed",
        status: "Order by Phone"
    },
    {
        slug: "nackawic",
        name: "Pizza Twice Nackawic",
        address: "135 Otis Drive, Nackawic, NB, E6G 1G9",
        province: "NB",
        phone: "506-575-0101",
        website: "/menu",
        hours: "Mon-Fri: 11:30am - 7:00pm | Sat: 1:00pm - 7:00pm | Sun: CLOSED",
        status: "Order by Phone"
    },
    {
        slug: "hartland",
        name: "Pizza Twice Hartland",
        address: "380 Main Street, Unit 1, Hartland, NB, E7P 2N6",
        province: "NB",
        phone: "506-375-4984",
        website: "/menu",
        hours: "Mon-Sat: 7:00am - 10:00pm | Sun: 8:00am - 9:00pm",
        status: "Order by Phone"
    },
    {
        slug: "canning-valufood",
        name: "Pizza Twice at Canning Valufood",
        address: "9380 Main Street, Canning, NS, B0P 1H0",
        province: "NS",
        phone: "902-582-3555",
        website: "/menu",
        hours: "Mon-Sat: 8:00am - 9:00pm | Sun: 10:00am - 8:00pm",
        status: "Order by Phone"
    },
    {
        slug: "florenceville-bristol",
        name: "Pizza Twice Florenceville-Bristol",
        address: "8850 Main Street, Florenceville-Bristol, NB, E7L 2A3",
        province: "NB",
        phone: "506-392-1159",
        website: "/menu",
        hours: "Mon-Tue: 11am-7pm | Wed-Thu: 11am-8pm | Fri: 11am-9pm | Sat: 12pm-8pm | Sun: 12pm-7pm",
        status: "Order by Phone"
    },
    {
        slug: "marysville",
        name: "Pizza Twice Marysville",
        address: "247 Canada Street, Fredericton, NB, E3A 4A1",
        province: "NB",
        phone: "506-453-0099",
        website: "/menu",
        hours: "Mon: 11am-8pm | Tue-Thu: 11am-9pm | Fri: 11am-10pm | Sat: 11am-9pm | Sun: 3pm-8pm",
        status: "Order by Phone"
    },
    {
        slug: "grand-barachois-valufoods",
        name: "Pizza Twice at Grand Barachois Valufoods",
        address: "1343 Route 133, Grand Barachois, NB, E4P 8C7",
        province: "NB",
        phone: "506-532-6623",
        website: "/menu",
        hours: "Mon-Fri: 6:00am - 9:00pm | Sat-Sun: 7:00am - 9:00pm",
        status: "Order by Phone"
    },
    {
        slug: "churchs-valufood-and-esso",
        name: "Pizza Twice at Church’s Valufood and Esso",
        address: "3966 Gabarus Hwy, Marion Bridge, NS, B1K 1A7",
        province: "NS",
        phone: "902-727-2685",
        website: "/menu",
        hours: "Mon-Sat: 9:00am - 7:00pm | Sun: 12:00pm - 6:00pm",
        status: "Order by Phone"
    },
    {
        slug: "mccloskeys-general-store",
        name: "Pizza Twice at McCloskey’s General Store",
        address: "6156 Route 8, Boiestown, NB, E6A 1M3",
        province: "NB",
        phone: "506-369-2282",
        website: "/menu",
        hours: "Mon-Thu: 9:00am - 7:00pm | Fri-Sat: 9:00am - 9:00pm | Sun: 11:00am - 7:00pm",
        status: "Order by Phone"
    },
    {
        slug: "cornwallis",
        name: "Pizza Twice Cornwallis",
        address: "Hwy 1, Cornwallis, NS",
        province: "NS",
        phone: "902-638-3518",
        website: "/menu",
        hours: "Mon-Sat: 11:00am - 7:00pm | Sun: 12:00pm - 6:00pm",
        status: "Order by Phone"
    },
    {
        slug: "upper-musquodoboit-mini-mart",
        name: "Pizza Twice at Upper Musquodoboit Mini Mart",
        address: "22 Hwy 336, Upper Musquodoboit NS, B0N 2M0",
        province: "NS",
        phone: "902-568-2999",
        website: "/menu",
        hours: "Mon-Sat: 9:00am - 8:00pm | Sun: 12:00pm - 5:00pm",
        status: "Order by Phone"
    },
    {
        slug: "bridgetown",
        name: "Pizza Twice Bridgetown",
        address: "49 Queen St, Bridgetown NS, B0S 1C0",
        province: "NS",
        phone: "902-665-4788",
        website: "/menu",
        hours: "Mon-Sat: 10:00am - 8:30pm | Sun: 10:00am - 4:30pm",
        status: "Order by Phone"
    },
    {
        slug: "parkview-superette",
        name: "Pizza Twice at Parkview Superette",
        address: "3711 Main St Belledune, NB, E8G 2K1",
        province: "NB",
        phone: "506-237-2299",
        website: "/menu",
        hours: "Mon-Sun: 8:00am - 8:00pm",
        status: "Order by Phone"
    },
    {
        slug: "collins-convenience",
        name: "Pizza Twice at Collin’s Convenience",
        address: "14 Eldon Street, Fortune, NL",
        province: "NL",
        phone: "709-832-1163",
        website: "/menu",
        hours: "Mon-Sun: 8:00am - 8:00pm",
        status: "Order by Phone"
    },
    {
        slug: "marystown",
        name: "Pizza Twice Marystown",
        address: "192-200 Ville Marie Dr, Marystown, NL, A0E 2M0",
        province: "NL",
        phone: "709-357-3008",
        website: "/menu",
        hours: "Mon-Sun: 8:00am - 8:00pm",
        status: "Order by Phone"
    },
    {
        slug: "penniac-ultramar",
        name: "Pizza Twice at Penniac Ultramar",
        address: "22 Route 628 Penniac NB E3A 8X3",
        province: "NB",
        phone: "506-474-1587",
        website: "/menu",
        hours: "Sun-Wed: 11:00 am - 8:00 pm | Thu-Sat: 11:00 am - 9:00 pm",
        status: "Order by Phone"
    }
]
