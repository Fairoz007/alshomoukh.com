import PageHeader from '../components/PageHeader';

const Enrichment = () => {
    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="Enrichment"
                subtitle="Beyond the classroom."
                backgroundImage="/images/enrichment_hero.png"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white p-8 lg:p-12 shadow-sm border-t-4 border-[#C9A45C]">
                    <h2 className="text-3xl text-[#0B1E2F] mb-6 font-serif">Extracurricular Activities</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Education at Al Shomoukh extends far beyond textbooks. Our enrichment programs allow students
                        to explore their passions, develop leadership skills, and build lifelong friendships.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-4 border border-gray-100 rounded-md">
                            <h3 className="text-xl font-semibold text-[#0B1E2F] mb-2">Arts & Music</h3>
                            <p className="text-sm text-gray-600">Drama club, choir, and visual arts workshops.</p>
                        </div>
                        <div className="p-4 border border-gray-100 rounded-md">
                            <h3 className="text-xl font-semibold text-[#0B1E2F] mb-2">Sports</h3>
                            <p className="text-sm text-gray-600">Football, swimming, basketball, and athletics.</p>
                        </div>
                        <div className="p-4 border border-gray-100 rounded-md">
                            <h3 className="text-xl font-semibold text-[#0B1E2F] mb-2">Leadership</h3>
                            <p className="text-sm text-gray-600">Student council, Model UN, and debating society.</p>
                        </div>
                        <div className="p-4 border border-gray-100 rounded-md">
                            <h3 className="text-xl font-semibold text-[#0B1E2F] mb-2">STEM</h3>
                            <p className="text-sm text-gray-600">Robotics, coding club, and science experiments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enrichment;
