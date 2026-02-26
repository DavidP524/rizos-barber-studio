"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const barbers = [
    {
        name: "Osvaldo Rizo",
        role: "Master Barber",
        image: "/osvaldo.rizo.jpg",
        link: "https://getsquire.com/booking/book/rizos-barber-studio-dodge-city/barber/rizo-osvaldo/services"
    },
    {
        name: "Moises Rizo",
        role: "Barber",
        image: "/Moises.Rizo.jpg",
        link: "https://getsquire.com/booking/book/rizos-barber-studio-dodge-city/barber/moises-rizo/services"
    },
    {
        name: "Mario Martinez",
        role: "Barber",
        image: "/Mario.jpg",
        link: "https://getsquire.com/booking/book/rizos-barber-studio-dodge-city/barber/mario-martinez-6/services"
    },
    {
        name: "Angel Estrella",
        role: "Barber",
        image: "/Angel.jpg",
        link: "https://getsquire.com/booking/book/rizos-barber-studio-dodge-city/barber/angel-estrella/services"
    },
    {
        name: "Ivan Ortiz",
        role: "Barber",
        image: "/Ivan.jpg",
        link: "https://getsquire.com/booking/book/rizos-barber-studio-dodge-city/barber/ivan-ortiz/services"
    },
    {
        name: "Abraham Sanchez",
        role: "Barber",
        image: "/Abraham.jpg",
        link: "https://getsquire.com/booking/book/rizos-barber-studio-dodge-city/barber/abraham-sanchez-3/services"
    },
    {
        name: "Yasmin Rico",
        role: "Barber",
        image: "/Yasmin.jpg",
        link: "https://getsquire.com/booking/book/rizos-barber-studio-dodge-city/barber/yasmin-rico/services"
    },
    {
        name: "Danny Saldana",
        role: "Barber",
        image: "/Danny.jpg",
        link: "https://getsquire.com/booking/book/rizos-barber-studio-dodge-city/barber/danny-saldana/services"
    },
    {
        name: "Nerick Sanchez",
        role: "Barber",
        image: "/Nerick.jpg",
        link: "https://getsquire.com/booking/book/rizos-barber-studio-dodge-city/barber/nerick-sanchez/services"
    },
    {
        name: "David Vicente",
        role: "Barber",
        image: "/David.jpg",
        link: "https://getsquire.com/booking/book/rizos-barber-studio-dodge-city/barber/david-vicente/services"
    },
    {
        name: "Aldo Guerra",
        role: "Barber",
        image: "/Aldo.jpg",
        link: "https://getsquire.com/booking/book/rizos-barber-studio-dodge-city/barber/aldo-guerra/services"
    },
    {
        name: "Victor Ponce",
        role: "Barber",
        image: "/Victor.jpg",
        link: "https://getsquire.com/booking/book/rizos-barber-studio-dodge-city/barber/victor-ponce/services"
    },
    {
        name: "Yajayra Alarcon",
        role: "Barber",
        image: "/Yajayra.jpg",
        link: "https://getsquire.com/booking/book/rizos-barber-studio-dodge-city/barber/yajayra-alarcon/services"
    },
    {
        name: "Sergio Martinez",
        role: "Barber",
        image: "/sergio.jpg",
        link: "https://getsquire.com/booking/book/rizos-barber-studio-dodge-city/barber/sergio-martinez/services"
    }
];

export default function Team() {
    const [randomizedBarbers, setRandomizedBarbers] = useState(barbers);

    useEffect(() => {
        // Create a copy of the array and shuffle it
        const shuffled = [...barbers].sort(() => 0.5 - Math.random());
        setRandomizedBarbers(shuffled);
    }, []);

    return (
        <section id="team" className="py-24 px-6 max-w-[90rem] mx-auto overflow-hidden">
            <div className="text-center mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg text-white">Our Master Barbers</h2>
                    <h3 className="text-gold text-xl font-serif italic mb-6">Expertise & Precision in Every Cut</h3>
                    <p className="text-foreground/70 max-w-2xl mx-auto drop-shadow-md text-lg">
                        Meet the incredibly talented team behind Rizo's Barber Studio. Select your preferred barber below to view their availability and book your next appointment.
                    </p>
                </motion.div>
            </div>

            {/* Desktop Grid Layout */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
                {randomizedBarbers.map((barber, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-zinc-900/60 border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300 group flex flex-col h-full shadow-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: (idx % 5) * 0.15, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div className="relative w-full aspect-[3/4] overflow-hidden bg-black/50">
                            <img
                                src={barber.image}
                                alt={barber.name}
                                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 z-10"></div>
                            <div className="absolute bottom-4 left-4 z-20">
                                <h4 className="font-serif text-2xl font-bold text-white drop-shadow-lg leading-tight">{barber.name}</h4>
                                <p className="text-gold text-sm font-medium tracking-widest uppercase mt-1 drop-shadow-md">{barber.role}</p>
                            </div>
                        </div>
                        <div className="p-5 flex-1 flex flex-col justify-end bg-black">
                            <a
                                href={barber.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-gold hover:text-black text-white px-4 py-3 rounded-full font-semibold transition-all duration-300 border border-white/10 hover:border-gold"
                            >
                                Book with {barber.name.split(" ")[0]}
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Carousel Layout */}
            <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 scrollbar-hide">
                {randomizedBarbers.map((barber, idx) => (
                    <div
                        key={idx}
                        className="min-w-[85%] sm:min-w-[45%] snap-center shrink-0 bg-zinc-900/60 border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full shadow-xl"
                    >
                        <div className="relative w-full aspect-[3/4] overflow-hidden bg-black/50">
                            <img
                                src={barber.image}
                                alt={barber.name}
                                className="w-full h-full object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 z-10"></div>
                            <div className="absolute bottom-4 left-4 z-20">
                                <h4 className="font-serif text-2xl font-bold text-white drop-shadow-lg leading-tight">{barber.name}</h4>
                                <p className="text-gold text-sm font-medium tracking-widest uppercase mt-1 drop-shadow-md">{barber.role}</p>
                            </div>
                        </div>
                        <div className="p-5 flex-1 flex flex-col justify-end bg-black">
                            <a
                                href={barber.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-gold hover:text-black text-white px-4 py-3 rounded-full font-semibold transition-all duration-300 border border-white/10"
                            >
                                Book {barber.name.split(" ")[0]}
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Custom Styles for Scrollbar Hiding */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
