import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Kim C.",
    location: "Oromocto",
    text: "My family and I have been enjoying Pizza Twice pizza, garlic fingers and donairs for many years. The food is always fresh, hot and delicious. The staff have always been polite and courteous. Keep up the great work!",
    rating: 5,
  },
  {
    name: "Amanda",
    location: "Oromocto",
    text: "Always gets the order right and on time. Best pizza in Oromocto!",
    rating: 5,
  },
  {
    name: "Chris R.",
    location: null,
    text: "This is my favourite pizza. Unlike most places they actually put enough sauce on that you can taste it and it doesn't taste sweet. The service has always been friendly.",
    rating: 5,
  },
  {
    name: "Mr Forsythe",
    location: null,
    text: "An excellent place to get your favorite pizza or try one of their delicious speciality pizzas as well as tiger donairs. I would love to recommend a donair pizza, your taste buds will be rewarded.",
    rating: 5,
  },
  {
    name: "Mike",
    location: null,
    text: "This is my favorite local pizza joint. Always great food and staff is always friendly. Definitely get the cheesy donair fingers!",
    rating: 5,
  },
  {
    name: "J.C.",
    location: null,
    text: "I have had donairs in many places, but the donairs in Pizza Twice are second to none. The best way to have them is with onions, tomatoes, sauce and cheese. Outstanding!",
    rating: 5,
  },
  {
    name: "Mary F.",
    location: null,
    text: "Their noon slices deal is excellent. I enjoy their specialty pizzas, especially the donair pizza. A very good business that always helps the community.",
    rating: 5,
  },
  {
    name: "Collin L.",
    location: null,
    text: "Staff is always nice, food is fresh, dough is fresh and cooked perfectly.",
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
