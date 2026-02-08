import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Trophy, Music, Users, Heart } from 'lucide-react';

interface StudentLifeSectionProps {
    isActive?: boolean;
}

const StudentLifeSection = ({ isActive = false }: StudentLifeSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(headerRef.current, { opacity: 0, y: 30 });
            panelsRef.current.forEach(panel => {
                if (panel) gsap.set(panel, { opacity: 0, y: 60 });
            });

            if (isActive) {
                const tl = gsap.timeline({ delay: 0.2 });

                tl.to(headerRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out'
                });

                panelsRef.current.forEach((panel, index) => {
                    if (panel) {
                        tl.to(panel, {
                            opacity: 1,
                            y: 0,
                            duration: 0.7,
                            ease: 'power3.out'
                        }, `-=${0.55 - index * 0.1}`);
                    }
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, [isActive]);

    const activities = [
        {
            title: "Athletics",
            subtitle: "Football, Swimming, Basketball, & More",
            icon: <Trophy className="w-6 h-6 text-white" />,
            image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&q=80",
            color: "bg-[#7A1F2E]"
        },
        {
            title: "The Arts",
            subtitle: "Visual & Performing Arts",
            icon: <Music className="w-6 h-6 text-white" />,
            image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80",
            color: "bg-[#D4A84B]"
        },
        {
            title: "Enrichment & Trips",
            subtitle: "Field Trips, Camps, & Innovation",
            icon: <Users className="w-6 h-6 text-white" />,
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
            color: "bg-[#1E3A5F]"
        },
        {
            title: "Community & Service",
            subtitle: "Student Council, Environment, & Charity",
            icon: <Heart className="w-6 h-6 text-white" />,
            image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
            color: "bg-[#7A1F2E]"
        }
    ];

    return (
        <div ref={containerRef} className="relative w-full h-full bg-[#111] overflow-hidden flex flex-col">
            {/* Header */}
            <div ref={headerRef} className="absolute top-0 left-0 w-full p-8 lg:p-12 z-20 pointer-events-none">
                <span className="walker-nav-link text-white/70 text-xs tracking-widest mb-2 block">
                    BEYOND THE CLASSROOM
                </span>
                <h2 className="walker-heading text-white text-3xl lg:text-5xl">
                    Student Life
                </h2>
            </div>

            {/* Full Height Panels */}
            <div className="flex-1 flex flex-col md:flex-row h-full">
                {activities.map((item, index) => (
                    <div
                        key={index}
                        ref={el => { panelsRef.current[index] = el; }}
                        className="relative flex-1 group h-full overflow-hidden border-r border-white/10 last:border-0"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            style={{ backgroundImage: `url('${item.image}')` }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-60" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
                            <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mb-4 shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300`}>
                                {item.icon}
                            </div>
                            <h3 className="walker-heading text-white text-2xl mb-1">
                                {item.title}
                            </h3>
                            <p className="walker-body text-white/70 text-sm mb-4">
                                {item.subtitle}
                            </p>

                            <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
                                <a href="#" className="flex items-center gap-2 text-[#D4A84B] text-xs font-bold uppercase tracking-wider">
                                    Learn More <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentLifeSection;
