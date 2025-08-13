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
  profilePic: "/profile_image.jpeg?v=6",
};

export default function Home() {
  // Mobile menu (auto-close)
  const menuRef = useRef<HTMLDetailsElement | null>(null);
  const closeMenu = () => {
    if (menuRef.current) menuRef.current.open = false;
  };

  const highlights = [
    { label: "Experience", value: "3+ yrs" },
    { label: "Platforms", value: "iOS · Android · Web" },
    { label: "Focus", value: "Performance & UX" },
    { label: "Methodology", value: "Agile" },
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
      points: ["Unit/Widget/Integration Tests", "CI/CD (Fastlane)", "Play Store / App Store Release"],
    },
  ];

  const skills = [
    "Flutter", "Dart", "Android/iOS", "Flutter Web",
    "Bloc", "Provider", "GetX", "Riverpod",
    "REST APIs", "Firebase (Auth, Firestore, FCM)", "SQLite/Sqflite", "Hive",
    "Clean Architecture", "Unit/Widget/Integration Tests", "CI/CD (Fastlane)",
    "Platform Channels (Pigeon)", "ML Kit (OCR)", "Push Notifications", "Maps & Geolocation",
    "Git/GitHub", "Jira", "Asana", "VS Code", "Android Studio", "Xcode",
  ];

  const projects = [
    {
      title: "Comnow (Digital Call System)",
      tags: ["Flutter", "iOS", "Android"],
      blurb: "Digital communication with messaging, voice notes, and efficient in-app workflows.",
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
      blurb: "Booking for haircuts & grooming with seamless scheduling and promotions.",
      links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.rubikkube.lhfadezbarbering.android" }],
    },
    {
      title: "Only Nikah",
      tags: ["Flutter", "Firebase"],
      blurb: "Nikah services with guided flows and notifications.",
      links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.hyxio.only_nikkah" }],
    },
  ];

  return (
    <main id="top" className="bg-gradient-to-b from-white to-zinc-50 text-zinc-900">
      {/* Soft background accents */}
      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full blur-3xl opacity-25 bg-blue-300 animate-floatSlow" />
        <div className="absolute top-12 -right-28 h-96 w-96 rounded-full blur-3xl opacity-20 bg-cyan-300 animate-floatSlow animation-delay-1200" />
      </div>

      {/* AppBar */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <Image
              src={LINKS.profilePic}
              alt={NAME}
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover ring-1 ring-inset ring-white shadow-sm"
              priority
            />
            <span className="text-sm font-medium">{NAME}</span>
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
              <summary className="btn-ghost cursor-pointer select-none">Menu</summary>
              <div className="absolute right-0 mt-2 w-60 rounded-xl border border-zinc-200 bg-white/80 backdrop-blur-md shadow-lg p-2 grid gap-1 z-50">
                {[
                  ["#projects", "Projects"],
                  ["#skills", "Skills"],
                  ["#experience", "Experience"],
                  ["#education", "Education"],
                  ["#services", "Services"],
                  ["#contact", "Contact"],
                ].map(([href, label]) => (
                  <a key={href} href={href} onClick={closeMenu} className="menu-item">{label}</a>
                ))}
                <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="menu-cta">Resume</a>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-16 grid md:grid-cols-2 gap-10 items-center fade-in-up">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 bg-white/60 backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Open to opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{ROLE}</h1>
          <p className="max-w-xl text-zinc-600 text-base sm:text-lg leading-relaxed">{TAGLINE}</p>
          <div className="flex gap-3">
            <a href="#contact" className="btn-primary">Start a project</a>
            <a href="#projects" className="btn-outline">View projects</a>
          </div>
          <div className="mt-3 flex flex-wrap gap-5 text-sm text-zinc-600">
            <a href={LINKS.linkedin} target="_blank" className="hover:text-blue-600">LinkedIn</a>
            <a href={LINKS.github} target="_blank" className="hover:text-blue-600">GitHub</a>
            <a href={LINKS.email} className="hover:text-blue-600">Email</a>
            <a href={LINKS.phone} className="hover:text-blue-600">Call</a>
          </div>
        </div>
        <div className="flex justify-center scale-in">
          <div className="relative">
            <div className="avatar-ring" />
            <Image
              src={LINKS.profilePic}
              alt={NAME}
              width={280}
              height={280}
              className="w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-white shadow-xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Highlights (Aurora Cards) */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="aurora-card">
              <div className="text-2xl font-bold">{h.value}</div>
              <div className="text-xs tracking-wide uppercase text-zinc-500">{h.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services (Glass Cards) */}
      <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header">
          <h2>Services</h2>
          <p>Everything you need to ship and scale a quality Flutter app.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {services.map((s) => (
            <div key={s.title} className="glass-card">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills (Chips) */}
      <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header">
          <h2>Skills & Tools</h2>
          <p>Technologies used to deliver reliable, scalable mobile apps.</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
      </section>

      {/* Projects (Gradient Border Cards) */}
      <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header">
          <h2>Selected Projects</h2>
          <p>Focused on performance, UX, and maintainable architecture.</p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="gradient-card group">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold group-hover:underline underline-offset-4">{p.title}</h3>
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-zinc-400 group-hover:text-zinc-700">
                  <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Z" />
                </svg>
              </div>
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
            </div>
          ))}
        </div>
      </section>

      {/* Experience — only Digital Upgraders */}
      <section id="experience" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header"><h2>Experience</h2></div>
        <div className="gradient-card">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-lg font-semibold">Senior Flutter Developer · Digital Upgraders LLC (Remote)</div>
            <div className="text-sm text-zinc-500">Feb 2023 – Present</div>
          </div>
          <ul className="mt-3 list-disc pl-5 text-zinc-700 space-y-1">
            <li>Lead development of cross-platform apps with clean architecture and robust state management.</li>
            <li>Implemented real-time features, offline capabilities, and performance optimizations.</li>
            <li>Collaborated with designers & backend; mentored developers; owned CI/CD and releases.</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header"><h2>Education</h2></div>
        <div className="glass-card">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-lg font-semibold">BS — Computer Science</div>
            <div className="text-sm text-zinc-500">Oct 2017 – Oct 2021</div>
          </div>
          <div className="mt-1 text-zinc-600">University of Management & Technology, Lahore</div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="card-lg">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Let’s build something great.</h3>
              <p className="mt-1 text-zinc-600">Tell me about your idea, and I’ll propose a practical, high-impact plan.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={LINKS.email} className="btn-primary">Email me</a>
              <a href={LINKS.phone} className="btn-outline">Call</a>
              <a href={LINKS.linkedin} target="_blank" className="btn-outline">LinkedIn</a>
              <a href={LINKS.github} target="_blank" className="btn-outline">GitHub</a>
              <a href={LINKS.resume} target="_blank" className="btn-outline">Download CV</a>
            </div>
          </div>
        </div>
        <footer className="mt-10 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </footer>
      </section>

      {/* Back to top */}
      <a href="#top" className="back-to-top">↑</a>

      {/* Styles (unique cards + polish) */}
      <style>{`
        html { scroll-behavior: smooth; }

        /* Buttons & nav */
        .btn-primary { 
          @apply rounded-xl bg-blue-600 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-blue-500;
        }
        .btn-outline { 
          @apply rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50;
        }
        .btn-ghost {
          @apply rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50;
        }
        .nav-link {
          @apply hover:text-blue-600 transition;
        }
        .menu-item {
          @apply rounded-lg px-3 py-2 text-sm hover:bg-zinc-50;
        }
        .menu-cta {
          @apply rounded-lg px-3 py-2 text-sm bg-blue-600 text-white hover:bg-blue-500;
        }

        /* Sections */
        .section-header h2 { @apply text-2xl font-semibold; }
        .section-header p { @apply mt-2 text-zinc-600; }

        /* Unique card styles */
        .aurora-card {
          position: relative;
          border-radius: 1rem;
          padding: 1.1rem;
          background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.85));
          border: 1px solid rgba(24,24,27,0.08);
          box-shadow: 0 10px 25px rgba(0,0,0,.06);
          overflow: hidden;
        }
        .aurora-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 1rem;
          background: conic-gradient(from 180deg at 50% 50%, #60a5fa, #22d3ee, #a78bfa, #60a5fa);
          filter: blur(18px);
          opacity: .18;
          z-index: 0;
        }
        .aurora-card > * { position: relative; z-index: 1; }

        .glass-card {
          @apply rounded-2xl p-5 border;
          background: linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0.65));
          border-color: rgba(24,24,27,0.08);
          box-shadow: 0 12px 30px rgba(0,0,0,.06);
          backdrop-filter: blur(6px);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .glass-card:hover { transform: translateY(-2px); box-shadow: 0 16px 36px rgba(0,0,0,.08); }

        .gradient-card {
          position: relative;
          border-radius: 1.25rem;
          padding: 1.1rem;
          background: white;
          box-shadow: 0 12px 28px rgba(0,0,0,.06);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .gradient-card::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 1px;
          border-radius: inherit;
          background: linear-gradient(120deg, rgba(96,165,250,.9), rgba(34,211,238,.9));
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
        }
        .gradient-card:hover { transform: translateY(-3px); box-shadow: 0 18px 40px rgba(0,0,0,.08); }

        .card-lg {
          @apply rounded-3xl border p-8;
          background: linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.8));
          border-color: rgba(24,24,27,0.08);
          box-shadow: 0 14px 40px rgba(0,0,0,.06);
        }

        .chip {
          @apply inline-block rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-700;
          box-shadow: 0 4px 10px rgba(0,0,0,.04);
          transition: transform .15s ease;
        }
        .chip:hover { transform: translateY(-1px); }

        .tag {
          @apply rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700;
        }
        .link {
          @apply text-sm font-semibold text-zinc-700 hover:text-blue-600 underline;
        }

        /* Avatar ring effect */
        .avatar-ring {
          position: absolute;
          inset: -10px;
          border-radius: 9999px;
          background: conic-gradient(from 0deg, #60a5fa, #a78bfa, #22d3ee, #60a5fa);
          filter: blur(14px);
          opacity: .25;
          z-index: -1;
        }

        /* Back to top */
        .back-to-top {
          @apply fixed bottom-5 right-5 rounded-full bg-blue-600 text-white px-4 py-3 shadow-lg hover:bg-blue-500;
        }

        /* Animations */
        @keyframes floatSlow { 0%,100% { transform: translateY(0) } 50% { transform: translateY(10px) } }
        .animate-floatSlow { animation: floatSlow 9s ease-in-out infinite; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }
        .fade-in-up { animation: fadeInUp .6s ease-out both; }
        .scale-in { animation: fadeInUp .5s ease-out both; }
      `}</style>
    </main>
  );
}
