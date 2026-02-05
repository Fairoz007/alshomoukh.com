'use client';

import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { Sparkles } from "lucide-react"

// Pre-computed particle positions to avoid hydration mismatch
const particles = [
  { left: 5, top: 10, duration: 3.2, delay: 0.1 },
  { left: 15, top: 30, duration: 4.5, delay: 0.5 },
  { left: 25, top: 15, duration: 3.8, delay: 1.2 },
  { left: 35, top: 45, duration: 5.1, delay: 0.3 },
  { left: 45, top: 20, duration: 4.2, delay: 1.8 },
  { left: 55, top: 60, duration: 3.5, delay: 0.7 },
  { left: 65, top: 35, duration: 4.8, delay: 1.4 },
  { left: 75, top: 50, duration: 3.9, delay: 0.9 },
  { left: 85, top: 25, duration: 5.3, delay: 1.6 },
  { left: 95, top: 70, duration: 4.1, delay: 0.2 },
  { left: 10, top: 55, duration: 3.6, delay: 1.1 },
  { left: 20, top: 75, duration: 4.4, delay: 0.6 },
  { left: 30, top: 40, duration: 5.0, delay: 1.9 },
  { left: 40, top: 65, duration: 3.3, delay: 0.4 },
  { left: 50, top: 80, duration: 4.7, delay: 1.3 },
  { left: 60, top: 12, duration: 3.7, delay: 0.8 },
  { left: 70, top: 85, duration: 5.2, delay: 1.5 },
  { left: 80, top: 42, duration: 4.0, delay: 1.0 },
  { left: 90, top: 58, duration: 3.4, delay: 1.7 },
  { left: 8, top: 88, duration: 4.6, delay: 0.0 },
]

export function CTASection() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationName: "float",
              animationDuration: `${particle.duration}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
      
      {/* Wave decoration at top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background">
        <svg
          className="absolute bottom-0 w-full h-16 text-primary"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 22L60 16.7C120 11 240 1 360 0.3C480 0 600 8 720 16.7C840 26 960 36 1080 38.3C1200 41 1320 35 1380 32.7L1440 30V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z" />
        </svg>
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
          <AnimatedSection direction="left">
            <div className="text-center md:text-left">
              <h2 className="font-heading text-2xl font-bold text-white md:text-3xl lg:text-4xl text-balance">
                Ready to Give Your Child the Best Education?
              </h2>
              <p className="mt-3 text-white/90 text-lg max-w-xl">
                Enroll your child to Al Shomoukh International School today!
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={200}>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full px-8 text-base shrink-0 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
              Enroll Now
            </Button>
          </AnimatedSection>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.6; }
        }
      `}</style>
    </section>
  )
}
