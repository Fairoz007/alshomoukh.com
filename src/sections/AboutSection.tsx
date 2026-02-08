import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { UserCheck, Star, Heart, Lightbulb } from 'lucide-react';

interface AboutSectionProps {
    isActive?: boolean;
}

const AboutSection = ({ isActive = false }: AboutSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(leftRef.current, { opacity: 0, x: -50 });
            gsap.set(rightRef.current, { opacity: 0, x: 50 });
            featureRefs.current.forEach(el => gsap.set(el, { opacity: 0, y: 30 }));

            if (isActive) {
                const tl = gsap.timeline({ delay: 0.2 });

                tl.to(leftRef.current, {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: 'power3.out'
                })
                    .to(rightRef.current, {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        ease: 'power3.out'
                    }, '-=0.8');

                featureRefs.current.forEach((el, i) => {
                    if (el) {
                        tl.to(el, {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            ease: 'power2.out'
                        }, `-=${0.5 - i * 0.1}`);
                    }
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, [isActive]);

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
        <div ref={containerRef} className="relative w-full h-full bg-[#F5F3EF] overflow-hidden flex flex-col lg:flex-row">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[#7A1F2E]/5 lg:w-1/3 lg:h-full transition-all duration-1000" />

            {/* Left Content */}
            <div className="relative lg:w-5/12 h-full flex flex-col justify-center px-8 lg:px-20 py-12 lg:py-0 z-10">
                <div ref={leftRef}>
                    <span className="walker-nav-link text-[#7A1F2E]/60 text-xs tracking-widest mb-4 block uppercase">
                        Our Foundation
                    </span>
                    <h2 className="walker-heading text-[#7A1F2E] text-4xl lg:text-6xl mb-6 leading-tight">
                        GLOBAL VISION,<br />OMANI ROOTS.
                    </h2>
                    <p className="walker-body text-[#4A4A4A] text-lg leading-relaxed mb-6 font-medium">
                        Founded in 2015, AAl Shomoukh International Private School provides a world-class education for students aged 3–18.
                    </p>
                    <p className="walker-body text-[#6A6A6A] text-base leading-relaxed mb-8 max-w-lg">
                        Our mission is to empower students to achieve academic excellence while grounding them in their cultural heritage.
                        We strive to be a community where every learner is valued, challenged, and inspired to contribute to the world.
                    </p>

                    <button className="walker-btn-outline border-[#7A1F2E] text-[#7A1F2E] hover:bg-[#7A1F2E] hover:text-white transition-all duration-300">
                        Our History & Leadership
                    </button>
                </div>
            </div>

            {/* Right Content - Features/Values */}
            <div className="lg:w-7/12 h-full flex flex-col justify-center px-6 lg:px-20 py-12 lg:py-0 bg-white relative">
                {/* Background Image Accent */}
                <div
                    className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `none`,
                        backgroundSize: 'cover'
                    }}
                />

                <div ref={rightRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 max-w-3xl mx-auto">
                    {values.map((item, index) => (
                        <div
                            key={index}
                            ref={el => { featureRefs.current[index] = el; }}
                            className="flex gap-5 items-start group p-4 hover:bg-[#F9F9F9] rounded-lg transition-colors duration-300"
                        >
                            <div className="p-3 bg-white border border-gray-100 shadow-sm rounded-full group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="walker-heading text-[#2A2A2A] text-lg mb-2 group-hover:text-[#7A1F2E] transition-colors">
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
