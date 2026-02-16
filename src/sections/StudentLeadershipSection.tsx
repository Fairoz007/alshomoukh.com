import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StudentLeadershipSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const card = cardRef.current;

    if (!section || !image || !card) return;

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
        .fromTo(card,
          { x: 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          0.2
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-[#F4F1EA]"
    >
      <div className="flex flex-col lg:flex-row h-full">
        {/* Student Image */}
        <div
          ref={imageRef}
          className="w-full lg:w-[55vw] h-[50vh] lg:h-full relative will-change-transform"
          style={{ opacity: 0 }}
        >
          <img
            src="/images/student_leader.jpg"
            alt="Student Leader"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(244,241,234,0.2)] lg:block hidden" />
        </div>

        {/* Leadership Card */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div
            ref={cardRef}
            className="bg-white border border-[rgba(17,24,39,0.1)] p-8 lg:p-10 max-w-md relative will-change-transform"
            style={{ opacity: 0 }}
          >
            {/* Badge */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#C9A45C] rounded-full flex items-center justify-center">
              <Award size={20} className="text-white" />
            </div>

            <p className="eyebrow-gold mb-4">Student Leadership</p>
            <h3
              className="text-2xl lg:text-3xl text-[#0B1E2F] mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Leadership Development
            </h3>
            <p className="text-[#6B7280] leading-relaxed mb-6">
              Student leadership is not a title—it's a discipline. Through our
              bespoke programs, students learn to listen deeply, decide with
              integrity, and serve their community.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#0B1E2F] font-medium hover:text-[#C9A45C] transition-colors duration-300 group"
            >
              Meet Student Leaders
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

export default StudentLeadershipSection;
