import { motion } from 'framer-motion';

const Page = ({ index, zIndex, rotateDelay }: { index: number; zIndex: number; rotateDelay: number }) => {
    return (
        <motion.div
            className="absolute top-1 bottom-1 left-0 w-[148px] origin-left transform-style-3d backface-hidden"
            style={{ zIndex }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -180 }}
            transition={{
                duration: 2,
                delay: rotateDelay,
                ease: [0.645, 0.045, 0.355, 1.0], // cubic-bezier
                repeat: Infinity,
                repeatDelay: 1, // Wait before closing/repeating
                repeatType: "reverse"
            }}
        >
            {/* Front of Page (Right side content) */}
            <div className="absolute inset-0 bg-[#fdfbf6] rounded-r-md border-l border-gray-200 overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-transparent to-transparent opacity-40 w-8" />
                <div className="absolute inset-0 bg-gradient-to-l from-black/5 to-transparent w-4 right-0" />

                {/* Placeholder Text Lines */}
                <div className="p-4 pt-6 opacity-60">
                    <h3 className="text-[6px] font-serif font-bold text-[#0B1E2F] mb-1">Global Vision</h3>
                    <div className="space-y-1">
                        <p className="text-[4px] leading-[1.4] text-justify text-slate-600 font-serif">
                            Our commitment to excellence drives every aspect of our educational
                            approach. We foster an environment where curiosity thrives and
                            students are empowered to explore their potential.
                        </p>
                        <p className="text-[4px] leading-[1.4] text-justify text-slate-600 font-serif">
                            Through a rigorous curriculum and diverse extracurricular
                            opportunities, we prepare leaders for tomorrow's challenges.
                        </p>
                    </div>
                </div>

                {/* Page Number */}
                <div className="absolute bottom-2 right-2 text-[5px] text-slate-400 font-serif">
                    {index * 2 - 1}
                </div>
            </div>

            {/* Back of Page (Left side content) */}
            <div className="absolute inset-0 rotate-y-180 bg-[#fdfbf6] rounded-l-md border-r border-gray-200 overflow-hidden shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-l from-gray-100 via-transparent to-transparent opacity-40 w-8 right-0" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent w-4 left-0" />

                {/* Placeholder Text Lines */}
                <div className="p-4 pt-6 opacity-60 flex flex-col items-start text-left">
                    <h3 className="text-[6px] font-serif font-bold text-[#0B1E2F] mb-1">Academic Excellence</h3>
                    <div className="space-y-1">
                        <p className="text-[4px] leading-[1.4] text-justify text-slate-600 font-serif">
                            Innovation and tradition blend seamlessly in our halls. We value
                            integrity, respect, and community service as pillars of
                            character development.
                        </p>
                        <p className="text-[4px] leading-[1.4] text-justify text-slate-600 font-serif">
                            Every student is unique, and our personalized learning paths ensure
                            that each individual receives the support they need to succeed.
                        </p>
                    </div>
                </div>

                {/* Page Number */}
                <div className="absolute bottom-2 left-2 text-[5px] text-slate-400 font-serif">
                    {index * 2}
                </div>
            </div>
        </motion.div>
    );
};

