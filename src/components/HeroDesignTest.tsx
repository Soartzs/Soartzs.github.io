
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
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background">
            {/* 3D Grid Background */}
            <div className="grid-3d">
                <div className="grid-plane"></div>
            </div>

            {/* Atmospheric Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-primary/10 rounded-full blur-[100px] md:blur-[150px] animate-pulse" />

            {/* Decorative HUD Elements - Hidden on small mobile */}
            <div className="absolute top-32 left-6 md:left-10 hidden sm:block font-mono text-[8px] md:text-[10px] text-primary/60 space-y-2">
                <div className="flex items-center gap-2"><Target size={12} /> COORD_X: 40.7128</div>
                <div className="flex items-center gap-2"><Activity size={12} /> SYNC_STATUS: ACTIVE</div>
                <div className="flex items-center gap-2"><ShieldCheck size={12} /> ENCRYPTION: AES-256</div>
            </div>

            <div className="absolute bottom-32 right-6 md:right-10 hidden sm:block font-mono text-[8px] md:text-[10px] text-primary/60 text-right">
                <div className="border-r-2 border-b-2 border-primary p-4">
                    <p>NEURAL_LINK_ESTABLISHED</p>
                    <p>BUFFERING_DRIVE...</p>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center gap-3 px-3 py-1 mb-8 border border-primary/50 bg-primary/10 text-primary text-[8px] md:text-[10px] font-mono tracking-[0.3em] md:tracking-[0.4em] uppercase">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                    SYSTEM ONLINE // v4.0.2
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-8xl font-orbitron font-black leading-tight md:leading-none mb-8 tracking-tighter uppercase glitch-text break-words">
                    Crafting <br />
                    <span className="text-primary neon-text">digital</span>
                    <br />
                    experiences that
                    <br />
                    <span className="text-primary neon-text">glow.</span>
                </h1>

                <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-lg font-light mb-12 leading-relaxed font-mono px-4">
                    I design bold identities and build immersive websites that leave a lasting impression. Let's make something unforgettable.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-md mx-auto sm:max-w-none">
                    <button
                        onClick={() => scrollToSection("work")}
                        className="group relative w-full sm:w-auto overflow-hidden px-10 py-4 md:px-12 md:py-5 bg-primary text-primary-foreground font-orbitron font-bold text-xs md:text-sm tracking-widest hover:scale-105 transition-all duration-300 cursor-pointer"
                    >
                        <span className="relative z-10 uppercase">View Work</span>
                        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                    </button>
                    <button
                        onClick={() => scrollToSection("about")}
                        className="w-full sm:w-auto px-10 py-4 md:px-12 md:py-5 border-2 border-primary text-primary font-orbitron font-bold text-xs md:text-sm tracking-widest hover:bg-primary/10 transition-all duration-300 neon-border cursor-pointer uppercase"
                    >
                        About Me
                    </button>
                </div>
            </div>

            {/* Animated Scroll Indicator - Scaled for mobile */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <span className="font-mono text-[8px] text-primary tracking-[0.5em] uppercase">Scroll</span>
                <div className="w-[1.5px] h-12 md:h-20 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            </div>
        </section>
    );
};

export default HeroDesignTest;
