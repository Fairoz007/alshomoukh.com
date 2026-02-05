"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ExploreSection } from "@/components/explore-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ProgramsSection } from "@/components/programs-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { GooLoader } from "@/components/goo-loader"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => setIsLoaded(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <GooLoader />
      <div
        className={`min-h-screen flex flex-col transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ExploreSection />
          <WhyChooseSection />
          <ProgramsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  )
}
