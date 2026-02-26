import { useEffect } from 'react';
import { Download, CheckCircle, Atom, Code, Languages, Brain } from 'lucide-react';

const LowerSecondary = () => {
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

  const subjects = [
    {
      icon: Atom,
      title: 'Sciences',
      description: 'Biology, Chemistry, and Physics with hands-on laboratory experiences.',
    },
    {
      icon: Code,
      title: 'Computer Science',
      description: 'Programming, robotics, and digital citizenship skills.',
    },
    {
      icon: Languages,
      title: 'Languages',
      description: 'English, Arabic, and additional language options.',
    },
    {
      icon: Brain,
      title: 'Mathematics',
      description: 'Advanced algebra, geometry, and mathematical reasoning.',
    },
  ];

  const keyFeatures = [
    'Subject-specialist teachers for all core subjects',
    'State-of-the-art science laboratories',
    'Technology-integrated classrooms',
    'Leadership and service learning opportunities',
    'Career exploration and guidance programs',
    'Extensive extracurricular activities',
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 bg-navy">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/lower-secondary.jpg" 
            alt="Lower Secondary" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl reveal opacity-0 translate-y-6">
            <p className="text-gold font-medium mb-2">Academic Programs</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Lower Secondary
            </h1>
            <p className="text-lg text-white/80">
              Expanding knowledge and preparing for higher challenges with specialized subject exploration.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal opacity-0 translate-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                Preparing for <span className="text-gold">Higher Challenges</span>
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Our Lower Secondary program (Grades 7-9) marks an important transition as students 
                  move from primary education to more specialized subject learning. Students are taught 
                  by subject-specialist teachers who bring deep expertise and passion to their classrooms.
                </p>
                <p>
                  The curriculum is designed to build on primary foundations while introducing more 
                  complex concepts and independent learning skills. Students develop critical thinking, 
                  research abilities, and the academic resilience needed for upper secondary education.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-white rounded-lg px-6 py-3 shadow-soft">
                  <p className="text-2xl font-bold text-gold">12-14</p>
                  <p className="text-sm text-navy-600">Years Old</p>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-soft">
                  <p className="text-2xl font-bold text-gold">Grades</p>
                  <p className="text-sm text-navy-600">7-9</p>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-soft">
                  <p className="text-2xl font-bold text-gold">1:18</p>
                  <p className="text-sm text-navy-600">Teacher Ratio</p>
                </div>
              </div>
            </div>
            <div className="reveal opacity-0 translate-y-6 animation-delay-200">
              <img 
                src="/images/lower-secondary.jpg" 
                alt="Lower Secondary Classroom"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Core Subjects
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <div 
                key={subject.title}
                className="bg-ivory rounded-2xl p-8 text-center card-hover reveal opacity-0 translate-y-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <subject.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {subject.title}
                </h3>
                <p className="text-navy-600 text-sm">
                  {subject.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal opacity-0 translate-y-6">
              <img 
                src="/images/student-life.jpg" 
                alt="Student Activities"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
            <div className="reveal opacity-0 translate-y-6 animation-delay-200">
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">
                Program Highlights
              </h2>
              <ul className="space-y-4">
                {keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-navy-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Assessment & Progression
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal opacity-0 translate-y-6">
            <div className="bg-ivory rounded-xl p-6">
              <h3 className="font-serif text-xl font-semibold text-navy mb-4">Internal Assessment</h3>
              <ul className="space-y-2 text-navy-600 text-sm">
                <li>• Regular unit tests and assignments</li>
                <li>• Project-based assessments</li>
                <li>• Laboratory practical evaluations</li>
                <li>• Class participation and engagement</li>
              </ul>
            </div>
            <div className="bg-ivory rounded-xl p-6">
              <h3 className="font-serif text-xl font-semibold text-navy mb-4">External Assessment</h3>
              <ul className="space-y-2 text-navy-600 text-sm">
                <li>• CAT4 Cognitive Ability Tests</li>
                <li>• Progress Tests in English and Math</li>
                <li>• International benchmarking</li>
                <li>• Checkpoint preparation (Grade 9)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Lower Secondary Curriculum Guide
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Download our comprehensive guide to learn more about our Lower Secondary program, 
            subject details, and progression pathways.
          </p>
          <button className="btn-gold inline-flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Curriculum PDF
          </button>
        </div>
      </section>
    </div>
  );
};

export default LowerSecondary;
