import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import AcademicsSection from './sections/AcademicsSection';
import StudentLifeSection from './sections/StudentLifeSection';
import AdmissionSection from './sections/AdmissionSection';
import CampusSection from './sections/CampusSection';
import NewsSection from './sections/NewsSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';
import ChatBot from './components/ChatBot';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth Scroll using Lenis
  // If Lenis is not available, we can just use native scroll or install it. 
  // Since I don't see lenis in package.json, I will use a simple native scroll for now, 
  // but if the user wants "premium" feel, smooth scroll library like Lenis is recommended.
  // For now, I'll stick to native scroll as it's robust, but add CSS smooth scroll.

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Fixed Header */}
      <Header />

      {/* Main Vertical Container */}
      <main ref={containerRef} className="flex flex-col w-full">
        {/* 1. Hero */}
        <section id="hero" className="w-full h-screen relative">
          <HeroSection />
        </section>

        {/* 2. About */}
        <section id="about" className="w-full min-h-screen relative">
          <AboutSection />
        </section>

        {/* 3. Academics */}
        <section id="academics" className="w-full min-h-screen relative">
          <AcademicsSection />
        </section>

        {/* 4. Student Life */}
        <section id="student-life" className="w-full min-h-screen relative">
          <StudentLifeSection />
        </section>

        {/* 5. Admissions */}
        <section id="admissions" className="w-full min-h-screen relative">
          <AdmissionSection />
        </section>

        {/* 6. Campus */}
        <section id="campus" className="w-full min-h-screen relative">
          <CampusSection />
        </section>

        {/* 7. News */}
        <section id="news" className="w-full min-h-screen relative">
          <NewsSection />
        </section>

        {/* 8. Contact */}
        <section id="contact" className="w-full min-h-screen relative">
          <ContactSection />
        </section>

        {/* 9. Footer */}
        <section id="footer" className="w-full relative">
          <FooterSection />
        </section>
      </main>

      {/* Chat Bot */}
      <ChatBot />
    </div>
  );
}

export default App;
