import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

import RevealOnScroll from "@/components/RevealOnScroll";

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
        <RevealOnScroll><About /></RevealOnScroll>
        <RevealOnScroll><Experience /></RevealOnScroll>
        <RevealOnScroll><Education /></RevealOnScroll>
        <RevealOnScroll><Projects /></RevealOnScroll>
        <RevealOnScroll><Contact /></RevealOnScroll>
      </div>

      <Footer />
      <ChatWidget />
    </main>
  );
}
