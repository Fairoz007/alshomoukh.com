import PageHeader from '../components/PageHeader';
import { Linkedin, Globe } from 'lucide-react';

const Alumni = () => {
    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="Alumni Network"
                subtitle="A lifelong community of changemakers and global citizens."
            />

            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl text-[#0B1E2F] mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Where Are They Now?
                    </h2>
                    <p className="text-[#6B7280]">
                        Our graduates go on to attend the world's most prestigious universities and lead in fields ranging from medicine and engineering to diplomacy and the arts.
                    </p>
                </div>

                {/* Featured Alumni */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white group overflow-hidden">
                            <div className="h-64 bg-gray-200 overflow-hidden">
                                <div className="w-full h-full bg-[#0B1E2F]/5 group-hover:bg-[#0B1E2F]/10 transition-colors flex items-center justify-center text-gray-400">
                                    Alumni Portrait
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl text-[#0B1E2F] mb-1 font-serif">Sarah Al-Harthi</h3>
                                <p className="text-[#C9A45C] text-sm mb-4">Class of 2018 • Oxford University</p>
                                <p className="text-gray-600 text-sm mb-6">
                                    "The foundation I received at Al Shomoukh gave me the confidence to pursue International Law at the highest level."
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="text-gray-400 hover:text-[#0B1E2F] transition-colors"><Linkedin size={18} /></a>
                                    <a href="#" className="text-gray-400 hover:text-[#0B1E2F] transition-colors"><Globe size={18} /></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Join Network CTA */}
                <div className="mt-20 bg-[#0B1E2F] text-white p-10 lg:p-16 text-center">
                    <h2 className="text-3xl mb-4 font-serif">Stay Connected</h2>
                    <p className="text-gray-300 max-w-xl mx-auto mb-8">
                        Are you a former student? Join our exclusive alumni portal to network, mentor current students, and receive invitations to alumni events.
                    </p>
                    <button className="px-8 py-3 border border-[#C9A45C] text-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#0B1E2F] transition-all duration-300 font-medium">
                        Register for Alumni Portal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Alumni;
