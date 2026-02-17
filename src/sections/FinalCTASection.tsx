import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FinalCTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const ctaBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const ctaBlock = ctaBlockRef.current;

    if (!section || !bg || !ctaBlock) return;

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
        .fromTo(ctaBlock,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          0.2
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
      className="relative w-full min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full gpu-accelerated"
        style={{ opacity: 0 }}
      >
        <img
          src="/images/final_cta_campus.jpg"
          alt="Campus Aerial View"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[rgba(11,30,47,0.4)]" />
      </div>

      {/* CTA Block */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ctaBlockRef}
          className="bg-[rgba(244,241,234,0.95)] backdrop-blur-sm p-8 sm:p-10 lg:p-16 max-w-2xl text-center will-change-transform rounded-sm"
          style={{ opacity: 0 }}
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[#0B1E2F] mb-6 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Begin Your Journey Toward Global Leadership
          </h2>
          <p className="text-[#6B7280] leading-relaxed mb-8 max-w-lg mx-auto">
            Applications are open for the 2025–2026 academic year. Schedule your
            private tour today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => alert('Prospectus download coming soon!')}
              className="btn-primary w-full sm:w-auto text-center"
            >
              Download Prospectus
            </button>
            <button
              onClick={() => scrollToSection('#facilities')}
              className="btn-outline-dark w-full sm:w-auto text-center"
            >
              Book a Campus Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
