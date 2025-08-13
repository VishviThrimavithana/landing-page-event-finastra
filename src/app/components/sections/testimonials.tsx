import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Star, Quote } from "lucide-react"

interface Testimonial {
  id: string
  name: string
  title: string
  company: string
  content: string
  rating: number
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alexandra Smith",
    title: "Chief Technology Officer",
    company: "Metropolitan Bank",
    content:
      "The insights I gained from this conference were invaluable. The networking opportunities alone made it worth attending, and the speakers provided actionable strategies I implemented immediately.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "2",
    name: "Roberto Martinez",
    title: "Head of Digital Innovation",
    company: "Future Finance Corp",
    content:
      "Outstanding event with world-class speakers. The agenda was perfectly curated, and I left with concrete plans for our digital transformation initiative. Highly recommend to any banking professional.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "3",
    name: "Dr. Priya Patel",
    title: "VP of Risk Management",
    company: "Global Trust Bank",
    content:
      "The AI and risk management sessions were particularly enlightening. The practical case studies and hands-on workshops provided real value that I could apply to our operations immediately.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "4",
    name: "Marcus Johnson",
    title: "Director of Compliance",
    company: "Secure Banking Solutions",
    content:
      "Excellent conference with a perfect blend of technical depth and strategic insights. The regulatory technology sessions were exactly what our team needed to stay ahead of compliance challenges.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "5",
    name: "Sophie Chen",
    title: "Chief Customer Officer",
    company: "Digital First Bank",
    content:
      "The customer experience track was phenomenal. I connected with like-minded professionals and learned innovative approaches to enhance our digital banking services. Will definitely attend next year.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "6",
    name: "Ahmed Al-Rashid",
    title: "Head of Innovation",
    company: "Emirates Banking Group",
    content:
      "Being in Dubai for this conference was perfect. The local insights combined with global perspectives created a unique learning environment. The blockchain sessions were particularly valuable.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">What Attendees Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from banking professionals who transformed their careers and organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-accent/20" />
                  <p className="text-muted-foreground leading-relaxed pl-6">{testimonial.content}</p>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-accent">{testimonial.title}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-background border border-border rounded-lg p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">4.9</div>
              <div className="flex items-center gap-1 justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Happy Attendees</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
