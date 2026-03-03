import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronDown, User } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/admissions' },
    {
      name: 'Academic',
      path: '/academics',
      submenu: [
        { name: 'Kindergarten', path: '/academics/kindergarten' },
        { name: 'Primary School', path: '/academics/primary' },
        { name: 'Lower Secondary', path: '/academics/lower-secondary' },
        { name: 'Upper Secondary', path: '/academics/upper-secondary' },
      ]
    },
    { name: 'Involvement', path: 'https://www.alshomoukh.com:443/involvement' },
    { name: 'News & Stories', path: '/news-events' },
    { name: 'Enrichment', path: 'https://www.alshomoukh.com:443/enrichment' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      {/* 1. Top Bar & Curvy Shape Container */}
      <div className="relative h-24 hidden md:block z-30">
        {/* Background Navy Shape with Wave */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0H1440V60C1440 60 1100 95 720 75C340 55 0 120 0 120V0Z"
              fill="#0B3958"
            />
            <path
              d="M0 120C0 120 340 55 720 75C1100 95 1440 60 1440 60"
              stroke="#BB9268"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Top Bar Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-start pt-4 h-12">
            {/* Logo Left - Partially in the blue area */}
            <Link to="/" className="flex items-start gap-5 hover:opacity-90 transition-opacity">
              <div className="bg-white p-2.5 rounded-full shadow-md border border-gray-100 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 translate-y-1">
                <img
                  src="/images/SIS Logo-01.png"
                  alt="SIS Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/100x100?text=SIS"; }}
                />
              </div>
              <div className="flex flex-col justify-start pt-2">
                <div className="flex flex-col">
                  <span className="text-base sm:text-[1.1rem] text-white uppercase tracking-[0.15em] font-extrabold leading-tight">Al Shomoukh</span>
                  <span className="text-[10px] sm:text-[11px] text-[#BB9268] uppercase tracking-[0.12em] font-bold">International School</span>
                </div>
              </div>
            </Link>

            {/* Top Links Right */}
            <div className="flex items-center gap-6 text-[11px] sm:text-xs text-white/90 font-sans tracking-wide">
              <a href="tel:+96812345678" className="flex items-center gap-2 hover:text-[#BB9268] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#BB9268]" />
                <span className="font-medium">+968 1234 5678</span>
              </a>
              <a href="mailto:info@alshomoukh.edu.om" className="flex items-center gap-2 hover:text-[#BB9268] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#BB9268]" />
                <span className="font-medium">info@alshomoukh.edu.om</span>
              </a>
              <div className="w-[1px] h-3 bg-white/20 mx-1"></div>
              <Link to="/portal" className="flex items-center gap-2 hover:text-[#BB9268] transition-colors font-medium">
                <User className="w-3.5 h-3.5 text-[#BB9268]" />
                <span className="opacity-80">Select Info</span>
              </Link>
              <div className="w-[1px] h-3 bg-white/20 mx-1"></div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-[#BB9268] transition-colors font-bold">
                <span>EN</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation - White Strip */}
      <nav
        className={`w-full transition-all duration-300 relative bg-white ${isScrolled ? 'fixed top-0 left-0 right-0 shadow-lg animate-in slide-in-from-top-1 z-50' : 'shadow-sm z-20 md:-mt-[40px]'}`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[75px]">
            {/* Logo Spacer - to keep nav links from overlapping the logo crest */}
            <div className="w-[300px] hidden lg:block"></div>

            {/* Navigation Centered/Right aligned */}
            <div className="hidden lg:flex items-center justify-end flex-1 gap-1 xl:gap-6">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative group h-full flex items-center"
                >
                  {item.submenu ? (
                    <div
                      className="relative h-full flex items-center"
                      onMouseEnter={() => setIsAcademicsOpen(true)}
                      onMouseLeave={() => setIsAcademicsOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1.5 py-4 px-1 text-[13px] xl:text-[14px] font-sans font-semibold tracking-wide transition-colors ${isActive(item.path) || item.submenu.some(sub => isActive(sub.path))
                          ? 'text-[#BB9268]'
                          : isScrolled ? 'text-[#0B3958] hover:text-[#BB9268]' : 'text-[#0B3958] hover:text-[#BB9268]'
                          }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isAcademicsOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <div className={`absolute top-[100%] left-0 bg-white shadow-xl py-3 min-w-[220px] transition-all duration-300 transform origin-top border-t-2 border-[#BB9268] ${isAcademicsOpen ? 'opacity-100 scale-y-100 translate-y-0 pointer-events-auto z-50' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'
                        }`}>
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className={`block px-6 py-2.5 text-[14px] font-sans transition-colors ${isActive(sub.path)
                              ? 'text-[#0B3958] bg-[#F4F8FA] font-bold border-l-2 border-[#BB9268]'
                              : 'text-gray-600 hover:text-[#0B3958] hover:bg-gray-50'
                              }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : item.path.startsWith('http') ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block py-4 px-1 text-[13px] xl:text-[14px] font-sans font-semibold tracking-wide transition-colors ${isScrolled ? 'text-[#0B3958] hover:text-[#BB9268]' : 'text-[#0B3958] hover:text-[#BB9268]'}`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block py-4 px-1 text-[13px] xl:text-[14px] font-sans font-semibold tracking-wide transition-colors ${isActive(item.path)
                        ? 'text-[#BB9268]'
                        : isScrolled ? 'text-[#0B3958] hover:text-[#BB9268]' : 'text-[#0B3958] hover:text-[#BB9268]'
                        }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Apply Now Right */}
              <div className="ml-2 xl:ml-4">
                <Link
                  to="/apply-now"
                  className="bg-[#BB9268] hover:bg-[#875D3B] text-white px-6 xl:px-8 py-3 rounded-full text-[13px] font-sans font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-[2px]"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex justify-between w-full items-center">
              <Link to="/" className="flex items-center gap-2">
                <img src="/images/SIS Logo-01.png" alt="Logo" className="h-10 w-auto" />
                <span className="font-serif font-bold text-[#0B3958]">S.I.S</span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#0B3958] hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[70px] bg-white z-[60] overflow-y-auto">
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div className="space-y-2">
                      <div className="text-[#0B3958] font-bold text-lg border-b border-gray-100 pb-2">{item.name}</div>
                      <div className="pl-4 space-y-2 py-2">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-2 text-[15px] font-medium ${isActive(sub.path) ? 'text-[#BB9268]' : 'text-gray-600'}`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : item.path.startsWith('http') ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-3 text-[#0B3958] font-bold text-lg border-b border-gray-100"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 font-bold text-lg border-b border-gray-100 ${isActive(item.path) ? 'text-[#BB9268]' : 'text-[#0B3958]'}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6">
                <Link
                  to="/apply-now"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-[#BB9268] text-white block text-center py-4 rounded-full font-bold shadow-lg"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
