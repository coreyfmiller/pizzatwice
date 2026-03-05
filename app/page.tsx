import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FranchiseEdgeSection } from "@/components/franchise-edge-section"
import { AboutSection } from "@/components/about-section"
import { LocationsSection } from "@/components/locations-section"
import { FranchiseSection } from "@/components/franchise-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LocationsSection />
        <AboutSection />
        <FranchiseEdgeSection />
        <FranchiseSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
