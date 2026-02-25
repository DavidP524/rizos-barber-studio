"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? "bg-background/95 backdrop-blur-md border-b border-white/10" : "bg-transparent py-2"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="flex items-center gap-3 group"
                    >
                        <img
                            src="/logo.jpg"
                            alt="Rizos Barber Studio Logo"
                            className="w-12 h-12 md:w-14 md:h-14 rounded-md object-contain border border-gold/40 group-hover:border-gold transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                        />
                        <span className="font-serif text-2xl tracking-wider font-bold text-gold hidden sm:block">
                            RIZOS
                        </span>
                    </Link>
                    <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
                        <Link href="#services" className="hover:text-gold transition-colors">SERVICES</Link>
                        <Link href="#gallery" className="hover:text-gold transition-colors">GALLERY</Link>
                        <Link href="#about" className="hover:text-gold transition-colors">ABOUT</Link>
                    </div>
                    <div className="hidden md:block">
                        <a href="https://getsquire.com/booking/book/rizos-barber-studio-dodge-city" target="_blank" rel="noopener noreferrer" className="bg-gold hover:bg-gold-hover text-background px-6 py-2.5 rounded-full font-semibold transition-colors shadow-lg shadow-gold/20">
                            Book Appointment
                        </a>
                    </div>
                    <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-white/10 transition-all">
                    <div className="px-4 pt-4 pb-8 space-y-4 text-center flex flex-col">
                        <Link href="#services" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-medium hover:text-gold">SERVICES</Link>
                        <Link href="#gallery" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-medium hover:text-gold">GALLERY</Link>
                        <Link href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-lg font-medium hover:text-gold">ABOUT</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
