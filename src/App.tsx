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
const Academy = lazy(() => minDelay(import('./pages/Academy'), 1000));
const Admissions = lazy(() => minDelay(import('./pages/Admissions'), 1000));
const Connect = lazy(() => minDelay(import('./pages/Connect'), 1000));
const About = lazy(() => minDelay(import('./pages/About'), 1000));
const News = lazy(() => minDelay(import('./pages/News'), 1000));
const Enrichment = lazy(() => minDelay(import('./pages/Enrichment'), 1000));

// New Pages
const Kindergarten = lazy(() => minDelay(import('./pages/Kindergarten'), 1000));
const PrimarySchool = lazy(() => minDelay(import('./pages/PrimarySchool'), 1000));
const LowerSecondary = lazy(() => minDelay(import('./pages/LowerSecondary'), 1000));
const UpperSecondary = lazy(() => minDelay(import('./pages/UpperSecondary'), 1000));
const LearningSupport = lazy(() => minDelay(import('./pages/LearningSupport'), 1000));

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
            <Route path="/academy" element={<Academy />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/enrichment" element={<Enrichment />} />

            {/* New Academic Routes */}
            <Route path="/academy/kindergarten" element={<Kindergarten />} />
            <Route path="/academy/primary" element={<PrimarySchool />} />
            <Route path="/academy/lower-secondary" element={<LowerSecondary />} />
            <Route path="/academy/upper-secondary" element={<UpperSecondary />} />
            <Route path="/academy/learning-support" element={<LearningSupport />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
