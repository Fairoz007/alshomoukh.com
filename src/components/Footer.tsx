import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Term Dates', href: '#' },
    { name: 'Scholarships', href: '#' },
    { name: 'Alumni Network', href: '#' },
    { name: 'Careers', href: '#' },
  ];

  const academyLinks = [
    { name: 'Admissions', href: '#admissions' },
    { name: 'Campus Tour', href: '#facilities' },
    { name: 'Scholarships', href: '#' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0B1E2F] text-white py-16 lg:py-20">
      <div className="w-full px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3
              className="text-2xl font-semibold tracking-[0.15em] mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              AL SHOMOUKH
            </h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed max-w-xs">
              Dedicated to academic excellence and personal growth, preparing
              global citizens to lead with integrity and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="eyebrow-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#9CA3AF] hover:text-[#C9A45C] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy Links */}
          <div>
            <h4 className="eyebrow-gold mb-6">Academy</h4>
            <ul className="space-y-3">
              {academyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#9CA3AF] hover:text-[#C9A45C] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="eyebrow-gold mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[rgba(244,241,234,0.2)] flex items-center justify-center text-[#9CA3AF] hover:text-[#C9A45C] hover:border-[#C9A45C] transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[rgba(244,241,234,0.2)] flex items-center justify-center text-[#9CA3AF] hover:text-[#C9A45C] hover:border-[#C9A45C] transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[rgba(244,241,234,0.2)] flex items-center justify-center text-[#9CA3AF] hover:text-[#C9A45C] hover:border-[#C9A45C] transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
            </div>
            <div className="text-sm text-[#9CA3AF]">
              <p className="mb-1">Al Shomoukh Campus</p>
              <p className="mb-1">Elite District, Muscat</p>
              <p>Sultanate of Oman</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[rgba(244,241,234,0.1)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#6B7280]">
              © 2024 Al Shomoukh International School. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-[#6B7280] hover:text-[#C9A45C] transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-[#6B7280] hover:text-[#C9A45C] transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
