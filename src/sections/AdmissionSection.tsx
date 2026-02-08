import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Pencil, CheckCircle2, CalendarDays, ArrowRight } from 'lucide-react';

interface AdmissionSectionProps {
  isActive?: boolean;
}

const AdmissionSection = ({ isActive = false }: AdmissionSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(leftRef.current, { opacity: 0, x: -50 });
      gsap.set(rightRef.current, { opacity: 0, x: 50 }); // Initialize rightRef correctly
      stepRefs.current.forEach(el => gsap.set(el, { opacity: 0, x: -20 }));

      if (isActive) {
        const tl = gsap.timeline({ delay: 0.2 });

        tl.to(leftRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out'
        });

        tl.to(rightRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.6');

        stepRefs.current.forEach((el, index) => {
          if (el) {
            tl.to(el, {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: 'power2.out'
            }, `-=${0.4 - index * 0.1}`);
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isActive]);



  return (
    <div ref={containerRef} className="relative w-full h-full flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* Left Panel: Image & Intro */}
      <div className="lg:w-5/12 h-full relative overflow-hidden bg-[#1a1a1a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1427504494785-3a9ca2801561?w=1200&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#7A1F2E]/80 to-transparent" />

        <div ref={leftRef} className="absolute inset-0 flex flex-col justify-end p-10 lg:p-16 z-10">
          <span className="walker-nav-link text-[#D4A84B] text-xs tracking-widest mb-4">
            JOIN OUR FAMILY
          </span>
          <h2 className="walker-heading text-white text-4xl lg:text-5xl mb-6">
            Admissions
          </h2>
          <p className="walker-body text-white/90 text-sm lg:text-base leading-relaxed mb-8 max-w-md">
            We welcome students from all backgrounds who are eager to learn and grow.
            Begin your journey with Al Shomoukh today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="walker-btn-primary bg-[#D4A84B] text-[#7A1F2E] hover:bg-white border-none font-bold">
              Inquire Now
            </button>
            <button className="walker-btn-outline border-white text-white hover:bg-white hover:text-[#7A1F2E]">
              Book a Tour
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel: Steps & Dates */}
      <div className="lg:w-7/12 h-full bg-[#FCFBF9] flex flex-col justify-center px-8 lg:px-20 py-12 overflow-y-auto">
        <div ref={rightRef} className="max-w-2xl mx-auto w-full">
          <h3 className="walker-heading text-[#7A1F2E] text-2xl mb-8">
            Application Process
          </h3>

          <div className="space-y-8 relative">
            {/* Vertical Line */}
            <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-[#e5e5e5]" />

            {[
              {
                title: "Book a Tour",
                desc: "Contact us to schedule a personal tour of our campus.",
                icon: <CalendarDays className="w-5 h-5 text-white" />
              },
              {
                title: "Assessment & Interview",
                desc: "Complete an entrance assessment and interview to determine placement.",
                icon: <Pencil className="w-5 h-5 text-white" />
              },
              {
                title: "Registration",
                desc: "Submit required documents and secure your seat with the registration fee.",
                icon: <CheckCircle2 className="w-5 h-5 text-white" />
              }
            ].map((step, index) => (
              <div
                key={index}
                ref={el => { stepRefs.current[index] = el; }}
                className="relative flex gap-6 items-start"
              >
                <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-[#7A1F2E] shadow-md flex items-center justify-center border-4 border-[#FCFBF9]">
                  {step.icon}
                </div>
                <div className="pt-1">
                  <h4 className="walker-heading text-[#2A2A2A] text-lg mb-2">
                    {step.title}
                  </h4>
                  <p className="walker-body text-[#6A6A6A] text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Important Dates Box */}
          <div className="mt-12 p-8 bg-white border border-[#e5e5e5] rounded-lg shadow-sm">
            <h4 className="walker-heading text-[#2A2A2A] text-lg mb-4 flex items-center gap-2">
              Important Dates
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="block text-xs font-bold text-[#7A1F2E] uppercase tracking-wider mb-1">
                  Oct 1
                </span>
                <p className="text-sm text-[#4A4A4A]">Admissions Open</p>
              </div>
              <div>
                <span className="block text-xs font-bold text-[#7A1F2E] uppercase tracking-wider mb-1">
                  Ongoing
                </span>
                <p className="text-sm text-[#4A4A4A]">Assessments & Tours</p>
              </div>
              <div>
                <span className="block text-xs font-bold text-[#7A1F2E] uppercase tracking-wider mb-1">
                  Sep 1
                </span>
                <p className="text-sm text-[#4A4A4A]">Academic Year Begins</p>
              </div>
              <div>
                <a href="#" className="flex items-center gap-1 text-sm text-[#D4A84B] font-medium hover:gap-2 transition-all mt-2">
                  View Fees Structure <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSection;
