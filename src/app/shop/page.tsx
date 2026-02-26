import Navbar from "@/components/navbar";
import Shop from "@/components/shop";
import Footer from "@/components/footer";

export default function ShopPage() {
    return (
        <main className="min-h-screen selection:bg-gold/30 pt-20">
            <Navbar />

            {/* Simple Header for Shop Page */}
            <header className="relative py-24 px-6 text-center border-b border-white/5 bg-black">
                <div className="absolute inset-0 bg-[url('/bg-texture.png')] opacity-20 mix-blend-overlay"></div>
                <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-4 relative z-10 text-white">Studio Supply</h1>
                <div className="w-24 h-1 bg-gold mx-auto mb-6 relative z-10"></div>
                <p className="text-foreground/70 max-w-2xl mx-auto text-lg md:text-xl font-light relative z-10">Premium grooming products used by our master barbers, available for you to take home.</p>
            </header>

            <Shop />
            <Footer />
        </main>
    );
}
