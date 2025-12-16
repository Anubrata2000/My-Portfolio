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
        <section id="about" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">
                    About Me
                </h2>
                <div className="glass-card p-8 rounded-lg shadow-lg">
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        I am a full-stack developer with a passion for building beautiful and
                        functional web applications. I started my journey exploring the basics of
                        HTML & CSS and have since moved on to mastering modern frameworks like Next.js.
                        I love to learn new technologies and apply them to solve real-world problems.
                    </p>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4 text-white">My Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-purple-900 text-purple-200 text-sm font-medium px-3 py-1 rounded-full border border-purple-700"
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
