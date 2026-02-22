import { lazy, Suspense } from 'react';
import HeroSection from '../sections/HeroSection';
import CurriculumSection from '../sections/CurriculumSection';
import AffiliationsSection from '../sections/AffiliationsSection';

import StudentSpotlightSection from '../sections/StudentSpotlightSection';
import StudentNationalitiesSection from '../sections/StudentNationalitiesSection';
import ContactSection from '../sections/ContactSection';
const Chatbot = lazy(() => import('@/components/Chatbot'));

const Home = () => {
    return (
        <main className="relative">
            <HeroSection />

            <CurriculumSection />
            <StudentSpotlightSection />
            <StudentNationalitiesSection />
            <AffiliationsSection />
            <ContactSection />
            <Suspense fallback={null}>
                <Chatbot />
            </Suspense>
        </main>
    );
};

export default Home;
