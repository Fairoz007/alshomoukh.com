import { useEffect, useRef, useState } from 'react';
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
import ProgressDots from './components/ProgressDots';
import ChatBot from './components/ChatBot';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // State refs for animation loop to avoid re-renders
  const scrollState = useRef({
    current: 0,
    target: 0,
    max: 0,
    isDragging: false,
    lastX: 0
  });

  // Total sections
  const totalSections = 9;

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Custom Smooth Horizontal Scroll
  useEffect(() => {
    if (isMobile) return;

    const horizontal = horizontalRef.current;
    if (!horizontal) return;

    // Calculate dimensions
    const updateDimensions = () => {
      if (horizontal && window.innerWidth > 0) {
        scrollState.current.max = horizontal.scrollWidth - window.innerWidth;
      }
    };

    // Initial calculation and ResizeObserver
    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(horizontal);

    // Animation Loop
    let rafId: number;
    const animate = () => {
      const state = scrollState.current;

      // Lerp for smoothness (0.08 is the "premium" feel factor)
      const diff = state.target - state.current;
      const delta = Math.abs(diff) < 0.1 ? diff : diff * 0.08;

      state.current += delta;

      // Apply transform
      horizontal.style.transform = `translate3d(${- state.current}px, 0, 0)`;

      // Update active section logic
      if (window.innerWidth > 0) {
        const newSection = Math.round(state.current / window.innerWidth);
        // Using a functional update check at the component level would be expensive 
        // We trigger state update only when changed
        setCurrentSection(prev => {
          if (prev !== newSection) return newSection;
          return prev;
        });
      }

      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    // Snap Timeout
    let snapTimeout: ReturnType<typeof setTimeout>;

    // Wheel Handler
    const handleWheel = (e: WheelEvent) => {
      // Prevent default vertical scrolling behavior
      const state = scrollState.current;

      // Map vertical scroll to horizontal 
      const delta = e.deltaY + e.deltaX;

      state.target += delta;

      // Clamp
      state.target = Math.max(0, Math.min(state.target, state.max));

      // Soft Snap Logic
      clearTimeout(snapTimeout);
      snapTimeout = setTimeout(() => {
        // Snap to nearest section
        const sectionWidth = window.innerWidth;
        const nearestSection = Math.round(state.target / sectionWidth);
        const snapTarget = nearestSection * sectionWidth;

        // Only snap if we are close enough or just to ensure alignment
        // We just update the target, the lerp will handle the smoothing
        state.target = Math.max(0, Math.min(snapTarget, state.max));
      }, 100); // 100ms after last scroll event
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', updateDimensions);
      resizeObserver.disconnect();
      cancelAnimationFrame(rafId);
      clearTimeout(snapTimeout);
    };
  }, [isMobile]);

  // Navigate to section
  const navigateToSection = (index: number) => {
    if (isMobile) {
      const sections = document.querySelectorAll('.section-panel');
      sections[index]?.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(index);
      return;
    }

    // Update target for smooth scroll
    const targetX = index * window.innerWidth;
    scrollState.current.target = targetX;

    // Immediate state update for UI responsiveness
    setCurrentSection(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fixed Header */}
      <Header
        currentSection={currentSection}
        onNavigate={navigateToSection}
        isMobile={isMobile}
      />

      {/* Main Container */}
      <div
        ref={containerRef}
        className={`relative w-full ${isMobile ? 'min-h-screen' : 'fixed inset-0 overflow-hidden overscroll-none'}`}
      >
        <div
          ref={horizontalRef}
          className={`${isMobile ? 'flex flex-col w-full' : 'flex h-full w-max will-change-transform'} `}
        >
          {/* 1. Hero */}
          <section className={`section-panel ${isMobile ? 'w-full min-h-screen' : 'w-screen h-screen flex-shrink-0'} `} id="hero">
            <HeroSection isActive={currentSection === 0} />
          </section>

          {/* 2. About */}
          <section className={`section-panel ${isMobile ? 'w-full min-h-screen' : 'w-screen h-screen flex-shrink-0'} `} id="about">
            <AboutSection isActive={currentSection === 1} />
          </section>

          {/* 3. Academics */}
          <section className={`section-panel ${isMobile ? 'w-full min-h-screen' : 'w-screen h-screen flex-shrink-0'} `} id="academics">
            <AcademicsSection isActive={currentSection === 2} />
          </section>

          {/* 4. Student Life */}
          <section className={`section-panel ${isMobile ? 'w-full min-h-screen' : 'w-screen h-screen flex-shrink-0'} `} id="student-life">
            <StudentLifeSection isActive={currentSection === 3} />
          </section>

          {/* 5. Admissions */}
          <section className={`section-panel ${isMobile ? 'w-full min-h-screen' : 'w-screen h-screen flex-shrink-0'} `} id="admissions">
            <AdmissionSection isActive={currentSection === 4} />
          </section>

          {/* 6. Campus */}
          <section className={`section-panel ${isMobile ? 'w-full min-h-screen' : 'w-screen h-screen flex-shrink-0'} `} id="campus">
            <CampusSection isActive={currentSection === 5} />
          </section>

          {/* 7. News */}
          <section className={`section-panel ${isMobile ? 'w-full min-h-screen' : 'w-screen h-screen flex-shrink-0'} `} id="news">
            <NewsSection isActive={currentSection === 6} />
          </section>

          {/* 8. Contact */}
          <section className={`section-panel ${isMobile ? 'w-full min-h-screen' : 'w-screen h-screen flex-shrink-0'} `} id="contact">
            <ContactSection isActive={currentSection === 7} />
          </section>

          {/* 9. Footer */}
          <section className={`section-panel ${isMobile ? 'w-full h-auto' : 'w-screen h-screen flex-shrink-0 flex items-center justify-center bg-[#2A2A2A]'} `} id="footer">
            <div className="w-full">
              <FooterSection isActive={currentSection === 8} />
            </div>
          </section>
        </div>
      </div>

      {/* Progress Dots - Hidden on mobile */}
      {!isMobile && (
        <ProgressDots
          total={totalSections}
          current={currentSection}
          onDotClick={navigateToSection}
        />
      )}

      {/* Chat Bot */}
      <ChatBot />
    </div>
  );
}

export default App;
