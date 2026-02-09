import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Entrace animations
      gsap.set(textRef.current, { opacity: 0, y: 60 });
      gsap.set(ctaRef.current, { opacity: 0, y: 40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%", // Start animation when top of section is at 60% of viewport
          toggleActions: "play none none reverse"
        }
      });

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

      // Parallax Background
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

    }, containerRef);

    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 10;
      const yPos = (clientY / window.innerHeight - 0.5) * 10;

      gsap.to(bgRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out",
        overwrite: "auto" // Prevent conflicts
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black flex items-center perspective-1000">
      {/* Background Video/Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 scale-110 will-change-transform backface-hidden"
        style={{
          backgroundImage: `url('/hero_bg.png')`,
        }}
      />

      {/* Enhanced Gradient Overlays for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent sm:via-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-black/60 opacity-90" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col justify-center px-6 lg:px-20 max-w-[1800px] mx-auto pt-24 md:pt-20 h-full">
        <div ref={textRef} className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-[#D4A84B]"></span>
            <span className="walker-nav-link text-[#D4A84B] tracking-[0.2em] text-[10px] md:text-xs font-semibold uppercase shadow-black/50 drop-shadow-md">
              EST. 2015 • Muscat, Oman
            </span>
          </div>

          <h1 className="walker-heading text-white text-5xl md:text-6xl lg:text-8xl leading-[1.05] mb-8 font-serif tracking-tight drop-shadow-xl">
            AL SHOMOUKH <br />
            <span className="text-white/80 italic font-light">International School</span>
          </h1>

          <p className="walker-body text-white/90 text-sm md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-12 border-l-4 border-[#D4A84B] pl-6 drop-shadow-md font-light">
            Providing a holistic education for students aged 3-18 through the <strong className="text-white font-medium">UK National Curriculum</strong>, <strong className="text-white font-medium">IGCSE</strong>, <strong className="text-white font-medium">A-Levels</strong>, and <strong className="text-white font-medium">Omani GED</strong>. Global vision with local values.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-16">
            <button className="w-full sm:w-auto px-10 py-5 bg-[#D4A84B] text-[#7A1F2E] text-xs font-bold tracking-[0.15em] uppercase hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl rounded-sm text-center">
              Admissions Open
            </button>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[#7A1F2E] transition-all duration-300 rounded-sm text-center shadow-lg">
              Book a Campus Tour
            </button>
          </div>

          {/* Key Strengths / Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-8 max-w-3xl">
            <div>
              <h4 className="text-[#D4A84B] text-2xl md:text-3xl font-serif mb-1">100%</h4>
              <p className="text-white/60 text-[10px] uppercase tracking-widest">University Acceptance</p>
            </div>
            <div>
              <h4 className="text-[#D4A84B] text-2xl md:text-3xl font-serif mb-1">35+</h4>
              <p className="text-white/60 text-[10px] uppercase tracking-widest">Nationalities</p>
            </div>
            <div>
              <h4 className="text-[#D4A84B] text-2xl md:text-3xl font-serif mb-1">1:12</h4>
              <p className="text-white/60 text-[10px] uppercase tracking-widest">Teacher Ratio</p>
            </div>
            <div>
              <h4 className="text-[#D4A84B] text-2xl md:text-3xl font-serif mb-1">CIS</h4>
              <p className="text-white/60 text-[10px] uppercase tracking-widest">Accredited Member</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Bottom Right */}
      <div className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-4 text-white/30 z-20">
        <span className="text-[9px] uppercase tracking-[0.3em] font-medium -rotate-90 origin-center translate-y-8">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/10 to-white/50 mt-10"></div>
      </div>
    </div>
  );
};

export default HeroSection;
