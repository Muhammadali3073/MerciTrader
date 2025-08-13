// app/page.tsx — Fresh colorful redesign (animated gradient bg + glass cards + refined spacing)
// Light-only, no extra packages, no skill icons (as requested)

"use client";

import { useRef } from "react";
import Image from "next/image";

const NAME = "Muhammad Ali Nawaz";
const ROLE = "Senior Flutter Developer";
const TAGLINE =
  "I build fast, reliable Flutter apps for iOS, Android & Web — clean architecture, smooth UX, and robust testing.";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/muhammad-ali-nawaz-19a082177",
  github: "https://github.com/Muhammadali3073",
  email: "mailto:alibajwa102@gmail.com",
  phone: "tel:+923047222234",
  resume: "/resume.pdf",
  profilePic: "/profile_image.jpeg?v=10",
  whatsapp: "https://wa.me/923047222234",
};

export default function Home() {
  // Mobile menu (auto-close)
  const menuRef = useRef<HTMLDetailsElement | null>(null);
  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  // Content
  const highlights = [
    { label: "Experience", value: "3+ yrs" },
    { label: "Platforms", value: "iOS · Android · Web" },
    { label: "Focus", value: "Performance & UX" },
    { label: "Method", value: "Agile Delivery" },
  ];

  const services = [
    {
      title: "End-to-End Flutter",
      points: [
        "iOS, Android & Web from one codebase",
        "Clean Architecture & modular design",
        "State management (Bloc / Riverpod / GetX)",
      ],
      hue: "--c1",
    },
    {
      title: "Integrations & Backend",
      points: [
        "REST APIs / Firebase / Firestore / Auth",
        "Push, Analytics, Payments & Subscriptions",
        "Maps, Location, Media, Realtime",
      ],
      hue: "--c2",
    },
    {
      title: "Quality & Release",
      points: [
        "Unit / Widget / Integration tests",
        "CI/CD (Fastlane), versioning, automation",
        "App Store & Play Store submissions",
      ],
      hue: "--c3",
    },
  ];

  // Skills (no icons; grouped & colorful)
  const skillGroups: { title: string; hue: string; items: string[] }[] = [
    {
      title: "Core",
      hue: "--c1",
      items: ["Flutter", "Dart", "Flutter Web", "Clean Architecture"],
    },
    {
      title: "State Management",
      hue: "--c2",
      items: ["Bloc", "Riverpod", "GetX", "Provider"],
    },
    {
      title: "Data & Cloud",
      hue: "--c3",
      items: ["REST APIs", "Firebase", "Firestore", "Auth", "FCM", "SQLite", "Hive"],
    },
    {
      title: "Quality & DevOps",
      hue: "--c4",
      items: ["Testing", "CI/CD", "Fastlane", "Code Review"],
    },
    {
      title: "Native & Features",
      hue: "--c5",
      items: ["Native Channels", "ML Kit", "Push Notifications", "Maps & Geo"],
    },
    {
      title: "Tooling",
      hue: "--c6",
      items: ["Git", "GitHub", "Jira", "Asana", "VS Code", "Android Studio", "Xcode"],
    },
  ];

  const projects = [
    {
      title: "Comnow (Digital Call System)",
      tags: ["Flutter", "iOS", "Android"],
      blurb:
        "Digital communication with messaging, voice notes and efficient in-app workflows.",
      links: [{ label: "App Store", href: "https://apps.apple.com/ae/app/comnow/id1614790733" }],
    },
    {
      title: "Crime Scene Guide",
      tags: ["Flutter", "Play Store"],
      blurb: "Scene documentation and note-taking to streamline investigation workflows.",
      links: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.INAR.investigation",
        },
      ],
    },
    {
      title: "LHFADEZ Barbering",
      tags: ["Flutter", "Stripe", "Scheduling"],
      blurb:
        "Booking for haircuts & grooming with seamless scheduling, payments and promotions.",
      links: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.rubikkube.lhfadezbarbering.android",
        },
      ],
    },
    {
      title: "Only Nikah",
      tags: ["Flutter", "Firebase"],
      blurb: "Nikah services with guided flows, notifications and admin tooling.",
      links: [
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.hyxio.only_nikkah",
        },
      ],
    },
  ];

  return (
    <main id="top" className="site">
      {/* ===================== NAVBAR ===================== */}
      <header className="navbar">
        <div className="container">
          <div className="brand">
            <Image
              src={LINKS.profilePic}
              alt={NAME}
              width={40}
              height={40}
              className="avatar"
              priority
            />
            <span className="brand__name">{NAME}</span>
          </div>

          {/* Desktop nav */}
          <nav className="nav-desktop">
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#education" className="nav-link">
              Education
            </a>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <a
              href={LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Resume
            </a>
          </nav>

          {/* Mobile menu */}
          <details ref={menuRef} className="menu">
            <summary className="btn btn--ghost">Menu</summary>
            <div className="menu__sheet">
              {["#projects", "#skills", "#experience", "#education", "#services", "#contact"].map(
                (href) => (
                  <a key={href} href={href} className="menu__item" onClick={closeMenu}>
                    {href.replace("#", "")}
                  </a>
                ),
              )}
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="menu__cta"
                onClick={closeMenu}
              >
                Resume
              </a>
            </div>
          </details>
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section className="hero container">
        <div className="hero__text">
          <span className="availability" aria-live="polite">
            <span className="availability__dot" aria-hidden />
            <span className="availability__text">Open to opportunities</span>
            <span className="availability__shine" aria-hidden />
          </span>
          <h1 className="hero__title">{ROLE}</h1>
          <p className="hero__tagline">{TAGLINE}</p>
          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary">
              Start a project
            </a>
            <a href="#projects" className="btn btn--outline">
              View projects
            </a>
          </div>

          <div className="hero__links">
            <a href={LINKS.linkedin} target="_blank" className="link">
              LinkedIn
            </a>
            <a href={LINKS.github} target="_blank" className="link">
              GitHub
            </a>
            <a href={LINKS.email} className="link">
              Email
            </a>
            <a href={LINKS.phone} className="link">
              Call
            </a>
            <a href={LINKS.whatsapp} target="_blank" className="link">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="hero__photo">
          <div className="photo-wrap">
            <div className="photo-ring" />
            <Image
              src={LINKS.profilePic}
              alt={NAME}
              width={280}
              height={280}
              className="photo"
              priority
            />
          </div>
        </div>
      </section>

      {/* ===================== HIGHLIGHTS ===================== */}
      <section className="section container">
        <div className="grid grid--stats">
          {highlights.map((h, i) => (
            <article key={h.label} className={`stat card hue-${(i % 6) + 1}`}>
              <div className="stat__value">{h.value}</div>
              <div className="stat__label">{h.label}</div>
            </article>
          ))}
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section id="services" className="section container">
        <header className="section__head">
          <h2>Services</h2>
          <p>Everything you need to ship and scale a quality Flutter app.</p>
        </header>

        <div className="grid grid--cards">
          {services.map((s, i) => (
            <article key={s.title} className={`card card--pad hue-${(i % 6) + 1}`}>
              <h3 className="card__title">{s.title}</h3>
              <ul className="list">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ===================== SKILLS ===================== */}
      <section id="skills" className="section container">
        <header className="section__head">
          <h2>Skills & Tools</h2>
          <p>A focused toolbox I use to ship quality apps fast.</p>
        </header>

        <div className="grid grid--skills">
          {skillGroups.map((g, i) => (
            <article key={g.title} className={`card card--pad hue-${(i % 6) + 1}`}>
              <div className="group-head">
                <h3 className="group-head__title">{g.title}</h3>
                <span className="group-head__line" />
              </div>
              <div className="chips">
                {g.items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===================== PROJECTS ===================== */}
      <section id="projects" className="section container">
        <header className="section__head">
          <h2>Selected Projects</h2>
          <p>Performance, UX and maintainability — proven in production.</p>
        </header>

        <div className="grid grid--cards">
          {projects.map((p, i) => (
            <article key={p.title} className={`card card--pad hue-${(i % 6) + 1}`}>
              <div className="card__top">
                <h3 className="card__title">{p.title}</h3>
                <span className="ribbon">Live</span>
              </div>
              <p className="card__blurb">{p.blurb}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              {p.links.length > 0 && (
                <div className="links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} className="link" target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ===================== EXPERIENCE ===================== */}
      <section id="experience" className="section container">
        <header className="section__head">
          <h2>Experience</h2>
        </header>

        <article className="card card--pad hue-2">
          <div className="xp-head">
            <div className="xp-head__role">
              Senior Flutter Developer · Digital Upgraders LLC (Remote)
            </div>
            <div className="xp-head__time">Feb 2023 – Present</div>
          </div>
          <ul className="list">
            <li>Led cross-platform development with feature-based architecture.</li>
            <li>Implemented realtime features, offline capability & perf optimizations.</li>
            <li>Mentored developers, owned CI/CD and store releases.</li>
          </ul>
        </article>
      </section>

      {/* ===================== EDUCATION ===================== */}
      <section id="education" className="section container">
        <header className="section__head">
          <h2>Education</h2>
        </header>

        <article className="card card--pad hue-3">
          <div className="xp-head">
            <div className="xp-head__role">BS — Computer Science</div>
            <div className="xp-head__time">Oct 2017 – Oct 2021</div>
          </div>
          <p className="muted">University of Management & Technology, Lahore</p>
        </article>
      </section>

      {/* ===================== CONTACT ===================== */}
      <section id="contact" className="cta container">
        <article className="card card--cta hue-5">
          <div className="cta__row">
            <div>
              <h3 className="cta__title">Let’s build something great.</h3>
              <p className="cta__text">
                Tell me about your idea and I’ll propose a practical, high-impact plan.
              </p>
            </div>
            <div className="cta__actions">
              <a href={LINKS.email} className="btn btn--primary">
                Email
              </a>
              <a href={LINKS.phone} className="btn btn--outline">
                Call
              </a>
              <a href={LINKS.whatsapp} target="_blank" className="btn btn--outline">
                WhatsApp
              </a>
              <a href={LINKS.linkedin} target="_blank" className="btn btn--outline">
                LinkedIn
              </a>
              <a href={LINKS.github} target="_blank" className="btn btn--outline">
                GitHub
              </a>
              <a href={LINKS.resume} target="_blank" className="btn btn--outline">
                Download CV
              </a>
            </div>
          </div>
        </article>
        <footer className="footer">© {new Date().getFullYear()} {NAME}. All rights reserved.</footer>
      </section>

      {/* ===================== STYLES ===================== */}
      <style>{`
        /* ====== Design tokens (colors & radii) ====== */
        :root{
          --radius: 18px;

          /* Vibrant brand hues */
          --c1: 255 107 107;   /* coral red */
          --c2: 78 205 196;    /* teal */
          --c3: 94 129 244;    /* blue */
          --c4: 255 200 87;    /* amber */
          --c5: 156 39 176;    /* purple */
          --c6: 0 209 178;     /* aqua */

          /* Card surface */
          --card-bg: 255 255 255 / .08; /* glass */
          --card-bd: 255 255 255 / .22;

          /* Text */
          --txt: 255 255 255;
          --muted: 236 239 241;
        }

        /* ====== Site background (animated gradient) ====== */
        .site{
          min-height: 100dvh;
          color: rgb(var(--txt));
          background: linear-gradient(125deg, #0b1026, #1b0b2a 30%, #130b34 55%, #0b1e2a 85%);
          background-size: 180% 180%;
          animation: bgMove 18s ease-in-out infinite;
        }
        @keyframes bgMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Subtle floating blobs for depth */
        .site::before, .site::after{
          content:"";
          position:fixed; inset:auto;
          width:620px; height:620px; border-radius:9999px;
          filter: blur(80px); opacity:.35; pointer-events:none; z-index:0;
        }
        .site::before{ background: radial-gradient(closest-side, rgba(255,107,107,.35), transparent); top:-180px; left:-160px; }
        .site::after{ background: radial-gradient(closest-side, rgba(94,129,244,.35), transparent); bottom:-200px; right:-180px; }

        /* ====== Layout containers ====== */
        .container{ max-width: 1120px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 1; }
        .section{ padding: 48px 0; }
        .cta{ padding: 72px 0; }

        /* ====== Navbar ====== */
        .navbar{
          position: sticky; top: 0; z-index: 50;
          background: rgba(9, 13, 31, .35);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .navbar .container{
          display:flex; align-items:center; justify-content:space-between; padding: 12px 20px;
        }
        .brand{ display:flex; align-items:center; gap:10px; }
        .brand__name{ font-size:.95rem; font-weight:600; opacity:.95; }
        .avatar{ border-radius:9999px; border:2px solid rgba(255,255,255,.5); }

        .nav-desktop{ display:none; gap:18px; align-items:center; }
        .nav-link{ color:rgba(255,255,255,.92); text-decoration:none; font-size:.92rem; }
        .nav-link:hover{ color:white; }
        .menu{ display:block; }
        .menu > summary{ cursor:pointer; }
        .menu__sheet{
          position:absolute; right:10px; top:50px; width:250px;
          background: rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.16); border-radius:14px;
          backdrop-filter: blur(10px);
          padding:8px; display:grid; gap:6px;
        }
        .menu[open] .menu__sheet{ animation: sheet .2s ease-out both; }
        @keyframes sheet{ from{ opacity:0; transform:translateY(-6px) } to{ opacity:1; transform:translateY(0) } }
        .menu__item{
          display:block; padding:.6rem .8rem; border-radius:10px; color:white; text-decoration:none;
        }
        .menu__item:hover{ background: rgba(255,255,255,.08); }
        .menu__cta{
          display:block; text-align:center; padding:.65rem .8rem; border-radius:10px; color:#0b1026; text-decoration:none;
          background: linear-gradient(135deg, rgb(var(--c3)), rgb(var(--c2)));
          font-weight:700;
        }

        /* Desktop breakpoint */
        @media (min-width: 900px){
          .nav-desktop{ display:flex; }
          .menu{ display:none; }
        }

        /* ====== Hero ====== */
        .hero{
          padding: 56px 0 36px;
          display:grid; grid-template-columns: 1fr; gap: 28px; align-items:center;
        }
        @media (min-width: 900px){
          .hero{ grid-template-columns: 1.2fr .8fr; gap: 40px; padding: 72px 0 40px; }
        }
        .hero__text{ display:flex; flex-direction:column; gap:18px; }
        .pill{
          display:inline-flex; align-items:center; gap:8px; padding:6px 10px; border-radius:9999px;
          background: rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.18); font-size:.8rem;
        }
        .hero__title{ font-size: clamp(1.9rem, 2.8vw + 1rem, 3.2rem); line-height:1.1; font-weight:800; letter-spacing:.2px; }
        .hero__tagline{ max-width: 46ch; color: rgba(255,255,255,.85); font-size: clamp(.98rem, .35vw + .9rem, 1.1rem); }

        .hero__cta{ display:flex; flex-wrap:wrap; gap:12px; margin-top:2px; }
        .btn{
          display:inline-flex; align-items:center; justify-content:center; gap:.5rem; cursor:pointer;
          padding:.8rem 1.2rem; border-radius:14px; font-size:.94rem; font-weight:700; text-decoration:none;
          transition: transform .15s ease, box-shadow .2s ease, filter .2s ease;
        }
        .btn--primary{
          color:#0b1026; background: linear-gradient(135deg, rgb(var(--c3)), rgb(var(--c2)));
          box-shadow: 0 12px 30px rgba(94,129,244,.25);
        }
        .btn--primary:hover{ transform: translateY(-1px); filter: brightness(1.02); }
        .btn--outline{
          color:white; border:1px solid rgba(255,255,255,.28); background: rgba(255,255,255,.04);
        }
        .btn--outline:hover{ background: rgba(255,255,255,.08); transform: translateY(-1px); }

        .hero__links{ display:flex; flex-wrap:wrap; gap:14px; margin-top:8px; }
        .link{ color: white; text-decoration: underline; text-underline-offset: 4px; }
        .link:hover{ color: rgb(255,255,255); filter: brightness(1.1); }

        .hero__photo{ display:flex; justify-content:center; }
        .photo-wrap{ position:relative; display:inline-block; }
        .photo{ width: 280px; height: 280px; object-fit: cover; border-radius:9999px; border: 4px solid rgba(255,255,255,.55); box-shadow: 0 20px 60px rgba(0,0,0,.35); }
        .photo-ring{
          position:absolute; inset:-14px; border-radius:9999px;
          background: conic-gradient(from 0deg, rgb(var(--c3)), rgb(var(--c5)), rgb(var(--c2)), rgb(var(--c3)));
          filter: blur(18px); opacity:.32; z-index:-1;
        }

        /* ====== Cards & grids ====== */
        .card{
          position:relative; background: rgba(var(--card-bg));
          border: 1px solid rgba(var(--card-bd)); border-radius: var(--radius);
          overflow:hidden; transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
          box-shadow: 0 18px 40px rgba(0,0,0,.25);
        }
        .card::before{
          content:""; position:absolute; inset:0; padding:1px; border-radius:inherit;
          background: conic-gradient(from 10deg, rgb(var(--c3)), rgb(var(--c2)), rgb(var(--c5)), rgb(var(--c4)), rgb(var(--c6)), rgb(var(--c3)));
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude; opacity:.55; pointer-events:none;
        }
        .card:hover{ transform: translateY(-3px); }

        .card--pad{ padding: 18px; }
        .card--cta{ padding: 26px; }
        @media (min-width: 900px){ .card--pad{ padding: 22px; } .card--cta{ padding: 34px; } }

        /* Color accents per card */
        .hue-1::before{ background: conic-gradient(from 10deg, rgb(var(--c1)), rgb(var(--c2)), rgb(var(--c3))); }
        .hue-2::before{ background: conic-gradient(from 10deg, rgb(var(--c2)), rgb(var(--c3)), rgb(var(--c4))); }
        .hue-3::before{ background: conic-gradient(from 10deg, rgb(var(--c3)), rgb(var(--c4)), rgb(var(--c5))); }
        .hue-4::before{ background: conic-gradient(from 10deg, rgb(var(--c4)), rgb(var(--c5)), rgb(var(--c6))); }
        .hue-5::before{ background: conic-gradient(from 10deg, rgb(var(--c5)), rgb(var(--c6)), rgb(var(--c1))); }
        .hue-6::before{ background: conic-gradient(from 10deg, rgb(var(--c6)), rgb(var(--c1)), rgb(var(--c2))); }

        /* Stats (highlights) */
        .grid--stats{
          display:grid; grid-template-columns: repeat(2, 1fr); gap: 14px;
        }
        @media (min-width: 800px){ .grid--stats{ grid-template-columns: repeat(4, 1fr); gap: 18px; } }
        .stat{ padding: 18px; }
        .stat__value{ font-size: 1.35rem; font-weight: 900; letter-spacing:.2px; }
        .stat__label{ margin-top: 4px; font-size:.72rem; letter-spacing:.12em; text-transform: uppercase; color: rgba(var(--muted), .85); }

        /* Cards grid (services, projects) */
        .grid--cards{
          display:grid; grid-template-columns: 1fr; gap: 16px;
        }
        @media (min-width: 800px){ .grid--cards{ grid-template-columns: repeat(3, 1fr); gap: 18px; } }

        .card__title{ font-weight: 800; letter-spacing:.2px; }
        .card__top{ display:flex; align-items:center; justify-content:space-between; gap:10px; }
        .card__blurb{ margin-top: 8px; color: rgba(255,255,255,.88); }
        .ribbon{
          display:inline-block; font-size:.7rem; font-weight:800; padding: .25rem .55rem; border-radius: 9999px;
          color:#0b1026; background: linear-gradient(135deg, rgb(var(--c4)), rgb(var(--c1)));
        }
        .tags{ display:flex; flex-wrap:wrap; gap:8px; margin-top:10px; }
        .tag{
          display:inline-block; font-size:.72rem; padding:.18rem .52rem; border-radius:9999px;
          background: rgba(255,255,255,.1); border:1px solid rgba(255,255,255,.18);
        }
        .links{ display:flex; flex-wrap:wrap; gap:12px; margin-top:12px; }

        /* Skills */
        .grid--skills{
          display:grid; grid-template-columns: 1fr; gap: 16px;
        }
        @media (min-width: 900px){ .grid--skills{ grid-template-columns: repeat(3, 1fr); gap: 18px; } }
        .group-head{ display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:12px; }
        .group-head__title{ font-weight: 900; letter-spacing:.3px; }
        .group-head__line{ flex:1; height: 1px; background: linear-gradient(90deg, rgba(255,255,255,.2), rgba(255,255,255,0)); }
        .chips{ display:flex; flex-wrap:wrap; gap:10px; }
        .chip{
          display:inline-flex; align-items:center; justify-content:center; padding:.45rem .8rem; border-radius:12px; font-weight:700;
          background: linear-gradient(180deg, rgba(255,255,255,.12), rgba(255,255,255,.06));
          border: 1px solid rgba(255,255,255,.18);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.1);
        }

        /* Lists */
        .list{ margin-top: 8px; padding-left: 1.1rem; line-height: 1.6; }
        .list li + li{ margin-top: 6px; }
        .muted{ color: rgba(var(--muted), .85); }

        /* CTA */
        .card--cta{ box-shadow: 0 30px 80px rgba(0,0,0,.35); }
        .cta__row{ display:flex; flex-direction:column; gap:20px; align-items:flex-start; }
        .cta__title{ font-size: clamp(1.2rem, .9vw + 1rem, 1.6rem); font-weight:900; }
        .cta__text{ margin-top: 6px; color: rgba(255,255,255,.9); }
        .cta__actions{ display:flex; flex-wrap:wrap; gap:10px; margin-top:4px; }
        .footer{ margin-top: 14px; text-align:center; color: rgba(255,255,255,.7); font-size:.9rem; }

      `}</style>
    </main>
  );
}
