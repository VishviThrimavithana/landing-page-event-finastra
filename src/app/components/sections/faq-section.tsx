"use client"

import { useState } from "react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

const faqs: FAQ[] = [
  {
    id: "1",
    question: "What is included in my conference registration?",
    answer:
      "Your registration includes access to all keynote sessions, workshops, networking events, conference materials, welcome reception, coffee breaks, and lunch. VIP packages include additional perks like exclusive dinners and one-on-one meetings.",
    category: "Registration",
  },
  {
    id: "2",
    question: "Can I get a refund if I can't attend?",
    answer:
      "Yes, we offer full refunds up to 30 days before the event, 50% refunds up to 14 days before, and no refunds within 14 days of the event. However, you can transfer your registration to a colleague at no additional cost.",
    category: "Registration",
  },
  {
    id: "3",
    question: "Will sessions be recorded?",
    answer:
      "Yes, all main sessions will be recorded and made available to registered attendees. Early Bird and Standard ticket holders get 30-day access, while VIP ticket holders get 1-year access to all recordings.",
    category: "Content",
  },
  {
    id: "4",
    question: "What COVID-19 safety measures are in place?",
    answer:
      "We follow all local health guidelines and venue protocols. Hand sanitizing stations are available throughout the venue, and we maintain appropriate spacing in all session rooms. Masks are optional but available upon request.",
    category: "Safety",
  },
  {
    id: "5",
    question: "Is there a mobile app for the conference?",
    answer:
      "Yes, we provide a comprehensive mobile app that includes the full agenda, speaker profiles, networking features, venue maps, and real-time updates. The app is available for both iOS and Android devices.",
    category: "Technology",
  },
  {
    id: "6",
    question: "What networking opportunities are available?",
    answer:
      "The conference offers multiple networking opportunities including welcome reception, coffee breaks, networking lunches, evening social events, and dedicated networking sessions. VIP attendees also get access to exclusive networking dinners.",
    category: "Networking",
  },
  {
    id: "7",
    question: "Are there group discounts available?",
    answer:
      "Yes, we offer group discounts for organizations sending 5 or more attendees. Contact our team for custom corporate packages that can include additional benefits like private meeting rooms and branded materials.",
    category: "Pricing",
  },
  {
    id: "8",
    question: "What is the dress code for the conference?",
    answer:
      "The dress code is business professional. Most attendees wear business suits or equivalent professional attire. The evening networking events maintain the same professional dress code.",
    category: "General",
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)))

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Got Questions?</h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about the conference, registration, and logistics
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <Collapsible key={faq.id} open={openItems.includes(faq.id)} onOpenChange={() => toggleItem(faq.id)}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full justify-between p-6 h-auto text-left hover:bg-muted/50 border border-border rounded-lg"
                >
                  <div className="flex items-start gap-4">
                    <Badge variant="secondary" className="text-xs">
                      {faq.category}
                    </Badge>
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </div>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6">
                <p className="text-muted-foreground leading-relaxed ml-20">{faq.answer}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">Contact Support</Button>
            <Button className="bg-accent hover:bg-accent/90">Schedule a Call</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
