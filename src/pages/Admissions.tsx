import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Calendar, Users, ChevronRight, Download, Phone } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Admissions = () => {
  const [, setActiveStep] = useState(0);

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

  const admissionSteps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Complete the online application form and submit required documents including previous school records.',
    },
    {
      icon: Calendar,
      title: 'Assessment',
      description: 'Students complete age-appropriate assessments in English and Mathematics.',
    },
    {
      icon: Users,
      title: 'Interview',
      description: 'Family interview with the admissions team to discuss goals and expectations.',
    },
    {
      icon: CheckCircle,
      title: 'Admission Decision',
      description: 'Receive admission decision within 5-7 business days of completing all steps.',
    },
  ];

  const requirements = [
    'Completed application form',
    'Copy of student passport',
    'Copy of parent/guardian passport',
    'Previous school records (last 2 years)',
    'Immunization records',
    '4 passport-sized photographs',
    'Application fee payment',
  ];

  const tuitionFees = [
    { grade: 'Kindergarten', annual: '3,500 OMR', registration: '200 OMR' },
    { grade: 'Primary (Grades 1-6)', annual: '4,500 OMR', registration: '250 OMR' },
    { grade: 'Lower Secondary (Grades 7-9)', annual: '5,500 OMR', registration: '300 OMR' },
    { grade: 'Upper Secondary (Grades 10-12)', annual: '6,500 OMR', registration: '350 OMR' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/campus.jpg" 
            alt="Admissions" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 reveal opacity-0 translate-y-6">
            Admissions <span className="text-gold">Process</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto reveal opacity-0 translate-y-6 animation-delay-200">
            Join our community of learners. Follow these simple steps to begin your journey with us.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              How to Apply
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, index) => (
              <div 
                key={step.title}
                className="bg-white rounded-2xl p-8 text-center card-hover reveal opacity-0 translate-y-6 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setActiveStep(index)}
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-navy-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Fees */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div className="reveal opacity-0 translate-y-6">
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">
                Required Documents
              </h2>
              <div className="bg-ivory rounded-2xl p-8">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-navy-600">{req}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-navy-200">
                  <button className="btn-outline w-full flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Download Checklist
                  </button>
                </div>
              </div>
            </div>

            {/* Tuition Fees */}
            <div className="reveal opacity-0 translate-y-6 animation-delay-200">
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">
                Tuition Fees 2024-2025
              </h2>
              <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-navy text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-serif">Grade Level</th>
                        <th className="px-6 py-4 text-right font-serif">Annual Fee</th>
                        <th className="px-6 py-4 text-right font-serif">Registration</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ivory-200">
                      {tuitionFees.map((fee) => (
                        <tr key={fee.grade} className="hover:bg-ivory">
                          <td className="px-6 py-4 text-navy">{fee.grade}</td>
                          <td className="px-6 py-4 text-right font-semibold text-gold">{fee.annual}</td>
                          <td className="px-6 py-4 text-right text-navy-600">{fee.registration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-6 bg-ivory">
                  <p className="text-sm text-navy-600">
                    * Additional fees may apply for uniforms, transportation, and extracurricular activities.
                    Contact our admissions office for detailed fee structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Take the first step towards an exceptional education. Our admissions team is here 
            to guide you through every step of the process.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/apply-now" className="btn-gold">
              Apply Now
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <button className="btn-outline border-white text-white hover:bg-white hover:text-navy flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Contact Admissions
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl">Contact Admissions</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-navy-600">+968 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-gold" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-navy-600">admissions@alshomoukh.edu.om</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gold" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-navy-600">Sun - Thu: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-ivory">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="space-y-4 reveal opacity-0 translate-y-6">
            {[
              {
                q: 'When can I apply for admission?',
                a: 'We accept applications year-round, but we recommend applying early as spaces fill quickly. The main intake is in September.',
              },
              {
                q: 'Is there an entrance exam?',
                a: 'Yes, all applicants complete age-appropriate assessments in English and Mathematics to ensure proper placement.',
              },
              {
                q: 'Do you offer scholarships?',
                a: 'Yes, we offer merit-based scholarships for outstanding students. Contact our admissions office for details.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-soft">
                <h3 className="font-semibold text-navy mb-2 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-gold" />
                  {faq.q}
                </h3>
                <p className="text-navy-600 text-sm pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
