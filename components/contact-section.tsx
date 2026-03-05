"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactInfo = [
  {
    icon: MapPin,
    label: "Head Office",
    value: "456 Queen St, Fredericton, NB E3B 1B6",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(506) 555-0100",
    href: "tel:+15065550100",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@pizzatwice.ca",
    href: "mailto:info@pizzatwice.ca",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Reach Out
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Get in Touch
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-xl font-bold text-foreground">
              Contact Information
            </h3>
            <div className="flex flex-col gap-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-border bg-card p-6">
              <h4 className="mb-2 font-bold text-card-foreground">Office Hours</h4>
              <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          <form
            className="rounded-lg border border-border bg-card p-6 lg:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="mb-6 text-xl font-bold text-card-foreground">
              Send a Message
            </h3>
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
                <Label htmlFor="csubject" className="text-foreground">Subject</Label>
                <Input
                  id="csubject"
                  placeholder="How can we help?"
                  className="bg-muted text-foreground placeholder:text-muted-foreground border-border"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="cmessage" className="text-foreground">Message</Label>
                <Textarea
                  id="cmessage"
                  placeholder="Your message..."
                  rows={5}
                  className="bg-muted text-foreground placeholder:text-muted-foreground border-border"
                />
              </div>
              <Button
                type="submit"
                className="h-11 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
