import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const countries = [
    'USA', 'Argentina', 'Azerbaijan', 'UK', 'Canada', 'Colombia',
    'Egypt', 'Germany', 'Greece', 'India', 'Iran', 'Italy',
    'Lebanon', 'Mexico', 'GCC', 'Pakistan', 'Serbia', 'Singapore',
    'Spain', 'Sudan', 'Syria', 'Russia', 'Jordan'
];

const StudentNationalitiesSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const list = listRef.current;

        if (!section || !list) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(list.children,
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
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
            className="py-12 lg:py-16 bg-[#0B1E2F] text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl text-white mb-10" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Where Students From
                </h2>

                <ul
                    ref={listRef}
                    className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto"
                >
                    {countries.map((country, index) => (
                        <li key={index} className="flex items-center gap-2 text-lg sm:text-xl text-gray-300">
                            <span className="w-2 h-2 rounded-full bg-[#C9A45C]"></span>
                            {country}
                        </li>
                    ))}
                </ul>

                {/* Simple layout for countries grid if list doesn't wrap nicely */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8 text-left max-w-5xl mx-auto hidden">
                    {/* Alternative Layout Logic if needed */}
                </div>
            </div>
        </section>
    );
};

export default StudentNationalitiesSection;
