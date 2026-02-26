"use client";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-32 px-6 max-w-7xl mx-auto overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-6"
                >
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">About Us</h2>
                    <h3 className="text-gold text-xl font-serif italic mb-6">The Ultimate Grooming Experience</h3>
                    <p className="text-foreground/70 text-lg font-light leading-relaxed">
                        Welcome to Rizo's Barber Studio, where the art of grooming meets exceptional customer service. Our barber shop is dedicated to providing high-quality haircuts and grooming services for men of all ages.
                    </p>
                    <p className="text-foreground/70 text-lg font-light leading-relaxed">
                        Our skilled and experienced barbers are passionate about their craft and are committed to helping our clients look and feel their best. At Rizo's Barber Studio, we pride ourselves on our attention to detail, friendly atmosphere, and commitment to creating a personalized experience for each client.
                    </p>
                    <p className="text-foreground/70 text-lg font-light leading-relaxed">
                        Whether you're looking for a classic haircut or a modern style, our team will work with you to achieve your desired look. Come visit us and discover why Rizo's Barber Studio is the go-to destination for the ultimate grooming experience.
                    </p>
                </motion.div>

                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/5 shadow-[0_0_40px_rgba(212,175,55,0.08)] group">
                    <img
                        src="/allrbsproduct.png"
                        alt="Rizo's Barber Studio Products"
                        className="w-full h-full object-cover transform transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90 z-10 transition-opacity duration-500 group-hover:opacity-70"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/5 shadow-[0_0_40px_rgba(212,175,55,0.08)] group order-last md:order-first">
                    <img
                        src="/osvaldo.rizo.jpg"
                        alt="Osvaldo Rizo"
                        className="w-full h-full object-cover object-top transform transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90 z-10 transition-opacity duration-500 group-hover:opacity-70"></div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                        className="absolute bottom-10 left-10 z-20"
                    >
                        <p className="font-serif text-4xl font-bold tracking-wide drop-shadow-xl text-white">Osvaldo Rizo</p>
                        <p className="text-gold font-medium mt-2 tracking-widest uppercase text-sm drop-shadow-md">Owner / Master Barber</p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-6"
                >
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">Meet Osvaldo Rizo</h2>
                    <h3 className="text-gold text-xl font-serif italic mb-6">Master Barber & Owner</h3>
                    <p className="text-foreground/70 text-lg font-light leading-relaxed">
                        With years of experience producing high-quality fades and traditional hot towel shaves, Osvaldo has established a "Gold Standard" for grooming in Dodge City. As a proud graduate of the prestigious Paul Mitchell barber school in Wichita, he brings unmatched attention to detail to every chair.
                    </p>
                    <p className="text-foreground/70 text-lg font-light leading-relaxed">
                        Whether it's a sleek premium package or making sure a kid feels comfortable during their first cut, Rizo and his team provide a safe, luxurious, and top-tier environment for every client.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
