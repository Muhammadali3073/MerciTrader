"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, MapPin, Mail, Phone, ChevronRight, Send, Clock, HelpCircle } from "lucide-react";
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
    a: "Please contact the specific business directly through their contact information or fill out our contact form and we'll direct your inquiry accordingly.",
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

export default function ContactPage() {
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
            Have questions? We&apos;d love to hear from you. Contact us with any questions or inquiries.
          </motion.p>
        </motion.div>

        {/* Bottom curve */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 60L1440 60L1440 0C1440 0 1140 60 720 60C300 60 0 0 0 0L0 60Z" fill="#f8f7f4" />
          </svg>
        </div>
      </section>

      {/* ─── CONTACT INFO & FORM ─── */}
      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
            {/* LEFT: Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.div
                // @ts-expect-error trust me bro
                variants={fadeInUp}
                custom={0}
                className="mb-10"
              >
                <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#d4a574]">Reach Out</span>
                <h2 className="mb-3 text-3xl font-black tracking-tight text-[#1a472a] sm:text-4xl">
                  {COMPANY_INFO.name} Headquarters
                </h2>
                <p className="text-[17px] leading-relaxed text-[#8b8b8b]">
                  Reach out to us through any of the following methods:
                </p>
              </motion.div>

              <motion.div
                // @ts-expect-error trust me bro

                variants={fadeInUp}
                custom={1}
                className="mb-10 flex flex-col gap-4"
              >
                {COMPANY_INFO.contact.address && (
                  <div className="group flex gap-4 rounded-2xl border border-[#e0ddd8] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4a574]/30 hover:shadow-[0_8px_16px_rgba(0,0,0,0.05)]">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a472a] to-[#2d6a43] text-white shadow-md shadow-[#1a472a]/15">
                      <MapPin className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#1a472a]">Address</h4>
                      <Link
                        href={"https://maps.app.goo.gl/iok3UeEHBpEAzRWg9"}
                        className="text-[14px] leading-relaxed text-[#8b8b8b] hover:text-[#d4a574]"
                      >
                        {COMPANY_INFO.contact.address}
                      </Link>
                    </div>
                  </div>
                )}

                {COMPANY_INFO.contact.email && (
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="group flex gap-4 rounded-2xl border border-[#e0ddd8] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4a574]/30 hover:shadow-[0_8px_16px_rgba(0,0,0,0.05)]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4a574] to-[#e8c59f] text-[#0f1513] shadow-md shadow-[#d4a574]/15">
                      <Mail className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#1a472a]">Email</h4>
                      <p className="text-[14px] font-medium text-[#1a472a] transition-colors group-hover:text-[#d4a574]">
                        {COMPANY_INFO.contact.email}
                      </p>
                    </div>
                  </a>
                )}

                {COMPANY_INFO.contact.phone && (
                  <a
                    href={`tel:${COMPANY_INFO.contact.phone}`}
                    className="group flex gap-4 rounded-2xl border border-[#e0ddd8] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4a574]/30 hover:shadow-[0_8px_16px_rgba(0,0,0,0.05)]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a472a] to-[#2d6a43] text-white shadow-md shadow-[#1a472a]/15">
                      <Phone className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#1a472a]">Phone</h4>
                      <p className="text-[14px] font-medium text-[#1a472a] transition-colors group-hover:text-[#d4a574]">
                        {COMPANY_INFO.contact.phone}
                      </p>
                    </div>
                  </a>
                )}
              </motion.div>

              {/* Business Contacts */}
              <motion.div
                // @ts-expect-error trust me bro
                variants={fadeInUp}
                custom={2}
              >
                <h3 className="mb-5 text-lg font-bold text-[#1a472a]">Business Contacts</h3>
                <div className="flex flex-col gap-4">
                  {BUSINESSES.map((b) => (
                    <div
                      key={b.id}
                      className="group rounded-xl border border-[#e0ddd8] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d4a574]/30 hover:shadow-[0_8px_16px_rgba(0,0,0,0.05)]"
                    >
                      <h5 className="mb-2 text-[15px] font-bold text-[#1a472a] transition-colors group-hover:text-[#d4a574]">
                        <Link href={`/businesses/${b.slug}`}>{b.name}</Link>
                      </h5>
                      <div className="mb-3 space-y-1">
                        {b.contact?.email && (
                          <a
                            href={`mailto:${b.contact.email}`}
                            className="flex items-center gap-2 text-[13px] text-[#8b8b8b] transition-colors hover:text-[#d4a574]"
                          >
                            <Mail className="h-3.5 w-3.5" />
                            {b.contact.email}
                          </a>
                        )}
                        {b.contact?.phone && (
                          <a
                            href={`tel:${b.contact.phone}`}
                            className="flex items-center gap-2 text-[13px] text-[#8b8b8b] transition-colors hover:text-[#d4a574]"
                          >
                            <Phone className="h-3.5 w-3.5" />
                            {b.contact.phone}
                          </a>
                        )}
                      </div>
                      <Link
                        href={`/businesses/${b.slug}`}
                        className="inline-flex items-center gap-1 text-[13px] font-bold text-[#1a472a] transition-all group-hover:gap-1.5 group-hover:text-[#d4a574]"
                      >
                        Learn More
                        <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT: Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <motion.div
                // @ts-expect-error trust me bro

                variants={fadeInUp}
                custom={0}
                className="sticky top-28 rounded-2xl border border-[#e0ddd8] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:p-10"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a472a] to-[#2d6a43] text-white shadow-md">
                    <Send className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-[#1a472a]">Send us a Message</h2>
                  </div>
                </div>

                <p className="mb-8 text-[14px] leading-relaxed text-[#8b8b8b]">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                <form action="#" method="post" className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[13px] font-bold uppercase tracking-wider text-[#1a472a]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      aria-label="Your name"
                      className="rounded-xl border border-[#e0ddd8] bg-[#fafaf8] px-4 py-3 text-[15px] text-[#0f1513] placeholder:text-[#b0b0b0] transition-all focus:border-[#d4a574] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#d4a574]/10"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[13px] font-bold uppercase tracking-wider text-[#1a472a]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      aria-label="Email address"
                      className="rounded-xl border border-[#e0ddd8] bg-[#fafaf8] px-4 py-3 text-[15px] text-[#0f1513] placeholder:text-[#b0b0b0] transition-all focus:border-[#d4a574] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#d4a574]/10"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="business" className="text-[13px] font-bold uppercase tracking-wider text-[#1a472a]">
                      Which Business Are You Inquiring About? *
                    </label>
                    <div className="relative">
                      <select
                        id="business"
                        name="business"
                        required
                        aria-label="Select business"
                        className="w-full appearance-none rounded-xl border border-[#e0ddd8] bg-[#fafaf8] px-4 py-3 pr-10 text-[15px] text-[#0f1513] transition-all focus:border-[#d4a574] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#d4a574]/10"
                      >
                        <option value="general">General MerciTrader Inquiry</option>
                        {BUSINESSES.map((b) => (
                          <option key={b.id} value={b.slug}>
                            {b.name}
                          </option>
                        ))}
                      </select>
                      <ChevronRight className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 rotate-90 text-[#8b8b8b]" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[13px] font-bold uppercase tracking-wider text-[#1a472a]">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us how we can help..."
                      rows={5}
                      aria-label="Your message"
                      className="resize-y rounded-xl border border-[#e0ddd8] bg-[#fafaf8] px-4 py-3 text-[15px] text-[#0f1513] placeholder:text-[#b0b0b0] transition-all focus:border-[#d4a574] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#d4a574]/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#1a472a] px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-[#1a472a]/15 transition-all duration-300 hover:bg-[#2d6a43] hover:shadow-xl active:scale-[0.97]"
                  >
                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    Send Message
                  </button>
                </form>

                <div className="mt-6 flex items-center justify-center gap-2 text-[12px] text-[#8b8b8b]">
                  <Clock className="h-3.5 w-3.5" />
                  We typically respond within 24-48 business hours.
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
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
    </main>
  );
}
