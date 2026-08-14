import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 mx-auto max-w-7xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg rounded-xl z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/favicon.png" alt="MerciTrader Logo" width={32} height={32} className="h-8 w-8" />
            <span className="font-semibold text-xl text-gray-900 dark:text-white">MerciTrader</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/businesses"
              className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Businesses
            </Link>
            <Link
              href="/about"
              className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
