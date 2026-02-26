import { useEffect } from 'react';
import { Target, Eye, Heart, Award, Users } from 'lucide-react';

const About = () => {
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

  const coreValues = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in everything we do.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Building character through honesty and ethical behavior.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Fostering a supportive and inclusive environment.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Embracing new ideas and creative problem-solving.',
    },
  ];

  const stats = [
    { number: '20+', label: 'Years of Excellence' },
    { number: '2000+', label: 'Students Enrolled' },
    { number: '35+', label: 'Nationalities' },
    { number: '150+', label: 'Expert Faculty' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/campus.jpg" 
            alt="Campus" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 reveal opacity-0 translate-y-6">
            About Our <span className="text-gold">School</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto reveal opacity-0 translate-y-6 animation-delay-200">
            Discover the story behind Al Shomoukh International School and our commitment to excellence in education.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-soft reveal opacity-0 translate-y-6">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-4">
                Our Mission
              </h2>
              <p className="text-navy-600 leading-relaxed">
                To provide a world-class education that nurtures intellectual curiosity, 
                fosters critical thinking, and develops responsible global citizens. We 
                are committed to empowering students with the knowledge, skills, and 
                values needed to thrive in an ever-changing world while maintaining 
                a deep respect for cultural heritage and traditions.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-soft reveal opacity-0 translate-y-6 animation-delay-200">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-4">
                Our Vision
              </h2>
              <p className="text-navy-600 leading-relaxed">
                To be recognized as a leading international school that inspires and 
                prepares students to become innovative leaders and positive change-makers 
                in their communities and beyond. We envision a learning community where 
                every student discovers their potential and pursues their passions with 
                confidence and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center reveal opacity-0 translate-y-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2">
                  {stat.number}
                </p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal opacity-0 translate-y-6">
              <div className="relative">
                <img 
                  src="/images/principal.jpg" 
                  alt="School Principal"
                  className="rounded-2xl shadow-card w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-gold text-white px-6 py-3 rounded-lg">
                  <p className="font-serif font-bold">Dr. Sarah Al-Rashdi</p>
                  <p className="text-sm text-white/90">School Principal</p>
                </div>
              </div>
            </div>

            <div className="reveal opacity-0 translate-y-6 animation-delay-200">
              <p className="text-gold font-medium mb-2">Message from the Principal</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-6">
                Welcome to Al Shomoukh International School
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  It is with great pride and enthusiasm that I welcome you to Al Shomoukh 
                  International School. As Principal, I am honored to lead a community 
                  dedicated to academic excellence, personal growth, and global citizenship.
                </p>
                <p>
                  Our school is more than just a place of learning; it is a vibrant community 
                  where students from diverse backgrounds come together to explore, discover, 
                  and achieve their full potential. We believe in nurturing not only the mind 
                  but also the character of each student.
                </p>
                <p>
                  With our team of dedicated educators, state-of-the-art facilities, and 
                  comprehensive curriculum, we are committed to providing an educational 
                  experience that prepares our students for success in an increasingly 
                  interconnected world.
                </p>
              </div>
              <div className="mt-6">
                <p className="font-serif text-navy font-semibold">Dr. Sarah Al-Rashdi</p>
                <p className="text-navy-500 text-sm">Principal, Al Shomoukh International School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-navy-600 mt-4 max-w-2xl mx-auto">
              These principles guide everything we do at Al Shomoukh International School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={value.title}
                className="bg-white rounded-2xl p-8 text-center shadow-soft card-hover reveal opacity-0 translate-y-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-navy-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Campus
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-navy-600 mt-4 max-w-2xl mx-auto">
              Explore our world-class facilities designed to inspire learning and growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              '/images/campus.jpg',
              '/images/primary.jpg',
              '/images/lower-secondary.jpg',
              '/images/upper-secondary.jpg',
              '/images/student-life.jpg',
              '/images/kindergarten.jpg',
            ].map((image, index) => (
              <div 
                key={index}
                className={`relative overflow-hidden rounded-xl group reveal opacity-0 translate-y-6 ${
                  index === 0 ? 'col-span-2 row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={image} 
                  alt={`Campus ${index + 1}`}
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

export default About;
