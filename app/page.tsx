// app/page.tsx — Colorful, spacious portfolio (unified gradient-border cards, no extra deps)
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
  profilePic: "/profile_image.jpeg?v=10",
  whatsapp: "https://wa.me/923047222234",
};

// ------- Inline Icons -------
const Icon = {
  Menu: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M4 6h16v2H4V6Zm0 5h16v2H4v-2Zm0 5h16v2H4v-2Z"/></svg>
  ),
  External: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M14 3h7v7h-2V6.41l-8.29 8.3-1.42-1.42 8.3-8.29H14V3Zm-9 6h6v2H7v8h10v-4h2v6H5V9Z"/></svg>
  ),
  Mail: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/></svg>
  ),
  Phone: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.56.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 7a1 1 0 0 1 1-1h2.49a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.56 1 1 0 0 1-.24 1.01l-2.2 2.2Z"/></svg>
  ),
  Github: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.17-3.37-1.17-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.52 1.04 1.52 1.04.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .85-.27 2.8 1.02A9.76 9.76 0 0 1 12 6.8c.86 0 1.73.12 2.54.35 1.95-1.29 2.8-1.02 2.8-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.67.92.67 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>
  ),
  LinkedIn: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18v-7.3H6V18h2.34ZM7.17 9a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7ZM18 18v-3.94c0-2.1-1.12-3.08-2.62-3.08-1.21 0-1.74.67-2.04 1.14V10.7H11V18h2.34v-3.86c0-.2.01-.41.08-.56.18-.41.6-.84 1.3-.84.92 0 1.29.64 1.29 1.58V18H18Z"/></svg>
  ),
  Tool: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M21.7 13.35a5.5 5.5 0 0 1-7.05-7.05l-2.9 2.9-1.77-.18-4.95 4.95L8 17l4.95-4.95-.18-1.77 2.9-2.9a5.5 5.5 0 0 1 7.05 7.05L22 15l-1.41 1.41L19.17 15l2.53-1.65Z"/></svg>
  ),
  Layers: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M12 2 1 7l11 5 9-4.09V17h2V7L12 2Zm0 9L1 6v2l11 5 11-5V6l-11 5Zm-7 5 7 3 7-3-7-3-7 3Z"/></svg>
  ),
  Shield: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M12 2 4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3Zm0 2.18L18 6v5c0 4.38-2.94 8.76-6 9.94-3.06-1.18-6-5.56-6-9.94V6l6-1.82Z"/></svg>
  ),
  Rocket: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M12 2c3.87 0 7 3.13 7 7 0 3.43-2.43 7.94-7 13-4.57-5.06-7-9.57-7-13 0-3.87 3.13-7 7-7Zm0 2a5 5 0 0 0-5 5c0 2.55 1.95 6.34 5 9.95 3.05-3.6 5-7.4 5-9.95a5 5 0 0 0-5-5Zm0 3a2 2 0 1 1 .001 3.999A2 2 0 0 1 12 7Z"/></svg>
  ),
  Store: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M4 4h16l1 4H3l1-4Zm0 6h16v10H4V10Zm2 2v6h12v-6H6Z"/></svg>
  ),
  Doc: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm0 2.5L17.5 8H14V4.5ZM8 12h8v2H8v-2Zm0 4h8v2H8v-2Z"/></svg>
  ),
};

