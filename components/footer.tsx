"use client"

import Link from "next/link"
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Academics", href: "/academics" },
  { label: "Facilities", href: "/facilities" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 py-12 lg:py-16 relative">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & About */}
          <AnimatedSection className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white group-hover:bg-white/20 transition-colors duration-300">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg font-bold leading-tight">AL SHOMOUKH</span>
                <span className="text-xs text-white/70">International School</span>
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Al Shomoukh International Private School is a homegrown educational brand providing premium education from Kindergarten to Grade 12.
            </p>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection delay={100}>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={200}>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 group">
                <Mail className="h-5 w-5 text-white/70 shrink-0 mt-0.5 group-hover:text-secondary transition-colors duration-300" />
                <div className="flex flex-col text-sm text-white/70">
                  <a href="mailto:admission@alshomoukh.com" className="hover:text-white transition-colors">admission@alshomoukh.com</a>
                  <a href="mailto:info@alshomoukh.com" className="hover:text-white transition-colors">info@alshomoukh.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="h-5 w-5 text-white/70 shrink-0 mt-0.5 group-hover:text-secondary transition-colors duration-300" />
                <div className="flex flex-col text-sm text-white/70">
                  <a href="tel:+96824284756" className="hover:text-white transition-colors">+968 24284756</a>
                  <a href="tel:+96824284771" className="hover:text-white transition-colors">+968 24284771</a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-white/70 shrink-0 mt-0.5 group-hover:text-secondary transition-colors duration-300" />
                <span className="text-sm text-white/70">
                  Muscat, Sultanate of Oman
                </span>
              </li>
            </ul>
          </AnimatedSection>

          {/* Social Media */}
          <AnimatedSection delay={300}>
            <h3 className="font-heading font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/sismuscat/" },
                { icon: Twitter, label: "X", href: "https://x.com/ShomoukhSchool" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/alshomoukhschool/" },
                { icon: Linkedin, label: "LinkedIn", href: "https://om.linkedin.com/in/al-shomoukh-international-school-953aa0171" },
                { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/channel/UC7ftr6kS9rUbVWTL-3f_NOw" },
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-secondary hover:scale-110 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Bar */}
        <AnimatedSection delay={400} className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/60 mb-2">
            &copy; {new Date().getFullYear()} Al Shomoukh International School. All rights reserved.
          </p>
          <div className="flex justify-center gap-4 text-xs text-white/50">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
