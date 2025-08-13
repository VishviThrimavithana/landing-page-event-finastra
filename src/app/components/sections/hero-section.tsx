"use client"

import { Button } from "../ui/button"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export function MinimalHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle purple accent elements */}
      <div className="absolute top-20 right-20 w-2 h-32 bg-purple-500 opacity-20 rounded-full" />
      <div className="absolute bottom-40 left-16 w-1 h-24 bg-purple-400 opacity-30 rounded-full" />

      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Event badge */}
        <div className="inline-flex items-center px-6 py-2 rounded-full bg-gray-100 border border-gray-200 mb-12">
          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
          <span className="text-gray-700 font-medium text-sm">April 9, 2025 • Cairo, Egypt</span>
        </div>

        {/* Main headline */}
        <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
          Reimagine
          <br />
          <span className="text-purple-600">Banking</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed">
          Adapt. Evolve. Thrive.
          <br />
          Join industry leaders at Finastra's Universal Banking Forum
        </p>

        {/* Event details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <div className="flex items-center gap-3 text-gray-700">
            <Calendar className="w-5 h-5 text-purple-500" />
            <span className="font-medium">9:30 AM - 2:00 PM GMT+2</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="w-5 h-5 text-purple-500" />
            <span className="font-medium">The Nile Ritz-Carlton, Cairo</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Clock className="w-5 h-5 text-purple-500" />
            <span className="font-medium">Free Event</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link href="#register">
              <span className="flex items-center gap-2">
                Register Now
                <ArrowRight className="w-5 h-5" />
              </span>
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-gray-300 hover:border-purple-500 text-gray-700 hover:text-purple-600 px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 bg-transparent"
            asChild
          >
            <Link href="#agenda">View Agenda</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
