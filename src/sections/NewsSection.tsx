import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, ArrowRight, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const NewsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const bgBlob1Ref = useRef<HTMLDivElement>(null);
    const bgBlob2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(headerRef.current, { opacity: 0, y: 30 });
            cardsRef.current.forEach(card => {
                if (card) gsap.set(card, { opacity: 0, y: 40 });
            });

            // Parallax Blobs
            gsap.to(bgBlob1Ref.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            gsap.to(bgBlob2Ref.current, {
                yPercent: -20,
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
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.to(headerRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out'
            });

            cardsRef.current.forEach((card, index) => {
                if (card) {
                    tl.to(card, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power3.out'
                    }, `-=${0.6 - index * 0.1}`);
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const news = [
        {
            featured: true,
            category: "Achievement",
            date: "FEB 8, 2026",
            title: "Al Shomoukh Students Win Regional Quran Competition",
            desc: "Our students demonstrated exceptional dedication and recitation skills, taking home the top prize among 20 participating schools.",
            image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&q=80"
        },
        {
            category: "Events",
            date: "FEB 14, 2026",
            title: "International Day: Celebrating Our Global Community",
            desc: "Join us for a day of cultural exchange and festivities.",
            image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80"
        },
        {
            category: "Academics",
            date: "FEB 20, 2026",
            title: "Grade 12 Graduation Ceremony Announced",
            desc: "Celebrating the achievements of our graduating class.",
            image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80"
        }
    ];

    return (
        <div ref={containerRef} className="relative w-full min-h-screen bg-[#1E3A5F] overflow-hidden flex flex-col justify-center py-24 lg:py-32">
            {/* Background Elements */}
            <div ref={bgBlob1Ref} className="absolute top-0 right-0 w-[80vh] h-[80vh] bg-[#7A1F2E] rounded-full blur-[200px] opacity-20 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div ref={bgBlob2Ref} className="absolute bottom-0 left-0 w-[60vh] h-[60vh] bg-[#D4A84B] rounded-full blur-[150px] opacity-10 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

            <div className="relative z-10 w-full px-6 lg:px-24 max-w-[1700px] mx-auto">
                {/* Header */}
                <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 border-b border-white/10 pb-10">
                    <div>
                        <span className="walker-nav-link text-[#D4A84B] text-xs tracking-[0.2em] mb-4 block font-bold uppercase opacity-80">
                            Stay Connected
                        </span>
                        <h2 className="walker-heading text-white text-5xl lg:text-7xl leading-none">
                            News & Happenings
                        </h2>
                    </div>
                    <a href="#" className="flex items-center gap-3 walker-nav-link text-white hover:text-[#D4A84B] transition-colors mt-8 md:mt-0 text-xs font-bold uppercase tracking-wider group border-b border-transparent hover:border-[#D4A84B] pb-1">
                        View All News <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* News Layout - Featured + Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 perspective-1000">
                    {news.map((item, index) => (
                        <div
                            key={index}
                            ref={el => { cardsRef.current[index] = el; }}
                            className={`group bg-white/5 border border-white/10 hover:border-[#D4A84B]/40 transition-all duration-500 rounded-sm overflow-hidden flex flex-col hover:bg-white/10 hover-lift-3d preserve-3d ${item.featured ? 'lg:col-span-2 lg:flex-row' : ''}`}
                        >
                            <div className={`overflow-hidden relative ${item.featured ? 'lg:w-7/12 aspect-[16/9] lg:aspect-auto' : 'aspect-[16/10]'}`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                                />
                            </div>

                            <div className={`p-8 lg:p-10 flex flex-col ${item.featured ? 'lg:w-5/12 justify-center' : 'flex-1'}`}>
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-[#D4A84B] text-[10px] font-bold tracking-[0.15em] uppercase border border-[#D4A84B]/30 px-3 py-1.5 rounded-sm">
                                        {item.category}
                                    </span>
                                    <div className="flex items-center gap-2 text-white/50 text-xs tracking-wider">
                                        <Calendar className="w-3 h-3" />
                                        <span>{item.date}</span>
                                    </div>
                                </div>

                                <h3 className={`walker-heading text-white leading-tight mb-4 group-hover:text-[#D4A84B] transition-colors ${item.featured ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'}`}>
                                    {item.title}
                                </h3>

                                {(item.featured || !item.featured) && (
                                    <p className="walker-body text-white/60 text-sm leading-relaxed mb-8 line-clamp-3">
                                        {item.desc}
                                    </p>
                                )}

                                <a href="#" className="inline-flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-wider group-hover:text-white transition-colors mt-auto group-hover:gap-3">
                                    Read Article <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsSection;
