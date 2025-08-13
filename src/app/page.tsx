import { Navigation } from "./components/navigation"
import { MinimalHeroSection } from "./components/sections/hero-section"
import { EventOverview } from "./components/sections/event-overview"
import { KeyBenefits } from "./components/sections/key-benefits"
import { AgendaSection } from "./components/sections/agenda-timeline"
import { SpeakersSection } from "./components/sections/speaker-profiles"
import { RegistrationSection } from "./components/sections/venue-information"
import { PricingTiers } from "./components/sections/pricing-tiers"
import { Testimonials } from "./components/sections/testimonials"
import { FAQSection } from "./components/sections/faq-section"
import { Footer } from "./components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
        <MinimalHeroSection />
      <EventOverview />
      {/* <KeyBenefits /> */}
       <SpeakersSection />
       <AgendaSection />
       <RegistrationSection />
      {/* <PricingTiers /> */}
      {/* <Testimonials /> */}
      {/* <FAQSection /> */}
      <Footer />
    </main>
  )
}
