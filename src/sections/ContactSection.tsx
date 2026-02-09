import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(infoRef.current, { opacity: 0, x: -50 });
            gsap.set(formRef.current, { opacity: 0, x: 50 });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.to(infoRef.current, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            });

            tl.to(formRef.current, {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'power3.out'
            }, '-=0.6');

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-full bg-[#F5F3EF] overflow-hidden flex flex-col lg:flex-row border-t border-[#e5e5e5]">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white clip-path-diagonal hidden lg:block" />

            {/* Info Side */}
            <div className="lg:w-1/2 h-full flex flex-col justify-center px-8 lg:px-24 py-16 lg:py-24">
                <div ref={infoRef} className="max-w-lg">
                    <span className="walker-nav-link text-[#7A1F2E] text-xs font-bold tracking-[0.2em] mb-6 block opacity-80">
                        GET IN TOUCH
                    </span>
                    <h2 className="walker-heading text-[#2A2A2A] text-5xl lg:text-7xl mb-12 tracking-tight">
                        Contact Us
                    </h2>

                    <div className="space-y-10">
                        <div className="flex items-start gap-6 group">
                            <div className="p-4 bg-white rounded-full shadow-sm text-[#7A1F2E] border border-gray-100 group-hover:scale-110 transition-transform">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="walker-heading text-xl mb-2 group-hover:text-[#7A1F2E] transition-colors">Visit Us</h3>
                                <p className="walker-body text-[#6A6A6A] text-base leading-relaxed">
                                    Al Shomoukh International School<br />
                                    Muscat, Sultanate of Oman
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="p-4 bg-white rounded-full shadow-sm text-[#7A1F2E] border border-gray-100 group-hover:scale-110 transition-transform">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="walker-heading text-xl mb-2 group-hover:text-[#7A1F2E] transition-colors">Call Us</h3>
                                <p className="walker-body text-[#6A6A6A] text-base leading-relaxed">
                                    Main Office: (+968) 24 555 123<br />
                                    Admissions: (+968) 24 555 124
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="p-4 bg-white rounded-full shadow-sm text-[#7A1F2E] border border-gray-100 group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="walker-heading text-xl mb-2 group-hover:text-[#7A1F2E] transition-colors">Email Us</h3>
                                <p className="walker-body text-[#6A6A6A] text-base leading-relaxed">
                                    info@alshomoukh.edu.om<br />
                                    admissions@alshomoukh.edu.om
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="p-4 bg-white rounded-full shadow-sm text-[#7A1F2E] border border-gray-100 group-hover:scale-110 transition-transform">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="walker-heading text-xl mb-2 group-hover:text-[#7A1F2E] transition-colors">Office Hours</h3>
                                <p className="walker-body text-[#6A6A6A] text-base leading-relaxed">
                                    Monday - Friday: 8:00 AM - 4:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-1/2 h-full flex flex-col justify-center px-8 lg:px-24 py-16 lg:py-24 relative z-10">
                <div ref={formRef} className="bg-white p-10 lg:p-16 shadow-2xl rounded-sm border border-gray-50">
                    <h3 className="walker-heading text-3xl mb-8 text-[#7A1F2E]">
                        Send an Inquiry
                    </h3>
                    <form className="space-y-8">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-2 group">
                                <label className="text-xs font-bold text-[#666] uppercase tracking-wider group-focus-within:text-[#D4A84B] transition-colors">First Name</label>
                                <input type="text" className="w-full border-b border-[#ddd] py-3 focus:outline-none focus:border-[#7A1F2E] transition-all bg-transparent" />
                            </div>
                            <div className="space-y-2 group">
                                <label className="text-xs font-bold text-[#666] uppercase tracking-wider group-focus-within:text-[#D4A84B] transition-colors">Last Name</label>
                                <input type="text" className="w-full border-b border-[#ddd] py-3 focus:outline-none focus:border-[#7A1F2E] transition-all bg-transparent" />
                            </div>
                        </div>

                        <div className="space-y-2 group">
                            <label className="text-xs font-bold text-[#666] uppercase tracking-wider group-focus-within:text-[#D4A84B] transition-colors">Email Address</label>
                            <input type="email" className="w-full border-b border-[#ddd] py-3 focus:outline-none focus:border-[#7A1F2E] transition-all bg-transparent" />
                        </div>

                        <div className="space-y-2 group">
                            <label className="text-xs font-bold text-[#666] uppercase tracking-wider group-focus-within:text-[#D4A84B] transition-colors">Message</label>
                            <textarea rows={4} className="w-full border-b border-[#ddd] py-3 focus:outline-none focus:border-[#7A1F2E] transition-all resize-none bg-transparent"></textarea>
                        </div>

                        <button type="submit" className="walker-btn-primary w-full py-5 text-sm tracking-[0.2em] font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
