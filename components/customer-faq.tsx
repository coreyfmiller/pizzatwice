"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Do you offer delivery?",
    answer: "Yes! Most Pizza Twice locations offer fast delivery within their service area. Call your nearest location to confirm delivery availability and range.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "All Pizza Twice locations accept Interac, Visa, Mastercard, and cash. Debit at your door is available at select locations.",
  },
  {
    question: "Can I order online?",
    answer: "Some of our locations offer online ordering through their individual websites. Check the Locations page to see if your nearest store has online ordering available. Otherwise, call to place your order.",
  },
  {
    question: "Do you sell U-Bake pizzas?",
    answer: "Yes! Take home a 12\" u-bake pizza or 12\" u-bake garlic fingers and bake them fresh in your own oven whenever you're ready.",
  },
  {
    question: "Do you cater for events and parties?",
    answer: "We do! Pizza Twice caters for parties, events, and gatherings of all sizes. Contact your local store for catering options, pricing, and to place a large order.",
  },
  {
    question: "How many locations does Pizza Twice have?",
    answer: "Pizza Twice has franchise locations across New Brunswick, Nova Scotia, and Newfoundland. We've been serving Atlantic Canada since 1989.",
  },
  {
    question: "What sizes of pizza do you offer?",
    answer: "We offer 9\" (4 slices, perfect for one), 12\" (8 slices), our famous 16\" large (8 big slices), and party sizes including 12x24 and 24x24 sheet pizzas.",
  },
  {
    question: "Are your hours the same at every location?",
    answer: "Hours vary by location. Check the Locations page for the specific hours at your nearest Pizza Twice.",
  },
]

export function CustomerFaq() {
  return (
    <section className="border-t border-border bg-card/30 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 text-primary mb-2">
            <HelpCircle className="size-5" />
            <span className="text-sm font-semibold uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground">Common Questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              value={`customer-faq-${idx}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
