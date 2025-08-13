// app/page.tsx
// Complete portfolio page — Muhammad Ali Nawaz (Flutter Developer)
// - Uses profile photo at /public/profile_image.jpeg (cache-busted)
// - Uses favicon at /public/new-favicon.ico (fallback /favicon.ico)
// - Experience: ONLY Senior Flutter Developer · Digital Upgraders LLC (Remote), Feb 2023 – Present
// - Resume link: /public/resume.pdf

import Image from "next/image";

export const metadata = {
  title: "Muhammad Ali Nawaz · Flutter Developer",
  description:
    "Senior Flutter Developer building high‑performance apps with clean architecture, smooth UX, and robust integrations.",
  icons: {
    icon: [
      { rel: "icon", url: "/new-favicon.ico" },
      { url: "/favicon.ico" }, // fallback if needed
    ],
    shortcut: [{ url: "/new-favicon.ico" }],
  },
};

const NAME = "Muhammad Ali Nawaz";
const ROLE = "Senior Flutter Developer";
const TAGLINE =
  "I design and ship fast, reliable Flutter apps for iOS, Android, and web — clean architecture, smooth UX, strong testing.";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/muhammad-ali-nawaz-19a082177",
  github: "https://github.com/Muhammadali3073",
  email: "mailto:alibajwa102@gmail.com",
  phone: "tel:+923047222234",
  resume: "/resume.pdf",
  profilePic: "/profile_image.jpeg?v=2",
};

