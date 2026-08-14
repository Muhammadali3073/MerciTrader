"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2,
  Target,
  Rocket,
  ArrowRight,
  ChevronRight,
  Award,
  Handshake,
  Zap,
  UsersRound,
  ShieldCheck,
} from "lucide-react";
import { COMPANY_INFO, BUSINESSES } from "../data/businesses";

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

// Map value titles to Lucide icons
const valueIconMap: Record<string, React.ElementType> = {
  Quality: Award,
  Integrity: Handshake,
  Reliability: Zap,
  "Customer Focus": UsersRound,
  Innovation: Rocket,
  Transparency: ShieldCheck,
  Excellence: Award,
  Trust: Handshake,
  Commitment: ShieldCheck,
};

const highlights = [
  {
    title: "Quality Assurance",
    desc: "Every product and service meets our strict quality standards and customer expectations.",
  },
  {
    title: "Customer Focus",
    desc: "We prioritize customer satisfaction and build long-term relationships based on trust and reliability.",
  },
  {
    title: "Specialized Expertise",
    desc: "Each business leverages deep industry knowledge and specialized skills in its sector.",
  },
  {
    title: "Reliable Supply",
    desc: "Our efficient operations ensure consistent availability and timely delivery of products.",
  },
  {
    title: "Business Integrity",
    desc: "We operate with transparency, honesty, and ethical business practices at all times.",
  },
  {
    title: "Growth & Innovation",
    desc: "We continuously invest in improvement, innovation, and expanding our business portfolio.",
  },
];

