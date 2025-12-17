/*
  Hero Component (Trushank Style)
  - Big, Bold Typography.
  - Minimalist but high contrast.
  - Neon Red accents.
*/
export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20">
            {/* 
        Background Abstract Elements 
        - Simplified to geometric shapes/lines rather than blobs 
      */}
            <div className="absolute top-10 -left-4 w-20 h-20 lg:top-20 lg:left-[20%] lg:w-32 lg:h-32 border-2 border-[var(--accent)] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 -left-6 w-32 h-32 lg:bottom-20 lg:left-20 lg:w-48 lg:h-48 border border-gray-700 rounded-full opacity-30 dashed-circle"></div>

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="text-left w-full order-2 lg:order-1">
                    {/* Intro Tag */}
                    <div className="inline-block mb-6 px-4 py-1 border border-[var(--accent)] rounded-full text-[var(--accent)] text-xs font-bold tracking-widest uppercase">
                        Available for Hire
                    </div>

                    {/* Massive Headline */}
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.9]">
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

                {/* Profile Picture Placeholder */}
                <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
                    {/* Decorative Elements behind image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/20 to-transparent rounded-full blur-[80px] -z-10"></div>

                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-[var(--accent)]/30 overflow-hidden glass-card shadow-[0_0_40px_rgba(245,10,14,0.2)]">
                        {/* 
                          PLACEHOLDER IMAGE 
                          Replace the 'src' below with your actual image path (e.g., "/profile.jpg")
                          Ensure your image is in the 'public' folder.
                        */}
                        <img
                            src="https://via.placeholder.com/400x400/050505/f50a0e?text=Your+Photo"
                            alt="Profile Picture"
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 scale-110 hover:scale-100"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
