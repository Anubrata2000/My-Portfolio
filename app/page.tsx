import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white">
      <Navbar />
      <div className="flex flex-col gap-0">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