export default function Home() {
  const menuRef = useRef<HTMLDetailsElement | null>(null);
  const closeMenu = () => { if (menuRef.current) menuRef.current.open = false; };

  const highlights = [
    { label: "Experience", value: "3+ yrs" },
    { label: "Platforms", value: "iOS · Android · Web" },
    { label: "Focus", value: "Performance & UX" },
    { label: "Methodology", value: "Agile" },
  ];

  const skills = [
    "Flutter","Dart","iOS","Android","Flutter Web",
    "Bloc","Riverpod","GetX","Provider",
    "REST APIs","Firebase","Firestore","Auth","FCM",
    "SQLite","Hive","Clean Architecture","Testing","CI/CD",
    "Native Channels","ML Kit","Push Notifications","Maps & Geo",
    "Git","GitHub","Jira","Asana","VS Code","Android Studio","Xcode",
  ];

  const services = [
    { title: "Flutter App Development", icon: <Icon.Layers className="h-5 w-5" />, points: ["iOS, Android & Web", "Clean Architecture", "State Management (Bloc/GetX/Riverpod)"] },
    { title: "Integrations & Backend", icon: <Icon.Tool className="h-5 w-5" />, points: ["REST APIs / Firebase", "Auth, Push, Analytics", "Payments & Subscriptions"] },
    { title: "Quality & Delivery", icon: <Icon.Shield className="h-5 w-5" />, points: ["Unit/Widget/Integration Tests", "CI/CD (Fastlane)", "Store release & monitoring"] },
  ];

  const projects = [
    { title: "Comnow (Digital Call System)", tags: ["Flutter", "iOS", "Android"], blurb: "Digital communication with messaging, voice notes, and efficient in-app workflows.", links: [{ label: "App Store", href: "https://apps.apple.com/ae/app/comnow/id1614790733" }] },
    { title: "Crime Scene Guide", tags: ["Flutter", "Play Store"], blurb: "Scene documentation and note-taking to streamline investigation workflows.", links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.INAR.investigation" }] },
    { title: "LHFADEZ Barbering", tags: ["Flutter", "Stripe", "Scheduling"], blurb: "Booking for haircuts & grooming with seamless scheduling and promotions.", links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.rubikkube.lhfadezbarbering.android" }] },
    { title: "Only Nikah", tags: ["Flutter", "Firebase"], blurb: "Nikah services with guided flows and notifications.", links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.hyxio.only_nikkah" }] },
  ];

  // Accent helpers (cycle colors)
  const accent = (i: number) => `accent-${(i % 6) + 1}`;

  return (
    <main id="top" className="bg-gradient-to-b from-white via-[#f9fbff] to-[#f7f5ff] text-zinc-900">
      {/* Background accents */}
      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 -left-32 h-96 w-96 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-sky-300 via-cyan-300 to-indigo-300 animate-floatSlow" />
        <div className="absolute top-24 -right-36 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-pink-300 via-fuchsia-300 to-violet-300 animate-floatSlow animation-delay-1200" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src={LINKS.profilePic} alt={NAME} width={44} height={44} className="h-11 w-11 rounded-full object-cover ring-2 ring-white shadow-sm" priority />
            <span className="text-sm font-semibold tracking-tight">{NAME}</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-[0.95rem]">
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
                <Icon.Menu className="h-5 w-5" /> Menu
              </summary>
              <div className="absolute right-0 mt-2 w-64 rounded-xl border border-zinc-200 bg-white/95 backdrop-blur-md shadow-xl p-2 grid gap-1 z-50">
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
      <section className="mx-auto max-w-6xl px-5 sm:px-6 pt-12 sm:pt-16 pb-14 sm:pb-20 grid md:grid-cols-2 gap-10 items-center fade-in-up">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200/70 px-3 py-1.5 text-xs font-medium text-zinc-700 bg-white/70 backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-400" />
            Open to opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">{ROLE}</h1>
          <p className="max-w-xl text-zinc-700 text-[1.05rem] leading-relaxed">{TAGLINE}</p>
          <div className="flex flex-wrap gap-3.5">
            <a href="#contact" className="btn-primary">Start a project</a>
            <a href="#projects" className="btn-outline">View projects</a>
          </div>
          <div className="mt-2.5 flex flex-wrap gap-4 text-sm text-zinc-700">
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
            <Image src={LINKS.profilePic} alt={NAME} width={300} height={300} className="w-48 h-48 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-white shadow-2xl" priority />
          </div>
        </div>
      </section>

      {/* Highlights — colorful stats */}
      <section className="mx-auto max-w-6xl px-5 sm:px-6 pb-2">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <article key={h.label} className={`stat ${accent(i)}`}>
              <div className="stat-value">{h.value}</div>
              <div className="stat-label">{h.label}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 sm:px-6 py-14">
        <div className="section-header">
          <h2>Services</h2>
          <p>Everything you need to ship and scale a quality Flutter app.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {services.map((s, i) => (
            <article key={s.title} className={`card ${accent(i)}`}>
              <div className="flex items-center gap-3 text-zinc-800">
                <span className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-white/70 ring-1 ring-white/70 shadow-sm">{s.icon}</span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <ul className="mt-3 list-disc pl-5 text-[0.95rem] text-zinc-700 space-y-1.5">
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Skills — colorful premium pills, roomy spacing */}
      <section id="skills" className="mx-auto max-w-6xl px-5 sm:px-6 py-14">
        <div className="section-header">
          <h2>Skills & Tools</h2>
          <p>A focused toolbox I use to ship quality apps fast.</p>
        </div>
        <div className="mt-7 flex flex-wrap gap-3.5">
          {skills.map((s, i) => (
            <span key={s} className={`skill-pill ${accent(i)}`}>{s}</span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-5 sm:px-6 py-14">
        <div className="section-header">
          <h2>Selected Projects</h2>
          <p>Focused on performance, UX, and maintainable architecture.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={p.title} className={`card ${accent(i)}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold group-hover:underline underline-offset-4">{p.title}</h3>
                <Icon.External className="h-5 w-5 text-zinc-400" />
              </div>
              <p className="mt-2 text-[0.95rem] text-zinc-700">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t, k) => <span key={t} className={`tag ${accent(k)}`}>{t}</span>)}
              </div>
              {p.links.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
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
      <section id="experience" className="mx-auto max-w-6xl px-5 sm:px-6 py-14">
        <div className="section-header"><h2>Experience</h2></div>
        <article className="card accent-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-lg font-semibold">Senior Flutter Developer · Digital Upgraders LLC (Remote)</div>
            <div className="text-sm text-zinc-500">Feb 2023 – Present</div>
          </div>
          <ul className="mt-3 list-disc pl-5 text-zinc-700 space-y-1.5 text-[0.95rem]">
            <li>Lead development of cross-platform apps with clean architecture and robust state management.</li>
            <li>Implemented real-time features, offline capabilities, and performance optimizations.</li>
            <li>Collaborated with designers & backend; mentored developers; owned CI/CD and releases.</li>
          </ul>
        </article>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-6xl px-5 sm:px-6 py-14">
        <div className="section-header"><h2>Education</h2></div>
        <article className="card accent-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-lg font-semibold">BS — Computer Science</div>
            <div className="text-sm text-zinc-500">Oct 2017 – Oct 2021</div>
          </div>
          <div className="mt-1 text-zinc-700 text-[0.95rem]">University of Management & Technology, Lahore</div>
        </article>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 sm:px-6 py-16">
        <article className="card-lg accent-5">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Let’s build something great.</h3>
              <p className="mt-2 text-zinc-700 text-[1rem]">Tell me about your idea, and I’ll propose a practical, high-impact plan.</p>
            </div>
            <div className="flex flex-wrap gap-3.5">
              <a href={LINKS.email} className="btn-primary"><Icon.Mail className="h-4 w-4"/> &nbsp;Email</a>
              <a href={LINKS.phone} className="btn-outline"><Icon.Phone className="h-4 w-4"/> &nbsp;Call</a>
              <a href={LINKS.linkedin} target="_blank" className="btn-outline"><Icon.LinkedIn className="h-4 w-4"/> &nbsp;LinkedIn</a>
              <a href={LINKS.github} target="_blank" className="btn-outline"><Icon.Github className="h-4 w-4"/> &nbsp;GitHub</a>
              <a href={LINKS.resume} target="_blank" className="btn-outline"><Icon.Doc className="h-4 w-4"/> &nbsp;Download CV</a>
            </div>
          </div>
        </article>
        <footer className="mt-10 text-center text-sm text-zinc-500">© {new Date().getFullYear()} {NAME}. All rights reserved.</footer>
      </section>

      {/* Back to top */}
      <a href="#top" className="back-to-top" aria-label="Back to top">↑</a>

      {/* ===== Tokens + Styles ===== */}
      <style>{`
        html { scroll-behavior: smooth; }
        :root{
          --card-bg: 255,255,255;
          --card-border: 24,24,27,0.08;
          --grad-a: #60a5fa; --grad-b: #22d3ee; --grad-c: #a78bfa;
          --grad-d: #fb7185; --grad-e: #f59e0b; --grad-f: #34d399;
          --shadow: 0 18px 48px rgba(0,0,0,.06);
          --shadow-hover: 0 22px 56px rgba(0,0,0,.09);
          --radius: 1.25rem;
        }

        /* Accent themes (cycled) */
        .accent-1::before, .accent-1 .pill-border { background: linear-gradient(120deg,#60a5fa,#22d3ee,#a78bfa); }
        .accent-2::before, .accent-2 .pill-border { background: linear-gradient(120deg,#fb7185,#f59e0b,#f472b6); }
        .accent-3::before, .accent-3 .pill-border { background: linear-gradient(120deg,#34d399,#22d3ee,#60a5fa); }
        .accent-4::before, .accent-4 .pill-border { background: linear-gradient(120deg,#a78bfa,#60a5fa,#22d3ee); }
        .accent-5::before, .accent-5 .pill-border { background: linear-gradient(120deg,#f59e0b,#34d399,#60a5fa); }
        .accent-6::before, .accent-6 .pill-border { background: linear-gradient(120deg,#f472b6,#a78bfa,#22d3ee); }

        /* Buttons & nav */
        .btn-primary{
          display:inline-flex; align-items:center; gap:.6rem; padding:.9rem 1.3rem;
          border-radius:14px; font-size:.95rem; font-weight:700; color:#fff;
          background:linear-gradient(135deg,var(--grad-a),var(--grad-b));
          box-shadow:0 12px 24px rgba(96,165,250,.25);
          transition:transform .15s ease, box-shadow .2s ease, opacity .2s ease; text-decoration:none;
        }
        .btn-primary:hover{ transform:translateY(-1px); box-shadow:0 16px 30px rgba(96,165,250,.3); opacity:.97; }
        .btn-outline{
          display:inline-flex; align-items:center; gap:.6rem; padding:.9rem 1.3rem;
          border-radius:14px; font-size:.95rem; font-weight:700; color:#0b1220; background:#fff;
          border:1px solid #e5e7eb; text-decoration:none; transition:background .2s ease, transform .15s ease;
        }
        .btn-outline:hover{ background:#f8fafc; transform:translateY(-1px); }
        .btn-ghost{
          display:inline-flex; align-items:center; gap:.5rem; padding:.6rem .9rem;
          border-radius:12px; font-size:.95rem; border:1px solid #ececec; background:#fff; transition:background .2s ease;
        }
        .btn-ghost:hover{ background:#f8fafc; }
        .nav-link{ color:#0b1220; text-decoration:none; font-weight:600; letter-spacing:.2px; }
        .nav-link:hover{ color:#2563eb; }
        .menu-item{ display:block; padding:.7rem .9rem; border-radius:12px; color:#0b1220; text-decoration:none; }
        .menu-item:hover{ background:#f8fafc; }
        .menu-cta{ display:block; padding:.7rem .9rem; border-radius:12px; color:#fff; text-decoration:none; background:linear-gradient(135deg,var(--grad-a),var(--grad-b)); text-align:center; }
        .icon-link{ display:inline-flex; align-items:center; gap:.45rem; text-decoration:none; color:#0b1220; font-weight:600; }
        .icon-link:hover{ color:#2563eb; }

        .section-header h2{ font-size:1.6rem; font-weight:800; letter-spacing:.2px; }
        .section-header p{ margin-top:.6rem; color:#52525b; font-size:1.02rem; }

        /* Unified cards */
        .card,.card-lg,.stat{
          position:relative; overflow:hidden; background:rgba(var(--card-bg),0.98);
          border-radius:var(--radius); border:1px solid rgba(var(--card-border)); box-shadow:var(--shadow);
          transition:transform .22s ease, box-shadow .22s ease;
        }
        .card::before,.card-lg::before,.stat::before{
          content:""; position:absolute; inset:0; padding:1px; border-radius:inherit;
          background:linear-gradient(120deg,var(--grad-a),var(--grad-b),var(--grad-c));
          -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite:xor; mask-composite:exclude; opacity:.9; pointer-events:none;
        }
        .card{ padding:1.35rem; }
        .card-lg{ padding:2rem; border-radius:calc(var(--radius) + .25rem); }
        .card:hover,.card-lg:hover,.stat:hover{ transform:translateY(-3px); box-shadow:var(--shadow-hover); }

        /* Stats — more colorful + spacing */
        .stat{ padding:1.2rem 1.35rem; background:linear-gradient(180deg,#ffffff 0%, #f8fbff 60%, #f5f3ff 100%); }
        .stat-value{ font-size:1.35rem; font-weight:900; letter-spacing:.2px; }
        .stat-label{ font-size:.72rem; text-transform:uppercase; letter-spacing:.12em; color:#6b7280; margin-top:.2rem; }

        /* Skill pills — colorful, roomier */
        .skill-pill{
          display:inline-flex; align-items:center; gap:.55rem;
          padding:.7rem 1.05rem; border-radius:9999px; font-size:.95rem; font-weight:700; color:#0b1220;
          background:linear-gradient(180deg,#ffffff 0%, #f9fbff 60%, #fff1ff 100%);
          border:1px solid rgba(24,24,27,.08); position:relative;
          box-shadow:0 10px 22px rgba(0,0,0,.06);
          transition:transform .15s ease, box-shadow .22s ease, background .2s ease;
        }
        .skill-pill::after{
          content:""; position:absolute; inset:0; border-radius:inherit; padding:1px; class: pill-border;
          background:linear-gradient(120deg,var(--grad-a),var(--grad-b));
          -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite:xor; mask-composite:exclude; opacity:.8; pointer-events:none;
        }
        .skill-pill:hover{ transform:translateY(-1px); box-shadow:0 14px 26px rgba(0,0,0,.1); background:linear-gradient(180deg,#ffffff 0%, #f4f9ff 60%, #ffeefe 100%); }

        /* Tags, links */
        .tag{
          display:inline-block; padding:.22rem .6rem; border-radius:9999px;
          background:#f4f4f5; color:#3f3f46; font-size:.78rem; font-weight:700; border:1px solid rgba(24,24,27,.08);
        }
        .link{ color:#0b1220; font-weight:800; text-decoration:underline; }
        .link:hover{ color:#2563eb; }

        /* Avatar ring */
        .avatar-ring{
          position:absolute; inset:-12px; border-radius:9999px;
          background:conic-gradient(from 0deg,#60a5fa,#a78bfa,#f472b6,#22d3ee,#60a5fa);
          filter:blur(18px); opacity:.28; z-index:-1;
        }

        /* Back to top */
        .back-to-top{
          position:fixed; right:1.25rem; bottom:1.25rem; border-radius:9999px; padding:.7rem 1.1rem;
          color:#fff; background:linear-gradient(135deg,var(--grad-a),var(--grad-b)); text-decoration:none;
          box-shadow:0 18px 34px rgba(34,211,238,.28);
        }
        .back-to-top:hover{ filter:brightness(.98); }

        /* Animations */
        @keyframes floatSlow{ 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(10px) } }
        .animate-floatSlow{ animation:floatSlow 9s ease-in-out infinite; }
        .animation-delay-1200{ animation-delay:1.2s; }
        @keyframes fadeInUp{ from{ opacity:0; transform:translateY(10px) } to{ opacity:1; transform:translateY(0) } }
        .fade-in-up{ animation:fadeInUp .6s ease-out both; }
        .scale-in{ animation:fadeInUp .5s ease-out both; }

        /* Responsive tweaks */
        @media (max-width: 640px){
          header .btn-primary{ padding:.75rem 1.05rem; }
          .back-to-top{ right:.9rem; bottom:.9rem; }
        }
      `}</style>
    </main>
  );
}
