import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: '1994', label: 'Established Year' },
  { number: '100%', label: 'University Acceptance' },
  { number: '24+', label: 'Global Nationalities' },
  { number: 'Top 10', label: 'University Destinations' },
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const rule = ruleRef.current;
    const statsContainer = statsRef.current;

    if (!section || !rule || !statsContainer) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });

      tl.fromTo(rule,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: 'power2.out' }
      )
        .fromTo(statsContainer.children,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
          '-=0.3'
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-24 bg-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Gold Rule */}
          <div
            ref={ruleRef}
            className="w-24 h-px bg-[#C9A45C] mx-auto mb-10"
            style={{ transformOrigin: 'center', transform: 'scaleX(0)' }}
          />

          {/* Stats Grid */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p
                  className="text-4xl md:text-5xl lg:text-6xl text-[#0B1E2F] mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {stat.number}
                </p>
                <p className="text-sm text-[#6B7280] tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
