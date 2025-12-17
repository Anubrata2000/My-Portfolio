/*
  Hero Component (Trushank Style)
  - Big, Bold Typography.
  - Minimalist but high contrast.
  - Neon Red accents.
*/
export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
            {/* 
        Background Abstract Elements 
        - Simplified to geometric shapes/lines rather than blobs 
      */}
            <div className="absolute top-20 right-20 w-32 h-32 border-2 border-[var(--accent)] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-48 h-48 border border-gray-700 rounded-full opacity-30 dashed-circle"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-left w-full">
                {/* Intro Tag */}
                <div className="inline-block mb-6 px-4 py-1 border border-[var(--accent)] rounded-full text-[var(--accent)] text-xs font-bold tracking-widest uppercase">
                    Available for Hire
                </div>

                {/* Massive Headline */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
                    Software <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">
                        Engineer
                    </span>
                    <span className="text-[var(--accent)]">.</span>
                </h1>

                {/* Description */}
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 font-light">
                    Crafting digital experiences that merge <span className="text-white font-medium">engineering precision</span> with <span className="text-[var(--accent)] font-medium">design aesthetics</span>.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-6">
                    <a
                        href="#projects"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-200 bg-white font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-full"
                    >
                        Show My Work
                        <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a
                        href="#contact"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 border border-white/20 hover:border-white hover:bg-white/5 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-full"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}
