import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const featuredArticles = [
  {
    category: 'Campus Life',
    date: 'October 14',
    title: 'Preservation and Progress: The Modernization of the Academy Library',
    excerpt:
      'Exploring how historical archives integrate with digital research hubs to foster a new generation of inquisitive scholars.',
  },
  {
    category: 'Leadership',
    date: 'October 12',
    title: 'The Ethics of Leadership in Competitive Academic Environments',
    excerpt:
      'A reflection on nurturing integrity and empathy alongside high-stakes achievement in our senior student body.',
  },
];

const recentArticles = [
  {
    category: 'Innovation',
    date: 'October 08',
    title: 'AI in the Classroom: Collaborative Tools or Disruptive Forces?',
    excerpt:
      'How Al Shomoukh is pioneering responsible AI integration to enhance creative problem-solving skills.',
  },
  {
    category: 'Academic Excellence',
    date: 'October 05',
    title: 'Beyond the Grade: Measuring Success in Global Education',
    excerpt:
      'Redefining the metrics of intelligence and capability for the graduating class of 2025 and their paths.',
  },
];

const mostRead = [
  { number: '01', title: 'Sustainable Campus Initiatives for the Year 2025' },
  { number: '02', title: 'Artistic Expression in Middle School Curriculums' },
  { number: '03', title: 'The Psychology of Peer Mentorship Programs' },
];

const JournalSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const content = contentRef.current;
    const sidebar = sidebarRef.current;

    if (!section || !header || !content || !sidebar) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });

      tl.fromTo(header,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      )
        .fromTo(content.querySelectorAll('.article-card'),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
          '-=0.3'
        )
        .fromTo(sidebar,
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.3'
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to the Journal!');
    setEmail('');
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-24 bg-[#F4F1EA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-10"
          style={{ opacity: 0 }}
        >
          <p className="eyebrow-gold mb-4">Insights & Stories</p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-[#0B1E2F] leading-tight"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            From the Journal
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div ref={contentRef} className="lg:col-span-2">
            {/* Featured Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {featuredArticles.map((article, index) => (
                <article
                  key={index}
                  className="article-card group cursor-pointer"
                  style={{ opacity: 0 }}
                >
                  <div className="w-full h-40 bg-[#E5E2DB] mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#C9A45C]/20 to-[#0B1E2F]/10" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="eyebrow-gold">{article.category}</span>
                    <span className="text-xs text-[#6B7280]">{article.date}</span>
                  </div>
                  <h3
                    className="text-xl text-[#0B1E2F] mb-3 group-hover:text-[#C9A45C] transition-colors duration-300"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm text-[#0B1E2F] font-medium hover:text-[#C9A45C] transition-colors duration-300 group/link"
                  >
                    Read Insight
                    <ArrowRight
                      size={14}
                      className="transform group-hover/link:translate-x-1 transition-transform duration-300"
                    />
                  </a>
                </article>
              ))}
            </div>

            {/* Recent Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentArticles.map((article, index) => (
                <article
                  key={index}
                  className="article-card group cursor-pointer"
                  style={{ opacity: 0 }}
                >
                  <div className="w-full h-32 bg-[#E5E2DB] mb-4 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#0B1E2F]/10 to-[#C9A45C]/20" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="eyebrow-gold">{article.category}</span>
                    <span className="text-xs text-[#6B7280]">{article.date}</span>
                  </div>
                  <h3
                    className="text-lg text-[#0B1E2F] mb-3 group-hover:text-[#C9A45C] transition-colors duration-300"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {article.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className="space-y-6"
            style={{ opacity: 0 }}
          >
            {/* Most Read */}
            <div className="bg-white p-6">
              <p className="eyebrow-gold mb-6">Most Read</p>
              <div className="space-y-5">
                {mostRead.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <span
                      className="text-2xl text-[#C9A45C] flex-shrink-0"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {item.number}
                    </span>
                    <a
                      href="#"
                      className="text-[#0B1E2F] hover:text-[#C9A45C] transition-colors duration-300 text-sm leading-relaxed"
                    >
                      {item.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-[#0B1E2F] p-6 text-white">
              <h3
                className="text-xl mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Subscribe to the <span className="text-[#C9A45C]">Journal</span>
              </h3>
              <p className="text-sm text-[#9CA3AF] mb-6">
                Receive our bi-weekly curated selection of academic research and
                campus reflections.
              </p>
              <form onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-[rgba(244,241,234,0.1)] border border-[rgba(244,241,234,0.2)] text-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#C9A45C] transition-colors duration-300 mb-4"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-[#C9A45C] text-[#0B1E2F] text-sm font-medium tracking-wide hover:bg-[#d4b76d] transition-colors duration-300"
                >
                  Join Publication
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
