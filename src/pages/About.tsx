import PageHeader from '../components/PageHeader';

const About = () => {
    return (
        <div className="bg-[#F4F1EA] min-h-screen pb-20">
            <PageHeader
                title="About Us"
                subtitle="A legacy of educational excellence."
                backgroundImage="/images/about_hero.png"
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white p-8 lg:p-12 shadow-sm border-t-4 border-[#C9A45C]">
                    <h2 className="text-3xl text-[#0B1E2F] mb-6 font-serif">Who We Are</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Al Shomoukh International School offers a premium education in Oman.
                        We combine the rigor of the British curriculum with a deep respect for
                        Arabic culture and Islamic values.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Our mission is to nurture intellectual curiosity, moral integrity,
                        and global citizenship in every student.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
