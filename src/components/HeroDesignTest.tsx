
import React from 'react';
import { Target, Activity, ShieldCheck, ArrowDown } from 'lucide-react';
import { motion } from "framer-motion";

const HeroDesignTest: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-background">
            {/* 3D Grid Background */}
            <div className="grid-3d">
                <div className="grid-plane"></div>
            </div>

            {/* Atmospheric Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-primary/10 rounded-full blur-[80px] md:blur-[150px] animate-pulse pointer-events-none" />

            {/* Decorative HUD Elements - Hidden on small mobile */}
            <div className="absolute top-32 left-4 md:left-10 hidden md:block font-mono text-[10px] text-primary/60 space-y-2 pointer-events-none">
                <div className="flex items-center gap-2"><Target size={12} /> COORD_X: 40.7128</div>
                <div className="flex items-center gap-2"><Activity size={12} /> SYNC_STATUS: ACTIVE</div>
                <div className="flex items-center gap-2"><ShieldCheck size={12} /> ENCRYPTION: AES-256</div>
            </div>

            <div className="absolute bottom-32 right-4 md:right-10 hidden md:block font-mono text-[10px] text-primary/60 text-right pointer-events-none">
                <div className="border-r-2 border-b-2 border-primary p-4">
                    <p>NEURAL_LINK_ESTABLISHED</p>
                    <p>BUFFERING_DRIVE...</p>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-3 px-3 py-1 mb-6 border border-primary/50 bg-primary/10 text-primary text-[8px] md:text-[10px] font-mono tracking-[0.3em] md:tracking-[0.4em] uppercase">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                        SYSTEM ONLINE // v4.0.2
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-orbitron font-black leading-tight sm:leading-none mb-8 tracking-tighter uppercase glitch-text break-words"
                >
                    Crafting <br className="sm:hidden" />
                    <span className="text-primary neon-text">experiences</span>
                    <br />
                    that <span className="text-primary neon-text">glow.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-xl mx-auto text-gray-400 text-xs sm:text-sm md:text-lg font-light mb-12 leading-relaxed font-mono px-4"
                >
                    Designing bold identities and immersive websites that leave a lasting impression.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-sm mx-auto sm:max-w-none"
                >
                    <button
                        onClick={() => scrollToSection("work")}
                        className="group relative w-full sm:w-auto overflow-hidden px-8 py-4 md:px-12 md:py-5 bg-primary text-primary-foreground font-orbitron font-bold text-xs md:text-sm tracking-widest hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                        <span className="relative z-10 uppercase">View Work</span>
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                    </button>
                    <button
                        onClick={() => scrollToSection("about")}
                        className="w-full sm:w-auto px-8 py-4 md:px-12 md:py-5 border-2 border-primary text-primary font-orbitron font-bold text-xs md:text-sm tracking-widest hover:bg-primary/10 transition-all duration-300 neon-border cursor-pointer uppercase"
                    >
                        About Me
                    </button>
                </motion.div>
            </div>

            {/* Animated Scroll Indicator - Scaled for mobile */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="font-mono text-[8px] text-primary tracking-[0.5em] uppercase">Scroll</span>
                <div className="w-[1.5px] h-12 md:h-16 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            </div>
        </section>
    );
};

export default HeroDesignTest;
