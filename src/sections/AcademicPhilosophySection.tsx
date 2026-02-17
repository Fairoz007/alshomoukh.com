import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AcademicPhilosophySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageCard = imageCardRef.current;
    const textBlock = textBlockRef.current;
    const rule = ruleRef.current;

    if (!section || !imageCard || !textBlock || !rule) return;

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
        .fromTo(imageCard,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          0
        )
        .fromTo(textBlock,
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          0.2
        )
        .fromTo(rule,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: 'power2.out' },
          0.4
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#F4F1EA]"
    >
      <div className="flex flex-col lg:flex-row items-center h-full">
        {/* Image Card */}
        <div
          ref={imageCardRef}
          className="w-full lg:w-[44vw] h-[40vh] lg:h-[72vh] relative mx-6 lg:ml-[6vw] will-change-transform mt-12 lg:mt-0"
          style={{ opacity: 0 }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <img
              src="/images/academic_excellence.jpg"
              alt="Academic Excellence"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[rgba(11,30,47,0.5)]" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
              <p className="eyebrow-gold text-[#C9A45C] mb-4">Academic</p>
              <h3
                className="text-3xl md:text-4xl text-center tracking-wide"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                EXCELLENCE
              </h3>
              <div className="w-16 h-px bg-[#C9A45C] my-4" />
              <p className="text-sm text-center text-[rgba(255,255,255,0.8)]">
                Natural Instinct • Safe Work
              </p>
            </div>
          </div>
        </div>

        {/* Text Block */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12 py-12 lg:py-0">
          <div
            ref={textBlockRef}
            className="max-w-lg will-change-transform"
            style={{ opacity: 0 }}
          >
            <p className="eyebrow-gold mb-4">Academic Heritage</p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-[#0B1E2F] mb-6 leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              An Uncompromising Pursuit of Intellectual Depth
            </h2>
            <div
              ref={ruleRef}
              className="w-16 h-px bg-[#C9A45C] mb-6"
              style={{ transformOrigin: 'left', transform: 'scaleX(0)' }}
            />
            <p className="text-[#6B7280] leading-relaxed mb-8">
              Our curriculum is designed to challenge the brightest minds,
              blending traditional pedagogical rigor with modern interdisciplinary
              innovation. We foster an environment where curiosity is celebrated
              and critical thinking is the standard.
            </p>
            <a
              href="#curriculum"
              className="inline-flex items-center gap-2 text-[#0B1E2F] font-medium hover:text-[#C9A45C] transition-colors duration-300 group"
            >
              Explore Curriculum
              <ArrowRight
                size={18}
                className="transform group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicPhilosophySection;
