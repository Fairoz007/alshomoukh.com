import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
// No imports

const Home = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const programs = [
    {
      title: 'Kindergarten',
      description: 'A nurturing start fostering curiosity and foundational skills.',
      link: '/academics/kindergarten',
      image: '/images/kindergarten.jpg',
      level: 'LEVEL 01'
    },
    {
      title: 'Primary School',
      description: 'Developing core skills and building confident learners.',
      link: '/academics/primary',
      image: '/images/primary.jpg',
      level: 'LEVEL 02'
    },
    {
      title: 'Lower Secondary',
      description: 'Expanding knowledge and preparing for higher challenges.',
      link: '/academics/lower-secondary',
      image: '/images/lower-secondary.jpg',
      level: 'LEVEL 03'
    },
    {
      title: 'Upper Secondary',
      description: 'Advanced studies preparing future university leaders.',
      link: '/academics/upper-secondary',
      image: '/images/upper-secondary.jpg',
      level: 'LEVEL 04'
    },
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-[#0B3958] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-students.jpg"
            alt="Students"
            className="w-full h-full object-cover opacity-80 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B3958]/95 md:from-[#0B3958]/90 via-[#0B3958]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-40 md:pt-32">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.1] mb-6 reveal opacity-0 translate-y-6 text-white drop-shadow-sm tracking-tight">
              Inspiring Global<br />
              Leaders of Tomorrow
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 reveal opacity-0 translate-y-6 animation-delay-200 tracking-wide font-light flex flex-wrap items-center gap-2">
              Academic Excellence <span className="text-[#BB9268]">|</span> Innovation <span className="text-[#BB9268]">|</span> Character Development
            </p>
            <div className="flex flex-wrap gap-4 reveal opacity-0 translate-y-6 animation-delay-300">
              <Link to="/apply-now" className="bg-[#BB9268] text-white px-8 py-3.5 rounded-lg text-[15px] font-medium transition-all duration-300 hover:bg-[#875D3B] shadow-sm hover:shadow-md border border-[#BB9268]">
                Apply Now
              </Link>
              <Link to="/academics" className="bg-transparent border border-white text-white px-8 py-3.5 rounded-lg text-[15px] font-medium transition-all duration-300 hover:bg-white hover:text-[#0B3958] shadow-sm">
                Explore Curriculum
              </Link>
            </div>
          </div>
        </div>

        {/* Curved Wave shape at bottom */}
        <div className="absolute bottom-[0px] left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-full h-[100px] sm:h-[180px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,80 C300,160 800,-20 1200,80 L1200,120 L0,120 Z" fill="#BB9268" opacity="0.4"></path>
            <path d="M0,100 C400,180 800,0 1200,100 L1200,120 L0,120 Z" fill="#FFFFFF"></path>
          </svg>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="relative py-32 bg-[#F9F9F9]">
        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="text-center mb-20 reveal opacity-0 translate-y-6 flex flex-col items-center">
            <span className="text-[#BB9268] text-xs font-bold uppercase tracking-[0.4em] mb-4">OUR PATHWAYS</span>
            <h2 className="font-serif text-[42px] md:text-5xl font-bold text-[#0B3958] mb-6 tracking-tight">Academic Programs</h2>
            <div className="w-16 h-[1.5px] bg-[#BB9268] mb-8"></div>
            <p className="text-[#0B3958]/70 max-w-[650px] text-base leading-relaxed font-light">
              Providing a continuous journey of excellence from early years to university preparation,
              tailored to nurture every student's unique potential.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="group relative bg-white rounded-[24px] overflow-hidden flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(11,57,88,0.1)] reveal opacity-0 translate-y-6 hover:-translate-y-2 transition-all duration-500 h-full border border-gray-50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B3958]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#BB9268] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-widest">{program.level}</span>
                  </div>
                </div>

                <div className="p-8 flex flex-col items-start text-left flex-grow">
                  <h3 className="font-serif text-2xl font-bold text-[#0B3958] mb-4 transition-colors duration-300 group-hover:text-[#BB9268]">
                    {program.title}
                  </h3>
                  <p className="text-[#0B3958]/70 text-[14px] leading-[1.6] mb-8 font-light line-clamp-2">
                    {program.description}
                  </p>

                  <div className="mt-auto w-full">
                    <Link
                      to={program.link}
                      className="inline-flex items-center text-[#0B3958] text-[13px] font-bold tracking-widest transition-all duration-300 hover:text-[#BB9268] group/btn"
                    >
                      LEARN MORE
                      <span className="ml-2 w-8 h-[1px] bg-[#0B3958] transition-all duration-300 group-hover/btn:w-12 group-hover/btn:bg-[#BB9268]"></span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Community Section */}
      <section className="relative py-24 pb-32 bg-white overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0B3958]/[0.02] -skew-x-12 transform origin-top-right transition-all duration-1000"></div>

        <div className="absolute top-[0px] left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-full h-[120px] sm:h-[180px] -scale-x-100" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C400,160 800,-40 1200,60 L1200,0 L0,0 Z" fill="#BB9268" opacity="0.3"></path>
            <path d="M0,80 C400,180 800,20 1200,80 L1200,0 L0,0 Z" fill="#FFFFFF"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal opacity-0 translate-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BB9268]/10 border border-[#BB9268]/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BB9268] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BB9268]"></span>
                </span>
                <span className="text-[#BB9268] text-[10px] font-bold uppercase tracking-widest">Global Outreach</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0B3958] mb-6 leading-tight">
                A Truly <span className="text-[#BB9268]">International</span> Community
              </h2>
              <p className="text-[#0B3958]/70 text-base leading-relaxed mb-10 max-w-lg">
                Our diverse student body hails from over 20 countries, creating a
                rich multicultural environment of global learning and friendship. We celebrate
                diversity as a core strength that prepares students for a globalized world.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-[#0B3958] mb-1">20+</div>
                  <div className="text-[11px] text-[#BB9268] font-bold uppercase tracking-wider">Nationalities</div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-[#0B3958] mb-1">Global</div>
                  <div className="text-[11px] text-[#BB9268] font-bold uppercase tracking-wider">Perspective</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  { name: 'Oman', code: 'om' },
                  { name: 'UAE', code: 'ae' },
                  { name: 'France', code: 'fr' },
                  { name: 'Netherlands', code: 'nl' },
                  { name: 'India', code: 'in' },
                  { name: 'Jordan', code: 'jo' }
                ].map((country) => (
                  <div key={country.name} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-xl border border-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                    <img
                      src={`https://flagcdn.com/w40/${country.code}.png`}
                      alt={country.name}
                      className="w-6 h-4 object-cover rounded-[1px]"
                    />
                    <span className="text-[11px] font-bold text-[#0B3958] tracking-wide uppercase">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative reveal opacity-0 translate-y-6 animation-delay-200">
              <div className="relative">
                {/* World Map Backdrop */}
                <div className="absolute inset-0 bg-[#0B3958]/5 rounded-[3rem] -rotate-3 transform scale-105"></div>
                <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden min-h-[400px] flex items-center justify-center">
                  <img
                    src="/images/world-map-dots.png"
                    alt="World Map"
                    className="w-full h-auto opacity-10 scale-110"
                    onError={(e) => { e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg'; e.currentTarget.style.opacity = '0.05'; }}
                  />

                  {/* Floating Pulsing Markers */}
                  <div className="absolute inset-0">
                    <div className="absolute top-[25%] left-[62%] group">
                      <div className="w-3 h-3 bg-[#BB9268] rounded-full animate-pulse relative z-10 shadow-[0_0_10px_rgba(187,146,104,0.5)]"></div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0B3958] text-white text-[9px] px-2 py-1 rounded-md whitespace-nowrap z-20">Middle East</div>
                    </div>
                    <div className="absolute top-[30%] left-[48%] group">
                      <div className="w-2 h-2 bg-[#0B3958] rounded-full animate-bounce relative z-10 shadow-[0_0_8px_rgba(11,57,88,0.3)]"></div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0B3958] text-white text-[9px] px-2 py-1 rounded-md whitespace-nowrap z-20">Europe</div>
                    </div>
                    <div className="absolute top-[45%] left-[72%] group">
                      <div className="w-2.5 h-2.5 bg-[#BB9268] rounded-full animate-ping relative z-10 shadow-[0_0_8px_rgba(187,146,104,0.4)]"></div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0B3958] text-white text-[9px] px-2 py-1 rounded-md whitespace-nowrap z-20">Asia</div>
                    </div>

                    {/* Floating Student Photos representing diversity */}
                    <div className="absolute top-[15%] left-[15%] animate-float">
                      <img src="https://i.pravatar.cc/100?u=1" className="w-12 h-12 rounded-2xl border-2 border-white shadow-lg object-cover rotate-3" alt="" />
                    </div>
                    <div className="absolute bottom-[20%] left-[20%] animate-float animation-delay-300">
                      <img src="https://i.pravatar.cc/100?u=2" className="w-10 h-10 rounded-xl border-2 border-white shadow-lg object-cover -rotate-6" alt="" />
                    </div>
                    <div className="absolute top-[10%] right-[15%] animate-float animation-delay-500">
                      <img src="https://i.pravatar.cc/100?u=3" className="w-14 h-14 rounded-3xl border-2 border-white shadow-lg object-cover rotate-12" alt="" />
                    </div>
                    <div className="absolute bottom-[15%] right-[20%] animate-float animation-delay-200">
                      <img src="https://i.pravatar.cc/100?u=4" className="w-11 h-11 rounded-2xl border-2 border-white shadow-lg object-cover -rotate-3" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Achievement Section */}
      <section className="relative bg-[#FAF8F3] pt-32 pb-24 overflow-hidden">
        <div className="absolute top-[0px] left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-full h-[100px] sm:h-[150px] -scale-x-100" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C400,140 800,-20 1200,60 L1200,0 L0,0 Z" fill="#0B3958"></path>
            <path d="M0,70 C400,150 800,-10 1200,70 L1200,0 L0,0 Z" fill="#0B3958" opacity="0.8"></path>
            <path d="M0,80 C400,160 800,0 1200,80 L1200,0 L0,0 Z" fill="#FFFFFF"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-8 relative z-30">
          <div className="flex justify-between items-end mb-10 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0B3958] text-right w-full tracking-tight">
              Student Achievement
            </h2>
          </div>

          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl reveal opacity-0 translate-y-6 bg-white min-h-[400px] flex items-center group">
            <img
              src="/images/student-trophy.jpg"
              alt="Student Achievement"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B3958]/90 md:to-[#0B3958]/70"></div>

            <div className="relative z-10 w-full flex justify-end p-6 md:p-12">
              <div className="bg-[#0B3958]/95 backdrop-blur-md shadow-2xl p-8 md:p-12 rounded-[2rem] md:rounded-tl-[3rem] md:rounded-tr-xl md:rounded-bl-xl md:rounded-br-[4rem] text-white border border-white/10 w-full max-w-xl transition-transform duration-500 hover:translate-y-[-5px]">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#BB9268] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl font-serif leading-none mt-2">"</span>
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 overflow-hidden pointer-events-none opacity-5">
                  <svg viewBox="0 0 400 400"><path d="M0 400L400 0H400V400Z" fill="#FFF" /></svg>
                </div>
                <p className="text-sm md:text-lg leading-relaxed mb-8 text-white/95 font-light tracking-wide">
                  At S.I.S I learned to strive for excellence in all areas.
                  The academic support and extracurricular opportunities helped
                  me develop the skills and confidence needed to gain admission
                  to top universities worldwide.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-[1px] bg-[#BB9268]"></div>
                  <div>
                    <p className="font-semibold text-white tracking-wide">Ahmad Hassan</p>
                    <p className="text-xs text-white/70 font-medium">Class of 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="affiliations text-center py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="elem font-serif text-3xl md:text-5xl font-bold text-[#0B3958] mb-16 reveal opacity-0 translate-y-6" data-aos="fade-in">
            Our Affiliations
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-y-12 reveal opacity-0 translate-y-6">
            <div className="w-1/2 md:w-1/3 lg:w-1/6 elem border-affiliations px-4" data-aos="fade-up">
              <a href="https://home.moe.gov.om/?GetLang=en" target="_blank" rel="noopener noreferrer" className="block transition-transform duration-300 hover:scale-105">
                <img src="https://www.alshomoukh.com:443/uploads/affiliations/20200807213934-2020-08-07affiliations213852.jpg" alt="Ministry of Education" className="max-h-24 mx-auto object-contain" />
              </a>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/6 elem border-affiliations px-4" data-aos="fade-up">
              <a href="https://www.cognia.org/" target="_blank" rel="noopener noreferrer" className="block transition-transform duration-300 hover:scale-105">
                <img src="https://www.alshomoukh.com:443/uploads/affiliations/20200807213952-2020-08-07affiliations213944.jpg" alt="Cognia" className="max-h-24 mx-auto object-contain" />
              </a>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/6 elem border-affiliations px-4" data-aos="fade-up">
              <a href="https://www.ecis.org/" target="_blank" rel="noopener noreferrer" className="block transition-transform duration-300 hover:scale-105">
                <img src="https://www.alshomoukh.com:443/uploads/affiliations/20200807214011-2020-08-07affiliations214001.jpg" alt="ECIS" className="max-h-24 mx-auto object-contain" />
              </a>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/6 elem border-affiliations px-4" data-aos="fade-up">
              <a href="https://qualifications.pearson.com/en/home.html" target="_blank" rel="noopener noreferrer" className="block transition-transform duration-300 hover:scale-105">
                <img src="https://www.alshomoukh.com:443/uploads/affiliations/20200808182038-2020-08-08affiliations182014.jpg" alt="Pearson" className="max-h-24 mx-auto object-contain" />
              </a>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/6 elem border-affiliations px-4" data-aos="fade-up">
              <a href="https://shomoukh.com" target="_blank" rel="noopener noreferrer" className="block transition-transform duration-300 hover:scale-105">
                <img src="https://www.alshomoukh.com:443/uploads/affiliations/20221208222839-2022-12-08affiliations222835.jpg" alt="Shomoukh" className="max-h-24 mx-auto object-contain" />
              </a>
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/6 elem border-affiliations px-4" data-aos="fade-up">
              <a href="https://www.ges.om/" target="_blank" rel="noopener noreferrer" className="block transition-transform duration-300 hover:scale-105">
                <img src="https://www.alshomoukh.com:443/uploads/affiliations/20221208222244-2022-12-08affiliations222240.jpeg" alt="GES" className="max-h-24 mx-auto object-contain" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
