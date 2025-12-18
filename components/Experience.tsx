"use client";
import { useState } from "react";

/*
  Experience Component - "Data Terminal" Design
  - Innovative Master-Detail Layout
  - "Neon Red" Theme
*/
export default function Experience() {
    const experiences = [
        {
            id: 1,
            year: "Aug 2024 - Present",
            role: "Associate Developer",
            company: "Appycodes",
            location: "Siliguri, West Bengal",
            description: "Building and maintaining robust softwares using Laravel. Contributing to new features, optimizing existing code, and ensuring scalability and security of applications.",
            skills: ["Laravel", "PHP", "Codeigniter", "MySQL", "PostgreSQL", "GraphQL", "Database Design"],
            color: "border-red-500",
            glow: "shadow-red-500/50"
        },
        {
            id: 2,
            year: "Jan 2024 - Jul 2024",
            role: "Software Developer Intern",
            company: "Technowebs",
            location: "Siliguri, West Bengal",
            description: "Developed backend functionalities for e-commerce and MLM projects using Laravel. Handled database design, API integration, and third-party services. Maintained static websites and participated in Agile processes.",
            skills: ["Laravel", "API Integration", "E-commerce", "Agile", "Backend"],
            color: "border-blue-500",
            glow: "shadow-blue-500/50"
        },
    ];

    const [activeId, setActiveId] = useState(1);

    return (
        <section id="experience" className="py-24 px-4 relative overflow-hidden bg-[var(--background)]/50 min-h-screen flex flex-col justify-center">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="mb-16 md:mb-24 text-center">
                    <div className="inline-block mb-4 text-[var(--accent)] font-bold tracking-widest uppercase text-sm">
                        02. My Journey
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-[var(--foreground)] tracking-tighter">
                        MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-rose-600">EVOLUTION</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* Left Column: Navigation (The "Terminal List") */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        {experiences.map((exp) => (
                            <button
                                key={exp.id}
                                onClick={() => setActiveId(exp.id)}
                                className={`group relative p-6 rounded-xl border text-left transition-all duration-300 w-full hover:bg-[var(--foreground)]/5 
                                    ${activeId === exp.id
                                        ? `bg-[var(--foreground)]/5 border-[var(--accent)] shadow-[0_0_20px_rgba(245,10,14,0.2)]`
                                        : "border-[var(--glass-border)] hover:border-[var(--foreground)]/30"
                                    }`}
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className={`text-xs font-bold tracking-widest uppercase ${activeId === exp.id ? "text-[var(--accent)]" : "text-gray-500"}`}>
                                        {exp.year}
                                    </span>
                                    {activeId === exp.id && (
                                        <span className="flex h-2 w-2 relative">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
                                        </span>
                                    )}
                                </div>
                                <h3 className={`text-xl md:text-2xl font-bold transition-colors ${activeId === exp.id ? "text-[var(--foreground)]" : "text-gray-400 group-hover:text-[var(--foreground)]"}`}>
                                    {exp.role}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">{exp.company}</p>

                                {/* Connecting Line (Desktop Only) */}
                                {activeId === exp.id && (
                                    <div className="hidden lg:block absolute -right-[42px] top-1/2 -translate-y-1/2 w-10 h-[2px] bg-[var(--accent)]">
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--accent)] rounded-full shadow-[0_0_10px_var(--accent)]"></div>
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right Column: Detailed View (The "Hologram") */}
                    <div className="lg:col-span-7 relative min-h-[400px]">
                        {experiences.map((exp) => (
                            <div
                                key={exp.id}
                                className={`absolute inset-0 transition-all duration-500 ease-in-out ${activeId === exp.id ? "opacity-100 translate-x-0 z-10 pointer-events-auto" : "opacity-0 translate-x-8 z-0 pointer-events-none"}`}
                            >
                                <div className="h-full bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] p-8 md:p-12 rounded-2xl relative overflow-hidden group">
                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 p-4 opacity-20">
                                        <svg className="w-24 h-24 text-[var(--accent)]" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                        </svg>
                                    </div>

                                    <h3 className="text-3xl font-bold text-[var(--foreground)] mb-2">{exp.company}</h3>
                                    <div className="text-[var(--accent)] text-sm font-mono mb-8">{exp.location}</div>

                                    <p className="text-[var(--foreground)]/70 text-lg leading-relaxed mb-8 border-l-2 border-[var(--accent)] pl-6">
                                        {exp.description}
                                    </p>

                                    <div className="space-y-4">
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Tech Stack</div>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, idx) => (
                                                <span key={idx} className="px-3 py-1 rounded-full bg-[var(--foreground)]/5 border border-[var(--glass-border)] text-xs md:text-sm text-[var(--foreground)]/70 hover:border-[var(--accent)] hover:text-[var(--foreground)] transition-colors">
                                                    #{skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
