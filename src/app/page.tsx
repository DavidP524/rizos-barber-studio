import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Ticker from "@/components/ticker";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import Team from "@/components/team";
import Reviews from "@/components/reviews";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-gold/30">
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <Gallery />
      <Team />
      <Reviews />
      <Footer />
    </main>
  );
}
