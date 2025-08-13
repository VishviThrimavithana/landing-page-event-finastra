import { Button } from "../ui/button"
import { ArrowRight, CheckCircle, MapPin, Calendar, Clock } from "lucide-react"
import Link from "next/link"

export function RegistrationSection() {
  const benefits = [
    "Learn from industry experts",
    "Stay ahead of emerging trends",
    "Connect with fellow banking professionals",
    "Enhance your knowledge, skills, and network",
    "Share your expertise and experience with peers",
  ]

  return (
    <section id="register" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Registration info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Register Now</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Don't miss this opportunity to enhance your knowledge, skills, and network in the finance and banking
              sector. Secure your place at this must-attend event!
            </p>

            {/* Event details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">April 9th, 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">9:30 AM - 2:00 PM GMT+2</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-500" />
                <span className="text-gray-700">The Nile Ritz-Carlton, Cairo, Egypt</span>
              </div>
            </div>

            {/* Benefits list */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Reasons to Attend:</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Join us for an unforgettable experience
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>

            <p className="text-sm text-gray-500 mt-4">
              By registering, you agree to{" "}
              <Link href="/privacy-policy" className="text-purple-600 hover:underline">
                Cogent Solutions Privacy Policy
              </Link>
            </p>
          </div>

          {/* Right column - About Finastra */}
          <div className="bg-white rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">About Finastra</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Finastra is a global provider of financial services software applications across Lending, Payments,
              Treasury and Capital Markets, and Universal (retail and digital) Banking.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Committed to unlocking the potential of people, businesses and communities everywhere, its vision is to
              accelerate the future of Open Finance through technology and collaboration.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Trusted by ~8,100 financial institutions, including 45 of the world's top 50 banks.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <Link
                href="https://www.finastra.com"
                className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2"
              >
                Learn more about Finastra
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
