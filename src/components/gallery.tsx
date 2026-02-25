"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

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

            {/* Client Reviews */}
            <div className="mt-40 relative">
                <div className="text-center mb-16 relative z-10">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Client Reviews</h2>
                    <div className="flex justify-center gap-2 text-gold mb-6">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" strokeWidth={0} />)}
                    </div>
                    <p className="text-foreground/70 max-w-xl mx-auto drop-shadow-md">Don't just take our word for it. Hear from our clients.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {[
                        { name: "Faviola Del Real", review: "I was so happy and impressed with the kid’s haircuts and their customer service. It has been very hard to find a place where my son feels comfortable to get a haircut." },
                        { name: "A Ray Scampin", review: "Rizo faded my bald crown and receding hairline up incredibly... This is very impressive crew of barbers. Atmosphere, music, tools, lights, and service are top tier." },
                        { name: "Lauren Diaz", review: "Rizo’s Barber Studio is the best barbershop in our region. Their highly professional, passionate, and motivated team works together to create an environment where you feel safe and well taken care of." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-zinc-900/40 border border-white/5 p-10 rounded-3xl relative backdrop-blur-md group hover:border-gold/30 transition-colors"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute -top-6 -left-2 text-8xl text-gold/10 font-serif pointer-events-none transition-transform group-hover:scale-110 group-hover:text-gold/20 duration-500">"</div>
                            <p className="text-foreground/90 italic mb-8 relative z-10 text-lg font-light leading-relaxed">"{item.review}"</p>
                            <p className="font-bold text-gold uppercase tracking-wider text-sm">{item.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
