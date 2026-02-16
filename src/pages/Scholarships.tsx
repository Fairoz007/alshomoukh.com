import PageHeader from '../components/PageHeader';
import { Award, BookOpen, Users } from 'lucide-react';

const Scholarships = () => {
    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="Scholarships"
                subtitle="Recognizing and creating opportunities for exceptional talent."
            />

            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <p className="eyebrow-gold mb-3">Excellence Awards</p>
                        <h2 className="text-3xl md:text-4xl text-[#0B1E2F] mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                            Investing in Future Leaders
                        </h2>
                        <p className="text-[#6B7280] leading-relaxed mb-6">
                            Al Shomoukh International School offers a range of scholarships to recognize academic brilliance, sporting prowess, and artistic talent. Our scholars program allows gifted students from diverse backgrounds to access world-class education.
                        </p>
                        <button className="px-6 py-3 bg-[#0B1E2F] text-white text-sm font-medium hover:bg-[#1a3045] transition-colors">
                            Download Application Guide
                        </button>
                    </div>
                    <div className="h-80 bg-gray-200 relative overflow-hidden">
                        {/* Placeholder for scholarship image */}
                        <div className="absolute inset-0 bg-[#0B1E2F]/10 flex items-center justify-center text-[#0B1E2F]/30 font-serif text-4xl">
                            Scholars
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 border-t-2 border-[#C9A45C] hover:-translate-y-1 transition-transform duration-300">
                        <BookOpen className="w-10 h-10 text-[#C9A45C] mb-6" />
                        <h3 className="text-xl text-[#0B1E2F] mb-3 font-serif">Academic Scholarship</h3>
                        <p className="text-sm text-[#6B7280]">
                            Up to 100% tuition remission for students demonstrating outstanding academic achievement and intellectual curiosity.
                        </p>
                    </div>

                    <div className="bg-white p-8 border-t-2 border-[#C9A45C] hover:-translate-y-1 transition-transform duration-300">
                        <Award className="w-10 h-10 text-[#C9A45C] mb-6" />
                        <h3 className="text-xl text-[#0B1E2F] mb-3 font-serif">Arts & Music</h3>
                        <p className="text-sm text-[#6B7280]">
                            For exceptional talent in visual arts, drama, or music performance. Audition and portfolio review required.
                        </p>
                    </div>

                    <div className="bg-white p-8 border-t-2 border-[#C9A45C] hover:-translate-y-1 transition-transform duration-300">
                        <Users className="w-10 h-10 text-[#C9A45C] mb-6" />
                        <h3 className="text-xl text-[#0B1E2F] mb-3 font-serif">Sports Excellence</h3>
                        <p className="text-sm text-[#6B7280]">
                            Awarded to elite athletes competing at national or international levels who demonstrate sportsmanship and leadership.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Scholarships;
