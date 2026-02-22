import PageHeader from '../components/PageHeader';
import { CheckCircle } from 'lucide-react';

const Academy = () => {
    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="The Academy"
                subtitle="Cultivating intellect, character, and global perspective."
                backgroundImage="/images/academic_excellence.jpg"
            />

            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <h2 className="text-3xl lg:text-4xl text-[#0B1E2F] mb-6 font-serif">
                            A Tradition of Excellence
                        </h2>
                        <div className="w-16 h-px bg-[#C9A45C] mb-8" />
                        <p className="text-[#6B7280] mb-6 leading-relaxed">
                            At Al Shomoukh, we believe that education is the most powerful tool for shaping the future. Our academy is built on the pillars of academic rigor, holistic development, and international mindedness. We do not just prepare students for exams; we prepare them for life.
                        </p>
                        <p className="text-[#6B7280] leading-relaxed">
                            Our faculty comprises distinguished educators from around the world, bringing a wealth of experience and cultural diversity to the classroom. This ensures that our students are exposed to multiple perspectives and global best practices.
                        </p>
                    </div>
                    <div className="bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
                        <h3 className="text-xl font-medium text-[#0B1E2F] mb-6">Core Values</h3>
                        <ul className="space-y-4">
                            {['Academic Integrity', 'Global Citizenship', 'Innovation & Inquiry', 'Respect & Empathy', 'Community Service'].map((val, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle size={20} className="text-[#C9A45C]" />
                                    <span>{val}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Stages */}
                <div className="space-y-12">
                    <div className="border-l-4 border-[#0B1E2F] pl-6 lg:pl-10 py-2">
                        <h3 className="text-2xl text-[#0B1E2F] mb-3 font-serif">Primary Academy</h3>
                        <p className="text-gray-600 max-w-3xl">
                            The formative years are crucial. Our Primary School focuses on establishing strong foundational skills in literacy, numeracy, and scientific inquiry, while nurturing creativity through arts and play.
                        </p>
                    </div>
                    <div className="border-l-4 border-[#C9A45C] pl-6 lg:pl-10 py-2">
                        <h3 className="text-2xl text-[#0B1E2F] mb-3 font-serif">Secondary Academy</h3>
                        <p className="text-gray-600 max-w-3xl">
                            As students mature, the curriculum deepens. Our Secondary School offers a broad range of subjects leading to IGCSE and A-Level qualifications, fostering critical thinking and specialized knowledge.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academy;
