import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FranchiseEdgeSection } from "@/components/franchise-edge-section"
import { LocationsSection } from "@/components/locations-section"
import { CustomerFaq } from "@/components/customer-faq"
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
        <CustomerFaq />
        <FranchiseEdgeSection />
        <FranchiseSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
