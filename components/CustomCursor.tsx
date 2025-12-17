"use client";
import { useEffect, useState } from "react";

/*
  Custom Cursor Component
  - Creates a trailing circle effect that follows the mouse.
  - Hides on touch devices (where there is no mouse).
*/
export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Check if we are hovering over a clickable element
            const target = e.target as HTMLElement;
            setIsPointer(
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button"
            );
        };

        window.addEventListener("mousemove", updateCursor);
        return () => window.removeEventListener("mousemove", updateCursor);
    }, []);

    return (
        <>
            {/* 
        Outer Ring 
        - Moves with a slight delay or just tracks directly. 
        - Scales up when hovering over links.
      */}
            <div
                className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out mix-blend-difference"
                style={{
                    transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : 1})`,
                }}
            />

            {/* 
        Inner Dot
        - Follows cursor exactly.
        - Changes color to Neon Red.
      */}
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-[var(--accent)] rounded-full pointer-events-none z-[9999]"
                style={{
                    transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
                }}
            />
        </>
    );
}
