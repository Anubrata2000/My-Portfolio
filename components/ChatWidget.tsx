"use client";
import { useState, useRef, useEffect } from "react";

/*
  ChatWidget Component (AI Enabled)
  - Toggles between "Profile Card" and "AI Chat".
  - Sends messages to /api/chat.
*/
export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isChatMode, setIsChatMode] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
        { role: 'bot', text: "Hello! I'm Anubrata's AI assistant. Ask me anything about his work, skills, or experience!" }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = input;
        setInput("");
        setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
        setIsLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await res.json();

            if (data.error) {
                setMessages(prev => [...prev, { role: 'bot', text: "⚠️ Oops! " + data.error }]);
            } else {
                setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'bot', text: "Sorry, something went wrong. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50 flex flex-col items-end font-sans">

            {/* Popup Card */}
            {isOpen && (
                <div className="mb-4 w-80 md:w-96 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 flex flex-col h-[500px]">

                    {/* Header */}
                    <div className="bg-[var(--accent)] p-4 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center text-xl">
                                🤖
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm leading-tight">Anubrata AI</h3>
                                <p className="text-black/60 text-xs font-medium">Powered by Gemini</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            {/* Toggle Mode Button */}
                            <button
                                onClick={() => setIsChatMode(!isChatMode)}
                                className="text-xs font-bold bg-black/20 text-white px-2 py-1 rounded hover:bg-black/30 transition-colors"
                            >
                                {isChatMode ? "Profile" : "Chat"}
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-black/60 hover:text-white transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-grow overflow-hidden flex flex-col bg-zinc-900/90 relative">

                        {/* PROFILE MODE */}
                        {!isChatMode && (
                            <div className="p-5 h-full flex flex-col justify-center">
                                <div className="bg-black/50 p-4 rounded-xl mb-6 border border-white/5 text-center">
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        I've trained this AI on my professional background. Switch to <b>Chat Mode</b> to ask specific questions like:
                                    </p>
                                    <ul className="text-xs text-[var(--accent)] mt-3 space-y-1 font-mono text-left pl-4 list-disc">
                                        <li>"What is Anubrata's tech stack?"</li>
                                        <li>"Experience with Next.js?"</li>
                                        <li>"How can I contact him?"</li>
                                    </ul>
                                </div>

                                <button
                                    onClick={() => setIsChatMode(true)}
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold rounded-xl transition-transform hover:scale-105 shadow-lg mb-3"
                                >
                                    Start Chatting
                                </button>

                                <a
                                    href="https://linkedin.com/in/anubrata-chatterjee-9a588b246"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#0077b5] hover:bg-[#006396] text-white font-bold rounded-xl transition-colors shadow-lg"
                                >
                                    Message on LinkedIn
                                </a>
                            </div>
                        )}

                        {/* CHAT MODE */}
                        {isChatMode && (
                            <>
                                {/* Messages List */}
                                <div className="flex-grow overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-700">
                                    {messages.map((msg, idx) => (
                                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                            <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-[var(--accent)] text-white' : 'bg-zinc-800 text-gray-200 border border-white/10'}`}>
                                                {msg.text}
                                            </div>
                                        </div>
                                    ))}
                                    {isLoading && (
                                        <div className="flex justify-start">
                                            <div className="bg-zinc-800 text-gray-400 p-3 rounded-2xl text-xs flex gap-1 items-center border border-white/10">
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                                            </div>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input Area */}
                                <div className="p-3 bg-black border-t border-white/10">
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onKeyDown={handleKeyDown}
                                            placeholder="Ask about my work..."
                                            className="flex-grow bg-zinc-900 text-white text-sm rounded-lg px-3 py-2 border border-white/10 focus:border-[var(--accent)] outline-none"
                                        />
                                        <button
                                            onClick={handleSend}
                                            disabled={isLoading}
                                            className="bg-[var(--accent)] text-white p-2 rounded-lg hover:bg-red-600 disabled:opacity-50 transition-colors"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}

                    </div>

                </div>
            )}

            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(245,10,14,0.4)] transition-all duration-300 hover:scale-110 ${isOpen ? "bg-zinc-800 text-white rotate-90" : "bg-[var(--accent)] text-white"
                    }`}
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </button>

        </div>
    );
}
