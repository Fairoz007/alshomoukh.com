import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);

    // Check if it's a hash link
    if (href.startsWith('/#')) {
      const hash = href.replace('/', ''); // e.g., #curriculum
      if (location.pathname !== '/') {
        navigate('/');
        // Small delay to allow home to mount
        setTimeout(() => {
          const element = document.querySelector(hash);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Regular page link
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  const navLinks = [
    { name: 'Academy', href: '/academy' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Curriculum', href: '/#curriculum' },
    { name: 'Campus', href: '/campus-tour' },
    { name: 'Careers', href: '/careers' },
    { name: 'Connect', href: '/connect' },
  ];

  const mobileLinks = [
    ...navLinks,
    { name: 'Scholarships', href: '/scholarships' },
    { name: 'Alumni', href: '/alumni' },
    { name: 'Term Dates', href: '/term-dates' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || location.pathname !== '/'
            ? 'bg-[#F4F1EA]/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-transparent'
          }`}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="text-xl font-semibold tracking-[0.15em] text-[#0B1E2F]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              AL SHOMOUKH
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className="text-sm font-medium text-[#111827] hover:text-[#C9A45C] transition-colors duration-300 tracking-wide"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => handleNavigation('/contact')}
                className="text-sm font-medium text-[#111827] hover:text-[#C9A45C] transition-colors duration-300"
              >
                Enquire
              </button>
              <button
                onClick={() => handleNavigation('/admissions')}
                className="px-5 py-2.5 border border-[#C9A45C] text-[#0B1E2F] text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#C9A45C] hover:text-white"
              >
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#0B1E2F]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#F4F1EA] transition-transform duration-500 lg:hidden overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col items-center justify-start pt-32 pb-10 min-h-full gap-6 px-6">
          {mobileLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.href)}
              className="text-2xl font-medium text-[#111827] hover:text-[#C9A45C] transition-colors duration-300"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              {link.name}
            </button>
          ))}
          <div className="w-16 h-px bg-[#C9A45C] my-4" />
          <div className="flex flex-col items-center gap-4 w-full">
            <button
              onClick={() => handleNavigation('/contact')}
              className="text-lg font-medium text-[#111827] hover:text-[#C9A45C] transition-colors duration-300"
            >
              Enquire
            </button>
            <button
              onClick={() => handleNavigation('/admissions')}
              className="px-8 py-3 border border-[#C9A45C] text-[#0B1E2F] text-lg font-medium tracking-wide transition-all duration-300 hover:bg-[#C9A45C] hover:text-white w-full max-w-xs text-center"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
