import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MapPin, Library, Monitor, Shield, Trophy, ChevronRight } from 'lucide-react';

interface CampusSectionProps {
    isActive?: boolean;
}

const CampusSection = ({ isActive = false }: CampusSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(imageRef.current, { opacity: 0, scale: 1.1 });
            gsap.set(contentRef.current, { opacity: 0, x: 50 });
            listRef.current.forEach(item => {
                if (item) gsap.set(item, { opacity: 0, x: 30 });
            });

            if (isActive) {
                const tl = gsap.timeline({ delay: 0.2 });

                tl.to(imageRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    ease: 'power2.out'
                });

                tl.to(contentRef.current, {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                }, '-=0.8');

                listRef.current.forEach((item, index) => {
                    if (item) {
                        tl.to(item, {
                            opacity: 1,
                            x: 0,
                            duration: 0.6,
                            ease: 'power3.out'
                        }, `-=${0.4 - index * 0.1}`);
                    }
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, [isActive]);



    return (
        <div ref={containerRef} className="relative w-full h-full bg-white overflow-hidden flex flex-col lg:flex-row">
            {/* Left Image Side */}
            <div className="lg:w-7/12 h-full relative overflow-hidden group">
                <div
                    ref={imageRef}
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s]"
                    style={{
                        backgroundImage: `url('/campus_bg.png')`
                    }}
                />
                <div className="absolute inset-0 bg-[#1E3A5F]/70 mix-blend-multiply transition-colors duration-1000 group-hover:bg-[#1E3A5F]/60" />
                <div className="absolute inset-0 flex flex-col justify-end p-12 lg:p-20 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="flex items-center gap-2 text-[#D4A84B] mb-4">
                        <MapPin className="w-5 h-5" />
                        <span className="walker-body text-xs font-bold tracking-widest uppercase">Muscat, Oman</span>
                    </div>
                    <h2 className="walker-heading text-white text-5xl lg:text-7xl mb-6 leading-none">
                        Our Campus
                    </h2>
                    <p className="walker-body text-white/80 max-w-lg text-lg">
                        A modern educational environment designed to inspire creativity, collaboration, and academic excellence.
                    </p>
                </div>
            </div>

            {/* Right Content Side */}
            <div className="lg:w-5/12 h-full bg-[#FCFBF9] flex flex-col justify-center px-8 lg:px-20 py-12 relative">
                <div ref={contentRef} className="max-w-md">
                    <span className="walker-nav-link text-[#7A1F2E]/60 text-xs tracking-widest mb-6 block">
                        FACILITIES & RESOURCES
                    </span>

                    <div className="space-y-10">
                        {[
                            {
                                icon: <Monitor className="w-5 h-5" />,
                                title: 'Innovation & Technology',
                                desc: 'State-of-the-art ICT labs and smart classrooms.'
                            },
                            {
                                icon: <Library className="w-5 h-5" />,
                                title: 'Libraries',
                                desc: 'Extensive collection of resources for all age groups.'
                            },
                            {
                                icon: <Trophy className="w-5 h-5" />,
                                title: 'Sports Facilities',
                                desc: 'Football pitch, swimming pool, and indoor sports hall.'
                            },
                            {
                                icon: <Shield className="w-5 h-5" />,
                                title: 'Safe Environment',
                                desc: 'Secure campus with 24/7 monitoring and safety protocols.'
                            }
                        ].map((item, index) => (
                            <div
                                key={item.title}
                                ref={el => { listRef.current[index] = el; }}
                                className="group flex gap-5 items-start"
                            >
                                <div className="text-[#D4A84B] mt-1 p-2 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="walker-heading text-[#2A2A2A] text-xl mb-2 group-hover:text-[#7A1F2E] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="walker-body text-[#6A6A6A] text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="mt-12 group flex items-center gap-2 walker-nav-link text-[#7A1F2E] text-sm font-bold uppercase tracking-wider hover:gap-4 transition-all">
                        Virtual Tour <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CampusSection;
