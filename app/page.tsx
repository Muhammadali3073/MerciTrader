// app/page.tsx — Fresh colorful redesign (animated gradient bg + glass cards + refined spacing)
// Light-only, no extra packages, no skill icons

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

  const skillGroups: { title: string; hue: string; items: string[] }[] = [
    { title: "Core", hue: "--c1", items: ["Flutter", "Dart", "Flutter Web", "Clean Architecture"] },
    { title: "State Management", hue: "--c2", items: ["Bloc", "Riverpod", "GetX", "Provider"] },
    { title: "Data & Cloud", hue: "--c3", items: ["REST APIs", "Firebase", "Firestore", "Auth", "FCM", "SQLite", "Hive"] },
    { title: "Quality & DevOps", hue: "--c4", items: ["Testing", "CI/CD", "Fastlane", "Code Review"] },
    { title: "Native & Features", hue: "--c5", items: ["Native Channels", "ML Kit", "Push Notifications", "Maps & Geo"] },
    { title: "Tooling", hue: "--c6", items: ["Git", "GitHub", "Jira", "Asana", "VS Code", "Android Studio", "Xcode"] },
  ];

  const projects = [
    {
      title: "Comnow (Digital Call System)",
      tags: ["Flutter", "iOS", "Android"],
      blurb: "Digital communication with messaging, voice notes and efficient in-app workflows.",
      links: [{ label: "App Store", href: "https://apps.apple.com/ae/app/comnow/id1614790733" }],
    },
    {
      title: "Crime Scene Guide",
      tags: ["Flutter", "Play Store"],
      blurb: "Scene documentation and note-taking to streamline investigation workflows.",
      links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.INAR.investigation" }],
    },
    {
      title: "LHFADEZ Barbering",
      tags: ["Flutter", "Stripe", "Scheduling"],
      blurb: "Booking for haircuts & grooming with seamless scheduling, payments and promotions.",
      links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.rubikkube.lhfadezbarbering.android" }],
    },
    {
      title: "Only Nikah",
      tags: ["Flutter", "Firebase"],
      blurb: "Nikah services with guided flows, notifications and admin tooling.",
      links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.hyxio.only_nikkah" }],
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
              sizes="40px"
            />
            <span className="brand__name">{NAME}</span>
          </div>

          {/* Desktop nav */}
          <nav className="nav-desktop">
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
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
              {["#projects", "#skills", "#experience", "#education", "#services", "#contact"].map(href => (
                <a key={href} href={href} className="menu__item" onClick={closeMenu}>
                  {href.replace("#", "")}
                </a>
              ))}
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
          </span>

          <h1 className="hero__title">{ROLE}</h1>
          <p className="hero__tagline">{TAGLINE}</p>

          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary">Start a project</a>
            <a href="#projects" className="btn btn--outline">View projects</a>
          </div>

          <div className="hero__links">
            <a href={LINKS.linkedin} target="_blank" className="link">LinkedIn</a>
            <a href={LINKS.github} target="_blank" className="link">GitHub</a>
            <a href={LINKS.email} className="link">Email</a>
            <a href={LINKS.phone} className="link">Call</a>
            <a href={LINKS.whatsapp} target="_blank" className="link">WhatsApp</a>
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
              sizes="(min-width: 900px) 280px, 42vw"
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
                {s.points.map(p => <li key={p}>{p}</li>)}
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
                {g.items.map(s => <span key={s} className="chip">{s}</span>)}
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
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              {!!p.links.length && (
                <div className="links">
                  {p.links.map(l => (
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
            <div className="xp-head__role">Senior Flutter Developer · Digital Upgraders LLC (Remote)</div>
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
              <a href={LINKS.email} className="btn btn--primary">Email</a>
              <a href={LINKS.phone} className="btn btn--outline">Call</a>
              <a href={LINKS.whatsapp} target="_blank" className="btn btn--outline">WhatsApp</a>
              <a href={LINKS.linkedin} target="_blank" className="btn btn--outline">LinkedIn</a>
              <a href={LINKS.github} target="_blank" className="btn btn--outline">GitHub</a>
              <a href={LINKS.resume} target="_blank" className="btn btn--outline">Download CV</a>
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
        @media (prefers-reduced-motion: reduce) { .site { animation: none; } }

        /* Subtle floating blobs for depth (responsive) */
        .site::before, .site::after{
          content:"";
          position:fixed; inset:auto;
          width:520px; height:520px; border-radius:9999px;
          filter: blur(80px); opacity:.35; pointer-events:none; z-index:0;
        }
        .site::before{ background: radial-gradient(closest-side, rgba(255,107,107,.35), transparent); top:-180px; left:-160px; }
        .site::after{ background: radial-gradient(closest-side, rgba(94,129,244,.35), transparent); bottom:-200px; right:-180px; }
        @media (max-width: 640px){
          .site::before, .site::after { width:360px; height:360px; filter: blur(60px); }
          .site::before { top:-140px; left:-120px; }
          .site::after  { bottom:-150px; right:-120px; }
        }

        /* ====== Layout containers ====== */
        .container{ max-width: 1120px; margin: 0 auto; padding: 0 16px; position: relative; z-index: 1; }
        @media (min-width: 480px){ .container { padding: 0 18px; } }
        @media (min-width: 900px){ .container { padding: 0 20px; } }

        .section{ padding: 40px 0; }
        @media (min-width: 900px){ .section{ padding: 56px 0; } }
        .cta{ padding: 64px 0; }
        @media (min-width: 900px){ .cta{ padding: 80px 0; } }

        /* ====== Navbar ====== */
        .navbar{
          position: sticky; top: 0; z-index: 50;
          background: rgba(9, 13, 31, .35);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255,255,255,.08);
        }
        .navbar .container{
          display:flex; align-items:center; justify-content:space-between; padding: 10px 16px;
        }
        @media (min-width: 900px){ .navbar .container{ padding: 12px 20px; } }

        .brand{ display:flex; align-items:center; gap:10px; }
        .brand__name{ font-size:.95rem; font-weight:600; opacity:.95; }
        .avatar{ border-radius:9999px; border:2px solid rgba(255,255,255,.5); }

        .nav-desktop{ display:none; gap:18px; align-items:center; }
        .nav-link{ color:rgba(255,255,255,.92); text-decoration:none; font-size:.92rem; }
        .nav-link:hover{ color:white; }

        .menu{ display:block; }
        .menu > summary{ cursor:pointer; padding: .6rem .9rem; border-radius: 12px; }
        .menu__sheet{
          position:absolute; right:10px; top:50px; width: min(92vw, 320px);
          background: rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.16); border-radius:14px;
          backdrop-filter: blur(10px);
          padding:8px; display:grid; gap:6px;
        }
        .menu[open] .menu__sheet{ animation: sheet .2s ease-out both; }
        @keyframes sheet{ from{ opacity:0; transform:translate
