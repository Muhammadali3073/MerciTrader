"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
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
import BrandName from "../components/BrandName";

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
          <motion.span
            variants={fadeInUp}
            custom={0}
            className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d4a574]"
          >
            Our Portfolio
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            custom={1}
            className="mb-4 text-4xl font-black tracking-tight text-[#f8f7f4] sm:text-5xl md:text-6xl"
          >
            Our Businesses
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="mx-auto max-w-xl text-base leading-relaxed text-[#f8f7f4]/75 sm:text-lg"
          >
            Each business within {COMPANY_INFO.name} is committed to delivering
            exceptional value, premium quality, and trusted service.
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
        <div className="mx-auto flex max-w-5xl flex-col gap-16">
          {BUSINESSES.map((business, i) => (
            <motion.div
              key={business.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
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
                      <BrandName name={business.name} />
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
                            <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1a472a]/10 text-[#1a472a]">
                              <Check className="h-3 w-3" strokeWidth={3} />
                            </div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Stats Bar */}
                  <div className="mb-8 flex flex-wrap gap-4 border-t border-[#e0ddd8]/60 pt-6">
                    {business.products && (
                      <div className="flex items-center gap-2 text-sm text-[#8b8b8b]">
                        <Package className="h-4 w-4 text-[#d4a574]" />
                        <span>{business.products.length} Products</span>
                      </div>
                    )}
                    {business.branches && (
                      <div className="flex items-center gap-2 text-sm text-[#8b8b8b]">
                        <MapPin className="h-4 w-4 text-[#d4a574]" />
                        <span>{business.branches.length} Locations</span>
                      </div>
                    )}
                    {business.services && (
                      <div className="flex items-center gap-2 text-sm text-[#8b8b8b]">
                        <Wrench className="h-4 w-4 text-[#d4a574]" />
                        <span>{business.services.length} Services</span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href={`/businesses/${business.slug}`}
                      className="group/btn inline-flex items-center gap-2 rounded-xl bg-[#1a472a] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#1a472a]/15 transition-all duration-300 hover:bg-[#2d6a43] hover:shadow-lg active:scale-[0.97]"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-xl border border-[#e0ddd8] px-6 py-3 text-sm font-semibold text-[#5a5a5a] transition-all duration-300 hover:border-[#d4a574]/40 hover:bg-[#fafaf8] hover:text-[#1a472a] active:scale-[0.97]"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── STRUCTURE / TREE ─── */}
      <section className="bg-[#f0efe9] px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.span
              variants={fadeInUp}
              custom={0}
              className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d4a574]"
            >
              Organization
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="mb-4 text-3xl font-black tracking-tight text-[#1a472a] sm:text-4xl"
            >
              Corporate Structure
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={2}
              className="mx-auto max-w-xl text-lg text-[#8b8b8b]"
            >
              A unified business group powering specialized industry leaders.
            </motion.p>
          </motion.div>

          <div className="flex flex-col items-center">
            {/* Parent Node */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0}
              className="group relative flex min-w-[280px] flex-col items-center rounded-2xl border-2 border-[#1a472a] bg-gradient-to-br from-[#1a472a] to-[#2d6a43] px-8 py-6 text-center text-white shadow-xl shadow-[#1a472a]/15 transition-all duration-300 hover:shadow-2xl"
            >
              <Building2 className="mb-2 h-7 w-7 text-[#d4a574]" />
              <h3 className="text-xl font-black">{COMPANY_INFO.name}</h3>
              <p className="text-xs text-[#e8c59f]/80">Parent Company</p>
            </motion.div>

            {/* Vertical connector line */}
            <div className="h-10 w-px bg-gradient-to-b from-[#1a472a] to-[#d4a574]" />

            {/* Horizontal connector line */}
            <div className="hidden h-px w-3/4 bg-[#d4a574]/40 md:block" />

            {/* Children Nodes */}
            <div className="grid w-full gap-6 pt-6 sm:grid-cols-2 md:grid-cols-3 md:pt-0">
              {BUSINESSES.map((business, i) => (
                <motion.div
                  key={business.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeInUp}
                  custom={i}
                  className="relative flex flex-col items-center"
                >
                  {/* Top connector */}
                  <div className="hidden h-10 w-px bg-gradient-to-b from-[#d4a574]/60 to-[#d4a574]/30 md:block" />

                  <div className="w-full rounded-2xl border border-[#e0ddd8] bg-white p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a574]/40 hover:shadow-[0_16px_32px_rgba(0,0,0,0.07)]">
                    <h4 className="mb-1 text-lg font-extrabold text-[#1a472a]">
                      <BrandName name={business.name} />
                    </h4>
                    <p className="mb-4 text-sm font-medium text-[#8b8b8b]">
                      {business.category}
                    </p>

                    <Link
                      href={`/businesses/${business.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1a472a] transition-colors hover:text-[#d4a574]"
                    >
                      View Details
                      <ArrowRight className="h-3 w-3" />
                    </Link>
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
              variants={fadeInUp}
              custom={0}
              className="mb-4 text-3xl font-black text-[#f8f7f4] sm:text-4xl"
            >
              Interested in Working Together?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-lg leading-relaxed text-[#f8f7f4]/75"
            >
              Get in touch with our team to explore partnership and supply
              opportunities.
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
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-[#d4a574] px-8 py-4 text-[15px] font-bold text-[#0f1513] shadow-lg shadow-[#d4a574]/25 transition-all duration-300 hover:bg-[#e8c59f] hover:shadow-xl active:scale-[0.97]"
            >
              Contact Us Today
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
