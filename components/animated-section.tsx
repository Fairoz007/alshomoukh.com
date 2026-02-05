"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "scale"
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(40px)"
      case "down":
        return "translateY(-40px)"
      case "left":
        return "translateX(40px)"
      case "right":
        return "translateX(-40px)"
      case "scale":
        return "scale(0.9)"
      default:
        return "translateY(40px)"
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) translateX(0) scale(1)" : getInitialTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: "0.6s",
        transitionTimingFunction: "ease-out",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
