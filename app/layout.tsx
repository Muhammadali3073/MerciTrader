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
  title: "Sortevo - Professional Cross-Platform Software Solutions",
  description:
    "Sortevo offers custom software solutions across Android, iOS, Mac, Linux, Windows, and Web platforms. Hire our expert developers for your next project and accelerate your business growth.",
  keywords: [
    "Sortevo",
    "Software Solutions",
    "Cross-Platform Development",
    "Android Development",
    "iOS Development",
    "Mac Software",
    "Linux Applications",
    "Windows Programs",
    "Web Development",
    "Freelance Developers",
    "Custom Applications",
    "Professional Services",
  ],
  openGraph: {
    title: "Sortevo - Professional Cross-Platform Software Solutions",
    description:
      "Custom software development services for Android, iOS, Mac, Linux, Windows, and Web platforms. Let's build something great together.",
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
  authors: [{ name: "Sortevo Team", url: "https://Sortevo.com/about" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
