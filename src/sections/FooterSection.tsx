import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Linkedin, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface QuickLink {
  label: string;
  href: string;
}

const quickLinks: QuickLink[] = [
  { label: 'About Us', href: '#about' },
  { label: 'Curriculum', href: '#academics' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'News & Stories', href: '#news' },
];

const resourceLinks: QuickLink[] = [
  { label: 'Parent Portal', href: '#' },
  { label: 'Alumni Network', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact Us', href: '#contact' },
];

const socialLinks = [
  { icon: <Facebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
  { icon: <Instagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
  { icon: <Twitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
  { icon: <Youtube className="w-4 h-4" />, href: '#', label: 'YouTube' },
  { icon: <Linkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn' },
];

const FooterSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, { opacity: 0, y: 30 });

      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#111] overflow-hidden border-t-2 border-[#7A1F2E]">

      <div ref={contentRef} className="relative z-10 flex flex-col px-6 lg:px-24 py-16 lg:py-24 max-w-[1700px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-20">
          {/* Brand & Contact */}
          <div className="lg:w-4/12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#7A1F2E] flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg border border-white/10">
                A
              </div>
              <span className="walker-heading text-white text-3xl tracking-tight leading-none">
                Al Shomoukh <br /> <span className="text-[#D4A84B] text-xl tracking-wide uppercase font-sans font-light">International</span>
              </span>
            </div>

            <p className="walker-body text-white/50 text-sm leading-relaxed mb-10 max-w-sm">
              Empowering students with a world-class education while nurturing their cultural identity and values.
            </p>

            <div className="space-y-5">
              <a href="#" className="flex items-center gap-4 text-white/70 hover:text-[#D4A84B] transition-colors text-sm group">
                <MapPin className="w-4 h-4 group-hover:text-[#D4A84B] transition-colors" />
                <span>Muscat, Sultanate of Oman</span>
              </a>
              <a href="tel:+96824555123" className="flex items-center gap-4 text-white/70 hover:text-[#D4A84B] transition-colors text-sm group">
                <Phone className="w-4 h-4 group-hover:text-[#D4A84B] transition-colors" />
                <span>(+968) 24 555 123</span>
              </a>
              <a href="mailto:info@alshomoukh.edu.om" className="flex items-center gap-4 text-white/70 hover:text-[#D4A84B] transition-colors text-sm group">
                <Mail className="w-4 h-4 group-hover:text-[#D4A84B] transition-colors" />
                <span>info@alshomoukh.edu.om</span>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:w-5/12 grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[#D4A84B] text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-80">Explore</h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-3 group">
                      <span className="w-1 h-1 bg-[#D4A84B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#D4A84B] text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-80">Community</h4>
              <ul className="space-y-4">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-3 group">
                      <span className="w-1 h-1 bg-[#D4A84B] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Trust / Accreditation */}
          <div className="lg:w-3/12">
            <h4 className="text-[#D4A84B] text-xs font-bold uppercase tracking-[0.2em] mb-8 opacity-80">Accreditation</h4>
            <div className="flex flex-col gap-3 mb-10">
              <div className="bg-white/5 px-4 py-3 rounded-sm text-white/80 text-xs font-medium border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-default">
                <CheckCircle2 className="w-4 h-4 text-[#D4A84B]" /> Ministry of Education
              </div>
              <div className="bg-white/5 px-4 py-3 rounded-sm text-white/80 text-xs font-medium border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors cursor-default">
                <CheckCircle2 className="w-4 h-4 text-[#D4A84B]" /> Cambridge International
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-[#7A1F2E] hover:text-white hover:border-[#7A1F2E] transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs tracking-wide">
            © {new Date().getFullYear()} Al Shomoukh International Private School. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors tracking-wide uppercase">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors tracking-wide uppercase">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
