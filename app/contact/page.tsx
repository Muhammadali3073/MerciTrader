"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    MessageSquare,
    MapPin,
    Mail,
    Phone,
    Clock,
    HelpCircle,
    ArrowRight,
    ExternalLink,
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

const faqs = [
    {
        q: "What businesses does MerciTrader operate?",
        a: (
            <>
                MerciTrader is a diversified business group operating{" "}
                <Link
                    href="/businesses/al-sadiq-bricks-kiln"
                    className="font-semibold text-[#1a472a] underline decoration-[#d4a574]/40 underline-offset-4 transition-colors hover:text-[#d4a574]"
                >
                    AL-SADIQ BRICKS KILN
                </Link>
                ,{" "}
                <Link
                    href="/businesses/merci-mart"
                    className="font-semibold text-[#1a472a] underline decoration-[#d4a574]/40 underline-offset-4 transition-colors hover:text-[#d4a574]"
                >
                    Merci Mart
                </Link>
                , and{" "}
                <Link
                    href="/businesses/merci-rice"
                    className="font-semibold text-[#1a472a] underline decoration-[#d4a574]/40 underline-offset-4 transition-colors hover:text-[#d4a574]"
                >
                    Merci Rice
                </Link>
                .
            </>
        ),
    },
    {
        q: "How can I place an order?",
        a: "Please contact the specific business directly through their contact information or reach out via phone/email and we'll direct your inquiry accordingly.",
    },
    {
        q: "Do you offer bulk pricing?",
        a: "Yes, our businesses offer wholesale and bulk pricing options. Contact us for specific quotes and terms.",
    },
    {
        q: "What areas do you serve?",
        a: (
            <>
                Our businesses operate through multiple locations. Check the{" "}
                <Link
                    href="/businesses"
                    className="font-semibold text-[#1a472a] underline decoration-[#d4a574]/40 underline-offset-4 transition-colors hover:text-[#d4a574]"
                >
                    Businesses page
                </Link>{" "}
                for locations and service areas.
            </>
        ),
    },
    {
        q: "How do you ensure quality?",
        a: "Quality is central to our operations. We maintain strict quality control standards across all our products and services.",
    },
    {
        q: "Can I visit your facilities?",
        a: "Yes, we welcome business visits. Please contact the relevant business to arrange a facility tour.",
    },
];

// Gather all branches across all businesses for the locations section
const allBranches = BUSINESSES.flatMap((b) =>
    (b.branches || []).map((branch) => ({ ...branch, businessName: b.name, businessSlug: b.slug })),
);

