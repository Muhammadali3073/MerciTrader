"use client";

import { useRef } from "react";
import Image from "next/image";

// ——— Simple inline icon system (no extra deps) ———
function Icon({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  const common = "fill-none stroke-current stroke-[1.8]";
  switch (name) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden>
          <path d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 3.77 5.07 5.07 0 0 0 17.91 0S16.73-.35 14 1.3a13.38 13.38 0 0 0-5 0C6.27-.35 5.09 0 5.09 0A5.07 5.07 0 0 0 5 3.77 5.44 5.44 0 0 0 3.5 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z"/>
          <rect x="2" y="9" width="4" height="12" rx="1"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden>
          <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"/>
          <path d="m22 8-10 6L2 8"/>
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden>
          <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.1 1h2a2 2 0 0 1 2 1.72c.12.89.33 1.76.63 2.6a2 2 0 0 1-.45 2.11L7 8a16 16 0 0 0 6 6l.57-1.28a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.6.63A2 2 0 0 1 22 16.92Z"/>
        </svg>
      );
    case "external":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden>
          <path d="M14 3h7v7"/>
          <path d="M10 14 21 3"/>
          <path d="M21 14v7H3V3h7"/>
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden>
          <path d="M20 6 9 17l-5-5"/>
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden>
          <path d="m8 9-5 3 5 3"/>
          <path d="m16 9 5 3-5 3"/>
          <path d="m14 4-4 16"/>
        </svg>
      );
    case "mobile":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden>
          <rect x="7" y="2" width="10" height="20" rx="2"/>
          <path d="M11 18h2"/>
        </svg>
      );
    case "web":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden>
          <circle cx="12" cy="12" r="10"/>
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z"/>
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden>
          <path d="M17.5 19H7a5 5 0 0 1 0-10 6 6 0 0 1 11.4 1.5H19a4 4 0 0 1 0 8Z"/>
        </svg>
      );
    case "db":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden>
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
          <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/>
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden>
          <circle cx="12" cy="12" r="3"/>
          <path d="M19 12a7 7 0 1 1-7-7"/>
          <path d="M12 5v7l4 4"/>
        </svg>
      );
    case "test":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden>
          <path d="M9 3h6M10 3v5a2 2 0 0 1-.59 1.41L5 14v4a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-4l-4.41-4.59A2 2 0 0 1 14 8V3"/>
        </svg>
      );
    case "rocket":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden>
          <path d="M14 4a8 8 0 0 1 6 6l-7 7-5-5 6-8Z"/>
          <path d="m5 19 3-3"/>
          <path d="M7 7h3"/>
        </svg>
      );
    case "fire":
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden>
          <path d="M12 2s3 3 3 6a3 3 0 0 1-6 0c0-3 3-6 3-6Z"/>
          <path d="M5 13a7 7 0 1 0 14 0c0-2.5-1.5-3.5-3-5-.5 2-2 3-4 3s-3.5-1-4-3c-1.5 1.5-3 2.5-3 5Z"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={`${className} ${common}`} aria-hidden>
          <circle cx="12" cy="12" r="6"/>
        </svg>
      );
  }
}

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
  profilePic: "/profile_image.jpeg?v=9",
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

  const services = [
    { title: "Flutter App Development", points: ["iOS, Android & Web", "Clean Architecture", "State Management (Bloc/GetX/Riverpod)"] },
    { title: "Integrations & Backend", points: ["REST APIs / Firebase", "Auth, Push, Analytics", "Payments & Subscriptions"] },
    { title: "Quality & Delivery", points: ["Unit/Widget/Integration Tests", "CI/CD (Fastlane)", "Play Store / App Store Release"] },
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
    { title: "Comnow (Digital Call System)", tags: ["Flutter", "iOS", "Android"], blurb: "Digital communication with messaging, voice notes, and efficient in-app workflows.", links: [{ label: "App Store", href: "https://apps.apple.com/ae/app/comnow/id1614790733" }] },
    { title: "Crime Scene Guide", tags: ["Flutter", "Play Store"], blurb: "Scene documentation and note-taking to streamline investigation workflows.", links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.INAR.investigation" }] },
    { title: "LHFADEZ Barbering", tags: ["Flutter", "Stripe", "Scheduling"], blurb: "Booking for haircuts & grooming with seamless scheduling and promotions.", links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.rubikkube.lhfadezbarbering.android" }] },
    { title: "Only Nikah", tags: ["Flutter", "Firebase"], blurb: "Nikah services with guided flows and notifications.", links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.hyxio.only_nikkah" }] },
  ];

  // Map a skill to an icon name
  const iconFor = (s: string): string => {
    const k = s.toLowerCase();
    if (k.includes("android") || k.includes("ios") || k.includes("mobile")) return "mobile";
    if (k.includes("web")) return "web";
    if (k.includes("rest") || k.includes("api")) return "cloud";
    if (k.includes("firebase")) return "fire";
    if (k.includes("sqlite") || k.includes("hive") || k.includes("db")) return "db";
    if (k.includes("git")) return "git";
    if (k.includes("test")) return "test";
    if (k.includes("ci/cd") || k.includes("fastlane")) return "rocket";
    return "code";
  };

  return (
    <main id="top" className="bg-gradient-to-b from-white to-zinc-50 text-zinc-900">
      {/* Background accents */}
      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full blur-3xl opacity-25 bg-gradient-to-br from-blue-300 to-cyan-300 animate-floatSlow" />
        <div className="absolute top-12 -right-28 h-96 w-96 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-cyan-300 to-indigo-300 animate-floatSlow animation-delay-1200" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <Image src={LINKS.profilePic} alt={NAME} width={40} height={40} className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm" priority />
            <span className="text-sm font-medium">{NAME}</span>
          </div>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className="btn-primary">Resume</a>
          </nav>
          <div className="md:hidden">
            <details ref={menuRef} className="relative">
              <summary className="btn-ghost cursor-pointer select-none">Menu</summary>
              <div className="absolute right-0 mt-2 w-60 rounded-xl border border-zinc-200 bg-white/85 backdrop-blur-md shadow-lg p-2 grid gap-1 z-50">
                {[["#projects","Projects"],["#skills","Skills"],["#experience","Experience"],["#education","Education"],["#services","Services"],["#contact","Contact"]].map(([href,label]) => (
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
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-400" />
            Open to opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{ROLE}</h1>
          <p className="max-w-xl text-zinc-600 text-base sm:text-lg leading-relaxed">{TAGLINE}</p>
          <div className="flex gap-3">
            <a href="#contact" className="btn-primary">Start a project</a>
            <a href="#projects" className="btn-outline">View projects</a>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-zinc-700">
            <a href={LINKS.linkedin} target="_blank" className="inline-flex items-center gap-2 hover:text-blue-600">
              <Icon name="linkedin" /> LinkedIn
            </a>
            <a href={LINKS.github} target="_blank" className="inline-flex items-center gap-2 hover:text-blue-600">
              <Icon name="github" /> GitHub
            </a>
            <a href={LINKS.email} className="inline-flex items-center gap-2 hover:text-blue-600">
              <Icon name="mail" /> Email
            </a>
            <a href={LINKS.phone} className="inline-flex items-center gap-2 hover:text-blue-600">
              <Icon name="phone" /> Call
            </a>
          </div>
        </div>
        <div className="flex md:justify-end justify-center">
          <div className="relative inline-block scale-in">
            <div className="avatar-ring" />
            <Image src={LINKS.profilePic} alt={NAME} width={280} height={280} className="w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-white shadow-xl" priority />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {highlights.map((h) => (
            <article key={h.label} className="card">
              <div className="text-2xl font-bold">{h.value}</div>
              <div className="text-xs tracking-wide uppercase text-zinc-500">{h.label}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header">
          <h2 className="inline-flex items-center gap-2">Services</h2>
          <p>Everything you need to ship and scale a quality Flutter app.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {services.map((s) => (
            <article key={s.title} className="card">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2"><Icon name="check" className="w-4 h-4 mt-0.5" />{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Skills & Tools (iconified chips grid) */}
      <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header">
          <h2 className="inline-flex items-center gap-2">Skills & Tools</h2>
          <p>Technologies used to deliver reliable, scalable mobile apps.</p>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {skills.map((s) => (
            <span key={s} className="chip-gradient inline-flex items-center gap-2">
              <Icon name={iconFor(s)} /> {s}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header">
          <h2 className="inline-flex items-center gap-2">Selected Projects</h2>
          <p>Focused on performance, UX, and maintainable architecture.</p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="card group">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold group-hover:underline underline-offset-4">{p.title}</h3>
                <Icon name="external" className="w-5 h-5 text-zinc-500" />
              </div>
              <p className="mt-2 text-sm text-zinc-600">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              {p.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} className="link inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                      <Icon name="external" className="w-4 h-4" /> {l.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header"><h2 className="inline-flex items-center gap-2">Experience</h2></div>
        <article className="card">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-lg font-semibold">Senior Flutter Developer · Digital Upgraders LLC (Remote)</div>
            <div className="text-sm text-zinc-500">Feb 2023 – Present</div>
          </div>
          <ul className="mt-3 list-disc pl-5 text-zinc-700 space-y-1">
            <li>Lead development of cross-platform apps with clean architecture and robust state management.</li>
            <li>Implemented real-time features, offline capabilities, and performance optimizations.</li>
            <li>Collaborated with designers & backend; mentored developers; owned CI/CD and releases.</li>
          </ul>
        </article>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header"><h2 className="inline-flex items-center gap-2">Education</h2></div>
        <article className="card">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="text-lg font-semibold">BS — Computer Science</div>
            <div className="text-sm text-zinc-500">Oct 2017 – Oct 2021</div>
          </div>
          <div className="mt-1 text-zinc-600">University of Management & Technology, Lahore</div>
        </article>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <article className="card-lg">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Let’s build something great.</h3>
              <p className="mt-1 text-zinc-600">Tell me about your idea, and I’ll propose a practical, high-impact plan.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={LINKS.email} className="btn-primary inline-flex items-center gap-2"><Icon name="mail"/> Email me</a>
              <a href={LINKS.phone} className="btn-outline inline-flex items-center gap-2"><Icon name="phone"/> Call</a>
              <a href={LINKS.linkedin} target="_blank" className="btn-outline inline-flex items-center gap-2"><Icon name="linkedin"/> LinkedIn</a>
              <a href={LINKS.github} target="_blank" className="btn-outline inline-flex items-center gap-2"><Icon name="github"/> GitHub</a>
              <a href={LINKS.resume} target="_blank" className="btn-outline inline-flex items-center gap-2"><Icon name="external"/> Download CV</a>
            </div>
          </div>
        </article>
        <footer className="mt-10 text-center text-sm text-zinc-500">© {new Date().getFullYear()} {NAME}. All rights reserved.</footer>
      </section>

      {/* Back to top */}
      <a href="#top" className="back-to-top">↑</a>

      {/* Styles */}
      <style>{`
        html { scroll-behavior: smooth; }
        :root{ --card-bg: 255,255,255; --card-border: 24,24,27,0.08; --grad-a:#60a5fa; --grad-b:#22d3ee; --grad-c:#a78bfa; --shadow:0 14px 40px rgba(0,0,0,.06); --shadow-hover:0 18px 44px rgba(0,0,0,.08); --radius:1.25rem; }
        .btn-primary{ display:inline-flex;align-items:center;justify-content:center; padding:.75rem 1.25rem;border-radius:12px;font-size:.875rem;font-weight:600;color:#fff;background:linear-gradient(135deg,var(--grad-a),var(--grad-b)); box-shadow:0 10px 20px rgba(96,165,250,.25); transition:transform .15s ease, box-shadow .2s ease, opacity .2s ease; }
        .btn-primary:hover{ transform:translateY(-1px); box-shadow:0 12px 26px rgba(96,165,250,.3); opacity:.95; }
        .btn-outline{ display:inline-flex;align-items:center;justify-content:center; padding:.75rem 1.25rem;border-radius:12px;font-size:.875rem;font-weight:600; color:#0b1220;border:1px solid #e5e7eb;background:#fff; transition:background .2s ease, transform .15s ease; }
        .btn-outline:hover{ background:#f8fafc; transform:translateY(-1px); }
        .btn-ghost{ display:inline-flex;align-items:center;justify-content:center; padding:.5rem .75rem;border-radius:12px;font-size:.875rem;border:1px solid #e7e7e9;background:#fff;transition:background .2s ease; }
        .btn-ghost:hover{ background:#f8fafc; }
        .nav-link{ color:#0b1220; text-decoration:none; transition:color .15s ease; }
        .nav-link:hover{ color:#2563eb; }
        .menu-item{ display:block; padding:.5rem .75rem; border-radius:10px; color:#0b1220; text-decoration:none; }
        .menu-item:hover{ background:#f8fafc; }
        .menu-cta{ display:block; padding:.5rem .75rem; border-radius:10px; color:#fff; text-decoration:none; background:linear-gradient(135deg,var(--grad-a),var(--grad-b)); text-align:center; }
        .section-header h2{ font-size:1.5rem; font-weight:600; }
        .section-header p{ margin-top:.5rem; color:#52525b; }
        .card,.card-lg{ position:relative; overflow:hidden; background:rgba(var(--card-bg),0.97); border-radius:var(--radius); border:1px solid rgba(var(--card-border)); box-shadow:var(--shadow); transition:transform .22s ease, box-shadow .22s ease; }
        .card::before,.card-lg::before{ content:""; position:absolute; inset:0; padding:1px; border-radius:inherit; background:linear-gradient(120deg,var(--grad-a),var(--grad-b),var(--grad-c),var(--grad-a)); -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite:xor; mask-composite:exclude; opacity:.8; pointer-events:none; }
        .card{ padding:1.25rem; } .card-lg{ padding:2rem; border-radius:calc(var(--radius) + .25rem); }
        .card:hover,.card-lg:hover{ transform:translateY(-3px); box-shadow:var(--shadow-hover); }
        .chip-gradient{ display:inline-flex; align-items:center; gap:.5rem; padding:.5rem .9rem; border-radius:9999px; font-size:.875rem; color:#0b1220; background:linear-gradient(180deg,#ffffff 0%, #f8fbff 100%); border:1px solid rgba(24,24,27,.08); position:relative; box-shadow:0 6px 14px rgba(0,0,0,.05); }
        .chip-gradient::after{ content:""; position:absolute; inset:0; border-radius:inherit; padding:1px; background:linear-gradient(120deg,var(--grad-a),var(--grad-b)); -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite:xor; mask-composite:exclude; opacity:.7; pointer-events:none; }
        .tag{ display:inline-block; padding:.15rem .5rem; border-radius:9999px; background:#f4f4f5; color:#3f3f46; font-size:.75rem; }
        .link{ color:#0b1220; font-weight:600; text-decoration:underline; } .link:hover{ color:#2563eb; }
        .avatar-ring{ position:absolute; inset:-12px; border-radius:9999px; background:conic-gradient(from 0deg,var(--grad-a),var(--grad-c),var(--grad-b),var(--grad-a)); filter:blur(16px); opacity:.28; z-index:-1; }
        .back-to-top{ position:fixed; right:1.25rem; bottom:1.25rem; border-radius:9999px; padding:.65rem 1rem; color:#fff; background:linear-gradient(135deg,var(--grad-a),var(--grad-b)); text-decoration:none; box-shadow:0 14px 28px rgba(34,211,238,.25); }
        .back-to-top:hover{ filter:brightness(.98); }
        @keyframes floatSlow{ 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(10px) } } .animate-floatSlow{ animation:floatSlow 9s ease-in-out infinite; } .animation-delay-1200{ animation-delay:1.2s; }
        @keyframes fadeInUp{ from{ opacity:0; transform:translateY(10px) } to{ opacity:1; transform:translateY(0) } } .fade-in-up{ animation:fadeInUp .6s ease-out both; } .scale-in{ animation:fadeInUp .5s ease-out both; }
      `}</style>
    </main>
  );
}
