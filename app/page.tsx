// app/page.tsx — Light-only portfolio with unified gradient-border cards + inline SVG icons (no extra deps)
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

// ------- Inline Icons (no packages) -------
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
  WhatsApp: (p: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" aria-hidden {...p}><path fill="currentColor" d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.56 4.06 1.55 5.78L0 24l6.51-1.7a11.6 11.6 0 0 0 5.55 1.42h.01c6.56 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.41-8.33Zm-8.46 18.6c-1.75 0-3.46-.47-4.95-1.37l-.35-.21-3.86 1.01 1.03-3.76-.23-.39a9.84 9.84 0 0 1-1.45-5.1c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.13 1.03 7 2.9 1.86 1.87 2.88 4.36 2.88 7 0 5.45-4.43 9.9-9.86 9.9Zm5.62-7.41c-.31-.16-1.85-.91-2.14-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1-.99 1.21-.18.2-.37.23-.68.08-.31-.16-1.3-.48-2.48-1.52-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.19.21-.31.31-.52.1-.21.05-.39-.02-.55-.08-.16-.71-1.73-.97-2.36-.26-.62-.52-.54-.71-.55h-.61c-.2 0-.52.07-.79.37-.27.31-1.04 1.01-1.04 2.46s1.06 2.85 1.21 3.05c.16.2 2.08 3.18 5.03 4.46.7.3 1.25.47 1.68.6.71.23 1.36.2 1.88.12.57-.08 1.85-.76 2.12-1.49.26-.73.26-1.35.18-1.49-.08-.14-.28-.22-.59-.37Z"/></svg>
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

// Map skills to icons
function iconForSkill(label: string) {
  const k = label.toLowerCase();
  if (k.includes("ios") || k.includes("android") || k.includes("mobile")) return <Icon.Layers className="h-5 w-5" />;
  if (k.includes("web")) return <Icon.Store className="h-5 w-5" />;
  if (k.includes("api") || k.includes("rest")) return <Icon.Tool className="h-5 w-5" />;
  if (k.includes("firebase") || k.includes("fcm")) return <Icon.Rocket className="h-5 w-5" />;
  if (k.includes("sqlite") || k.includes("hive")) return <Icon.Shield className="h-5 w-5" />;
  if (k.includes("bloc") || k.includes("riverpod") || k.includes("getx") || k.includes("provider")) return <Icon.Layers className="h-5 w-5" />;
  if (k.includes("git")) return <Icon.Github className="h-5 w-5" />;
  if (k.includes("test") || k.includes("ci/cd") || k.includes("fastlane")) return <Icon.Rocket className="h-5 w-5" />;
  return <Icon.Tool className="h-5 w-5" />;
}

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

  // Concise, balanced skills list
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
      icon: <Icon.Layers className="h-5 w-5" />,
      points: ["iOS, Android & Web", "Clean Architecture", "State Management (Bloc/GetX/Riverpod)"],
    },
    {
      title: "Integrations & Backend",
      icon: <Icon.Tool className="h-5 w-5" />,
      points: ["REST APIs / Firebase", "Auth, Push, Analytics", "Payments & Subscriptions"],
    },
    {
      title: "Quality & Delivery",
      icon: <Icon.Shield className="h-5 w-5" />,
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
              <div className="absolute right-0 mt-2 w-64 rounded-xl border border-zinc-200 bg-white/90 backdrop-blur-md shadow-lg p-2 grid gap-1 z-50">
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
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 sm:pt-12 pb-12 sm:pb-16 grid md:grid-cols-2 gap-8 sm:gap-10 items-center fade-in-up">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 bg-white/60 backdrop-blur-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-400" />
            Open to opportunities
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">{ROLE}</h1>
          <p className="max-w-xl text-zinc-600 text-base sm:text-lg leading-relaxed">{TAGLINE}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">Start a project</a>
            <a href="#projects" className="btn-outline">View projects</a>
          </div>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-600">
            <a href={LINKS.linkedin} target="_blank" className="icon-link"><Icon.LinkedIn className="h-4 w-4"/> LinkedIn</a>
            <a href={LINKS.github} target="_blank" className="icon-link"><Icon.Github className="h-4 w-4"/> GitHub</a>
            <a href={LINKS.email} className="icon-link"><Icon.Mail className="h-4 w-4"/> Email</a>
            <a href={LINKS.phone} className="icon-link"><Icon.Phone className="h-4 w-4"/> Call</a>
            <a href={LINKS.whatsapp} target="_blank" className="icon-link"><Icon.WhatsApp className="h-4 w-4"/> WhatsApp</a>
          </div>
        </div>

        {/* Avatar block */}
        <div className="flex md:justify-end justify-center">
          <div className="relative inline-block scale-in">
            <div className="avatar-ring" />
            <Image src={LINKS.profilePic} alt={NAME} width={280} height={280} className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-xl" priority />
          </div>
        </div>
      </section>

      {/* Highlights (unified stat cards) */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {highlights.map((h) => (
            <article key={h.label} className="stat">
              <div className="icon-bg" aria-hidden />
              <div className="stat-value">{h.value}</div>
              <div className="stat-label">{h.label}</div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-6">
          {services.map((s) => (
            <article key={s.title} className="card">
              <div className="flex items-center gap-2 text-zinc-700">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-zinc-50 border border-zinc-200">{s.icon}</span>
                <h3 className="text-base sm:text-lg font-semibold">{s.title}</h3>
              </div>
              <ul className="mt-2 list-disc pl-5 text-sm text-zinc-700 space-y-1">
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Skills & Tools (tile design) */}
      <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header">
          <h2>Skills & Tools</h2>
          <p>A focused toolbox I use to ship quality apps fast.</p>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {skills.map((s) => (
            <div key={s} className="skill-card" title={s}>
              <span className="skill-card__icon">{iconForSkill(s)}</span>
              <span className="skill-card__label">{s}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="section-header">
          <h2>Selected Projects</h2>
          <p>Focused on performance, UX, and maintainable architecture.</p>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((p) => (
            <article key={p.title} className="card group">
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-semibold group-hover:underline underline-offset-4">{p.title}</h3>
                <Icon.External className="h-5 w-5 text-zinc-400 group-hover:text-zinc-700" />
              </div>
              <p className="mt-2 text-sm text-zinc-600">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
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
            <div className="text-base sm:text-lg font-semibold">Senior Flutter Developer · Digital Upgraders LLC (Remote)</div>
            <div className="text-xs sm:text-sm text-zinc-500">Feb 2023 – Present</div>
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
            <div className="text-base sm:text-lg font-semibold">BS — Computer Science</div>
            <div className="text-xs sm:text-sm text-zinc-500">Oct 2017 – Oct 2021</div>
          </div>
          <div className="mt-1 text-zinc-600 text-sm">University of Management & Technology, Lahore</div>
        </article>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <article className="card-lg">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Let’s build something great.</h3>
              <p className="mt-1 text-zinc-600">Tell me about your idea, and I’ll propose a practical, high-impact plan.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={LINKS.email} className="btn-primary"><Icon.Mail className="h-4 w-4"/> &nbsp;Email</a>
              <a href={LINKS.phone} className="btn-outline"><Icon.Phone className="h-4 w-4"/> &nbsp;Call</a>
              <a href={LINKS.whatsapp} target="_blank" className="btn-outline"><Icon.WhatsApp className="h-4 w-4"/> &nbsp;WhatsApp</a>
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

      {/* Tokens + Gradient Card CSS */}
      <style>{`
        html { scroll-behavior: smooth; }
        :root{ --card-bg: 255,255,255; --card-border: 24,24,27,0.08; --grad-a: #60a5fa; --grad-b: #22d3ee; --grad-c: #a78bfa; --shadow: 0 14px 40px rgba(0,0,0,.06); --shadow-hover: 0 18px 44px rgba(0,0,0,.08); --radius: 1.25rem; }

        /* Buttons & nav */
        .btn-primary{ display:inline-flex; align-items:center; gap:.5rem; padding:.75rem 1.25rem; border-radius:12px; font-size:.9rem; font-weight:600; color:#fff; background:linear-gradient(135deg,var(--grad-a),var(--grad-b)); box-shadow:0 10px 20px rgba(96,165,250,.25); transition:transform .15s ease, box-shadow .2s ease, opacity .2s ease; text-decoration:none; }
        .btn-primary:hover{ transform:translateY(-1px); box-shadow:0 12px 26px rgba(96,165,250,.3); opacity:.95; }
        .btn-outline{ display:inline-flex; align-items:center; gap:.5rem; padding:.75rem 1.25rem; border-radius:12px; font-size:.9rem; font-weight:600; color:#0b1220; border:1px solid #e5e7eb; background:#fff; text-decoration:none; transition:background .2s ease, transform .15s ease; }
        .btn-outline:hover{ background:#f8fafc; transform:translateY(-1px); }
        .btn-ghost{ display:inline-flex; align-items:center; gap:.5rem; padding:.5rem .75rem; border-radius:12px; font-size:.9rem; border:1px solid #e7e7e9; background:#fff; transition:background .2s ease; }
        .btn-ghost:hover{ background:#f8fafc; }
        .nav-link{ color:#0b1220; text-decoration:none; transition:color .15s ease; }
        .nav-link:hover{ color:#2563eb; }
        .menu-item{ display:block; padding:.6rem .8rem; border-radius:10px; color:#0b1220; text-decoration:none; }
        .menu-item:hover{ background:#f8fafc; }
        .menu-cta{ display:block; padding:.6rem .8rem; border-radius:10px; color:#fff; text-decoration:none; background:linear-gradient(135deg,var(--grad-a),var(--grad-b)); text-align:center; }
        .icon-link{ display:inline-flex; align-items:center; gap:.4rem; text-decoration:none; color:#0b1220; }
        .icon-link:hover{ color:#2563eb; }

        .section-header h2{ font-size:1.4rem; font-weight:600; }
        .section-header p{ margin-top:.5rem; color:#52525b; }

        /* Unified gradient-border card */
        .card,.card-lg,.stat{ position:relative; overflow:hidden; background:rgba(var(--card-bg),0.97); border-radius:var(--radius); border:1px solid rgba(var(--card-border)); box-shadow:var(--shadow); transition:transform .22s ease, box-shadow .22s ease; }
        .card::before,.card-lg::before,.stat::before{ content:""; position:absolute; inset:0; padding:1px; border-radius:inherit; background:linear-gradient(120deg,var(--grad-a),var(--grad-b),var(--grad-c),var(--grad-a)); -webkit-mask:linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite:xor; mask-composite:exclude; opacity:.8; pointer-events:none; }
        .card{ padding:1.1rem; }
        .card-lg{ padding:1.6rem; border-radius:calc(var(--radius) + .25rem); }
        .card:hover,.card-lg:hover,.stat:hover{ transform:translateY(-3px); box-shadow:var(--shadow-hover); }

        /* Stats */
        .stat{ padding:1.1rem 1.2rem; }
        .icon-bg{ position:absolute; right:-24px; top:-24px; width:92px; height:92px; border-radius:50%; background:radial-gradient(60px 60px at 30% 30%, rgba(96,165,250,.35), rgba(34,211,238,.2), transparent 70%); filter:blur(2px); }
        .stat-value{ font-size:1.2rem; font-weight:800; letter-spacing:.2px; }
        .stat-label{ font-size:.7rem; text-transform:uppercase; letter-spacing:.12em; color:#71717a; margin-top:.15rem; }

        /* Skill tiles */
        .skill-card{ display:flex; flex-direction:column; align-items:center; justify-content:center; gap:.55rem; padding:1rem .75rem; min-height:96px; border-radius:14px; background:radial-gradient(120% 120% at 0% 0%, #ffffff 0%, #f8fbff 60%, #f0f5ff 100%); border:1px solid rgba(24,24,27,.08); box-shadow:0 10px 20px rgba(0,0,0,.05); transition:transform .18s ease, box-shadow .22s ease; text-align:center; }
        .skill-card:hover{ transform:translateY(-2px); box-shadow:0 16px 26px rgba(0,0,0,.08); }
        .skill-card__icon{ display:inline-flex; align-items:center; justify-content:center; width:36px; height:36px; border-radius:10px; background:linear-gradient(135deg,var(--grad-a),var(--grad-b)); color:#fff; box-shadow:0 8px 18px rgba(34,211,238,.25); }
        .skill-card__label{ font-size:.85rem; font-weight:600; color:#0b1220; letter-spacing:.1px; }

        /* Tags, links, thumbnails */
        .tag{ display:inline-block; padding:.15rem .5rem; border-radius:9999px; background:#f4f4f5; color:#3f3f46; font-size:.75rem; }
        .link{ color:#0b1220; font-weight:600; text-decoration:underline; }
        .link:hover{ color:#2563eb; }

        /* Avatar ring */
        .avatar-ring{ position:absolute; inset:-12px; border-radius:9999px; background:conic-gradient(from 0deg,var(--grad-a),var(--grad-c),var(--grad-b),var(--grad-a)); filter:blur(16px); opacity:.28; z-index:-1; }

        /* Back to top */
        .back-to-top{ position:fixed; right:1.25rem; bottom:1.25rem; border-radius:9999px; padding:.65rem 1rem; color:#fff; background:linear-gradient(135deg,var(--grad-a),var(--grad-b)); text-decoration:none; box-shadow:0 14px 28px rgba(34,211,238,.25); }
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
          header .btn-primary{ padding:.6rem 1rem; }
          .back-to-top{ right:.9rem; bottom:.9rem; }
        }
      `}</style>
    </main>
  );
}
