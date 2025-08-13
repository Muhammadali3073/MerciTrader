// app/page.tsx — Light-only portfolio with premium gradient UI, unified cards, and pro "Open to opportunities" badge
"use client";

import { useRef } from "react";
import Image from "next/image";

const NAME = "Muhammad Ali Nawaz";
const ROLE = "Senior Flutter Developer";
const TAGLINE =
  "I design and ship fast, reliable Flutter apps for iOS, Android & Web — clean architecture, smooth UX, and strong testing.";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/muhammad-ali-nawaz-19a082177",
  github: "https://github.com/Muhammadali3073",
  email: "mailto:alibajwa102@gmail.com",
  phone: "tel:+923047222234",
  resume: "/resume.pdf",
  profilePic: "/profile_image.jpeg?v=11",
  whatsapp: "https://wa.me/923047222234",
};

/* ---------- Minimal inline icon set (no deps) ---------- */
const Icon = {
  Menu: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}>
      <path fill="currentColor" d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z"/>
    </svg>
  ),
  External: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}>
      <path fill="currentColor" d="M14 3h7v7h-2V6.41l-8.29 8.3-1.42-1.42 8.3-8.29H14V3Zm-9 6h6v2H7v8h10v-4h2v6H5V9Z"/>
    </svg>
  ),
  Mail: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}>
      <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
    </svg>
  ),
  Phone: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}>
      <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 7a1 1 0 0 1 1-1h2.49a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.24 1.01l-2.2 2.2Z"/>
    </svg>
  ),
  Github: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}>
      <path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.17-3.37-1.17-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.52 1.04 1.52 1.04.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .85-.27 2.8 1.02A9.76 9.76 0 0 1 12 6.8c.86 0 1.73.12 2.54.35 1.95-1.29 2.8-1.02 2.8-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.67.92.67 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>
    </svg>
  ),
  LinkedIn: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}>
      <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18v-7.3H6V18h2.34ZM7.17 9a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7ZM18 18v-3.94c0-2.1-1.12-3.08-2.62-3.08-1.21 0-1.74.67-2.04 1.14V10.7H11V18h2.34v-3.86c0-.2.01-.41.08-.56.18-.41.6-.84 1.3-.84.92 0 1.29.64 1.29 1.58V18H18Z"/>
    </svg>
  ),
  Doc: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}>
      <path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm0 2.5L17.5 8H14V4.5ZM8 12h8v2H8v-2Zm0 4h8v2H8v-2Z"/>
    </svg>
  ),
};

