"use client";
import { motion } from "framer-motion";

const services = {
    haircuts: [
        { name: "Haircut", price: "$30 – $40" },
        { name: "Kids Haircut", price: "$30 – $40" },
        { name: "Haircut + Eyebrows", price: "$40 – $45" },
        { name: "Haircut + Design", price: "$40 – $45" },
        { name: "Long to Short", price: "$40 – $50" },
        { name: "Sunday / Holiday Cut", price: "$50 – $60" },
    ],
    shaves: [
        { name: "Beard Line Up", price: "$15 – $20" },
        { name: "Beard Shaping + Hot Towel", price: "$25 – $30" },
        { name: "Haircut + Beard", price: "$40 – $45" },
        { name: "Haircut + Shave", price: "$45 – $50" },
    ],
    premium: [
        { name: "Haircut + Beard + Eyebrows", price: "$50 – $60" },
        { name: "Premium Haircut", price: "$45 – $50" },
        { name: "VIP Experience", price: "$80" },
        { name: "Father + Son", price: "$70 – $80" },
        { name: "Men's Perm", price: "$110" },
        { name: "After Hours", price: "$75" },
    ]
};

export default function Services() {
    return (
        <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-20">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Services</h2>
                <p className="text-foreground/70 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                    Elevated grooming tailored to your style. Transparent pricing for premium results, strictly by appointment.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Bento Box 1 */}
                <motion.div
                    className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:border-gold/30 transition-colors"
                    whileHover={{ y: -5 }}
                >
                    <h3 className="font-serif text-2xl text-gold mb-6 border-b border-white/10 pb-4">Classic Haircuts</h3>
                    <ul className="space-y-4">
                        {services.haircuts.map((svc, i) => (
                            <li key={i} className="flex justify-between items-center group">
                                <span className="font-light text-foreground/90 group-hover:text-gold transition-colors">{svc.name}</span>
                                <span className="font-medium">{svc.price}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Bento Box 2 */}
                <motion.div
                    className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:border-gold/30 transition-colors"
                    whileHover={{ y: -5 }}
                >
                    <h3 className="font-serif text-2xl text-gold mb-6 border-b border-white/10 pb-4">Shaves & Beard</h3>
                    <ul className="space-y-4">
                        {services.shaves.map((svc, i) => (
                            <li key={i} className="flex justify-between items-center group">
                                <span className="font-light text-foreground/90 group-hover:text-gold transition-colors">{svc.name}</span>
                                <span className="font-medium">{svc.price}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
                {/* Bento Box 3 */}
                <motion.div
                    className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:border-gold/30 transition-colors"
                    whileHover={{ y: -5 }}
                >
                    <h3 className="font-serif text-2xl text-gold mb-6 border-b border-white/10 pb-4">Premium Packages</h3>
                    <ul className="space-y-4">
                        {services.premium.map((svc, i) => (
                            <li key={i} className="flex justify-between items-center group">
                                <span className="font-light text-foreground/90 group-hover:text-gold transition-colors">{svc.name}</span>
                                <span className="font-medium">{svc.price}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}
