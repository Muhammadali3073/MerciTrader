"use client";

import React from 'react';
import Link from "next/link";
import { BUSINESSES, COMPANY_INFO } from "../data/businesses";

export default function ContactPage() {
  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>Have questions? We&apos;d love to hear from you. Contact us with any questions or inquiries.</p>
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
                      <h5>
                        <Link href={`/businesses/${business.slug}`}>
                          {business.name}
                        </Link>
                      </h5>
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
                        Learn More →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Static Contact Form (no JS handling) */}
            <div className="contact-form-wrapper">
              <div className="form-card">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we&apos;ll get back to you as soon as possible.</p>

                <form action="#" method="post" className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
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
                      required
                      aria-label="Select business"
                    >
                      <option value="general">General MerciTrader Inquiry</option>
                      {BUSINESSES.map((b) => (
                        <option key={b.id} value={b.slug}>{b.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
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
                MerciTrader is a diversified business group operating{" "}
                <Link href="/businesses/al-sadiq-bricks-kiln">AL-SADIQ BRICKS KILN</Link>,{" "}
                <Link href="/businesses/merci-mart">Merci Mart</Link>, and{" "}
                <Link href="/businesses/merci-rice">Merci Rice</Link>.
              </p>
            </div>

            <div className="faq-item">
              <h4>How can I place an order?</h4>
              <p>
                Please contact the specific business directly through their contact information or
                fill out our contact form and we&apos;ll direct your inquiry accordingly.
              </p>
            </div>

            <div className="faq-item">
              <h4>Do you offer bulk pricing?</h4>
              <p>
                Yes, our businesses offer wholesale and bulk pricing options. Contact us for
                specific quotes and terms.
              </p>
            </div>

            <div className="faq-item">
              <h4>What areas do you serve?</h4>
              <p>
                Our businesses operate through multiple locations. Check the{" "}
                <Link href="/businesses">Businesses page</Link> for locations and service areas.
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
    </div>
  );
}
