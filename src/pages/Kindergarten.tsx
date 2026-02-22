import PageHeader from '../components/PageHeader';

const Kindergarten = () => {
    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="Kindergarten"
                subtitle="Foundation Stage Curriculum. Early Learning focusing on inquiry-led play and development."
                backgroundImage="/images/kindergarten_hero.png"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h2 className="text-3xl font-serif text-[#0B1E2F] mb-6">Early Years Foundation</h2>
                    <p className="text-gray-600 mb-4">
                        Our Kindergarten program provides a nurturing environment where children can explore,
                        create, and learn through play. We focus on building a strong foundation in:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Personal, Social and Emotional Development</li>
                        <li>Communication and Language</li>
                        <li>Physical Development</li>
                        <li>Literacy and Mathematics</li>
                        <li>Understanding the World</li>
                        <li>Expressive Arts and Design</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Kindergarten;
