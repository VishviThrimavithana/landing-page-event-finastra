"use client"

import { Button } from "../ui/button"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ShinyText } from "../ui/ShinyText"


export function MinimalHeroSection() {
  // const imageUrl = "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/Finastra-UB-Egypt-Event-Overview%20SMALL.jpg"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Using regular img tag for external URL without Next.js optimization */}
        <img
          // src={imageUrl}
           src="/images/hero.jpg"
          alt="Finastra UB Egypt Event"
          className="w-full h-full object-cover rounded-[20px]"
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 rounded-[20px]" />
        
        {/* Glass morphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 backdrop-blur-[1px] rounded-[20px]" />
      </div>

      {/* Main content with glass container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Glass container for main content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-12 text-center shadow-2xl">
          {/* Subtle purple accent elements */}
          <div className="absolute top-20 right-20 w-2 h-32 bg-purple-500 opacity-20 rounded-full" />
          <div className="absolute bottom-40 left-16 w-1 h-24 bg-purple-400 opacity-30 rounded-full" />

          {/* Event badge */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/20 border border-white/30 mb-12 backdrop-blur-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
            <span className="text-white font-medium text-sm">April 9, 2025 • Cairo, Egypt</span>
          </div>

          {/* Main headline */}
  <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
        <ShinyText 
          text="Reimagine" 
          className="text-white"
          speed={3}
        />
        <br />
        <ShinyText 
          text="Banking" 
          className="text-purple-200" 
          speed={3.5}
        />
      </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/95 mb-16 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Adapt. Evolve. Thrive.
            <br />
            Join industry leaders at Finastra's Universal Banking Forum
          </p>

          {/* Event details */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <div className="flex items-center gap-3 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Calendar className="w-5 h-5 text-purple-200" />
              <span className="font-medium">9:30 AM - 2:00 PM GMT+2</span>
            </div>
            <div className="flex items-center gap-3 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <MapPin className="w-5 h-5 text-purple-200" />
              <span className="font-medium">The Nile Ritz-Carlton, Cairo</span>
            </div>
            <div className="flex items-center gap-3 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <Clock className="w-5 h-5 text-purple-200" />
              <span className="font-medium">Free Event</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-600/90 hover:bg-purple-700 backdrop-blur-sm text-white px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-xl"
              asChild
            >
              <Link href="#register">
                <span className="flex items-center gap-2">
                 <Link href="/register">Register Now</Link>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/50 hover:border-white/70 text-white hover:text-white px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 bg-white/15 backdrop-blur-md hover:bg-white/25 shadow-xl"
              asChild
            >
              <Link href="#agenda">View Agenda</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}