import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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
    if (href.startsWith('/#')) {
      const hash = href.replace('/', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(hash);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
      window.scrollTo(0, 0);
    }
  };

  const navLinks = [

    { name: 'About Us', href: '/about' },
    { name: 'Admissions', href: '/admissions' },
    {
      name: 'Academic',
      href: '/academy',
      subLinks: [
        { name: 'Curriculum', href: '/academy#curriculum' }, // Keeping as anchor on Academic page or separate? User didn't specify page for Curriculum but it's usually inside Academic. Leaving as anchor or creating page. Wait, user provided "Curriculum" in list of sub items. If it's a subpage, I should make it. But user task "Curriculum" was sub item. The main request was "Academic -> sub -> Curriculum". I'll keep it as anchor relative to Academy page or redirect to Academy page section if no dedicated page. Let's point to /academy#curriculum for now as Academy page likely has it.
        { name: 'Kindergarten', href: '/academy/kindergarten' },
        { name: 'Primary School', href: '/academy/primary' },
        { name: 'Lower Secondary', href: '/academy/lower-secondary' },
        { name: 'Upper Secondary', href: '/academy/upper-secondary' },
        { name: 'Learning Support', href: '/academy/learning-support' },
      ]
    },
    { name: 'Involvement', href: '/connect' },
    { name: 'News & Stories', href: '/news' },
    { name: 'Enrichment', href: '/enrichment' },
  ];

  const handleMobileExpand = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };


  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || location.pathname !== '/'
          ? 'bg-[#F4F1EA]/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* School Name (Left) */}
            <div className="flex items-center">
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0);
                  setIsMobileMenuOpen(false);
                }}
                className="text-xl font-semibold tracking-[0.15em] text-[#0B1E2F]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Al Shomoukh
              </Link>
            </div>

            {/* Desktop Navigation (Centered) */}
            <div className="hidden xl:flex items-center justify-center flex-1 px-8 gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                >
                  <button
                    onClick={() => !link.subLinks && handleNavigation(link.href)}
                    className="flex items-center gap-1 text-sm font-medium text-[#111827] hover:text-[#C9A45C] transition-colors duration-300 tracking-wide uppercase py-4"
                  >
                    {link.name}
                    {link.subLinks && <ChevronDown size={14} />}
                  </button>

                  {/* Dropdown Menu */}
                  {link.subLinks && (
                    <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border-t-2 border-[#C9A45C]">
                      {link.subLinks.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => handleNavigation(sub.href)}
                          className="block w-full text-left px-4 py-3 text-sm text-[#0B1E2F] hover:bg-[#F4F1EA] hover:text-[#C9A45C] transition-colors border-b border-gray-50 last:border-0"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button (Right) */}
            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-[#0B1E2F]"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Empty div for balancing layout if needed, or keeping CTA invisible on desktop */}
            <div className="hidden xl:block w-8"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#F4F1EA] transition-transform duration-500 xl:hidden overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col items-start pt-24 pb-10 min-h-full px-6 gap-2">



          {navLinks.map((link) => (
            <div key={link.name} className="w-full border-b border-gray-200/50 last:border-0">
              {link.subLinks ? (
                <div className="w-full">
                  <button
                    onClick={() => handleMobileExpand(link.name)}
                    className="flex items-center justify-between w-full py-4 text-left"
                  >
                    <span className="text-lg font-medium text-[#111827] uppercase tracking-wide">{link.name}</span>
                    {mobileExpanded === link.name ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 bg-white/50 ${mobileExpanded === link.name ? 'max-h-96 pb-4' : 'max-h-0'}`}>
                    {link.subLinks.map(sub => (
                      <button
                        key={sub.name}
                        onClick={() => handleNavigation(sub.href)}
                        className="block w-full text-left py-3 px-4 text-[#6B7280] hover:text-[#C9A45C]"
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => handleNavigation(link.href)}
                  className="block w-full text-left py-4 text-lg font-medium text-[#111827] hover:text-[#C9A45C] transition-colors uppercase tracking-wide"
                >
                  {link.name}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
