import { useEffect } from 'react';
import { Download, CheckCircle, Palette, Music, Gamepad2, BookOpen } from 'lucide-react';

const Kindergarten = () => {
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

  const curriculumAreas = [
    {
      icon: BookOpen,
      title: 'Early Literacy',
      description: 'Introduction to letters, sounds, and beginning reading skills through stories and rhymes.',
    },
    {
      icon: Palette,
      title: 'Creative Arts',
      description: 'Exploration of colors, shapes, and artistic expression through various mediums.',
    },
    {
      icon: Music,
      title: 'Music & Movement',
      description: 'Developing rhythm, coordination, and self-expression through songs and dance.',
    },
    {
      icon: Gamepad2,
      title: 'Play-Based Learning',
      description: 'Learning through structured play activities that promote social and cognitive development.',
    },
  ];

  const dailySchedule = [
    { time: '8:00 - 8:30', activity: 'Morning Circle & Welcome' },
    { time: '8:30 - 9:30', activity: 'Literacy & Language Activities' },
    { time: '9:30 - 10:00', activity: 'Snack Break' },
    { time: '10:00 - 11:00', activity: 'Mathematics & Discovery' },
    { time: '11:00 - 12:00', activity: 'Creative Arts & Music' },
    { time: '12:00 - 12:30', activity: 'Lunch' },
    { time: '12:30 - 1:30', activity: 'Rest Time / Quiet Activities' },
    { time: '1:30 - 2:30', activity: 'Outdoor Play & Physical Activities' },
    { time: '2:30 - 3:00', activity: 'Story Time & Dismissal' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 bg-navy">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/kindergarten.jpg" 
            alt="Kindergarten" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl reveal opacity-0 translate-y-6">
            <p className="text-gold font-medium mb-2">Academic Programs</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Kindergarten
            </h1>
            <p className="text-lg text-white/80">
              A nurturing start fostering curiosity and foundational skills in a playful learning environment.
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
                Building Foundations for <span className="text-gold">Lifelong Learning</span>
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Our Kindergarten program provides a warm, nurturing environment where young 
                  children begin their educational journey. We believe that early childhood is 
                  a critical time for development, and our program is designed to foster curiosity, 
                  creativity, and a love for learning.
                </p>
                <p>
                  Through play-based learning and structured activities, children develop essential 
                  skills in literacy, numeracy, social interaction, and emotional regulation. Our 
                  experienced teachers create individualized learning experiences that respect each 
                  child's unique pace and style of learning.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-white rounded-lg px-6 py-3 shadow-soft">
                  <p className="text-2xl font-bold text-gold">3-5</p>
                  <p className="text-sm text-navy-600">Years Old</p>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-soft">
                  <p className="text-2xl font-bold text-gold">1:8</p>
                  <p className="text-sm text-navy-600">Teacher Ratio</p>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-soft">
                  <p className="text-2xl font-bold text-gold">Full</p>
                  <p className="text-sm text-navy-600">Day Program</p>
                </div>
              </div>
            </div>
            <div className="reveal opacity-0 translate-y-6 animation-delay-200">
              <img 
                src="/images/kindergarten.jpg" 
                alt="Kindergarten Classroom"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Areas */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Curriculum Areas
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculumAreas.map((area, index) => (
              <div 
                key={area.title}
                className="bg-ivory rounded-2xl p-8 text-center card-hover reveal opacity-0 translate-y-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <area.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {area.title}
                </h3>
                <p className="text-navy-600 text-sm">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="section-padding bg-ivory">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Typical Day
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="bg-white rounded-2xl shadow-soft overflow-hidden reveal opacity-0 translate-y-6">
            <div className="divide-y divide-ivory-200">
              {dailySchedule.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-6 p-4 hover:bg-ivory transition-colors"
                >
                  <div className="w-28 flex-shrink-0">
                    <span className="text-gold font-semibold text-sm">{item.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-navy">{item.activity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Download our comprehensive Kindergarten curriculum guide to discover all the details 
            about our program, facilities, and admission process.
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

export default Kindergarten;
