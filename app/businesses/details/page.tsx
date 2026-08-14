import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESSES, COMPANY_INFO } from "../../data/businesses";

export const metadata: Metadata = {
  title: `All Business Details – ${COMPANY_INFO.name}`,
  description: COMPANY_INFO.tagline,
};

export default function AllBusinessDetails() {
  return (
    <main className="businesses-details-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <Link href="/businesses">Businesses</Link>
            <span className="separator">/</span>
            <span className="current">Details</span>
          </nav>
          <h1>All Business Details</h1>
          <p className="hero-desc">Explore detailed information about each of our businesses.</p>
        </div>
      </section>

      {/* BUSINESS DETAILS */}
      <section className="details-section">
        <div className="container">
          {BUSINESSES.map((business) => (
            <article key={business.id} className="business-detail-card">
              <div className="card-header">
                <h2>
                  <Link href={`/businesses/${business.slug}`}>
                    {business.name}
                  </Link>
                </h2>
                <span className="category-badge">{business.category}</span>
              </div>
              <p className="business-desc">{business.description}</p>

              {/* Overview stats */}
              <div className="detail-stats">
                <div className="stat-card">
                  <span className="stat-icon">📦</span>
                  <span className="stat-num">{business.products?.length ?? 0}</span>
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

              {/* Products */}
              {business.products && business.products.length > 0 && (
                <div className="section-block alt-bg">
                  <h3>Products</h3>
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
              )}

              {/* Services */}
              {business.services && business.services.length > 0 && (
                <div className="section-block">
                  <h3>Services</h3>
                  <div className="services-list">
                    {business.services.map((svc, i) => (
                      <div key={i} className="service-item">
                        <span className="service-check">✓</span>
                        <span className="service-text">{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="card-action">
                <Link href={`/businesses/${business.slug}`} className="btn btn-primary">
                  Learn More About {business.name} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style>{`
        .businesses-details-page {
          background: var(--white);
          color: var(--dark);
          min-height: 100vh;
        }

        .breadcrumb-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          margin-bottom: 16px;
        }

        .breadcrumb-nav a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .breadcrumb-nav a:hover {
          color: var(--accent);
        }

        .breadcrumb-nav .separator {
          color: rgba(255, 255, 255, 0.4);
        }

        .breadcrumb-nav .current {
          color: var(--accent);
          font-weight: 600;
        }

        .hero-section {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          color: var(--white);
          padding: 80px 20px 60px;
          text-align: center;
        }

        .hero-section h1 {
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 800;
          margin-bottom: 8px;
        }

        .hero-desc {
          font-size: 16px;
          color: rgba(248, 247, 244, 0.9);
        }

        .details-section {
          padding: 60px 20px 100px;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .business-detail-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 36px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .card-header h2 a {
          color: var(--primary);
          text-decoration: none;
          font-size: 26px;
          font-weight: 800;
          transition: color 0.2s ease;
        }

        .card-header h2 a:hover {
          color: var(--accent);
        }

        .category-badge {
          background: rgba(212, 165, 116, 0.15);
          color: var(--primary-light);
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .business-desc {
          font-size: 15px;
          line-height: 1.7;
          color: var(--gray);
          margin-bottom: 24px;
        }

        .detail-stats {
          display: flex;
          gap: 20px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .stat-card {
          background: #fafaf8;
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .stat-icon {
          font-size: 20px;
        }

        .stat-num {
          font-weight: 800;
          font-size: 18px;
          color: var(--primary);
        }

        .stat-text {
          font-size: 13px;
          color: var(--gray);
        }

        .section-block {
          margin-top: 24px;
          padding: 24px;
          border-radius: 12px;
          background: #fafaf8;
        }

        .section-block h3 {
          font-size: 18px;
          color: var(--primary);
          margin-bottom: 16px;
          font-weight: 700;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .product-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 16px;
        }

        .product-card h4 {
          font-size: 15px;
          color: var(--primary);
          margin-bottom: 6px;
        }

        .product-card p {
          font-size: 13px;
          color: var(--gray);
          line-height: 1.5;
        }

        .product-category {
          display: inline-block;
          margin-top: 8px;
          font-size: 11px;
          color: var(--accent);
          font-weight: 600;
        }

        .services-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 12px;
        }

        .service-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }

        .service-check {
          color: var(--primary);
          font-weight: bold;
        }

        .card-action {
          margin-top: 28px;
          display: flex;
          justify-content: flex-end;
        }

        .btn {
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.2s ease;
          display: inline-block;
        }

        .btn-primary {
          background: var(--primary);
          color: #ffffff;
        }

        .btn-primary:hover {
          background: var(--accent);
          color: var(--dark);
          transform: translateY(-2px);
        }
      `}</style>
    </main>
  );
}
