/* app/not-found.tsx */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, SearchX, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-[#f8f7f4] px-5 py-24 text-center">
      {/* Decorative ambient orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#d4a574] opacity-[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-[#1a472a] opacity-[0.04] blur-[80px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex max-w-lg flex-col items-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#1a472a]/10 to-[#2d6a43]/5 shadow-[0_8px_32px_rgba(26,71,42,0.08)]"
        >
          <SearchX className="h-12 w-12 text-[#1a472a]" strokeWidth={1.3} />
        </motion.div>

        {/* 404 Number */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mb-3 text-8xl font-black tracking-tighter text-[#1a472a]/10 sm:text-9xl"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mb-4 -mt-8 text-3xl font-extrabold tracking-tight text-[#1a472a] sm:text-4xl"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mb-10 max-w-sm text-base leading-relaxed text-[#8b8b8b] sm:text-lg"
        >
          Sorry, we couldn&apos;t find the page you were looking for. It might have been moved or no longer exists.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#1a472a] px-8 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-[#1a472a]/20 transition-all duration-300 hover:bg-[#2d6a43] hover:shadow-xl active:scale-[0.97]"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-[#e0ddd8] bg-white px-8 py-3.5 text-[15px] font-bold text-[#0f1513] transition-all duration-300 hover:border-[#d4a574]/40 hover:bg-[#f0efe9] active:scale-[0.97]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}
