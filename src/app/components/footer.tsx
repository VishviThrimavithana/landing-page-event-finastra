import { Button } from "./ui/button"
import { Separator } from "@radix-ui/react-separator"
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Facebook, ExternalLink } from "lucide-react"

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
      { label: "About Cogent Solutions", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-400" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-blue-500" },
  ]

  const offices = [
    {
      region: "Middle East & Africa HQ",
      address: "Office No: 209, The Metropolis Tower, Business Bay, Dubai, UAE",
    },
    {
      region: "Asia Pacific HQ",
      address: "2nd floor Green Lanka Tower, Colombo, Sri Lanka",
    },
    {
      region: "Saudi Arabia HQ",
      address: "Riyadh, Saudi Arabia",
    },
  ]

  return (
    <footer className="bg-slate-900 text-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  Cogent Solutions™
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed text-sm">
                Through our conferences we transform your business challenges into opportunities. Our clients and
                customers are leading government entities and the fortune 500 companies.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-200">Email</p>
                    <a
                      href="mailto:partnerships@cogentsolutions.ae"
                      className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      partnerships@cogentsolutions.ae
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-200">Phone</p>
                    <div className="text-sm text-slate-300 space-y-1">
                      <a href="tel:+97145761039" className="block hover:text-green-400 transition-colors">
                        +971 4 576 1039
                      </a>
                      <a href="tel:+971506435244" className="block hover:text-green-400 transition-colors">
                        +971 50 643 5244
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-medium text-slate-200 mb-4">Follow Us</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="sm"
                      className={`p-2 border-slate-600 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:border-slate-500 ${social.color} transition-all duration-200`}
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

            {/* Footer Links*/}
            <div className="lg:col-span-3 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-semibold text-slate-100 mb-4 text-sm uppercase tracking-wider">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-1 group"
                        >
                          {link.label}
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Office Locations */}
            <div className="lg:col-span-1">
              <h4 className="font-semibold text-slate-100 mb-4 text-sm uppercase tracking-wider">Our Offices</h4>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <p className="text-xs font-medium text-slate-200 leading-tight">{office.region}</p>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed ml-6">{office.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-700" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <p className="text-sm text-slate-400">
                © 2025 Cogent Solutions Event Management LLC. All Rights Reserved
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-xs text-slate-500">Powered by</p>
              <div className="text-xs font-medium text-slate-300">Cogent Solutions™</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
