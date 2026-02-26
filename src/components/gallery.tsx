"use client";
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

    return (
        <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Latest Work</h2>
                <p className="text-foreground/70 max-w-xl mx-auto">
                    Follow us on Instagram <a href="https://www.instagram.com/rizosbarberstudio/" target="_blank" rel="noopener noreferrer" className="text-gold font-medium hover:underline">@rizosbarberstudio</a>
                </p>
            </div>

            {/* Uniform Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        </section>
    );
}
