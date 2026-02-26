import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import StudentLife from './pages/StudentLife';
import NewsEvents from './pages/NewsEvents';
import Contact from './pages/Contact';
import ApplyNow from './pages/ApplyNow';
import Kindergarten from './pages/academics/Kindergarten';
import Primary from './pages/academics/Primary';
import LowerSecondary from './pages/academics/LowerSecondary';
import UpperSecondary from './pages/academics/UpperSecondary';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-ivory">
        <Header isScrolled={isScrolled} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/academics/kindergarten" element={<Kindergarten />} />
            <Route path="/academics/primary" element={<Primary />} />
            <Route path="/academics/lower-secondary" element={<LowerSecondary />} />
            <Route path="/academics/upper-secondary" element={<UpperSecondary />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/student-life" element={<StudentLife />} />
            <Route path="/news-events" element={<NewsEvents />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply-now" element={<ApplyNow />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
