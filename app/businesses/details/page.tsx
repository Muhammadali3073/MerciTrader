import Head from "next/head";
import { BUSINESSES, COMPANY_INFO } from "../../data/businesses";

export default function AllBusinessDetails() {
  return (
    <main className="businesses-details-page">
      <Head>
        <title>All Business Details – {COMPANY_INFO.name}</title>
        <meta name="description" content={COMPANY_INFO.tagline} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="navbar" aria-label="Primary navigation">
        <div className="nav-container">
          <a href="/" className="nav-brand">
            <div className="logo-mark">MT</div>
            <span className="brand-name">{COMPANY_INFO.name}</span>
          </a>
          <nav className="nav-desktop">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/businesses">Businesses</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>All Business Details</h1>
          <p className="hero-desc">Explore detailed information about each of our businesses.</p>
        </div>
      </section>

      {/* BUSINESS DETAILS */}
      <section className="details-section">
        <div className="container">
          {BUSINESSES.map((business) => (
            <article key={business.id} className="business-detail-card">
              <h2>{business.name}</h2>
              <p className="category-badge">{business.category}</p>
              <p>{business.description}</p>
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
                <section className="section alt-bg">
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
                </section>
              )}
              {/* Services */}
              {business.services && business.services.length > 0 && (
                <section className="section">
                  <h3>Services</h3>
                  <div className="services-list">
                    {business.services.map((svc, i) => (
                      <div key={i} className="service-item">
                        <span className="service-check">✓</span>
                        <span className="service-text">{svc}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
