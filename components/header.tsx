"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap, ChevronRight } from "lucide-react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Facilities", href: "/facilities" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "#contact" },
  { label: "Parent Portal", href: "http://portal.alshomoukh.com/", external: true },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-card/95 backdrop-blur-lg shadow-lg"
        : "bg-card/80 backdrop-blur"
        } border-b border-border`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(-20px)",
        transition: "opacity 0.5s ease-out, transform 0.5s ease-out, background-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50 relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold text-primary leading-tight">AL SHOMOUKH</span>
              <span className="text-xs text-secondary font-medium">International School</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-primary group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full px-6 hover:scale-105 hover:shadow-lg transition-all duration-300">
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`h-6 w-6 absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
              />
              <X
                className={`h-6 w-6 absolute transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/98 backdrop-blur-xl lg:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
      >
        <div className="flex flex-col h-full justify-center px-6 pb-10 pt-24 overflow-y-auto">
          <nav className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`group flex items-center justify-between text-2xl font-bold text-foreground hover:text-primary transition-all duration-300 border-b border-border/50 pb-4 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50 + 100}ms` : '0ms',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                <ChevronRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
              </Link>
            ))}
          </nav>

          <div
            className={`mt-10 transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            style={{ transitionDelay: '500ms' }}
          >
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              Enroll Now
            </Button>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Al Shomoukh International School
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
