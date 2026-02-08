import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentSection: number;
  onNavigate: (index: number) => void;
  isMobile: boolean;
}

const Header = ({ currentSection, onNavigate, isMobile }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topNavItems = [
    { label: 'Admissions', sectionIndex: 4 },
    { label: 'Academics', sectionIndex: 2 },
    { label: 'Contact', sectionIndex: 7 },
  ];

  const fullMenu = [
    { label: 'Home', sectionIndex: 0 },
    { label: 'About', sectionIndex: 1 },
    { label: 'Academics', sectionIndex: 2 },
    { label: 'Student Life', sectionIndex: 3 },
    { label: 'Admissions', sectionIndex: 4 },
    { label: 'Campus', sectionIndex: 5 },
    { label: 'News & Events', sectionIndex: 6 },
    { label: 'Contact', sectionIndex: 7 },
  ];

  const handleNavClick = (sectionIndex: number) => {
    onNavigate(sectionIndex);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${isScrolled || currentSection > 0 || isMenuOpen
          ? 'bg-[#1a1a1a]/90 backdrop-blur-md border-white/5 py-2'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="relative w-full px-8 lg:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(0);
              }}
              className="flex items-center gap-4 group z-50"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${isMenuOpen || isScrolled || currentSection > 0 ? 'bg-[#7A1F2E] scale-90' : 'bg-[#7A1F2E] scale-100'
                }`}>
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className={`walker-heading leading-none text-lg lg:text-xl font-medium tracking-wide transition-colors duration-300 ${isMenuOpen ? 'text-white' : 'text-white drop-shadow-md'
                  }`}>
                  AL SHOMOUKH
                </span>
                <span className={`text-[10px] uppercase tracking-[0.2em] font-light transition-colors duration-300 ${isMenuOpen ? 'text-white/60' : 'text-white/80 drop-shadow-sm'
                  }`}>
                  International Private School
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            {!isMobile && (
              <nav className="hidden lg:flex items-center gap-10 z-50">
                {!isMenuOpen && topNavItems.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.sectionIndex);
                    }}
                    className="walker-nav-link text-[11px] font-bold uppercase tracking-[0.15em] text-white/90 hover:text-[#D4A84B] transition-colors drop-shadow-sm relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#D4A84B] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="group flex items-center gap-3 pl-6 border-l border-white/20 transition-colors"
                >
                  <span className="walker-nav-link text-[10px] font-bold uppercase tracking-[0.15em] text-white group-hover:text-[#D4A84B]">
                    {isMenuOpen ? 'Close' : 'Menu'}
                  </span>
                  <div className={`p-1 rounded-full border border-white/30 group-hover:border-[#D4A84B] transition-colors ${isMenuOpen ? 'bg-white text-[#7A1F2E]' : ''}`}>
                    {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4 text-white" />}
                  </div>
                </button>
              </nav>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 transition-colors z-50 ${isMenuOpen ? 'text-white' : 'text-white'
                  }`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 drop-shadow-md" />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#7A1F2E] transition-transform duration-700 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="h-full w-full flex flex-col justify-center px-8 lg:px-24 max-w-7xl mx-auto">
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {fullMenu.map((item, index) => (
              <div
                key={item.label}
                className="overflow-hidden"
              >
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.sectionIndex);
                  }}
                  className="block group py-2"
                >
                  <div className="flex items-baseline gap-4 transform transition-transform duration-500 group-hover:translate-x-4">
                    <span className="text-[#D4A84B] text-sm font-light font-mono opacity-60">0{index + 1}</span>
                    <span className="walker-heading text-3xl lg:text-5xl text-white group-hover:text-[#D4A84B] transition-colors">
                      {item.label}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </nav>

          <div className="mt-16 pt-8 border-t border-white/20 flex flex-col lg:flex-row gap-8 lg:items-center justify-between text-white/70 text-sm">
            <div className="flex flex-col gap-2">
              <strong className="text-white block mb-1">Contact Admissions</strong>
              <a href="tel:+96824284756" className="hover:text-white transition-colors">+968 24 284 756</a>
              <a href="mailto:admission@alshomoukh.com" className="hover:text-white transition-colors">admission@alshomoukh.com</a>
            </div>
            <div className="flex flex-col gap-2 lg:text-right">
              <strong className="text-white block mb-1">Visit Us</strong>
              <span>Hay Al Hail South</span>
              <span>Muscat, Sultanate of Oman</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
