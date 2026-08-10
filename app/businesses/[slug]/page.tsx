

import Link from "next/link";
import { getBusinessBySlug, COMPANY_INFO } from "../../data/businesses";
import Head from "next/head";

export default async function BusinessDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const business = getBusinessBySlug(slug);

  if (!business) {
    return (
      <main className="business-detail">
        <section className="error-section">
          <div className="container">
            <h1>Business Not Found</h1>
            <p>Sorry, we couldn&apos;t find the business you&apos;re looking for.</p>
            <Link href="/businesses" className="btn btn-primary">
              Back to Businesses
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="business-detail">
  <Head>
    <title>{business?.name ?? 'Business'} – {COMPANY_INFO.name}</title>
    <meta name="description" content={business?.shortDescription ?? COMPANY_INFO.tagline} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content={business?.name ?? COMPANY_INFO.name} />
    <meta property="og:description" content={business?.shortDescription ?? COMPANY_INFO.tagline} />
    <meta property="og:image" content={business?.heroImage ?? '/default-hero.jpg'} />
    <meta property="og:url" content={`https://example.com/businesses/${business?.slug}`} />
    <meta property="og:type" content="website" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: business?.name,
      image: business?.heroImage,
      description: business?.shortDescription,
      url: `https://example.com/businesses/${business?.slug}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: business?.branches?.[0]?.address || "",
        addressLocality: business?.branches?.[0]?.location || "",
      },
      telephone: business?.contact?.phone,
    }) }} />
  </Head>
      <header className="navbar" aria-label="Primary navigation">
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
          <h1>{business.name}</h1>
          <p className="hero-category">{business.category}</p>
          <p className="hero-desc">{business.shortDescription}</p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content">
              <h2>About {business.name}</h2>
              <p>{business.description}</p>

              {business.vision && (
                <div className="vision-box">
                  <h4>Our Vision</h4>
                  <p>{business.vision}</p>
                </div>
              )}

              {business.mission && (
                <div className="mission-box">
                  <h4>Our Mission</h4>
                  <p>{business.mission}</p>
                </div>
              )}
            </div>

            <div className="overview-stats">
              <div className="stat-card">
                <span className="stat-icon">📦</span>
                <span className="stat-num">{business.products.length}</span>
                <span className="stat-text">Products</span>
              </div>

              {business.branches && (
                <div className="stat-card">
                  <span className="stat-icon">📍</span>
                  <span className="stat-num">{business.branches.length}</span>
                  <span className="stat-text">Locations</span>
                </div>
              )}

              {business.services && (
                <div className="stat-card">
                  <span className="stat-icon">⚙️</span>
                  <span className="stat-num">{business.services.length}</span>
                  <span className="stat-text">Services</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section alt-bg">
        <div className="container">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">
            Explore the range of products and solutions we offer.
          </p>

          <div className="products-grid">
            {business.products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-icon">📦</div>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                {product.category && (
                  <span className="product-category">{product.category}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      {business.services && business.services.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Services</h2>

            <div className="services-list">
              {business.services.map((service, idx) => (
                <div key={idx} className="service-item">
                  <span className="service-check">✓</span>
                  <span className="service-text">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* HIGHLIGHTS */}
      {business.highlights && business.highlights.length > 0 && (
        <section className="section alt-bg">
          <div className="container">
            <h2 className="section-title">Why Choose Us</h2>

            <div className="highlights-grid">
              {business.highlights.map((highlight, idx) => (
                <div key={idx} className="highlight-item">
                  <div className="highlight-icon">✨</div>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BRANCHES */}
      {business.branches && business.branches.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="section-title">Our Locations</h2>
            <p className="section-subtitle">
              Visit us at any of our conveniently located branches.
            </p>

            <div className="branches-grid">
              {business.branches.map((branch) => (
                <div key={branch.id} className="branch-card">
                  <div className="branch-location">📍 {branch.location}</div>
                  <h4>{branch.name}</h4>

                  <div className="branch-info">
                    {branch.address && (
                      <div className="info-item">
                        <span className="info-label">Address</span>
                        <span className="info-value">{branch.address}</span>
                      </div>
                    )}

                    {branch.phone && (
                      <div className="info-item">
                        <span className="info-label">Phone</span>
                        <a href={`tel:${branch.phone}`} className="info-link">
                          {branch.phone}
                        </a>
                      </div>
                    )}

                    {branch.email && (
                      <div className="info-item">
                        <span className="info-label">Email</span>
                        <a href={`mailto:${branch.email}`} className="info-link">
                          {branch.email}
                        </a>
                      </div>
                    )}

                    {branch.openingHours && (
                      <div className="info-item">
                        <span className="info-label">Hours</span>
                        <span className="info-value">{branch.openingHours}</span>
                      </div>
                    )}
                  </div>

                  {branch.mapUrl && (
                    <a href={branch.mapUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                      View on Map
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT CTA */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Get in Touch</h2>
          <p>Have questions? We&apos;d love to hear from you.</p>

          <div className="contact-options">
            {business.contact?.email && (
              <a href={`mailto:${business.contact.email}`} className="btn btn-primary">
                Send Email
              </a>
            )}
            {business.contact?.phone && (
              <a href={`tel:${business.contact.phone}`} className="btn btn-primary">
                Call Now
              </a>
            )}
            <Link href="/contact" className="btn btn-secondary">
              Contact Form
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

        .business-detail {
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

        .hero-category {
          display: inline-block;
          background: rgba(212, 165, 116, 0.2);
          color: var(--accent-light);
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .hero-desc {
          font-size: 18px;
          color: rgba(248, 247, 244, 0.9);
          font-weight: 400;
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

        .section-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          color: var(--primary);
          margin-bottom: 12px;
          font-weight: 800;
          text-align: center;
        }

        .section-subtitle {
          text-align: center;
          color: var(--gray);
          font-size: 16px;
          margin-bottom: 48px;
          line-height: 1.6;
        }

        /* OVERVIEW */
        .overview-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
          align-items: start;
        }

        .overview-content h2 {
          font-size: 28px;
          color: var(--primary);
          margin-bottom: 16px;
          font-weight: 800;
        }

        .overview-content p {
          font-size: 16px;
          line-height: 1.8;
          color: var(--gray);
          margin-bottom: 20px;
        }

        .vision-box,
        .mission-box {
          background: #fafaf8;
          border-left: 4px solid var(--accent);
          padding: 20px;
          border-radius: 8px;
          margin-top: 20px;
        }

        .vision-box h4,
        .mission-box h4 {
          font-size: 16px;
          color: var(--primary);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .vision-box p,
        .mission-box p {
          font-size: 14px;
          color: var(--gray);
          line-height: 1.6;
        }

        .overview-stats {
          display: grid;
          gap: 16px;
        }

        .stat-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
        }

        .stat-icon {
          display: block;
          font-size: 32px;
          margin-bottom: 8px;
        }

        .stat-num {
          display: block;
          font-size: 28px;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 4px;
        }

        .stat-text {
          display: block;
          font-size: 13px;
          color: var(--gray);
          font-weight: 500;
        }

        /* PRODUCTS GRID */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .product-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-8px);
          border-color: var(--accent);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }

        .product-icon {
          font-size: 40px;
          margin-bottom: 12px;
        }

        .product-card h4 {
          font-size: 18px;
          color: var(--primary);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .product-card p {
          color: var(--gray);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .product-category {
          display: inline-block;
          background: rgba(212, 165, 116, 0.15);
          color: var(--primary-light);
          padding: 4px 12px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* SERVICES LIST */
        .services-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }

        .service-item {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          transition: all 0.2s;
        }

        .service-item:hover {
          border-color: var(--accent);
          background: rgba(212, 165, 116, 0.02);
        }

        .service-check {
          font-size: 20px;
          color: var(--accent);
          font-weight: 700;
          flex-shrink: 0;
        }

        .service-text {
          font-size: 15px;
          color: var(--gray);
          line-height: 1.5;
        }

        /* HIGHLIGHTS */
        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .highlight-item {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 28px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .highlight-item:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
        }

        .highlight-icon {
          font-size: 32px;
          margin-bottom: 12px;
        }

        .highlight-item p {
          font-size: 14px;
          color: var(--gray);
          line-height: 1.6;
        }

        /* BRANCHES */
        .branches-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 28px;
        }

        .branch-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .branch-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
        }

        .branch-location {
          display: inline-block;
          background: rgba(212, 165, 116, 0.15);
          color: var(--primary-light);
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .branch-card h4 {
          font-size: 20px;
          color: var(--primary);
          margin-bottom: 20px;
          font-weight: 700;
        }

        .branch-info {
          display: grid;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border);
        }

        .info-item {
          display: grid;
          gap: 4px;
        }

        .info-label {
          font-size: 12px;
          color: var(--gray);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-value {
          font-size: 14px;
          color: var(--dark);
          font-weight: 500;
        }

        .info-link {
          font-size: 14px;
          color: var(--primary);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .info-link:hover {
          color: var(--accent);
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

        .btn-outline {
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--border);
        }

        .btn-outline:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .btn-secondary {
          background: transparent;
          color: var(--white);
          border: 2px solid var(--white);
        }

        .btn-secondary:hover {
          background: rgba(248, 247, 244, 0.1);
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

        .contact-options {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
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

        /* ERROR SECTION */
        .error-section {
          padding: 100px 20px;
          text-align: center;
          color: var(--dark);
        }

        .error-section h1 {
          font-size: 32px;
          color: var(--primary);
          margin-bottom: 12px;
          font-weight: 800;
        }

        .error-section p {
          font-size: 16px;
          color: var(--gray);
          margin-bottom: 28px;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .nav-desktop {
            display: none;
          }

          .section {
            padding: 60px 20px;
          }

          .overview-grid {
            grid-template-columns: 1fr;
          }

          .branches-grid {
            grid-template-columns: 1fr;
          }

          .contact-options {
            flex-direction: column;
          }

          .contact-options .btn {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
