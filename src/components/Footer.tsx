import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'News & Events', path: '/news-events' },
    { name: 'Contact', path: '/contact' },
  ];

  const admissionsLinks = [
    { name: 'Admission Process', path: '/admissions' },
    { name: 'Requirements', path: '/admissions' },
    { name: 'Tuition Fees', path: '/admissions' },
    { name: 'Apply Online', path: '/apply-now' },
    { name: 'FAQs', path: '/admissions' },
  ];

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About School */}
          <div>
            <div className="mb-6">
              <img 
                src="/images/White SIS Logo-01.png" 
                alt="SIS Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-navy-200 text-sm leading-relaxed mb-6">
              Al Shomoukh International School is a premier educational institution 
              dedicated to nurturing global leaders through academic excellence, 
              innovation, and character development.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-navy-700 flex items-center justify-center hover:bg-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-navy-700 flex items-center justify-center hover:bg-gold transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-navy-700 flex items-center justify-center hover:bg-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-navy-700 flex items-center justify-center hover:bg-gold transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-navy-200 text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-gold">Admissions</h3>
            <ul className="space-y-3">
              {admissionsLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-navy-200 text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-navy-200 text-sm">
                  Al Shomoukh International School<br />
                  PO Box 1234, Muscat<br />
                  Sultanate of Oman
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+96812345678" className="text-navy-200 text-sm hover:text-gold transition-colors">
                  +968 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@alshomoukh.edu.om" className="text-navy-200 text-sm hover:text-gold transition-colors">
                  info@alshomoukh.edu.om
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-navy-200 text-sm">
                  Sun - Thu: 7:30 AM - 3:00 PM<br />
                  Fri - Sat: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-navy-300">
            <p>&copy; {new Date().getFullYear()} Al Shomoukh International School. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-gold transition-colors">Terms of Service</Link>
              <Link to="/" className="hover:text-gold transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
