import Link from "next/link";

/*
  Navbar Component
  - This is a 'sticky' navigation bar that stays at the top of the screen.
  - It uses the 'Link' component from Next.js for client-side navigation (no page reload).
*/
export default function Navbar() {
  return (
    // 'fixed' keeps it pinned to top. 'glass' applies our custom frosted glass effect.
    <nav className="fixed w-full z-50 top-0 start-0 glass border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo / Brand Name */}
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Portfolio
          </span>
        </Link>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {/* Navigation Links using standard <li> elements */}
            <li>
              <Link
                href="#hero"
                className="block py-2 px-3 text-white rounded-sm hover:text-orange-500 md:p-0 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="block py-2 px-3 text-white rounded-sm hover:text-orange-500 md:p-0 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block py-2 px-3 text-white rounded-sm hover:text-orange-500 md:p-0 transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block py-2 px-3 text-white rounded-sm hover:text-orange-500 md:p-0 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
