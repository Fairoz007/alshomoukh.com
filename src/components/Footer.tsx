import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, MapPin, Phone, Smartphone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Academic', path: '/academics' },
    { name: 'Involvement', path: 'https://www.alshomoukh.com:443/involvement' },
    { name: 'News & Stories', path: '/news-events' },
    { name: 'Enrichment', path: 'https://www.alshomoukh.com:443/enrichment' },
    { name: 'Careers', path: 'https://www.alshomoukh.com:443/career' },
    { name: 'Publication', path: 'https://www.alshomoukh.com:443/publication' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <footer className="bg-[#0B3958] text-white pt-20 pb-10 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#BB9268]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2A6ADE]/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Quick Links */}
          <div className="lg:col-span-4">
            <h2 className="font-serif text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#BB9268]"></span>
              Quick Links
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {quickLinks.map((link) => (
                link.path.startsWith('http') ? (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#BB9268] transition-colors text-[14px] flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BB9268]/30 group-hover:bg-[#BB9268] transition-colors"></span>
                    {link.name}
                    <ExternalLink className="w-2.5 h-2.5 opacity-30 group-hover:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-white/70 hover:text-[#BB9268] transition-colors text-[14px] flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BB9268]/30 group-hover:bg-[#BB9268] transition-colors"></span>
                    {link.name}
                  </Link>
                )
              ))}
              <a
                href="http://portal.alshomoukh.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#BB9268] transition-colors text-[14px] flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#BB9268]/30 group-hover:bg-[#BB9268] transition-colors"></span>
                Parent Portal
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-12 xl:col-span-5 lg:order-2 xl:order-2">
            <h2 className="font-serif text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#BB9268]"></span>
              Contact Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3 text-[#BB9268]">
                    <Phone className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Landline</span>
                  </div>
                  <div className="text-white/70 text-[14px] leading-relaxed">
                    +968 24284756 / +968 24284771
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3 text-[#BB9268]">
                    <Smartphone className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Mobile</span>
                  </div>
                  <div className="text-white/70 text-[14px]">
                    +968 96523508
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3 text-[#BB9268]">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Address</span>
                  </div>
                  <address className="text-white/70 text-[14px] not-italic leading-relaxed">
                    Road 106, Way 208 Building 323.<br />
                    Hay Al Hail, Al Jadeed Al Hail South<br />
                    P.O. Box 1756, PC: 111, Airport Heights<br />
                    Muscat, Sultanate of Oman
                  </address>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3 text-[#BB9268]">
                    <Mail className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Email</span>
                  </div>
                  <div className="text-white/70 text-[14px]">
                    <a href="mailto:admission@alshomoukh.com" className="hover:text-white transition-colors">admission@alshomoukh.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-6 xl:col-span-3 lg:order-3 xl:order-3">
            <h2 className="font-serif text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#BB9268]"></span>
              Contact With
            </h2>
            <h6 className="text-white/80 text-[14px] mb-6 leading-relaxed italic">
              Al Shomoukh International Private School eNews
            </h6>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Facebook, url: 'https://www.facebook.com/sismuscat/', label: 'Facebook' },
                { icon: Twitter, url: 'https://twitter.com/ShomoukhSchool', label: 'X (Twitter)' },
                { icon: Linkedin, url: 'https://om.linkedin.com/in/al-shomoukh-international-school-953aa0171', label: 'LinkedIn' },
                { icon: Youtube, url: 'https://www.youtube.com/channel/UC7ftr6kS9rUbVWTL-3f_NOw', label: 'YouTube' },
                { icon: Instagram, url: 'https://www.instagram.com/alshomoukhschool/', label: 'Instagram' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#BB9268] hover:border-[#BB9268] hover:text-white transition-all duration-300 group shadow-lg"
                  title={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-[13px] text-white/50">
            <a href="https://www.alshomoukh.com:443/page/terms" target="_blank" rel="noopener noreferrer" className="hover:text-[#BB9268] transition-colors">Terms</a>
            <span className="w-[1px] h-3 bg-white/10"></span>
            <a href="https://www.alshomoukh.com:443/page/privacy_policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#BB9268] transition-colors">Policy</a>
          </div>
          <p className="text-[13px] text-white/40 font-medium">
            Copyright © 2025 Alshomokh International Private School. All rights reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Placeholder (if handled globally) */}
      <a href="#" className="fixed bottom-8 right-8 w-12 h-12 bg-[#BB9268] text-white rounded-full flex items-center justify-center shadow-2xl opacity-0 translate-y-10 pointer-events-none transition-all duration-500 hover:-translate-y-1 z-50">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;

