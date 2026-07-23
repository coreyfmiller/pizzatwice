"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Franchise Inquiries
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Interested in Owning a Pizza Twice?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            We&apos;re always looking for passionate franchise partners across Atlantic Canada. Send us a message and we&apos;ll get back to you.
          </p>
        </div>

        <form
          className="rounded-lg border border-border bg-card p-6 lg:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="cname" className="text-foreground">Name</Label>
                <Input
                  id="cname"
                  placeholder="Your name"
                  className="bg-muted text-foreground placeholder:text-muted-foreground border-border"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="cemail" className="text-foreground">Email</Label>
                <Input
                  id="cemail"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-muted text-foreground placeholder:text-muted-foreground border-border"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="cphone" className="text-foreground">Phone</Label>
              <Input
                id="cphone"
                type="tel"
                placeholder="(506) 555-0000"
                className="bg-muted text-foreground placeholder:text-muted-foreground border-border"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="clocation" className="text-foreground">Preferred Location / Area</Label>
              <Input
                id="clocation"
                placeholder="City or region you're interested in"
                className="bg-muted text-foreground placeholder:text-muted-foreground border-border"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="cmessage" className="text-foreground">Message</Label>
              <Textarea
                id="cmessage"
                placeholder="Tell us about yourself and your interest in franchising..."
                rows={5}
                className="bg-muted text-foreground placeholder:text-muted-foreground border-border"
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
    </section>
  )
}
