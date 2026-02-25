"use client";
import { motion } from "framer-motion";

export default function Ticker() {
    const items = [
        "Best Barbershop Award 2018-2026",
        "Walk-Ins Welcomed",
        "Premium Haircuts",
        "Traditional Hot Towel Shaves",
        "VIP Experiences",
        "Best Barbershop Award 2018-2026",
        "Walk-Ins Welcomed",
        "Premium Haircuts",
        "Traditional Hot Towel Shaves",
        "VIP Experiences",
        "Best Barbershop Award 2018-2026",
        "Walk-Ins Welcomed",
    ];

    return (
        <div className="w-full bg-gold py-3 overflow-hidden flex shadow-[0_0_20px_rgba(212,175,55,0.2)] relative z-20">
            <motion.div
                className="flex whitespace-nowrap min-w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
                <div className="flex">
                    {items.map((item, idx) => (
                        <div key={idx} className="flex items-center mx-8">
                            <span className="text-black font-extrabold tracking-widest uppercase text-xs">
                                {item}
                            </span>
                            <span className="text-black/40 ml-16 text-xl leading-none">•</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
