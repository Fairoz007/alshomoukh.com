import { useEffect } from 'react';
import { Music, Trophy, Users, Palette, FlaskConical, Globe, Heart, Star } from 'lucide-react';

const StudentLife = () => {
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

  const activities = [
    {
      icon: Music,
      title: 'Performing Arts',
      description: 'Choir, band, drama, and dance programs with regular performances and competitions.',
      image: '/images/student-life.jpg',
    },
    {
      icon: Trophy,
      title: 'Sports Programs',
      description: 'Basketball, football, swimming, athletics, and more with professional coaching.',
      image: '/images/campus.jpg',
    },
    {
      icon: Palette,
      title: 'Visual Arts',
      description: 'Painting, sculpture, photography, and digital arts with gallery exhibitions.',
      image: '/images/kindergarten.jpg',
    },
    {
      icon: FlaskConical,
      title: 'STEM Clubs',
      description: 'Robotics, coding, science fairs, and mathematics competitions.',
      image: '/images/lower-secondary.jpg',
    },
  ];

  const clubs = [
    { name: 'Student Council', icon: Users, description: 'Student leadership and governance' },
    { name: 'Model UN', icon: Globe, description: 'Debate and international affairs' },
    { name: 'Community Service', icon: Heart, description: 'Volunteering and social impact' },
    { name: 'Chess Club', icon: Star, description: 'Strategic thinking and competition' },
    { name: 'Environmental Club', icon: Palette, description: 'Sustainability and conservation' },
    { name: 'Literary Magazine', icon: Trophy, description: 'Creative writing and journalism' },
  ];

  const galleryImages = [
    '/images/student-life.jpg',
    '/images/news-event.jpg',
    '/images/primary.jpg',
    '/images/upper-secondary.jpg',
    '/images/kindergarten.jpg',
    '/images/lower-secondary.jpg',
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 bg-navy">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/student-life.jpg" 
            alt="Student Life" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 reveal opacity-0 translate-y-6">
            Student <span className="text-gold">Life</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto reveal opacity-0 translate-y-6 animation-delay-200">
            Discover the vibrant community and endless opportunities beyond the classroom.
          </p>
        </div>
      </section>

      {/* Extracurricular Activities */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Extracurricular Activities
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-navy-600 mt-4 max-w-2xl mx-auto">
              We offer a wide range of activities to help students discover their passions and develop new skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div 
                key={activity.title}
                className="bg-white rounded-2xl overflow-hidden shadow-soft card-hover reveal opacity-0 translate-y-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-navy mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-navy-600 text-sm">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Leadership */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal opacity-0 translate-y-6">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                Clubs & <span className="text-gold">Leadership</span>
              </h2>
              <p className="text-navy-600 leading-relaxed mb-8">
                Our student clubs and leadership programs provide opportunities for students to 
                develop important life skills, pursue their interests, and make a positive impact 
                on their community. From student government to special interest clubs, there's 
                something for everyone.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {clubs.map((club) => (
                  <div 
                    key={club.name}
                    className="flex items-start gap-3 bg-ivory rounded-lg p-4"
                  >
                    <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <club.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-sm">{club.name}</h3>
                      <p className="text-navy-600 text-xs">{club.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal opacity-0 translate-y-6 animation-delay-200">
              <img 
                src="/images/upper-secondary.jpg" 
                alt="Student Leadership"
                className="rounded-2xl shadow-card w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sports Programs */}
      <section className="section-padding bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Sports Programs
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-white/80 mt-4 max-w-2xl mx-auto">
              Our comprehensive sports program promotes physical fitness, teamwork, and healthy competition.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Football',
              'Basketball',
              'Swimming',
              'Athletics',
              'Volleyball',
              'Tennis',
              'Badminton',
              'Table Tennis',
            ].map((sport, index) => (
              <div 
                key={sport}
                className="bg-navy-700/50 rounded-xl p-6 text-center reveal opacity-0 translate-y-6"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Trophy className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-white font-medium">{sport}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Photo Gallery
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-xl group reveal opacity-0 translate-y-6 ${
                  index === 0 ? 'col-span-2 row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentLife;
