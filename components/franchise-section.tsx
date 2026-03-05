"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, Send } from "lucide-react"

const faqs = [
  {
    question: "What is the initial franchise investment?",
    answer:
      "The total investment ranges depending on the location size and market. We provide a detailed breakdown during the inquiry process, including equipment, build-out, and initial inventory costs.",
  },
  {
    question: "Do I need restaurant experience?",
    answer:
      "No prior restaurant experience is required. Pizza Twice provides comprehensive training covering all aspects of operations, from food preparation to customer service and business management.",
  },
  {
    question: "What territories are available?",
    answer:
      "We are actively expanding across Atlantic Canada and beyond. Available territories change regularly, so we encourage you to inquire about your preferred area.",
  },
  {
    question: "What ongoing support does Pizza Twice provide?",
    answer:
      "Franchise owners receive ongoing operational support, marketing assistance, supply chain management, and regular training updates. Our team is always a phone call away.",
  },
  {
    question: "How long does it take to open a location?",
    answer:
      "From signing the franchise agreement to opening day, the process typically takes 3 to 6 months depending on site selection, build-out, and local permitting requirements.",
  },
]

export function FranchiseSection() {
  return (
    <section id="franchise" className="border-t border-border bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Join Our Team
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Franchise Inquiries
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Interested in owning a Pizza Twice franchise? Fill out the form below and our franchise development team will be in touch.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative">
            <form
              className="rounded-xl border border-border bg-card p-6 lg:p-8 shadow-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-6 flex items-center gap-3">
                <Send className="size-5 text-primary" />
                <h3 className="text-xl font-bold text-card-foreground">
                  Inquiry Form
                </h3>
              </div>
              <div className="flex flex-col gap-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="fname" className="text-foreground">Full Name</Label>
                    <Input
                      id="fname"
                      placeholder="John Doe"
                      className="bg-muted/50 border-border"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="fphone" className="text-foreground">Phone Number</Label>
                    <Input
                      id="fphone"
                      type="tel"
                      placeholder="(506) 555-0000"
                      className="bg-muted/50 border-border"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="femail" className="text-foreground">Email Address</Label>
                  <Input
                    id="femail"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-muted/50 border-border"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="fterritory" className="text-foreground">Desired Territory</Label>
                  <Input
                    id="fterritory"
                    placeholder="e.g., Halifax, NS"
                    className="bg-muted/50 border-border"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="fmessage" className="text-foreground">Additional Details</Label>
                  <Textarea
                    id="fmessage"
                    placeholder="Tell us about your background and why you're interested..."
                    rows={4}
                    className="bg-muted/50 border-border resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="h-11 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <HelpCircle className="size-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">
                Frequently Asked Questions
              </h3>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
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
        </div>
      </div>
    </section>
  )
}
