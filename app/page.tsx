// app/page.tsx
// Portfolio homepage for Muhammad Ali Nawaz — Flutter Developer
// TailwindCSS, accessible, responsive, production‑ready single page.

const NAME = "Muhammad Ali Nawaz";
const ROLE = "Flutter Developer";
const TAGLINE =
  "I design and build high‑performance mobile apps with Flutter — clean architecture, smooth UX, and robust backends.";

const LINKS = {
  linkedin:
    "https://www.linkedin.com/in/muhammad-ali-nawaz-19a082177?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/Muhammadali3073",
  email: "mailto:alibajwa102@gmail.com",
  resume: "#", // replace with a real file link
};

export default function Home() {
  const skills = [
    "Flutter", "Dart", "Riverpod/Bloc", "Clean Architecture", "Firebase (Auth, Firestore, FCM)",
    "REST/GraphQL", "SQLite/Drift", "Hive", "Native Channels (Pigeon)", "ML Kit (OCR)",
    "Maps & Geolocation", "Push Notifications", "CI/CD (Fastlane)", "Unit/Widget/Integration Tests",
  ];

  const highlights = [
    { label: "Production Releases", value: "Multiple" },
    { label: "Platforms", value: "iOS · Android · Web" },
    { label: "Architecture", value: "Clean · Modular" },
    { label: "Focus", value: "Performance & UX" },
  ];

  const projects = [
    {
      title: "SmartScan OCR",
      tags: ["Flutter", "ML Kit", "Riverpod"],
      blurb:
        "On‑device OCR with number detection, edit & confirm flows, export to CSV/PDF, and offline cache.",
      link: "#",
    },
    {
      title: "LiveTrack Pro",
      tags: ["Flutter", "WebSockets", "Maps"],
      blurb:
        "Real‑time location tracking with background updates, geofencing, and push notifications.",
      link: "#",
    },
    {
      title: "ChefConnect",
      tags: ["Flutter", "Firebase", "Stripe"],
      blurb:
        "Food ordering with grab‑and‑go & preorder flows, chef dashboards, and order analytics.",
      link: "#",
    },
  ];

  const experience = [
    {
      role: "Flutter Developer",
      company: "Freelance / Contract",
      period: "Present",
      points: [
        "Shipped cross‑platform apps using Flutter with backend integrations (Firebase/REST).",
        "Implemented clean architecture, feature flags, and automated testing.",
        "Optimized rendering and startup time; delivered smooth 60fps experiences.",
      ],
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
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-zinc-900 text-white grid place-items-center font-bold">MA</div>
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
          >Resume</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-10 pb-16 md:pt-14 md:pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Open to opportunities
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              {ROLE}
            </h1>
            <p className="max-w-xl text-zinc-600 text-base sm:text-lg">{TAGLINE}</p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-zinc-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                Start a project
              </a>
              <a
                href="#projects"
                className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
              >
                View projects
              </a>
            </div>

            {/* Socials */}
            <div className="mt-2 flex items-center gap-5 text-zinc-500">
              <a href={LINKS.linkedin} className="hover:text-zinc-800" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.38V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
              </a>
              <a href={LINKS.github} className="hover:text-zinc-800" aria-label="GitHub">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.82 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.41 1.23-3.26-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.24.96-.27 1.99-.4 3.01-.4s2.05.13 3.01.4c2.29-1.56 3.3-1.24 3.3-1.24.65 1.65.24 2.87.12 3.17.77.85 1.23 1.94 1.23 3.26 0 4.66-2.8 5.68-5.47 5.98.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.82.58A12 12 0 0 0 12 .5Z"/></svg>
              </a>
              <a href={LINKS.email} className="hover:text-zinc-800" aria-label="Email">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/></svg>
              </a>
            </div>
          </div>

          {/* Mock phone preview */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="aspect-[9/19] rounded-[2.2rem] border border-zinc-200 bg-white shadow-xl">
              <div className="h-7 rounded-t-[2.2rem] bg-zinc-900" />
              <div className="p-4">
                <div className="h-40 w-full rounded-xl bg-gradient-to-br from-zinc-100 to-white" />
                <div className="mt-4 h-3 w-4/5 rounded bg-zinc-200" />
                <div className="mt-2 h-3 w-3/5 rounded bg-zinc-100" />
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-square rounded-xl bg-zinc-100" />
                  ))}
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[2.5rem] bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl" />
          </div>
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
            <p className="mt-2 text-zinc-600">Case studies focused on performance, UX, and architecture.</p>
          </div>
          <a href="#" className="text-sm font-semibold text-zinc-700 hover:text-zinc-900">See all →</a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-zinc-200 p-5 hover:shadow-md transition-shadow bg-white/80">
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
            </a>
          ))}
        </div>
      </section>

      {/* Experience */}
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

      {/* Testimonial (placeholder) */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-8 md:p-10">
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote className="text-lg text-zinc-700">“{NAME} delivered a polished app on time, communicated clearly, and exceeded our performance targets.”</blockquote>
            <figcaption className="mt-2 text-sm text-zinc-500">— Client name, Company (replace with real quote)</figcaption>
          </figure>
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
                href={LINKS.resume}
                className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
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
