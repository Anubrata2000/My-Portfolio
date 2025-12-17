/*
  Hero Component
  - This is the first section the user sees.
  - It contains the main headline, introduction, and Call to Action (CTA) buttons.
  - We use absolute positioning for the background "blobs" to create the ambient glow effect.
*/
export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* 
        Background Blobs 
        - These are pure CSS circles with blur filters.
        - 'animate-blob' gives them a slow movement effect.
        - 'mix-blend-screen' creates interesting color overlap effects.
      */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Main Headline with Gradient Text */}
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
                    Building Digital <span className="text-gradient">Masterpieces</span>
                </h1>

                {/* Subtitle / Bio Snippet */}
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    I'm a Next.js Developer passionate about creating sleek, performant, and beautiful web applications.
                </p>

                {/* Call to Action Buttons */}
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a
                        href="#projects"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-900 transition-all shadow-[0_0_20px_rgba(234,88,12,0.5)]"
                    >
                        View Work
                        {/* SVG Arrow Icon */}
                        <svg
                            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white border border-white/20 rounded-lg hover:bg-white/10 focus:ring-4 focus:ring-gray-800 transition-colors"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}
