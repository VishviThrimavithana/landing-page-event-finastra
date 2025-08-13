import { Button } from "../ui/button"
import { ArrowRight, CheckCircle, MapPin, Calendar, Clock, Sparkles } from "lucide-react"
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
    <section id="register" className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-400/5 rounded-full blur-2xl"></div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Registration info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-purple-300" />
              <span className="text-purple-300 font-medium tracking-wider uppercase text-sm">Exclusive Event</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Register Now
              <div className="h-1 w-24 bg-gradient-to-r from-purple-300 to-purple-500 mt-4 rounded-full"></div>
            </h2>
            
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Don't miss this opportunity to enhance your knowledge, skills, and network in the finance and banking
              sector. Secure your place at this must-attend event!
            </p>

            {/* Event details */}
            <div className="space-y-4 mb-8 bg-purple-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-600/20">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-600/30 rounded-lg">
                  <Calendar className="w-5 h-5 text-purple-200" />
                </div>
                <span className="text-white font-medium">April 9th, 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-600/30 rounded-lg">
                  <Clock className="w-5 h-5 text-purple-200" />
                </div>
                <span className="text-white font-medium">9:30 AM - 2:00 PM GMT+2</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-600/30 rounded-lg">
                  <MapPin className="w-5 h-5 text-purple-200" />
                </div>
                <span className="text-white font-medium">The Nile Ritz-Carlton, Cairo, Egypt</span>
              </div>
            </div>

            {/* Benefits list */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                Top Reasons to Attend:
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-transform duration-200">
                    <CheckCircle className="w-5 h-5 text-purple-300 mt-0.5 flex-shrink-0 group-hover:text-purple-200 transition-colors" />
                    <span className="text-purple-100 group-hover:text-white transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-400 hover:to-purple-300 text-white px-8 py-6 text-lg font-medium rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-purple-500/25 border border-purple-400/20"
            >
              <span className="flex items-center gap-2">
                Join us for an unforgettable experience
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>

            <p className="text-sm text-purple-200 mt-4">
              By registering, you agree to{" "}
              <Link href="/privacy-policy" className="text-purple-300 hover:text-white transition-colors underline decoration-purple-300">
                Cogent Solutions Privacy Policy
              </Link>
            </p>
          </div>

          {/* Right column - About Finastra */}
          <div className="bg-gradient-to-br from-purple-800/40 to-purple-900/40 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-purple-600/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6">About Finastra</h3>
            <p className="text-purple-100 leading-relaxed mb-6">
              Finastra is a global provider of financial services software applications across Lending, Payments,
              Treasury and Capital Markets, and Universal (retail and digital) Banking.
            </p>
            <p className="text-purple-100 leading-relaxed mb-6">
              Committed to unlocking the potential of people, businesses and communities everywhere, its vision is to
              accelerate the future of Open Finance through technology and collaboration.
            </p>
            <p className="text-purple-100 leading-relaxed">
              Trusted by ~8,100 financial institutions, including 45 of the world's top 50 banks.
            </p>

            <div className="mt-8 pt-6 border-t border-purple-600/30">
              <Link
                href="https://www.finastra.com"
                className="text-purple-300 hover:text-white font-medium flex items-center gap-2 group transition-colors"
              >
                Learn more about Finastra
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}