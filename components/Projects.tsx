/*
  Projects Component
  - Updated grid layout.
  - Image placeholders now have a darker, sleeker look.
*/
export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing products, orders, and customers.",
            tags: ["Next.js", "Tailwind", "Prisma"],
            link: "#",
        },
        {
            title: "Social Media App",
            description: "A real-time social platform with features like posts, comments, and likes.",
            tags: ["React", "Firebase", "CSS"],
            link: "#",
        },
        {
            title: "Task Management Tool",
            description: "A productivity app to organize tasks with drag-and-drop functionality.",
            tags: ["TypeScript", "Redux", "DnD"],
            link: "#",
        },
    ];

    return (
        <section id="projects" className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="inline-block mb-4 text-[var(--accent)] font-bold tracking-widest uppercase text-sm">
                    02. What I've Built
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
                    Selected Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full bg-zinc-900/40 border border-white/5 hover:border-[var(--accent)]/50 transition-all duration-300">
                            {/* Project Visual */}
                            <div className="h-56 bg-zinc-900 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                <div className="flex items-center justify-center h-full text-zinc-700 font-bold text-4xl select-none group-hover:scale-110 transition-transform duration-500">
                                    {index + 1}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[var(--accent)] transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 flex-grow leading-relaxed font-light">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-semibold px-2 py-1 uppercase text-gray-500 border border-white/10 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* View Link */}
                                <a
                                    href={project.link}
                                    className="inline-flex items-center text-[var(--accent)] font-bold hover:underline underline-offset-4"
                                >
                                    View Project
                                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
