import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Exo, Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Exo({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MerciTrader | Business Group",
  description:
    "MerciTrader is a diversified business group operating AL-SADIQ BRICKS KILN, Merci Mart, and Merci Rice. Quality, reliability, and customer focus.",
  keywords: [
    "MerciTrader",
    "Business Group",
    "AL-SADIQ BRICKS KILN",
    "Merci Mart",
    "Merci Rice",
    "Construction Materials",
    "Rice Trading",
    "Business Solutions",
    "Quality Products",
  ],
  openGraph: {
    url: "https://mercitrader.com",
    type: "website",
    title: "MerciTrader | Business Group",
    description: "MerciTrader operates multiple businesses including AL-SADIQ BRICKS KILN, Merci Mart, and Merci Rice.",
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
    description: "Diversified business group: AL-SADIQ BRICKS KILN, Merci Mart & Merci Rice",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable)}>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
