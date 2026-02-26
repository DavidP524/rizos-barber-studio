"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Gallery() {
    const images = [
        "/Screenshot%202026-02-24%20214847.png",
        "/Screenshot%202026-02-24%20214910.png",
        "/Screenshot%202026-02-24%20214932.png",
        "/Screenshot%202026-02-24%20214954.png",
        "/Screenshot%202026-02-24%20215018.png",
        "/Screenshot%202026-02-24%20215059.png"
    ];

    const scrollRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number | null>(null);
    const isUserScrolling = useRef(false);
    const userScrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        // Only auto-scroll on mobile
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        if (!isMobile) return;

        const speed = 0.5; // pixels per frame

        const autoScroll = () => {
            if (!isUserScrolling.current && container) {
                container.scrollLeft += speed;

                // Reset to start when we reach the end
                if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
                    container.scrollLeft = 0;
                }
            }
            animationRef.current = requestAnimationFrame(autoScroll);
        };

        // Pause auto-scroll when user touches/scrolls
        const handleTouchStart = () => {
            isUserScrolling.current = true;
            if (userScrollTimeout.current) clearTimeout(userScrollTimeout.current);
        };

        const handleTouchEnd = () => {
            // Resume auto-scroll after 3 seconds of inactivity
            userScrollTimeout.current = setTimeout(() => {
                isUserScrolling.current = false;
            }, 3000);
        };

        container.addEventListener("touchstart", handleTouchStart, { passive: true });
        container.addEventListener("touchend", handleTouchEnd, { passive: true });

        animationRef.current = requestAnimationFrame(autoScroll);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            if (userScrollTimeout.current) clearTimeout(userScrollTimeout.current);
            container.removeEventListener("touchstart", handleTouchStart);
            container.removeEventListener("touchend", handleTouchEnd);
        };
    }, []);

    return (
        <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Latest Work</h2>
                <p className="text-foreground/70 max-w-xl mx-auto">
                    Follow us on Instagram <a href="https://www.instagram.com/rizosbarberstudio/" target="_blank" rel="noopener noreferrer" className="text-gold font-medium hover:underline">@rizosbarberstudio</a>
                </p>
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, idx) => (
                    <motion.div
                        key={idx}
                        className="rounded-2xl overflow-hidden shadow-xl aspect-square border border-white/5 bg-zinc-900"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.15 * idx, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div className="relative group w-full h-full overflow-hidden">
                            <img src={src} alt={`Rizos Studio Barbershop Work ${idx}`} className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <span className="text-gold font-serif text-lg italic tracking-wider drop-shadow-md">View Craft</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Horizontal Auto-Scroll */}
            <div
                ref={scrollRef}
                className="md:hidden flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 snap-x snap-mandatory"
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                }}
            >
                {images.map((src, idx) => (
                    <div
                        key={idx}
                        className="min-w-[80%] sm:min-w-[65%] snap-center shrink-0 rounded-2xl overflow-hidden shadow-xl aspect-square border border-white/5 bg-zinc-900"
                    >
                        <div className="relative w-full h-full overflow-hidden">
                            <img src={src} alt={`Rizos Studio Barbershop Work ${idx}`} className="w-full h-full object-cover object-center" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Scroll indicator dots for mobile */}
            <div className="md:hidden flex justify-center gap-2 mt-6">
                <p className="text-foreground/40 text-xs tracking-widest uppercase">Swipe to explore</p>
            </div>

            {/* Hide scrollbar CSS */}
            <style jsx>{`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
