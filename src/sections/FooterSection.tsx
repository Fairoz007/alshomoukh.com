import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowUpRight } from 'lucide-react';

interface FooterSectionProps {
  isActive?: boolean;
}

interface QuickLink {
  label: string;
  href: string;
}

const quickLinks: QuickLink[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Curriculum', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Student Life', href: '#student-life' },
  { label: 'News & Stories', href: '#news' },
  { label: 'Careers', href: '#' },
  { label: 'Contact Us', href: '#contact' },
];

const resourceLinks: QuickLink[] = [
  { label: 'Parent Portal', href: '#' },
  { label: 'Alumni Network', href: '#' },
  { label: 'PTA', href: '#' },
  { label: 'Student Council', href: '#' },
  { label: 'Publications', href: '#' },
  { label: 'Terms & Privacy', href: '#' },
];

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
  { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
  { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
  { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
  { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
];

const FooterSection = ({ isActive = false }: FooterSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(brandRef.current, { opacity: 0, y: 40 });
      gsap.set(linksRef.current, { opacity: 0, y: 30 });
      gsap.set(bottomRef.current, { opacity: 0 });

      // Animate when active
      if (isActive) {
        const tl = gsap.timeline({ delay: 0.1 });

        tl.to(brandRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out'
        })
          .to(linksRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out'
          }, '-=0.4')
          .to(bottomRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: 'power3.out'
          }, '-=0.3');
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <div ref={containerRef} className="relative w-full h-auto bg-[#2A2A2A] overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7A1F2E] via-[#D4A84B] to-[#7A1F2E]" />

      <div className="relative z-10 flex flex-col">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row px-8 lg:px-16 py-12 lg:py-16">
          {/* Left Column - Brand & Contact */}
          {/* Left Column - Brand & Contact */}
          <div ref={brandRef} className="lg:w-2/5 mb-10 lg:mb-0">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#7A1F2E] flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="walker-heading text-white text-2xl">
                Al Shomoukh
              </span>
            </div>

            {/* Tagline */}
            <p className="walker-body text-white/60 text-sm leading-relaxed max-w-sm mb-8">
              Empowering students with a world-class education while nurturing their cultural identity and values since 2015.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 hover:text-white transition-colors duration-300 group"
              >
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-[#D4A84B] transition-colors" />
                <span className="walker-body text-sm">
                  Muscat, Sultanate of Oman
                </span>
              </a>
              <a
                href="tel:24555123"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 group"
              >
                <Phone className="w-5 h-5 flex-shrink-0 group-hover:text-[#D4A84B] transition-colors" />
                <span className="walker-body text-sm">(+968) 24 555 123</span>
              </a>
              <a
                href="mailto:info@alshomoukh.edu.om"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 flex-shrink-0 group-hover:text-[#D4A84B] transition-colors" />
                <span className="walker-body text-sm">info@alshomoukh.edu.om</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 bg-white/10 text-white/60 hover:bg-[#7A1F2E] hover:text-white transition-all duration-300 flex items-center justify-center"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Columns - Links */}
          <div ref={linksRef} className="lg:w-3/5 flex flex-col sm:flex-row gap-8 lg:gap-16 lg:pl-16">
            {/* Quick Links */}
            <div className="flex-1">
              <h3 className="walker-heading text-white text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => e.preventDefault()}
                      className="walker-body text-white/60 text-sm hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="flex-1">
              <h3 className="walker-heading text-white text-lg mb-6">Community</h3>
              <ul className="space-y-3">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => e.preventDefault()}
                      className="walker-body text-white/60 text-sm hover:text-white transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div ref={bottomRef} className="border-t border-white/10 flex flex-col">
          {/* Scrolling Ticker */}
          <div className="w-full bg-[#7A1F2E]/20 py-3 overflow-hidden border-b border-white/5 relative flex">
            <div className="animate-ticker flex whitespace-nowrap">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="inline-block mx-4 text-white/40 text-xs uppercase tracking-[0.2em] font-medium">
                  • Admissions Open for 2026-2027 • Excellence in Education • Global Citizens • Omani Values
                </span>
              ))}
            </div>
            <div className="animate-ticker2 flex whitespace-nowrap absolute top-3 left-0">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="inline-block mx-4 text-white/40 text-xs uppercase tracking-[0.2em] font-medium">
                  • Admissions Open for 2026-2027 • Excellence in Education • Global Citizens • Omani Values
                </span>
              ))}
            </div>
          </div>

          <div className="px-8 lg:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="walker-body text-white/40 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Al Shomoukh International Private School. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="walker-body text-white/40 text-xs hover:text-white/60 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="walker-body text-white/40 text-xs hover:text-white/60 transition-colors"
              >
                Terms of Use
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="walker-body text-white/40 text-xs hover:text-white/60 transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
