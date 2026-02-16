import PageHeader from '../components/PageHeader';

const TermDates = () => {
    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="Term Dates"
                subtitle="Key academic dates for the 2025-2026 school year."
            />

            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="bg-white p-8 lg:p-12 shadow-sm border-t-4 border-[#C9A45C]">
                    <h2 className="text-3xl text-[#0B1E2F] mb-8" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Academic Calendar 2025-2026
                    </h2>

                    <div className="space-y-10">
                        {/* Term 1 */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#C9A45C] mb-4 border-b border-[#E5E7EB] pb-2">
                                Autumn Term
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-[#6B7280]">
                                <div className="flex justify-between">
                                    <span className="font-medium text-[#0B1E2F]">Term Starts:</span>
                                    <span>September 1, 2025</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium text-[#0B1E2F]">Half Term:</span>
                                    <span>October 19 - 23, 2025</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium text-[#0B1E2F]">Term Ends:</span>
                                    <span>December 11, 2025</span>
                                </div>
                            </div>
                        </div>

                        {/* Term 2 */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#C9A45C] mb-4 border-b border-[#E5E7EB] pb-2">
                                Spring Term
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-[#6B7280]">
                                <div className="flex justify-between">
                                    <span className="font-medium text-[#0B1E2F]">Term Starts:</span>
                                    <span>January 4, 2026</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium text-[#0B1E2F]">Half Term:</span>
                                    <span>February 15 - 19, 2026</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium text-[#0B1E2F]">Term Ends:</span>
                                    <span>March 26, 2026</span>
                                </div>
                            </div>
                        </div>

                        {/* Term 3 */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#C9A45C] mb-4 border-b border-[#E5E7EB] pb-2">
                                Summer Term
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-[#6B7280]">
                                <div className="flex justify-between">
                                    <span className="font-medium text-[#0B1E2F]">Term Starts:</span>
                                    <span>April 12, 2026</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium text-[#0B1E2F]">Term Ends:</span>
                                    <span>June 25, 2026</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 p-4 bg-[#F9F9F7] border border-[#E5E7EB] text-sm text-[#6B7280] italic">
                        * Dates are subject to change based on Ministry of Education announcements.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermDates;
