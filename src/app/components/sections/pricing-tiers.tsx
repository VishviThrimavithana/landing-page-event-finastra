import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Check, Star } from "lucide-react"

interface PricingTier {
  name: string
  price: string
  originalPrice?: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

const pricingTiers: PricingTier[] = [
  {
    name: "Early Bird",
    price: "$1,299",
    originalPrice: "$1,599",
    description: "Perfect for individual professionals looking to expand their knowledge",
    features: [
      "Access to all sessions and workshops",
      "Welcome reception and networking breaks",
      "Digital conference materials",
      "Certificate of attendance",
      "Access to session recordings (30 days)",
    ],
    cta: "Register Early Bird",
  },
  {
    name: "Standard",
    price: "$1,599",
    description: "Comprehensive conference experience with additional networking opportunities",
    features: [
      "Everything in Early Bird",
      "VIP networking lunch",
      "Priority seating",
      "Conference mobile app",
      "Access to speaker meet & greets",
      "Printed conference materials",
    ],
    popular: true,
    cta: "Register Standard",
  },
  {
    name: "VIP",
    price: "$2,299",
    description: "Premium experience with exclusive access and personalized service",
    features: [
      "Everything in Standard",
      "Exclusive VIP lounge access",
      "Private dinner with keynote speakers",
      "One-on-one meeting opportunities",
      "Dedicated concierge service",
      "Premium welcome gift",
      "Access to session recordings (1 year)",
      "Post-event consultation session",
    ],
    cta: "Register VIP",
  },
]

export function PricingTiers() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Conference Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Choose Your Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select the package that best fits your professional development needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative group hover:shadow-lg transition-all duration-300 ${
                tier.popular ? "border-accent shadow-lg scale-105" : "hover:-translate-y-1"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <div className="mt-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl font-bold text-accent">{tier.price}</span>
                    {tier.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">{tier.originalPrice}</span>
                    )}
                  </div>
                  {tier.originalPrice && (
                    <Badge variant="destructive" className="mt-2">
                      Save ${Number.parseInt(tier.originalPrice.slice(1)) - Number.parseInt(tier.price.slice(1))}
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground mt-4">{tier.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    tier.popular
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                  size="lg"
                >
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            Group discounts available for 5+ attendees. Contact us for corporate packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">Group Discounts</Button>
            <Button variant="outline">Corporate Packages</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