export default function About() {
  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden bg-[#f8f7f4] text-[#0f1513] antialiased selection:bg-[#d4a574] selection:text-[#0f1513]">
      {/* ─── HERO ─── */}
      <section className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a472a] via-[#1e5232] to-[#2d6a43] px-5 py-28 text-center">
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
            <span>About Us</span>
          </motion.div>

          <motion.h1
            // @ts-expect-error trust me bro
            variants={fadeInUp}
            custom={1}
            className="mb-4 text-4xl font-black tracking-tight text-[#f8f7f4] sm:text-5xl md:text-6xl"
          >
            About {COMPANY_INFO.name}
          </motion.h1>

          <motion.p
            // @ts-expect-error trust me bro
            variants={fadeInUp}
            custom={2}
            className="text-xl font-semibold text-[#e8c59f] sm:text-2xl"
          >
            Building businesses. Delivering quality. Growing together.
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

      {/* ─── WHO WE ARE ─── */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.span
              // @ts-expect-error trust me bro
              variants={fadeInUp}
              custom={0}
              className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d4a574]"
            >
              Introduction
            </motion.span>
            <motion.h2
              // @ts-expect-error trust me bro
              variants={fadeInUp}
              custom={1}
              className="mb-8 text-3xl font-black tracking-tight text-[#1a472a] sm:text-4xl"
            >
              Who We Are
            </motion.h2>
            <motion.div
              // @ts-expect-error trust me bro
               variants={fadeInUp} custom={2} className="space-y-5">
              <p className="text-[17px] leading-[1.85] text-[#5a5a5a]">
                {COMPANY_INFO.name} is a diversified business group founded in{" "}
                {COMPANY_INFO.founded}. We operate multiple successful businesses
                including{" "}
                <Link
                  href="/businesses/al-sadiq-bricks-kiln"
                  className="font-semibold text-[#1a472a] underline decoration-[#d4a574]/40 underline-offset-4 transition-colors hover:text-[#d4a574] hover:decoration-[#d4a574]"
                >
                  AL-SADIQ BRICKS KILN (4 Stars)
                </Link>
                ,{" "}
                <Link
                  href="/businesses/merci-mart"
                  className="font-semibold text-[#1a472a] underline decoration-[#d4a574]/40 underline-offset-4 transition-colors hover:text-[#d4a574] hover:decoration-[#d4a574]"
                >
                  Merci Mart
                </Link>
                , and{" "}
                <Link
                  href="/businesses/merci-rice"
                  className="font-semibold text-[#1a472a] underline decoration-[#d4a574]/40 underline-offset-4 transition-colors hover:text-[#d4a574] hover:decoration-[#d4a574]"
                >
                  Merci Rice
                </Link>{" "}
                —each specializing in different sectors while maintaining unified
                values of quality, integrity, and customer focus.
              </p>
              <p className="text-[17px] leading-[1.85] text-[#5a5a5a]">
                Our group structure allows us to leverage specialized expertise
                in each business while maintaining consistent standards of
                excellence across all operations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── OUR STORY ─── */}
      <section className="bg-[#f0efe9] px-5 py-24">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.span
              // @ts-expect-error trust me bro
              variants={fadeInUp}
              custom={0}
              className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d4a574]"
            >
              Our Journey
            </motion.span>
            <motion.h2
              // @ts-expect-error trust me bro
              variants={fadeInUp}
              custom={1}
              className="mb-8 text-3xl font-black tracking-tight text-[#1a472a] sm:text-4xl"
            >
              Our Story
            </motion.h2>
            <motion.div
             
              // @ts-expect-error trust me bro
              variants={fadeInUp} custom={2} className="space-y-5">
              <p className="text-[17px] leading-[1.85] text-[#5a5a5a]">
                {COMPANY_INFO.name} began with a vision to build businesses that
                deliver genuine value to customers and communities. Over the
                years, we have expanded our portfolio to include specialized
                businesses in construction materials and agriculture.
              </p>
              <p className="text-[17px] leading-[1.85] text-[#5a5a5a]">
                Each business under our group has been developed with careful
                attention to market needs, quality standards, and long-term
                sustainability. Today, we serve a diverse customer base including
                contractors, retailers, wholesalers, and businesses across
                multiple sectors.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── VISION & MISSION ─── */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-4xl">
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
              Direction
            </motion.span>
            <motion.h2
              // @ts-expect-error trust me bro
              variants={fadeInUp}
              custom={1}
              className="text-3xl font-black tracking-tight text-[#1a472a] sm:text-4xl"
            >
              Vision & Mission
            </motion.h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              // @ts-expect-error trust me bro
              
              variants={fadeInUp}
              custom={0}
            >
              <div className="group relative flex h-full flex-col items-center rounded-2xl border border-[#e0ddd8] bg-white p-10 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d4a574]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a472a] to-[#2d6a43] text-white shadow-lg shadow-[#1a472a]/20 transition-all duration-500 group-hover:scale-110">
                  <Target className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#1a472a]">
                  Our Vision
                </h3>
                <p className="text-[15px] leading-relaxed text-[#8b8b8b]">
                  {COMPANY_INFO.vision}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              // @ts-expect-error trust me bro
              
              variants={fadeInUp}
              custom={1}
            >
              <div className="group relative flex h-full flex-col items-center rounded-2xl border border-[#e0ddd8] bg-white p-10 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d4a574]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d4a574] to-[#e8c59f] text-[#0f1513] shadow-lg shadow-[#d4a574]/20 transition-all duration-500 group-hover:scale-110">
                  <Rocket className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[#1a472a]">
                  Our Mission
                </h3>
                <p className="text-[15px] leading-relaxed text-[#8b8b8b]">
                  {COMPANY_INFO.mission}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
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
              Principles
            </motion.span>
            <motion.h2
              // @ts-expect-error trust me bro
              variants={fadeInUp}
              custom={1}
              className="text-3xl font-black tracking-tight text-[#1a472a] sm:text-4xl"
            >
              Our Core Values
            </motion.h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMPANY_INFO.values.map((value, i) => {
              const Icon = valueIconMap[value.title] || ShieldCheck;
              return (
                <motion.div
                  key={value.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  // @ts-expect-error trust me bro
                  
                  variants={fadeInUp}
                  custom={i}
                >
                  <div className="group flex h-full gap-5 rounded-xl border border-[#e0ddd8] bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a574]/30 hover:shadow-[0_12px_24px_rgba(0,0,0,0.05)]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a472a]/10 to-[#2d6a43]/5 text-[#1a472a] transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-[#d4a574]/20 group-hover:to-[#e8c59f]/10 group-hover:text-[#d4a574]">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="mb-1.5 text-lg font-bold text-[#1a472a]">
                        {value.title}
                      </h4>
                      <p className="text-[14px] leading-relaxed text-[#8b8b8b]">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="px-5 py-24">
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
              Advantages
            </motion.span>
            <motion.h2
              // @ts-expect-error trust me bro
              variants={fadeInUp}
              custom={1}
              className="text-3xl font-black tracking-tight text-[#1a472a] sm:text-4xl"
            >
              Why Choose {COMPANY_INFO.name}
            </motion.h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                // @ts-expect-error trust me bro
                
                variants={fadeInUp}
                custom={i}
              >
                <div className="group relative flex h-full flex-col rounded-2xl border border-[#e0ddd8] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#d4a574]/30 hover:shadow-[0_16px_32px_rgba(0,0,0,0.06)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a472a] to-[#2d6a43] text-xl font-black text-white shadow-md shadow-[#1a472a]/15 transition-all duration-300 group-hover:shadow-lg">
                    {i + 1}
                  </div>
                  <h4 className="mb-3 text-lg font-bold text-[#1a472a]">
                    {item.title}
                  </h4>
                  <p className="text-[15px] leading-relaxed text-[#8b8b8b]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUSINESS PORTFOLIO ─── */}
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
              Portfolio
            </motion.span>
            <motion.h2
              // @ts-expect-error trust me bro
              variants={fadeInUp}
              custom={1}
              className="text-3xl font-black tracking-tight text-[#1a472a] sm:text-4xl"
            >
              Our Business Portfolio
            </motion.h2>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BUSINESSES.map((business, i) => (
              <motion.div
                key={business.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                // @ts-expect-error trust me bro
                
                variants={fadeInUp}
                custom={i}
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e0ddd8] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d4a574]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                  <div className="absolute left-0 top-0 h-1.5 w-full origin-left scale-x-0 bg-gradient-to-r from-[#d4a574] to-[#e8c59f] transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a472a]/10 to-[#2d6a43]/5 text-[#1a472a] transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-[#d4a574]/20 group-hover:to-[#e8c59f]/10 group-hover:text-[#d4a574]">
                    <Building2 className="h-6 w-6" strokeWidth={1.5} />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-[#1a472a] transition-colors duration-300 group-hover:text-[#d4a574]">
                    <Link href={`/businesses/${business.slug}`}>
                      {business.name}
                    </Link>
                  </h3>

                  <span className="mb-5 w-fit rounded-lg bg-[#1a472a]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2d6a43]">
                    {business.category}
                  </span>

                  <p className="mb-6 flex-1 text-[15px] leading-relaxed text-[#8b8b8b]">
                    {business.shortDescription}
                  </p>

                  <Link
                    href={`/businesses/${business.slug}`}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#1a472a] transition-all duration-300 group-hover:gap-3 group-hover:text-[#d4a574]"
                  >
                    Learn More
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
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
              Ready to Partner with Us?
            </motion.h2>
            <motion.p
              // @ts-expect-error trust me bro
              
              variants={fadeInUp}
              custom={1}
              className="text-lg leading-relaxed text-[#f8f7f4]/75"
            >
              Discover how each of our specialized businesses can serve your
              needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // @ts-expect-error trust me bro
            
            variants={fadeInUp}
            custom={2}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/businesses"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-[#d4a574] px-8 py-4 text-[15px] font-bold text-[#0f1513] shadow-lg shadow-[#d4a574]/25 transition-all duration-300 hover:bg-[#e8c59f] hover:shadow-xl active:scale-[0.97]"
            >
              Explore All Businesses
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-xl border-2 border-[#f8f7f4]/30 px-8 py-4 text-[15px] font-bold text-[#f8f7f4] backdrop-blur-sm transition-all duration-300 hover:border-[#f8f7f4]/60 hover:bg-[#f8f7f4]/10 active:scale-[0.97]"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}