import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const standards = [
  {
    image: '/images/standard_panel_1.jpg',
    caption: 'Academic Rigor',
  },
  {
    image: '/images/standard_panel_2.jpg',
    caption: 'Character & Integrity',
  },
  {
    image: '/images/standard_panel_3.jpg',
    caption: 'Global Readiness',
  },
];

const ShomoukhStandardSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const headline = headlineRef.current;
    const panels = panelsRef.current;

    if (!section || !headline || !panels) return;

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
        .fromTo(headline,
          { y: -30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          0
        )
        .fromTo(panels.children,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
          0.2
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#F4F1EA] py-16 lg:py-0"
    >
      <div className="flex flex-col items-center justify-center min-h-screen h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div
          ref={headlineRef}
          className="text-center mb-12 will-change-transform"
          style={{ opacity: 0 }}
        >
          <p className="eyebrow-gold mb-4">The Shomoukh Standard</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#0B1E2F] leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Where Potential Meets Purpose
          </h2>
        </div>

        {/* Panels */}
        <div
          ref={panelsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full"
        >
          {standards.map((standard, index) => (
            <div
              key={index}
              className="relative overflow-hidden group will-change-transform"
              style={{ opacity: 0 }}
            >
              <div className="w-full h-[35vh] lg:h-[40vh] relative overflow-hidden">
                <img
                  src={standard.image}
                  alt={standard.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,30,47,0.6)] to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-12 h-px bg-[#C9A45C] mb-4" />
                <p className="text-white text-lg font-medium">
                  {standard.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShomoukhStandardSection;
