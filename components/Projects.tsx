"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

/*
  Projects Component
  - Displays selected projects in a grid.
  - NOW INCLUDES: 3D Tilt & Glow effect on hover (Desktop).
  - responsive: scales gracefully on mobile without breaking layout.
*/
export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing products, orders, and customers.",
            tags: ["Next.js", "Tailwind", "Prisma"],
            link: "#",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
        },
        {
            title: "Social Media App",
            description: "A real-time social platform with features like posts, comments, and likes.",
            tags: ["React", "Firebase", "CSS"],
            link: "#",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80"
        },
        {
            title: "Task Management Tool",
            description: "A productivity app to organize tasks with drag-and-drop functionality.",
            tags: ["TypeScript", "Redux", "DnD"],
            link: "#",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
        },
    ];

    return (
        <section id="projects" className="py-24 px-4 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="inline-block mb-4 text-[var(--accent)] font-bold tracking-widest uppercase text-sm">
                    02. What I've Built
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
                    Selected <span className="text-[var(--accent)]">Works</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
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
                className="glass-card rounded-2xl overflow-hidden h-full flex flex-col bg-zinc-900/40 border border-white/5 transition-all duration-200 ease-out"
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
                <div className="p-8 flex flex-col flex-grow relative z-20 bg-black/40 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 flex-grow leading-relaxed font-light line-clamp-3">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag: string, i: number) => (
                            <span key={i} className="text-xs font-semibold px-2 py-1 uppercase text-gray-500 border border-white/10 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a href={project.link} className="inline-flex items-center text-[var(--accent)] font-bold hover:underline underline-offset-4 mt-auto">
                        View Project
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
