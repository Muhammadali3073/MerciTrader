"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ChevronRight,  Package, MapPin, Wrench, Check, ArrowRight, Boxes, Sparkles } from "lucide-react";
import { BUSINESSES } from "../../data/businesses";

// export const metadata: Metadata = {
//   title: `All Business Details – ${COMPANY_INFO.name}`,
//   description: COMPANY_INFO.tagline,
// };

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

export default function AllBusinessDetails() {
  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden bg-[#f8f7f4] text-[#0f1513] antialiased selection:bg-[#d4a574] selection:text-[#0f1513]">
      {/* ─── HERO ─── */}
      <section className="relative flex min-h-[40vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a472a] via-[#1e5232] to-[#2d6a43] px-5 py-24 text-center">
        <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#d4a574] opacity-[0.07] blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-[#e8c59f] opacity-[0.05] blur-[80px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #f8f7f4 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 mx-auto max-w-3xl">
          {/* Breadcrumb */}
          <motion.nav
            // @ts-expect-error trust me bro
            
            variants={fadeInUp}
            custom={0}
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm"
          >
            <Link href="/" className="inline-flex items-center gap-1 text-[#f8f7f4]/60 transition-colors hover:text-[#e8c59f]">
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#f8f7f4]/30" />
            <Link href="/businesses" className="text-[#f8f7f4]/60 transition-colors hover:text-[#e8c59f]">
              Businesses
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-[#f8f7f4]/30" />
            <span className="font-semibold text-[#e8c59f]">Details</span>
          </motion.nav>

          <motion.h1
            // @ts-expect-error trust me bro
            
            variants={fadeInUp}
            custom={1}
            className="mb-4 text-4xl font-black tracking-tight text-[#f8f7f4] sm:text-5xl md:text-6xl"
          >
            All Business Details
          </motion.h1>

          <motion.p
            // @ts-expect-error trust me bro
            
            variants={fadeInUp}
            custom={2}
            className="mx-auto max-w-xl text-base leading-relaxed text-[#f8f7f4]/75 sm:text-lg"
          >
            Explore detailed information about each of our businesses.
          </motion.p>
        </motion.div>

        {/* Bottom curve */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 0C1440 0 1140 60 720 60C300 60 0 0 0 0L0 60Z" fill="#f8f7f4" />
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
              // @ts-expect-error trust me bro
              
              variants={fadeInUp}
              custom={i}
              className="group relative overflow-hidden rounded-2xl border border-[#e0ddd8] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#d4a574]/40 hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)]"
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-1.5 w-full origin-left scale-x-0 bg-gradient-to-r from-[#d4a574] to-[#e8c59f] transition-transform duration-500 group-hover:scale-x-100" />

              <div className="p-8 sm:p-10">
                {/* Header */}
                <div className="mb-2 flex flex-wrap items-center justify-between gap-4">
                  <h2 className="text-2xl font-extrabold text-[#1a472a] transition-colors duration-300 group-hover:text-[#d4a574] sm:text-3xl">
                    <Link href={`/businesses/${business.slug}`}>{business.name}</Link>
                  </h2>
                  <span className="rounded-lg bg-[#1a472a]/5 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#2d6a43]">
                    {business.category}
                  </span>
                </div>

                <p className="mb-8 max-w-3xl text-[16px] leading-[1.8] text-[#5a5a5a]">{business.description}</p>

                {/* Stats */}
                <div className="mb-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 rounded-xl border border-[#e0ddd8] bg-[#fafaf8] px-5 py-3 transition-all hover:border-[#d4a574]/30">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d4a574]/10 text-[#d4a574]">
                      <Package className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <div className="text-lg font-extrabold text-[#1a472a]">{business.products?.length ?? 0}</div>
                      <div className="text-xs font-medium uppercase tracking-wider text-[#8b8b8b]">Products</div>
                    </div>
                  </div>

                  {business.branches && (
                    <div className="flex items-center gap-3 rounded-xl border border-[#e0ddd8] bg-[#fafaf8] px-5 py-3 transition-all hover:border-[#d4a574]/30">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d4a574]/10 text-[#d4a574]">
                        <MapPin className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="text-lg font-extrabold text-[#1a472a]">{business.branches.length}</div>
                        <div className="text-xs font-medium uppercase tracking-wider text-[#8b8b8b]">Locations</div>
                      </div>
                    </div>
                  )}

                  {business.services && (
                    <div className="flex items-center gap-3 rounded-xl border border-[#e0ddd8] bg-[#fafaf8] px-5 py-3 transition-all hover:border-[#d4a574]/30">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d4a574]/10 text-[#d4a574]">
                        <Wrench className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="text-lg font-extrabold text-[#1a472a]">{business.services.length}</div>
                        <div className="text-xs font-medium uppercase tracking-wider text-[#8b8b8b]">Services</div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Products */}
                {business.products && business.products.length > 0 && (
                  <div className="mb-8 rounded-2xl bg-[#f0efe9] p-6 sm:p-8">
                    <div className="mb-6 flex items-center gap-2">
                      <Boxes className="h-5 w-5 text-[#d4a574]" />
                      <h3 className="text-lg font-bold text-[#1a472a]">Products</h3>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {business.products.map((product) => (
                        <div
                          key={product.id}
                          className="rounded-xl border border-[#e0ddd8] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d4a574]/30 hover:shadow-md"
                        >
                          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#1a472a]/10 to-[#2d6a43]/5 text-[#1a472a]">
                            <Package className="h-5 w-5" strokeWidth={1.5} />
                          </div>
                          <h4 className="mb-1.5 text-[15px] font-bold text-[#1a472a]">{product.name}</h4>
                          <p className="mb-3 text-[13px] leading-relaxed text-[#8b8b8b]">{product.description}</p>
                          {product.category && (
                            <span className="inline-block rounded-md bg-[#d4a574]/10 px-2.5 py-1 text-[11px] font-bold text-[#d4a574]">
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
                  <div className="mb-8 rounded-2xl border border-[#e0ddd8] bg-white p-6 sm:p-8">
                    <div className="mb-6 flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-[#d4a574]" />
                      <h3 className="text-lg font-bold text-[#1a472a]">Services</h3>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {business.services.map((svc, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 rounded-lg bg-[#fafaf8] px-4 py-3 transition-all hover:bg-[#f0efe9]"
                        >
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1a472a] text-white">
                            <Check className="h-3.5 w-3.5" strokeWidth={3} />
                          </div>
                          <span className="text-[14px] font-medium text-[#4a4a4a]">{svc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action */}
                <div className="flex justify-end">
                  <Link
                    href={`/businesses/${business.slug}`}
                    className="group/btn inline-flex items-center gap-2.5 rounded-xl bg-[#1a472a] px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-[#1a472a]/15 transition-all duration-300 hover:bg-[#2d6a43] hover:shadow-xl active:scale-[0.97]"
                  >
                    Learn More About {business.name}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2
              // @ts-expect-error trust me bro
               variants={fadeInUp} custom={0} className="mb-4 text-3xl font-black text-[#f8f7f4] sm:text-4xl">
              Want to Dive Deeper?
            </motion.h2>
            <motion.p
              // @ts-expect-error trust me bro
               variants={fadeInUp} custom={1} className="text-lg leading-relaxed text-[#f8f7f4]/75">
              Visit individual business pages for in-depth information, galleries, and contact options.
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
              View All Businesses
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
