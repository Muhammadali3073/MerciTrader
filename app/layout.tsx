// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

// Local variable fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Muhammad Ali Nawaz · Flutter Developer",
  description:
    "Senior Flutter Developer building high-performance apps with clean architecture, smooth UX, and robust integrations.",
  keywords: [
    "Muhammad Ali Nawaz",
    "Flutter Developer",
    "Mobile App",
    "Sortevo",
    "Software Solutions",
    "Cross-Platform Development",
    "Android Development",
    "iOS Development",
    "Web Development",
    "Full-Stack Development",
    "UX/UI Design",
  ],
  openGraph: {
    url: "https://sortevo.com",
    type: "website",
    title: "Muhammad Ali Nawaz · Flutter Developer",
    description:
      "Senior Flutter Developer building high-performance apps with clean architecture, smooth UX, and robust integrations.",
    images: [
      {
        url: "https://sortevo.com/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sortevo – Professional Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Ali Nawaz · Flutter Developer",
    description:
      "Senior Flutter Developer building high-performance apps with clean architecture, smooth UX, and robust integrations.",
    images: ["https://sortevo.com/assets/images/twitter-card.jpg"],
  },
  icons: {
    // Serve both ICO (classic browsers) and PNG (hi-res / Apple)
    icon: [
      { url: "/favicon.ico?v=2", type: "image/x-icon" },
      { url: "/favicon.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: [{ url: "/favicon.ico?v=2", type: "image/x-icon" }],
    apple: [{ url: "/favicon.png?v=2", type: "image/png" }],
  },
  // Optional but nice for crawlers
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Pre-hydration theme: uses saved preference if present, else OS */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  try {
    const t = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = t ? t === 'dark' : prefersDark;
    document.documentElement.classList.toggle('dark', dark);
  } catch {}
})();`,
          }}
        />
        {/* Optional: PWA manifest (uncomment when you add /public/manifest.webmanifest)
        <link rel="manifest" href="/manifest.webmanifest" />
        */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
