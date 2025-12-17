/*
  Education Component
  - Displays academic background.
  - Uses a clean list layout.
*/
export default function Education() {
    const education = [
        {
            degree: "Bachelor of Science in Computer Science",
            school: "University of Tech",
            year: "2015 - 2019",
            description: "Graduated with Honors. Specialized in Software Engineering and Artificial Intelligence.",
        },
        {
            degree: "Full Stack Web Development Bootcamp",
            school: "Code Academy",
            year: "2020",
            description: "Intensive 12-week program focused on modern web technologies including React, Node.js, and SQL.",
        },
    ];

    return (
        <section id="education" className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="inline-block mb-4 text-[var(--accent)] font-bold tracking-widest uppercase text-sm">
                    04. Learning
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
                    Education
                </h2>

                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <div key={index} className="glass-card p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start border border-white/5 hover:border-[var(--accent)]/50 transition-colors">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-xl bg-zinc-900 flex items-center justify-center text-[var(--accent)] border border-white/10">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                                    <span className="hidden md:inline text-gray-600">•</span>
                                    <span className="text-[var(--accent)] text-sm font-bold uppercase tracking-wide">{edu.year}</span>
                                </div>
                                <h4 className="text-lg font-medium text-gray-300 mb-2">{edu.degree}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
