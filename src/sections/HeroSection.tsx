import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineBlockRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const headlineBlock = headlineBlockRef.current;
    const card = cardRef.current;
    const cta = ctaRef.current;

    if (!section || !bg || !headlineBlock || !card || !cta) return;

    const ctx = gsap.context(() => {
      // Initial load animation - simplified
      const loadTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      loadTl
        .fromTo(bg,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 }
        )
        .fromTo(headlineBlock,
          { x: -30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 },
          '-=0.5'
        )
        .fromTo(card,
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6 },
          '-=0.5'
        )
        .fromTo(cta.children,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.05 },
          '-=0.3'
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full gpu-accelerated"
        style={{ opacity: 0 }}
      >
        <img
          src="/images/hero_campus.jpg"
          alt="Al Shomoukh Campus"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(244,241,234,0.4)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center">
        <div className="w-full px-6 lg:px-12 py-20">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* Headline Block */}
            <div
              ref={headlineBlockRef}
              className="bg-[rgba(244,241,234,0.9)] backdrop-blur-sm p-8 lg:p-10 max-w-xl will-change-transform"
              style={{ opacity: 0 }}
            >
              <div className="w-16 h-px bg-[#C9A45C] mb-6" />
              <p className="eyebrow-gold mb-4">
                International Education Since 1994
              </p>
              <h1
                className="text-4xl md:text-5xl lg:text-6xl text-[#0B1E2F] mb-6 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Cultivating Excellence.
                <br />
                <span className="italic">Shaping Global Leaders.</span>
              </h1>
              <p className="text-[#6B7280] text-base lg:text-lg leading-relaxed mb-8 max-w-md">
                A rigorous, inquiry-driven curriculum that prepares students to
                thrive at top universities—and in life.
              </p>
              <div ref={ctaRef} className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('#admissions')}
                  className="btn-primary"
                >
                  Apply for Admission
                </button>
                <button
                  onClick={() => scrollToSection('#facilities')}
                  className="btn-outline-dark"
                >
                  Schedule a Private Visit
                </button>
              </div>
            </div>

            {/* Principal Card */}
            <div
              ref={cardRef}
              className="bg-white border border-[rgba(17,24,39,0.1)] p-8 max-w-sm hidden lg:block will-change-transform"
              style={{ opacity: 0 }}
            >
              <p className="eyebrow-gold mb-4">From the Principal</p>
              <p
                className="text-xl text-[#0B1E2F] italic mb-6 leading-relaxed"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                "We don't teach subjects. We teach young people—then guide them
                to master ideas."
              </p>
              <div className="w-24 h-px bg-[#C9A45C] mx-auto mb-4" />
              <p className="text-sm text-[#6B7280] text-center">
                — Dr. Alistair Sterling, Principal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
