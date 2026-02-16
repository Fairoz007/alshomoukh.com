import PageHeader from '../components/PageHeader';
import { Briefcase, ArrowRight } from 'lucide-react';

const Careers = () => {
    const openings = [
        { title: 'Senior Mathematics Teacher', department: 'Secondary School', type: 'Full-time' },
        { title: 'Primary Homeroom Teacher', department: 'Primary School', type: 'Full-time' },
        { title: 'School Counselor', department: 'Student Services', type: 'Full-time' },
    ];

    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="Careers"
                subtitle="Join a team dedicated to educational excellence and innovation."
            />

            <div className="max-w-5xl mx-auto px-6 py-16">
                <div className="mb-16">
                    <h2 className="text-3xl text-[#0B1E2F] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Work With Us
                    </h2>
                    <p className="text-[#6B7280] leading-relaxed max-w-3xl">
                        Al Shomoukh International School is a vibrant community of educators and professionals. We offer a supportive environment, professional development opportunities, and competitive compensation packages. We are always looking for passionate individuals who share our vision.
                    </p>
                </div>

                <h3 className="text-xl font-medium text-[#0B1E2F] mb-6 border-b border-gray-300 pb-2">Current Opportunities</h3>

                <div className="space-y-4">
                    {openings.map((job, idx) => (
                        <div key={idx} className="bg-white p-6 border-l-4 border-[#C9A45C] flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
                            <div>
                                <h4 className="text-lg font-semibold text-[#0B1E2F]">{job.title}</h4>
                                <div className="flex gap-4 text-sm text-gray-500 mt-1">
                                    <span className="flex items-center gap-1"><Briefcase size={14} /> {job.department}</span>
                                    <span>•</span>
                                    <span>{job.type}</span>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-[#C9A45C] font-medium hover:text-[#0B1E2F] transition-colors">
                                View Details <ArrowRight size={16} />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-[#F9F9F7] border border-dashed border-gray-300 text-center">
                    <p className="text-gray-600 mb-4">Don't see a suitable role? We welcome speculative applications.</p>
                    <a href="mailto:careers@alshomoukh.edu" className="text-[#0B1E2F] font-medium hover:underline">
                        Email CV to careers@alshomoukh.edu
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Careers;
