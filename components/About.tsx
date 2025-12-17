/*
  About Component
  - Updated to Trushank Style: Darker cards, Neon Red accents.
*/
export default function About() {
    const skills = [
        "Java",
        "Python",
        "SQL",
        "PHP",
        "Laravel",
        "HTML/CSS",
        "Bootstrap",
        "MySQL",
        "PostgreSQL",
        "Git",
    ];

    return (
        <section id="about" className="py-24 px-4 relative overflow-hidden">
            {/* 
        Background Blobs 
        - Darker, subtler red glows suitable for the black theme.
      */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-[var(--accent)] rounded-full mix-blend-screen filter blur-[100px] opacity-10 animate-blob"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="inline-block mb-4 text-[var(--accent)] font-bold tracking-widest uppercase text-sm">
                    01. Who I Am
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
                    About <span className="text-[var(--accent)]">Me</span>
                </h2>

                <div className="glass-card p-10 rounded-2xl border border-white/5">
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed font-light">
                        I am dedicated to leveraging my technical expertise and passion for innovation to solve complex challenges in the software development field.
                        With a strong foundation in <span className="text-white font-medium">Laravel, Java, and Python</span>, I strive to add value to innovative projects and continuously learn in a collaborative environment.
                        My goal is to make meaningful contributions that drive both organizational success and individual growth.
                    </p>

                    <div className="border-t border-white/10 pt-8">
                        <h3 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">My Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-zinc-900/50 text-gray-300 text-sm font-medium px-4 py-2 rounded-lg border border-white/10 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-none"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Resume Actions */}
            <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
                {/* View Button */}
                <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--accent)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,10,14,0.2)]"
                >
                    <div className="absolute inset-0 bg-[var(--accent)]/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white group-hover:text-[var(--accent)] transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </div>
                    <span className="font-bold text-white group-hover:text-[var(--accent)] transition-colors">View CV</span>
                </a>

                {/* Download Button */}
                <a
                    href="/Resume.pdf"
                    download="Anubrata_Chatterjee_Resume"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:border-[var(--accent)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,10,14,0.2)]"
                >
                    <div className="absolute inset-0 bg-[var(--accent)]/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </div>
                    <div className="text-left">
                        <div className="text-white font-bold group-hover:text-[var(--accent)] transition-colors">Download</div>
                    </div>
                </a>
            </div>
        </section>
    );
}
