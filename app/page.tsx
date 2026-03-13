import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { ProblemSection } from "@/components/problem-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { AboutSection } from "@/components/about-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { FooterSection } from "@/components/footer-section"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />

        <AnimateOnScroll>
          <SocialProofSection />
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div id="problemi">
            <ProblemSection />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div id="services" className="scroll-mt-24 md:scroll-mt-32">
            <ServicesSection />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div id="proces">
            <ProcessSection />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div id="about" className="scroll-mt-24 md:scroll-mt-32">
            <AboutSection />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div id="faq" className="scroll-mt-24 md:scroll-mt-32">
            <FaqSection />
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div id="contact" className="scroll-mt-24 md:scroll-mt-32">
            <ContactSection />
          </div>
        </AnimateOnScroll>
      </main>

      <FooterSection />
    </>
  )
}
