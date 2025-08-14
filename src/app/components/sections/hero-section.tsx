"use client"

import { Button } from "../ui/button"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ShinyText } from "../ui/ShinyText"
import Head from "next/head"


export function MinimalHeroSection() {
  // const imageUrl = "https://cogentsolutions.ae/events/upcoming-physical-events/reimagine-banking-finastra/asset/images/Finastra-UB-Egypt-Event-Overview%20SMALL.jpg"

  return (
       <>
      <Head>
        <link
          rel="preload"
          href="/images/hero.jpg"
          as="image"
          imageSrcSet="
            /images/hero.jpg 1x,
            /images/hero@2x.jpg 2x
          "
        />
      </Head>

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
 <Image
            src="/images/hero.jpg"
            alt="Finastra UB Egypt Event"
            fill
            className="object-cover rounded-[20px]"
            priority
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-[20px]" />

        {/* Glass */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 backdrop-blur-[1px] rounded-[20px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 md:p-12 text-center shadow-2xl mt-8 md:mt-0">

          <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/20 border border-white/30 mb-8 md:mb-12 backdrop-blur-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
            <span className="text-white font-tauri font-medium text-sm">April 9, 2025 • Cairo, Egypt</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-tauri font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-lg">
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

         <p className="text-xl font-tauri md:text-2xl text-white/95 mb-16 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
  Adapt. Evolve. Thrive.
  <br />
  Join industry leaders at Finastra&apos;s Universal Banking Forum
</p>


          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16">
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-600/90 hover:bg-purple-700 font-tauri backdrop-blur-sm text-white px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-xl"
              asChild
            >
              <Link href="/register">
                <span className="flex items-center gap-2">
                  Register Now
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/50 hover:border-white/70 font-tauri text-white hover:text-white px-8 py-6 text-lg font-medium rounded-lg transition-all duration-300 bg-white/15 backdrop-blur-md hover:bg-white/25 shadow-xl"
              asChild
            >
              <Link href="#agenda">View Agenda</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
     </>
  )
}