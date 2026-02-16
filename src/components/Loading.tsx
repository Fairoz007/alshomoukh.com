import { motion } from 'framer-motion';

const Loading = () => {
    // Animation variants for staggered page turns
    const pageVariants = {
        closed: { rotateY: 0 },
        open: (custom: number) => ({
            rotateY: -175 + (custom * 2), // Fan out slightly
            transition: {
                duration: 2,
                ease: [0.65, 0, 0.35, 1], // Cubic-bezier for smooth "real" feel
                delay: custom * 0.1, // Stagger effect
                repeat: Infinity,
                repeatType: "reverse" as const,
                repeatDelay: 1
            }
        })
    };

    const coverVariants = {
        closed: { rotateY: 0 },
        open: {
            rotateY: -180,
            transition: {
                duration: 2,
                ease: [0.65, 0, 0.35, 1],
                repeat: Infinity,
                repeatType: "reverse" as const,
                repeatDelay: 1
            }
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F4F1EA] overflow-hidden">
            {/* Table Ambient Occlusion/Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ebe7dd] to-[#e0dcd3]" />

            {/* 3D Scene */}
            <div className="relative w-full h-full flex items-center justify-center perspective-[2000px]">

                {/* Book Container - Lying on Table */}
                <div
                    className="relative w-[240px] h-[340px] transform-style-3d"
                    style={{
                        transform: "rotateX(50deg) rotateZ(-10deg) rotateY(0deg)",
                    }}
                >
                    {/* Real Shadow underneath */}
                    <div className="absolute top-4 left-4 w-full h-full bg-black/15 blur-2xl rounded-lg translate-z-[-20px]" />

                    {/* Book Back Cover (Static Bottom) */}
                    <div className="absolute inset-0 bg-[#0B1E2F] rounded-r-md rounded-l-sm shadow-xl translate-z-[0px]">
                        {/* Page Block (Right Side Static) */}
                        <div className="absolute top-1 bottom-1 right-2 w-[225px] bg-[#FFFBF0] rounded-r-sm shadow-inner border-l border-[#e5e5e5] overflow-hidden">
                            {/* Text Simulation */}
                            <div className="p-8 pt-10 opacity-30 flex flex-col gap-4">
                                <div className="h-1.5 w-full bg-slate-400 rounded-full" />
                                <div className="h-1.5 w-5/6 bg-slate-400 rounded-full" />
                                <div className="h-1.5 w-full bg-slate-400 rounded-full" />
                                <div className="h-1.5 w-4/5 bg-slate-400 rounded-full" />
                                <div className="h-1.5 w-full bg-slate-400 rounded-full" />
                                <div className="h-1.5 w-3/4 bg-slate-400 rounded-full" />
                            </div>
                            {/* Page curve shadow gradient */}
                            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
                        </div>
                    </div>

                    {/* Page 3 (Top inside page) */}
                    <motion.div
                        className="absolute top-1 bottom-1 left-0 w-[230px] bg-[#FFFBF0] rounded-r-sm origin-left transform-style-3d shadow-sm"
                        variants={pageVariants}
                        custom={2}
                        initial="closed"
                        animate="open"
                        style={{ zIndex: 3 }}
                    >
                        {/* Front Content */}
                        <div className="absolute inset-0 backface-hidden p-8 pt-10 opacity-30 flex flex-col gap-4">
                            <div className="h-1.5 w-11/12 bg-slate-400 rounded-full" />
                            <div className="h-1.5 w-full bg-slate-400 rounded-full" />
                            <div className="h-1.5 w-full bg-slate-400 rounded-full" />
                        </div>
                        {/* Spine Gradient */}
                        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/5 to-transparent" />

                        {/* Back Content */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#f7f4eb] rounded-l-sm shadow-inner">
                            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/5 to-transparent" />
                        </div>
                    </motion.div>

                    {/* Page 2 */}
                    <motion.div
                        className="absolute top-1 bottom-1 left-0 w-[230px] bg-[#FFFBF0] rounded-r-sm origin-left transform-style-3d shadow-sm"
                        variants={pageVariants}
                        custom={1}
                        initial="closed"
                        animate="open"
                        style={{ zIndex: 2 }}
                    >
                        {/* Front Content */}
                        <div className="absolute inset-0 backface-hidden p-8 pt-10 opacity-30 flex flex-col gap-4">
                            <div className="h-1.5 w-full bg-slate-400 rounded-full" />
                            <div className="h-1.5 w-5/6 bg-slate-400 rounded-full" />
                        </div>
                        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/5 to-transparent" />

                        {/* Back Content */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#f7f4eb] rounded-l-sm shadow-inner">
                            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/5 to-transparent" />
                        </div>
                    </motion.div>

                    {/* Page 1 (First page under cover) */}
                    <motion.div
                        className="absolute top-1 bottom-1 left-0 w-[230px] bg-[#FFFBF0] rounded-r-sm origin-left transform-style-3d shadow-sm"
                        variants={pageVariants}
                        custom={0}
                        initial="closed"
                        animate="open"
                        style={{ zIndex: 1 }}
                    >
                        {/* Front Content */}
                        <div className="absolute inset-0 backface-hidden p-8 pt-10 opacity-30 flex flex-col gap-4">
                            <div className="h-1.5 w-full bg-slate-400 rounded-full" />
                            <div className="h-1.5 w-full bg-slate-400 rounded-full" />
                            <div className="h-1.5 w-3/4 bg-slate-400 rounded-full" />
                        </div>
                        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/5 to-transparent" />

                        {/* Back Content */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#f7f4eb] rounded-l-sm shadow-inner">
                            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/5 to-transparent" />
                        </div>
                    </motion.div>

                    {/* Front Cover */}
                    <motion.div
                        className="absolute inset-0 bg-[#0B1E2F] rounded-r-md rounded-l-sm origin-left transform-style-3d shadow-2xl"
                        variants={coverVariants}
                        initial="closed"
                        animate="open"
                        style={{ zIndex: 10 }}
                    >
                        {/* Front Face */}
                        <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center border-l-4 border-[#15293d]">

                            {/* Leather Texture Effect */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-30 mixture-overlay" />

                            {/* Branding */}
                            <div className="relative border border-[#C9A45C] p-6 py-8 flex flex-col items-center">
                                <h1 className="text-[#C9A45C] font-serif text-3xl font-bold tracking-widest text-center" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                                    AL<br />SHOMOUKH
                                </h1>
                                <div className="w-8 h-px bg-[#C9A45C] my-4" />
                                <span className="text-[10px] text-[#C9A45C] uppercase tracking-[0.25em]">Est. 1994</span>
                            </div>

                            {/* Spine Reflection */}
                            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white/10 to-transparent" />
                        </div>

                        {/* Inner Face (Dark Blue) */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#0E253A] rounded-l-sm rounded-r-md">
                            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Loading Text */}
            <div className="absolute bottom-12 right-12 flex flex-col items-end gap-2">
                <span className="text-[#0B1E2F]/60 text-xs font-medium tracking-[0.2em] uppercase">Loading Experience</span>
                <div className="flex gap-1.5">
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                    <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                </div>
            </div>
        </div>
    );
};

export default Loading;
