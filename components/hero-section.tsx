"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FloatingElements } from "@/components/floating-elements"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image with parallax effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-students.jpg"
          alt="Happy students at Al Shomoukh International School"
          fill
          className="object-cover object-center scale-105 transition-transform duration-[2s]"
          style={{ transform: isVisible ? "scale(1)" : "scale(1.1)" }}
          priority
        />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          style={{
            animationName: "pulse",
            animationDuration: "8s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl"
          style={{
            animationName: "pulse",
            animationDuration: "10s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDirection: "reverse",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-2xl">
          <h1
            className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl text-balance"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            Inspiring Excellence,
            <br />
            <span className="text-white">Shaping the Future</span>
          </h1>
          <p
            className="mt-6 text-lg text-white/90 md:text-xl max-w-lg leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
            }}
          >
            A Premier International School for Holistic Education
          </p>
          <div
            className="mt-8 flex flex-wrap gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s",
            }}
          >
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full px-8 text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-full px-8 text-base backdrop-blur-sm hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            className="fill-background"
            style={{
              animationName: "wave",
              animationDuration: "8s",
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            }}
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes wave {
          0%, 100% { d: path("M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"); }
          50% { d: path("M0,60 C240,0 480,120 720,60 C960,0 1200,120 1440,60 L1440,120 L0,120 Z"); }
        }
      `}</style>
    </section>
  )
}
