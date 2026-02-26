import { useEffect } from 'react';
import { Download, CheckCircle, Calculator, Globe, Microscope, Paintbrush } from 'lucide-react';

const Primary = () => {
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
      icon: Globe,
      title: 'English Language',
      description: 'Reading, writing, speaking, and listening skills development.',
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'Number sense, operations, geometry, and problem-solving.',
    },
    {
      icon: Microscope,
      title: 'Science',
      description: 'Inquiry-based exploration of life, physical, and earth sciences.',
    },
    {
      icon: Paintbrush,
      title: 'Arts & Humanities',
      description: 'Visual arts, music, social studies, and cultural awareness.',
    },
  ];

  const assessmentMethods = [
    'Continuous formative assessment through classroom observations',
    'Regular quizzes and assignments to track progress',
    'Project-based learning evaluations',
    'Standardized testing (CAT4, Progress Tests)',
    'Parent-teacher conferences twice per term',
    'Detailed report cards at the end of each term',
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 bg-navy">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/primary.jpg" 
            alt="Primary School" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl reveal opacity-0 translate-y-6">
            <p className="text-gold font-medium mb-2">Academic Programs</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Primary School
            </h1>
            <p className="text-lg text-white/80">
              Developing core skills and building confident learners through engaging curriculum and activities.
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
                src="/images/primary.jpg" 
                alt="Primary Classroom"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
            <div className="reveal opacity-0 translate-y-6 animation-delay-200">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                Building <span className="text-gold">Confident Learners</span>
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Our Primary School program (Grades 1-6) provides a comprehensive education 
                  that builds strong academic foundations while nurturing each child's unique 
                  talents and interests. We follow an enhanced British curriculum that is 
                  adapted to meet the needs of our diverse international student body.
                </p>
                <p>
                  Students engage in inquiry-based learning that encourages critical thinking, 
                  creativity, and collaboration. Our dedicated teachers use a variety of 
                  instructional strategies to ensure that every student achieves their full potential.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-white rounded-lg px-6 py-3 shadow-soft">
                  <p className="text-2xl font-bold text-gold">6-11</p>
                  <p className="text-sm text-navy-600">Years Old</p>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-soft">
                  <p className="text-2xl font-bold text-gold">Grades</p>
                  <p className="text-sm text-navy-600">1-6</p>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-soft">
                  <p className="text-2xl font-bold text-gold">1:15</p>
                  <p className="text-sm text-navy-600">Teacher Ratio</p>
                </div>
              </div>
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

      {/* Additional Programs */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="reveal opacity-0 translate-y-6">
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">
                Additional Programs
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Arabic Language & Islamic Studies',
                    description: 'Comprehensive Arabic language instruction and Islamic education for Muslim students.',
                  },
                  {
                    title: 'Physical Education',
                    description: 'Sports, games, and fitness activities promoting healthy lifestyle habits.',
                  },
                  {
                    title: 'Information Technology',
                    description: 'Digital literacy, coding fundamentals, and responsible technology use.',
                  },
                  {
                    title: 'Library & Reading',
                    description: 'Regular library visits to foster a love for reading and research skills.',
                  },
                ].map((program) => (
                  <div key={program.title} className="bg-white rounded-lg p-5 shadow-soft">
                    <h3 className="font-semibold text-navy mb-2">{program.title}</h3>
                    <p className="text-navy-600 text-sm">{program.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal opacity-0 translate-y-6 animation-delay-200">
              <h2 className="font-serif text-3xl font-bold text-navy mb-6">
                Assessment Methods
              </h2>
              <div className="bg-white rounded-2xl shadow-soft p-6">
                <ul className="space-y-4">
                  {assessmentMethods.map((method, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-navy-600 text-sm">{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Primary School Curriculum Guide
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Download our detailed curriculum guide to learn more about our Primary School program, 
            including subject descriptions, assessment criteria, and learning outcomes.
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

export default Primary;
