"use client";
import { motion } from "framer-motion";

export default function Shop() {
    const products = [
        {
            name: "RBS Deluxe Pomade",
            price: "$18.00",
            desc: "The gold standard of hold. Water-soluble, strong grip, and washes out with zero effort. Provides a classic finish.",
            img: "/DeluxePomade.png"
        },
        {
            name: "RBS Sea Salt Spray",
            price: "$20.00",
            desc: "Add texture, volume, and a natural matte hold to your everyday aesthetic. Perfect for a relaxed, natural look.",
            img: "/Seasaltspray.png"
        },
        {
            name: "RBS Volumizing Dust",
            price: "$22.00",
            desc: "Instantly add incredible volume and a matte finish. High hold without the heavy feeling.",
            img: "/volumizingdust.png"
        }
    ];

    return (
        <section id="shop" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Studio Supply</h2>
                    <p className="text-foreground/70 text-lg max-w-xl font-light">
                        Take the luxury experience home. We carry specifically curated products tested and verified by our master barbers.
                    </p>
                </div>
                <motion.a
                    href="https://getsquire.com/booking/book/rizos-barber-studio-dodge-city"
                    target="_blank" rel="noopener noreferrer"
                    className="text-gold font-medium uppercase tracking-widest text-sm hover:underline flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                >
                    View Full Store
                    <span className="text-lg leading-none transition-transform group-hover:translate-x-1">→</span>
                </motion.a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="group cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: idx * 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className="relative aspect-square rounded-3xl bg-zinc-900 border border-white/5 overflow-hidden mb-6 p-8 flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-full h-full object-contain p-4 rounded-xl transform transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3 opacity-90 group-hover:opacity-100"
                            />
                        </div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-serif text-xl font-bold group-hover:text-gold transition-colors">{item.name}</h3>
                            <span className="font-semibold text-gold tracking-wide">{item.price}</span>
                        </div>
                        <p className="text-foreground/60 text-sm font-light leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
