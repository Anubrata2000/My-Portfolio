"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

/*
  Navbar Component (Trushank Style)
  - Floating pill at the bottom of the screen.
  - Glassmorphic look with Neon Red hover effects.
  - NOW INCLUDES: active scroll spy to highlight current section.
*/
export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find the current active section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          // Use getBoundingClientRect for accurate position relative to viewport
          // plus window.scrollY to get absolute document position
          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const height = rect.height;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClasses = (section: string) =>
    `text-xs sm:text-sm font-medium px-2 sm:px-3 py-1.5 rounded-full transition-all duration-300 ${activeSection === section
      ? "bg-[var(--accent)] text-white shadow-[0_0_15px_rgba(245,10,14,0.5)] scale-105"
      : "text-gray-400 hover:text-white hover:bg-[var(--accent)]/10"
    }`;

  return (
    // Fixed at bottom, centered horizontally
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[95vw] sm:max-w-max">
      <div className="glass px-4 sm:px-6 py-3 rounded-full flex items-center justify-between gap-4 sm:gap-8 shadow-2xl bg-black/80 border border-white/10 overflow-x-auto no-scrollbar scroll-smooth">

        {/* Logo */}
        <Link href="/" className="text-white hover:text-[var(--accent)] transition-colors font-bold text-lg shrink-0">
          AC
        </Link>

        <ul className="flex items-center gap-4 sm:gap-6 shrink-0">
          <li>
            <Link
              href="#hero"
              className={navClasses("hero")}
              onClick={() => setActiveSection("hero")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className={navClasses("about")}
              onClick={() => setActiveSection("about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className={navClasses("experience")}
              onClick={() => setActiveSection("experience")}
            >
              Exp.
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className={navClasses("projects")}
              onClick={() => setActiveSection("projects")}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-all shadow-[0_0_10px_rgba(245,10,14,0.4)] ${activeSection === "contact"
                ? "bg-white text-[var(--accent)]"
                : "bg-[var(--accent)] text-white hover:bg-red-600"
                }`}
              onClick={() => setActiveSection("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
