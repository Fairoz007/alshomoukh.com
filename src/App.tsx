import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import TermDates from './pages/TermDates';
import Scholarships from './pages/Scholarships';
import Alumni from './pages/Alumni';
import Careers from './pages/Careers';
import Academy from './pages/Academy';
import Admissions from './pages/Admissions';
import CampusTour from './pages/CampusTour';
import Contact from './pages/Contact';
import Connect from './pages/Connect';

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
        <Footer />
      </div>
    </Router>
  );
};

export default App;