const Cover = () => {
    return (
        <motion.div
            className="absolute inset-0 origin-left transform-style-3d z-50 pointer-events-none"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -180 }}
            transition={{
                duration: 2,
                ease: [0.645, 0.045, 0.355, 1.0],
                repeat: Infinity,
                repeatDelay: 1,
                repeatType: "reverse"
            }}
        >
            {/* FRONT COVER (Outside) */}
            <div className="absolute inset-0 backface-hidden bg-[#0B1E2F] rounded-r-md rounded-l-sm shadow-xl border-l border-white/10">
                {/* Texture */}
                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] mix-blend-overlay" />

                {/* Spine Highlight */}
                <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white/20 to-transparent" />

                {/* Cover Design */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="border-y border-[#C9A45C]/50 w-full px-4 py-6 flex flex-col items-center gap-1">
                        <h1 className="text-[#C9A45C] font-serif text-lg font-bold tracking-widest text-center leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                            AL<br />SHOMOUKH
                        </h1>
                        <div className="h-px w-12 bg-[#C9A45C]/50" />
                        <span className="text-[8px] text-[#C9A45C]/70 uppercase tracking-[0.3em]">Est. 1994</span>
                    </div>
                </div>

                {/* Thickness (Right Edge) */}
                <div className="absolute top-0 bottom-0 right-0 w-[4px] bg-[#091520] rotate-y-90 translate-x-[2px] translate-z-[-2px]" />
            </div>

            {/* FRONT COVER (Inside) */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#0E253A] rounded-l-md rounded-r-sm shadow-inner">
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
                {/* Liner Paper */}
                <div className="absolute inset-2 bg-[#F4F1EA] opacity-5 rounded-sm" />
            </div>
        </motion.div>
    );
};

const BackCover = () => {
    return (
        <div className="absolute inset-0 flex items-center justify-center transform-style-3d z-0">
            {/* Static Back Cover (Lying flat) */}
            <div className="absolute inset-0 bg-[#0B1E2F] rounded-r-md rounded-l-sm shadow-2xl translate-z-[-2px]">
                {/* Thickness (Bottom Edge) */}
                <div className="absolute left-0 right-0 bottom-0 h-[4px] bg-[#091520] rotate-x-90 translate-y-[2px]" />

                {/* Visible Inside of Back Cover (Right side base) */}
                <div className="absolute inset-0 bg-[#0E253A] rounded-r-md rounded-l-sm">
                    <div className="absolute inset-2 bg-[#F4F1EA] opacity-5 rounded-sm" />
                    {/* Shadow cast by pages */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent" />
                </div>
            </div>

            {/* Pages Stack (Static on the right) */}
            <div className="absolute top-1 bottom-1 right-1 left-1 bg-[#fdfbf6] rounded-r-sm border-l border-gray-200">
                <div className="absolute top-0 bottom-0 right-0 w-[3px] bg-[#eee] border-l border-gray-300 transform translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent w-6" />
            </div>
        </div>
    );
};

const Loading = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F4F1EA] overflow-hidden">
            {/* Ambient BG */}
            <div className="absolute inset-0 bg-gradient-to-tl from-[#e6dfd1] via-[#F4F1EA] to-[#fffefb]" />

            {/* Scene Container */}
            <div className="relative w-full h-full flex items-center justify-center perspective-1000">

                {/* Book Container */}
                <motion.div
                    className="relative w-[150px] h-[220px] transform-style-3d"
                    initial={{ rotateX: 60, rotateZ: -10, rotateY: 0 }}
                    animate={{
                        rotateX: 50,
                        y: [-10, 0, -10],
                    }}
                    transition={{
                        duration: 6,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                >
                    {/* Shadow Pool */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200px] h-[20px] bg-black/10 blur-xl rounded-full scale-110 translate-y-8" />

                    {/* Components */}
                    <BackCover />

                    {/* Animated Pages */}
                    <Page index={1} zIndex={5} rotateDelay={0.3} />
                    <Page index={2} zIndex={4} rotateDelay={0.4} />
                    <Page index={3} zIndex={3} rotateDelay={0.5} />
                    <Page index={4} zIndex={2} rotateDelay={0.6} />

                    <Cover />

                </motion.div>

                {/* Loading Text */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
                    <span className="text-[#0B1E2F] text-xs uppercase tracking-[0.3em] font-medium opacity-80">Loading</span>
                    <div className="flex gap-1.5">
                        {[0, 1, 2].map(i => (
                            <motion.div
                                key={i}
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                className="w-1 h-1 rounded-full bg-[#C9A45C]"
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Loading;

