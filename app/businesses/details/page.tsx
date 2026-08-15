"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Home,
  ChevronRight,
  Package,
  MapPin,
  Wrench,
  Check,
  ArrowRight,
  Boxes,
  Sparkles,
} from "lucide-react";
import { BUSINESSES } from "../../data/businesses";
import BrandName from "../../components/BrandName";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function AllBusinessDetails() {
  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden bg-[#f8fafc] text-[#0f172a] antialiased selection:bg-[#d91424] selection:text-white">
      {/* ─── HERO ─── */}
      <section className="relative flex min-h-[40vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0f1d] via-[#0f172a] to-[#1e293b] px-5 py-24 text-center">
        <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#d91424] opacity-[0.08] blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-[#0099ff] opacity-[0.06] blur-[80px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #f8fafc 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 mx-auto max-w-3xl"
        >
          {/* Breadcrumb */}
          <motion.nav
            variants={fadeInUp}
            custom={0}
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-white/60 transition-colors hover:text-[#38bdf8]"
            >
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/30" />
            <Link
              href="/businesses"
              className="text-white/60 transition-colors hover:text-[#38bdf8]"
            >
              Businesses
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-white/30" />
            <span className="font-semibold text-[#38bdf8]">Details</span>
          </motion.nav>

          <motion.h1
            variants={fadeInUp}
            custom={1}
            className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            All Business Details
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="mx-auto max-w-xl text-base leading-relaxed text-[#f8fafc]/80 sm:text-lg"
          >
            Explore detailed information about each of our businesses.
          </motion.p>
        </motion.div>

        {/* Bottom curve */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60L1440 60L1440 0C1440 0 1140 60 720 60C300 60 0 0 0 0L0 60Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* ─── BUSINESS DETAILS ─── */}
      <section className="px-5 py-24">
        <div className="mx-auto flex max-w-5xl flex-col gap-16">
          {BUSINESSES.map((business, i) => (
            <motion.article
              key={business.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeInUp}
              custom={i}
              className="group relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#d91424]/40 hover:shadow-[0_20px_48px_rgba(217,20,36,0.08)]"
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-1.5 w-full origin-left scale-x-0 bg-gradient-to-r from-[#d91424] to-[#0099ff] transition-transform duration-500 group-hover:scale-x-100" />

              <div className="p-8 sm:p-10">
                {/* Header */}
                <div className="mb-2 flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-2xl font-extrabold text-[#0f172a] transition-colors duration-300 group-hover:text-[#d91424] sm:text-3xl">
                    <Link href={`/businesses/${business.slug}`}>
                      <BrandName name={business.name} />
                    </Link>
                  </h2>
                  <span className="rounded-lg bg-[#0099ff]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0077b6]">
                    {business.category}
                  </span>
                </div>

                <p className="mb-8 max-w-3xl text-[16px] leading-[1.8] text-[#475569]">
                  {business.description}
                </p>

                {/* Stats */}
                <div className="mb-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-5 py-3 transition-all hover:border-[#0099ff]/30">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0099ff]/10 text-[#0099ff]">
                      <Package className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <div className="text-lg font-extrabold text-[#0f172a]">
                        {business.products?.length ?? 0}
                      </div>
                      <div className="text-xs font-medium uppercase tracking-wider text-[#64748b]">
                        Products
                      </div>
                    </div>
                  </div>

                  {business.branches && (
                    <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-5 py-3 transition-all hover:border-[#0099ff]/30">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0099ff]/10 text-[#0099ff]">
                        <MapPin className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="text-lg font-extrabold text-[#0f172a]">
                          {business.branches.length}
                        </div>
                        <div className="text-xs font-medium uppercase tracking-wider text-[#64748b]">
                          Locations
                        </div>
                      </div>
                    </div>
                  )}

                  {business.services && (
                    <div className="flex items-center gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-5 py-3 transition-all hover:border-[#0099ff]/30">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0099ff]/10 text-[#0099ff]">
                        <Wrench className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="text-lg font-extrabold text-[#0f172a]">
                          {business.services.length}
                        </div>
                        <div className="text-xs font-medium uppercase tracking-wider text-[#64748b]">
                          Services
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Products */}
                {business.products && business.products.length > 0 && (
                  <div className="mb-8 rounded-2xl bg-[#f1f5f9] p-6 sm:p-8">
                    <div className="mb-6 flex items-center gap-2">
                      <Boxes className="h-5 w-5 text-[#0099ff]" />
                      <h3 className="text-lg font-bold text-[#0f172a]">
                        Products
                      </h3>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {business.products.map((product) => (
                        <div
                          key={product.id}
                          className="rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d91424]/30 hover:shadow-md"
                        >
                          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#d91424]/10 to-[#0099ff]/10 text-[#d91424]">
                            <Package className="h-5 w-5" strokeWidth={1.5} />
                          </div>
                          <h4 className="mb-1.5 text-[15px] font-bold text-[#0f172a]">
                            {product.name}
                          </h4>
                          <p className="mb-3 text-[13px] leading-relaxed text-[#64748b]">
                            {product.description}
                          </p>
                          {product.category && (
                            <span className="inline-block rounded-md bg-[#0099ff]/10 px-2.5 py-1 text-[11px] font-bold text-[#0077b6]">
                              {product.category}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Services */}
                {business.services && business.services.length > 0 && (
                  <div className="mb-8 rounded-2xl border border-[#e2e8f0] bg-white p-6 sm:p-8">
                    <div className="mb-6 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-[#0099ff]" />
                      <h3 className="text-lg font-bold text-[#0f172a]">
                        Services
                      </h3>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {business.services.map((svc, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 rounded-lg bg-[#f8fafc] px-4 py-3 transition-all hover:bg-[#f1f5f9]"
                        >
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0099ff] to-[#0077b6] text-white">
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                          </div>
                          <span className="text-[14px] font-medium text-[#334155]">
                            {svc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action */}
                <div className="flex justify-end">
                  <Link
                    href={`/businesses/${business.slug}`}
                    className="group/btn inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#d91424] to-[#b9101d] px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-[#d91424]/20 transition-all duration-300 hover:from-[#ef233c] hover:to-[#d91424] hover:shadow-xl active:scale-[0.97]"
                  >
                    Learn More About <BrandName name={business.name} />
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0f1d] via-[#0f172a] to-[#1e293b] px-5 py-24 text-center">
        <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-[#d91424] opacity-[0.08] blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#0099ff] opacity-[0.06] blur-[100px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #f8fafc 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              custom={0}
              className="mb-4 text-3xl font-black text-white sm:text-4xl"
            >
              Want to Dive Deeper?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-lg leading-relaxed text-[#f8fafc]/80"
            >
              Visit individual business pages for in-depth information,
              galleries, and contact options.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={2}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/businesses"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#d91424] to-[#b9101d] px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-[#d91424]/25 transition-all duration-300 hover:from-[#ef233c] hover:to-[#d91424] hover:shadow-xl active:scale-[0.97]"
            >
              View All Businesses
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-xl border-2 border-white/30 px-8 py-4 text-[15px] font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#0099ff] hover:bg-[#0099ff]/10 active:scale-[0.97]"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
