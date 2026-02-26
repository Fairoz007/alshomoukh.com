import { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'Al Shomoukh International School',
        'PO Box 1234, Muscat',
        'Sultanate of Oman',
      ],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        'Main: +968 1234 5678',
        'Admissions: +968 1234 5679',
        'Fax: +968 1234 5680',
      ],
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@alshomoukh.edu.om',
        'admissions@alshomoukh.edu.om',
        'principal@alshomoukh.edu.om',
      ],
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Sunday - Thursday: 7:30 AM - 3:00 PM',
        'Friday - Saturday: Closed',
        'Admission Office: 8:00 AM - 4:00 PM',
      ],
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/campus.jpg" 
            alt="Contact" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 reveal opacity-0 translate-y-6">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto reveal opacity-0 translate-y-6 animation-delay-200">
            We'd love to hear from you. Reach out to us for any inquiries or to schedule a campus visit.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title}
                className="bg-white rounded-2xl p-6 shadow-soft card-hover reveal opacity-0 translate-y-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-navy mb-3">
                  {info.title}
                </h3>
                <ul className="space-y-1">
                  {info.details.map((detail, i) => (
                    <li key={i} className="text-navy-600 text-sm">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="reveal opacity-0 translate-y-6">
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="border-navy-200 focus:border-gold focus:ring-gold"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="border-navy-200 focus:border-gold focus:ring-gold"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="john@example.com" 
                    className="border-navy-200 focus:border-gold focus:ring-gold"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    placeholder="+968 1234 5678" 
                    className="border-navy-200 focus:border-gold focus:ring-gold"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help?" 
                    className="border-navy-200 focus:border-gold focus:ring-gold"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message..."
                    rows={5}
                    className="border-navy-200 focus:border-gold focus:ring-gold resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="btn-gold w-full flex items-center justify-center gap-2"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="reveal opacity-0 translate-y-6 animation-delay-200">
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">
                Find Us
              </h2>
              <div className="bg-ivory rounded-2xl overflow-hidden shadow-soft h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890123!2d58.5453!3d23.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCMzYnNTAuMCJOIDU4wrAzMic0My4xIkU!5e0!3m2!1sen!2som!4v1234567890123!5m2!1sen!2som"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Quick Links
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal opacity-0 translate-y-6">
            {[
              {
                title: 'Admissions Inquiry',
                description: 'Questions about the application process? Contact our admissions team.',
                email: 'admissions@alshomoukh.edu.om',
              },
              {
                title: 'General Information',
                description: 'For general inquiries about our programs and services.',
                email: 'info@alshomoukh.edu.om',
              },
              {
                title: 'Principal\'s Office',
                description: 'For matters requiring principal attention or school policies.',
                email: 'principal@alshomoukh.edu.om',
              },
            ].map((link) => (
              <div key={link.title} className="bg-white rounded-xl p-6 shadow-soft text-center">
                <h3 className="font-serif text-lg font-semibold text-navy mb-2">{link.title}</h3>
                <p className="text-navy-600 text-sm mb-4">{link.description}</p>
                <a 
                  href={`mailto:${link.email}`}
                  className="text-gold font-medium text-sm hover:underline"
                >
                  {link.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
