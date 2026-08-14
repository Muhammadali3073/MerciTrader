"use client";

import Link from "next/link";
import { BUSINESSES, COMPANY_INFO } from "../data/businesses";

export default function BusinessesPage() {
  return (
    <main className="businesses-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Our Businesses</h1>
          <p>Specialized excellence across multiple sectors</p>
          <p className="hero-desc">
            Each business within {COMPANY_INFO.name} is committed to delivering quality, reliability, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* BUSINESSES GRID */}
      <section className="businesses-section">
        <div className="container">
          <div className="businesses-list">
            {BUSINESSES.map((business) => (
              <div key={business.id} className="business-showcase">
                <div className="showcase-content">
                  <div className="business-header">
                    <h2>{business.name}</h2>
                    <span className="category-badge">{business.category}</span>
                  </div>

                  <p className="business-description">{business.description}</p>

                  <div className="business-highlights">
                    <h4>Key Highlights</h4>
                    <ul>
                      {business.highlights?.slice(0, 4).map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="business-stats">
                    <div className="stat">
                      <span className="stat-number">{business.products.length}</span>
                      <span className="stat-label">Products</span>
                    </div>
                    {business.branches && (
                      <div className="stat">
                        <span className="stat-number">{business.branches.length}</span>
                        <span className="stat-label">Locations</span>
                      </div>
                    )}
                    {business.services && (
                      <div className="stat">
                        <span className="stat-number">{business.services.length}</span>
                        <span className="stat-label">Services</span>
                      </div>
                    )}
                  </div>

                  <Link href={`/businesses/${business.slug}`} className="btn btn-primary">
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS STRUCTURE */}
      <section className="structure-section">
        <div className="container">
          <h2 className="section-title">Business Structure</h2>

          <div className="structure-tree">
            <div className="tree-root">
              <div className="tree-node root-node">
                <h3>{COMPANY_INFO.name}</h3>
                <p>Parent Company & Group</p>
              </div>

              <div className="tree-branches">
                {BUSINESSES.map((business) => (
                  <div key={business.id} className="tree-branch">
                    <div className="tree-node">
                      <h4>{business.name}</h4>
                      <p>{business.category}</p>
                    </div>

                    {business.branches && business.branches.length > 0 && (
                      <div className="branch-subnodes">
                        {business.branches.map((branch) => (
                          <div key={branch.id} className="tree-subnode">
                            <span className="location-icon">📍</span>
                            <span>{branch.location}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Ready to Work with Us?</h2>
          <p>Contact us to learn more about our businesses and how we can serve your needs.</p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
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
        }

        .businesses-page {
          background: var(--white);
          color: var(--dark);
          min-height: 100vh;
        }

        /* HERO SECTION */
        .hero-section {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          color: var(--white);
          padding: 100px 20px;
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
        }

        .hero-content h1 {
          font-size: clamp(2.5rem, 6vw, 3.5rem);
          font-weight: 900;
          margin-bottom: 12px;
          letter-spacing: -1px;
        }

        .hero-content p {
          font-size: 20px;
          color: var(--accent-light);
          font-weight: 500;
          margin-bottom: 8px;
        }

        .hero-desc {
          font-size: 16px;
          color: rgba(248, 247, 244, 0.9);
          font-weight: 400;
        }

        /* BUSINESSES SECTION */
        .businesses-section {
          padding: 80px 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .businesses-list {
          display: grid;
          gap: 48px;
        }

        .business-showcase {
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          background: var(--white);
        }

        .business-showcase:hover {
          border-color: var(--accent);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }

        .showcase-content {
          padding: 40px;
        }

        .business-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .business-header h2 {
          font-size: 28px;
          color: var(--primary);
          font-weight: 800;
          margin: 0;
        }

        .category-badge {
          background: rgba(212, 165, 116, 0.15);
          color: var(--primary-light);
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .business-description {
          font-size: 16px;
          line-height: 1.8;
          color: var(--gray);
          margin-bottom: 28px;
        }

        .business-highlights {
          margin-bottom: 28px;
        }

        .business-highlights h4 {
          font-size: 16px;
          color: var(--primary);
          margin-bottom: 12px;
          font-weight: 700;
        }

        .business-highlights ul {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 12px;
        }

        .business-highlights li {
          padding-left: 24px;
          position: relative;
          font-size: 14px;
          color: var(--gray);
          line-height: 1.6;
        }

        .business-highlights li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: 700;
        }

        .business-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 20px;
          margin-bottom: 28px;
          padding: 20px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 28px;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 4px;
        }

        .stat-label {
          display: block;
          font-size: 13px;
          color: var(--gray);
          font-weight: 500;
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

        /* STRUCTURE SECTION */
        .structure-section {
          background: #fafaf8;
          padding: 80px 20px;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: var(--primary);
          text-align: center;
          margin-bottom: 60px;
          font-weight: 800;
        }

        .structure-tree {
          display: flex;
          justify-content: center;
        }

        .tree-root {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .tree-node {
          background: var(--white);
          border: 2px solid var(--primary);
          border-radius: 12px;
          padding: 24px 32px;
          text-align: center;
          min-width: 300px;
        }

        .root-node {
          border: 3px solid var(--primary);
          background: linear-gradient(135deg, rgba(26, 71, 42, 0.05), transparent);
        }

        .tree-node h3,
        .tree-node h4 {
          color: var(--primary);
          font-weight: 800;
          margin-bottom: 4px;
        }

        .tree-node h3 {
          font-size: 22px;
        }

        .tree-node h4 {
          font-size: 18px;
        }

        .tree-node p {
          color: var(--gray);
          font-size: 13px;
        }

        .tree-branches {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
          width: 100%;
        }

        .tree-branch {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          position: relative;
        }

        .tree-branch::before {
          content: "";
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 40px;
          background: var(--accent);
        }

        .tree-branch .tree-node {
          background: #fafaf8;
          border: 1px solid var(--accent);
          min-width: 100%;
        }

        .branch-subnodes {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .tree-subnode {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--gray);
          transition: all 0.2s;
        }

        .tree-subnode:hover {
          background: rgba(212, 165, 116, 0.05);
          border-color: var(--accent);
        }

        .location-icon {
          font-size: 16px;
        }

        /* CTA SECTION */
        .cta-section {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          color: var(--white);
          padding: 80px 20px;
          text-align: center;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800;
          margin-bottom: 12px;
        }

        .cta-content p {
          font-size: 18px;
          color: rgba(248, 247, 244, 0.9);
          margin-bottom: 28px;
          line-height: 1.6;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }

          .businesses-section,
          .structure-section,
          .cta-section {
            padding: 60px 20px;
          }

          .showcase-content {
            padding: 28px;
          }

          .business-header h2 {
            font-size: 24px;
          }

          .tree-node {
            min-width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
