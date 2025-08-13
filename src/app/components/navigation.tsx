"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#overview", label: "Overview" },
    { href: "#agenda", label: "Agenda" },
    { href: "#speakers", label: "Speakers" },
    { href: "#venue", label: "Venue" },
    { href: "#pricing", label: "Pricing" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-purple-900/20 backdrop-blur-xl border-b border-purple-500/30 shadow-lg shadow-purple-900/10" 
          : "bg-purple-800/10 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white drop-shadow-lg">
              Finastra
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/90 hover:text-white transition-all duration-200 font-medium hover:drop-shadow-lg relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-300 after:transition-all after:duration-200 hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button size="sm" className="bg-purple-600/90 hover:bg-purple-500 text-white border border-purple-400/50 backdrop-blur-sm shadow-lg shadow-purple-900/20" asChild>
              <Link href="/register">Register Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-purple-600/30 hover:text-white"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-purple-900/30 backdrop-blur-xl border-b border-purple-500/30 shadow-lg shadow-purple-900/20">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-white/90 hover:text-white hover:bg-purple-600/20 rounded-md transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button size="sm" className="bg-purple-600/90 hover:bg-purple-500 text-white border border-purple-400/50 backdrop-blur-sm shadow-lg shadow-purple-900/20" asChild>
                  <Link href="/register">Register Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}