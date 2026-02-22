import PageHeader from '../components/PageHeader';

const LowerSecondary = () => {
    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="Lower Secondary"
                subtitle="Key Stage 3 (Grades 7-8). Building a strong academic foundation."
                backgroundImage="/images/leadership_development.jpg"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h2 className="text-3xl font-serif text-[#0B1E2F] mb-6">Key Stage 3</h2>
                    <p className="text-gray-600 mb-4">
                        The Lower Secondary program serves as a bridge between primary education and the rigorous
                        demands of upper secondary studies. We emphasize:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Subject specialization and depth</li>
                        <li>Independent research and study skills</li>
                        <li>Critical analysis and problem-solving</li>
                        <li>Personal development and leadership opportunities</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LowerSecondary;
