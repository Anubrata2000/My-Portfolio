"use client";
import { useState, useRef } from "react";
/*
  Experience Component
  - Horizontal Timeline style to match the user's reference.
  - Interactive hover effects with Neon Red theme.
*/
export default function Experience() {
    const experiences = [
        {
            year: "Aug 2024 - Present",
            role: "Associate Developer",
            company: "Appycodes",
            location: "Siliguri, West Bengal",
            description: "Building and maintaining robust softwares using Laravel. Contributing to new features, optimizing existing code, and ensuring scalability and security of applications.",
        },
        {
            year: "Jan 2024 - Jul 2024",
            role: "Software Developer Intern",
            company: "Technowebs",
            location: "Siliguri, West Bengal",
            description: "Developed backend functionalities for e-commerce and MLM projects using Laravel. Handled database design, API integration, and third-party services. Maintained static websites and participated in Agile processes.",
        },
    ];

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section id="experience" className="py-24 px-4 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[var(--accent)] rounded-full mix-blend-screen filter blur-[150px] opacity-5 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="inline-block mb-4 text-[var(--accent)] font-bold tracking-widest uppercase text-sm">
                    03. My Journey
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-20 text-white">
                    My <span className="text-[var(--accent)]">Experience</span>
                </h2>

                <div className="relative">
                    {/* Horizontal Line (Desktop) - Adjusted width to span scrollable area if needed, but for now fixed to container */}
                    <div className="hidden md:block absolute top-[45px] left-0 w-full h-[2px] bg-white/10"></div>

                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        className="flex gap-6 md:gap-12 overflow-x-auto pb-12 pt-8 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
                    >
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative group min-w-[75vw] sm:min-w-[350px] md:min-w-[400px] flex-shrink-0 snap-center select-none">
                                {/* Timeline Dot (Desktop) */}
                                <div className="hidden md:flex absolute -top-[6px] left-8 items-center justify-center">
                                    <div className="w-8 h-8 rounded-full bg-black border-2 border-white/20 group-hover:border-[var(--accent)] z-20 transition-colors duration-300 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-[var(--accent)] transition-colors duration-300"></div>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="glass-card p-8 rounded-2xl border border-white/5 relative mt-8 md:mt-12 group-hover:-translate-y-2 transition-transform duration-300 pointer-events-none md:pointer-events-auto">
                                    <div className="inline-block px-3 py-1 mb-4 text-xs font-bold text-[var(--accent)] border border-[var(--accent)]/30 rounded-full bg-[var(--accent)]/10">
                                        {exp.year}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--accent)] transition-colors">{exp.role}</h3>
                                    <p className="text-sm font-semibold text-gray-400 mb-4">{exp.company} • {exp.location}</p>
                                    <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4">
                                        {exp.description}
                                    </p>

                                    {/* Decorative Icon */}
                                    <div className="absolute top-6 right-6 text-gray-700/50">
                                        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Hint */}
                    <div className="mt-4 flex items-center justify-center gap-2 text-gray-500 text-sm animate-pulse">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <span>Scroll to explore timeline</span>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
