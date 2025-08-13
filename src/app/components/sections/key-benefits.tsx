import { Badge } from "../ui/badge"
import { CheckCircle } from "lucide-react"

export function KeyBenefits() {
  const benefits = [
    "Network with 500+ banking executives and technology leaders",
    "Discover cutting-edge technologies and their practical applications",
    "Gain insights from 50+ industry experts and thought leaders",
    "Access exclusive case studies from successful digital transformations",
    "Participate in hands-on workshops and interactive sessions",
    "Connect with solution providers and potential partners",
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="outline" className="mb-4">
              Key Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Attend This Conference?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join the most influential gathering of banking professionals and technology innovators in the Middle East
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Dubai Banking Conference"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-background border border-border rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Attendees</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-background border border-border rounded-lg p-4 shadow-lg">
              <div className="text-2xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted-foreground">Speakers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
