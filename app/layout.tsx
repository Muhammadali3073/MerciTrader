import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

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
  title: "MerciTrader | Business Group - Al-Sadiq Bricks & Rice",
  description:
    "MerciTrader is a diversified business group operating Al-Sadiq Bricks (construction materials) and Al-Sadiq Rice (agriculture). Quality, reliability, and customer focus.",
  keywords: [
    "MerciTrader",
    "Business Group",
    "Al-Sadiq Bricks",
    "Al-Sadiq Rice",
    "Construction Materials",
    "Rice Trading",
    "Business Solutions",
    "Quality Products",
  ],
  openGraph: {
    url: "https://mercitrader.com",
    type: "website",
    title: "MerciTrader | Business Group",
    description:
      "MerciTrader operates multiple businesses including Al-Sadiq Bricks and Al-Sadiq Rice.",
    images: [
      {
        url: "https://mercitrader.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MerciTrader – Business Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MerciTrader | Business Group",
    description:
      "Diversified business group: Al-Sadiq Bricks & Al-Sadiq Rice",
    images: ["https://mercitrader.com/twitter-card.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", type: "image/x-icon" },
      { url: "/favicon.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: [{ url: "/favicon.ico?v=2", type: "image/x-icon" }],
    apple: [{ url: "/favicon.png?v=2", type: "image/png" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
