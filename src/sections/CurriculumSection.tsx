import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const curriculumStages = [
  {
    number: '01',
    title: 'Early Years Foundation',
    description:
      'Inquiry-led learning that builds confidence, communication, and early numeracy through play-based exploration.',
  },
  {
    number: '02',
    title: 'Primary Schooling',
    description:
      'A balanced program developing critical thinking, creativity, and collaboration through interdisciplinary projects.',
  },
  {
    number: '03',
    title: 'Secondary Excellence',
    description:
      'Rigorous preparation for top universities with personalized guidance and advanced coursework.',
  },
];

const CurriculumSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;

    if (!section || !header || !cards) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });

      tl.fromTo(header,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      )
      .fromTo(cards.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
        '-=0.3'
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="curriculum"
      className="py-16 lg:py-24 bg-[#F4F1EA]"
    >
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-12"
          style={{ opacity: 0 }}
        >
          <p className="eyebrow-gold mb-4">Curriculum Overview</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#0B1E2F] leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            A Seamless Journey from Foundation to Graduation
          </h2>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {curriculumStages.map((stage, index) => (
            <div
              key={index}
              className="bg-white border-t-2 border-[#C9A45C] p-6 lg:p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <p
                className="text-4xl lg:text-5xl text-[#C9A45C] mb-3"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {stage.number}
              </p>
              <h3
                className="text-xl lg:text-2xl text-[#0B1E2F] mb-3"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {stage.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed text-sm">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
