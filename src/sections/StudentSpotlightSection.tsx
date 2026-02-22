import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StudentSpotlightSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const content = contentRef.current;

        if (!section || !content) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(content,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    }
                }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-16 lg:py-24 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="eyebrow-gold mb-4">Student Achievement</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#0B1E2F] leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        About Our Students
                    </h2>
                </div>

                <div
                    ref={contentRef}
                    className="bg-[#F4F1EA] rounded-lg overflow-hidden shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center"
                >
                    <div className="md:w-1/2 h-64 md:h-96 relative z-0">
                        {/* Placeholder for student image */}
                        <div className="absolute inset-0 bg-[#0B1E2F]/10 flex items-center justify-center -z-10">
                            <span className="text-[#0B1E2F] font-semibold text-lg">Student Photo</span>
                        </div>
                        <img
                            src="/images/student_leader.jpg"
                            alt="Lina Al Ashqar"
                            className="w-full h-full object-cover relative z-10"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x600?text=Lina+Al+Ashqar';
                            }}
                        />
                    </div>
                    <div className="md:w-1/2 p-8 lg:p-12 text-center md:text-left">
                        <h3 className="text-2xl lg:text-3xl text-[#0B1E2F] mb-2 font-semibold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                            Lina Al Ashqar
                        </h3>
                        <p className="text-[#C9A45C] font-medium mb-6 uppercase tracking-wider text-sm">
                            Grade 12B
                        </p>
                        <div className="w-12 h-px bg-[#C9A45C] mx-auto md:mx-0 mb-6" />
                        <p className="text-[#6B7280] leading-relaxed italic text-lg">
                            "Lina has contributed to the school winning in the Arabic Social Studies Ministry Project."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StudentSpotlightSection;
