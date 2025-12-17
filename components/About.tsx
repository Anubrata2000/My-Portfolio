/*
  About Component
  - Updated to Trushank Style: Darker cards, Neon Red accents.
*/
export default function About() {
    const skills = [
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
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
                        I am a full-stack developer with a passion for building beautiful and
                        functional web applications. I started my journey exploring the basics of
                        HTML & CSS and have since moved on to mastering modern frameworks like Next.js.
                        I love to learn new technologies and apply them to solve real-world problems.
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
        </section>
    );
}
