"use client";

import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

const BRAND = "MarciTrader";
const TAGLINE = "Smart trading tools. Clear signals. Faster decisions.";

const LINKS = {
  linkedin: "https://www.linkedin.com/",
  github: "https://github.com/Muhammadali3073",
  email: "mailto:alibajwa102@gmail.com",
  phone: "tel:+923047222234",
  resume: "/resume.pdf",
  profilePic: "/marci/logo.png",
  heroImg: "/marci/hero.png",
};

export default function Home() {
  const menuRef = useRef<HTMLDetailsElement | null>(null);
  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  const [navSolid, setNavSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const features = [
    { title: "Realtime Signals", body: "Low-latency market signals curated by proven strategies." },
    { title: "Portfolio Insights", body: "Visualize exposure, P&L, and risk in a single dashboard." },
    { title: "Backtesting", body: "Test strategies against historical data with ease." },
    { title: "Alerts & Automation", body: "Email, SMS and webhook alerts; automate routine actions." },
  ];

  const products = [
    { title: "Signal Stream", desc: "Fast, filtered signals for active traders.", link: "#" },
    { title: "Trade Journal", desc: "Capture trades, notes and outcomes to improve edge.", link: "#" },
    { title: "Strategy Lab", desc: "A/B test ideas and iterate quickly.", link: "#" },
  ];

  const testimonials = [
    { text: "MarciTrader helped me cut my reaction time in half — signals are clean and reliable.", author: "A. Khan, Trader" },
    { text: "A simple interface with powerful analytics under the hood.", author: "S. Patel, Quant" },
  ];

  return (
    <main className="mt-root">
      <Head>
        <title>MarciTrader — Smart trading tools & signals</title>
        <meta name="description" content="MarciTrader provides realtime trading signals, portfolio insights, and backtesting tools for active traders." />
        <meta property="og:title" content="MarciTrader — Smart trading tools" />
        <meta property="og:description" content="Realtime signals, portfolio insights and backtesting for traders." />
        <meta property="og:image" content="/marci/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={`topbar ${navSolid ? 'solid' : ''}`}>
        <div className="wrap">
          <div className="brand">
            <Image src={LINKS.profilePic} alt={`${BRAND} logo`} width={44} height={44} className="logo" />
            <div className="brand__name">{BRAND}</div>
          </div>
          <nav className="nav-desktop">
            <a href="#features">Features</a>
            <a href="#products">Products</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
          </nav>

          <details ref={menuRef} className="menu">
            <summary className="menu-btn" aria-label="Open menu">Menu</summary>
            <div className="menu-sheet">
              <a href="#features" onClick={closeMenu}>Features</a>
              <a href="#products" onClick={closeMenu}>Products</a>
              <a href="#pricing" onClick={closeMenu}>Pricing</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
              <a href={LINKS.github} target="_blank" rel="noreferrer" className="menu-cta" onClick={closeMenu}>GitHub</a>
            </div>
          </details>
        </div>
      </header>

      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-left">
            <h1>{BRAND}</h1>
            <p className="lead">{TAGLINE}</p>

            <div className="hero-ctas">
              <a href="#products" className="btn btn-primary">Explore products</a>
              <a href="#contact" className="btn btn-outline">Request demo</a>
            </div>

            <div className="trust">
              <span>Trusted by traders & teams</span>
              <div className="logos">
                <div className="logo-pill">Alpha</div>
                <div className="logo-pill">Beta</div>
                <div className="logo-pill">Gamma</div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            {/* hero image (replace /marci/hero.png in /public) */}
            <div className="hero-image-wrap">
              <Image src={LINKS.heroImg} alt="MarciTrader dashboard" width={560} height={340} className="hero-visual" priority />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section">
        <div className="wrap">
          <h2>Features</h2>
          <p className="sub">Everything traders need to find, validate and act on opportunities.</p>

          <div className="grid grid-features">
            {features.map((f) => (
              <article key={f.title} className="feature-card">
                <div className="feature-icon">⚡</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="section alt">
        <div className="wrap">
          <h2>Products</h2>
          <p className="sub">Modular tools you can mix and match.</p>

          <div className="grid grid-products">
            {products.map((p) => (
              <article key={p.title} className="product-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.link} className="link">Learn more →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section">
        <div className="wrap">
          <h2>What people say</h2>
          <div className="grid grid-testimonials">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="testimonial">
                <p>“{t.text}”</p>
                <cite>— {t.author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section cta-section">
        <div className="wrap cta-wrap">
          <div className="cta-left">
            <h2>Get a demo</h2>
            <p>Tell us about your needs and we’ll show how MarciTrader can help.</p>
            <a href="mailto:alibajwa102@gmail.com" className="btn btn-primary">Schedule a demo</a>
          </div>
          <form className="contact-form" action="mailto:alibajwa102@gmail.com" method="GET">
            <input name="name" placeholder="Your name" aria-label="Your name" />
            <input name="email" placeholder="Email" aria-label="Email" />
            <textarea name="message" placeholder="How can we help?" aria-label="Message" />
            <button type="submit" className="btn btn-ghost">Send</button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="wrap foot-inner">
          <div>© {new Date().getFullYear()} {BRAND}. All rights reserved.</div>
          <div className="foot-links">
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </footer>

      <style>{`
        :root{ --bg: #0b1220; --card: #0f1724; --muted: #9aa4b2; --accent: #6c8cff; }
        *{ box-sizing: border-box }
        body,html,#root{ height:100%; }
        .mt-root{ min-height:100dvh; background: linear-gradient(180deg,#071021 0%, #081426 50%, #06131a 100%); color:#eaf0ff; font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;}
        .wrap{ max-width:1100px; margin:0 auto; padding:20px; }

        .topbar{ position: sticky; top:0; z-index:60; backdrop-filter: blur(6px); }
        .topbar .wrap{ display:flex; align-items:center; justify-content:space-between; gap:12px; }
        .topbar .brand{ display:flex; align-items:center; gap:10px; }
        .topbar .logo{ border-radius:10px; }
        .topbar .brand__name{ font-weight:800; letter-spacing:.4px }
        .topbar .nav-desktop{ display:none; gap:14px; align-items:center }
        .topbar .nav-desktop a{ color: #dbe8ff; text-decoration:none; font-weight:600 }

        .topbar.solid{ background: rgba(6,10,18,0.6); border-bottom: 1px solid rgba(255,255,255,0.03); }

        .menu{ display:block }
        .menu-btn{ padding:.4rem .8rem; border-radius:8px; background:rgba(255,255,255,0.03); cursor:pointer }
        .menu-sheet{ position:absolute; right:18px; top:66px; width:260px; background:rgba(8,12,20,0.8); border-radius:12px; padding:10px; display:grid; gap:8px; }
        .menu-sheet a{ padding:8px; border-radius:8px; text-decoration:none; color:#e6eefc }
        .menu-cta{ background: linear-gradient(90deg,var(--accent), #3bd6d6); color:#06121b; font-weight:700; text-align:center }

        @media(min-width:900px){ .topbar .nav-desktop{ display:flex } .menu{ display:none } }

        .hero{ padding:72px 0; }
        .hero-inner{ display:grid; grid-template-columns:1fr; gap:26px; align-items:center }
        @media(min-width:980px){ .hero-inner{ grid-template-columns: 1fr 440px } }
        .hero-left h1{ font-size: clamp(2rem, 3.8vw, 3.4rem); margin:0 0 12px }
        .lead{ color: var(--muted); margin:0 0 18px; font-weight:600 }
        .hero-ctas{ display:flex; gap:12px; margin-bottom:16px }
        .btn{ padding:10px 14px; border-radius:10px; text-decoration:none; font-weight:700; }
        .btn-primary{ background: linear-gradient(90deg,var(--accent), #3bd6d6); color:#081426 }
        .btn-outline{ border:1px solid rgba(255,255,255,0.06); color:#eaf0ff; background:transparent }
        .btn-ghost{ background:transparent; color:#eaf0ff; border:1px solid rgba(255,255,255,0.06); padding:9px 12px }

        .trust{ margin-top:18px; color:var(--muted); display:flex; gap:14px; align-items:center }
        .logos{ display:flex; gap:8px }
        .logo-pill{ background: rgba(255,255,255,0.03); padding:6px 8px; border-radius:8px; font-weight:700 }

        .hero-right .hero-image-wrap{ border-radius:14px; overflow:hidden; border:1px solid rgba(255,255,255,0.04); box-shadow: 0 18px 40px rgba(0,0,0,0.3); }
        .hero-visual{ display:block; width:100%; height:auto }

        .section{ padding:56px 0 }
        .section.alt{ background: linear-gradient(180deg, rgba(255,255,255,0.01), transparent) }
        .section h2{ margin:0 0 8px; font-size:1.6rem }
        .sub{ color:var(--muted); margin:0 0 18px }

        .grid{ display:grid; gap:14px }
        .grid-features{ grid-template-columns: 1fr; }
        @media(min-width:720px){ .grid-features{ grid-template-columns: repeat(2,1fr) } }
        @media(min-width:1024px){ .grid-features{ grid-template-columns: repeat(4,1fr) } }
        .feature-card{ background: rgba(255,255,255,0.02); padding:18px; border-radius:12px; border:1px solid rgba(255,255,255,0.03) }
        .feature-icon{ font-size:22px; margin-bottom:8px }

        .grid-products{ grid-template-columns:1fr }
        @media(min-width:900px){ .grid-products{ grid-template-columns: repeat(3,1fr) } }
        .product-card{ background: rgba(255,255,255,0.02); padding:18px; border-radius:12px; border:1px solid rgba(255,255,255,0.03) }
        .product-card .link{ color:var(--accent); text-decoration:none; font-weight:700 }

        .grid-testimonials{ grid-template-columns: 1fr }
        @media(min-width:900px){ .grid-testimonials{ grid-template-columns: repeat(2,1fr) } }
        .testimonial{ background: rgba(255,255,255,0.02); padding:18px; border-radius:12px; }
        .testimonial p{ margin:0 0 8px }
        cite{ color:var(--muted) }

        .cta-section .cta-wrap{ display:grid; grid-template-columns: 1fr; gap:20px; align-items:center }
        @media(min-width:860px){ .cta-wrap{ grid-template-columns: 1fr 420px } }
        .contact-form{ display:flex; flex-direction:column; gap:10px; }
        .contact-form input, .contact-form textarea{ padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.04); background: rgba(255,255,255,0.02); color:#eaf0ff }
        textarea{ min-height:100px; resize:vertical }

        .site-footer{ padding:22px 0; border-top:1px solid rgba(255,255,255,0.03); }
        .foot-inner{ display:flex; gap:12px; justify-content:space-between; align-items:center }
        .foot-links a{ color:var(--muted); text-decoration:none; margin-left:12px }

        a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible{ outline:3px solid rgba(108,140,255,0.16); outline-offset:2px }

      `}</style>
    </main>
  );
}
