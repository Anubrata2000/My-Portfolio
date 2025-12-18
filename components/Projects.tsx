"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

/*
  Projects Component
  - Displays selected projects in a grid.
  - Features 'Show More' toggle to handle large project lists.
  - 3D Tilt & Glow effect on hover (Desktop).
*/
export default function Projects() {
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            title: "Friends Sphere Backend",
            description: "Scalable backend architecture for a social media platform, handling user connections and data management.",
            tags: ["Express.js", "Nest.js", "PostgreSQL", "API", "Websocket"],
            link: "https://github.com/Anubrata2000/friends-sphere-backend",
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80"
        },
        {
            title: "Laravel RESTful API",
            description: "Built to master Laravel, APIs, and Postman. A secure TODO app API with full CRUD operations.",
            tags: ["Laravel", "Postman", "REST API", "PHP"],
            link: "https://github.com/Anubrata2000/Laravel-TODO-with-Restful-API",
            image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80"
        },
        {
            title: "Multi-User Blog Platform",
            description: "A complete blogging system featuring user registration, email verification, and content management.",
            tags: ["Full Stack", "Authentication", "Web App"],
            link: "https://github.com/Anubrata2000/Blog-Website",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80"
        },
        {
            title: "Library Management System",
            description: "Database-centric application for managing library inventory using Oracle DB for robust data handling.",
            tags: ["Oracle", "Database", "Management"],
            link: "https://github.com/Anubrata2000/Library-management-System",
            image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80"
        },
        {
            title: "Tic Tac Toe",
            description: "A classic strategy game implementation features interactive gameplay and game logic.",
            tags: ["Game Dev", "Logic", "Design", "Java", "XML", "Android"],
            link: "https://github.com/Anubrata2000/Tic_Tac_Toe",
            image: "https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?w=800&q=80"
        },
        {
            title: "Android Calculator",
            description: "Native Android application built with Java for performing arithmetic calculations on mobile devices.",
            tags: ["Android", "Java", "Mobile App", "XML"],
            link: "https://github.com/Anubrata2000/Calculator_App",
            image: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=800&q=80"
        }
    ];

    const visibleProjects = showAll ? projects : projects.slice(0, 3);

    return (
        <section id="projects" className="py-24 px-4 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)] rounded-full mix-blend-[var(--glow-blend)] filter blur-[150px] opacity-15 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="inline-block mb-4 text-[var(--accent)] font-bold tracking-widest uppercase text-sm">
                    04. What I've Built
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[var(--foreground)]">
                    Selected <span className="text-[var(--accent)]">Works</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* Show More / Less Button */}
                <div className="mt-16 text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="group relative inline-flex items-center gap-2 px-8 py-3 bg-[var(--foreground)] text-[var(--background)] rounded-full font-bold border border-[var(--glass-border)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:text-[var(--accent)] transition-all duration-300"
                    >
                        <span>{showAll ? "Show Less" : "View More Projects"}</span>
                        <svg
                            className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <p className="mt-4 text-[var(--foreground)]/60 text-sm">
                        To explore my work in <span className="text-[var(--foreground)] font-bold">Python, C, DSA, or ML</span>, visit my <a href="https://github.com/Anubrata2000" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">GitHub</a>.
                    </p>
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Limit rotation to small angles for subtlety
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            ref={cardRef}
            className="group relative perspective-1000 h-full"
            onMouseMove={(e) => { setIsHovered(true); handleMouseMove(e); }}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="glass-card rounded-2xl overflow-hidden h-full flex flex-col bg-[var(--glass-bg)] border border-[var(--glass-border)] transition-all duration-200 ease-out"
                style={{
                    transform: isHovered
                        ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.02)`
                        : "rotateX(0deg) rotateY(0deg) scale(1)",
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Project Image */}
                <div className="relative h-56 w-full overflow-hidden bg-zinc-900 shrink-0">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                    {/* Used a placeholder div if image fails, but using next/image with generic src for now */}
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative z-20 bg-[var(--glass-bg)] backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-3 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-[var(--foreground)]/70 mb-6 flex-grow leading-relaxed font-light line-clamp-3">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag: string, i: number) => (
                            <span key={i} className="text-xs font-semibold px-2 py-1 uppercase text-[var(--foreground)]/60 border border-[var(--glass-border)] rounded">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[var(--accent)] font-bold hover:underline underline-offset-4 mt-auto">
                        View Code
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                {/* Glossy Overlay Reflection */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.1) 50%, transparent 54%)`,
                        mixBlendMode: 'overlay',
                        zIndex: 30
                    }}
                />
            </div>
        </div>
    );
}
