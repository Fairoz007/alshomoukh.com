import { lazy, Suspense } from 'react';
import HeroSection from '../sections/HeroSection';
import PrincipalMessageSection from '../sections/PrincipalMessageSection';
import StatsSection from '../sections/StatsSection';
import AcademicPhilosophySection from '../sections/AcademicPhilosophySection';
import CharacterSection from '../sections/CharacterSection';
import CurriculumSection from '../sections/CurriculumSection';
import FacilitiesSection from '../sections/FacilitiesSection';
import AdmissionsSection from '../sections/AdmissionsSection';
import StudentLeadershipSection from '../sections/StudentLeadershipSection';
import GlobalCitizenshipSection from '../sections/GlobalCitizenshipSection';
import ShomoukhStandardSection from '../sections/ShomoukhStandardSection';
import JournalSection from '../sections/JournalSection';
import FinalCTASection from '../sections/FinalCTASection';
import ContactSection from '../sections/ContactSection';
const Chatbot = lazy(() => import('@/components/Chatbot'));

const Home = () => {
    return (
        <main className="relative">
            <HeroSection />
            <PrincipalMessageSection />
            <StatsSection />
            <AcademicPhilosophySection />
            <CharacterSection />
            <CurriculumSection />
            <FacilitiesSection />
            <AdmissionsSection />
            <StudentLeadershipSection />
            <GlobalCitizenshipSection />
            <ShomoukhStandardSection />
            <JournalSection />
            <FinalCTASection />
            <ContactSection />
            <Suspense fallback={null}>
                <Chatbot />
            </Suspense>
        </main>
    );
};

export default Home;
