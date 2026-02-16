import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiry: '',
  });

  useEffect(() => {
    const section = sectionRef.current;
    const contact = contactRef.current;
    const form = formRef.current;

    if (!section || !contact || !form) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });

      tl.fromTo(contact,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      )
      .fromTo(form,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. We will contact you shortly.');
    setFormData({ fullName: '', email: '', phone: '', inquiry: '' });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-16 lg:py-24 bg-[#F4F1EA]"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact Info */}
            <div ref={contactRef} style={{ opacity: 0 }}>
              <p className="eyebrow-gold mb-4">Private Consultation</p>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl text-[#0B1E2F] mb-6 leading-tight"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Connect
                <br />
                With Us
              </h2>
              <p className="text-[#6B7280] leading-relaxed mb-10 max-w-md italic">
                Begin a bespoke educational journey for your child. Our admissions
                office provides discreet, personalized support for families seeking
                excellence.
              </p>

              <div className="w-16 h-px bg-[#C9A45C] mb-10" />

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-[#C9A45C] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#0B1E2F] mb-1">
                      Campus Address
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      Muscat Academic Quarter, Sector 4
                      <br />
                      Riyadh, Kingdom of Saudi Arabia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-[#C9A45C] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#0B1E2F] mb-1">
                      Direct Admissions
                    </p>
                    <p className="text-sm text-[#6B7280]">T: +966 11 400 2000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-[#C9A45C] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#0B1E2F] mb-1">
                      Email
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      admissions@alshomoukh.edu
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={20} className="text-[#C9A45C] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-[#0B1E2F] mb-1">
                      Registry Hours
                    </p>
                    <p className="text-sm text-[#6B7280]">
                      Sunday – Thursday
                      <br />
                      08:00 – 16:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              ref={formRef}
              className="bg-white p-6 lg:p-8 shadow-sm"
              style={{ opacity: 0 }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-[#6B7280] mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-[rgba(17,24,39,0.15)] bg-[#F9F9F7] text-sm focus:outline-none focus:border-[#C9A45C] transition-colors duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wide text-[#6B7280] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-[rgba(17,24,39,0.15)] bg-[#F9F9F7] text-sm focus:outline-none focus:border-[#C9A45C] transition-colors duration-300"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wide text-[#6B7280] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-[rgba(17,24,39,0.15)] bg-[#F9F9F7] text-sm focus:outline-none focus:border-[#C9A45C] transition-colors duration-300"
                      placeholder="+00 000 000 000"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wide text-[#6B7280] mb-2">
                      Academic Year
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-[rgba(17,24,39,0.15)] bg-[#F9F9F7] text-sm focus:outline-none focus:border-[#C9A45C] transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option>2024 - 2025</option>
                      <option>2025 - 2026</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wide text-[#6B7280] mb-2">
                    Your Inquiry
                  </label>
                  <textarea
                    value={formData.inquiry}
                    onChange={(e) =>
                      setFormData({ ...formData, inquiry: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-3 border border-[rgba(17,24,39,0.15)] bg-[#F9F9F7] text-sm focus:outline-none focus:border-[#C9A45C] transition-colors duration-300 resize-none"
                    placeholder="How may we assist you today?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#0B1E2F] text-white text-sm font-medium tracking-wide hover:bg-[#1a3045] transition-colors duration-300 flex items-center justify-center gap-2 group"
                >
                  Schedule Consultation
                  <ArrowRight
                    size={16}
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
