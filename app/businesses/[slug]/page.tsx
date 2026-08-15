"use client";

import { use } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Home,
  ChevronRight,
  Package,
  MapPin,
  Wrench,
  Check,
  Sparkles,
  ArrowRight,
  Mail,
  Phone,
  Target,
  Rocket,
  Clock,
  ExternalLink,
  MessageSquare,
  SearchX,
} from "lucide-react";
import { getBusinessBySlug, BUSINESSES } from "../../data/businesses";
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

export default function BusinessDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const business = getBusinessBySlug(slug);

  if (!business) {
    return (
      <main className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-[#f8fafc] px-5 py-24 text-center">
        <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#d91424] opacity-[0.06] blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-[#0099ff] opacity-[0.04] blur-[80px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex max-w-lg flex-col items-center"
        >
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-[#d91424]/10 to-[#0099ff]/10 shadow-[0_8px_32px_rgba(217,20,36,0.08)]">
            <SearchX className="h-12 w-12 text-[#d91424]" strokeWidth={1.3} />
          </div>

          <h1 className="mb-4 text-3xl font-black text-[#0f172a] sm:text-4xl">
            Business Not Found
          </h1>
          <p className="mb-10 max-w-sm text-base leading-relaxed text-[#64748b] sm:text-lg">
            Sorry, we couldn&apos;t find the business you&apos;re looking for.
          </p>

          <Link
            href="/businesses"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#d91424] to-[#b9101d] px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-[#d91424]/20 transition-all duration-300 hover:from-[#ef233c] hover:to-[#d91424] hover:shadow-xl active:scale-[0.97]"
          >
            <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-0.5" />
            Back to Businesses
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden bg-[#f8fafc] text-[#0f172a] antialiased selection:bg-[#d91424] selection:text-white">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: business.name,
            image: business.heroImage,
            description: business.shortDescription,
            url: `https://mercitrader.com/businesses/${business.slug}`,
            address: {
              "@type": "PostalAddress",
              streetAddress: business.branches?.[0]?.address || "",
              addressLocality: business.branches?.[0]?.location || "",
            },
            telephone: business.contact?.phone,
          }),
        }}
      />

      {/* ─── HERO ─── */}
      <section className="relative flex min-h-[45vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0f1d] via-[#0f172a] to-[#1e293b] px-5 py-28 text-center">
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
            <span className="font-semibold text-[#38bdf8]">
              <BrandName name={business.name} />
            </span>
          </motion.nav>

          <motion.h1
            variants={fadeInUp}
            custom={1}
            className="mb-4 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {business.name}
          </motion.h1>

          <motion.span
            variants={fadeInUp}
            custom={2}
            className="mb-4 inline-block rounded-full border border-[#0099ff]/30 bg-[#0099ff]/10 px-5 py-1.5 text-[13px] font-bold uppercase tracking-wider text-[#38bdf8]"
          >
            {business.category}
          </motion.span>

          <motion.p
            variants={fadeInUp}
            custom={3}
            className="mx-auto max-w-xl text-base leading-relaxed text-[#f8fafc]/80 sm:text-lg"
          >
            {business.shortDescription}
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

      {/* ─── OVERVIEW ─── */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                custom={0}
                className="mb-6 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl"
              >
                About {business.name}
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                custom={1}
                className="mb-8 text-[17px] leading-[1.85] text-[#475569]"
              >
                {business.description}
              </motion.p>

              {business.vision && (
                <motion.div
                  variants={fadeInUp}
                  custom={2}
                  className="mb-6 rounded-2xl border-l-[4px] border-[#0099ff] bg-[#f1f5f9] p-7"
                >
                  <div className="mb-2 flex items-center gap-2 text-[#0099ff]">
                    <Target className="h-5 w-5" />
                    <h4 className="text-base font-bold text-[#0f172a]">Our Vision</h4>
                  </div>
                  <p className="text-[15px] leading-relaxed text-[#64748b]">
                    {business.vision}
                  </p>
                </motion.div>
              )}

              {business.mission && (
                <motion.div
                  variants={fadeInUp}
                  custom={3}
                  className="rounded-2xl border-l-[4px] border-[#d91424] bg-[#f1f5f9] p-7"
                >
                  <div className="mb-2 flex items-center gap-2 text-[#d91424]">
                    <Rocket className="h-5 w-5" />
                    <h4 className="text-base font-bold text-[#0f172a]">Our Mission</h4>
                  </div>
                  <p className="text-[15px] leading-relaxed text-[#64748b]">
                    {business.mission}
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Stats Sidebar */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="flex flex-col gap-4"
            >
              <motion.div
                variants={fadeInUp}
                custom={0}
                className="group rounded-2xl border border-[#e2e8f0] bg-white p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d91424]/30 hover:shadow-[0_12px_24px_rgba(217,20,36,0.06)]"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#d91424] to-[#b9101d] text-white shadow-md shadow-[#d91424]/15 transition-all group-hover:shadow-lg">
                  <Package className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div className="text-3xl font-extrabold text-[#0f172a]">
                  {business.products.length}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                  Products
                </div>
              </motion.div>

              {business.branches && (
                <motion.div
                  variants={fadeInUp}
                  custom={1}
                  className="group rounded-2xl border border-[#e2e8f0] bg-white p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0099ff]/30 hover:shadow-[0_12px_24px_rgba(0,153,255,0.06)]"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0099ff] to-[#0077b6] text-white shadow-md shadow-[#0099ff]/15 transition-all group-hover:shadow-lg">
                    <MapPin className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div className="text-3xl font-extrabold text-[#0f172a]">
                    {business.branches.length}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                    Locations
                  </div>
                </motion.div>
              )}

              {business.services && (
                <motion.div
                  variants={fadeInUp}
                  custom={2}
                  className="group rounded-2xl border border-[#e2e8f0] bg-white p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d91424]/30 hover:shadow-[0_12px_24px_rgba(217,20,36,0.06)]"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0a0f1d] to-[#1e293b] text-white shadow-md shadow-black/15 transition-all group-hover:shadow-lg">
                    <Wrench className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div className="text-3xl font-extrabold text-[#0f172a]">
                    {business.services.length}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#64748b]">
                    Services
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="bg-[#f1f5f9] px-5 py-24">
        <div className="mx-auto max-w-6xl">
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
              className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d91424]"
            >
              What We Offer
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="mb-4 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl"
            >
              Our Products
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={2}
              className="mx-auto max-w-xl text-lg text-[#64748b]"
            >
              Explore the range of products and solutions we offer.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {business.products.map((product, i) => (
              <motion.div
                key={product.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeInUp}
                custom={i}
              >
                <div className="group flex h-full flex-col items-center rounded-2xl border border-[#e2e8f0] bg-white p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d91424]/40 hover:shadow-[0_16px_32px_rgba(217,20,36,0.08)]">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d91424]/10 to-[#0099ff]/10 text-[#d91424] transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-[#d91424] group-hover:to-[#b9101d] group-hover:text-white">
                    <Package className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-[#0f172a]">
                    {product.name}
                  </h4>
                  <p className="mb-4 flex-1 text-[14px] leading-relaxed text-[#64748b]">
                    {product.description}
                  </p>
                  {product.category && (
                    <span className="inline-block rounded-md bg-[#0099ff]/10 px-3 py-1 text-[11px] font-bold text-[#0077b6]">
                      {product.category}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      {business.services && business.services.length > 0 && (
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
                variants={fadeInUp}
                custom={0}
                className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d91424]"
              >
                What We Do
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                custom={1}
                className="text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl"
              >
                Our Services
              </motion.h2>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {business.services.map((service, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeInUp}
                  custom={i}
                >
                  <div className="group flex items-center gap-4 rounded-xl border border-[#e2e8f0] bg-white px-5 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0099ff]/30 hover:shadow-[0_8px_16px_rgba(0,153,255,0.05)]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0099ff] to-[#0077b6] text-white shadow-sm">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] font-medium text-[#334155]">
                      {service}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── HIGHLIGHTS ─── */}
      {business.highlights && business.highlights.length > 0 && (
        <section className="bg-[#f1f5f9] px-5 py-24">
          <div className="mx-auto max-w-6xl">
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
                className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d91424]"
              >
                Advantages
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                custom={1}
                className="text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl"
              >
                Why Choose Us
              </motion.h2>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {business.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeInUp}
                  custom={i}
                >
                  <div className="group flex h-full flex-col items-center rounded-2xl border border-[#e2e8f0] bg-white p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d91424]/40 hover:shadow-[0_16px_32px_rgba(217,20,36,0.08)]">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0099ff] to-[#0077b6] text-white shadow-lg shadow-[#0099ff]/20 transition-all duration-500 group-hover:scale-110">
                      <Sparkles className="h-7 w-7" strokeWidth={1.5} />
                    </div>
                    <p className="text-[15px] leading-relaxed text-[#475569]">
                      {highlight}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── BRANCHES ─── */}
      {business.branches && business.branches.length > 0 && (
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
                variants={fadeInUp}
                custom={0}
                className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d91424]"
              >
                Find Us
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                custom={1}
                className="mb-4 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl"
              >
                Our Locations
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                custom={2}
                className="mx-auto max-w-xl text-lg text-[#64748b]"
              >
                Visit us at any of our conveniently located branches.
              </motion.p>
            </motion.div>

            <div className="grid gap-8 sm:grid-cols-2">
              {business.branches.map((branch, i) => (
                <motion.div
                  key={branch.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeInUp}
                  custom={i}
                >
                  <div className="group relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#d91424]/40 hover:shadow-[0_16px_32px_rgba(217,20,36,0.08)]">
                    <div className="absolute left-0 top-0 h-1.5 w-full origin-left scale-x-0 bg-gradient-to-r from-[#d91424] to-[#0099ff] transition-transform duration-500 group-hover:scale-x-100" />

                    <h4 className="mb-6 text-xl font-bold text-[#0f172a]">
                      {branch.name}
                    </h4>

                    <div className="mb-6 space-y-4">
                      {branch.phone && (
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0099ff]/10 text-[#0099ff]">
                            <Phone className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">
                              Phone
                            </div>
                            <a
                              href={`tel:${branch.phone}`}
                              className="text-[14px] font-medium text-[#0f172a] transition-colors hover:text-[#d91424]"
                            >
                              {branch.phone}
                            </a>
                          </div>
                        </div>
                      )}

                      {branch.email && (
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0099ff]/10 text-[#0099ff]">
                            <Mail className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">
                              Email
                            </div>
                            <a
                              href={`mailto:${branch.email}`}
                              className="text-[14px] font-medium text-[#0f172a] transition-colors hover:text-[#d91424]"
                            >
                              {branch.email}
                            </a>
                          </div>
                        </div>
                      )}

                      {branch.openingHours && (
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0099ff]/10 text-[#0099ff]">
                            <Clock className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">
                              Hours
                            </div>
                            <div className="text-[14px] font-medium text-[#334155]">
                              {branch.openingHours}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {branch.mapUrl && (
                      <a
                        href={branch.mapUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border-2 border-[#e2e8f0] px-5 py-2.5 text-[13px] font-bold text-[#0f172a] transition-all duration-300 hover:border-[#d91424] hover:bg-[#d91424]/5 hover:text-[#d91424]"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View on Map
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── EXPLORE OTHER BUSINESSES ─── */}
      <section className="bg-[#f1f5f9] px-5 py-24">
        <div className="mx-auto max-w-6xl">
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
              className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d91424]"
            >
              Portfolio
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl"
            >
              Explore Other Businesses
            </motion.h2>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BUSINESSES.filter((b) => b.slug !== business.slug).map(
              (other, i) => (
                <motion.div
                  key={other.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeInUp}
                  custom={i}
                >
                  <div className="group flex h-full flex-col rounded-2xl border border-[#e2e8f0] bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d91424]/40 hover:shadow-[0_16px_32px_rgba(217,20,36,0.08)]">
                    <h4 className="mb-1 text-lg font-bold text-[#0f172a] transition-colors group-hover:text-[#d91424]">
                      <Link href={`/businesses/${other.slug}`}>
                        <BrandName name={other.name} />
                      </Link>
                    </h4>
                    <span className="mb-3 text-[11px] font-bold uppercase tracking-wider text-[#0077b6]">
                      {other.category}
                    </span>
                    <p className="mb-5 flex-1 text-[14px] leading-relaxed text-[#64748b]">
                      {other.shortDescription}
                    </p>
                    <Link
                      href={`/businesses/${other.slug}`}
                      className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-[#d91424] transition-all group-hover:gap-2.5"
                    >
                      Learn More
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ─── CONTACT CTA ─── */}
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
              Get in Touch
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              custom={1}
              className="text-lg leading-relaxed text-[#f8fafc]/80"
            >
              Have questions? We&apos;d love to hear from you.
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
            {business.contact?.email && (
              <a
                href={`mailto:${business.contact.email}`}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#d91424] to-[#b9101d] px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-[#d91424]/25 transition-all duration-300 hover:from-[#ef233c] hover:to-[#d91424] hover:shadow-xl active:scale-[0.97]"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </a>
            )}
            {business.contact?.phone && (
              <a
                href={`tel:${business.contact.phone}`}
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#d91424] to-[#b9101d] px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-[#d91424]/25 transition-all duration-300 hover:from-[#ef233c] hover:to-[#d91424] hover:shadow-xl active:scale-[0.97]"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-xl border-2 border-white/30 px-7 py-3.5 text-[15px] font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#0099ff] hover:bg-[#0099ff]/10 active:scale-[0.97]"
            >
              <MessageSquare className="h-4 w-4" />
              Contact Form
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
