"use client";

import Link from "next/link";
import { BUSINESSES, COMPANY_INFO } from "../data/businesses";

export default function About() {
  return (
    <main className="about-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>About {COMPANY_INFO.name}</h1>
          <p>Building businesses. Delivering quality. Growing together.</p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-block">
              <h2>Who We Are</h2>
              <p>
                {COMPANY_INFO.name} is a diversified business group founded in {COMPANY_INFO.founded}. We operate multiple successful businesses including{" "}
                <Link href="/businesses/al-sadiq-bricks-kiln" className="inline-link">AL-SADIQ BRICKS KILN</Link>,{" "}
                <Link href="/businesses/merci-mart" className="inline-link">Merci Mart</Link>, and{" "}
                <Link href="/businesses/merci-rice" className="inline-link">Merci Rice</Link>
                —each specializing in different sectors while maintaining unified values of quality, integrity, and customer focus.
              </p>
              <p>
                Our group structure allows us to leverage specialized expertise in each business while maintaining consistent standards of excellence across all operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="content-section alt-bg">
        <div className="container">
          <div className="content-grid">
            <div className="content-block">
              <h2>Our Story</h2>
              <p>
                {COMPANY_INFO.name} began with a vision to build businesses that deliver genuine value to customers and communities. Over the years, we have expanded our portfolio to include specialized businesses in construction materials and agriculture.
              </p>
              <p>
                Each business under our group has been developed with careful attention to market needs, quality standards, and long-term sustainability. Today, we serve a diverse customer base including contractors, retailers, wholesalers, and businesses across multiple sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="content-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vm-card">
              <div className="vm-icon">🎯</div>
              <h3>Our Vision</h3>
              <p>{COMPANY_INFO.vision}</p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">🚀</div>
              <h3>Our Mission</h3>
              <p>{COMPANY_INFO.mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="content-section alt-bg">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {COMPANY_INFO.values.map((value, idx) => (
              <div key={idx} className="value-item">
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="content-section">
        <div className="container">
          <h2 className="section-title">Why Choose {COMPANY_INFO.name}</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-number">1</div>
              <h4>Quality Assurance</h4>
              <p>Every product and service meets our strict quality standards and customer expectations.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">2</div>
              <h4>Customer Focus</h4>
              <p>We prioritize customer satisfaction and build long-term relationships based on trust and reliability.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">3</div>
              <h4>Specialized Expertise</h4>
              <p>Each business leverages deep industry knowledge and specialized skills in its sector.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">4</div>
              <h4>Reliable Supply</h4>
              <p>Our efficient operations ensure consistent availability and timely delivery of products.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">5</div>
              <h4>Business Integrity</h4>
              <p>We operate with transparency, honesty, and ethical business practices at all times.</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-number">6</div>
              <h4>Growth & Innovation</h4>
              <p>We continuously invest in improvement, innovation, and expanding our business portfolio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR BUSINESSES PORTFOLIO */}
      <section className="content-section alt-bg">
        <div className="container">
          <h2 className="section-title">Our Business Portfolio</h2>
          <div className="portfolio-grid">
            {BUSINESSES.map((business) => (
              <div key={business.id} className="portfolio-card">
                <h3>
                  <Link href={`/businesses/${business.slug}`}>
                    {business.name}
                  </Link>
                </h3>
                <span className="portfolio-category">{business.category}</span>
                <p>{business.shortDescription}</p>
                <Link href={`/businesses/${business.slug}`} className="btn-card">
                  Learn More <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Ready to Partner with Us?</h2>
          <p>Discover how each of our specialized businesses can serve your needs.</p>
          <div className="cta-buttons">
            <Link href="/businesses" className="btn btn-primary">
              Explore All Businesses →
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
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

        .about-page {
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
        }

        /* CONTENT SECTIONS */
        .content-section {
          padding: 80px 20px;
        }

        .alt-bg {
          background: #fafaf8;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: var(--primary);
          margin-bottom: 48px;
          text-align: center;
          font-weight: 800;
        }

        .content-grid {
          display: grid;
          gap: 40px;
        }

        .content-block h2 {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          color: var(--primary);
          margin-bottom: 20px;
          font-weight: 800;
        }

        .content-block p {
          font-size: 16px;
          line-height: 1.8;
          color: var(--gray);
          margin-bottom: 16px;
        }

        /* VISION & MISSION */
        .vision-mission-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 40px;
        }

        .vm-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 40px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .vm-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }

        .vm-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .vm-card h3 {
          font-size: 22px;
          color: var(--primary);
          margin-bottom: 16px;
          font-weight: 700;
        }

        .vm-card p {
          color: var(--gray);
          line-height: 1.7;
          font-size: 15px;
        }

        /* VALUES GRID */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
        }

        .value-item {
          background: var(--white);
          border-left: 4px solid var(--accent);
          border-radius: 8px;
          padding: 24px;
        }

        .value-item h4 {
          font-size: 18px;
          color: var(--primary);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .value-item p {
          color: var(--gray);
          font-size: 14px;
          line-height: 1.6;
        }

        /* HIGHLIGHTS GRID */
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
          margin-top: 40px;
        }

        .highlight-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .highlight-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
        }

        .highlight-number {
          display: inline-block;
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          color: var(--white);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .highlight-card h4 {
          font-size: 18px;
          color: var(--primary);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .highlight-card p {
          color: var(--gray);
          font-size: 14px;
          line-height: 1.6;
        }

        .inline-link {
          color: var(--primary);
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s ease;
        }

        .inline-link:hover {
          color: var(--accent);
        }

        /* PORTFOLIO GRID */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 28px;
          margin-top: 32px;
        }

        .portfolio-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .portfolio-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
        }

        .portfolio-card h3 a {
          color: var(--primary);
          text-decoration: none;
          font-size: 20px;
          font-weight: 800;
          transition: color 0.2s ease;
        }

        .portfolio-card h3 a:hover {
          color: var(--accent);
        }

        .portfolio-category {
          display: inline-block;
          background: rgba(212, 165, 116, 0.15);
          color: var(--primary-light);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          margin-top: 6px;
          margin-bottom: 14px;
          align-self: flex-start;
        }

        .portfolio-card p {
          font-size: 14px;
          color: var(--gray);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .btn-card {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 20px;
          background: var(--primary);
          color: #ffffff;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .btn-card:hover {
          background: var(--accent);
          color: var(--dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(212, 165, 116, 0.35);
        }

        .btn-card span {
          transition: transform 0.2s ease;
        }

        .btn-card:hover span {
          transform: translateX(4px);
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

        .cta-buttons {
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
          border: 2px solid rgba(248, 247, 244, 0.4);
        }

        .btn-secondary:hover {
          background: rgba(248, 247, 244, 0.1);
          border-color: var(--white);
          transform: translateY(-2px);
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }

          .content-section {
            padding: 60px 20px;
          }

          .vision-mission-grid {
            gap: 20px;
          }
        }
      `}</style>
    </main>
  );
}
