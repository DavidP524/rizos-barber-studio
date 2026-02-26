"use client";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
    "/Screenshot%202026-02-24%20214847.png",
    "/Screenshot%202026-02-24%20214910.png",
    "/Screenshot%202026-02-24%20214932.png",
    "/Screenshot%202026-02-24%20214954.png",
    "/Screenshot%202026-02-24%20215018.png",
    "/Screenshot%202026-02-24%20215059.png",
];

export default function Gallery() {
    const trackRef = useRef<HTMLDivElement>(null);
    const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const CARD_W = 160;
        const GAP = 12;

        // Clone cards for seamless looping
        const original = Array.from(track.children) as HTMLElement[];
        original.forEach((child) => {
            const clone = child.cloneNode(true) as HTMLElement;
            clone.setAttribute("aria-hidden", "true");
            track.appendChild(clone);
        });

        const TOTAL = (CARD_W + GAP) * original.length;
        let pos = 0;
        let touchStartX = 0;
        let isDragging = false;

        // Animation loop
        const tick = () => {
            if (!isDragging) {
                pos += 0.4;
                if (pos >= TOTAL) pos -= TOTAL;
                track.style.transform = `translateX(-${pos}px)`;
            }
            rafId.current = requestAnimationFrame(tick);
        };
        rafId.current = requestAnimationFrame(tick);

        // Touch handlers — allow dragging
        const onTouchStart = (e: TouchEvent) => {
            touchStartX = e.touches[0].clientX;
            isDragging = true;
            if (resumeTimer.current) clearTimeout(resumeTimer.current);
        };

        const onTouchMove = (e: TouchEvent) => {
            if (!isDragging) return;
            const dx = touchStartX - e.touches[0].clientX;
            touchStartX = e.touches[0].clientX;
            pos += dx;
            // Keep pos in bounds for seamless loop
            if (pos < 0) pos += TOTAL;
            if (pos >= TOTAL) pos -= TOTAL;
            track.style.transform = `translateX(-${pos}px)`;
        };

        const onTouchEnd = () => {
            isDragging = false;
            // Resume auto-drift after 2.5s
            resumeTimer.current = setTimeout(() => {
                isDragging = false;
            }, 2500);
        };

        const wrapper = track.parentElement;
        wrapper?.addEventListener("touchstart", onTouchStart, { passive: true });
        wrapper?.addEventListener("touchmove", onTouchMove, { passive: true });
        wrapper?.addEventListener("touchend", onTouchEnd, { passive: true });

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
            if (resumeTimer.current) clearTimeout(resumeTimer.current);
            wrapper?.removeEventListener("touchstart", onTouchStart);
            wrapper?.removeEventListener("touchmove", onTouchMove);
            wrapper?.removeEventListener("touchend", onTouchEnd);
        };
    }, []);

    return (
        <section id="gallery" className="py-24 overflow-hidden">
            {/* Header */}
            <div className="text-center mb-16 px-6">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Latest Work</h2>
                <p className="text-foreground/70 max-w-xl mx-auto">
                    Follow us on Instagram{" "}
                    <a
                        href="https://www.instagram.com/rizosbarberstudio/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold font-medium hover:underline"
                    >
                        @rizosbarberstudio
                    </a>
                </p>
            </div>

            {/* ── Desktop: static 3-col grid ── */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
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
                            <img
                                src={src}
                                alt={`Rizos Studio Work ${idx + 1}`}
                                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <span className="text-gold font-serif text-lg italic tracking-wider">View Craft</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ── Mobile: auto-scrolling ticker ── */}
            {/* Outer mask hides overflow */}
            <div
                className="md:hidden relative overflow-hidden w-full cursor-grab active:cursor-grabbing"
                style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}
            >
                {/* Moving track — width set by JS cloning */}
                <div
                    ref={trackRef}
                    className="flex gap-3 will-change-transform"
                    style={{ width: "max-content" }}
                >
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="w-[160px] h-[160px] shrink-0 rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-lg"
                        >
                            <img
                                src={src}
                                alt={`Rizos Studio Work ${idx + 1}`}
                                className="w-full h-full object-cover object-center"
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Swipe hint */}
            <p className="md:hidden text-center text-foreground/40 text-xs tracking-widest uppercase mt-5">
                Touch to pause · swipe to explore
            </p>
        </section>
    );
}
