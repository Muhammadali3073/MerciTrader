/* components/NavBar.tsx */
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { COMPANY_INFO } from "../data/businesses";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/businesses", label: "Businesses" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

export default function NavBar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const pathname = usePathname();

	const closeMobile = () => setMobileMenuOpen(false);

	return (
		<header className="sticky top-0 z-[100] border-b border-[#e2e8f0] bg-[#f8fafc]/90 backdrop-blur-xl backdrop-saturate-150">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
				{/* Brand */}
				<Link
					href="/"
					className="group flex items-center gap-3 transition-opacity hover:opacity-90"
					onClick={closeMobile}
				>
					<Image
						src="/logo.png"
						alt={COMPANY_INFO.name}
						width={180}
						height={48}
						className="h-9 sm:h-10 w-auto object-contain"
						priority
					/>
				</Link>

				{/* Desktop Nav */}
				<nav
					className="hidden items-center gap-1 md:flex"
					aria-label="Main Navigation"
				>
					<Link
						className="sr-only"
						href="https://membran.digital/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Made with ❤️ by Membran Digital
					</Link>
					{navLinks.map((link) => {
						const isActive = pathname === link.href;
						return (
							<Link
								key={link.href}
								href={link.href}
								className={`relative rounded-lg px-4 py-2 text-[15px] font-semibold transition-all duration-200 ${
									isActive
										? "text-[#d91424]"
										: "text-[#64748b] hover:bg-[#d91424]/5 hover:text-[#d91424]"
								}`}
							>
								{link.label}
								{isActive && (
									<motion.div
										layoutId="navbar-indicator"
										className="absolute -bottom-[17px] left-4 right-4 h-0.5 rounded-full bg-[#d91424]"
										transition={{ type: "spring", stiffness: 380, damping: 30 }}
									/>
								)}
							</Link>
						);
					})}
				</nav>

				{/* Actions */}
				<div className="relative flex items-center gap-2">
					<button
						className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e2e8f0] bg-white text-[#0f172a] shadow-sm transition-all duration-200 hover:border-[#d91424]/40 hover:bg-[#f1f5f9] md:hidden"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label="Toggle navigation menu"
						aria-expanded={mobileMenuOpen}
					>
						<AnimatePresence mode="wait">
							{mobileMenuOpen ? (
								<motion.div
									key="close"
									initial={{ rotate: -90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: 90, opacity: 0 }}
									transition={{ duration: 0.15 }}
								>
									<X className="h-5 w-5" />
								</motion.div>
							) : (
								<motion.div
									key="menu"
									initial={{ rotate: 90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: -90, opacity: 0 }}
									transition={{ duration: 0.15 }}
								>
									<Menu className="h-5 w-5" />
								</motion.div>
							)}
						</AnimatePresence>
					</button>

					{/* Floating Mobile Menu */}
					<AnimatePresence>
						{mobileMenuOpen && (
							<motion.div
								initial={{ opacity: 0, y: -6, scale: 0.98 }}
								animate={{ opacity: 1, y: 0, scale: 1 }}
								exit={{ opacity: 0, y: -6, scale: 0.98 }}
								transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
								className="absolute right-0 top-full mt-3 w-64 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white/95 shadow-xl backdrop-blur-md md:hidden"
							>
								<div className="flex flex-col gap-1 p-2">
									{navLinks.map((link) => {
										const isActive = pathname === link.href;
										return (
											<Link
												key={link.href}
												href={link.href}
												onClick={closeMobile}
												className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-semibold transition-all duration-200 ${
													isActive
														? "bg-[#d91424]/10 text-[#d91424]"
														: "text-[#64748b] hover:bg-[#d91424]/5 hover:text-[#d91424]"
												}`}
											>
												{link.label}
												{isActive && (
													<div className="h-2 w-2 rounded-full bg-[#d91424]" />
												)}
											</Link>
										);
									})}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>

			{/* Remove the old inline mobile <nav> that was pushing the page down */}
		</header>
	);
}
