import PageHeader from '../components/PageHeader';

const PrimarySchool = () => {
    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="Primary School"
                subtitle="Key Stage 1 & 2 (Grades 1-6). Developing critical thinking and creativity."
                backgroundImage="/images/student_leader.jpg"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h2 className="text-3xl font-serif text-[#0B1E2F] mb-6">Primary Education</h2>
                    <p className="text-gray-600 mb-4">
                        Our Primary School curriculum is designed to foster a love for learning while developing
                        core academic skills. Students engage in a broad range of subjects including:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>English, Mathematics, and Science</li>
                        <li>Arabic and Islamic Studies</li>
                        <li>Social Studies and Citizenship</li>
                        <li>Information and Communication Technology (ICT)</li>
                        <li>Art, Music, and Physical Education</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PrimarySchool;
