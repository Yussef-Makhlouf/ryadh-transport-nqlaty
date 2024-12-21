import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NeighborhoodsCovered from "@/components/NeighborhoodsCovered";
import Services from "@/components/Services";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <NeighborhoodsCovered />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}

