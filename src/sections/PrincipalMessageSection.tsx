import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PrincipalMessageSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const quoteBlockRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const quoteBlock = quoteBlockRef.current;
    const badge = badgeRef.current;

    if (!section || !image || !quoteBlock || !badge) return;

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
        .fromTo(image,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          0
        )
        .fromTo(quoteBlock,
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          0.2
        )
        .fromTo(badge,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
          0.5
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="academy"
      className="relative w-full h-screen overflow-hidden bg-[#F4F1EA]"
    >
      <div className="flex flex-col lg:flex-row h-full">
        {/* Principal Image */}
        <div
          ref={imageRef}
          className="w-full lg:w-[52vw] h-[50vh] lg:h-full relative will-change-transform"
          style={{ opacity: 0 }}
        >
          <img
            src="/images/principal_portrait.jpg"
            alt="Dr. Alistair Sterling"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(244,241,234,0.3)] lg:block hidden" />
        </div>

        {/* Quote Block */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div
            ref={quoteBlockRef}
            className="max-w-lg relative will-change-transform"
            style={{ opacity: 0 }}
          >
            {/* Gold Badge */}
            <div
              ref={badgeRef}
              className="absolute -top-4 -right-4 lg:top-0 lg:right-0 w-12 h-12 bg-[#C9A45C] rounded-full flex items-center justify-center"
              style={{ opacity: 0 }}
            >
              <Quote size={20} className="text-white" />
            </div>

            <p className="eyebrow-gold mb-6">A Message from the Principal</p>
            <blockquote
              className="text-2xl md:text-3xl lg:text-4xl text-[#0B1E2F] leading-snug mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              "True education is not merely the transfer of knowledge, but the
              <span className="italic text-[#C9A45C]"> awakening of character</span>
              {' '}and the refinement of the human spirit."
            </blockquote>
            <div className="w-16 h-px bg-[#C9A45C] mb-4" />
            <p className="text-lg font-medium text-[#0B1E2F] mb-1">
              Dr. Alistair Sterling
            </p>
            <p className="text-sm text-[#6B7280]">
              Headmaster & Academic Director
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessageSection;
