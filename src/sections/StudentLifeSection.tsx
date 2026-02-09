import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Trophy, Music, Users, Heart, Shield, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const StudentLifeSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
    const supportRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(headerRef.current, { opacity: 0, y: 30 });
            gsap.set(supportRef.current, { opacity: 0, y: 40 });
            panelsRef.current.forEach(panel => {
                if (panel) gsap.set(panel, { opacity: 0, y: 60 });
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            });

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
                        duration: 0.8,
                        ease: 'power3.out'
                    }, `-=${0.6 - index * 0.1}`);
                }
            });

            // Animate Support Section
            gsap.to(supportRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: supportRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const activities = [
        {
            title: "Athletics",
            subtitle: "Football, Swimming, Basketball",
            desc: "Our competitive teams foster discipline, teamwork, and health.",
            icon: <Trophy className="w-6 h-6 text-white" />,
            image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&q=80",
            color: "bg-[#7A1F2E]"
        },
        {
            title: "The Arts",
            subtitle: "Visual Arts, Music, Drama",
            desc: "Express creativity through our annual productions and exhibitions.",
            icon: <Music className="w-6 h-6 text-white" />,
            image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80",
            color: "bg-[#D4A84B]"
        },
        {
            title: "Enrichment",
            subtitle: "Robotics, Debate, MUN",
            desc: "Extracurriculars that challenge the mind and build leadership.",
            icon: <Lightbulb className="w-6 h-6 text-white" />,
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
            color: "bg-[#1E3A5F]"
        },
        {
            title: "Community",
            subtitle: "Charity & Environmental Club",
            desc: "Service learning projects that give back to Muscat and beyond.",
            icon: <Users className="w-6 h-6 text-white" />,
            image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80",
            color: "bg-[#7A1F2E]"
        }
    ];

    return (
        <div ref={containerRef} className="relative w-full min-h-screen bg-[#111] overflow-hidden flex flex-col">
            {/* Header */}
            <div ref={headerRef} className="p-8 lg:p-24 pb-0 z-20">
                <span className="walker-nav-link text-white/60 text-xs tracking-[0.2em] mb-4 block font-bold uppercase">
                    Beyond the Classroom
                </span>
                <h2 className="walker-heading text-white text-5xl lg:text-7xl mb-8 tracking-tight">
                    Vibrant Student Life
                </h2>
                <p className="walker-body text-white/60 max-w-3xl text-xl lg:text-2xl font-light leading-relaxed">
                    At Al Shomoukh, education extends far beyond textbooks. We cultivate well-rounded individuals through sports, arts, and leadership opportunities.
                </p>
            </div>

            {/* Full Height Panels Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full min-h-[70vh] border-t border-white/10 mt-12">
                {activities.map((item, index) => (
                    <div
                        key={index}
                        ref={el => { panelsRef.current[index] = el; }}
                        className="relative group overflow-hidden border-r border-b border-white/10"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[1s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                            style={{ backgroundImage: `url('${item.image}')` }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-500 hover:opacity-90" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-10 transition-all duration-500">
                            <div className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center mb-8 shadow-xl transform translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-500`}>
                                {item.icon}
                            </div>
                            <h3 className="walker-heading text-white text-3xl mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                {item.title}
                            </h3>
                            <p className="walker-body text-[#D4A84B] text-xs font-bold uppercase tracking-wider mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                {item.subtitle}
                            </p>
                            <p className="walker-body text-white/70 text-base mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 leading-relaxed">
                                {item.desc}
                            </p>

                            <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-500 delay-300">
                                <a href="#" className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider hover:text-[#D4A84B]">
                                    Explore <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Wellbeing & Support Section */}
            <div ref={supportRef} className="bg-[#1a1a1a] border-t border-white/10 px-8 lg:px-24 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <Heart className="w-8 h-8 text-[#7A1F2E]" />
                        <h3 className="walker-heading text-white text-4xl">Student Wellbeing</h3>
                    </div>
                    <p className="walker-body text-white/50 mb-10 leading-relaxed text-lg">
                        We prioritize the mental and emotional health of every student. Our dedicated support team includes counselors and a school nurse.
                    </p>
                    <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                            <Shield className="w-6 h-6 text-[#D4A84B] mt-1" />
                            <div>
                                <h4 className="text-white text-lg font-bold">Pastoral Care</h4>
                                <p className="text-white/40 text-sm">Dedicated form tutors for every grade.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <Heart className="w-6 h-6 text-[#D4A84B] mt-1" />
                            <div>
                                <h4 className="text-white text-lg font-bold">Counseling Services</h4>
                                <p className="text-white/40 text-sm">Confidential support for academic and personal challenges.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <Users className="w-8 h-8 text-[#7A1F2E]" />
                        <h3 className="walker-heading text-white text-4xl">Leadership</h3>
                    </div>
                    <p className="walker-body text-white/50 mb-10 leading-relaxed text-lg">
                        We empower students to take ownership of their school community through various leadership roles.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/5 p-6 rounded-sm border border-white/10 hover:border-[#D4A84B] transition-colors group">
                            <h4 className="text-[#D4A84B] text-base font-bold mb-2 group-hover:text-white transition-colors">Student Council</h4>
                            <p className="text-white/40 text-sm">Representing the student voice.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-sm border border-white/10 hover:border-[#D4A84B] transition-colors group">
                            <h4 className="text-[#D4A84B] text-base font-bold mb-2 group-hover:text-white transition-colors">House Captains</h4>
                            <p className="text-white/40 text-sm">Leading house competitions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentLifeSection;
