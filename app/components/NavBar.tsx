"use client";

import { useState } from "react";
import Link from "next/link";
import { COMPANY_INFO } from "../data/businesses";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobile = () => setMobileMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-brand" onClick={closeMobile}>
          <div className="logo-mark">MT</div>
          <span className="brand-name">{COMPANY_INFO.name}</span>
        </Link>
        <nav className="nav-desktop" aria-label="Main Navigation">
          <Link href="/">Home</Link>
          <Link href="/businesses">Businesses</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav className="nav-mobile open" aria-label="Mobile Navigation">
          <Link href="/" onClick={closeMobile}>Home</Link>
          <Link href="/businesses" onClick={closeMobile}>Businesses</Link>
          <Link href="/about" onClick={closeMobile}>About</Link>
          <Link href="/contact" onClick={closeMobile}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
