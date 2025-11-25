import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Chef from "@/components/Chef";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <Menu />
      <Chef />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
