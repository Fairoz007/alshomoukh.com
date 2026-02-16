import { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';

// Helper to add minimum delay for demo purposes
const minDelay = <T,>(promise: Promise<T>, ms: number) => new Promise<T>(resolve => {
  setTimeout(resolve, ms);
}).then(() => promise);

// Lazy load all pages with delay to show the loader
// In production, you might want to remove minDelay or reduce the time
const Home = lazy(() => minDelay(import('./pages/Home'), 2000));
const TermDates = lazy(() => minDelay(import('./pages/TermDates'), 1000));
const Scholarships = lazy(() => minDelay(import('./pages/Scholarships'), 1000));
const Alumni = lazy(() => minDelay(import('./pages/Alumni'), 1000));
const Careers = lazy(() => minDelay(import('./pages/Careers'), 1000));
const Academy = lazy(() => minDelay(import('./pages/Academy'), 1000));
const Admissions = lazy(() => minDelay(import('./pages/Admissions'), 1000));
const CampusTour = lazy(() => minDelay(import('./pages/CampusTour'), 1000));
const Contact = lazy(() => minDelay(import('./pages/Contact'), 1000));
const Connect = lazy(() => minDelay(import('./pages/Connect'), 1000));

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Refresh ScrollTrigger on mount
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    const handleLoad = () => ScrollTrigger.refresh();
    window.addEventListener('load', handleLoad);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-[#F4F1EA] min-h-screen">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/term-dates" element={<TermDates />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/campus-tour" element={<CampusTour />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
