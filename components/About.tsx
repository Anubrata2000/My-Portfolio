/*
  About Component
  - Updated to Trushank Style: Darker cards, Neon Red accents.
*/
export default function About() {
    const skills = [
        { name: "SQL", url: "https://www.w3schools.com/sql/" },
        { name: "PHP", url: "https://www.php.net/" },
        { name: "Laravel", url: "https://laravel.com/" },
        { name: "Codeigniter", url: "https://codeigniter.com/" },
        { name: "Java", url: "https://dev.java/" },
        { name: "Python", url: "https://www.python.org/" },
        { name: "HTML/CSS", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "Bootstrap", url: "https://getbootstrap.com/" },
        { name: "MySQL", url: "https://www.mysql.com/" },
        { name: "PostgreSQL", url: "https://www.postgresql.org/" },
        { name: "Git", url: "https://git-scm.com/" },
        { name: "GraphQL", url: "https://graphql.org/" },
        { name: "Nest JS", url: "https://nestjs.com/" },
        { name: "Express JS", url: "https://expressjs.com/" },
        { name: "Next JS", url: "https://nextjs.org/" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
    ];

    return (
        <section id="about" className="py-24 px-4 relative overflow-hidden">
            {/* 
        Background Blobs 
        - Darker, subtler red glows suitable for the black theme.
      */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-[var(--accent)] rounded-full mix-blend-[var(--glow-blend)] filter blur-[100px] opacity-10 animate-blob"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="inline-block mb-4 text-[var(--accent)] font-bold tracking-widest uppercase text-sm">
                    01. Who I Am
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[var(--foreground)]">
                    About <span className="text-[var(--accent)]">Me</span>
                </h2>

                <div className="glass-card p-10 rounded-2xl border border-[var(--glass-border)]">
                    <div className="text-[var(--foreground)]/70 mb-8 leading-relaxed font-light space-y-6 text-lg">
                        <p>
                            I am a <span className="text-[var(--foreground)] font-medium">Software Developer</span> specialized in building scalable backend systems and high-performance web applications. I hold a Master’s in Computer Application from Siliguri Institute of Technology, complemented by a B.Sc. in Computer Science with Honors.
                        </p>
                        <p>
                            Currently, I serve as an <span className="text-[var(--foreground)] font-medium">Associate Developer at Appycodes</span>, where I architect and maintain efficient web solutions. My technical foundation incorporates hands-on industry experience from my tenure at Technowebs.
                        </p>
                        <p>
                            I take pride in my professional discipline and reliability—exemplified by a <span className="text-[var(--accent)] font-medium">special medal for maintaining a perfect attendance record</span> across 12 consecutive years of schooling.
                        </p>
                        <p className="italic border-l-2 border-[var(--accent)] pl-4">
                            Beyond code, I am committed to social impact. I actively mobilized resources for <span className="text-[var(--foreground)] font-medium">BoscoNet</span>, an initiative supporting the education of underprivileged children.
                        </p>
                    </div>

                    <div className="border-t border-[var(--glass-border)] pt-8">
                        <h3 className="text-lg font-semibold mb-6 text-[var(--foreground)] uppercase tracking-wider">My Tech Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <a
                                    key={skill.name}
                                    href={skill.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[var(--glass-bg)] text-[var(--foreground)]/70 text-sm font-medium px-4 py-2 rounded-lg border border-[var(--glass-border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                                >
                                    {skill.name}
                                </a>
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
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl overflow-hidden hover:border-[var(--accent)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,10,14,0.2)]"
                >
                    <div className="absolute inset-0 bg-[var(--accent)]/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                    <div className="w-10 h-10 rounded-xl bg-[var(--glass-border)] flex items-center justify-center text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </div>
                    <span className="font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">View CV</span>
                </a>

                {/* Download Button */}
                <a
                    href="/Resume.pdf"
                    download="Anubrata_Chatterjee_Resume"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl overflow-hidden hover:border-[var(--accent)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,10,14,0.2)]"
                >
                    <div className="absolute inset-0 bg-[var(--accent)]/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                    </div>
                    <div className="text-left">
                        <div className="text-[var(--foreground)] font-bold group-hover:text-[var(--accent)] transition-colors">Download</div>
                    </div>
                </a>
            </div>
        </section>
    );
}
