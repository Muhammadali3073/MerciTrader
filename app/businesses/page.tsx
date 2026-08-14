"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  ArrowRight,
  Check,
  Package,
  MapPin,
  Wrench,
  Network,
} from "lucide-react";
import { BUSINESSES, COMPANY_INFO } from "../data/businesses";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function BusinessesPage() {
  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden bg-[#f8f7f4] text-[#0f1513] antialiased selection:bg-[#d4a574] selection:text-[#0f1513]">
      {/* ─── HERO ─── */}
      <section className="relative flex min-h-[45vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a472a] via-[#1e5232] to-[#2d6a43] px-5 py-28 text-center">
        <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#d4a574] opacity-[0.07] blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-[#e8c59f] opacity-[0.05] blur-[80px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #f8f7f4 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 mx-auto max-w-3xl"
        >
          <motion.div
            // @ts-expect-error trust me bro
            
            variants={fadeInUp}
            custom={0}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#d4a574]/20 bg-[#d4a574]/10 px-5 py-2 text-sm font-semibold text-[#e8c59f] backdrop-blur-md"
          >
            <Building2 className="h-4 w-4" />
            <span>What We Do</span>
          </motion.div>

          <motion.h1
            // @ts-expect-error trust me bro
            
            variants={fadeInUp}
            custom={1}
            className="mb-4 text-4xl font-black tracking-tight text-[#f8f7f4] sm:text-5xl md:text-6xl"
          >
            Our Businesses
          </motion.h1>

          <motion.p
            // @ts-expect-error trust me bro
            
            variants={fadeInUp}
            custom={2}
            className="mb-3 text-xl font-semibold text-[#e8c59f] sm:text-2xl"
          >
            Specialized excellence across multiple sectors
          </motion.p>

          <motion.p
            // @ts-expect-error trust me bro
            
            variants={fadeInUp}
            custom={3}
            className="mx-auto max-w-xl text-base leading-relaxed text-[#f8f7f4]/75 sm:text-lg"
          >
            Each business within {COMPANY_INFO.name} is committed to delivering
            quality, reliability, and customer satisfaction.
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
              fill="#f8f7f4"
            />
          </svg>
        </div>
      </section>

      {/* ─── BUSINESSES LIST ─── */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col gap-12">
            {BUSINESSES.map((business, i) => (
              <motion.div
                key={business.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                // @ts-expect-error trust me bro
                
                variants={fadeInUp}
                custom={i}
              >
                <div className="group relative overflow-hidden rounded-2xl border border-[#e0ddd8] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#d4a574]/40 hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)]">
                  {/* Top accent */}
                  <div className="absolute left-0 top-0 h-1.5 w-full origin-left scale-x-0 bg-gradient-to-r from-[#d4a574] to-[#e8c59f] transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="p-8 sm:p-10">
                    {/* Header */}
                    <div className="mb-6 flex flex-wrap items-center gap-4">
                      <h2 className="text-2xl font-extrabold text-[#1a472a] transition-colors duration-300 group-hover:text-[#d4a574] sm:text-3xl">
                        {business.name}
                      </h2>
                      <span className="rounded-lg bg-[#1a472a]/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#2d6a43]">
                        {business.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mb-8 max-w-3xl text-[16px] leading-[1.8] text-[#5a5a5a]">
                      {business.description}
                    </p>

                    {/* Highlights */}
                    {business.highlights && business.highlights.length > 0 && (
                      <div className="mb-8">
                        <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#1a472a]">
                          Key Highlights
                        </h4>
                        <ul className="grid gap-3 sm:grid-cols-2">
                          {business.highlights.slice(0, 4).map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-[14px] leading-relaxed text-[#6b6b6b]"
                            >
                              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d4a574]/15 text-[#d4a574]">
                                <Check className="h-3 w-3" strokeWidth={3} />
                              </div>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Stats */}
                    <div className="mb-8 grid grid-cols-3 gap-4 border-y border-[#e0ddd8] py-6 sm:gap-8">
                      <div className="text-center">
                        <div className="mb-1 flex items-center justify-center gap-1.5 text-2xl font-extrabold text-[#1a472a] sm:text-3xl">
                          <Package className="h-5 w-5 text-[#d4a574]" />
                          {business.products.length}
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b]">
                          Products
                        </span>
                      </div>

                      {business.branches && (
                        <div className="text-center">
                          <div className="mb-1 flex items-center justify-center gap-1.5 text-2xl font-extrabold text-[#1a472a] sm:text-3xl">
                            <MapPin className="h-5 w-5 text-[#d4a574]" />
                            {business.branches.length}
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b]">
                            Locations
                          </span>
                        </div>
                      )}

                      {business.services && (
                        <div className="text-center">
                          <div className="mb-1 flex items-center justify-center gap-1.5 text-2xl font-extrabold text-[#1a472a] sm:text-3xl">
                            <Wrench className="h-5 w-5 text-[#d4a574]" />
                            {business.services.length}
                          </div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#8b8b8b]">
                            Services
                          </span>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/businesses/${business.slug}`}
                      className="inline-flex items-center gap-2.5 rounded-xl bg-[#1a472a] px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-[#1a472a]/15 transition-all duration-300 hover:bg-[#2d6a43] hover:shadow-xl active:scale-[0.97]"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUSINESS STRUCTURE ─── */}
      <section className="bg-[#f0efe9] px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.span
              // @ts-expect-error trust me bro
              
              variants={fadeInUp}
              custom={0}
              className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d4a574]"
            >
              Organization
            </motion.span>
            <motion.h2
              // @ts-expect-error trust me bro
              
              variants={fadeInUp}
              custom={1}
              className="text-3xl font-black tracking-tight text-[#1a472a] sm:text-4xl"
            >
              Business Structure
            </motion.h2>
          </motion.div>

          <div className="flex flex-col items-center">
            {/* Root */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // @ts-expect-error trust me bro
              
              variants={fadeInUp}
              custom={0}
            >
              <div className="flex min-w-[300px] flex-col items-center rounded-2xl border-[3px] border-[#1a472a] bg-gradient-to-br from-[#1a472a] to-[#2d6a43] px-10 py-7 text-center shadow-xl shadow-[#1a472a]/15">
                <div className="mb-1 flex items-center gap-3 text-2xl font-black text-white">
                  <Network className="h-6 w-6 text-[#e8c59f]" />
                  {COMPANY_INFO.name}
                </div>
                <p className="text-sm font-medium text-white/70">
                  Parent Company & Group
                </p>
              </div>
            </motion.div>

            {/* Connector */}
            <div className="relative h-12 w-px bg-gradient-to-b from-[#d4a574] to-[#d4a574]/50" />

            {/* Horizontal bar */}
            <div className="relative w-full max-w-4xl">
              <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4a574]/60 to-transparent sm:w-full" />
            </div>

            {/* Branches */}
            <div className="relative mt-0 grid w-full max-w-5xl gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
              {BUSINESSES.map((business, i) => (
                <motion.div
                  key={business.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  // @ts-expect-error trust me bro
                  
                  variants={fadeInUp}
                  custom={i}
                  className="relative flex flex-col items-center"
                >
                  {/* Top connector */}
                  <div className="absolute -top-12 left-1/2 h-12 w-px bg-gradient-to-b from-[#d4a574]/60 to-[#d4a574]/30" />

                  <div className="w-full rounded-2xl border border-[#e0ddd8] bg-white p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a574]/40 hover:shadow-[0_16px_32px_rgba(0,0,0,0.07)]">
                    <h4 className="mb-1 text-lg font-extrabold text-[#1a472a]">
                      {business.name}
                    </h4>
                    <p className="mb-4 text-sm font-medium text-[#8b8b8b]">
                      {business.category}
                    </p>

                    {business.branches && business.branches.length > 0 && (
                      <div className="flex flex-col gap-2">
                        {/*{business.branches.map((branch) => (
                          <div
                            key={branch.id}
                            className="flex items-center justify-center gap-2 rounded-lg border border-[#e0ddd8] bg-[#fafaf8] px-3 py-2 text-sm text-[#6b6b6b] transition-all hover:border-[#d4a574]/40 hover:bg-[#d4a574]/5"
                          >
                            <MapPin className="h-3.5 w-3.5 text-[#d4a574]" />
                            {branch.location}
                          </div>
                        ))}*/}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a472a] via-[#1e5232] to-[#2d6a43] px-5 py-24 text-center">
        <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-[#d4a574] opacity-[0.08] blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#e8c59f] opacity-[0.06] blur-[100px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #f8f7f4 1px, transparent 0)`,
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
              // @ts-expect-error trust me bro
              
              variants={fadeInUp}
              custom={0}
              className="mb-4 text-3xl font-black text-[#f8f7f4] sm:text-4xl"
            >
              Ready to Work with Us?
            </motion.h2>
            <motion.p
              // @ts-expect-error trust me bro
              
              variants={fadeInUp}
              custom={1}
              className="text-lg leading-relaxed text-[#f8f7f4]/75"
            >
              Contact us to learn more about our businesses and how we can serve
              your needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // @ts-expect-error trust me bro
            
            variants={fadeInUp}
            custom={2}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-[#d4a574] px-9 py-4 text-base font-bold text-[#0f1513] shadow-xl shadow-black/10 transition-all duration-300 hover:bg-[#e8c59f] hover:shadow-2xl active:scale-[0.97]"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}