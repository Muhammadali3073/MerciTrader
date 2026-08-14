/* components/NavBar.tsx */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { COMPANY_INFO } from "../data/businesses";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/businesses", label: "Businesses" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-[100] border-b border-[#e0ddd8] bg-[#f8f7f4]/90 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-[#1a472a] transition-colors hover:text-[#2d6a43]"
          onClick={closeMobile}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a472a] to-[#2d6a43] text-sm font-black text-white shadow-md shadow-[#1a472a]/15 transition-shadow duration-300 group-hover:shadow-lg group-hover:shadow-[#1a472a]/25">
            MT
          </div>
          <span className="text-lg font-extrabold tracking-tight">{COMPANY_INFO.name}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-4 py-2 text-[15px] font-semibold transition-all duration-200 ${
                  isActive ? "text-[#1a472a]" : "text-[#8b8b8b] hover:bg-[#1a472a]/5 hover:text-[#1a472a]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[17px] left-4 right-4 h-0.5 rounded-full bg-[#d4a574]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="relative flex items-center gap-2">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e0ddd8] bg-white text-[#0f1513] shadow-sm transition-all duration-200 hover:border-[#d4a574]/40 hover:bg-[#f0efe9] md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Floating Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 top-full mt-3 w-64 overflow-hidden rounded-2xl border border-[#e0ddd8] bg-white/95 shadow-xl backdrop-blur-md md:hidden"
              >
                <div className="flex flex-col gap-1 p-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMobile}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold transition-all duration-200 ${
                          isActive ? "bg-[#1a472a]/5 text-[#1a472a]" : "text-[#8b8b8b] hover:bg-[#1a472a]/5 hover:text-[#1a472a]"
                        }`}
                      >
                        {link.label}
                        {isActive && <div className="h-2 w-2 rounded-full bg-[#d4a574]" />}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Remove the old inline mobile <nav> that was pushing the page down */}
    </header>
  );
}
