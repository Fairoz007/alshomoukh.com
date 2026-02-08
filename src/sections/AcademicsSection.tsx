import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Book, Globe, GraduationCap, Microscope } from 'lucide-react';

interface AcademicsSectionProps {
  isActive?: boolean;
}

const stats = [
  { value: "100%", label: "University Acceptance" },
  { value: "35+", label: "Student Nationalities" },
  { value: "1:12", label: "Student-Teacher Ratio" },
  { value: "3", label: "Academic Pathways" }
];

const AcademicsSection = ({ isActive = false }: AcademicsSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(headerRef.current, { opacity: 0, y: 30 });
      cardsRef.current.forEach(card => {
        if (card) gsap.set(card, { opacity: 0, y: 50 });
      });

      if (isActive) {
        const tl = gsap.timeline({ delay: 0.2 });

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
              duration: 0.6,
              ease: 'power3.out'
            }, `-=${0.55 - index * 0.1}`); // Overlap slightly for flow
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-[#FCFBF9] overflow-hidden flex flex-col justify-center">
      {/* Background Graphic */}
      <div className="absolute right-0 bottom-0 w-[40vw] h-[40vw] bg-[#E8E4DD] rounded-full blur-[120px] opacity-40 translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 w-full px-8 lg:px-20 max-w-[1700px] mx-auto h-full flex flex-col justify-center">
        {/* Header and Stats */}
        <div ref={headerRef} className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-12 lg:gap-0">
          <div className="max-w-2xl">
            <span className="walker-nav-link text-[#7A1F2E]/70 text-xs tracking-widest mb-4 block font-semibold">
              ACADEMIC EXCELLENCE
            </span>
            <h2 className="walker-heading text-[#2A2A2A] text-4xl lg:text-6xl mb-6">
              Empowering the Mind
            </h2>
            <p className="walker-body text-[#4A4A4A] text-lg leading-relaxed">
              From our EYFS Kindergarten to our rigorous Upper School curriculum (IGCSE, A-Levels, & Omani GED),
              Al Shomoukh students are engaged in hands-on learning that prepares them for success in university and beyond.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-left">
                <div className="walker-heading text-[#D4A84B] text-4xl lg:text-5xl font-medium mb-1">
                  {stat.value}
                </div>
                <div className="walker-body text-[#6A6A6A] text-xs uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Division Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Kindergarten (EYFS)",
              grade: "KG1 & KG2",
              desc: "7 areas of learning focused on characteristics of effective learning and play-based inquiry.",
              icon: <Book className="w-8 h-8" />,
              image: "https://images.unsplash.com/photo-1587654780291-39c940483713?w=600&q=80"
            },
            {
              title: "Primary School",
              grade: "Grades 1 - 6",
              desc: "Based on the UK National Curriculum, focusing on core subjects and creativity.",
              icon: <Globe className="w-8 h-8" />,
              image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80"
            },
            {
              title: "Lower Secondary",
              grade: "Grades 7 - 8",
              desc: "Building academic foundations and independence for future specialization.",
              icon: <Microscope className="w-8 h-8" />,
              image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80"
            },
            {
              title: "Upper Secondary",
              grade: "Grades 9 - 12",
              desc: "Choice of IGCSE, A-Levels, or Omani GED (Bilingual) pathways for university prep.",
              icon: <GraduationCap className="w-8 h-8" />,
              image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80"
            }
          ].map((item, index) => (
            <div
              key={item.title}
              ref={el => { cardsRef.current[index] = el; }}
              className="group relative h-[360px] overflow-hidden border border-[#e5e5e5] bg-white hover:border-[#7A1F2E] transition-colors duration-500 rounded-sm"
            >
              {/* Image Top Half */}
              <div className="h-1/2 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#7A1F2E]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src={item.image} onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80'} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              {/* Content Bottom Half */}
              <div className="p-6 relative bg-white h-1/2 flex flex-col">
                <div className="absolute -top-8 right-6 bg-white p-3 rounded-full shadow-md text-[#D4A84B]">
                  {item.icon}
                </div>
                <h3 className="walker-heading text-xl text-[#2A2A2A] mb-1">
                  {item.title}
                </h3>
                <span className="text-[10px] font-bold text-[#7A1F2E] uppercase tracking-wider mb-3 block">
                  {item.grade}
                </span>
                <p className="walker-body text-[#6A6A6A] text-xs leading-relaxed line-clamp-3 mb-auto">
                  {item.desc}
                </p>
                <a href="#" className="inline-flex items-center gap-2 walker-nav-link text-[10px] text-[#7A1F2E] mt-4 hover:gap-3 transition-all font-bold uppercase">
                  Explore <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicsSection;
