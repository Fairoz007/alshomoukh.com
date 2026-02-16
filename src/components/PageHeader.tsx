interface PageHeaderProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
}

const PageHeader = ({ title, subtitle, backgroundImage = "/images/hero_campus.jpg" }: PageHeaderProps) => {
    return (
        <div className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0B1E2F]/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
                <h1
                    className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 animate-fade-in"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-[#F4F1EA]/90 max-w-2xl mx-auto font-light leading-relaxed animate-slide-up">
                        {subtitle}
                    </p>
                )}
                <div className="w-24 h-px bg-[#C9A45C] mx-auto mt-8 animate-scale-x" />
            </div>
        </div>
    );
};

export default PageHeader;
