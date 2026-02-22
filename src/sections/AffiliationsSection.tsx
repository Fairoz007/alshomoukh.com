import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AffiliationsSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const logosRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const header = headerRef.current;
        const logos = logosRef.current;

        if (!section || !header || !logos) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                }
            });

            tl.fromTo(header,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
            )
                .fromTo(logos.children,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
                    '-=0.3'
                );
        }, section);

        return () => ctx.revert();
    }, []);

    // Placeholder numbers for affiliations as per user request (1, 2, 3, 4, 5, 7)
    // In a real scenario, these would be proper logos or names.
    const affiliations = [1, 2, 3, 4, 5, 7];

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-white border-t border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div ref={headerRef} className="text-center mb-12">
                    <h2 className="text-3xl text-[#0B1E2F] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Our Affiliations
                    </h2>
                    <div className="w-16 h-px bg-[#C9A45C] mx-auto" />
                </div>

                <div
                    ref={logosRef}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-0"
                >
                    {affiliations.map((item) => (
                        <div
                            key={item}
                            className="w-32 h-24 bg-[#F4F1EA] flex items-center justify-center rounded-md grayscale hover:grayscale-0 transition-all duration-300 hover:shadow-md cursor-pointer group"
                        >
                            <span className="text-2xl font-bold text-[#C9A45C] group-hover:scale-110 transition-transform">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AffiliationsSection;
