import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { LogoMarquee } from "@/components/logo-marquee"
import { StickyStages } from "@/components/sticky-stages"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <StickyStages />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}