export default function Home() {
  const highlights = [
    { label: "Experience", value: "3+ yrs" },
    { label: "Platforms", value: "iOS · Android · Web" },
    { label: "Focus", value: "Performance & UX" },
    { label: "Methodology", value: "Agile" },
  ];

  const skills = [
    "Flutter", "Dart", "Android/iOS", "Flutter Web",
    "Bloc", "Provider", "GetX", "Riverpod",
    "REST APIs", "Firebase (Auth, Firestore, FCM)", "SQLite/Sqflite", "Hive",
    "Clean Architecture", "Unit/Widget/Integration Tests", "CI/CD (Fastlane)",
    "Native Channels (Pigeon)", "ML Kit (OCR)", "Push Notifications", "Maps & Geolocation",
    "Git/GitHub", "Jira", "Asana", "VS Code", "Android Studio", "Xcode",
  ];

  const projects = [
    {
      title: "Comnow (Digital Call System)",
      tags: ["Flutter", "iOS", "Android"],
      blurb:
        "Digital communication with messaging, voice notes, and efficient in‑app workflows.",
      links: [
        { label: "App Store", href: "https://apps.apple.com/ae/app/comnow/id1614790733" },
      ],
    },
    {
      title: "Crime Scene Guide",
      tags: ["Flutter", "Play Store"],
      blurb:
        "Scene documentation and note‑taking to streamline investigation workflows.",
      links: [
        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.INAR.investigation" },
      ],
    },
    {
      title: "LHFADEZ Barbering",
      tags: ["Flutter", "Stripe", "Scheduling"],
      blurb:
        "Booking for haircuts & grooming with seamless scheduling and promotions.",
      links: [
        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.rubikkube.lhfadezbarbering.android" },
      ],
    },
    {
      title: "Only Nikah",
      tags: ["Flutter", "Firebase"],
      blurb:
        "Nikah services with guided flows and notifications.",
      links: [
        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.hyxio.only_nikkah" },
      ],
    },
    {
      title: "AW Admin Dashboard (Web)",
      tags: ["Flutter Web", "Admin"],
      blurb:
        "Data tables, CRUD, bulk actions, OTP, notifications, reports, and user management.",
      links: [],
    },
  ];

  const experience = [
    {
      role: "Senior Flutter Developer",
      company: "Digital Upgraders LLC (Remote)",
      period: "Feb 2023 – Present",
      points: [
        "Lead development of cross‑platform apps with clean architecture and robust state management.",
        "Implemented real‑time features, offline capabilities, and performance optimizations.",
        "Collaborated with designers & backend teams; mentored developers; owned CI/CD and releases.",
      ],
    },
  ];

  const education = [
    {
      degree: "BS — Computer Science",
      org: "University of Management & Technology, Lahore",
      period: "Oct 2017 – Oct 2021",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-white text-zinc-900">
      {/* Decorative background */}
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="absolute -top-28 -left-24 h-80 w-80 rounded-full blur-3xl opacity-20 bg-blue-400" />
        <div className="absolute top-10 -right-20 h-96 w-96 rounded-full blur-3xl opacity-20 bg-cyan-400" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-zinc-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src={LINKS.profilePic}
              alt={NAME}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover border border-zinc-200"
              priority
            />
            <span className="text-sm font-medium text-zinc-700">{NAME}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
            <a href="#projects" className="hover:text-zinc-900">Projects</a>
            <a href="#skills" className="hover:text-zinc-900">Skills</a>
            <a href="#experience" className="hover:text-zinc-900">Experience</a>
            <a href="#contact" className="hover:text-zinc-900">Contact</a>
            <a
              href={LINKS.resume}
              className="rounded-xl bg-zinc-900 px-4 py-2 text-white font-semibold hover:bg-zinc-800"
              target="_blank"
              rel="noopener noreferrer"
            >Resume</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-14 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Open to opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {ROLE}
          </h1>
          <p className="max-w-xl text-zinc-600 text-base sm:text-lg leading-relaxed">{TAGLINE}</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-xl bg-zinc-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-zinc-800">Start a project</a>
            <a href="#projects" className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50">View projects</a>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-5 text-zinc-500 text-sm">
            <a href={LINKS.linkedin} className="hover:text-zinc-800" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={LINKS.github} className="hover:text-zinc-800" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={LINKS.email} className="hover:text-zinc-800">Email</a>
            <a href={LINKS.phone} className="hover:text-zinc-800">Call</a>
          </div>
        </div>
        <div className="flex justify-center relative">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 blur-2xl" />
          <Image
            src={LINKS.profilePic}
            alt={NAME}
            width={256}
            height={256}
            className="relative w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl"
            priority
          />
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-zinc-200 p-5 bg-white/70">
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="text-sm text-zinc-500">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold">Skills & Tools</h2>
        <p className="mt-2 text-zinc-600">Technologies used to deliver reliable, scalable mobile apps.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-sm text-zinc-700">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Selected Projects</h2>
            <p className="mt-2 text-zinc-600">Work focused on performance, UX, and architecture.</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-zinc-200 p-5 hover:shadow-md transition-shadow bg-white/80">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold group-hover:underline">{p.title}</h3>
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-zinc-400 group-hover:text-zinc-800"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Z"/></svg>
              </div>
              <p className="mt-2 text-sm text-zinc-600">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-700">{t}</span>
                ))}
              </div>
              {p.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} className="text-sm font-semibold text-zinc-700 hover:text-zinc-900 underline" target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Experience — ONLY Digital Upgraders */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-6">
          {experience.map((job, idx) => (
            <div key={idx} className="rounded-2xl border border-zinc-200 bg-white/80 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-lg font-semibold">{job.role} · {job.company}</div>
                <div className="text-sm text-zinc-500">{job.period}</div>
              </div>
              <ul className="mt-3 list-disc pl-5 text-zinc-700 space-y-1">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Let’s build something great.</h3>
              <p className="mt-1 text-zinc-600">Tell me about your idea, and I’ll propose a practical, high‑impact plan.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={LINKS.email}
                className="rounded-xl bg-zinc-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-zinc-800"
              >
                Email me
              </a>
              <a
                href={LINKS.phone}
                className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
              >
                Call
              </a>
              <a
                href={LINKS.linkedin}
                className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={LINKS.resume}
                className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <footer className="mt-10 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} {NAME}. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
