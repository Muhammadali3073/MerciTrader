import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
    "Ali",
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
    url: "https://Sortevo.com",
    type: "website",
    images: [
      {
        url: "https://Sortevo.com/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sortevo Logo and Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sortevo - Professional Software Solutions for All Platforms",
    description:
      "Hire our expert developers for custom software solutions across all major platforms.",
    images: ["https://Sortevo.com/assets/images/twitter-card.jpg"],
  },
  icons: {
    icon: [
      { url: "/profile_image.jpeg", type: "image/jpeg" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/profile_image.jpeg" }],
    shortcut: [{ url: "/profile_image.jpeg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