export default function ContactPage() {
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

                <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10 mx-auto max-w-3xl">
                    <motion.div
                        // @ts-expect-error trust me bro
                        variants={fadeInUp}
                        custom={0}
                        className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#d4a574]/20 bg-[#d4a574]/10 px-5 py-2 text-sm font-semibold text-[#e8c59f] backdrop-blur-md"
                    >
                        <MessageSquare className="h-4 w-4" />
                        <span>Contact Us</span>
                    </motion.div>

                    <motion.h1
                        // @ts-expect-error trust me bro
                        variants={fadeInUp}
                        custom={1}
                        className="mb-4 text-4xl font-black tracking-tight text-[#f8f7f4] sm:text-5xl md:text-6xl"
                    >
                        Get in Touch
                    </motion.h1>

                    <motion.p
                        // @ts-expect-error trust me bro
                        variants={fadeInUp}
                        custom={2}
                        className="mx-auto max-w-xl text-base leading-relaxed text-[#f8f7f4]/75 sm:text-lg"
                    >
                        Have questions? We&apos;d love to hear from you. Reach out through any of our channels below.
                    </motion.p>
                </motion.div>

                <div className="absolute -bottom-1 left-0 right-0">
                    <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
                        <path d="M0 60L1440 60L1440 0C1440 0 1140 60 720 60C300 60 0 0 0 0L0 60Z" fill="#f8f7f4" />
                    </svg>
                </div>
            </section>

            {/* ─── CONTACT CHANNELS ─── */}
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
                            Connect
                        </motion.span>
                        <motion.h2
                            // @ts-expect-error trust me bro
                            variants={fadeInUp}
                            custom={1}
                            className="text-3xl font-black tracking-tight text-[#1a472a] sm:text-4xl"
                        >
                            Reach Out Directly
                        </motion.h2>
                    </motion.div>

                    <div className="grid gap-6 sm:grid-cols-3">
                        {/* Phone */}
                        <motion.a
                            href={`tel:${COMPANY_INFO.contact.phone}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            // @ts-expect-error trust me bro

                            variants={fadeInUp}
                            custom={0}
                            className="group relative flex flex-col items-center rounded-2xl border border-[#e0ddd8] bg-white p-10 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d4a574]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                        >
                            <div className="absolute left-0 top-0 h-1.5 w-full origin-left scale-x-0 bg-gradient-to-r from-[#d4a574] to-[#e8c59f] transition-transform duration-500 group-hover:scale-x-100" />
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a472a] to-[#2d6a43] text-white shadow-lg shadow-[#1a472a]/20 transition-all duration-500 group-hover:scale-110">
                                <Phone className="h-7 w-7" strokeWidth={1.5} />
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-[#1a472a]">Phone</h3>
                            <p className="mb-1 text-[15px] font-semibold text-[#d4a574] transition-transform group-hover:scale-105">
                                {COMPANY_INFO.contact.phone}
                            </p>
                            <p className="text-[13px] text-[#8b8b8b]">Sat–Thu: 8:00 AM – 6:00 PM; Fri: Closed.</p>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            href={`mailto:${COMPANY_INFO.contact.email}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            // @ts-expect-error trust me bro

                            variants={fadeInUp}
                            custom={1}
                            className="group relative flex flex-col items-center rounded-2xl border border-[#e0ddd8] bg-white p-10 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d4a574]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                        >
                            <div className="absolute left-0 top-0 h-1.5 w-full origin-left scale-x-0 bg-gradient-to-r from-[#d4a574] to-[#e8c59f] transition-transform duration-500 group-hover:scale-x-100" />
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d4a574] to-[#e8c59f] text-[#0f1513] shadow-lg shadow-[#d4a574]/20 transition-all duration-500 group-hover:scale-110">
                                <Mail className="h-7 w-7" strokeWidth={1.5} />
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-[#1a472a]">Email</h3>
                            <p className="mb-1 text-[15px] font-semibold text-[#d4a574] transition-transform group-hover:scale-105">
                                {COMPANY_INFO.contact.email}
                            </p>
                            <p className="text-[13px] text-[#8b8b8b]">We reply within 24–48h</p>
                        </motion.a>

                        {/* Address */}
                        <motion.a
                            href={COMPANY_INFO.contact.mapUrl || "https://maps.app.goo.gl/iok3UeEHBpEAzRWg9"}
                            target="_blank"
                            rel="noreferrer"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            // @ts-expect-error trust me bro

                            variants={fadeInUp}
                            custom={2}
                            className="group relative flex flex-col items-center rounded-2xl border border-[#e0ddd8] bg-white p-10 text-center shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d4a574]/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                        >
                            <div className="absolute left-0 top-0 h-1.5 w-full origin-left scale-x-0 bg-gradient-to-r from-[#d4a574] to-[#e8c59f] transition-transform duration-500 group-hover:scale-x-100" />
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1a472a] to-[#2d6a43] text-white shadow-lg shadow-[#1a472a]/20 transition-all duration-500 group-hover:scale-110">
                                <MapPin className="h-7 w-7" strokeWidth={1.5} />
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-[#1a472a]">Visit Us</h3>
                            <p className="mb-1 max-w-[220px] text-[15px] font-semibold text-[#d4a574] transition-transform group-hover:scale-105">
                                {COMPANY_INFO.contact.address}
                            </p>
                            <p className="text-[13px] text-[#8b8b8b]">Headquarters • Open in Maps</p>
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* ─── ALL LOCATIONS ─── */}
            {allBranches.length > 0 && (
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
                                Find Us
                            </motion.span>
                            <motion.h2
                                // @ts-expect-error trust me bro

                                variants={fadeInUp}
                                custom={1}
                                className="mb-4 text-3xl font-black tracking-tight text-[#1a472a] sm:text-4xl"
                            >
                                Our Locations
                            </motion.h2>
                            <motion.p
                                // @ts-expect-error trust me bro
                                variants={fadeInUp}
                                custom={2}
                                className="mx-auto max-w-xl text-lg text-[#8b8b8b]"
                            >
                                Visit any of our branches across the region.
                            </motion.p>
                        </motion.div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {allBranches.map((branch, i) => (
                                <motion.div
                                    key={branch.id}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-40px" }}
                                    // @ts-expect-error trust me bro

                                    variants={fadeInUp}
                                    custom={i}
                                >
                                    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e0ddd8] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:border-[#d4a574]/40 hover:shadow-[0_16px_32px_rgba(0,0,0,0.07)]">
                                        <div className="absolute left-0 top-0 h-1.5 w-full origin-left scale-x-0 bg-gradient-to-r from-[#d4a574] to-[#e8c59f] transition-transform duration-500 group-hover:scale-x-100" />

                                        <div className="p-7">

                                            <h4 className="mb-1 text-lg font-bold text-[#1a472a]">{branch.name}</h4>


                                            <div className="mb-5 space-y-3">
                                                {branch.phone && (
                                                    <div className="flex items-center gap-3">
                                                        <Phone className="h-4 w-4 shrink-0 text-[#d4a574]" />
                                                        <a
                                                            href={`tel:${branch.phone}`}
                                                            className="text-[13px] font-medium text-[#1a472a] transition-colors hover:text-[#d4a574]"
                                                        >
                                                            {branch.phone}
                                                        </a>
                                                    </div>
                                                )}
                                                {branch.openingHours && (
                                                    <div className="flex items-start gap-3">
                                                        <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#d4a574]" />
                                                        <span className="text-[13px] leading-relaxed text-[#5a5a5a]">{branch.openingHours}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="mt-auto flex gap-3">
                                                {branch.mapUrl && (
                                                    <a
                                                        href={branch.mapUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-1.5 rounded-lg border-2 border-[#e0ddd8] px-4 py-2 text-[12px] font-bold text-[#1a472a] transition-all hover:border-[#d4a574] hover:bg-[#d4a574]/5"
                                                    >
                                                        <ExternalLink className="h-3.5 w-3.5" />
                                                        View Map
                                                    </a>
                                                )}
                                                <Link
                                                    href={`/businesses/${branch.businessSlug}`}
                                                    className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#1a472a] transition-all hover:gap-2 hover:text-[#d4a574]"
                                                >
                                                    Business Details
                                                    <ArrowRight className="h-3.5 w-3.5" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── FAQ ─── */}
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
                            Support
                        </motion.span>
                        <motion.h2
                            // @ts-expect-error trust me bro
                            variants={fadeInUp}
                            custom={1}
                            className="text-3xl font-black tracking-tight text-[#1a472a] sm:text-4xl"
                        >
                            Frequently Asked Questions
                        </motion.h2>
                    </motion.div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-40px" }}
                                // @ts-expect-error trust me bro

                                variants={fadeInUp}
                                custom={i}
                            >
                                <div className="group flex h-full flex-col rounded-2xl border border-[#e0ddd8] bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d4a574]/40 hover:shadow-[0_16px_32px_rgba(0,0,0,0.08)]">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a472a]/10 to-[#2d6a43]/5 text-[#1a472a] transition-colors group-hover:bg-gradient-to-br group-hover:from-[#d4a574]/20 group-hover:to-[#e8c59f]/10 group-hover:text-[#d4a574]">
                                        <HelpCircle className="h-5 w-5" strokeWidth={1.5} />
                                    </div>
                                    <h4 className="mb-3 text-[15px] font-bold leading-snug text-[#1a472a]">{faq.q}</h4>
                                    <p className="flex-1 text-[14px] leading-relaxed text-[#6b6b6b]">{faq.a}</p>
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
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                        <motion.h2
                            // @ts-expect-error trust me bro
                            variants={fadeInUp}
                            custom={0}
                            className="mb-4 text-3xl font-black text-[#f8f7f4] sm:text-4xl"
                        >
                            Ready to Connect?
                        </motion.h2>
                        <motion.p
                            // @ts-expect-error trust me bro
                            variants={fadeInUp}
                            custom={1}
                            className="text-lg leading-relaxed text-[#f8f7f4]/75"
                        >
                            Explore our businesses or reach out directly — we&apos;re here to help.
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
                            Explore Businesses
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                        <a
                            href={`tel:${COMPANY_INFO.contact.phone}`}
                            className="inline-flex items-center gap-2.5 rounded-xl border-2 border-[#f8f7f4]/30 px-8 py-4 text-[15px] font-bold text-[#f8f7f4] backdrop-blur-sm transition-all duration-300 hover:border-[#f8f7f4]/60 hover:bg-[#f8f7f4]/10 active:scale-[0.97]"
                        >
                            <Phone className="h-4 w-4" />
                            Call Now
                        </a>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}