import { useEffect, useState } from 'react';
// Link component imported for future use
import { Calendar, ArrowRight, Clock, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const NewsEvents = () => {
  const [currentPage, setCurrentPage] = useState(1);

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

  const events = [
    {
      id: 1,
      date: '15',
      month: 'MAR',
      title: 'Annual Science Fair 2024',
      description: 'Join us for an exciting showcase of student innovation and scientific discovery. Students from all grade levels will present their research projects and experiments.',
      image: '/images/news-event.jpg',
      time: '9:00 AM - 3:00 PM',
      location: 'School Auditorium',
      category: 'Academic',
    },
    {
      id: 2,
      date: '22',
      month: 'MAR',
      title: 'International Day Celebration',
      description: 'Celebrating our diverse community with cultural performances, international food fair, and exhibitions from over 35 countries.',
      image: '/images/student-life.jpg',
      time: '10:00 AM - 5:00 PM',
      location: 'School Grounds',
      category: 'Cultural',
    },
    {
      id: 3,
      date: '05',
      month: 'APR',
      title: 'University Fair 2024',
      description: 'Meet representatives from top universities around the world. Get information about programs, admissions, and scholarships.',
      image: '/images/campus.jpg',
      time: '11:00 AM - 4:00 PM',
      location: 'Main Hall',
      category: 'Career',
    },
    {
      id: 4,
      date: '12',
      month: 'APR',
      title: 'Spring Concert',
      description: 'An evening of musical performances by our talented students featuring choir, band, and solo performances.',
      image: '/images/primary.jpg',
      time: '6:00 PM - 8:00 PM',
      location: 'Performing Arts Center',
      category: 'Arts',
    },
    {
      id: 5,
      date: '20',
      month: 'APR',
      title: 'Sports Day',
      description: 'Annual athletics competition with track and field events, team sports, and fun activities for the whole family.',
      image: '/images/lower-secondary.jpg',
      time: '8:00 AM - 2:00 PM',
      location: 'Sports Complex',
      category: 'Sports',
    },
    {
      id: 6,
      date: '28',
      month: 'APR',
      title: 'Parent-Teacher Conferences',
      description: 'Individual meetings with teachers to discuss student progress and academic goals for the remainder of the year.',
      image: '/images/upper-secondary.jpg',
      time: '2:00 PM - 6:00 PM',
      location: 'Classrooms',
      category: 'Academic',
    },
  ];

  const news = [
    {
      id: 1,
      title: 'SIS Students Win National Robotics Competition',
      excerpt: 'Our robotics team took first place in the National Robotics Championship, showcasing exceptional engineering and programming skills.',
      date: 'March 10, 2024',
      image: '/images/lower-secondary.jpg',
    },
    {
      id: 2,
      title: 'New STEM Lab Opening This Fall',
      excerpt: 'We are excited to announce the opening of our state-of-the-art STEM laboratory with cutting-edge equipment and facilities.',
      date: 'March 5, 2024',
      image: '/images/campus.jpg',
    },
    {
      id: 3,
      title: 'Alumna Accepted to Oxford University',
      excerpt: 'Congratulations to Sara Al-Rashdi, Class of 2023, who has been accepted to study Medicine at Oxford University.',
      date: 'February 28, 2024',
      image: '/images/student-achievement.jpg',
    },
  ];

  const totalPages = 3;

  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative py-24 md:py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/news-event.jpg" 
            alt="News & Events" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 reveal opacity-0 translate-y-6">
            News & <span className="text-gold">Events</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto reveal opacity-0 translate-y-6 animation-delay-200">
            Stay updated with the latest happenings and upcoming events at Al Shomoukh International School.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Upcoming Events
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div 
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-soft card-hover reveal opacity-0 translate-y-6"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-white rounded-lg p-2 text-center min-w-[50px]">
                    <p className="text-xl font-bold">{event.date}</p>
                    <p className="text-xs">{event.month}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-navy px-3 py-1 rounded-full text-xs font-medium">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-semibold text-navy mb-2">
                    {event.title}
                  </h3>
                  <p className="text-navy-600 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-navy-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-gold font-medium text-sm hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-10 reveal opacity-0 translate-y-6">
            <button 
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center disabled:opacity-50 hover:bg-navy hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  currentPage === page 
                    ? 'bg-gold text-white' 
                    : 'border border-navy-200 hover:bg-navy hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center disabled:opacity-50 hover:bg-navy hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
              Latest News
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div 
                key={item.id}
                className={`bg-ivory rounded-2xl overflow-hidden card-hover reveal opacity-0 translate-y-6 ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`relative overflow-hidden ${index === 0 ? 'h-64 lg:h-80' : 'h-48'}`}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <p className="text-gold text-sm mb-2">{item.date}</p>
                  <h3 className={`font-serif font-semibold text-navy mb-3 ${index === 0 ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
                    {item.title}
                  </h3>
                  <p className="text-navy-600 text-sm mb-4">
                    {item.excerpt}
                  </p>
                  <button className="inline-flex items-center gap-2 text-gold font-medium text-sm hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar CTA */}
      <section className="section-padding bg-navy">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-6">
          <Calendar className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            View Full Calendar
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Stay up to date with all school events, holidays, and important dates throughout the academic year.
          </p>
          <button className="btn-gold inline-flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            View Academic Calendar
          </button>
        </div>
      </section>
    </div>
  );
};

export default NewsEvents;
