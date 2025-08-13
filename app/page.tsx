// app/page.tsx — Light-only, colorful portfolio with unified gradient-border cards (no skill icons)
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

  // Concise, balanced skills list (NO ICONS)
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
      color: "from-sky-400 to-cyan-400",
    },
    {
      title: "Integrations & Backend",
      points: ["REST APIs / Firebase", "Auth, Push, Analytics", "Payments & Subscriptions"],
      color: "from-fuchsia-400 to-pink-400",
    },
    {
      title: "Quality & Delivery",
      points: ["Unit/Widget/Integration Tests", "CI/CD (Fastlane)", "Store release & monitoring"],
      color: "from-emerald-400 to-lime-400",
    },
  ];

  const projects = [
    { title: "Comnow (Digital Call System)", tags: ["Flutter", "iOS", "Android"], blurb: "Digital communication with messaging, voice notes, and efficient in-app workflows.", links: [{ label: "App Store", href: "https://apps.apple.com/ae/app/comnow/id1614790733" }] },
    { title: "Crime Scene Guide", tags: ["Flutter", "Play Store"], blurb: "Scene documentation and note-taking to streamline investigation workflows.", links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.INAR.investigation" }] },
    { title: "LHFADEZ Barbering", tags: ["Flutter", "Stripe", "Scheduling"], blurb: "Booking for haircuts & grooming with seamless scheduling and promotions.", links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.rubikkube.lhfadezbarbering.android" }] },
    { title: "Only Nikah", tags: ["Flutter", "Firebase"], blurb: "Nikah services with guided flows and notifications.", links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.hyxio.only_nikkah" }] },
  ];

  return (
    <main id="top" className="bg-gradient-to-b from-white via-[#fbfdff] to-[#f7f8ff] text-zinc-900">
      {/* Background colorful blobs */}
      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 -left-24 h-80 w-80 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-sky-300 to-cyan-300 animate-floatSlow" />
        <div className="absolute top-10 -right-28 h-96 w-96 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-pink-300 to-fuchsia-300 animate-floatSlow animation-delay-1200" />
        <div className="absolute bottom-0 left-1/3 translate-x-[-50%] h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-lime-300 to-emerald-300 animate-floatSlow animation-delay-2400" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 lg:px-6 py-3">
          <div className="flex items-center gap-3">
            <Image
              src={LINKS.profilePic}
              alt={NAME}
              width={42}
              height={42}
              className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm"
              priority
            />
            <span className="text-sm font-semibold tracking-tight">{NAME}</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-[0.92rem]">
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className="btn-primary">Resume</a>
          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">
            <details ref={menuRef} className="relative">
              <summary className="btn-ghost cursor-pointer select-none">Menu</summary>
              <div className="absolute right-0 mt-2 w-64 rounded-xl border border-zinc-200 bg-white/95 backdrop-blur-md shadow-lg p-2 grid gap-1 z-50">
                {["#projects","#skills","#experience","#education","#services","#contact"].map((href) => (
                  <a key={href} href={href} onClick={closeMenu} className="menu-item">{href.replace("#", "")}</a>
                ))}
                <a
                  href={LINKS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="menu-cta"
                >
                  Resume
                </a>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 lg:px-6 pt-12 lg:pt-16 pb-12 lg:pb-18 grid md:grid-cols-2 gap-10 items-center fade-in-up">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 bg-white/70 backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400" />
            Open to opportunities
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            {ROLE}
          </h1>
          <p className="max-w-xl text-zinc-600 text-lg leading-relaxed">
            {TAGLINE}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">Start a project</a>
            <a href="#projects" className="btn-outline">View projects</a>
          </div>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-zinc-700">
            <a href={LINKS.linkedin} target="_blank" className="icon-link">LinkedIn</a>
            <a href={LINKS.github} target="_blank" className="icon-link">GitHub</a>
            <a href={LINKS.email} className="icon-link">Email</a>
            <a href={LINKS.phone} className="icon-link">Call</a>
            <a href={LINKS.whatsapp} target="_blank" className="icon-link">WhatsApp</a>
          </div>
        </div>

        {/* Avatar (centered on mobile, right on desktop) */}
        <div className="flex md:justify-end justify-center">
          <div className="relative inline-block scale-in">
            <div className="avatar-ring" />
            <Image
              src={LINKS.profilePic}
              alt={NAME}
              width={320}
              height={320}
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-white shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Highlights – colorful stat cards */}
      <section className="mx-auto max-w-6xl px-4 lg:px-6 pb-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <article key={h.label} className={`stat stat--${i}`}>
              <div className="stat-value">{h.value}</div>
              <div className="stat-label">{h.label}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Services – colorful headers */}
      <section id="services" className="mx-auto max-w-6xl px-4 lg:px-6 py-12">
        <div className="section-header">
          <h2>Services</h2>
          <p>Everything you need to ship and scale a quality Flutter app.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {services.map((s) => (
            <article key={s.title} className="card">
              <div className={`pill ${s.color}`}>{s.title}</div>
              <ul className="mt-4 grid gap-2.5 text-sm text-zinc-700">
                {s.points.map((p) => <li key={p} className="li-dot">{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Skills – colorful chips, roomy spacing (NO ICONS) */}
      <section id="skills" className="mx-auto max-w-6xl px-4 lg:px-6 py-12">
        <div className="section-header">
          <h2>Skills & Tools</h2>
          <p>A focused toolbox I use to ship quality apps fast.</p>
        </div>

        <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3.5">
          {skills.map((s, idx) => (
            <span key={s} className={`chip chip-${(idx % 6) + 1}`} title={s}>
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 lg:px-6 py-12">
        <div className="section-header">
          <h2>Selected Projects</h2>
          <p>Focused on performance, UX, and maintainable architecture.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="card group">
              <h3 className="text-lg font-semibold tracking-tight group-hover:underline underline-offset-4">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-zinc-600">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              {p.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
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

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 lg:px-6 py-12">
        <div className="section-header"><h2>Experience</h2></div>
        <article className="card">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-lg font-semibold">Senior Flutter Developer · Digital Upgraders LLC (Remote)</div>
            <div className="text-sm text-zinc-500">Feb 2023 – Present</div>
          </div>
          <ul className="mt-4 grid gap-2.5 text-sm text-zinc-700">
            <li className="li-dot">Lead development of cross-platform apps with clean architecture and robust state management.</li>
            <li className="li-dot">Implemented real-time features, offline capabilities, and performance optimizations.</li>
            <li className="li-dot">Collaborated with designers & backend; mentored developers; owned CI/CD and releases.</li>
          </ul>
        </article>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-6xl px-4 lg:px-6 py-12">
        <div className="section-header"><h2>Education</h2></div>
        <article className="card">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-lg font-semibold">BS — Computer Science</div>
            <div className="text-sm text-zinc-500">Oct 2017 – Oct 2021</div>
          </div>
          <div className="mt-1 text-zinc-600 text-sm">University of Management & Technology, Lahore</div>
        </article>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 lg:px-6 py-16">
        <article className="card-lg">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold">Let’s build something great.</h3>
              <p className="mt-2 text-zinc-600">Tell me about your idea, and I’ll propose a practical, high-impact plan.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={LINKS.email} className="btn-primary">Email</a>
              <a href={LINKS.phone} className="btn-outline">Call</a>
              <a href={LINKS.whatsapp} target="_blank" className="btn-outline">WhatsApp</a>
              <a href={LINKS.linkedin} target="_blank" className="btn-outline">LinkedIn</a>
              <a href={LINKS.github} target="_blank" className="btn-outline">GitHub</a>
              <a href={LINKS.resume} target="_blank" className="btn-outline">Download CV</a>
            </div>
          </div>
        </article>
        <footer className="mt-10 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </footer>
      </section>

      {/* Back to top */}
      <a href="#top" className="back-to-top" aria-label="Back to top">↑</a>

      {/* Tokens + Colorful Card CSS */}
      <style>{`
        html { scroll-behavior: smooth; }
        :root{
          --card-bg: 255,255,255;
          --card-border: 24,24,27,0.08;
          --grad-a: #60a5fa;      /* sky-400 */
          --grad-b: #22d3ee;      /* cyan-400 */
          --grad-c: #a78bfa;      /* violet-400 */
          --shadow: 0 18px 40px rgba(0,0,0,.06);
          --shadow-hover: 0 22px 44px rgba(0,0,0,.09);
          --radius: 1.25rem;
        }

        /* Buttons & nav */
        .btn-primary{
          display:inline-flex; align-items:center; gap:.5rem;
          padding:.85rem 1.3rem; border-radius:14px;
          font-size:.95rem; font-weight:700; color:#fff;
          background:linear-gradient(135deg,#6366f1,#22d3ee); /* indigo -> cyan */
          box-shadow:0 12px 22px rgba(99,102,241,.25);
          transition:transform .15s ease, box-shadow .2s ease, opacity .2s ease;
          text-decoration:none;
        }
        .btn-primary:hover{ transform:translateY(-2px); box-shadow:0 16px 28px rgba(99,102,241,.28); opacity:.97; }
        .btn-outline{
          display:inline-flex; align-items:center; gap:.5rem;
          padding:.85rem 1.3rem; border-radius:14px;
          font-size:.95rem; font-weight:700; color:#0b1220;
          border:1px solid #e6e8ee; background:#fff; text-decoration:none;
          transition:background .2s ease, transform .15s ease, box-shadow .2s ease;
        }
        .btn-outline:hover{ background:#f7faff; transform:translateY(-2px); box-shadow:0 10px 18px rgba(34,211,238,.15); }
        .btn-ghost{
          display:inline-flex; align-items:center; gap:.5rem;
          padding:.55rem .9rem; border-radius:12px; font-size:.92rem;
          border:1px solid #ececf1; background:#fff; transition:background .2s ease;
        }
        .btn-ghost:hover{ background:#f8faff; }
        .nav-link{ color:#0b1220; text-decoration:none; font-weight:600; letter-spacing:.2px; }
        .nav-link:hover{ color:#2563eb; }
        .icon-link{ color:#0b1220; text-decoration:none; font-weight:600; }
        .icon-link:hover{ color:#2563eb; }

        .menu-item{ display:block; padding:.7rem .9rem; border-radius:12px; color:#0b1220; text-decoration:none; font-weight:600; }
        .menu-item:hover{ background:#f6f8ff; }
        .menu-cta{
          display:block; padding:.7rem .9rem; border-radius:12px; color:#fff; text-decoration:none;
          background:linear-gradient(135deg,#22d3ee,#06b6d4); text-align:center; font-weight:700;
        }

        .section-header h2{ font-size:1.6rem; font-weight:800; letter-spacing:-.02em; }
        .section-header p{ margin-top:.55rem; color:#5b5e68; font-size:1rem; }

        /* Unified gradient-border card */
        .card,.card-lg,.stat{
          position:relative; overflow:hidden;
          background:rgba(var(--card-bg),0.98); border-radius:var(--radius);
          border:1px solid rgba(var(--card-border)); box-shadow:var(--shadow);
          transition:transform .22s ease, box-shadow .22s ease;
        }
        .card::before,.card-lg::before,.stat::before{
          content:""; position:absolute; inset:0; padding:1px; border-radius:inherit;
          background:linear-gradient(120deg,#60a5fa,#22d3ee,#a78bfa,#60a5fa);
          -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite:xor; mask-composite:exclude; opacity:.9; pointer-events:none;
        }
        .card{ padding:1.35rem; }
        .card-lg{ padding:2rem; border-radius:calc(var(--radius) + .25rem); }
        .card:hover,.card-lg:hover,.stat:hover{ transform:translateY(-4px); box-shadow:var(--shadow-hover); }

        /* Stat cards: extra color bands per index */
        .stat{ padding:1.2rem 1.25rem; }
        .stat-value{ font-size:1.35rem; font-weight:900; letter-spacing:.2px; }
        .stat-label{ font-size:.72rem; text-transform:uppercase; letter-spacing:.14em; color:#6b7280; margin-top:.2rem; }
        .stat--0{ background:linear-gradient(180deg,#ffffff 0%, #f0f7ff 100%); }
        .stat--1{ background:linear-gradient(180deg,#ffffff 0%, #fff4f9 100%); }
        .stat--2{ background:linear-gradient(180deg,#ffffff 0%, #f3fff3 100%); }
        .stat--3{ background:linear-gradient(180deg,#ffffff 0%, #fffdf3 100%); }

        /* Services pill headers */
        .pill{
          display:inline-flex; align-items:center; padding:.55rem .8rem; border-radius:9999px;
          font-weight:800; font-size:.85rem; color:#0b1220; letter-spacing:.3px;
          background:#fff; border:1px solid rgba(24,24,27,.08);
          box-shadow:0 8px 16px rgba(0,0,0,.05), inset 0 0 0 1px rgba(255,255,255,.6);
          position:relative;
        }
        .pill::after{
          content:""; position:absolute; inset:0; border-radius:inherit; padding:1px;
          background:linear-gradient(135deg,#22d3ee,#a78bfa);
          -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite:xor; mask-composite:exclude; opacity:.8; pointer-events:none;
        }
        .pill.from-sky-400.to-cyan-400{ background:linear-gradient(180deg,#ffffff 0%, #f0fbff 100%); }
        .pill.from-fuchsia-400.to-pink-400{ background:linear-gradient(180deg,#ffffff 0%, #fff0f6 100%); }
        .pill.from-emerald-400.to-lime-400{ background:linear-gradient(180deg,#ffffff 0%, #f0fff3 100%); }

        /* Skills chips – 6 hues cycling */
        .chip{
          display:inline-flex; align-items:center; justify-content:center;
          padding:.6rem .9rem; border-radius:14px; font-size:.9rem; font-weight:700;
          color:#0b1220; border:1px solid rgba(24,24,27,.08); background:#fff;
          box-shadow:0 8px 18px rgba(0,0,0,.05); transition:transform .15s ease, box-shadow .2s ease;
          white-space:nowrap;
        }
        .chip:hover{ transform:translateY(-2px); box-shadow:0 14px 26px rgba(0,0,0,.08); }
        .chip-1{ background:linear-gradient(180deg,#ffffff 0%, #f0f7ff 100%); }
        .chip-2{ background:linear-gradient(180deg,#ffffff 0%, #fef6ff 100%); }
        .chip-3{ background:linear-gradient(180deg,#ffffff 0%, #f2fff8 100%); }
        .chip-4{ background:linear-gradient(180deg,#ffffff 0%, #fff9f2 100%); }
        .chip-5{ background:linear-gradient(180deg,#ffffff 0%, #f3fbff 100%); }
        .chip-6{ background:linear-gradient(180deg,#ffffff 0%, #f8f2ff 100%); }

        /* List bullets */
        .li-dot{ position:relative; padding-left:1.1rem; }
        .li-dot::before{
          content:""; position:absolute; left:0; top:.55rem; width:.5rem; height:.5rem; border-radius:9999px;
          background:linear-gradient(135deg,#60a5fa,#22d3ee);
          box-shadow:0 0 0 2px #fff;
        }

        /* Tags & links */
        .tag{ display:inline-block; padding:.22rem .55rem; border-radius:9999px; background:#f4f4f5; color:#3f3f46; font-size:.75rem; font-weight:700; }
        .link{ color:#0b1220; font-weight:800; text-decoration:underline; }
        .link:hover{ color:#2563eb; }

        /* Avatar ring */
        .avatar-ring{
          position:absolute; inset:-12px; border-radius:9999px;
          background:conic-gradient(from 0deg,#60a5fa,#a78bfa,#22d3ee,#60a5fa);
          filter:blur(16px); opacity:.32; z-index:-1;
        }

        /* Back to top */
        .back-to-top{
          position:fixed; right:1.25rem; bottom:1.25rem; border-radius:9999px;
          padding:.7rem 1rem; color:#fff; background:linear-gradient(135deg,#22d3ee,#6366f1);
          text-decoration:none; box-shadow:0 16px 28px rgba(34,211,238,.25);
        }
        .back-to-top:hover{ filter:brightness(.98); }

        /* Animations */
        @keyframes floatSlow{ 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(10px) } }
        .animate-floatSlow{ animation:floatSlow 10s ease-in-out infinite; }
        .animation-delay-1200{ animation-delay:1.2s; }
        .animation-delay-2400{ animation-delay:2.4s; }
        @keyframes fadeInUp{ from{ opacity:0; transform:translateY(10px) } to{ opacity:1; transform:translateY(0) } }
        .fade-in-up{ animation:fadeInUp .6s ease-out both; }
        .scale-in{ animation:fadeInUp .55s ease-out both; }

        /* Responsive tweaks */
        @media (max-width: 640px){
          header .btn-primary{ padding:.7rem 1.1rem; }
          .back-to-top{ right:.9rem; bottom:.9rem; }
        }
      `}</style>
    </main>
  );
}