/* ---------------------- Page ---------------------- */
export default function Home() {
  // Mobile menu (auto-close)
  const menuRef = useRef<HTMLDetailsElement | null>(null);
  const closeMenu = () => { if (menuRef.current) menuRef.current.open = false; };

  const highlights = [
    { label: "Experience", value: "3+ yrs" },
    { label: "Platforms", value: "iOS · Android · Web" },
    { label: "Focus", value: "Performance & UX" },
    { label: "Methodology", value: "Agile" },
  ];

  // Text-only skills (as requested)
  const skills = [
    "Flutter","Dart","iOS","Android","Flutter Web",
    "Bloc","Riverpod","GetX","Provider",
    "REST APIs","Firebase","Firestore","Auth","FCM",
    "SQLite","Hive","Clean Architecture","Testing","CI/CD",
    "Native Channels","ML Kit","Push Notifications","Maps & Geo",
    "Git","GitHub","Jira","Asana","VS Code","Android Studio","Xcode",
  ];

  const services = [
    {
      title: "Flutter App Development",
      points: ["iOS, Android & Web", "Clean Architecture", "State Management (Bloc/GetX/Riverpod)"],
    },
    {
      title: "Integrations & Backend",
      points: ["REST APIs / Firebase", "Auth, Push, Analytics", "Payments & Subscriptions"],
    },
    {
      title: "Quality & Delivery",
      points: ["Unit/Widget/Integration Tests", "CI/CD (Fastlane)", "Store release & monitoring"],
    },
  ];

  const projects = [
    { title: "Comnow (Digital Call System)", tags: ["Flutter", "iOS", "Android"], blurb: "Digital communication with messaging, voice notes, and efficient in-app workflows.", links: [{ label: "App Store", href: "https://apps.apple.com/ae/app/comnow/id1614790733" }] },
    { title: "Crime Scene Guide", tags: ["Flutter", "Play Store"], blurb: "Scene documentation and note-taking to streamline investigation workflows.", links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.INAR.investigation" }] },
    { title: "LHFADEZ Barbering", tags: ["Flutter", "Stripe", "Scheduling"], blurb: "Booking for haircuts & grooming with seamless scheduling and promotions.", links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.rubikkube.lhfadezbarbering.android" }] },
    { title: "Only Nikah", tags: ["Flutter", "Firebase"], blurb: "Nikah services with guided flows and notifications.", links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.hyxio.only_nikkah" }] },
  ];

  return (
    <main id="top" className="bg-canvas text-zinc-900">
      {/* Background: layered colorful gradient + soft blobs */}
      <div aria-hidden className="bg-wrap">
        <div className="bg-gradient-layer" />
        <div className="bg-blob bg-blob-a" />
        <div className="bg-blob bg-blob-b" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/65 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <Image src={LINKS.profilePic} alt={NAME} width={40} height={40} className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm" priority />
            <span className="text-sm font-semibold tracking-wide">{NAME}</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className="btn-primary">Resume</a>
          </nav>

          {/* Mobile actions */}
          <div className="md:hidden">
            <details ref={menuRef} className="relative">
              <summary className="btn-ghost cursor-pointer select-none flex items-center gap-2" aria-label="Open menu">
                <Icon.Menu className="h-4 w-4" /> Menu
              </summary>
              <div className="absolute right-0 mt-2 w-64 rounded-2xl border border-white/70 bg-white/85 backdrop-blur-lg shadow-xl p-2 grid gap-1 z-50">
                {["#projects","#skills","#experience","#education","#services","#contact"].map((href) => (
                  <a key={href} href={href} onClick={closeMenu} className="menu-item">{href.replace('#','')}</a>
                ))}
                <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="menu-cta">Resume</a>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 sm:pt-14 pb-12 sm:pb-16 grid md:grid-cols-2 gap-10 items-center fade-in-up">
        <div className="flex flex-col gap-5">
          {/* Premium availability badge */}
          <span className="availability" aria-live="polite">
            <span className="availability__dot" aria-hidden />
            <span className="availability__text">Open to opportunities</span>
            <span className="availability__shine" aria-hidden />
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.08]">
            {ROLE}
          </h1>

          <p className="max-w-xl text-zinc-700 text-base sm:text-lg leading-relaxed">
            {TAGLINE}
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">Start a project</a>
            <a href="#projects" className="btn-outline">View projects</a>
          </div>

          <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-700">
            <a href={LINKS.linkedin} target="_blank" className="icon-link"><Icon.LinkedIn className="h-4 w-4"/> LinkedIn</a>
            <a href={LINKS.github} target="_blank" className="icon-link"><Icon.Github className="h-4 w-4"/> GitHub</a>
            <a href={LINKS.email} className="icon-link"><Icon.Mail className="h-4 w-4"/> Email</a>
            <a href={LINKS.phone} className="icon-link"><Icon.Phone className="h-4 w-4"/> Call</a>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex md:justify-end justify-center">
          <div className="relative inline-block scale-in">
            <div className="avatar-ring" />
            <Image
              src={LINKS.profilePic}
              alt={NAME}
              width={280}
              height={280}
              className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {highlights.map((h) => (
            <article key={h.label} className="stat">
              <div className="stat__bg" aria-hidden />
              <div className="stat__value">{h.value}</div>
              <div className="stat__label">{h.label}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header">
          <h2>Services</h2>
          <p>Everything you need to ship and scale a quality Flutter app.</p>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article key={s.title} className="card">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Skills (text-only chips, colorful) */}
      <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header">
          <h2>Skills & Tools</h2>
          <p>A focused toolbox I use to ship quality apps fast.</p>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {skills.map((s) => (
            <span key={s} className="chip">
              <span className="chip__glow" aria-hidden />
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header">
          <h2>Selected Projects</h2>
          <p>Focused on performance, UX, and maintainable architecture.</p>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <article key={p.title} className="card group">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold group-hover:underline underline-offset-4">{p.title}</h3>
                <Icon.External className="h-5 w-5 text-zinc-400 group-hover:text-zinc-700" />
              </div>
              <p className="mt-2 text-sm text-zinc-700">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              {p.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} className="link" target="_blank" rel="noopener noreferrer">{l.label}</a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header"><h2>Experience</h2></div>
        <article className="card">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-lg font-semibold">Senior Flutter Developer · Digital Upgraders LLC (Remote)</div>
            <div className="text-sm text-zinc-600">Feb 2023 – Present</div>
          </div>
          <ul className="mt-3 list-disc pl-5 text-zinc-700 space-y-1 text-sm">
            <li>Lead development of cross-platform apps with clean architecture and robust state management.</li>
            <li>Implemented real-time features, offline capabilities, and performance optimizations.</li>
            <li>Collaborated with designers & backend; mentored developers; owned CI/CD and releases.</li>
          </ul>
        </article>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header"><h2>Education</h2></div>
        <article className="card">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-lg font-semibold">BS — Computer Science</div>
            <div className="text-sm text-zinc-600">Oct 2017 – Oct 2021</div>
          </div>
          <div className="mt-1 text-zinc-700 text-sm">University of Management & Technology, Lahore</div>
        </article>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <article className="card-lg">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Let’s build something great.</h3>
              <p className="mt-1 text-zinc-700">Tell me about your idea, and I’ll propose a practical, high-impact plan.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={LINKS.email} className="btn-primary"><Icon.Mail className="h-4 w-4"/> &nbsp;Email</a>
              <a href={LINKS.phone} className="btn-outline"><Icon.Phone className="h-4 w-4"/> &nbsp;Call</a>
              <a href={LINKS.linkedin} target="_blank" className="btn-outline"><Icon.LinkedIn className="h-4 w-4"/> &nbsp;LinkedIn</a>
              <a href={LINKS.github} target="_blank" className="btn-outline"><Icon.Github className="h-4 w-4"/> &nbsp;GitHub</a>
              <a href={LINKS.resume} target="_blank" className="btn-outline"><Icon.Doc className="h-4 w-4"/> &nbsp;Download CV</a>
            </div>
          </div>
        </article>
        <footer className="mt-10 text-center text-sm text-zinc-600">
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </footer>
      </section>

      {/* Back to top */}
      <a href="#top" className="back-to-top" aria-label="Back to top">↑</a>

      {/* =================== Styles =================== */}
      <style>{`
        html { scroll-behavior: smooth; }

        /* --- Color system for the whole page --- */
        :root {
          --bg-a: #fef9f4;   /* warm cream */
          --bg-b: #f1f7ff;   /* soft blue */
          --bg-c: #f6f5ff;   /* lilac */
          --grad-a: #5b9dff; /* blue */
          --grad-b: #22d3ee; /* cyan */
          --grad-c: #a78bfa; /* purple */
          --grad-d: #f472b6; /* pink */
          --card-border: 24,24,27,0.08;
          --shadow: 0 14px 40px rgba(0,0,0,.06);
          --shadow-hover: 0 18px 44px rgba(0,0,0,.08);
          --radius: 1.25rem;
        }

        /* Background canvas */
        .bg-canvas {
          position: relative;
          min-height: 100dvh;
          background: radial-gradient(90% 60% at 10% 0%, var(--bg-a), transparent 60%),
                      radial-gradient(70% 60% at 100% 0%, var(--bg-b), transparent 60%),
                      radial-gradient(70% 80% at 100% 100%, var(--bg-c), #ffffff 60%);
        }
        .bg-wrap { position: fixed; inset: 0; overflow: hidden; pointer-events: none; z-index: -1; }
        .bg-gradient-layer {
          position: absolute; inset: -20%;
          background: radial-gradient(120% 80% at 0% 0%, rgba(250,250,255,.65), transparent 60%),
                      radial-gradient(90% 80% at 100% 0%, rgba(232,250,255,.55), transparent 60%),
                      radial-gradient(110% 100% at 100% 100%, rgba(245,235,255,.5), transparent 60%);
          filter: blur(2px);
        }
        .bg-blob { position: absolute; border-radius: 9999px; filter: blur(44px); opacity: .28; }
        .bg-blob-a { width: 38rem; height: 38rem; top: -6rem; left: -8rem; background: conic-gradient(from 0deg, var(--grad-a), var(--grad-b), transparent 60%); }
        .bg-blob-b { width: 44rem; height: 44rem; right: -10rem; top: 6rem; background: conic-gradient(from 120deg, var(--grad-c), var(--grad-d), transparent 55%); }

        /* Buttons & nav */
        .btn-primary{
          display:inline-flex; align-items:center; gap:.5rem;
          padding:.8rem 1.25rem; border-radius:12px;
          font-size:.92rem; font-weight:700; color:#fff;
          background: linear-gradient(135deg, var(--grad-a), var(--grad-b));
          box-shadow: 0 10px 20px rgba(96,165,250,.25);
          text-decoration:none;
          transition: transform .15s ease, box-shadow .2s ease, opacity .2s ease;
        }
        .btn-primary:hover{ transform: translateY(-1px); box-shadow: 0 12px 26px rgba(96,165,250,.3); opacity: .97; }

        .btn-outline{
          display:inline-flex; align-items:center; gap:.5rem;
          padding:.8rem 1.25rem; border-radius:12px;
          font-size:.92rem; font-weight:700; color:#0b1220;
          border:1px solid rgba(24,24,27,.12); background:#fff;
          text-decoration:none;
          transition: background .2s ease, transform .15s ease;
        }
        .btn-outline:hover{ background: #f8fafc; transform: translateY(-1px); }

        .btn-ghost{
          display:inline-flex; align-items:center; gap:.5rem;
          padding:.55rem .85rem; border-radius:12px; font-size:.9rem;
          border:1px solid rgba(24,24,27,.12); background:#fff;
          transition: background .2s ease;
        }
        .btn-ghost:hover{ background:#f2f6ff; }

        .nav-link{ color:#0b1220; text-decoration:none; font-weight:600; letter-spacing:.01em; }
        .nav-link:hover{ color:#2563eb; }

        .menu-item{
          display:block; padding:.65rem .8rem; border-radius:12px;
          color:#0b1220; text-decoration:none; font-weight:600;
        }
        .menu-item:hover{ background:#f2f6ff; }
        .menu-cta{
          display:block; padding:.65rem .8rem; border-radius:12px; color:#fff;
          text-decoration:none; text-align:center; font-weight:800;
          background: linear-gradient(135deg, var(--grad-a), var(--grad-b));
        }
        .icon-link{ display:inline-flex; align-items:center; gap:.45rem; text-decoration:none; color:#0b1220; font-weight:600; }
        .icon-link:hover{ color:#2563eb; }

        .section-header h2{ font-size:1.45rem; font-weight:800; letter-spacing:.01em; }
        .section-header p{ margin-top:.45rem; color:#4b5563; }

        /* Unified gradient-border card */
        .card,.card-lg,.stat{
          position:relative; overflow:hidden; background:#fff;
          border-radius: var(--radius);
          border: 1px solid rgba(var(--card-border));
          box-shadow: var(--shadow);
          transition: transform .2s ease, box-shadow .22s ease, border-color .2s ease;
        }
        .card::before,.card-lg::before,.stat::before{
          content:""; position:absolute; inset:0; padding:1px; border-radius:inherit;
          background: linear-gradient(120deg, var(--grad-a), var(--grad-b), var(--grad-c), var(--grad-d), var(--grad-a));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: .9; pointer-events: none;
        }
        .card{ padding:1.2rem; }
        .card-lg{ padding:1.7rem; border-radius: calc(var(--radius) + .25rem); }
        .card:hover,.card-lg:hover,.stat:hover{ transform: translateY(-3px); box-shadow: var(--shadow-hover); border-color: rgba(24,24,27,.14); }

        /* Stats */
        .stat{ padding:1.15rem 1.25rem; }
        .stat__bg{
          position:absolute; right:-22px; top:-22px; width:96px; height:96px; border-radius:50%;
          background: radial-gradient(60px 60px at 30% 30%, rgba(96,165,250,.35), rgba(34,211,238,.24), transparent 70%);
          filter: blur(2px);
        }
        .stat__value{ font-size:1.25rem; font-weight:900; letter-spacing:.2px; }
        .stat__label{ font-size:.72rem; text-transform:uppercase; letter-spacing:.14em; color:#6b7280; margin-top:.15rem; }

        /* Skill chips (colorful + airy) */
        .chip{
          position:relative; display:inline-flex; align-items:center; justify-content:center;
          padding:.55rem .9rem; border-radius:9999px; font-weight:700; font-size:.88rem;
          color:#0b1220; background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
          border:1px solid rgba(24,24,27,.08);
          box-shadow: 0 10px 22px rgba(0,0,0,.06);
          letter-spacing:.01em;
        }
        .chip__glow{
          position:absolute; inset:-2px; border-radius:inherit; z-index:-1;
          background: conic-gradient(from 0deg, rgba(91,157,255,.25), rgba(164,120,255,.25), rgba(244,114,182,.25), rgba(34,211,238,.25), rgba(91,157,255,.25));
          filter: blur(10px);
          opacity:.55;
        }

        /* Tags & links */
        .tag{ display:inline-block; padding:.2rem .55rem; border-radius:9999px; background:#f4f4f5; color:#3f3f46; font-size:.75rem; font-weight:600; }
        .link{ color:#0b1220; font-weight:800; text-decoration:underline; }
        .link:hover{ color:#2563eb; }

        /* Avatar ring */
        .avatar-ring{
          position:absolute; inset:-12px; border-radius:9999px;
          background: conic-gradient(from 0deg, var(--grad-a), var(--grad-c), var(--grad-d), var(--grad-b), var(--grad-a));
          filter: blur(16px); opacity:.28; z-index:-1;
        }

        /* Back to top */
        .back-to-top{
          position:fixed; right:1.1rem; bottom:1.1rem; border-radius:9999px;
          padding:.65rem 1rem; color:#fff; text-decoration:none; font-weight:900;
          background: linear-gradient(135deg, var(--grad-a), var(--grad-b));
          box-shadow: 0 14px 28px rgba(34,211,238,.25);
        }
        .back-to-top:hover{ filter: brightness(.98); }

        /* ===== Premium "Open to opportunities" badge ===== */
        .availability{
          position:relative; display:inline-flex; align-items:center; gap:10px;
          padding:9px 16px; border-radius:9999px;
          font-size:.85rem; font-weight:900; letter-spacing:.02em;
          color:#0b1026;
          background:
            linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.82)),
            radial-gradient(120% 140% at 0% 0%, rgba(255,255,255,.28), transparent 60%);
          border:1px solid rgba(255,255,255,.85);
          box-shadow:
            0 12px 26px rgba(0,0,0,.18),
            inset 0 1px 0 rgba(255,255,255,.85),
            inset 0 -1px 0 rgba(255,255,255,.35);
          overflow:hidden; transform: translateZ(0);
        }
        .availability::before{
          content:""; position:absolute; inset:-2px; border-radius:inherit;
          background: conic-gradient(from 10deg,
            rgba(91,157,255,.35), rgba(34,211,238,.35), rgba(167,139,250,.35), rgba(244,114,182,.35), rgba(91,157,255,.35));
          filter: blur(12px); opacity:.28; z-index:-1;
        }
        .availability__dot{
          width:9px; height:9px; border-radius:9999px;
          background: linear-gradient(135deg, #22c55e, #86efac);
          box-shadow: 0 0 0 3px rgba(34,197,94,.15), 0 0 16px rgba(34,197,94,.55);
          animation: pulseDot 2.2s ease-in-out infinite;
        }
        @keyframes pulseDot{
          0%,100%{ box-shadow: 0 0 0 3px rgba(34,197,94,.15), 0 0 12px rgba(34,197,94,.45); transform: scale(1) }
          50%   { box-shadow: 0 0 0 5px rgba(34,197,94,.22), 0 0 20px rgba(34,197,94,.6);  transform: scale(1.06) }
        }
        .availability__text{ position:relative; z-index:1; white-space:nowrap; }
        .availability__shine{
          position:absolute; inset:-40%;
          background: linear-gradient(115deg, transparent 35%, rgba(255,255,255,.7) 45%, rgba(255,255,255,.92) 50%, rgba(255,255,255,.7) 55%, transparent 65%);
          transform: translateX(-60%);
          animation: shine 4.8s ease-in-out infinite;
          pointer-events:none; mix-blend-mode: screen; opacity:.65;
        }
        @keyframes shine{
          0% { transform: translateX(-60%) rotate(0.001deg); }
          55%{ transform: translateX(60%)  rotate(0.001deg); }
          100%{ transform: translateX(60%) rotate(0.001deg); }
        }

        /* Animations */
        @keyframes fadeInUp{ from{ opacity:0; transform:translateY(10px) } to{ opacity:1; transform:translateY(0) } }
        .fade-in-up{ animation: fadeInUp .6s ease-out both; }
        .scale-in{ animation: fadeInUp .5s ease-out both; }

        /* Responsive tweaks */
        @media (max-width: 640px){
          header .btn-primary{ padding:.65rem 1rem; }
          .back-to-top{ right:.8rem; bottom:.8rem; }
          .availability{ padding:8px 14px; gap:9px; font-size:.82rem; }
        }
      `}</style>
    </main>
  );
}
