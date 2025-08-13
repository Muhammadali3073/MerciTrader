// app/page.tsx
// Full portfolio rewrite — classic, polished UI + subtle animations
// - Uses profile image as favicon (public/profile_image.jpeg)
// - Single-role experience (Senior Flutter Developer · Digital Upgraders LLC)
// - Framer Motion for tasteful motion; falls back gracefully if not installed

import Image from "next/image";
import { motion } from "framer-motion";

export const metadata = {
  title: "Muhammad Ali Nawaz · Flutter Developer",
  description:
    "Senior Flutter Developer building high‑performance apps with clean architecture, smooth UX, and robust integrations.",
  icons: {
    icon: [
      { rel: "icon", url: "/profile_image.jpeg", type: "image/jpeg" }, // profile photo as favicon
      { url: "/favicon.ico" }, // optional fallback
    ],
    apple: [{ url: "/profile_image.jpeg" }],
    shortcut: [{ url: "/profile_image.jpeg" }],
  },
};

const NAME = "Muhammad Ali Nawaz";
const ROLE = "Senior Flutter Developer";
const TAGLINE =
  "I design and ship fast, reliable Flutter apps for iOS, Android & Web — clean architecture, smooth UX, strong testing.";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/muhammad-ali-nawaz-19a082177",
  github: "https://github.com/Muhammadali3073",
  email: "mailto:alibajwa102@gmail.com",
  phone: "tel:+923047222234",
  resume: "/resume.pdf",
  profilePic: "/profile_image.jpeg?v=3",
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
      blurb: "Digital communication with messaging, voice notes, and efficient in‑app workflows.",
      links: [
        { label: "App Store", href: "https://apps.apple.com/ae/app/comnow/id1614790733" },
      ],
    },
    {
      title: "Crime Scene Guide",
      tags: ["Flutter", "Play Store"],
      blurb: "Scene documentation and note‑taking to streamline investigation workflows.",
      links: [
        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.INAR.investigation" },
      ],
    },
    {
      title: "LHFADEZ Barbering",
      tags: ["Flutter", "Stripe", "Scheduling"],
      blurb: "Booking for haircuts & grooming with seamless scheduling and promotions.",
      links: [
        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.rubikkube.lhfadezbarbering.android" },
      ],
    },
    {
      title: "Only Nikah",
      tags: ["Flutter", "Firebase"],
      blurb: "Nikah services with guided flows and notifications.",
      links: [
        { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.hyxio.only_nikkah" },
      ],
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
        "Collaborated with designers & backend; mentored developers; owned CI/CD and releases.",
      ],
    },
  ];

  const fade = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 text-gray-900">
      {/* Background orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl opacity-20 bg-blue-400 animate-[floatSlow_8s_ease-in-out_infinite]" />
        <div className="absolute top-16 -right-24 h-96 w-96 rounded-full blur-3xl opacity-20 bg-cyan-400 animate-[floatSlow_8s_ease-in-out_infinite] [animation-delay:1.2s]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src={LINKS.profilePic} alt={NAME} width={40} height={40} className="h-10 w-10 rounded-full object-cover border border-gray-200" />
            <span className="text-sm font-medium">{NAME}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">Resume</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <motion.section initial="hidden" animate="show" variants={fade} transition={{ duration: 0.6 }} className="mx-auto max-w-6xl px-6 pt-14 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-600">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
            Open to opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{ROLE}</h1>
          <p className="max-w-xl text-gray-600 text-base sm:text-lg leading-relaxed">{TAGLINE}</p>
          <div className="flex gap-3">
            <a href="#contact" className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-500">Start a project</a>
            <a href="#projects" className="border border-gray-300 px-5 py-3 rounded-lg hover:bg-gray-50">View projects</a>
          </div>
          <div className="mt-3 flex flex-wrap gap-5 text-sm text-gray-600">
            <a href={LINKS.linkedin} target="_blank" className="hover:text-blue-600">LinkedIn</a>
            <a href={LINKS.github} target="_blank" className="hover:text-blue-600">GitHub</a>
            <a href={LINKS.email} className="hover:text-blue-600">Email</a>
            <a href={LINKS.phone} className="hover:text-blue-600">Call</a>
          </div>
        </div>
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="flex justify-center">
          <Image src={LINKS.profilePic} alt={NAME} width={256} height={256} className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-lg" />
        </motion.div>
      </motion.section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-6 pb-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <motion.div key={item.label} whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0,0,0,.06)" }} className="rounded-2xl border border-gray-200 p-5 bg-white">
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="text-sm text-gray-500">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold">Skills & Tools</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((s) => (
            <motion.span key={s} whileHover={{ scale: 1.05 }} className="rounded-full border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700">
              {s}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold">Selected Projects</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.div key={p.title} whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0,0,0,.06)" }} className="rounded-2xl border border-gray-200 p-5 bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-gray-400"><path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Z"/></svg>
              </div>
              <p className="mt-2 text-sm text-gray-600">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-700">{t}</span>
                ))}
              </div>
              {p.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} className="text-sm font-semibold text-gray-700 hover:text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-semibold">Experience</h2>
        {experience.map((job) => (
          <motion.div key={job.role} whileHover={{ y: -2, boxShadow: "0 10px 25px rgba(0,0,0,.06)" }} className="mt-6 rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="text-lg font-semibold">{job.role} · {job.company}</div>
              <div className="text-sm text-gray-500">{job.period}</div>
            </div>
            <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-1">
              {job.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-gray-200 bg-white p-8">
          <h3 className="text-xl font-semibold">Let’s build something great.</h3>
          <p className="mt-1 text-gray-600">Tell me about your idea, and I’ll propose a practical, high‑impact plan.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={LINKS.email} className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-500">Email me</a>
            <a href={LINKS.phone} className="border border-gray-300 px-5 py-3 rounded-lg hover:bg-gray-50">Call</a>
            <a href={LINKS.linkedin} target="_blank" className="border border-gray-300 px-5 py-3 rounded-lg hover:bg-gray-50">LinkedIn</a>
            <a href={LINKS.github} target="_blank" className="border border-gray-300 px-5 py-3 rounded-lg hover:bg-gray-50">GitHub</a>
            <a href={LINKS.resume} target="_blank" className="border border-gray-300 px-5 py-3 rounded-lg hover:bg-gray-50">Download CV</a>
          </div>
        </div>
        <footer className="mt-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} {NAME}. All rights reserved.</footer>
      </section>

      {/* Minimal CSS keyframes (no extra file required) */}
      <style>{`
        @keyframes floatSlow { 0%,100% { transform: translateY(0) } 50% { transform: translateY(10px) } }
      `}</style>
    </main>
  );
}
