"use client";

import Link from "next/link";
import { BUSINESSES } from "./data/businesses";

export default function Home() {
  const coreValues = [
    { icon: "✓", title: "Quality", desc: "Excellence in everything we do" },
    { icon: "🤝", title: "Integrity", desc: "Honest and ethical practices" },
    { icon: "⚡", title: "Reliability", desc: "Consistent and dependable service" },
    { icon: "👥", title: "Customer Focus", desc: "Your success is our priority" },
  ];

  return (
    <main className="mercitrader-site">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>MerciTrader</h1>
          <p className="hero-subtitle">Building businesses. Delivering quality. Growing together.</p>
          <p className="hero-desc">
            MerciTrader is a diversified business group operating multiple companies including AL-SADIQ BRICKS KILN, Merci Mart, and Merci Rice. We are committed to quality, reliability, and long-term partnerships.
          </p>

          <div className="hero-ctas">
            <Link href="/businesses" className="btn btn-primary">
              Explore Our Businesses →
            </Link>
            <Link href="/contact" className="btn btn-secondary">
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
              <Link
                key={business.id}
                href={`/businesses/${business.slug}`}
                className="business-card"
                aria-label={`Learn more about ${business.name}`}
              >
                <div className="card-accent"></div>
                <h3>{business.name}</h3>
                <span className="business-category">{business.category}</span>
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
                <div className="btn-card">
                  Learn More <span>→</span>
                </div>
              </Link>
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
            <Link href="/businesses" className="structure-item parent">
              <div className="structure-label">MerciTrader</div>
              <p>Parent Company &amp; Group</p>
            </Link>

            <div className="structure-children">
              {BUSINESSES.map((business) => (
                <Link
                  key={business.id}
                  href={`/businesses/${business.slug}`}
                  className="structure-child"
                >
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
                  <span className="structure-link-hint">View Business Details →</span>
                </Link>
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
              Whether it&apos;s construction materials, retail essentials, or premium rice, let us know how we can help your business grow.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary btn-large">
            Contact Us
          </Link>
        </div>
      </section>

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

        /* HERO SECTION */
        .hero-section {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          color: var(--white);
          padding: 100px 20px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 80%, rgba(212, 165, 116, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(212, 165, 116, 0.1) 0%, transparent 50%);
          z-index: 0;
        }

        .hero-content {
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-content h1 {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          color: var(--white);
          margin-bottom: 12px;
          letter-spacing: -1px;
        }

        .hero-subtitle {
          font-size: 22px;
          font-weight: 600;
          color: var(--accent-light);
          margin-bottom: 12px;
        }

        .hero-desc {
          font-size: 17px;
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
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
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
          transition: color 0.2s ease;
        }

        .business-card:hover h3 {
          color: var(--accent);
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
          align-self: flex-start;
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
          margin-bottom: 24px;
          font-size: 13px;
        }

        .meta-item {
          color: var(--gray);
        }

        .btn-card {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 24px;
          background: var(--primary);
          color: #ffffff;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .business-card:hover .btn-card {
          background: var(--accent);
          color: var(--dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(212, 165, 116, 0.35);
        }

        .btn-card span {
          transition: transform 0.2s ease;
        }

        .business-card:hover .btn-card span {
          transform: translateX(4px);
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
          text-decoration: none;
          display: block;
          transition: all 0.3s ease;
        }

        .structure-item.parent {
          border: 3px solid var(--primary);
          background: linear-gradient(135deg, rgba(26, 71, 42, 0.05), transparent);
        }

        .structure-item.parent:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
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
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.3s ease;
        }

        .structure-child:hover {
          transform: translateY(-4px);
          border-color: var(--primary);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        .structure-link-hint {
          display: inline-block;
          margin-top: 10px;
          font-size: 12px;
          font-weight: 600;
          color: var(--primary);
          opacity: 0.85;
          transition: all 0.2s ease;
        }

        .structure-child:hover .structure-link-hint {
          color: var(--accent);
          opacity: 1;
          transform: translateX(3px);
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
