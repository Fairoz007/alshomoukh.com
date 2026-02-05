"use client"

import { useEffect, useState } from "react"
import { GraduationCap } from "lucide-react"

export function GooLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 300)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-primary">
      {/* SVG Filter for Goo Effect */}
      <svg className="absolute" style={{ width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="relative flex flex-col items-center">
        {/* Goo Bubbles */}
        <div className="relative" style={{ filter: "url(#goo)" }}>
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Center blob */}
            <div className="absolute w-20 h-20 rounded-full bg-white/90 animate-pulse" />
            
            {/* Orbiting blobs */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="absolute w-8 h-8 rounded-full bg-secondary"
                style={{
                  animationName: "orbit",
                  animationDuration: "2s",
                  animationTimingFunction: "ease-in-out",
                  animationIterationCount: "infinite",
                  animationDelay: `${i * 0.3}s`,
                  transformOrigin: "center",
                }}
              />
            ))}
            
            {/* Logo in center */}
            <div className="absolute z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary">
              <GraduationCap className="h-8 w-8" />
            </div>
          </div>
        </div>

        {/* School Name */}
        <div className="mt-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-white tracking-wide">
            AL SHOMOUKH
          </h2>
          <p className="text-white/80 text-sm mt-1">International School</p>
        </div>

        {/* Progress Bar */}
        <div className="mt-6 w-48 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-secondary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        
        <p className="mt-3 text-white/60 text-sm">Loading excellence...</p>
      </div>

      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(45px) rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) translateX(45px) rotate(-180deg) scale(1.3);
          }
          100% {
            transform: rotate(360deg) translateX(45px) rotate(-360deg) scale(1);
          }
        }
      `}</style>
    </div>
  )
}
