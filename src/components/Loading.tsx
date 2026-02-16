import { motion } from 'framer-motion';

const Page = ({ index, customDelay }: { index: number, customDelay: number }) => {
    // We'll use a continuous loop for the rotation
    // Each page rotates 0 -> -180 -> 0

    return (
        <motion.div
            className="absolute top-[4px] bottom-[4px] left-[10px] w-[215px] origin-left transform-style-3d"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -176 + (index * 2) }} // Fan out slightly
            transition={{
                duration: 2.5,
                ease: [0.645, 0.045, 0.355, 1.0] as const, // "easeInOutCubic"
                delay: customDelay,
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 0.5
            }}
            style={{ zIndex: 10 - index }}
        >
            {/* --- FRONT OF PAGE --- */}
            <div className="absolute inset-0 backface-hidden bg-[#fdfbf6] rounded-r-sm border-l-[1px] border-gray-200 overflow-hidden shadow-sm">
                {/* Dynamic Highlight/Shadow to simulate Curl */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-50" />

                {/* Content Texture */}
                <div className="p-8 pt-10 opacity-30 flex flex-col gap-4">
                    <div className="h-1 bg-slate-800 w-full rounded-full" />
                    <div className="h-1 bg-slate-800 w-5/6 rounded-full" />
                    <div className="h-1 bg-slate-800 w-full rounded-full" />
                    <div className="h-1 bg-slate-800 w-4/5 rounded-full" />
                </div>

                {/* Spine Shadow */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/20 to-transparent" />
            </div>

            {/* --- BACK OF PAGE (Seen when flipped) --- */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#fdfbf6] rounded-l-sm overflow-hidden shadow-sm">
                {/* Content Texture */}
                <div className="p-8 pt-10 opacity-30 flex flex-col gap-4 items-end">
                    <div className="h-1 bg-slate-800 w-full rounded-full" />
                    <div className="h-1 bg-slate-800 w-11/12 rounded-full" />
                    <div className="h-1 bg-slate-800 w-3/4 rounded-full" />
                </div>

                {/* Spine Shadow (on the back side) */}
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/20 to-transparent" />
            </div>
        </motion.div>
    );
};

const Loading = () => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F4F1EA] overflow-hidden">
            {/* Ambient Room Light */}
            <div className="absolute inset-0 bg-gradient-to-tl from-[#e8e4db] via-[#f4f1ea] to-[#fffefb]" />

            {/* 3D Scene Wrapper */}
            <div className="relative w-full h-full flex items-center justify-center perspective-[1500px]">

                {/* Book Object - Floating */}
                <motion.div
                    className="relative w-[230px] h-[320px] transform-style-3d"
                    initial={{ rotateX: 60, rotateZ: -10, rotateY: 0 }}
                    animate={{
                        rotateX: [60, 50, 60],
                        rotateZ: [-10, -5, -10],
                        y: [0, -15, 0]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* Drop Shadow on "Table" */}
                    <motion.div
                        className="absolute top-16 left-8 w-[90%] h-full bg-black/20 blur-3xl rounded-[40px] translate-z-[-80px]"
                        animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.9, 1.05, 0.9] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* --- BOTTOM COVER BLOCK --- */}
                    <div className="absolute inset-0 transform-style-3d translate-z-[-5px]">
                        {/* Top Face (Inside Back Cover) */}
                        <div className="absolute inset-0 bg-[#0B1E2F] rounded-r-md rounded-l-sm" />
                        {/* Bottom Face (Outside Back Cover) */}
                        <div className="absolute inset-0 bg-[#0B1E2F] rounded-r-md rounded-l-sm translate-z-[-10px] shadow-2xl" />
                        {/* Edges */}
                        <div className="absolute top-0 bottom-0 right-[0px] w-[10px] bg-[#09192b] rotate-y-[90deg] translate-x-[5px] translate-z-[-5px]" />
                        <div className="absolute left-0 right-0 bottom-[0px] h-[10px] bg-[#09192b] rotate-x-[-90deg] translate-y-[5px] translate-z-[-5px]" />
                        <div className="absolute top-0 bottom-0 left-[0px] w-[10px] bg-[#0f2133] rotate-y-[-90deg] translate-x-[-5px] translate-z-[-5px]" />
                    </div>

                    {/* --- STATIC PAGES BLOCK (Right side) --- */}
                    <div className="absolute top-[4px] bottom-[4px] right-[4px] w-[212px] transform-style-3d translate-z-[0px]">
                        {/* Top visible page (Right side static) */}
                        <div className="absolute inset-0 bg-[#fdfbf6] rounded-r-sm shadow-inner border-l border-gray-200">
                            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent w-8" />
                            <div className="p-8 pt-10 opacity-15 flex flex-col gap-4">
                                <div className="h-1 bg-black w-full rounded-full" />
                                <div className="h-1 bg-black w-3/4 rounded-full" />
                                <div className="h-1 bg-black w-full rounded-full" />
                                <div className="h-1 bg-black w-5/6 rounded-full" />
                            </div>
                        </div>
                        {/* Edge Thickness */}
                        <div className="absolute top-0 bottom-0 right-0 w-[12px] bg-[#f2f0e6] rotate-y-[90deg] translate-x-[6px] translate-z-[-6px] border-l border-r border-gray-300/[0.3]">
                            <div className="w-full h-full opacity-30 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#000_3px)]" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-[12px] bg-[#f2f0e6] rotate-x-[-90deg] translate-y-[6px] translate-z-[-6px] border-t border-b border-gray-300/[0.3]">
                            <div className="w-full h-full opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#000_3px)]" />
                        </div>
                    </div>

                    {/* --- ANIMATED FLIPPING PAGES --- */}
                    {/* We use a component to handle individualized animations */}
                    <Page index={0} customDelay={0.2} />
                    <Page index={1} customDelay={0.35} />
                    <Page index={2} customDelay={0.5} />


                    {/* --- TOP COVER (Thick Slab) --- */}
                    <motion.div
                        className="absolute inset-0 origin-left transform-style-3d bg-[#0B1E2F] rounded-r-md rounded-l-sm"
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: -160 }}
                        transition={{
                            duration: 2.5,
                            ease: [0.645, 0.045, 0.355, 1.0] as const,
                            repeat: Infinity,
                            repeatType: "mirror",
                            repeatDelay: 0.5
                        }}
                        style={{ zIndex: 20 }}
                    >
                        {/* Outer Face */}
                        <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center translate-z-[1px]">
                            {/* Leather Texture Material */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] mixture-overlay" />

                            {/* Gold Elements */}
                            <div className="relative border-y-[1px] border-[#C9A45C]/60 w-[80%] py-8 flex flex-col items-center">
                                <h1 className="text-[#C9A45C] font-serif text-3xl font-bold tracking-[0.25em] text-center" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                                    AL<br />SHOMOUKH
                                </h1>
                                <span className="text-[8px] text-[#C9A45C]/80 uppercase tracking-[0.3em] mt-3">Est. 1994</span>
                            </div>

                            {/* Spine Lighting */}
                            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                        </div>

                        {/* Inner Face */}
                        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#0B1E2F] rounded-l-sm rounded-r-md translate-z-[1px]">
                            <div className="absolute inset-0 bg-[#0E253A]" /> {/* Liner paper color */}
                            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/20 to-transparent" />
                        </div>

                        {/* Thickness Faces for Cover */}
                        <div className="absolute top-0 bottom-0 right-[0px] w-[4px] bg-[#0E253A] rotate-y-[90deg] translate-x-[2px]" />
                        <div className="absolute top-0 bottom-0 left-[0px] w-[4px] bg-[#15293d] rotate-y-[-90deg] translate-x-[-2px]" />
                        <div className="absolute left-0 right-0 top-[0px] h-[4px] bg-[#0E253A] rotate-x-[90deg] translate-y-[-2px]" />
                        <div className="absolute left-0 right-0 bottom-[0px] h-[4px] bg-[#0E253A] rotate-x-[-90deg] translate-y-[2px]" />
                    </motion.div>

                </motion.div>

                {/* Loading Indicator */}
                <div className="absolute bottom-12 right-12 flex flex-col items-end gap-3 opacity-90">
                    <span className="text-[#0B1E2F] text-[10px] font-bold tracking-[0.3em] uppercase">Loading Content</span>
                    <div className="flex gap-1.5">
                        {[0, 1, 2].map(i => (
                            <motion.div
                                key={i}
                                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                                className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]"
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Loading;
