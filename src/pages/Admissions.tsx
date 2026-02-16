import PageHeader from '../components/PageHeader';
import { Download, Calendar, HelpCircle } from 'lucide-react';

const Admissions = () => {
    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="Admissions"
                subtitle="Begin your journey with Al Shomoukh International School."
            />

            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl text-[#0B1E2F] mb-6 font-serif">Application Process</h2>
                        <p className="text-gray-600 mb-10">
                            We welcome applications from students of all nationalities who can benefit from our rigorous academic program. Our admissions process is designed to be transparent and comprehensive.
                        </p>

                        <div className="space-y-8 mb-12">
                            {[
                                { step: 1, title: 'Submit Enquiry', desc: 'Complete the online enquiry form or visit the school registrar.' },
                                { step: 2, title: 'Assessment', desc: 'Students undergo an age-appropriate assessment in English and Mathematics.' },
                                { step: 3, title: 'Interview', desc: 'A meeting with the Head of School for the student and parents.' },
                                { step: 4, title: 'Offer & Acceptance', desc: 'Successful applicants receive an offer letter. Secure the seat by paying the deposit.' },
                            ].map((s) => (
                                <div key={s.step} className="flex gap-6">
                                    <div className="w-10 h-10 rounded-full bg-[#0B1E2F] text-[#C9A45C] flex items-center justify-center font-bold flex-shrink-0">
                                        {s.step}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-medium text-[#0B1E2F] mb-2">{s.title}</h3>
                                        <p className="text-sm text-gray-600">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-[#F9F9F7] p-8 border border-gray-200">
                            <h3 className="text-xl font-serif text-[#0B1E2F] mb-4">Required Documents</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                                <li>• Copy of Student's Passport</li>
                                <li>• Copy of Birth Certificate</li>
                                <li>• Recent Report Cards (Last 2 Years)</li>
                                <li>• Immunization Records</li>
                                <li>• Passport Photos (x4)</li>
                                <li>• Parent's ID Information</li>
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-[#0B1E2F] text-white p-8">
                            <h3 className="text-xl font-serif mb-4 text-[#C9A45C]">Admissions Office</h3>
                            <p className="text-sm text-gray-300 mb-6">
                                Our team is here to guide you through every step of the enrollment process.
                            </p>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3">
                                    <Calendar size={16} className="text-[#C9A45C]" />
                                    <span>Sun - Thu, 7:30 AM - 3:30 PM</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <HelpCircle size={16} className="text-[#C9A45C]" />
                                    <span>admissions@alshomoukh.edu</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 border border-gray-200 shadow-sm">
                            <h3 className="text-lg font-medium text-[#0B1E2F] mb-4">Resources</h3>
                            <div className="space-y-3">
                                <button className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#C9A45C] transition-colors w-full text-left">
                                    <Download size={16} /> Fee Structure 2025/26
                                </button>
                                <button className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#C9A45C] transition-colors w-full text-left">
                                    <Download size={16} /> Student Handbook
                                </button>
                                <button className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#C9A45C] transition-colors w-full text-left">
                                    <Download size={16} /> Transportation Guide
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Admissions;
