/* app/not-found.tsx */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, SearchX, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-[#f8fafc] px-5 py-24 text-center selection:bg-[#d91424] selection:text-white">
      {/* Decorative ambient orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#d91424] opacity-[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-[#0099ff] opacity-[0.04] blur-[80px]" />

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
          className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#d91424]/10 to-[#0099ff]/10 shadow-[0_8px_32px_rgba(217,20,36,0.08)]"
        >
          <SearchX className="h-12 w-12 text-[#d91424]" strokeWidth={1.3} />
        </motion.div>

        {/* 404 Number */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mb-3 text-8xl font-black tracking-tighter text-[#0f172a]/10 sm:text-9xl"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mb-4 -mt-8 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mb-10 max-w-sm text-base leading-relaxed text-[#64748b] sm:text-lg"
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
            className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#d91424] to-[#b9101d] px-8 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-[#d91424]/20 transition-all duration-300 hover:from-[#ef233c] hover:to-[#d91424] hover:shadow-xl active:scale-[0.97]"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-[#e2e8f0] bg-white px-8 py-3.5 text-[15px] font-bold text-[#0f172a] transition-all duration-300 hover:border-[#d91424]/40 hover:bg-[#f1f5f9] hover:text-[#d91424] active:scale-[0.97]"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}
