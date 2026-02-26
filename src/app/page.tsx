import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Ticker from "@/components/ticker";
import Experience from "@/components/experience";
import Services from "@/components/services";
import Gallery from "@/components/gallery";
import About from "@/components/about";
import Team from "@/components/team";
import Shop from "@/components/shop";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-gold/30">
      <Navbar />
      <Hero />
      <Ticker />
      <Experience />
      <Services />
      <Gallery />
      <About />
      <Team />
      <Shop />
      <FAQ />
      <Footer />
    </main>
  );
}
