"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Award,
  Handshake,
  Zap,
  UsersRound,
  Package,
  MapPin,
  ArrowRight,
  ChevronRight,
  Building2,
  Network,
  TrendingUp,
  ShieldCheck,
  Globe,
  ChevronDown,
} from "lucide-react";
import { BUSINESSES } from "./data/businesses";
import BrandName from "./components/BrandName";

const coreValues = [
  { icon: Award, title: "Quality", desc: "Excellence in everything we do" },
  { icon: Handshake, title: "Integrity", desc: "Honest and ethical practices" },
  { icon: Zap, title: "Reliability", desc: "Consistent and dependable service" },
  { icon: UsersRound, title: "Customer Focus", desc: "Your success is our priority" },
];

const stats = [
  { icon: Building2, value: "3+", label: "Operating Businesses" },
  { icon: Globe, value: "Multiple", label: "Locations Served" },
  { icon: ShieldCheck, value: "100%", label: "Commitment to Quality" },
  { icon: TrendingUp, value: "Growing", label: "Year over Year" },
];

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

export default function Home() {
  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden bg-[#f8fafc] text-[#0f172a] antialiased selection:bg-[#d91424] selection:text-white">
      {/* ─── HERO ─── */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0f1d] via-[#0f172a] to-[#1e293b] px-5 pb-20 pt-28 text-center">
        {/* Ambient floating shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-[#d91424] opacity-[0.08] blur-[100px]" />
          <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-[#0099ff] opacity-[0.06] blur-[80px]" />
          <div className="absolute left-1/3 top-10 h-64 w-64 rounded-full bg-[#0077b6] opacity-[0.04] blur-[60px]" />
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle, #f8fafc 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 mx-auto max-w-3xl">
          <motion.div
            variants={fadeInUp}
            custom={0}
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[#0099ff]/30 bg-[#0099ff]/10 px-5 py-2 text-sm font-semibold text-[#38bdf8] backdrop-blur-md"
          >
            <Building2 className="h-4 w-4" />
            <span>Diversified Business Group</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            custom={1}
            className="mb-5 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl"
            style={{ textWrap: "balance" }}
          >
            MerciTrader
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            custom={2}
            className="mb-4 text-xl font-semibold text-[#38bdf8] sm:text-2xl md:text-[1.65rem]"
          >
            Building businesses. Delivering quality. Growing together.
          </motion.p>

          <motion.p
            variants={fadeInUp}
            custom={3}
            className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#f8fafc]/80 sm:text-lg"
          >
            MerciTrader is a diversified business group operating multiple companies including <BrandName name="AL-SADIQ BRICKS KILN ⁴ˢᵗᵃʳˢ" />, Merci Mart,
            and Merci Rice. We are committed to quality, reliability, and long-term partnerships.
          </motion.p>

          <motion.div
            variants={fadeInUp} custom={4} className="mb-16 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/businesses"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#d91424] to-[#b9101d] px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-[#d91424]/25 transition-all duration-300 hover:from-[#ef233c] hover:to-[#d91424] hover:shadow-xl hover:shadow-[#d91424]/35 active:scale-[0.97]"
            >
              Explore Our Businesses
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-xl border-2 border-white/30 px-8 py-4 text-[15px] font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#0099ff] hover:bg-[#0099ff]/10 active:scale-[0.97]"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={fadeInUp}
            custom={5}
            className="mx-auto grid max-w-3xl grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur-md sm:grid-cols-4 sm:gap-6 sm:px-8"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
                  <Icon className="h-5 w-5 text-[#0099ff]" strokeWidth={1.5} />
                  <div className="text-lg font-bold text-white sm:text-xl">{stat.value}</div>
                  <div className="text-xs font-medium text-white/60">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-[#f8fafc]/40"
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </motion.div>

        {/* Bottom curve separator */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 0C1440 0 1140 60 720 60C300 60 0 0 0 0L0 60Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ─── BUSINESS GROUP ─── */}
      <section className="relative px-5 py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20 text-center"
          >
            <motion.div variants={fadeInUp} custom={0}>
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d91424]">What We Do</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="mb-4 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl"
            >
              Our Business Group
            </motion.h2>
            <motion.p variants={fadeInUp} custom={2} className="mx-auto max-w-xl text-lg leading-relaxed text-[#64748b]">
              MerciTrader operates multiple successful businesses, each committed to quality and customer excellence.
            </motion.p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BUSINESSES.map((business, i) => (
              <motion.div
                key={business.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeInUp}
                custom={i}
              >
                <Link
                  href={`/businesses/${business.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d91424]/40 hover:shadow-[0_20px_40px_rgba(217,20,36,0.08)]"
                >
                  {/* Top accent */}
                  <div className="absolute left-0 top-0 h-1.5 w-full origin-left scale-x-0 bg-gradient-to-r from-[#d91424] to-[#0099ff] transition-transform duration-500 group-hover:scale-x-100" />

                  {/* Icon header */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#d91424]/10 to-[#0099ff]/10 text-[#d91424] transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-[#d91424] group-hover:to-[#b9101d] group-hover:text-white">
                    <Building2 className="h-6 w-6" strokeWidth={1.5} />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-[#0f172a] transition-colors duration-300 group-hover:text-[#d91424]">
                    <BrandName name={business.name} />
                  </h3>

                  <span className="mb-5 w-fit rounded-lg bg-[#0099ff]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0077b6]">
                    {business.category}
                  </span>

                  <p className="mb-6 flex-1 text-[15px] leading-relaxed text-[#64748b]">{business.shortDescription}</p>

                  <div className="mb-6 flex flex-wrap gap-5 text-sm text-[#64748b]">
                    <span className="inline-flex items-center gap-2">
                      <Package className="h-4 w-4 text-[#0099ff]" />
                      <span className="font-semibold text-[#0f172a]">{business.products.length}</span> Products
                    </span>
                    {business.branches && (
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#0099ff]" />
                        <span className="font-semibold text-[#0f172a]">{business.branches.length}</span> Locations
                      </span>
                    )}
                  </div>

                  <div className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#d91424] transition-all duration-300 group-hover:gap-3">
                    Learn More
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY MERCITRADER ─── */}
      <section className="relative overflow-hidden bg-[#f1f5f9] px-5 py-28">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#0099ff] opacity-[0.04] blur-[100px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-[#d91424] opacity-[0.03] blur-[80px]" />

        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20 text-center"
          >
            <motion.div variants={fadeInUp} custom={0}>
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d91424]">
                Our Foundation
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="mb-4 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl"
            >
              Why MerciTrader
            </motion.h2>
            <motion.p variants={fadeInUp} custom={2} className="mx-auto max-w-xl text-lg leading-relaxed text-[#64748b]">
              We believe in building lasting relationships through quality, integrity, and innovation.
            </motion.p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeInUp}
                  custom={i}
                  className="group relative rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1 hover:border-[#0099ff]/40 hover:shadow-[0_16px_32px_rgba(0,153,255,0.08)]"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0a0f1d] to-[#1e293b] text-white shadow-lg shadow-black/15 transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#d91424] group-hover:to-[#b9101d]">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h4 className="mb-3 text-lg font-bold text-[#0f172a]">{value.title}</h4>
                  <p className="text-[15px] leading-relaxed text-[#64748b]">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── STRUCTURE ─── */}
      <section className="relative px-5 py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-20 text-center"
          >
            <motion.div variants={fadeInUp} custom={0}>
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d91424]">Organization</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="mb-4 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl"
            >
              Our Structure
            </motion.h2>
            <motion.p variants={fadeInUp} custom={2} className="mx-auto max-w-xl text-lg leading-relaxed text-[#64748b]">
              One parent company. Multiple specialized businesses. United by quality and values.
            </motion.p>
          </motion.div>

          <div className="flex flex-col items-center">
            {/* Parent Node */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={0}>
              <Link
                href="/businesses"
                className="group relative flex min-w-[300px] flex-col items-center rounded-2xl border-2 border-[#1e293b] bg-gradient-to-br from-[#0a0f1d] to-[#1e293b] px-10 py-7 text-center shadow-xl shadow-black/15 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0099ff]/20"
              >
                <div className="mb-2 flex items-center gap-3 text-2xl font-black text-white">
                  <Network className="h-6 w-6 text-[#0099ff]" />
                  MerciTrader
                </div>
                <p className="text-sm font-medium text-white/70">Parent Company &amp; Group</p>
              </Link>
            </motion.div>

            {/* Connector: Parent to Horizontal Bar */}
            <div className="relative h-12 w-px bg-gradient-to-b from-[#d91424] to-[#0099ff]/50" />

            {/* Horizontal Bar */}
            <div className="relative w-full max-w-4xl">
              <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#0099ff]/60 to-transparent sm:w-full" />
            </div>

            {/* Children Grid with top connectors */}
            <div className="relative mt-0 grid w-full max-w-5xl gap-6 pt-12 sm:grid-cols-2 lg:grid-cols-3">
              {BUSINESSES.map((business, i) => (
                <motion.div
                  key={business.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeInUp}
                  custom={i}
                  className="relative flex flex-col items-center"
                >
                  {/* Top connector line */}
                  <div className="absolute -top-12 left-1/2 h-12 w-px bg-gradient-to-b from-[#0099ff]/60 to-[#0099ff]/30" />

                  <Link
                    href={`/businesses/${business.slug}`}
                    className="group flex w-full flex-col items-center rounded-2xl border border-[#e2e8f0] bg-white p-7 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#d91424]/40 hover:shadow-[0_16px_32px_rgba(217,20,36,0.07)] h-full"
                  >
                    <div className="mb-2 text-lg font-extrabold text-[#0f172a] transition-colors duration-300 group-hover:text-[#d91424]">
                      <BrandName name={business.name} />
                    </div>
                    <p className="mb-4 text-sm font-medium text-[#64748b]">{business.category}</p>

                    <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-[#d91424] opacity-80 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      View Business Details
                      <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0f1d] via-[#0f172a] to-[#1e293b] px-5 py-28 text-center">
        {/* Background pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #f8fafc 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-[#d91424] opacity-[0.08] blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#0099ff] opacity-[0.06] blur-[100px]" />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2
              variants={fadeInUp} custom={0} className="mb-5 text-3xl font-black text-white sm:text-4xl md:text-5xl">
              Ready to Partner with MerciTrader?
            </motion.h2>
            <motion.p
              variants={fadeInUp} custom={1} className="mx-auto max-w-xl text-lg leading-relaxed text-[#f8fafc]/80">
              Whether it&apos;s construction materials, retail essentials, or premium rice, let us know how we can help your
              business grow.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp} custom={2}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#d91424] to-[#b9101d] px-10 py-5 text-base font-bold text-white shadow-xl shadow-[#d91424]/25 transition-all duration-300 hover:from-[#ef233c] hover:to-[#d91424] hover:shadow-2xl hover:shadow-[#d91424]/35 active:scale-[0.97]"
            >
              Contact Us
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
