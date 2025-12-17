/*
  Footer Component
  - Stays at the bottom of the page.
  - Typically contains copyright info, social links, or secondary navigation.
*/
export default function Footer() {
    // We use the JavaScript Date object to automatically get the current year.
    const currentYear = new Date().getFullYear();

    return (
        <footer className="p-4 glass md:p-8 lg:p-10 border-t border-gray-800">
            <div className="mx-auto max-w-screen-xl text-center">
                <a
                    href="#"
                    className="flex justify-center items-center text-2xl font-semibold text-white mb-4"
                >
                    My Portfolio
                </a>
                <p className="my-6 text-gray-400">
                    Built with Next.js, TypeScript, and Tailwind CSS.
                </p>
                <span className="text-sm text-gray-400 sm:text-center">
                    {/* Dynamic copyright year */}
                    © {currentYear}{" "}
                    <a href="#" className="hover:underline">
                        MyPortfolio™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}
