import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactSectionProps {
    isActive?: boolean;
}

const ContactSection = ({ isActive = false }: ContactSectionProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.set(infoRef.current, { opacity: 0, x: -50 });
            gsap.set(formRef.current, { opacity: 0, x: 50 });

            if (isActive) {
                const tl = gsap.timeline({ delay: 0.2 });

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
            }
        }, containerRef);

        return () => ctx.revert();
    }, [isActive]);

    return (
        <div ref={containerRef} className="relative w-full h-full bg-[#F5F3EF] overflow-hidden flex flex-col lg:flex-row">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white clip-path-diagonal hidden lg:block" />

            {/* Info Side */}
            <div className="lg:w-1/2 h-full flex flex-col justify-center px-8 lg:px-20 py-12">
                <div ref={infoRef} className="max-w-md">
                    <span className="walker-nav-link text-[#7A1F2E]/60 text-xs tracking-widest mb-4 block">
                        GET IN TOUCH
                    </span>
                    <h2 className="walker-heading text-[#2A2A2A] text-4xl lg:text-6xl mb-8">
                        CONTACT US
                    </h2>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-full shadow-sm text-[#7A1F2E]">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="walker-heading text-lg mb-1">Visit Us</h3>
                                <p className="walker-body text-[#6A6A6A] text-sm">
                                    Al Shomoukh International School<br />
                                    Muscat, Sultanate of Oman
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-full shadow-sm text-[#7A1F2E]">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="walker-heading text-lg mb-1">Call Us</h3>
                                <p className="walker-body text-[#6A6A6A] text-sm">
                                    Main Office: (+968) 24 555 123<br />
                                    Admissions: (+968) 24 555 124
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-full shadow-sm text-[#7A1F2E]">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="walker-heading text-lg mb-1">Email Us</h3>
                                <p className="walker-body text-[#6A6A6A] text-sm">
                                    info@alshomoukh.edu.om<br />
                                    admissions@alshomoukh.edu.om
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white rounded-full shadow-sm text-[#7A1F2E]">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="walker-heading text-lg mb-1">Office Hours</h3>
                                <p className="walker-body text-[#6A6A6A] text-sm">
                                    Monday - Friday: 8:00 AM - 4:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-1/2 h-full flex flex-col justify-center px-8 lg:px-20 py-12 relative z-10">
                <div ref={formRef} className="bg-white p-8 lg:p-12 shadow-xl rounded-sm">
                    <h3 className="walker-heading text-2xl mb-6 text-[#7A1F2E]">
                        Send an Inquiry
                    </h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-[#666] uppercase tracking-wider">First Name</label>
                                <input type="text" className="w-full border-b border-[#ddd] py-2 focus:outline-none focus:border-[#7A1F2E] transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-[#666] uppercase tracking-wider">Last Name</label>
                                <input type="text" className="w-full border-b border-[#ddd] py-2 focus:outline-none focus:border-[#7A1F2E] transition-colors" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#666] uppercase tracking-wider">Email Address</label>
                            <input type="email" className="w-full border-b border-[#ddd] py-2 focus:outline-none focus:border-[#7A1F2E] transition-colors" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-[#666] uppercase tracking-wider">Message</label>
                            <textarea rows={4} className="w-full border-b border-[#ddd] py-2 focus:outline-none focus:border-[#7A1F2E] transition-colors resize-none"></textarea>
                        </div>

                        <button type="submit" className="walker-btn-primary w-full">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
