import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Library, Monitor, Shield, Trophy, ChevronRight, Bus, Coffee } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CampusSection = () => {
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

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.to(imageRef.current, {
                opacity: 1,
                scale: 1,
                duration: 1.0,
                ease: 'power2.out'
            });

            tl.to(contentRef.current, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.6');

            listRef.current.forEach((item, index) => {
                if (item) {
                    tl.to(item, {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        ease: 'power3.out'
                    }, `-=${0.5 - index * 0.1}`);
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const facilities = [
        {
            icon: <Monitor className="w-5 h-5 text-white" />,
            title: 'ICT & Innovation Labs',
            desc: 'Equipped with the latest hardware and software for coding and design.',
            bg: 'bg-[#1E3A5F]'
        },
        {
            icon: <Library className="w-5 h-5 text-white" />,
            title: 'Libraries',
            desc: 'Two extensive libraries catering to primary and secondary reading levels.',
            bg: 'bg-[#7A1F2E]'
        },
        {
            icon: <Trophy className="w-5 h-5 text-white" />,
            title: 'Sports Complex',
            desc: 'Features a shaded football pitch, basketball courts, and swimming pool.',
            bg: 'bg-[#D4A84B]'
        },
        {
            icon: <Shield className="w-5 h-5 text-white" />,
            title: 'Safety & Security',
            desc: '24/7 CCTV monitoring, trained security personnel, and nurse clinic.',
            bg: 'bg-[#2A2A2A]'
        },
        {
            icon: <Bus className="w-5 h-5 text-white" />,
            title: 'Transport',
            desc: 'Reliable bus fleet covering all major residential areas in Muscat.',
            bg: 'bg-[#1E3A5F]'
        },
        {
            icon: <Coffee className="w-5 h-5 text-white" />,
            title: 'Cafeteria',
            desc: 'Serving healthy, nutritious meals prepared fresh daily.',
            bg: 'bg-[#7A1F2E]'
        }
    ];

    return (
        <div ref={containerRef} className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col lg:flex-row">
            {/* Left Image Side - Sticky */}
            <div className="lg:w-6/12 relative min-h-[50vh] lg:min-h-screen lg:h-auto overflow-hidden group lg:sticky lg:top-0">
                <div
                    ref={imageRef}
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s]"
                    style={{
                        backgroundImage: `url('/campus_bg.png')`
                    }}
                />
                <div className="absolute inset-0 bg-[#0A1625]/60 mix-blend-multiply transition-colors duration-1000 group-hover:bg-[#0A1625]/50" />
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-24 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="flex items-center gap-3 text-[#D4A84B] mb-6">
                        <MapPin className="w-5 h-5" />
                        <span className="walker-body text-xs font-bold tracking-[0.2em] uppercase">Muscat, Oman</span>
                    </div>
                    <h2 className="walker-heading text-white text-5xl lg:text-7xl mb-8 leading-none tracking-tight">
                        A Campus Built <br />for Learning
                    </h2>
                    <p className="walker-body text-white/80 max-w-lg text-lg lg:text-xl font-light leading-relaxed">
                        Our modern facilities provide a safe, stimulating environment where students can explore their passions.
                    </p>
                </div>
            </div>

            {/* Right Content Side */}
            <div className="lg:w-6/12 bg-[#FCFBF9] flex flex-col justify-center px-6 lg:px-24 py-16 lg:py-24 relative">
                <div ref={contentRef} className="max-w-xl w-full">
                    <span className="walker-nav-link text-[#7A1F2E] text-xs tracking-[0.2em] mb-10 block font-bold uppercase opacity-80">
                        World-Class Facilities
                    </span>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 perspective-1000">
                        {facilities.map((item, index) => (
                            <div
                                key={item.title}
                                ref={el => { listRef.current[index] = el; }}
                                className="group flex flex-col items-start p-6 bg-white border border-[#e5e5e5] rounded-sm hover:shadow-lg hover:border-[#D4A84B]/20 hover-lift-3d preserve-3d transition-all duration-300"
                            >
                                <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                    {item.icon}
                                </div>
                                <h3 className="walker-heading text-[#2A2A2A] text-xl mb-3 group-hover:text-[#7A1F2E] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="walker-body text-[#6A6A6A] text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-8 bg-[#F5F3EF] border-l-4 border-[#7A1F2E] rounded-sm">
                        <h4 className="walker-heading text-[#2A2A2A] text-xl mb-3">Safety First</h4>
                        <p className="walker-body text-[#6A6A6A] text-sm leading-relaxed">
                            The safety of our children is paramount. We maintain strict security protocols, including ID checks for all visitors and comprehensive emergency procedures.
                        </p>
                    </div>

                    <button className="mt-12 group flex items-center gap-3 walker-nav-link text-[#7A1F2E] text-sm font-bold uppercase tracking-wider hover:gap-6 transition-all">
                        Take a Virtual Tour <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CampusSection;
