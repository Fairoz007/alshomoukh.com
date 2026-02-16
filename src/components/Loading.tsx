import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Loading = () => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Optional: Logic to trigger exit state if we were controlling visibility manually.
        // Since we are inside Suspense, this component unmounts when data loads.
        // To ensure a smooth exit animation, we'd ideally control the unmount delay,
        // but for now we focus on the entrance and persistent loop or final state.

        // However, we can create a self-contained sequence that looks like it completes.
    }, []);

    const transitionSpec = {
        duration: 1.8,
        ease: [0.65, 0, 0.35, 1], // Realistic ease-in-out
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F4F1EA] overflow-hidden"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }}
            >
                {/* Ambient Scene Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#F4F1EA] to-[#EAE6DC]" />

                {/* 3D Scene Container */}
                <div className="relative w-[300px] h-[400px] flex items-center justify-center perspective-[2000px]">

                    {/* Book Container */}
                    <motion.div
                        className="relative w-[220px] h-[300px] transform-style-3d"
                        initial={{ rotateX: 40, rotateZ: -10, rotateY: 0 }}
                        animate={{
                            rotateX: [40, 35, 40],
                            rotateY: [0, -5, 0],
                            y: [0, -5, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        {/* Dynamic Shadow on Surface */}
                        <motion.div
                            className="absolute top-[20px] left-[20px] w-full h-full bg-black/20 blur-2xl rounded-lg translate-z-[-40px]"
                            animate={{ opacity: [0.2, 0.3, 0.2], scale: [1, 1.05, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* --- BOOK STRUCTURE --- */}

                        {/* Back Cover (Static Base) */}
                        <div className="absolute inset-0 bg-[#0B1E2F] rounded-r-md rounded-l-sm translate-z-[0px] shadow-xl">
                            {/* Spine (Static part attached to back) */}
                            <div className="absolute left-0 top-0 bottom-0 w-[16px] bg-[#15293d] rounded-l-sm translate-x-[-8px] rotate-y-[-90deg] origin-right" />
                        </div>

                        {/* Back Pages (Static Block) */}
                        <div className="absolute top-[4px] bottom-[4px] right-[4px] w-[208px] bg-[#fdfbf5] rounded-r-sm shadow-inner border-l border-gray-200 translate-z-[2px]">
                            {/* Paper grain/text lines */}
                            <div className="absolute inset-0 p-8 pt-10 opacity-10 flex flex-col gap-3">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <div key={i} className="h-1 bg-black rounded-full w-full" style={{ width: `${Math.random() * 40 + 60}%` }} />
                                ))}
                            </div>
                            {/* Gradient for spine depth */}
                            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/10 to-transparent" />
                        </div>

                        {/* --- FLIPPING PAGES --- */}

                        {/* Page 1 (Main flipping page) */}
                        <motion.div
                            className="absolute top-[4px] bottom-[4px] left-[12px] w-[204px] bg-[#fdfbf5] rounded-r-sm origin-left transform-style-3d shadow-sm"
                            initial={{ rotateY: 0 }}
                            animate={{ rotateY: -178 }}
                            transition={{
                                ...transitionSpec,
                                delay: 0.2,
                                repeat: Infinity,
                                repeatType: "mirror",
                                repeatDelay: 1
                            }}
                            style={{ zIndex: 5 }}
                        >
                            {/* Front of Page */}
                            <div className="absolute inset-0 backface-hidden p-8 pt-10 opacity-10 flex flex-col gap-3">
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <div key={i} className="h-1 bg-black rounded-full w-full" style={{ width: `${Math.random() * 30 + 70}%` }} />
                                ))}
                            </div>
                            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/5 to-transparent" />

                            {/* Back of Page */}
                            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#f9f7f1] rounded-l-sm shadow-sm">
                                <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-black/5 to-transparent" />
                            </div>
                        </motion.div>

                        {/* Page 2 (Secondary flipping page for layering) */}
                        <motion.div
                            className="absolute top-[4px] bottom-[4px] left-[12px] w-[204px] bg-[#fdfbf5] rounded-r-sm origin-left transform-style-3d shadow-sm"
                            initial={{ rotateY: 0 }}
                            animate={{ rotateY: -176 }}
                            transition={{
                                ...transitionSpec,
                                delay: 0.3,
                                repeat: Infinity,
                                repeatType: "mirror",
                                repeatDelay: 1
                            }}
                            style={{ zIndex: 4 }}
                        >
                            <div className="absolute inset-0 backface-hidden" />
                            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#f9f7f1]" />
                        </motion.div>


                        {/* --- FRONT COVER --- */}
                        <motion.div
                            className="absolute inset-0 bg-[#0B1E2F] rounded-r-md rounded-l-sm origin-left transform-style-3d shadow-2xl border-l-[1px] border-[#1a3045]"
                            initial={{ rotateY: 0 }}
                            animate={{ rotateY: -160 }}
                            transition={{
                                ...transitionSpec,
                                repeat: Infinity,
                                repeatType: "mirror",
                                repeatDelay: 1
                            }}
                            style={{ zIndex: 10 }}
                        >
                            {/* Outer Cover Design */}
                            <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center">
                                {/* Texture Overlay */}
                                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] mixture-overlay" />

                                {/* Gold Branding */}
                                <div className="relative border border-[#C9A45C]/80 px-6 py-8 flex flex-col items-center">
                                    <h1 className="text-[#C9A45C] font-serif text-2xl font-bold tracking-widest text-center" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                                        AL<br />SHOMOUKH
                                    </h1>
                                    <div className="w-8 h-px bg-[#C9A45C] my-3" />
                                    <span className="text-[9px] text-[#C9A45C] uppercase tracking-[0.25em]">Est. 1994</span>
                                </div>

                                {/* Spine Highlight */}
                                <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-white/10 to-transparent" />
                            </div>

                            {/* Inner Cover */}
                            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#0E253A] rounded-l-sm rounded-r-md">
                                <div className="absolute right-0 top-0 bottom-0 w-full bg-gradient-to-l from-black/10 to-transparent" />
                            </div>
                        </motion.div>

                    </motion.div>
                </div>

                {/* Loading Indicator */}
                <motion.div
                    className="absolute bottom-16 flex flex-col items-center gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="text-[#0B1E2F] text-[10px] font-semibold tracking-[0.3em] uppercase opacity-60">Initializing</span>
                    <div className="flex gap-1.5">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]"
                                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Loading;
