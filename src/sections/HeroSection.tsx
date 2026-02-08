import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HeroSectionProps {
  isActive?: boolean;
}

const HeroSection = ({ isActive = false }: HeroSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(textRef.current, { opacity: 0, y: 60 });
      gsap.set(ctaRef.current, { opacity: 0, y: 40 });

      if (isActive) {
        const tl = gsap.timeline({ delay: 0.5 });

        tl.to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out'
        })
          .to(ctaRef.current, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
          }, '-=0.8');
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-black">
      {/* Background Video/Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 scale-105"
        style={{
          backgroundImage: `url('/hero_bg.png')`,
        }}
      />

      {/* Enhanced Gradient Overlays for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent sm:via-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 opacity-80" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 lg:px-20 max-w-7xl mx-auto pt-20">
        <div ref={textRef} className="max-w-3xl">
          <span className="walker-nav-link text-[#D4A84B] tracking-[0.2em] mb-4 block text-xs font-semibold uppercase shadow-black/50 drop-shadow-md">
            EST. 2015 • Muscat, Oman
          </span>
          <h1 className="walker-heading text-white text-5xl lg:text-7xl leading-[1.05] mb-6 font-serif tracking-tight drop-shadow-lg">
            AL SHOMOUKH <br />
            <span className="text-white/90 italic font-light">International Private School.</span>
          </h1>
          <p className="walker-body text-white/90 text-base lg:text-lg max-w-xl leading-relaxed mb-10 border-l-2 border-[#D4A84B] pl-6 drop-shadow-md">
            Global Education with Omani Values. We provide a holistic education for students aged 3-18 through the UK National Curriculum, IGCSE, A-Levels, and Omani GED.
          </p>

          <div ref={ctaRef} className="flex flex-wrap items-center gap-5">
            <button className="px-8 py-4 bg-[#D4A84B] text-[#7A1F2E] text-xs font-bold tracking-widest uppercase hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl rounded-sm">
              Admissions
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-[#7A1F2E] transition-all duration-300 rounded-sm">
              Curriculum
            </button>
            <button className="group px-6 py-4 text-white hover:text-[#D4A84B] transition-colors text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              Book a Tour <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Celebrating Students - Moved to bottom right or kept separate to reduce clutter */}
      <div className="absolute bottom-12 left-8 lg:left-20 hidden lg:block max-w-lg z-10">
        <div className="text-white/60 text-[10px] uppercase tracking-widest mb-1 font-semibold flex items-center gap-2">
          <span className="w-8 h-[1px] bg-[#D4A84B]"></span> Featured Students
        </div>
        <p className="text-white/80 text-xs leading-relaxed font-light">
          <span className="text-white font-medium">Mohammed Al Mahrooqi</span> (Gr 10B) •
          <span className="text-white font-medium ml-2">Lina Al Ashqar</span> (Gr 12B)
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-10 flex flex-col items-center gap-2 text-white/40 z-10">
        <span className="text-[10px] uppercase tracking-[0.2em] -rotate-90 origin-center translate-y-8">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-white/60 mt-8"></div>
      </div>
    </div>
  );
};

export default HeroSection;
