import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const admissionSteps = [
  {
    number: '01',
    title: 'Initial Enquiry',
    description:
      'Submit your interest via our digital portal or visit our campus for a personalized introduction.',
  },
  {
    number: '02',
    title: 'Campus Visit',
    description:
      'A private tour of our state-of-the-art facilities and a chance to meet our faculty leadership.',
  },
  {
    number: '03',
    title: 'Assessment',
    description:
      'A collaborative evaluation focused on your child\'s cognitive, social, and academic potential.',
  },
  {
    number: '04',
    title: 'Enrollment',
    description:
      'Securing placement through documentation and welcoming your family to our community.',
  },
];

const AdmissionsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const timeline = timelineRef.current;

    if (!section || !header || !timeline) return;

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
      .fromTo(timeline.querySelector('.timeline-line'),
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.2'
      )
      .fromTo(timeline.querySelectorAll('.step-circle'),
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'back.out(1.5)' },
        '-=0.4'
      )
      .fromTo(timeline.querySelectorAll('.step-content'),
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: 'power2.out' },
        '-=0.3'
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="admissions"
      className="py-16 lg:py-24 bg-[#F4F1EA]"
    >
      <div className="w-full px-6 lg:px-12">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center max-w-2xl mx-auto mb-12"
          style={{ opacity: 0 }}
        >
          <p className="eyebrow-gold mb-4">Admissions</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#0B1E2F] mb-4 leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Your Child's Journey to Excellence Begins Here
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            Experience an enrollment process tailored to the unique aspirations
            of your family. Our boutique admissions team ensures a seamless
            transition into our academic elite community.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Line */}
            <div
              className="timeline-line absolute top-8 left-0 right-0 h-px bg-[#C9A45C]"
              style={{ transformOrigin: 'left', transform: 'scaleX(0)' }}
            />

            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {admissionSteps.map((step, index) => (
                <div key={index} className="text-center">
                  {/* Circle */}
                  <div className="step-circle w-16 h-16 rounded-full border-2 border-[#C9A45C] bg-[#F4F1EA] flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span
                      className="text-xl text-[#C9A45C]"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="step-content">
                    <h3
                      className="text-lg text-[#0B1E2F] mb-2"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {admissionSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="step-circle w-12 h-12 rounded-full border-2 border-[#C9A45C] bg-[#F4F1EA] flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-lg text-[#C9A45C]"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {index < admissionSteps.length - 1 && (
                    <div className="w-px flex-1 bg-[#C9A45C] my-2" />
                  )}
                </div>
                <div className="step-content pb-6">
                  <h3
                    className="text-lg text-[#0B1E2F] mb-2"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
