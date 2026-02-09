import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Pencil, CheckCircle2, CalendarDays, CircleHelp, FileText } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const AdmissionSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(leftRef.current, { opacity: 0, x: -50 });
      gsap.set(rightRef.current, { opacity: 0, x: 50 });
      stepRefs.current.forEach(el => gsap.set(el, { opacity: 0, x: -20 }));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

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
          }, `-=${0.5 - index * 0.1}`);
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
      {/* Left Panel: Image & Intro - Sticky on Desktop */}
      <div className="lg:w-5/12 relative min-h-[50vh] lg:min-h-screen lg:h-auto overflow-hidden bg-[#1a1a1a] lg:sticky lg:top-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1427504494785-3a9ca2801561?w=1200&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#7A1F2E]/90 via-[#7A1F2E]/40 to-transparent" />

        <div ref={leftRef} className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16 z-10">
          <span className="walker-nav-link text-[#D4A84B] text-xs font-bold tracking-[0.2em] mb-6 block">
            JOIN OUR FAMILY
          </span>
          <h2 className="walker-heading text-white text-5xl lg:text-7xl mb-8 leading-none">
            Admissions <br />Process
          </h2>
          <p className="walker-body text-white/90 text-lg lg:text-xl leading-relaxed mb-12 max-w-md font-light">
            We welcome students from all backgrounds who are eager to learn and grow.
            Our admissions team is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="walker-btn-primary bg-[#D4A84B] text-[#7A1F2E] hover:bg-white border-none font-bold text-center justify-center py-5 px-10 rounded-sm shadow-xl tracking-[0.15em] uppercase text-xs">
              Inquire Now
            </button>
            <button className="walker-btn-outline border-white text-white hover:bg-white hover:text-[#7A1F2E] text-center justify-center py-5 px-10 rounded-sm tracking-[0.15em] uppercase text-xs">
              Book a Tour
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel: Content */}
      <div className="lg:w-7/12 bg-[#FCFBF9] flex flex-col justify-center px-6 lg:px-24 py-16 lg:py-24">
        <div ref={rightRef} className="max-w-3xl mx-auto w-full space-y-20">

          {/* 1. Timeline Process */}
          <div>
            <h3 className="walker-heading text-[#7A1F2E] text-3xl mb-10 flex items-center gap-4">
              <FileText className="w-6 h-6 text-[#D4A84B]" /> How to Apply
            </h3>
            <div className="space-y-10 relative pl-4">
              {/* Vertical Line */}
              <div className="absolute left-[27px] top-4 bottom-4 w-[1px] bg-[#e5e5e5]" />

              {[
                {
                  title: "Book a Tour",
                  desc: "Visit our campus to experience our learning environment firsthand. Tours available daily.",
                  icon: <CalendarDays className="w-4 h-4 text-white" />
                },
                {
                  title: "Submit Application",
                  desc: "Complete the online application form and submit required documents (Passport, Report Cards).",
                  icon: <Pencil className="w-4 h-4 text-white" />
                },
                {
                  title: "Assessment & Interview",
                  desc: "Students from Grade 1+ take an entrance assessment. EYFS students enjoy a play-based observation.",
                  icon: <FileText className="w-4 h-4 text-white" />
                },
                {
                  title: "Offer & Registration",
                  desc: "Upon success, an offer letter is issued. Secure the seat by paying the registration fee.",
                  icon: <CheckCircle2 className="w-4 h-4 text-white" />
                }
              ].map((step, index) => (
                <div
                  key={index}
                  ref={el => { stepRefs.current[index] = el; }}
                  className="relative flex gap-8 items-start group"
                >
                  <div className="relative z-10 shrink-0 w-8 h-8 rounded-full bg-[#7A1F2E] shadow-md flex items-center justify-center border-4 border-[#FCFBF9] mt-1 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="walker-heading text-[#2A2A2A] text-xl mb-2 group-hover:text-[#7A1F2E] transition-colors">
                      {step.title}
                    </h4>
                    <p className="walker-body text-[#6A6A6A] text-sm leading-relaxed max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Eligibility & Age Criteria */}
          <div>
            <h3 className="walker-heading text-[#7A1F2E] text-3xl mb-8">Age Criteria (2025-2026)</h3>
            <div className="bg-white border border-[#e5e5e5] rounded-sm shadow-sm overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#f9f9f9] text-[#7A1F2E] font-bold uppercase text-xs tracking-wider border-b border-[#e5e5e5]">
                  <tr>
                    <th className="px-8 py-5">Grade</th>
                    <th className="px-8 py-5">Age Requirement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e5e5]">
                  <tr className="hover:bg-[#fcfbf9] transition-colors">
                    <td className="px-8 py-5 font-medium text-[#2A2A2A]">KG 1</td>
                    <td className="px-8 py-5 text-[#6A6A6A]">3 years by Sep 1</td>
                  </tr>
                  <tr className="hover:bg-[#fcfbf9] transition-colors">
                    <td className="px-8 py-5 font-medium text-[#2A2A2A]">KG 2</td>
                    <td className="px-8 py-5 text-[#6A6A6A]">4 years by Sep 1</td>
                  </tr>
                  <tr className="hover:bg-[#fcfbf9] transition-colors">
                    <td className="px-8 py-5 font-medium text-[#2A2A2A]">Grade 1</td>
                    <td className="px-8 py-5 text-[#6A6A6A]">6 years by Sep 1</td>
                  </tr>
                </tbody>
              </table>
              <div className="p-5 bg-[#fffdf5] text-xs text-[#8a6d3b] border-t border-[#e5e5e5] font-medium tracking-wide">
                * Age cut-off date is strictly September 1st as per Ministry of Education regulations.
              </div>
            </div>
          </div>

          {/* 3. FAQ Accordion */}
          <div>
            <h3 className="walker-heading text-[#7A1F2E] text-3xl mb-8 flex items-center gap-4">
              <CircleHelp className="w-6 h-6 text-[#D4A84B]" /> Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="w-full space-y-3">
              <AccordionItem value="item-1" className="bg-white border border-[#e5e5e5] rounded-sm px-6 hover:shadow-sm transition-all duration-300">
                <AccordionTrigger className="hover:no-underline hover:text-[#D4A84B] walker-heading text-lg py-5">
                  Is there an application fee?
                </AccordionTrigger>
                <AccordionContent className="walker-body text-[#6A6A6A] leading-relaxed pb-6 text-base">
                  Yes, a non-refundable application fee of OMR 25 is required upon submission of the application form.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="bg-white border border-[#e5e5e5] rounded-sm px-6 hover:shadow-sm transition-all duration-300">
                <AccordionTrigger className="hover:no-underline hover:text-[#D4A84B] walker-heading text-lg py-5">
                  Do you provide school transport?
                </AccordionTrigger>
                <AccordionContent className="walker-body text-[#6A6A6A] leading-relaxed pb-6 text-base">
                  Yes, we have a safe and reliable bus service covering transparent routes across Muscat. Please contact the transport office for specific locations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="bg-white border border-[#e5e5e5] rounded-sm px-6 hover:shadow-sm transition-all duration-300">
                <AccordionTrigger className="hover:no-underline hover:text-[#D4A84B] walker-heading text-lg py-5">
                  What documents are required?
                </AccordionTrigger>
                <AccordionContent className="walker-body text-[#6A6A6A] leading-relaxed pb-6 text-base">
                  You will need: Copy of Passport & Visa (Student & Parents), Birth Certificate, Immunization Record, Recent Report Cards (last 2 years), and 4 passport photos.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdmissionSection;
