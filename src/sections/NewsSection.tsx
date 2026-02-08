import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Calendar, ChevronRight, ArrowUpRight } from 'lucide-react';

interface NewsSectionProps {
    isActive?: boolean;
}

const NewsSection = ({ isActive = false }: NewsSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(headerRef.current, { opacity: 0, y: 30 });
            cardsRef.current.forEach(card => {
                if (card) gsap.set(card, { opacity: 0, y: 50 });
            });

            if (isActive) {
                const tl = gsap.timeline({ delay: 0.2 });

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
            }
        }, containerRef);

        return () => ctx.revert();
    }, [isActive]);

    const news = [
        {
            category: "Achievement",
            date: "FEB 8, 2026",
            title: "Al Shomoukh Students Excel in Regional Quran Competition",
            image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80"
        },
        {
            category: "Events",
            date: "FEB 14, 2026",
            title: "International Day: Celebrating Our Global Community",
            image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600&q=80"
        },
        {
            category: "Academics",
            date: "FEB 20, 2026",
            title: "Grade 12 Graduation Ceremony Announced for June",
            image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80"
        }
    ];

    return (
        <div ref={containerRef} className="relative w-full h-full bg-[#1E3A5F] overflow-hidden flex flex-col justify-center">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#7A1F2E] rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 w-full px-8 lg:px-20 max-w-[1700px] mx-auto">
                {/* Header */}
                <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-6">
                    <div>
                        <span className="walker-nav-link text-[#D4A84B] text-xs tracking-widest mb-3 block">
                            STAY CONNECTED
                        </span>
                        <h2 className="walker-heading text-white text-4xl lg:text-6xl">
                            News & Happenings
                        </h2>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 walker-nav-link text-white hover:text-[#D4A84B] transition-colors mt-4 md:mt-0 text-xs">
                        VIEW ALL NEWS <ChevronRight className="w-4 h-4" />
                    </a>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <div
                            key={index}
                            ref={el => { cardsRef.current[index] = el; }}
                            className="group bg-white/5 border border-white/10 hover:bg-[#7A1F2E] transition-colors duration-500 rounded-sm overflow-hidden"
                        >
                            <div className="aspect-[16/9] overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[#D4A84B] text-[10px] font-bold tracking-widest uppercase bg-white/10 px-2 py-1 rounded">
                                        {item.category}
                                    </span>
                                    <div className="flex items-center gap-2 text-white/60 text-xs">
                                        <Calendar className="w-3 h-3" />
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                                <h3 className="walker-heading text-white text-xl leading-snug mb-6 h-14 group-hover:text-white transition-colors">
                                    {item.title}
                                </h3>
                                <a href="#" className="inline-flex items-center gap-2 text-white/50 text-xs group-hover:text-white transition-colors">
                                    Read Article <ArrowUpRight className="w-3 h-3" />
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
