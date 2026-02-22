import PageHeader from '../components/PageHeader';

const UpperSecondary = () => {
    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="Upper Secondary"
                subtitle="Edexcel International (Grades 9-12). Preparation for university and beyond."
                backgroundImage="/images/facilities_hero.jpg"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h2 className="text-3xl font-serif text-[#0B1E2F] mb-6">IGCSE & A-Levels</h2>
                    <p className="text-gray-600 mb-4">
                        Our Upper Secondary program prepares students for the Cambridge IGCSE and A-Level examinations,
                        recognized by universities worldwide. Features include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Wide range of subject choices</li>
                        <li>Advanced career and university guidance</li>
                        <li>Leadership roles and extracurricular enrichment</li>
                        <li>Focus on academic excellence and global citizenship</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UpperSecondary;
