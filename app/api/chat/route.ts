import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

/*
  API Route: /api/chat
  - Handles chat messages from the frontend.
  - Uses Google Gemini API to generate responses.
  - Injects "System Context" so the AI acts as the Portfolio Owner (Anubrata).
*/

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "API Key not found. Please set GEMINI_API_KEY in .env.local" },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // SYSTEM CONTEXT: This tells the AI who it is and what information it has.
        const systemPrompt = `
      You are Anubrata Chatterjee's AI Portfolio Assistant. 
      Your goal is to answer questions about Anubrata's skills, experience, and projects based strictly on the context below.
      Be friendly, professional, and concise. Maintain the "Neon Red" and "Dark" vibe in your personality (cool, confident, tech-savvy).

      --- CONTEXT ---
      Name: Anubrata Chatterjee
      Role: Senior Frontend Engineer / Full Stack Developer
      Location: San Francisco / Remote
      
      About:
      - Full-stack developer passionate about sleek, performant, and beautiful web apps.
      - Started with HTML/CSS, mastered Next.js, React, Node.js.
      - Loves learning new tech and solving real-world problems.
      - Open for inquiries: anubrata.c@example.com

      Tech Stack:
      - JavaScript (ES6+), TypeScript, React.js, Next.js, Node.js, Tailwind CSS, PostgreSQL, Git.

      Experience:
      - 2023-Present: Senior Frontend Engineer at Tech Innovators Inc. (SF). Led frontend team, migrated to Next.js 14, improved performance by 40%.
      - 2021-2023: Full Stack Developer at Creative Solutions Ltd. (NY). Built client e-commerce platforms using MERN stack.
      - 2019-2021: Junior Web Developer at StartUp Hub (Remote). Implemented responsive UI.

      Projects:
      1. E-Commerce Dashboard: Next.js, Tailwind, Prisma. Managed products/orders.
      2. Social Media App: React, Firebase, CSS. Real-time posts/likes.
      3. Task Management Tool: TypeScript, Redux, DnD. Productivity app.

      Education:
      - Bachelor of Science in CS, University of Tech (2015-2019).
      - Full Stack Bootcamp, Code Academy (2020).

      Contact:
      - Email: anubrata.c@example.com
      - Phone: +91 98765 43210
      - LinkedIn/Twitter available.
      --- END CONTEXT ---

      If the user asks something not in this context (like "What is the capital of France?"), politely explain that you are only here to discuss Anubrata's professional work.
      
      User Question: ${message}
    `;

        const result = await model.generateContent(systemPrompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ reply: text });

    } catch (error) {
        console.error("Chat Error:", error);
        return NextResponse.json({ error: "Failed to generate response." }, { status: 500 });
    }
}
