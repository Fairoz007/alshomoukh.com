import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { UserCheck, Star, Heart, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const bgDecoRef = useRef<HTMLDivElement>(null);
    const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(leftRef.current, { opacity: 0, x: -50 });
            gsap.set(rightRef.current, { opacity: 0, x: 50 });
            featureRefs.current.forEach(el => gsap.set(el, { opacity: 0, y: 30 }));
            // Background Parallax
            gsap.to(bgDecoRef.current, {
                yPercent: 20,
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
                    start: "top 85%", // Trigger sooner
                    toggleActions: "play none none reverse"
                }
            });

            tl.to(leftRef.current, {
                opacity: 1,
                x: 0,
                duration: 0.8, // Faster
                ease: 'power3.out'
            })
                .to(rightRef.current, {
                    opacity: 1,
                    x: 0,
                    duration: 0.8, // Faster
                    ease: 'power3.out'
                }, '-=0.6'); // Tighter overlap

            featureRefs.current.forEach((el, i) => {
                if (el) {
                    tl.to(el, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5, // Faster
                        ease: 'power2.out'
                    }, `-=${0.4 - i * 0.08}`); // Faster stagger
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const values = [
        {
            icon: <Heart className="w-6 h-6 text-[#7A1F2E]" />,
            title: "Respect",
            text: "Encouraging kindness, understanding, and tolerance for others and oneself."
        },
        {
            icon: <UserCheck className="w-6 h-6 text-[#D4A84B]" />,
            title: "Integrity",
            text: "Honesty and responsibility are our core values."
        },
        {
            icon: <Star className="w-6 h-6 text-[#7A1F2E]" />,
            title: "Success",
            text: "Nurturing the holistic development of every community member."
        },
        {
            icon: <Lightbulb className="w-6 h-6 text-[#D4A84B]" />,
            title: "Expectations",
            text: "Setting high standards, supporting exploration, and critical thinking."
        }
    ];

    return (
        <div ref={containerRef} className="relative w-full min-h-screen py-24 lg:py-40 bg-[#F5F3EF] overflow-hidden flex flex-col lg:flex-row perspective-1000">
            {/* Decorative Background */}
            <div ref={bgDecoRef} className="absolute top-0 left-0 w-full h-full lg:w-4/12 bg-[#7A1F2E]/5" />

            {/* Left Content */}
            <div className="relative lg:w-5/12 flex flex-col justify-center px-6 lg:px-24 py-12 lg:py-0 z-10">
                <div ref={leftRef}>
                    <span className="walker-nav-link text-[#7A1F2E] text-xs font-bold tracking-[0.2em] mb-6 block uppercase opacity-80">
                        Our Foundation
                    </span>
                    <h2 className="walker-heading text-[#7A1F2E] text-4xl lg:text-7xl mb-8 leading-[0.95] tracking-tight">
                        Global Vision,<br />Omani Roots.
                    </h2>
                    <p className="walker-body text-[#2A2A2A] text-lg lg:text-xl leading-relaxed mb-8 font-medium max-w-lg">
                        Founded in 2015, Al Shomoukh International Private School provides a world-class education for students aged 3–18.
                    </p>
                    <p className="walker-body text-[#6A6A6A] text-sm lg:text-base leading-relaxed mb-10 max-w-md text-balance">
                        Our mission is to empower students to achieve academic excellence while grounding them in their cultural heritage.
                        We strive to be a community where every learner is valued, challenged, and inspired.
                    </p>

                    <button className="walker-btn-outline border-[#7A1F2E] text-[#7A1F2E] hover:bg-[#7A1F2E] hover:text-white transition-all duration-300 text-xs px-8 py-4 tracking-[0.15em]">
                        Our History & Leadership
                    </button>
                </div>
            </div>

            {/* Right Content - Features/Values */}
            <div className="lg:w-7/12 flex flex-col justify-center px-6 lg:px-24 py-12 lg:py-0 bg-transparent relative z-10">
                <div ref={rightRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-4xl mx-auto perspective-1000">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            ref={el => { featureRefs.current[index] = el; }}
                            className="flex gap-6 items-start group p-6 hover:bg-white/60 rounded-sm transition-all duration-500 hover:shadow-sm border border-transparent hover:border-black/5 hover-lift-3d preserve-3d"
                        >
                            <div className="p-4 bg-white border border-[#e5e5e5] shadow-sm rounded-full group-hover:scale-110 transition-transform duration-500 shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="walker-heading text-[#2A2A2A] text-xl mb-3 group-hover:text-[#7A1F2E] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="walker-body text-[#6A6A6A] text-sm leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
