import PageHeader from '../components/PageHeader';

const LearningSupport = () => {
    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="Learning Support"
                subtitle="Inclusive education tailored to individual needs."
                backgroundImage="/images/standard_panel_1.jpg"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h2 className="text-3xl font-serif text-[#0B1E2F] mb-6">Supporting Every Learner</h2>
                    <p className="text-gray-600 mb-4">
                        We believe that every child deserves the opportunity to succeed. Our Learning Support department
                        works closely with teachers and families to provide:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Individualized Education Plans (IEPs)</li>
                        <li>In-class support and small group interventions</li>
                        <li>Specialized resources and strategies</li>
                        <li>Regular progress monitoring and review</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LearningSupport;
