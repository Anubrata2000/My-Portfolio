import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/*
  This is the main Page component (Home).
  It imports all the smaller components and stacks them vertically.
  The 'main' tag acts as the container for the single-page layout.
*/
export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-orange-500 selection:text-white">
      {/* Navigation bar stays at the top */}
      <Navbar />

      {/* This div stacks the content sections with no gap */}
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
