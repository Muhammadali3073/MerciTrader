import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and description */}
        <div>
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <Image src="/favicon.png" alt="MerciTrader Logo" width={32} height={32} className="h-8 w-8" />
            <span className="font-semibold text-lg text-gray-900 dark:text-white">MerciTrader</span>
          </Link>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Diversified business group operating Al‑Sadiq Bricks &amp; Al‑Sadiq Rice.
          </p>
        </div>
        {/* Navigation */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase mb-2">Company</h3>
          <ul className="space-y-1">
            <li><Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">Home</Link></li>
            <li><Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">About</Link></li>
            <li><Link href="/businesses" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">Businesses</Link></li>
            <li><Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">Contact</Link></li>
          </ul>
        </div>
        {/* Business links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase mb-2">Businesses</h3>
          <ul className="space-y-1">
            <li><Link href="/businesses/al-sadiq-bricks" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">Al‑Sadiq Bricks</Link></li>
            <li><Link href="/businesses/al-sadiq-rice" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-sm">Al‑Sadiq Rice</Link></li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase mb-2">Contact</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">info@mercitrader.com</p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">+1 (555) 123‑4567</p>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} MerciTrader. All rights reserved.</p>
      </div>
    </footer>
  );
}
