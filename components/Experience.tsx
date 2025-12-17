/*
  Experience Component
  - Horizontal Timeline style to match the user's reference.
  - Interactive hover effects with Neon Red theme.
*/
export default function Experience() {
    const experiences = [
        {
            year: "2023 - Present",
            role: "Senior Frontend Engineer",
            company: "Tech Innovators Inc.",
            location: "San Francisco",
            description: "Leading the frontend team in migration to Next.js 14 and improving site performance by 40%.",
        },
        {
            year: "2021 - 2023",
            role: "Full Stack Developer",
            company: "Creative Solutions Ltd.",
            location: "New York",
            description: "Developed and maintained multiple client e-commerce platforms using the MERN stack.",
        },
        {
            year: "2019 - 2021",
            role: "Junior Web Developer",
            company: "StartUp Hub",
            location: "Remote",
            description: "Collaborated with designers to implement responsive UI components and ensuring cross-browser compatibility.",
        },
    ];

    return (
        <section id="experience" className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="inline-block mb-4 text-[var(--accent)] font-bold tracking-widest uppercase text-sm">
                    03. My Journey
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-20 text-white">
                    Experience
                </h2>

                <div className="relative">
                    {/* Horizontal Line (Desktop) */}
                    <div className="hidden md:block absolute top-[15px] left-0 w-full h-[2px] bg-white/10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative group">
                                {/* Timeline Dot (Desktop) */}
                                <div className="hidden md:flex absolute -top-[6px] left-1/2 -translate-x-1/2 items-center justify-center">
                                    <div className="w-8 h-8 rounded-full bg-black border-2 border-white/20 group-hover:border-[var(--accent)] z-20 transition-colors duration-300 flex items-center justify-center">
                                        <div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-[var(--accent)] transition-colors duration-300"></div>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="glass-card p-8 rounded-2xl border border-white/5 relative mt-8 md:mt-12 group-hover:-translate-y-2 transition-transform duration-300">
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
                </div>
            </div>
        </section>
    );
}
