"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESSES, COMPANY_INFO } from "../data/businesses";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "general",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", business: "general", message: "" });
  };

  return (
    <main className="contact-page">
      <header className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-brand">
            <div className="logo-mark">MT</div>
            <span className="brand-name">{COMPANY_INFO.name}</span>
          </Link>

          <nav className="nav-desktop">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/businesses">Businesses</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Contact us with any questions or inquiries.</p>
        </div>
      </section>

      {/* CONTACT INFO & FORM */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* LEFT: Contact Info */}
            <div className="contact-info">
              <h2>{COMPANY_INFO.name} Headquarters</h2>
              <p>Reach out to us through any of the following methods:</p>

              <div className="info-blocks">
                {COMPANY_INFO.contact.address && (
                  <div className="info-block">
                    <div className="info-icon">📍</div>
                    <div className="info-text">
                      <h4>Address</h4>
                      <p>{COMPANY_INFO.contact.address}</p>
                    </div>
                  </div>
                )}

                {COMPANY_INFO.contact.email && (
                  <div className="info-block">
                    <div className="info-icon">✉️</div>
                    <div className="info-text">
                      <h4>Email</h4>
                      <a href={`mailto:${COMPANY_INFO.contact.email}`}>
                        {COMPANY_INFO.contact.email}
                      </a>
                    </div>
                  </div>
                )}

                {COMPANY_INFO.contact.phone && (
                  <div className="info-block">
                    <div className="info-icon">📞</div>
                    <div className="info-text">
                      <h4>Phone</h4>
                      <a href={`tel:${COMPANY_INFO.contact.phone}`}>
                        {COMPANY_INFO.contact.phone}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <div className="business-contacts">
                <h3>Business Contacts</h3>
                <div className="business-contact-list">
                  {BUSINESSES.map((business) => (
                    <div key={business.id} className="business-contact">
                      <h5>{business.name}</h5>
                      {business.contact?.email && (
                        <p>
                          <a href={`mailto:${business.contact.email}`}>
                            {business.contact.email}
                          </a>
                        </p>
                      )}
                      {business.contact?.phone && (
                        <p>
                          <a href={`tel:${business.contact.phone}`}>
                            {business.contact.phone}
                          </a>
                        </p>
                      )}
                      <Link href={`/businesses/${business.slug}`} className="view-link">
                        View Business →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="contact-form-wrapper">
              <div className="form-card">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>

                {submitted && (
                  <div className="success-message">
                    ✓ Thank you! We've received your message and will be in touch soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      aria-label="Your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      aria-label="Email address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="business">Which Business Are You Inquiring About? *</label>
                    <select
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      required
                      aria-label="Select business"
                    >
                      <option value="general">General MerciTrader Inquiry</option>
                      <option value="al-sadiq-bricks">Al-Sadiq Bricks</option>
                      <option value="al-sadiq-rice">Al-Sadiq Rice</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us how we can help..."
                      rows={5}
                      aria-label="Your message"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </form>

                <p className="form-note">
                  We typically respond to inquiries within 24-48 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>What businesses does MerciTrader operate?</h4>
              <p>
                MerciTrader is a diversified business group with operations in construction materials
                (Al-Sadiq Bricks) and agriculture (Al-Sadiq Rice).
              </p>
            </div>

            <div className="faq-item">
              <h4>How can I place an order?</h4>
              <p>
                Please contact the specific business directly through their contact information or
                fill out our contact form and we'll direct your inquiry accordingly.
              </p>
            </div>

            <div className="faq-item">
              <h4>Do you offer bulk pricing?</h4>
              <p>
                Yes, both of our businesses offer wholesale and bulk pricing options. Contact us for
                specific quotes and terms.
              </p>
            </div>

            <div className="faq-item">
              <h4>What areas do you serve?</h4>
              <p>
                Our businesses operate through multiple locations. Check the specific business pages
                for locations and service areas.
              </p>
            </div>

            <div className="faq-item">
              <h4>How do you ensure quality?</h4>
              <p>
                Quality is central to our operations. We maintain strict quality control standards
                across all our products and services.
              </p>
            </div>

            <div className="faq-item">
              <h4>Can I visit your facilities?</h4>
              <p>
                Yes, we welcome business visits. Please contact the relevant business to arrange
                a facility tour.
              </p>
            </div>
          </div>
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
          --success: #10b981;
        }

        body,
        html {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue",
            sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .contact-page {
          background: var(--white);
          color: var(--dark);
          min-height: 100vh;
        }

        /* NAVBAR */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
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
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-desktop a {
          color: var(--dark);
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          transition: color 0.2s;
        }

        .nav-desktop a:hover {
          color: var(--primary);
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
          font-size: 18px;
          color: rgba(248, 247, 244, 0.9);
          font-weight: 400;
        }

        /* CONTACT SECTION */
        .contact-section {
          padding: 80px 20px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
        }

        .contact-info h2 {
          font-size: 28px;
          color: var(--primary);
          margin-bottom: 8px;
          font-weight: 800;
        }

        .contact-info > p {
          font-size: 16px;
          color: var(--gray);
          margin-bottom: 28px;
          line-height: 1.6;
        }

        .info-blocks {
          display: grid;
          gap: 20px;
          margin-bottom: 40px;
        }

        .info-block {
          display: flex;
          gap: 16px;
          padding: 16px;
          background: #fafaf8;
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .info-block:hover {
          background: rgba(212, 165, 116, 0.05);
        }

        .info-icon {
          font-size: 28px;
          flex-shrink: 0;
        }

        .info-text {
          flex: 1;
        }

        .info-text h4 {
          font-size: 16px;
          color: var(--primary);
          margin-bottom: 4px;
          font-weight: 700;
        }

        .info-text p,
        .info-text a {
          font-size: 14px;
          color: var(--gray);
          line-height: 1.5;
        }

        .info-text a {
          text-decoration: none;
          color: var(--primary);
          font-weight: 500;
          transition: color 0.2s;
        }

        .info-text a:hover {
          color: var(--accent);
        }

        .business-contacts {
          border-top: 1px solid var(--border);
          padding-top: 28px;
        }

        .business-contacts h3 {
          font-size: 18px;
          color: var(--primary);
          margin-bottom: 16px;
          font-weight: 700;
        }

        .business-contact-list {
          display: grid;
          gap: 16px;
        }

        .business-contact {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 16px;
          transition: all 0.3s ease;
        }

        .business-contact:hover {
          border-color: var(--accent);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        }

        .business-contact h5 {
          font-size: 15px;
          color: var(--primary);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .business-contact p {
          font-size: 13px;
          color: var(--gray);
          margin-bottom: 8px;
        }

        .business-contact a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .business-contact a:hover {
          color: var(--accent);
        }

        .view-link {
          display: inline-block;
          font-size: 13px;
          color: var(--accent);
          text-decoration: none;
          font-weight: 600;
          margin-top: 4px;
        }

        /* CONTACT FORM */
        .contact-form-wrapper {
          display: flex;
          justify-content: center;
        }

        .form-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 40px;
          width: 100%;
          max-width: 500px;
        }

        .form-card h2 {
          font-size: 24px;
          color: var(--primary);
          margin-bottom: 8px;
          font-weight: 800;
        }

        .form-card > p {
          font-size: 14px;
          color: var(--gray);
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .success-message {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid var(--success);
          color: var(--success);
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .contact-form {
          display: grid;
          gap: 20px;
        }

        .form-group {
          display: grid;
          gap: 8px;
        }

        .form-group label {
          font-size: 14px;
          color: var(--primary);
          font-weight: 600;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 12px;
          border: 1px solid var(--border);
          border-radius: 8px;
          font-size: 14px;
          font-family: inherit;
          transition: all 0.2s;
          background: var(--white);
          color: var(--dark);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(212, 165, 116, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-group select {
          cursor: pointer;
        }

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
          width: 100%;
        }

        .btn-primary:hover {
          background: var(--accent-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(212, 165, 116, 0.2);
        }

        .form-note {
          font-size: 12px;
          color: var(--gray);
          margin-top: 16px;
          text-align: center;
        }

        /* FAQ SECTION */
        .faq-section {
          background: #fafaf8;
          padding: 80px 20px;
        }

        .faq-section h2 {
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: var(--primary);
          text-align: center;
          margin-bottom: 48px;
          font-weight: 800;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
        }

        .faq-item {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
        }

        .faq-item h4 {
          font-size: 16px;
          color: var(--primary);
          margin-bottom: 12px;
          font-weight: 700;
        }

        .faq-item p {
          font-size: 14px;
          color: var(--gray);
          line-height: 1.6;
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

        .footer-bottom {
          border-top: 1px solid rgba(248, 247, 244, 0.1);
          padding-top: 20px;
          text-align: center;
          font-size: 13px;
          color: var(--gray);
          max-width: 1200px;
          margin: 0 auto;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }

          .contact-section,
          .faq-section {
            padding: 60px 20px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .form-card {
            padding: 28px;
          }
        }
      `}</style>
    </main>
  );
}
