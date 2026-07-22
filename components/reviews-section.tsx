import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Courtney Wand",
    location: "Oromocto",
    text: "Pizza Twice has been my favourite Pizza in Oromocto for over 20 years. They serve the best slice of pepperoni cheese I have ever eaten from anywhere. Their pizza looks like that of a Ninja Turtles, awesome!",
    rating: 5,
  },
  {
    name: "Michael Doucette",
    location: "Oromocto",
    text: "Pizza Twice is one of the better pizza places in Oromocto, very limited seating, more for take out. Clean, smells really nice. Recommend this establishment, family owned.",
    rating: 5,
  },
  {
    name: "Fantastic Ouellet",
    location: null,
    text: "I ordered a regular Donair for the first time from this place, and I must say it was the BEST Donair I've ever tasted and I've had donairs just about everywhere.",
    rating: 5,
  },
  {
    name: "Pat M",
    location: null,
    text: "Best pizza around by far! We eat here weekly and it's always very consistent and friendly staff.",
    rating: 5,
  },
  {
    name: "Chris Radl",
    location: null,
    text: "This is my favourite pizza. Unlike most places they actually put enough sauce on that you can taste it and that sauce does not taste sweet. The service has always been fair and friendly.",
    rating: 5,
  },
  {
    name: "Paul D",
    location: null,
    text: "When I asked for a wizard to be drawn on the box of my pizza the woman says it's not store policy, but none the less I received not only a delicious slice but also a glorious felt marker drawing of a wizard! 10/10",
    rating: 5,
  },
  {
    name: "Andrea Pierce",
    location: null,
    text: "Stopped by after the Canada Day Parade today and enjoyed two large pizzas on the picnic tables out front. Excellent pizzas, excellent service.",
    rating: 5,
  },
  {
    name: "Angelique",
    location: null,
    text: "First time customers and the staff went out of their way to give us everything we needed and introduced us to their rewards program offering us a special deal on the spot.",
    rating: 5,
  },
  {
    name: "Carmen P",
    location: null,
    text: "Our go to pizza place. Predictably delicious. We always order for pick up, always ready in under 20 minutes.",
    rating: 5,
  },
  {
    name: "Amanda Doupe",
    location: "Oromocto",
    text: "Always gets the order right and on time. Best pizza in Oromocto!",
    rating: 5,
  },
]

export function ReviewsSection() {
  return (
    <section className="border-t border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="size-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-muted-foreground">
            Real reviews from real Pizza Twice customers across Atlantic Canada.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-xl border border-border bg-card p-5"
            >
              <Quote className="size-5 text-primary/40 mb-3" />
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  {review.location && (
                    <p className="text-xs text-muted-foreground">{review.location}</p>
                  )}
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="size-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
