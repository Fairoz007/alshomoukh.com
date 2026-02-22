import PageHeader from '../components/PageHeader';

const News = () => {
    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="News & Stories"
                subtitle="Latest updates from our vibrant community."
                backgroundImage="/images/news_hero.png"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholder News Item 1 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <img
                            src="/images/news_item_academic.png"
                            alt="Academic Achievement"
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-6">
                            <span className="text-xs font-bold text-[#C9A45C] uppercase tracking-wide">Academic Achievement</span>
                            <h3 className="text-xl font-serif text-[#0B1E2F] mt-2 mb-3">Students Excel in International Competitions</h3>
                            <p className="text-gray-600 text-sm">
                                Our students have secured top positions in the recent regional science fair.
                            </p>
                        </div>
                    </div>

                    {/* Placeholder News Item 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <img
                            src="/images/news_item_sports.png"
                            alt="Sports Day"
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-6">
                            <span className="text-xs font-bold text-[#C9A45C] uppercase tracking-wide">Campus Life</span>
                            <h3 className="text-xl font-serif text-[#0B1E2F] mt-2 mb-3">Annual Sports Day Highlights</h3>
                            <p className="text-gray-600 text-sm">
                                A day filled with energy, teamwork, and school spirit.
                            </p>
                        </div>
                    </div>

                    {/* Placeholder News Item 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <img
                            src="/images/news_item_charity.png"
                            alt="Charity Drive"
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-6">
                            <span className="text-xs font-bold text-[#C9A45C] uppercase tracking-wide">Community</span>
                            <h3 className="text-xl font-serif text-[#0B1E2F] mt-2 mb-3">Charity Drive Success</h3>
                            <p className="text-gray-600 text-sm">
                                Thank you to all families who contributed to our seasonal charity drive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
