"use client";
/*
  Education Component
  - Layout: Verified Branching Tree
  - Desktop: 2-column grid with central connector.
  - Mobile: Simple vertical timeline on left.
*/
export default function Education() {
    const education = [
        {
            degree: "Masters in Computer Application (8.74 CGPA)",
            school: "Siliguri Institute of Technology",
            year: "Aug 2022 - Jun 2024",
            description: "Advanced studies in Computer Applications. Achieved 8.74 CGPA.",
            tags: ["MCA", "Computer Science", "Software Engineering"]
        },
        {
            degree: "Bachelor of Science in Computer Science (8.82 CGPA)",
            school: "Acharya Prafulla Chandra Roy Govt College",
            year: "Jul 2019 - Jun 2022",
            description: "Foundation in Computer Science. Achieved 8.82 CGPA.",
            tags: ["B.Sc", "Computer Science", "Maths"]
        },
        {
            degree: "ICSE and ISC",
            school: "Don Bosco School",
            year: "Apr 2006 - Mar 2019",
            description: "Completed primary and secondary education with focus on Science.",
            tags: ["Schooling", "Science", "Maths"]
        },
    ];

    return (
        <section id="education" className="py-24 px-4 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-[var(--accent)] rounded-full mix-blend-screen filter blur-[120px] opacity-5 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-block mb-4 text-[var(--accent)] font-bold tracking-widest uppercase text-sm">
                        03. Learning
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        My <span className="text-[var(--accent)]">Education</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Central Vertical Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--accent)]/0 via-[var(--accent)]/50 to-[var(--accent)]/0 -translate-x-1/2"></div>

                    {/* Mobile Vertical Line */}
                    <div className="md:hidden absolute left-[19px] top-0 bottom-0 w-[2px] bg-[var(--accent)]/30"></div>

                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            // Desktop: Grid with 2 columns. Mobile: Flex.
                            <div key={index} className={`relative md:grid md:grid-cols-2 md:items-center md:gap-12`}>

                                {/* 
                                    NODE (Center Dot) 
                                    We place this absolutely in the center for desktop.
                                */}
                                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 items-center justify-center z-20">
                                    <div className="w-4 h-4 rounded-full bg-black border-2 border-[var(--accent)] shadow-[0_0_10px_var(--accent)]"></div>
                                    <div className="absolute w-8 h-8 bg-[var(--accent)]/20 rounded-full animate-pulse"></div>
                                </div>

                                {/* 
                                    CARD PLACEMENT LOGIC
                                    Index Even (0, 2...): Card on Left (col-start-1), Text Align Right.
                                    Index Odd (1, 3...): Card on Right (col-start-2), Text Align Left.
                                */}
                                <div className={`
                                    md:col-span-1 
                                    ${index % 2 === 0 ? 'md:order-1 md:text-right' : 'md:order-2 md:col-start-2 md:text-left'}
                                    pl-12 md:pl-0 
                                `}>
                                    <div className={`
                                        glass-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-[var(--accent)]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(245,10,14,0.1)] relative group
                                        ${index % 2 === 0 ? 'md:mr-0' : 'md:ml-0'}
                                    `}>
                                        {/* Mobile Connector Dot & Line */}
                                        <div className="md:hidden absolute top-8 -left-[54px] w-4 h-4 rounded-full bg-black border-2 border-[var(--accent)] z-20"></div>
                                        <div className="md:hidden absolute top-[39px] -left-[50px] w-[50px] h-[2px] bg-[var(--accent)]/30"></div>

                                        {/* Desktop Connector Line (Horizontal) */}
                                        {/* If Even: Line on Right. If Odd: Line on Left. */}
                                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] w-12 bg-[var(--accent)]/30 
                                            ${index % 2 === 0 ? '-right-12' : '-left-12'}
                                        `}></div>

                                        <div className="flex flex-col gap-2">
                                            <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                                                <div className={`flex items-center gap-4 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                                    <h3 className="text-xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">{edu.school}</h3>
                                                    <span className="text-[var(--accent)] text-xs font-bold px-2 py-1 rounded bg-[var(--accent)]/10 border border-[var(--accent)]/20 shadow-[0_0_10px_rgba(245,10,14,0.2)]">
                                                        {edu.year}
                                                    </span>
                                                </div>
                                                <h4 className="text-lg font-medium text-gray-300">{edu.degree}</h4>
                                            </div>

                                            <p className="text-gray-500 text-sm leading-relaxed mt-2">{edu.description}</p>

                                            <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                                {edu.tags.map(tag => (
                                                    <span key={tag} className="text-[10px] font-mono text-gray-400 px-2 py-0.5 rounded-full border border-white/5 bg-black/20">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
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
