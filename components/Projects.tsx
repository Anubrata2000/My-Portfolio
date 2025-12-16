import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing products, orders, and customers using Next.js and Tailwind.",
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
        <section id="projects" className="py-20 px-4 bg-black/30">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="glass-card rounded-lg overflow-hidden flex flex-col h-full">
                            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                {/* Placeholder for project image */}
                                <span className="text-gray-500">Project Image</span>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    className="text-center bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded"
                                >
                                    View Details
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
