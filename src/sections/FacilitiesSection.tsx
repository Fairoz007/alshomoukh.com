import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tabs = ['All Spaces', 'Academic', 'Athletic', 'Creative', 'Social'];

const facilities = [
  {
    name: 'The Grand Library',
    category: 'Academic',
    description:
      'A sanctuary of knowledge featuring over 50,000 volumes, private study pods, and state-of-the-art digital research suites.',
  },
  {
    name: 'Innovation Hub',
    category: 'Academic',
    description:
      'Advanced robotics and biotechnology labs equipped with professional-grade instruments for the next generation of scientists.',
  },
  {
    name: 'Olympic Arena',
    category: 'Athletic',
    description:
      'Multi-purpose indoor sports complex with professional-grade wood flooring and acoustics.',
  },
  {
    name: 'Grand Theater',
    category: 'Creative',
    description:
      'A 400-seat auditorium designed for world-class performances, featuring a professional soundstage.',
  },
  {
    name: 'Aquatic Center',
    category: 'Athletic',
    description:
      'Climate-controlled Olympic pool with high-speed underwater analysis technology.',
  },
];

const FacilitiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('All Spaces');

  const filteredFacilities =
    activeTab === 'All Spaces'
      ? facilities
      : facilities.filter((f) => f.category === activeTab);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const headline = headlineRef.current;
    const tabsEl = tabsRef.current;
    const card = cardRef.current;

    if (!section || !bg || !headline || !tabsEl || !card) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none none',
        }
      });

      // ENTRANCE
      scrollTl
        .fromTo(bg,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: 'power2.out' },
          0
        )
        .fromTo(headline,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          0.2
        )
        .fromTo(tabsEl,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          0.4
        )
        .fromTo(card,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          0.5
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="facilities"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full gpu-accelerated"
        style={{ opacity: 0 }}
      >
        <img
          src="/images/facilities_hero.jpg"
          alt="Campus Facilities"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[rgba(11,30,47,0.4)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 lg:px-12">
        {/* Headline Block */}
        <div
          ref={headlineRef}
          className="bg-[rgba(244,241,234,0.9)] backdrop-blur-sm p-8 lg:p-12 max-w-3xl text-center mb-8 will-change-transform"
          style={{ opacity: 0 }}
        >
          <p className="eyebrow-gold mb-4">Campus & Facilities</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#0B1E2F] mb-4 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Exceptional Environments
          </h2>
          <p className="text-[#6B7280] leading-relaxed max-w-xl mx-auto">
            Where architectural excellence meets pedagogical innovation.
            Discover spaces designed to inspire.
          </p>
        </div>

        {/* Tabs */}
        <div
          ref={tabsRef}
          className="flex flex-wrap justify-center gap-2 lg:gap-4 mb-8"
          style={{ opacity: 0 }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${activeTab === tab
                  ? 'bg-[#0B1E2F] text-white'
                  : 'bg-white/80 text-[#0B1E2F] hover:bg-white'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Facility Card */}
        <div
          ref={cardRef}
          className="bg-white p-6 lg:p-8 max-w-md w-full shadow-lg will-change-transform"
          style={{ opacity: 0 }}
        >
          <p className="eyebrow-gold mb-2">{filteredFacilities[0]?.category}</p>
          <h3
            className="text-2xl text-[#0B1E2F] mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            {filteredFacilities[0]?.name}
          </h3>
          <p className="text-[#6B7280] text-sm leading-relaxed mb-6">
            {filteredFacilities[0]?.description}
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#0B1E2F] font-medium hover:text-[#C9A45C] transition-colors duration-300 group text-sm"
          >
            Explore All Spaces
            <ArrowRight
              size={16}
              className="transform group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
