"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Scissors, Clock, ShieldCheck } from "lucide-react";

export default function Experience() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const features = [
        {
            icon: <Award className="w-8 h-8 text-gold" />,
            title: "Award-Winning Team",
            desc: "Voted Best Barbershop from 2018 to 2026. A collective of Paul Mitchell graduates and passion-driven professionals."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-gold" />,
            title: "Premium Atmosphere",
            desc: "Immerse yourself in our meticulously designed studio, offering curated music, elite tools, and sophisticated lighting."
        },
        {
            icon: <Scissors className="w-8 h-8 text-gold" />,
            title: "Unrivaled Precision",
            desc: "From complex fades and line-ups to traditional hot towel treatments, our attention to detail is truly the gold standard."
        },
        {
            icon: <Clock className="w-8 h-8 text-gold" />,
            title: "Efficient Scheduling",
            desc: "Our straightforward booking system through Squire means you respect your time and we honor it. Walk-ins always welcome."
        }
    ];

    return (
        <section className="relative py-32 overflow-hidden border-y border-white/5" ref={ref}>
            {/* Dynamic Background */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1621645585090-eebd842cd807?q=80&w=2070&auto=format&fit=crop"
                    alt="Barbershop Details"
                    className="w-full h-full object-cover opacity-15 blur-[2px] grayscale brightness-50 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-background/90" />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        The Rizo Experience
                    </motion.h2>
                    <motion.p
                        className="text-foreground/70 text-lg max-w-2xl mx-auto font-light leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Step into an environment explicitly designed for the modern gentleman, where traditional techniques meet contemporary luxury.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feat, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-zinc-900/40 border border-white/5 p-8 rounded-3xl group hover:bg-zinc-900/80 transition-all hover:border-gold/30 relative overflow-hidden"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: idx * 0.2, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl group-hover:bg-gold/10 transition-colors rounded-full -mr-16 -mt-16 pointer-events-none" />
                            <div className="bg-black/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform shadow-lg shadow-black">
                                {feat.icon}
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-4 text-white group-hover:text-gold transition-colors">{feat.title}</h3>
                            <p className="text-foreground/70 font-light leading-relaxed text-sm">
                                {feat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
