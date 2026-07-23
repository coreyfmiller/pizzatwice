import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FranchiseEdgeSection } from "@/components/franchise-edge-section"
import { LocationsSection } from "@/components/locations-section"
import { ReviewsSection } from "@/components/reviews-section"
import { CustomerFaq } from "@/components/customer-faq"
import { FranchiseSection } from "@/components/franchise-section"
import { Footer } from "@/components/footer"
import { MobileCallBar } from "@/components/mobile-call-bar"
import { Chatbot } from "@/components/chatbot"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LocationsSection />
        <ReviewsSection />
        <CustomerFaq />
        <FranchiseEdgeSection />
        <FranchiseSection />
      </main>
      <Footer />
      <MobileCallBar />
      <Chatbot />
    </>
  )
}
