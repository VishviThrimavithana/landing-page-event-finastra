"use client"

import { ExternalLink, Calendar, Building2, User, ChevronDown, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

export function SpeakersSection() {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedCards(newExpanded)
  }

  const speakers = [
    {
      name: "Mr. Mohamed Elazzazy",
      title: "Head of IT Governance and Change Management",
      company: "Al-Baraka Bank Egypt",
      session: "Keynote: Digital Transformation in a Gen AI World",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/1s.png",
    },
    {
      name: "Mr. Shehab Moustafa",
      title: "Country Center of Excellence Director",
      company: "Money Fellows",
      session: "The Essential Elements: What do you need to be 'all things to all people'?",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/2s.jpg",
    },
    {
      name: "Mr. Marwan Abouzeid",
      title: "Principal Solutions Consultant & Customer Value Lead, MEA & APAC",
      company: "Finastra",
      session: "Panel: Cost to Serve - Deliver Customer Delight",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/3s.jpg",
    },
    {
      name: "Mr. Karim El Mourabet",
      title: "Solution Consulting Director - MEA",
      company: "Finastra",
      session: "Panel: Customer Retention - Keeping Customers When Loyalty Is Dead",
      color: "from-violet-500 to-purple-600",
      bgColor: "from-violet-50 to-purple-50",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/4s.jpg",
    },
    {
      name: "Ms. Siobhan Byron",
      title: "Executive Vice President, Universal Banking",
      company: "Finastra",
      session: "AI-Powered Risk Management in Modern Banking",
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50 to-blue-50",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/5s.jpg",
    },
    {
      name: "Mr. Narendra Mistry",
      title: "Chief Product and Technology Officer Universal Banking",
      company: "Finastra",
      session: "Building the Bank of Tomorrow: A Digital-First Approach",
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/6s.jpg",
    },
    {
      name: "Mr. Ahmed Hamdy Bahey El Din",
      title: "Head of Information Technology",
      company: "Incolease",
      session: "Mobile Banking Revolution: Lessons from the Field",
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-50",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/7s.png",
    },
    {
      name: "Mr. Emad Shawky Habib Hanna",
      title: "Chief Data and Analytics Officer",
      company: "Banque Misr",
      session: "Predictive Analytics for Customer Experience",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/8s.png",
    },
    {
      name: "Ms. Heba Yehia",
      title: "Head of Digital Products",
      company: "Arab African International Bank",
      session: "Cloud-Native Banking: Scaling for the Future",
      color: "from-indigo-500 to-purple-600",
      bgColor: "from-indigo-50 to-purple-50",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/9s.jpg",
    },
    {
      name: "Mr. Hamid Nirouzad",
      title: "Managing Director - Africa",
      company: "Finastra Universal",
      session: "Collaboration vs Competition: The Fintech Ecosystem",
      color: "from-teal-500 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-50",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/10s.jpg",
    },
    {
      name: "Mr. Rudy Kawmi",
      title: "Managing Director - Middle East, Africa & Asia-Pacific",
      company: "Finastra Universal Banking",
      session: "Blockchain and Cryptocurrency: Banking's New Frontier",
      color: "from-red-500 to-pink-600",
      bgColor: "from-red-50 to-pink-50",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/11s.jpg",
    },
    {
      name: "Mr. Matthew Hughes",
      title: "Head of FS&I, International Markets",
      company: "Atos",
      session: "Personalization at Scale: Data-Driven Banking",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/12s.jpg",
    },
    {
      name: "Mr. Daragh O'Byrne",
      title: "Senior Director, Marketing, Universal Banking",
      company: "Finastra",
      session: "Securing Digital Banking: Threats and Solutions",
      color: "from-slate-500 to-gray-600",
      bgColor: "from-slate-50 to-gray-50",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/13s.JPG",
    },
    {
      name: "Dr. Ismail Ali",
      title: "Co-Founder and CEO",
      company: "CARITech",
      session: "Green Banking: ESG Integration in Financial Services",
      color: "from-lime-500 to-green-600",
      bgColor: "from-lime-50 to-green-50",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/14s.jpg",
    },
    {
      name: "Ms. Riham Muhammad",
      title: "Corporate CEX Senior Analyst",
      company: "FABMISR",
      session: "Islamic Fintech: Innovation Within Tradition",
      color: "from-yellow-500 to-amber-600",
      bgColor: "from-yellow-50 to-amber-50",
      image:
        "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/15s.png",
    },
  ]

  return (
    <section id="speakers" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <User className="w-4 h-4" />
            Featured Speakers
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Industry
            <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent"> Leaders</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Learn from visionary executives and thought leaders who are reshaping the future of banking and financial
            services
          </p>
        </div>

        {/* Speakers grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {speakers.map((speaker, index) => {
            const isExpanded = expandedCards.has(index)
            const parallaxOffset = (scrollY * 0.1 * ((index % 3) + 1)) % 20
            const rotateOffset = (scrollY * 0.02 * (index % 2 === 0 ? 1 : -1)) % 2

            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${speaker.bgColor} rounded-3xl p-4 md:p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 border border-slate-100 hover:border-slate-200 hover:-translate-y-1`}
                style={{
                  transform: `translateY(${parallaxOffset}px) rotate(${rotateOffset}deg)`,
                  transition: "transform 0.1s ease-out, box-shadow 0.5s ease, border-color 0.5s ease",
                }}
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${speaker.color} rounded-t-3xl`} />

                {/* Header with avatar and external link */}
                <div className="flex items-start justify-between mb-3 md:mb-6">
                  <div className="relative">
                    <div className="relative w-10 h-10 md:w-16 md:h-16 rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={speaker.image || "/placeholder.svg"}
                        alt={`${speaker.name} profile`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1 md:p-2 hover:bg-white/50 rounded-xl">
                    <ExternalLink className="w-3 h-3 md:w-5 md:h-5 text-slate-400 hover:text-slate-600" />
                  </button>
                </div>

                {/* Speaker info */}
                <div className="space-y-2 md:space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="text-sm md:text-2xl font-bold text-slate-900 mb-1 md:mb-2 group-hover:text-slate-700 transition-colors leading-tight">
                      {speaker.name}
                    </h3>

                    <div className="md:hidden">
                      <p className="text-slate-500 font-medium text-xs">{speaker.company}</p>
                    </div>

                    <div className="hidden md:block">
                      <div className="flex items-start gap-2 text-slate-600 mb-1 md:mb-2">
                        <Building2 className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0" />
                        <span className="font-medium text-sm md:text-base leading-tight">{speaker.title}</span>
                      </div>
                      <p className="text-slate-500 font-medium text-sm md:text-base">{speaker.company}</p>
                    </div>
                  </div>

                  <div className="md:hidden">
                    {isExpanded && (
                      <div className="space-y-2 animate-in slide-in-from-top-2 duration-300">
                        <div className="flex items-start gap-2 text-slate-600 justify-center">
                          <Building2 className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span className="font-medium text-xs leading-tight text-center">{speaker.title}</span>
                        </div>

                        <div className="pt-2 border-t border-slate-100">
                          <div className="flex items-start gap-2 justify-center">
                            <Calendar className="w-3 h-3 text-slate-400 mt-0.5 flex-shrink-0" />
                            <div className="text-center">
                              <p className="text-xs font-medium text-slate-500 mb-1">Session</p>
                              <p className="text-slate-700 leading-tight font-medium text-xs">{speaker.session}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-center">
                      <button
                        onClick={() => toggleCard(index)}
                        className="flex items-center gap-1 text-slate-500 hover:text-slate-700 text-xs font-medium mt-2 transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            Show less <ChevronUp className="w-3 h-3" />
                          </>
                        ) : (
                          <>
                            Read more <ChevronDown className="w-3 h-3" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="hidden md:block pt-4 md:pt-6 border-t border-slate-100">
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="flex-shrink-0 mt-0.5 md:mt-1">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4 text-slate-400" />
                      </div>
                      <div>
                        <p className="text-xs md:text-sm font-medium text-slate-500 mb-1">Speaking Session</p>
                        <p className="text-slate-700 leading-tight md:leading-relaxed font-medium text-sm md:text-base">
                          {speaker.session}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            )
          })}
        </div>

        {/* Call to action */}
        {/* <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/25 hover:-translate-y-0.5">
            View All Speakers
            <ExternalLink className="w-4 h-4" />
          </button>
        </div> */}
      </div>
    </section>
  )
}
