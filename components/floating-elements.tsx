'use client';

import { BookOpen, Pencil, GraduationCap, Star, Globe, Calculator } from "lucide-react"

const floatingItems = [
  { Icon: BookOpen, size: 24, delay: 0, duration: 4, left: 10, top: 20 },
  { Icon: Pencil, size: 20, delay: 1, duration: 5, left: 25, top: 40 },
  { Icon: GraduationCap, size: 28, delay: 2, duration: 4.5, left: 40, top: 60 },
  { Icon: Star, size: 18, delay: 0.5, duration: 5.5, left: 55, top: 20 },
  { Icon: Globe, size: 22, delay: 1.5, duration: 4.2, left: 70, top: 40 },
  { Icon: Calculator, size: 20, delay: 2.5, duration: 5.2, left: 85, top: 60 },
]

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingItems.map((item, index) => (
        <div
          key={index}
          className="absolute text-white/10 animate-float-icon"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            animationName: "floatIcon",
            animationDuration: `${item.duration}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: `${item.delay}s`,
          }}
        >
          <item.Icon size={item.size} />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes floatIcon {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-3deg);
          }
          75% {
            transform: translateY(-25px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  )
}
