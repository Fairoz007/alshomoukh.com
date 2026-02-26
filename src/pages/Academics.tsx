import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, BookOpen, FlaskConical, Laptop, Download } from 'lucide-react';

const Academics = () => {
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

  const programs = [
    {
      title: 'Kindergarten',
      description: 'A nurturing foundation where young learners discover the joy of learning through play-based activities and guided exploration.',
      image: '/images/kindergarten.jpg',
      icon: GraduationCap,
      link: '/academics/kindergarten',
      ageGroup: 'Ages 3-5',
      features: ['Play-based Learning', 'Early Literacy', 'Creative Arts', 'Social Development'],
    },
    {
      title: 'Primary School',
      description: 'Building strong academic foundations while fostering curiosity, creativity, and a love for learning in every child.',
      image: '/images/primary.jpg',
      icon: BookOpen,
      link: '/academics/primary',
      ageGroup: 'Ages 6-11',
      features: ['Core Subjects', 'Inquiry Learning', 'Technology Integration', 'Character Education'],
    },
    {
      title: 'Lower Secondary',
      description: 'Expanding horizons with specialized subjects, critical thinking development, and preparation for higher academic challenges.',
      image: '/images/lower-secondary.jpg',
      icon: FlaskConical,
      link: '/academics/lower-secondary',
      ageGroup: 'Ages 12-14',
      features: ['Subject Specialization', 'STEM Programs', 'Leadership Skills', 'Global Perspectives'],
    },
    {
      title: 'Upper Secondary',
      description: 'Rigorous academic programs preparing students for university success and future careers with advanced coursework.',
      image: '/images/upper-secondary.jpg',
      icon: Laptop,
      link: '/academics/upper-secondary',
      ageGroup: 'Ages 15-18',
      features: ['IB & A-Levels', 'University Prep', 'Career Counseling', 'Research Projects'],
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/upper-secondary.jpg" 
            alt="Academics" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 reveal opacity-0 translate-y-6">
            Academic <span className="text-gold">Excellence</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto reveal opacity-0 translate-y-6 animation-delay-200">
            Discover our comprehensive educational programs designed to nurture every student's potential.
          </p>
        </div>
      </section>

      {/* Academic Overview */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="reveal opacity-0 translate-y-6">
              <p className="text-gold font-medium mb-2">Our Approach</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                A Holistic Education for the Modern World
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  At Al Shomoukh International School, we believe in providing a well-rounded 
                  education that goes beyond textbooks. Our curriculum is designed to develop 
                  critical thinking, creativity, and character in every student.
                </p>
                <p>
                  We follow international standards while respecting local values, creating 
                  a unique educational experience that prepares students for success in a 
                  globalized world.
                </p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <button className="btn-gold flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Curriculum Guide
                </button>
              </div>
            </div>
            <div className="reveal opacity-0 translate-y-6 animation-delay-200">
              <img 
                src="/images/campus.jpg" 
                alt="Academic Facilities"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Academic Programs
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-navy-600 mt-4 max-w-2xl mx-auto">
              From early childhood through high school, we offer programs tailored to each developmental stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div 
                key={program.title}
                className="bg-ivory rounded-2xl overflow-hidden shadow-soft card-hover reveal opacity-0 translate-y-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                      {program.ageGroup}
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4">
                      <program.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-navy mb-3">
                      {program.title}
                    </h3>
                    <p className="text-navy-600 text-sm mb-4 leading-relaxed">
                      {program.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-navy-600">
                          <div className="w-1.5 h-1.5 bg-gold rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to={program.link}
                      className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="section-padding bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Curriculum Highlights
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'International Standards',
                description: 'Our curriculum meets and exceeds international benchmarks, preparing students for global opportunities.',
              },
              {
                title: 'Bilingual Education',
                description: 'Strong emphasis on both English and Arabic language development for effective communication.',
              },
              {
                title: 'STEM Focus',
                description: 'Comprehensive science, technology, engineering, and mathematics programs with hands-on learning.',
              },
              {
                title: 'Arts & Culture',
                description: 'Rich programs in visual arts, music, drama, and cultural studies to nurture creativity.',
              },
              {
                title: 'Physical Education',
                description: 'Extensive sports programs promoting physical fitness, teamwork, and healthy competition.',
              },
              {
                title: 'Character Development',
                description: 'Values-based education that builds integrity, respect, and social responsibility.',
              },
            ].map((item, index) => (
              <div 
                key={item.title}
                className="bg-navy-700/50 rounded-xl p-6 reveal opacity-0 translate-y-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-serif text-xl font-semibold text-gold mb-3">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment & Accreditation */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal opacity-0 translate-y-6">
              <p className="text-gold font-medium mb-2">Quality Assurance</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                Assessment & Accreditation
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-navy mb-2">Continuous Assessment</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    Our assessment approach includes regular formative and summative evaluations, 
                    project-based assessments, and portfolios that track student progress throughout 
                    their academic journey.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">International Accreditation</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    We are accredited by Cognia and recognized by the Ministry of Education. 
                    Our programs are aligned with international standards including IB and 
                    Pearson Edexcel qualifications.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-2">University Recognition</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    Our graduates are accepted by top universities worldwide, including institutions 
                    in the UK, USA, Canada, Australia, and across the Middle East.
                  </p>
                </div>
              </div>
            </div>
            <div className="reveal opacity-0 translate-y-6 animation-delay-200">
              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <h3 className="font-serif text-xl font-semibold text-navy mb-6">Our Partners</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Cognia', 'IB World School', 'Pearson Edexcel', 'Ministry of Education'].map((partner) => (
                    <div 
                      key={partner}
                      className="bg-ivory rounded-lg p-4 text-center"
                    >
                      <p className="text-navy font-medium text-sm">{partner}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
