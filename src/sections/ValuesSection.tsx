import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const values = [

    {
        title: 'To Think Better',
        subtitle: 'I Read',
        bgClass: 'bg-[#0B1E2F]', // Dark Blue
        textClass: 'text-white',
    },
];

const ValuesSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % values.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + values.length) % values.length);
    };

    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;

        gsap.fromTo(el,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, key: activeIndex }
        );
    }, [activeIndex]);

    return (
        <section ref={sectionRef} className="py-12 bg-[#F4F1EA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-2xl shadow-xl min-h-[300px] md:min-h-[400px] flex items-center justify-center">

                    {/* Background Transition */}
                    <div
                        className={`absolute inset-0 transition-colors duration-700 ease-in-out ${values[activeIndex].bgClass} opacity-90`}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-20 mix-blend-overlay" />

                    {/* Content */}
                    <div
                        ref={contentRef}
                        className="relative z-10 text-center px-4"
                    >
                        <h3 className={`text-2xl md:text-3xl lg:text-4xl font-medium mb-4 tracking-wide ${values[activeIndex].textClass} opacity-80 uppercase`}>
                            {values[activeIndex].title}
                        </h3>
                        <h2
                            className={`text-5xl md:text-7xl lg:text-8xl font-bold ${values[activeIndex].textClass}`}
                            style={{ fontFamily: 'Cormorant Garamond, serif' }}
                        >
                            {values[activeIndex].subtitle}
                        </h2>
                    </div>

                    {/* Controls */}
                    <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-20">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors backdrop-blur-sm text-current"
                            aria-label="Previous value"
                        >
                            <ChevronLeft size={24} className={values[activeIndex].textClass} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors backdrop-blur-sm text-current"
                            aria-label="Next value"
                        >
                            <ChevronRight size={24} className={values[activeIndex].textClass} />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ValuesSection;
