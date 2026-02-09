import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Book, Globe, GraduationCap, Microscope } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "100%", label: "University Acceptance" },
  { value: "35+", label: "Student Nationalities" },
  { value: "1:12", label: "Student-Teacher Ratio" },
  { value: "3", label: "Academic Pathways" }
];

const AcademicsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const approachRef = useRef<HTMLDivElement>(null);
  const bgGraphicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { opacity: 0, y: 30 });
      gsap.set(approachRef.current, { opacity: 0, y: 40 });
      cardsRef.current.forEach(card => {
        if (card) gsap.set(card, { opacity: 0, y: 50 });
      });

      // Background Parallax
      gsap.to(bgGraphicRef.current, {
        yPercent: 40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(headerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      });

      cardsRef.current.forEach((card, index) => {
        if (card) {
          tl.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
          }, `-=${0.6 - index * 0.1}`);
        }
      });

      // Animate Approach Section separately when it comes into view
      gsap.to(approachRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: approachRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-[#FCFBF9] overflow-hidden flex flex-col justify-center py-24 lg:py-32">
      {/* Background Graphic */}
      <div ref={bgGraphicRef} className="absolute right-0 top-0 w-[50vw] h-[50vw] bg-[#E8E4DD] rounded-full blur-[120px] opacity-30 translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="relative z-10 w-full px-6 lg:px-24 max-w-[1700px] mx-auto h-full flex flex-col justify-center">
        {/* Header and Stats */}
        <div ref={headerRef} className="flex flex-col lg:flex-row items-end justify-between mb-20 lg:mb-28 gap-10 lg:gap-0 border-b border-[#e5e5e5] pb-16">
          <div className="max-w-3xl">
            <span className="walker-nav-link text-[#7A1F2E] text-xs tracking-[0.2em] mb-4 block font-bold uppercase opacity-80">
              Academic Excellence
            </span>
            <h2 className="walker-heading text-[#2A2A2A] text-5xl lg:text-7xl mb-8 leading-[0.95]">
              Empowering <br />Future Leaders
            </h2>
            <p className="walker-body text-[#4A4A4A] text-lg lg:text-xl leading-relaxed max-w-2xl font-light text-balance">
              We provide a rigorous, internationally recognized education that fosters critical thinking, creativity, and global citizenship, anchored in Omani values.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-10 w-full lg:w-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-left">
                <div className="walker-heading text-[#D4A84B] text-4xl lg:text-5xl font-medium mb-1">
                  {stat.value}
                </div>
                <div className="walker-body text-[#6A6A6A] text-[10px] lg:text-xs uppercase tracking-[0.15em] font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Curriculum Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 perspective-1000">
          {[
            {
              title: "Kindergarten",
              grade: "EYFS (KG1 & KG2)",
              desc: "A nurturing environment focused on play-based inquiry, social development, and early literacy.",
              icon: <Book className="w-8 h-8" />,
              image: "https://images.unsplash.com/photo-1587654780291-39c940483713?w=600&q=80"
            },
            {
              title: "Primary School",
              grade: "Grades 1 - 6",
              desc: "Building strong foundations in core subjects through the Cambridge Primary Curriculum.",
              icon: <Globe className="w-8 h-8" />,
              image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80"
            },
            {
              title: "Lower Secondary",
              grade: "Grades 7 - 8",
              desc: "Developing independence and analytical skills, preparing students for IGCSEs.",
              icon: <Microscope className="w-8 h-8" />,
              image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80"
            },
            {
              title: "Upper Secondary",
              grade: "Grades 9 - 12",
              desc: "Specialized pathways including IGCSE, A-Levels, and GED for university matriculation.",
              icon: <GraduationCap className="w-8 h-8" />,
              image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80"
            }
          ].map((item, index) => (
            <div
              key={item.title}
              ref={el => { cardsRef.current[index] = el; }}
              className="group relative h-[420px] overflow-hidden bg-white hover:border-[#7A1F2E]/20 border border-transparent hover-lift-3d preserve-3d transition-all duration-700 rounded-sm shadow-sm hover:shadow-2xl"
            >
              {/* Image Top Half */}
              <div className="h-[45%] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src={item.image} onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80'} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>

              {/* Content Bottom */}
              <div className="p-8 relative bg-white h-[55%] flex flex-col">
                <div className="absolute -top-8 right-6 bg-white p-4 rounded-full shadow-lg text-[#D4A84B] group-hover:text-[#7A1F2E] transition-colors duration-500">
                  {item.icon}
                </div>
                <h3 className="walker-heading text-xl lg:text-2xl text-[#2A2A2A] mb-2 group-hover:text-[#7A1F2E] transition-colors duration-300">
                  {item.title}
                </h3>
                <span className="text-[10px] font-bold text-[#7A1F2E] uppercase tracking-wider mb-4 block opacity-80">
                  {item.grade}
                </span>
                <p className="walker-body text-[#6A6A6A] text-xs lg:text-sm leading-relaxed mb-auto line-clamp-3">
                  {item.desc}
                </p>
                <a href="#" className="inline-flex items-center gap-2 walker-nav-link text-[10px] text-[#7A1F2E] mt-4 hover:gap-3 transition-all font-bold uppercase border-b border-[#7A1F2E]/20 pb-1 w-fit hover:border-[#7A1F2E]">
                  Learn More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Teaching Approach & Assessment */}
        <div ref={approachRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start border-t border-[#e5e5e5] pt-16">
          <div>
            <h3 className="walker-heading text-[#2A2A2A] text-3xl mb-6">Teaching Approach</h3>
            <p className="walker-body text-[#4A4A4A] text-lg mb-8 leading-relaxed font-light">
              Our pedagogy blends traditional academic rigor with modern, inquiry-based learning. We focus on:
            </p>
            <ul className="space-y-6">
              {[
                "Student-Centered Learning: Tailoring instruction to individual needs.",
                "Bilingual Proficiency: Strong emphasis on both Arabic and English.",
                "Critical Thinking: Encouraging analysis over rote memorization."
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[#D4A84B] mt-2.5 shrink-0" />
                  <span className="walker-body text-[#4A4A4A] text-base lg:text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="walker-heading text-[#2A2A2A] text-3xl mb-6">Assessment & Outcomes</h3>
            <p className="walker-body text-[#4A4A4A] text-lg mb-8 leading-relaxed font-light">
              We use a balanced assessment system to track progress and ensure students meet international standards.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-8 border border-[#e5e5e5] rounded-sm shadow-sm hover:border-[#D4A84B]/50 transition-colors">
                <h4 className="walker-heading text-xl text-[#7A1F2E] mb-3">Continuous Assessment</h4>
                <p className="text-sm text-[#6A6A6A] leading-relaxed">Regular quizzes, projects, and class participation to monitor daily progress.</p>
              </div>
              <div className="bg-white p-8 border border-[#e5e5e5] rounded-sm shadow-sm hover:border-[#D4A84B]/50 transition-colors">
                <h4 className="walker-heading text-xl text-[#7A1F2E] mb-3">External Examinations</h4>
                <p className="text-sm text-[#6A6A6A] leading-relaxed">Preparation for Cambridge IGCSE, AS & A-Levels, and SATs.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AcademicsSection;
