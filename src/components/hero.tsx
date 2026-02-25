"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Cinematic stock background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
                    alt="Rizos Barber Studio Interior"
                    className="w-full h-full object-cover opacity-50 brightness-75 mix-blend-luminosity grayscale-[10%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
            </div>

            <motion.div style={{ y: textY, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
                <motion.p
                    className="text-gold uppercase tracking-[0.3em] text-sm md:text-base font-bold mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Welcome to
                </motion.p>
                <motion.h1
                    className="font-serif text-6xl md:text-8xl lg:text-[7rem] font-bold leading-[1.0] mb-8 tracking-tighter"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Rizo's <span className="text-gold italic pr-4 font-light">Barber Studio</span>
                </motion.h1>
                <motion.p
                    className="text-lg md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    The Gold Standard of Grooming. Experience precision, luxury, and unmatched craftsmanship in Dodge City.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a href="https://getsquire.com/booking/book/rizos-barber-studio-dodge-city" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black px-10 py-4 md:py-5 rounded-full tracking-widest uppercase text-sm font-bold transition-all hover:scale-105 cursor-pointer backdrop-blur-sm shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                        Reserve Your Chair
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
