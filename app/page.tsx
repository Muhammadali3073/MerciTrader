"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
// import Image from "next/image"; // Removed unused import
import { COMPANY_INFO, BUSINESSES } from "./data/businesses";

export default function Home() {
  const menuRef = useRef<HTMLDetailsElement | null>(null);
  const [navSolid, setNavSolid] = useState(false);

  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const coreValues = [
    { icon: "✓", title: "Quality", desc: "Excellence in everything we do" },
    { icon: "🤝", title: "Integrity", desc: "Honest and ethical practices" },
    { icon: "⚡", title: "Reliability", desc: "Consistent and dependable service" },
    { icon: "👥", title: "Customer Focus", desc: "Your success is our priority" },
  ];

  return (
    <main className="mercitrader-site">
      <header className={`navbar ${navSolid ? "solid" : ""}`}>
        <div className="nav-container">
          <Link href="/" className="nav-brand">
            <div className="logo-mark">MT</div>
            <span className="brand-name">{COMPANY_INFO.name}</span>
          </Link>

          <nav className="nav-desktop">
            <Link href="/" className="nav-brand">Home</Link>
            <Link href="/about" className="nav-brand">About</Link>
            <Link href="/businesses" className="nav-brand">Businesses</Link>
            <Link href="/businesses/details" className="nav-brand">Details</Link>
            <Link href="/contact" className="nav-brand">Contact</Link>
          </nav>

          <details ref={menuRef} className="nav-menu">
            <summary className="menu-toggle" aria-label="Toggle menu">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" width="24" height="24"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>
            </summary>
            <div className="menu-items">
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
              <Link href="/businesses" onClick={closeMenu}>
                Businesses
              </Link>
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </div>
          </details>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1 className="hero-title" style={{ color: "var(--primary)" }}>MerciTrader</h1>
          <p className="hero-subtitle" style={{ color: "var(--primary)" }}>Building businesses. Delivering quality. Growing together.</p>
          <p className="hero-description" style={{ color: "var(--primary)" }}>MerciTrader is a diversified business group operating multiple companies including Al-Sadiq Bricks and Al-Sadiq Rice. We are committed to quality, reliability, and long-term partnerships.</p>

          <div className="hero-ctas">
            <Link href="/businesses" className="btn btn-primary">
              Explore Our Businesses →
            </Link>
            <Link href="/contact" className="nav-brand">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* BUSINESS GROUP OVERVIEW */}
      <section className="section section-businesses">
        <div className="container">
          <div className="section-header">
            <h2>Our Business Group</h2>
            <p className="section-subtitle">
              MerciTrader operates multiple successful businesses, each committed to quality and customer excellence.
            </p>
          </div>

          <div className="businesses-grid">
            {BUSINESSES.map((business) => (
              <div key={business.id} className="business-card">
                <div className="card-accent"></div>
                <h3>{business.name}</h3>
                <p className="business-category">{business.category}</p>
                <p className="business-desc">{business.shortDescription}</p>
                <div className="business-meta">
                  <span className="meta-item">
                    📦 {business.products.length} Products
                  </span>
                  {business.branches && (
                    <span className="meta-item">
                      📍 {business.branches.length} Locations
                    </span>
                  )}
                </div>
                <Link href={`/businesses/${business.slug}`} className="card-link">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MERCITRADER */}
      <section className="section section-values alt-bg">
        <div className="container">
          <div className="section-header">
            <h2>Why MerciTrader</h2>
            <p className="section-subtitle">
              We believe in building lasting relationships through quality, integrity, and innovation.
            </p>
          </div>

          <div className="values-grid">
            {coreValues.map((value, idx) => (
              <div key={idx} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROUP STRUCTURE */}
      <section className="section section-structure">
        <div className="container">
          <div className="section-header">
            <h2>Our Structure</h2>
            <p className="section-subtitle">
              One parent company. Multiple specialized businesses. United by quality and values.
            </p>
          </div>

          <div className="structure-visual">
            <div className="structure-item parent">
              <div className="structure-label">MerciTrader</div>
              <p>We&#39;d love to hear from you.</p>
            </div>

            <div className="structure-children">
              {BUSINESSES.map((business) => (
                <div key={business.id} className="structure-child">
                  <div className="structure-label">{business.name}</div>
                  <p>{business.category}</p>
                  {business.branches && business.branches.length > 0 && (
                    <div className="branches-list">
                      {business.branches.map((branch) => (
                        <span key={branch.id} className="branch-badge">
                          {branch.location}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section section-cta">
        <div className="container cta-content">
          <div className="cta-text">
            <h2>Ready to Partner with MerciTrader?</h2>
            <p>
              We couldn&#39;t find the business you&#39;re looking for. Whether it&#39;s construction materials, premium rice, or other opportunities, let us know how we can help. Thank you! We&#39;ve received your message and will be in touch soon.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary btn-large">
            Contact Us
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-section">
            <h4>{COMPANY_INFO.name}</h4>
            <p>{COMPANY_INFO.description}</p>
          </div>

          <div className="footer-section">
            <h5>Businesses</h5>
            <ul>
              {BUSINESSES.map((b) => (
                <li key={b.id}>
                  <Link href={`/businesses/${b.slug}`}>{b.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h5>Company</h5>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/businesses">Businesses</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>Contact</h5>
            <p>
              Email:{" "}
              <a href={`mailto:${COMPANY_INFO.contact.email}`}>{COMPANY_INFO.contact.email}</a>
            </p>
            <p>
              Phone:{" "}
              <a href={`tel:${COMPANY_INFO.contact.phone}`}>{COMPANY_INFO.contact.phone}</a>
            </p>
            <p>{COMPANY_INFO.contact.address}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </footer>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :root {
          --primary: #1a472a;
          --primary-light: #2d6a43;
          --accent: #d4a574;
          --accent-light: #e8c59f;
          --white: #f8f7f4;
          --dark: #0f1513;
          --gray: #8b8b8b;
          --gray-light: #e8e8e8;
          --border: #e0ddd8;
        }

        body,
        html {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue",
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .mercitrader-site {
          background: var(--white);
          color: var(--dark);
          min-height: 100vh;
        }

        /* NAVBAR */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: transparent;
          transition: all 0.3s ease;
          border-bottom: 1px solid transparent;
        }

        .navbar.solid {
          background: rgba(248, 247, 244, 0.95);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 20px;
          font-weight: 800;
          color: var(--primary);
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .logo-mark {
          width: 40px;
          height: 40px;
          background: var(--primary);
          color: var(--white);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 900;
        }

        .nav-desktop {
          display: none;
          gap: 32px;
          align-items: center;
        }

        @media (min-width: 768px) {
          .nav-desktop {
            display: flex;
          }
          .nav-menu {
            display: none;
          }
        }

        .nav-desktop a {
          color: var(--dark);
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: color 0.2s;
          position: relative;
        }

        .nav-desktop a:hover {
          color: var(--primary);
        }

        .nav-desktop a::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width 0.2s;
        }

        .nav-desktop a:hover::after {
          width: 100%;
        }

        /* Mobile Menu */
        .nav-menu {
          display: block;
        }

        .menu-toggle {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: var(--primary);
          padding: 8px;
        }

        .menu-items {
          position: absolute;
          top: 66px;
          right: 20px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          width: 200px;
          display: grid;
          gap: 8px;
          padding: 12px;
          z-index: 50;
        }

        .menu-items a {
          padding: 10px 12px;
          text-decoration: none;
          color: var(--dark);
          border-radius: 8px;
          transition: background 0.2s;
          font-size: 14px;
          font-weight: 500;
        }

        .menu-items a:hover {
          background: #f0f0f0;
        }

        /* HERO SECTION */
        .hero {
          position: relative;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 80px 20px;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          z-index: -1;
        }

        .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 80%, rgba(212, 165, 116, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(212, 165, 116, 0.1) 0%, transparent 50%);
          z-index: -1;
        }

        .hero-content {
          text-align: center;
          max-width: 700px;
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: var(--white);
          margin-bottom: 16px;
          letter-spacing: -1px;
        }

        .hero-subtitle {
          font-size: 24px;
          font-weight: 600;
          color: var(--accent-light);
          margin-bottom: 12px;
        }

        .hero-description {
          font-size: 18px;
          color: rgba(248, 247, 244, 0.9);
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* BUTTONS */
        .btn {
          padding: 12px 28px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
          display: inline-block;
        }

        .btn-primary {
          background: var(--accent);
          color: var(--dark);
        }

        .btn-primary:hover {
          background: var(--accent-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(212, 165, 116, 0.2);
        }

        .btn-secondary {
          background: transparent;
          color: var(--white);
          border: 2px solid var(--accent);
        }

        .btn-secondary:hover {
          background: rgba(212, 165, 116, 0.1);
          transform: translateY(-2px);
        }

        .btn-large {
          padding: 14px 36px;
          font-size: 16px;
        }

        /* SECTIONS */
        .section {
          padding: 80px 20px;
        }

        .alt-bg {
          background: #fafaf8;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          color: var(--primary);
          margin-bottom: 12px;
          font-weight: 800;
        }

        .section-subtitle {
          font-size: 18px;
          color: var(--gray);
          line-height: 1.6;
          max-width: 500px;
          margin: 0 auto;
        }

        /* BUSINESSES GRID */
        .businesses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 28px;
          margin-top: 48px;
        }

        .business-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 32px;
          position: relative;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .business-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(212, 165, 116, 0.05), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .business-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }

        .business-card:hover::before {
          opacity: 1;
        }

        .card-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--accent);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .business-card:hover .card-accent {
          transform: scaleX(1);
        }

        .business-card h3 {
          font-size: 22px;
          color: var(--primary);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .business-category {
          display: inline-block;
          background: rgba(212, 165, 116, 0.1);
          color: var(--primary-light);
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 16px;
        }

        .business-desc {
          color: var(--gray);
          line-height: 1.6;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .business-meta {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
          font-size: 13px;
        }

        .meta-item {
          color: var(--gray);
        }

        .card-link {
          display: inline-block;
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s;
          font-size: 14px;
        }

        .card-link:hover {
          color: var(--accent);
        }

        /* VALUES GRID */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 28px;
        }

        .value-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
        }

        .value-icon {
          font-size: 40px;
          margin-bottom: 16px;
        }

        .value-card h4 {
          font-size: 18px;
          color: var(--primary);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .value-card p {
          color: var(--gray);
          font-size: 14px;
          line-height: 1.6;
        }

        /* STRUCTURE SECTION */
        .structure-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          margin-top: 48px;
        }

        .structure-item {
          background: var(--white);
          border: 2px solid var(--primary);
          border-radius: 12px;
          padding: 24px 32px;
          text-align: center;
          min-width: 280px;
        }

        .structure-item.parent {
          border: 3px solid var(--primary);
          background: linear-gradient(135deg, rgba(26, 71, 42, 0.05), transparent);
        }

        .structure-label {
          font-size: 20px;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 4px;
        }

        .structure-item p {
          color: var(--gray);
          font-size: 13px;
        }

        .structure-children {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 28px;
          width: 100%;
        }

        .structure-child {
          background: #fafaf8;
          border: 1px solid var(--accent);
          border-radius: 12px;
          padding: 20px;
          position: relative;
        }

        .structure-child::before {
          content: "";
          position: absolute;
          top: -28px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 28px;
          background: var(--accent);
        }

        .branches-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
          justify-content: center;
        }

        .branch-badge {
          background: rgba(212, 165, 116, 0.15);
          color: var(--primary-light);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
        }

        /* CTA SECTION */
        .section-cta {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          color: var(--white);
          text-align: center;
        }

        .cta-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        .cta-text h2 {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          color: var(--white);
          margin-bottom: 16px;
          font-weight: 800;
        }

        .cta-text p {
          font-size: 18px;
          color: rgba(248, 247, 244, 0.9);
          line-height: 1.6;
          max-width: 500px;
        }

        /* FOOTER */
        .site-footer {
          background: var(--dark);
          color: var(--gray-light);
          padding: 60px 20px 20px;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section h4,
        .footer-section h5 {
          color: var(--white);
          font-size: 16px;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .footer-section p {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 8px;
        }

        .footer-section a {
          color: var(--gray-light);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-section a:hover {
          color: var(--accent);
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section li {
          margin-bottom: 8px;
        }

        .footer-section li a {
          font-size: 14px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(248, 247, 244, 0.1);
          padding-top: 20px;
          text-align: center;
          font-size: 13px;
          color: var(--gray);
        }

        /* ANIMATIONS */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .hero {
            min-height: 500px;
            padding: 60px 20px;
          }

          .section {
            padding: 60px 20px;
          }

          .hero-ctas {
            gap: 12px;
          }

          .btn {
            width: 100%;
          }

          .cta-content {
            width: 100%;
          }

          .cta-content .btn {
            width: auto;
          }
        }
      `}</style>
    </main>
  );
}
