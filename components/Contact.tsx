/*
  Contact Component
  - Cleaned up form inputs to match dark theme.
*/
export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden mb-20"> {/* Margin bottom for floating navbar */}

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent)] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

            <div className="max-w-2xl mx-auto p-10 glass-card rounded-3xl relative z-10 border border-white/5">
                <h2 className="text-4xl font-bold mb-6 text-center text-white">
                    Let's Work Together
                </h2>
                <p className="mb-10 font-light text-center text-gray-400 text-lg">
                    Have a project in mind? Looking for a partner to help build your product? Drop me a line.
                </p>

                <form action="#" className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="block w-full p-4 text-white bg-black/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all placeholder-gray-600"
                            placeholder="name@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="block w-full p-4 text-white bg-black/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all placeholder-gray-600"
                            placeholder="Project Inquiry"
                            required
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
                            Your message
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            className="block w-full p-4 text-white bg-black/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all placeholder-gray-600"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 px-8 text-base font-bold text-white rounded-xl bg-[var(--accent)] hover:bg-red-600 shadow-lg shadow-red-900/20 hover:shadow-red-900/40 transition-all transform hover:-translate-y-1"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
