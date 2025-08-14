import { Navigation } from "./components/navigation"
import { MinimalHeroSection } from "./components/sections/hero-section"
import { EventOverview } from "./components/sections/event-overview"
import { AgendaSection } from "./components/sections/agenda-timeline"
import { SpeakersSection } from "./components/sections/speaker-profiles"
import { RegistrationSection } from "./components/sections/venue-information"
import { Footer } from "./components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
        <MinimalHeroSection />
      <EventOverview />
       <SpeakersSection />
       <AgendaSection />
       <RegistrationSection />
      <Footer />
    </main>
  )
}
