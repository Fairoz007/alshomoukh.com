import { useEffect } from 'react';
import { Download, CheckCircle, GraduationCap, Briefcase, Globe, Award } from 'lucide-react';

const UpperSecondary = () => {
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

  const pathways = [
    {
      icon: Award,
      title: 'International Baccalaureate',
      description: 'The IB Diploma Programme offering a comprehensive, internationally recognized qualification.',
      subjects: '6 subjects + Core (TOK, EE, CAS)',
    },
    {
      icon: GraduationCap,
      title: 'A-Level Programme',
      description: 'Pearson Edexcel A-Levels with flexible subject combinations.',
      subjects: '3-4 subjects over 2 years',
    },
    {
      icon: Briefcase,
      title: 'BTEC Vocational',
      description: 'Practical, career-focused qualifications in business and other fields.',
      subjects: 'Business, IT, or Sport',
    },
  ];

  const supportServices = [
    {
      title: 'University Counseling',
      description: 'One-on-one guidance for university selection and application processes.',
    },
    {
      title: 'Career Guidance',
      description: 'Exploration of career paths and professional development opportunities.',
    },
    {
      title: 'SAT/ACT Preparation',
      description: 'Comprehensive test preparation for US university admissions.',
    },
    {
      title: 'IELTS/TOEFL Support',
      description: 'English language proficiency test preparation and registration.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 bg-navy">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/upper-secondary.jpg" 
            alt="Upper Secondary" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl reveal opacity-0 translate-y-6">
            <p className="text-gold font-medium mb-2">Academic Programs</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Upper Secondary
            </h1>
            <p className="text-lg text-white/80">
              Advanced studies preparing future university leaders with rigorous academic programs.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal opacity-0 translate-y-6">
              <img 
                src="/images/upper-secondary.jpg" 
                alt="Upper Secondary Students"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
            <div className="reveal opacity-0 translate-y-6 animation-delay-200">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                Preparing <span className="text-gold">Future Leaders</span>
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Our Upper Secondary program (Grades 10-12) represents the culmination of a student's 
                  journey at Al Shomoukh International School. We offer multiple pathways to ensure 
                  every student can pursue the qualification that best suits their goals and aspirations.
                </p>
                <p>
                  With rigorous academic standards, dedicated university counseling, and extensive 
                  extracurricular opportunities, our graduates are well-prepared for success at top 
                  universities worldwide. Our students consistently achieve outstanding results and 
                  gain admission to prestigious institutions.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-white rounded-lg px-6 py-3 shadow-soft">
                  <p className="text-2xl font-bold text-gold">15-18</p>
                  <p className="text-sm text-navy-600">Years Old</p>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-soft">
                  <p className="text-2xl font-bold text-gold">Grades</p>
                  <p className="text-sm text-navy-600">10-12</p>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-soft">
                  <p className="text-2xl font-bold text-gold">95%</p>
                  <p className="text-sm text-navy-600">University Placement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Pathways */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Academic Pathways
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-navy-600 mt-4 max-w-2xl mx-auto">
              Choose the qualification pathway that aligns with your goals and aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pathways.map((pathway, index) => (
              <div 
                key={pathway.title}
                className="bg-ivory rounded-2xl p-8 card-hover reveal opacity-0 translate-y-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                  <pathway.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {pathway.title}
                </h3>
                <p className="text-navy-600 text-sm mb-4">
                  {pathway.description}
                </p>
                <div className="bg-white rounded-lg p-3">
                  <p className="text-gold font-medium text-sm">{pathway.subjects}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Offerings */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Subject Offerings
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal opacity-0 translate-y-6">
            {[
              { category: 'Sciences', subjects: 'Biology, Chemistry, Physics, Computer Science' },
              { category: 'Mathematics', subjects: 'Mathematics, Further Mathematics' },
              { category: 'Languages', subjects: 'English, Arabic, French, Spanish' },
              { category: 'Humanities', subjects: 'History, Geography, Economics, Business' },
              { category: 'Arts', subjects: 'Visual Arts, Music, Theatre, Film' },
              { category: 'Technology', subjects: 'Design Technology, ITGS, Computer Science' },
            ].map((group) => (
              <div key={group.category} className="bg-white rounded-xl p-6 shadow-soft">
                <h3 className="font-serif text-lg font-semibold text-navy mb-3">{group.category}</h3>
                <p className="text-navy-600 text-sm">{group.subjects}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University Support */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal opacity-0 translate-y-6">
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">
                University & Career Support
              </h2>
              <div className="space-y-4">
                {supportServices.map((service) => (
                  <div key={service.title} className="flex items-start gap-4 bg-ivory rounded-lg p-5">
                    <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{service.title}</h3>
                      <p className="text-navy-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal opacity-0 translate-y-6 animation-delay-200">
              <div className="bg-navy rounded-2xl p-8 text-white">
                <Globe className="w-12 h-12 text-gold mb-6" />
                <h3 className="font-serif text-2xl font-bold mb-4">University Destinations</h3>
                <p className="text-white/80 mb-6">
                  Our graduates have been accepted to top universities worldwide, including:
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {[
                    'Oxford University',
                    'Cambridge University',
                    'Imperial College London',
                    'MIT',
                    'Stanford University',
                    'University of Toronto',
                    'King\'s College London',
                    'NYU Abu Dhabi',
                  ].map((uni) => (
                    <div key={uni} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                      <span className="text-white/90">{uni}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Upper Secondary Course Guide
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Download our detailed course guide to explore all available subjects, entry requirements, 
            and university progression pathways.
          </p>
          <button className="btn-gold inline-flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Course Guide PDF
          </button>
        </div>
      </section>
    </div>
  );
};

export default UpperSecondary;
