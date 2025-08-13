import { Button } from "./ui/button"
import { Separator } from "@radix-ui/react-separator"
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Facebook } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Conference: [
      { label: "About", href: "#overview" },
      { label: "Agenda", href: "#agenda" },
      { label: "Speakers", href: "#speakers" },
      { label: "Venue", href: "#venue" },
    ],
    Registration: [
      { label: "Pricing", href: "#pricing" },
      { label: "Group Discounts", href: "#" },
      { label: "Corporate Packages", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
    Support: [
      { label: "FAQ", href: "#faq" },
      { label: "Contact Us", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
    Company: [
      { label: "About Finastra", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Finastra</h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Join us for the premier banking technology conference in Dubai. Connect with industry leaders, discover
                innovative solutions, and transform your banking strategy.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-sm">conference@finastra.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-sm">+971 4 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm">Dubai World Trade Centre, UAE</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <p className="text-sm text-primary-foreground/80">© 2024 Finastra. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  className="p-2 text-primary-foreground/80 hover:text-accent hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="text-center">
            <h4 className="font-semibold mb-2">Stay Updated</h4>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Get the latest updates about the conference and future events
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
