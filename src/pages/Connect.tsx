import PageHeader from '../components/PageHeader';
import { Instagram, Facebook, Twitter, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';

const Connect = () => {
    const socialPlatforms = [
        { name: 'Instagram', icon: <Instagram size={28} />, handle: '@alshomoukh', color: 'hover:text-pink-600' },
        { name: 'Facebook', icon: <Facebook size={28} />, handle: '/alshomoukhschool', color: 'hover:text-blue-600' },
        { name: 'Twitter (X)', icon: <Twitter size={28} />, handle: '@alshomoukh_edu', color: 'hover:text-black' },
        { name: 'LinkedIn', icon: <Linkedin size={28} />, handle: 'Al Shomoukh International School', color: 'hover:text-blue-700' },
        { name: 'YouTube', icon: <Youtube size={28} />, handle: 'Al Shomoukh TV', color: 'hover:text-red-600' },
    ];

    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="Connect"
                subtitle="Follow our journey and be part of our digital community."
                backgroundImage="/images/global_citizenship.jpg"
            />

            <div className="max-w-5xl mx-auto px-6 py-16">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl text-[#0B1E2F] mb-6 font-serif">Social Hub</h2>
                    <p className="text-gray-600">
                        Stay updated with daily life at Al Shomoukh. From student achievements to campus events, our social channels are the pulse of our community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {socialPlatforms.map((platform, idx) => (
                        <a key={idx} href="#" className={`bg-white p-8 flex items-center justify-between group border border-gray-100 shadow-sm hover:shadow-md transition-all ${platform.color} duration-300`}>
                            <div className="flex items-center gap-4 text-[#0B1E2F]">
                                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                                    {platform.icon}
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg">{platform.name}</h3>
                                    <p className="text-xs text-gray-500">{platform.handle}</p>
                                </div>
                            </div>
                            <ArrowUpRight className="text-gray-300 group-hover:text-[#0B1E2F] transition-colors" />
                        </a>
                    ))}
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl text-[#0B1E2F] mb-8 font-serif text-center">Latest from Instagram</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-gray-300 relative group overflow-hidden cursor-pointer">
                                <div className="absolute inset-0 bg-[#0B1E2F]/0 group-hover:bg-[#0B1E2F]/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <Instagram className="text-white" size={32} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <button className="text-[#0B1E2F] font-medium border-b border-[#0B1E2F] hover:text-[#C9A45C] hover:border-[#C9A45C] transition-colors pb-1">
                            View Full Feed
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connect;
