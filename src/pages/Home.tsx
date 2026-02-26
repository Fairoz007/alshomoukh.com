import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
      image: '/images/kindergarten-icon.jpg',
      link: '/academics/kindergarten',
    },
    {
      title: 'Primary School',
      description: 'Developing core skills and building confident learners.',
      image: '/images/primary-icon.jpg',
      link: '/academics/primary',
    },
    {
      title: 'Lower Secondary',
      description: 'Expanding knowledge and preparing for higher challenges.',
      image: '/images/lower-secondary-icon.jpg',
      link: '/academics/lower-secondary',
    },
    {
      title: 'Upper Secondary',
      description: 'Advanced studies preparing future university leaders.',
      image: '/images/upper-secondary-icon.jpg',
      link: '/academics/upper-secondary',
    },
  ];

  return (
    <div className="overflow-hidden bg-[#FAF8F3]">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center bg-[#0A2E5C] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-students.jpg"
            alt="Students"
            className="w-full h-full object-cover opacity-80 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E5C]/95 md:from-[#0A2E5C]/90 via-[#0A2E5C]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-40 md:pt-32">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1.1] mb-6 reveal opacity-0 translate-y-6 text-[#F9F6F0] drop-shadow-sm tracking-tight">
              Inspiring Global<br />
              Leaders of Tomorrow
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 reveal opacity-0 translate-y-6 animation-delay-200 tracking-wide font-light flex flex-wrap items-center gap-2">
              Academic Excellence <span className="text-[#C8A45C]">|</span> Innovation <span className="text-[#C8A45C]">|</span> Character Development
            </p>
            <div className="flex flex-wrap gap-4 reveal opacity-0 translate-y-6 animation-delay-300">
              <Link to="/apply-now" className="bg-[#C8A45C] text-white px-8 py-3.5 rounded-lg text-[15px] font-medium transition-all duration-300 hover:bg-[#b5924d] shadow-sm hover:shadow-md border border-[#C8A45C]">
                Apply Now
              </Link>
              <Link to="/academics" className="bg-transparent border border-white text-white px-8 py-3.5 rounded-lg text-[15px] font-medium transition-all duration-300 hover:bg-white hover:text-[#0A2E5C] shadow-sm">
                Explore Curriculum
              </Link>
            </div>
          </div>
        </div>

        {/* Curved Wave shape at bottom */}
        <div className="absolute bottom-[0px] left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-full h-[100px] sm:h-[180px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,80 C300,160 800,-20 1200,80 L1200,120 L0,120 Z" fill="#EAE5CD" opacity="0.6"></path>
            <path d="M0,100 C400,180 800,0 1200,100 L1200,120 L0,120 Z" fill="#FAF8F3"></path>
          </svg>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="relative py-24 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 reveal opacity-0 translate-y-6 flex flex-col items-center">
            <span className="text-[#C6A14A] text-xs font-bold uppercase tracking-[0.3em] mb-3">Our Pathways</span>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-12 bg-[#0F2B46]/20"></div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0F2B46] tracking-tight">Academic Programs</h2>
              <div className="h-[1px] w-12 bg-[#0F2B46]/20"></div>
            </div>
            <p className="text-[#0F2B46]/60 max-w-lg text-[13px] leading-relaxed">
              Providing a continuous journey of excellence from early years to university preparation,
              tailored to nurture every student's unique potential.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="group relative bg-white rounded-[32px] p-8 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(15,43,70,0.08)] border border-gray-100/50 reveal opacity-0 translate-y-6 hover:-translate-y-3 transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Decorative Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#C6A14A] rounded-b-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                {/* Main Icon Container */}
                <div className="relative mb-8 pt-2">
                  <div className="w-24 h-24 rounded-[28px] bg-[#F4F8FA] flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:rotate-6">
                    <div className="w-20 h-20 border-[1px] border-[#C6A14A]/30 rounded-[22px] flex items-center justify-center bg-white shadow-inner">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-12 h-12 object-contain filter group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  {/* Floating geometric background element */}
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#C6A14A]/10 rounded-full blur-xl group-hover:bg-[#C6A14A]/20 transition-colors"></div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <span className="text-[10px] font-bold text-[#C6A14A] uppercase tracking-[0.2em] mb-2 block">Level 0{index + 1}</span>
                  <h3 className="font-serif text-xl font-bold text-[#0F2B46] mb-4 group-hover:text-[#C6A14A] transition-colors">
                    {program.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-[#C6A14A]/40 mx-auto mb-4"></div>
                  <p className="text-[#0F2B46]/70 text-[12px] leading-relaxed mb-8 px-2 font-medium">
                    {program.description}
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  to={program.link}
                  className="relative overflow-hidden bg-[#0F2B46] text-white w-full py-3.5 rounded-2xl text-[12px] font-bold tracking-wider transition-all duration-300 hover:bg-[#C6A14A] flex items-center justify-center gap-2 group-hover:shadow-[0_8px_16px_rgba(198,161,74,0.3)]"
                >
                  <span className="relative z-10">LEARN MORE</span>
                  <svg
                    className="w-3 h-3 relative z-10 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Community Section */}
      <section className="relative py-24 pb-32 bg-[#F6F7F9] overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0A2E5C]/[0.02] -skew-x-12 transform origin-top-right transition-all duration-1000"></div>

        <div className="absolute top-[0px] left-0 w-full overflow-hidden leading-none z-20">
          <svg className="relative block w-full h-[120px] sm:h-[180px] -scale-x-100" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C400,160 800,-40 1200,60 L1200,0 L0,0 Z" fill="#EAE5CD" opacity="0.4"></path>
            <path d="M0,80 C400,180 800,20 1200,80 L1200,0 L0,0 Z" fill="#FAF8F3"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal opacity-0 translate-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A14A]/10 border border-[#C6A14A]/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6A14A] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6A14A]"></span>
                </span>
                <span className="text-[#C6A14A] text-[10px] font-bold uppercase tracking-widest">Global Outreach</span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0A2E5C] mb-6 leading-tight">
                A Truly <span className="text-[#C6A14A]">International</span> Community
              </h2>
              <p className="text-[#0F2B46]/70 text-base leading-relaxed mb-10 max-w-lg">
                Our diverse student body hails from over 20 countries, creating a
                rich multicultural environment of global learning and friendship. We celebrate
                diversity as a core strength that prepares students for a globalized world.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-[#0A2E5C] mb-1">20+</div>
                  <div className="text-[11px] text-[#C6A14A] font-bold uppercase tracking-wider">Nationalities</div>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-[#0A2E5C] mb-1">Global</div>
                  <div className="text-[11px] text-[#C6A14A] font-bold uppercase tracking-wider">Perspective</div>
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
                    <span className="text-[11px] font-bold text-[#0A2E5C] tracking-wide uppercase">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative reveal opacity-0 translate-y-6 animation-delay-200">
              <div className="relative">
                {/* World Map Backdrop */}
                <div className="absolute inset-0 bg-[#0A2E5C]/5 rounded-[3rem] -rotate-3 transform scale-105"></div>
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
                      <div className="w-3 h-3 bg-[#C6A14A] rounded-full animate-pulse relative z-10 shadow-[0_0_10px_rgba(198,161,74,0.5)]"></div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0A2E5C] text-white text-[9px] px-2 py-1 rounded-md whitespace-nowrap z-20">Middle East</div>
                    </div>
                    <div className="absolute top-[30%] left-[48%] group">
                      <div className="w-2 h-2 bg-[#0A2E5C] rounded-full animate-bounce relative z-10 shadow-[0_0_8px_rgba(10,46,92,0.3)]"></div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0A2E5C] text-white text-[9px] px-2 py-1 rounded-md whitespace-nowrap z-20">Europe</div>
                    </div>
                    <div className="absolute top-[45%] left-[72%] group">
                      <div className="w-2.5 h-2.5 bg-[#C6A14A] rounded-full animate-ping relative z-10 shadow-[0_0_8px_rgba(198,161,74,0.4)]"></div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0A2E5C] text-white text-[9px] px-2 py-1 rounded-md whitespace-nowrap z-20">Asia</div>
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
            <path d="M0,60 C400,140 800,-20 1200,60 L1200,0 L0,0 Z" fill="#0A2E5C"></path>
            <path d="M0,70 C400,150 800,-10 1200,70 L1200,0 L0,0 Z" fill="#173A5E" opacity="0.8"></path>
            <path d="M0,80 C400,160 800,0 1200,80 L1200,0 L0,0 Z" fill="#F6F7F9"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-8 relative z-30">
          <div className="flex justify-between items-end mb-10 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0A2E5C] text-right w-full tracking-tight">
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
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A2E5C]/90 md:to-[#0A2E5C]/70"></div>

            <div className="relative z-10 w-full flex justify-end p-6 md:p-12">
              <div className="bg-[#173A5E]/95 backdrop-blur-md shadow-2xl p-8 md:p-12 rounded-[2rem] md:rounded-tl-[3rem] md:rounded-tr-xl md:rounded-bl-xl md:rounded-br-[4rem] text-white border border-white/10 w-full max-w-xl transition-transform duration-500 hover:translate-y-[-5px]">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#C19B6C] rounded-full flex items-center justify-center shadow-lg">
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
                  <div className="w-10 h-[1px] bg-[#C19B6C]"></div>
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

      {/* News & Events Section */}
      <section className="py-16 bg-white pb-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10 reveal opacity-0 translate-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0A2E5C] mb-2">
              News & Events
            </h2>
            <div className="w-12 h-[2px] bg-[#C19B6C] mx-auto mt-4" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 reveal opacity-0 translate-y-6">
            <div className="bg-white px-6 py-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center min-w-[150px]">
              <div className="w-8 h-8 mb-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2"><path d="M12 2L2 22h20L12 2z" /></svg>
              </div>
              <span className="text-[10px] text-[#0F2B46]/60 uppercase tracking-wide font-medium">Ministry of Education</span>
            </div>

            <div className="bg-white px-6 py-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center min-w-[150px] h-[80px]">
              <span className="font-serif text-xl font-bold text-[#0A2E5C]">edexcel<span className="text-xs rounded-full border border-current align-top ml-1">R</span></span>
            </div>

            <div className="bg-white px-6 py-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center min-w-[150px] gap-2 h-[80px]">
              <div className="w-6 h-6 bg-[#0070B8] rounded-full flex items-center justify-center text-white font-bold text-xs">P</div>
              <span className="text-lg text-[#0070B8] font-medium">Pearson</span>
            </div>

            <div className="bg-white px-6 py-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center min-w-[150px] h-[80px]">
              <div className="w-8 h-8 rounded-full border border-[#0A2E5C] flex items-center justify-center mb-1 shadow-inner bg-blue-50">
                <span className="text-[#0A2E5C] font-bold text-[10px]">IB</span>
              </div>
              <span className="text-[8px] text-gray-500 text-center leading-tight">International<br />Baccalaureate</span>
            </div>

            <div className="bg-white px-6 py-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-center min-w-[150px] h-[80px]">
              <span className="font-sans text-xl font-bold tracking-wide flex items-center text-[#1c1c1c]"><span className="text-[#0A2647] font-bold text-2xl mr-1">c</span>cognia</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
