import Link from "next/link";
/*
  Navbar Component (Trushank Style)
  - Floating pill at the bottom of the screen.
  - Glassmorphic look with Neon Red hover effects.
*/
export default function Navbar() {
  return (
    // Fixed at bottom, centered horizontally
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass px-6 py-3 rounded-full flex items-center justify-between gap-8 shadow-2xl bg-black/80 border border-white/10">

        {/* We can use icons here later, for now we keep text distinct and minimal */}
        <Link href="/" className="text-white hover:text-[var(--accent)] transition-colors font-bold text-lg">
          AC
        </Link>

        <ul className="flex items-center gap-6">
          <li>
            <Link
              href="#hero"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors hover:bg-[var(--accent)]/10 px-3 py-1.5 rounded-full"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors hover:bg-[var(--accent)]/10 px-3 py-1.5 rounded-full"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#experience"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors hover:bg-[var(--accent)]/10 px-3 py-1.5 rounded-full hidden sm:block"
            >
              Exp.
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors hover:bg-[var(--accent)]/10 px-3 py-1.5 rounded-full"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="px-4 py-1.5 text-sm font-medium bg-[var(--accent)] text-white rounded-full hover:bg-red-600 transition-colors shadow-[0_0_10px_rgba(245,10,14,0.4)]"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
