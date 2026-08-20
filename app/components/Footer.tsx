"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
	Mail,
	Phone,
	MapPin,
	Building2,
	ArrowUpRight,
	ChevronRight,
	Network,
} from "lucide-react";
import { COMPANY_INFO, BUSINESSES } from "../data/businesses";
import BrandName from "./BrandName";

const footerLinks = [
	{ href: "/", label: "Home" },
	{ href: "/businesses", label: "Businesses" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

const fadeInUp: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
	}),
};

export default function Footer() {
	return (
		<footer className="relative overflow-hidden bg-[#090d16] text-[#94a3b8]">
			{/* Top accent line */}
			<div className="h-1 w-full bg-gradient-to-r from-[#d91424] via-[#0099ff] to-[#d91424]" />

			{/* Ambient background glow */}
			<div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#0099ff] opacity-[0.04] blur-[80px]" />
			<div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#d91424] opacity-[0.06] blur-[80px]" />

			<div className="relative mx-auto max-w-6xl px-5 pt-20">
				<div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
					{/* Brand Column */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUp}
						custom={0}
						className="lg:col-span-4"
					>
						<Link
							href="/"
							className="group mb-6 inline-flex items-center gap-3"
						>
							<span className="text-xl font-extrabold tracking-tight text-white">
								{COMPANY_INFO.name}
							</span>
						</Link>
						<Link
							className="sr-only"
							href="https://membran.digital/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Made with ❤️ by Membran Digital
						</Link>
						<p className="max-w-xs text-[15px] leading-relaxed text-[#94a3b8]">
							{COMPANY_INFO.description}
						</p>
					</motion.div>

					{/* Businesses */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUp}
						custom={1}
						className="lg:col-span-3"
					>
						<h5 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-white">
							<Building2 className="h-4 w-4 text-[#0099ff]" />
							Businesses
						</h5>
						<ul className="flex flex-col gap-3">
							{BUSINESSES.map((b) => (
								<li key={b.id}>
									<Link
										href={`/businesses/${b.slug}`}
										className="group inline-flex items-center gap-1.5 text-[15px] text-[#94a3b8] transition-colors duration-200 hover:text-[#d91424]"
									>
										<ChevronRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-[#d91424]" />
										<BrandName name={b.name} />
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Company */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUp}
						custom={2}
						className="lg:col-span-2"
					>
						<h5 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-white">
							<Network className="h-4 w-4 text-[#0099ff]" />
							Company
						</h5>
						<ul className="flex flex-col gap-3">
							{footerLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="group inline-flex items-center gap-1.5 text-[15px] text-[#94a3b8] transition-colors duration-200 hover:text-[#d91424]"
									>
										<ChevronRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-[#d91424]" />
										<span>{link.label}</span>
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Contact */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={fadeInUp}
						custom={3}
						className="lg:col-span-3"
					>
						<h5 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-white">
							<MapPin className="h-4 w-4 text-[#0099ff]" />
							Contact
						</h5>
						<ul className="flex flex-col gap-4">
							<li>
								<a
									href={`mailto:${COMPANY_INFO.contact.email}`}
									className="group flex items-start gap-3 text-[15px] text-[#94a3b8] transition-colors duration-200 hover:text-[#d91424]"
								>
									<div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0099ff]/10 text-[#0099ff] transition-colors group-hover:bg-[#d91424]/15 group-hover:text-[#d91424]">
										<Mail className="h-4 w-4" />
									</div>
									<span className="leading-snug">
										{COMPANY_INFO.contact.email}
									</span>
								</a>
							</li>
							<li>
								<a
									href={`tel:${COMPANY_INFO.contact.phone}`}
									className="group flex items-start gap-3 text-[15px] text-[#94a3b8] transition-colors duration-200 hover:text-[#d91424]"
								>
									<div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0099ff]/10 text-[#0099ff] transition-colors group-hover:bg-[#d91424]/15 group-hover:text-[#d91424]">
										<Phone className="h-4 w-4" />
									</div>
									<span className="leading-snug">
										{COMPANY_INFO.contact.phone}
									</span>
								</a>
							</li>
							<li>
								<div className="group flex items-start gap-3 text-[15px] text-[#94a3b8]">
									<div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0099ff]/10 text-[#0099ff]">
										<MapPin className="h-4 w-4" />
									</div>
									<Link
										href={"https://maps.app.goo.gl/iok3UeEHBpEAzRWg9"}
										className="leading-snug hover:text-[#d91424]"
									>
										{COMPANY_INFO.contact.address}
									</Link>
								</div>
							</li>
						</ul>
					</motion.div>
				</div>

				{/* Bottom Bar */}
				<div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
					<p className="text-sm text-[#64748b]">
						© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights
						reserved.
					</p>
					<Link
						href="/"
						className="group inline-flex items-center gap-2 text-sm font-semibold text-[#94a3b8] transition-colors hover:text-[#d91424]"
					>
						Back to top
						<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-[#0099ff] group-hover:text-[#d91424]" />
					</Link>
				</div>
			</div>
		</footer>
	);
}
