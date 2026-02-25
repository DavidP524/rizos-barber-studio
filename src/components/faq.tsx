"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Do you guys take walk-ins?",
            answer: "Yes, we proudly accept walk-ins! While appointments guarantee your spot and save time, our team is always ready and welcoming to whoever walks through the door."
        },
        {
            question: "What is included in the Premium Packages?",
            answer: "Our premium packages range from complete overhauls (Haircuts, Beard lineup, and Eyebrows) to VIP experiences that involve luxury hot towel treatments, precision razor work, and premium styling products to leave you refreshed."
        },
        {
            question: "Do you specialize in kids' haircuts?",
            answer: "Absolutely. Our barbers create a comfortable, safe, and engaging environment. Many of our loyal clients commend how patient and talented the team is with children."
        },
        {
            question: "Can I bring my son and get a haircut at the same time?",
            answer: "Yes! We specifically offer a 'Father + Son' premium package built for bonding over a fresh cut. Simply book the package and we will handle the rest."
        },
        {
            question: "What products do you use?",
            answer: "We carry and utilize high-end grooming products like Suavecito Pomade, Sea Salt Sprays, and premium conditioning oils to ensure your hair holds up far beyond the chair."
        }
    ];

    return (
        <section className="py-32 px-6 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Frequently Asked</h2>
                <p className="text-foreground/70 text-lg font-light leading-relaxed">
                    Everything you need to know before sitting in our chairs.
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <motion.div
                            key={idx}
                            className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-zinc-900/60 border-gold/40 shadow-[0_0_30px_rgba(212,175,55,0.05)]' : 'bg-zinc-900/30 border-white/5 hover:border-white/10'}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.0, delay: idx * 0.15, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : idx)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className={`font-serif text-lg md:text-xl font-medium transition-colors ${isOpen ? 'text-gold' : 'text-foreground/90'}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : 'text-foreground/50'}`}
                                />
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-8 pb-6 pt-2 text-foreground/70 font-light leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
