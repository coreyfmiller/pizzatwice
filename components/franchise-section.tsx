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
import { Sparkles, MessageSquare, Send } from "lucide-react"

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
    <section id="franchise" className="relative border-t border-border bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 size-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 size-[400px] rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur-md">
            <Sparkles className="size-3" />
            <span>Launch Your Legacy</span>
          </div>
          <h2 className="text-balance text-4xl font-black text-white md:text-5xl">
            Secure Your Territory
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Join the ranks of Atlantic Canada's most successful independent pizza network. Your journey to ownership starts with a single conversation.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Premium Glass Form */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-primary/30 to-transparent blur-2xl opacity-50" />
            <form
              className="relative rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-10 backdrop-blur-xl shadow-2xl"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-8 flex items-center gap-4 border-b border-white/10 pb-6">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.4)]">
                  <Send className="size-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Inquiry Portal</h3>
                  <p className="text-sm text-gray-400">Direct access to development</p>
                </div>
              </div>

              <div className="flex flex-col gap-6 text-left">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="fname" className="text-sm font-semibold text-gray-300">Full Name</Label>
                    <Input
                      id="fname"
                      placeholder="John Doe"
                      className="h-12 border-white/10 bg-white/5 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="fphone" className="text-sm font-semibold text-gray-300">Phone Number</Label>
                    <Input
                      id="fphone"
                      type="tel"
                      placeholder="(506) 555-0000"
                      className="h-12 border-white/10 bg-white/5 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="femail" className="text-sm font-semibold text-gray-300">Email Address</Label>
                  <Input
                    id="femail"
                    type="email"
                    placeholder="john@example.com"
                    className="h-12 border-white/10 bg-white/5 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="fterritory" className="text-sm font-semibold text-gray-300">Desired Martket</Label>
                  <Input
                    id="fterritory"
                    placeholder="e.g., Saint John, NB"
                    className="h-12 border-white/10 bg-white/5 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-primary/20 rounded-xl"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="fmessage" className="text-sm font-semibold text-gray-300">Strategic Background</Label>
                  <Textarea
                    id="fmessage"
                    placeholder="Tell us about your business goals..."
                    rows={4}
                    className="border-white/10 bg-white/5 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-primary/20 rounded-xl resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="mt-4 h-14 w-full rounded-2xl bg-primary text-lg font-black text-primary-foreground shadow-lg hover:translate-y-[-2px] hover:shadow-primary/30 active:translate-y-0 transition-all duration-200"
                >
                  Submit Strategic Inquiry
                </Button>
                <p className="text-center text-xs text-gray-500">
                  Information is kept strictly confidential and used for evaluation purposes only.
                </p>
              </div>
            </form>
          </div>

          <div className="lg:sticky lg:top-32">
            <div className="mb-8 flex items-center gap-3">
              <MessageSquare className="size-6 text-primary" />
              <h3 className="text-2xl font-black text-white">
                Intelligence Briefing
              </h3>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="border-white/10 bg-white/5 px-6 rounded-2xl overflow-hidden"
                >
                  <AccordionTrigger className="text-left py-5 font-bold text-gray-200 hover:text-primary hover:no-underline transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 leading-relaxed pb-5 text-[15px]">
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
