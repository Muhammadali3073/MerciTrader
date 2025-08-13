// app/page.tsx
// A polished, responsive portfolio landing page for a Flutter Developer
// - TailwindCSS only (no external UI libs)
// - Clean, modern, mobile-first
// - Sections: Hero, Highlights, Skills, Projects, Experience, Contact
// - Replace placeholders with your real info and links

export default function Home() {
  const skills = [
    "Flutter", "Dart", "Firebase", "Bloc/Riverpod", "Clean Architecture",
    "REST/GraphQL", "SQLite/Drift", "Hive", "CI/CD", "Unit/Widget/Integration Tests",
    "Android/iOS", "Native Channels (Pigeon)", "ML Kit (OCR)", "Maps & Geolocation",
  ];

  const projects = [
    {
      title: "SmartScan OCR",
      tags: ["Flutter", "ML Kit", "Riverpod"],
      blurb: "Mobile OCR app with on-device text detection, number parsing, and CSV/PDF export.",
      link: "#",
    },
    {
      title: "LiveTrack Pro",
      tags: ["Flutter", "WebSockets", "Maps"],
      blurb: "Real‑time location tracking with geofencing, background updates, and push notifications.",
      link: "#",
    },
    {
      title: "ChefConnect",
      tags: ["Flutter", "Firebase", "Stripe"],
      blurb: "Food ordering with grab‑and‑go & preorder flows, chef dashboards, and order analytics.",
      link: "#",
    },
  ];

  const experience = [
    {
      role: "Senior Flutter Developer",
      company: "Freelance / Contract",
      period: "2022 – Present",
      points: [
        "Built production apps with Flutter for fintech, logistics, and food tech.",
        "Implemented clean architecture, feature flags, and robust testing.",
        "Shipped offline‑first experiences with local caching and background sync.",
      ],
    },
    {
      role: "Mobile Developer (iOS/Flutter)",
      company: "Product Studio",
      period: "2020 – 2022",
      points: [
        "Migrated native modules to Flutter via platform channels and Pigeon.",
        "Optimized performance: jank < 1%, reduced cold start by ~35%.",
        "Led CI/CD with Fastlane, TestFlight, and Play Console tracks.",
      ],
    },
  ];

  return (
    <main className="min-h-screen w-full bg-white text-zinc-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* soft gradient blobs */}
          <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full blur-3xl opacity-20 bg-blue-400" />
          <div className="absolute top-10 -right-10 h-72 w-72 rounded-full blur-3xl opacity-20 bg-cyan-400" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28 lg:py-32">
          <div className="flex flex-col items-center text-center gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600">
              {/* dot */}
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Available for new projects
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Flutter Developer
            </h1>
            <p className="max-w-2xl text-zinc-600 text-base sm:text-lg">
              I build fast, reliable, and beautiful cross‑platform apps for iOS and Android —
              using Flutter, clean architecture, and a testing‑first mindset.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact"
                className="rounded-xl bg-zinc-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                Get in touch
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
              <a href="#" className="hover:text-zinc-800" aria-label="GitHub">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.82 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.41 1.23-3.26-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.24.96-.27 1.99-.4 3.01-.4s2.05.13 3.01.4c2.29-1.56 3.3-1.24 3.3-1.24.65 1.65.24 2.87.12 3.17.77.85 1.23 1.94 1.23 3.26 0 4.66-2.8 5.68-5.47 5.98.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.82.58A12 12 0 0 0 12 .5Z"/></svg>
              </a>
              <a href="#" className="hover:text-zinc-800" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.38V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
              </a>
              <a href="#" className="hover:text-zinc-800" aria-label="Twitter">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M19.6 7.55c.01.16.01.32.01.48 0 4.88-3.71 10.5-10.5 10.5-2.08 0-4.02-.61-5.65-1.66 2.88.34 5.16-.46 6.89-2.07-1.65-.03-3.04-1.12-3.52-2.62.23.04.46.06.7.06.34 0 .68-.05 1-.13-1.72-.35-3.02-1.87-3.02-3.69v-.05c.51.28 1.09.45 1.71.47a3.66 3.66 0 0 1-1.63-3.05c0-.67.18-1.3.5-1.84 1.84 2.26 4.58 3.75 7.67 3.91-.06-.26-.09-.54-.09-.82a3.66 3.66 0 0 1 3.65-3.66c1.05 0 2 .45 2.67 1.18a7.25 7.25 0 0 0 2.32-.89 3.67 3.67 0 0 1-1.61 2.02 7.25 7.25 0 0 0 2.1-.57c-.5.75-1.13 1.41-1.85 1.94z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Production Apps", value: "10+" },
            { label: "Avg Rating", value: "4.8★" },
            { label: "Countries Served", value: "12" },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-zinc-200 p-5 bg-white/60">
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="text-sm text-zinc-500">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold">Skills & Tools</h2>
        <p className="mt-2 text-zinc-600">Technologies I use to ship high‑quality mobile apps.</p>
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
            <p className="mt-2 text-zinc-600">Case studies that highlight performance, UX, and architecture.</p>
          </div>
          <a href="#" className="text-sm font-semibold text-zinc-700 hover:text-zinc-900">See all →</a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-zinc-200 p-5 hover:shadow-md transition-shadow bg-white/70">
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
            <div key={idx} className="rounded-2xl border border-zinc-200 bg-white/70 p-5">
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
              <p className="mt-1 text-zinc-600">Tell me about your idea, and I’ll suggest a pragmatic, high‑impact plan.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:contact@example.com"
                className="rounded-xl bg-zinc-900 text-white px-5 py-3 text-sm font-semibold shadow-sm hover:bg-zinc-800"
              >
                Email me
              </a>
              <a
                href="#"
                className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <footer className="mt-10 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </section>
    </main>
  );
}
