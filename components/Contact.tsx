"use client";
import { useState, useEffect, FormEvent } from 'react';

/*
  Contact Component (Snapshot Style)
  - Layout matches the reference image: Left aligned title, Right aligned details.
  - Form code is preserved (commented out) for future use.
*/
export default function Contact() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbygyieDL_WZ75dyvHVIIXPJMgqQVRxrkIaWwQfpXGYjHvPKdpddovkbEyzkKmVj1X-_Zg/exec", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setShowForm(false);
      setShowToast(true);
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden mb-20">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--accent)] rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side: Call to Action */}
        <div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-[var(--foreground)] tracking-tighter">
            Let's have <br />
            <span className="text-[var(--accent)]">a Chat</span>
          </h2>
          <p className="text-xl text-[var(--foreground)]/70 font-light max-w-md mb-8">
            Want to chat design, products, anything digital or just grab a smoothie? Hit me up!
          </p>

          <a
            href="mailto:chatterjeeanubrata386@gmail.com"
            className="inline-block bg-[var(--accent)] text-white font-bold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(245,10,14,0.4)] hover:shadow-[0_0_40px_rgba(245,10,14,0.6)] hover:-translate-y-1 transition-all"
          >
            Let's Chat
          </a>

          <div className="mt-4">
            <p className="text-gray-400 text-sm">
              Prefer a form? <button onClick={() => setShowForm(true)} className="text-[var(--accent)] hover:underline font-medium">Write a message</button>
            </p>
          </div>
        </div>

        {/* Right Side: Contact Details */}
        <div className="space-y-10 md:pl-20">

          {/* Email & Phone */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Get in Touch</h3>
            <div className="space-y-2">
              <a href="mailto:chatterjeeanubrata386@gmail.com" className="block text-xl md:text-2xl font-bold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors break-words">
                chatterjeeanubrata386@gmail.com
              </a>
              <div className="flex flex-col">
                <a href="tel:+919434977524" className="block text-xl md:text-2xl font-bold text-gray-400 hover:text-[var(--accent)] transition-colors">
                  +91 94349 77524
                </a>
                <a href="https://wa.me/919434977524" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-green-500 hover:text-green-400 transition-colors mt-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Available on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a href="mailto:chatterjeeanubrata386@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--foreground)]/5 border border-[var(--glass-border)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 group">
                <svg className="w-6 h-6 text-[var(--foreground)]/60 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/anubrata-chatterjee-9a588b246" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--foreground)]/5 border border-[var(--glass-border)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 group">
                <svg className="w-6 h-6 text-[var(--foreground)]/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://github.com/Anubrata2000" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-[var(--foreground)]/5 border border-[var(--glass-border)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 group">
                <svg className="w-6 h-6 text-[var(--foreground)]/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* MODAL FORM */}
      {showForm && (
        <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity" onClick={() => setShowForm(false)}></div>

          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <div
              className="relative transform overflow-hidden rounded-3xl bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--glass-border)] text-left shadow-[0_8px_32px_0_rgba(245,10,14,0.15)] transition-all sm:my-8 sm:w-full sm:max-w-xl animate-[modalEnter_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Close Button */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-[var(--foreground)]/10 transition-colors group z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--foreground)]/50 group-hover:text-[var(--foreground)] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="px-6 py-8 sm:px-10 sm:py-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-[var(--foreground)] tracking-tight">
                  Let's Work <span className="text-[var(--accent)]">Together</span>
                </h2>
                <p className="mb-6 font-light text-center text-[var(--foreground)]/70 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                  Have a project in mind? Looking for a partner to help build your product? Drop me a line.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-widest pl-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="block w-full px-4 py-2.5 bg-[var(--foreground)]/5 border border-[var(--glass-border)] rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all placeholder-[var(--foreground)]/40 text-[var(--foreground)] hover:bg-[var(--foreground)]/10 text-sm"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-widest pl-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="block w-full px-4 py-2.5 bg-[var(--foreground)]/5 border border-[var(--glass-border)] rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all placeholder-[var(--foreground)]/40 text-[var(--foreground)] hover:bg-[var(--foreground)]/10 text-sm"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-widest pl-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block w-full px-4 py-2.5 bg-[var(--foreground)]/5 border border-[var(--glass-border)] rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all placeholder-[var(--foreground)]/40 text-[var(--foreground)] hover:bg-[var(--foreground)]/10 text-sm"
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-widest pl-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="block w-full px-4 py-2.5 bg-[var(--foreground)]/5 border border-[var(--glass-border)] rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent outline-none transition-all placeholder-[var(--foreground)]/40 text-[var(--foreground)] resize-none hover:bg-[var(--foreground)]/10 text-sm"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 mt-2 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-[var(--accent)] via-[#ff4f53] to-[var(--accent)] bg-[length:200%_auto] hover:bg-[position:right_center] shadow-[0_0_20px_rgba(245,10,14,0.4)] hover:shadow-[0_0_30px_rgba(245,10,14,0.6)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <style jsx global>{`
            @keyframes modalEnter {
              0% {
                opacity: 0;
                transform: scale(0.95) translateY(20px);
              }
              100% {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
          `}</style>
        </div>
      )}

      {/* CUSTOM RED THEME TOASTER */}
      {showToast && (
        <div className="fixed bottom-10 right-10 z-[150] animate-[slideIn_0.4s_ease-out_forwards]">
          <div className="bg-[var(--glass-bg)] backdrop-blur-xl border border-[var(--accent)] text-[var(--foreground)] p-4 rounded-xl shadow-[0_8px_32px_0_rgba(245,10,14,0.3)] flex items-center gap-4 min-w-[300px] border-l-4 border-l-[var(--accent)]">
            <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center flex-shrink-0 animate-[pulse_2s_infinite]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg text-[var(--foreground)]">Message Sent!</h4>
              <p className="text-sm text-[var(--foreground)]/70">I'll get back to you soon.</p>
            </div>
            <button onClick={() => setShowToast(false)} className="ml-auto text-[var(--foreground)]/50 hover:text-[var(--foreground)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <style jsx>{`
            @keyframes slideIn {
               0% { opacity: 0; transform: translateX(100%); }
               100% { opacity: 1; transform: translateX(0); }
            }
          `}</style>
        </div>
      )}

    </section>
  );
}
