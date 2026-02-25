"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide curtain after 2.5 seconds to give the user time to read the logo
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[10000] bg-black flex flex-col items-center justify-center border-b border-gold/20"
                    initial={{ y: "0%" }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        <img
                            src="/logo.jpg"
                            alt="Rizos Barber Studio Logo"
                            className="w-32 h-32 md:w-48 md:h-48 rounded-xl object-contain border border-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.2)] mb-8"
                        />
                        <div className="overflow-hidden flex items-center justify-center">
                            <motion.h1
                                className="font-sans text-xl md:text-2xl text-white tracking-[0.2em] font-light uppercase"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            >
                                Rizo's Barber Studio
                            </motion.h1>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
