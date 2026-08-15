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
    // Brand & Business
    "MerciTrader",
    "Merci Traders",
    "Merci Trader",
    "Merci Traders Pakistan",
    "MerciTrader Pakistan",
    "Business Group",
    "Merci Business Group",
    "Merci Group",
    "Merci Trading",
    "Merci Business",
    "Business Solutions Pakistan",

    // Main Businesses
    "AL-SADIQ BRICKS KILN",
    "Al Sadiq Bricks",
    "Al Sadiq Brick Kiln",
    "Al Sadiq Bricks Muridke",
    "Al Sadiq Bricks Pakistan",
    "Merci Mart",
    "Merci Mart Pakistan",
    "Merci Rice",
    "Merci Rice Pakistan",
    "Rice Trading Pakistan",
    "Rice Traders Pakistan",
    "Rice Supplier Pakistan",
    "Rice Business Pakistan",

    // Bricks & Construction
    "Bricks",
    "Brick Kiln",
    "Brick Kilns Pakistan",
    "Bricks Pakistan",
    "Bricks Supplier",
    "Brick Supplier Pakistan",
    "Brick Manufacturer Pakistan",
    "Brick Manufacturing",
    "Construction Bricks",
    "Building Bricks",
    "Construction Materials",
    "Construction Material Supplier",
    "Building Materials Pakistan",
    "Construction Materials Pakistan",
    "Building Material Supplier",
    "Quality Bricks",
    "Premium Bricks",
    "Red Bricks",
    "Red Brick Supplier",

    // Muridke
    "Muridke",
    "Muridke Pakistan",
    "Muridke Punjab",
    "Muridke Bricks",
    "Muridke Brick Kiln",
    "Muridke Brick Kilns",
    "Bricks in Muridke",
    "Brick Supplier in Muridke",
    "Brick Manufacturer in Muridke",
    "Construction Materials Muridke",
    "Building Materials Muridke",
    "Construction Material Supplier Muridke",
    "Muridke Construction",
    "Muridke Business",
    "Muridke Traders",
    "Muridke Trading",
    "Muridke Suppliers",

    // Batha / Bhatta
    "Batha",
    "Bhatta",
    "Bhatta Muridke",
    "Batha Muridke",
    "Bhatta Bricks",
    "Batha Bricks",
    "Bhatta Brick Kiln",
    "Batha Brick Kiln",
    "Bhatta Owner Muridke",
    "Brick Bhatta Muridke",
    "Brick Batha Muridke",
    "Muridke Bhatta",
    "Muridke Batha",
    "Bhatta Industry Muridke",
    "Brick Kiln Business Muridke",

    // Location + Bricks
    "Muridke bricks supplier",
    "Muridke bricks dealer",
    "Muridke brick dealers",
    "best bricks in Muridke",
    "best brick kiln in Muridke",
    "quality bricks Muridke",
    "brick supplier near Muridke",
    "brick kiln near Muridke",
    "construction bricks Muridke",

    // Rice
    "Rice",
    "Rice Trading",
    "Rice Traders",
    "Rice Supplier",
    "Rice Exporter Pakistan",
    "Rice Export Pakistan",
    "Rice Wholesale",
    "Rice Wholesale Pakistan",
    "Basmati Rice",
    "Basmati Rice Pakistan",
    "Premium Rice",
    "Rice Products",
    "Rice Business",
    "Rice Trading Company",
    "Rice Supplier Pakistan",

    // General Business
    "Trading Company Pakistan",
    "Trading Business Pakistan",
    "Wholesale Business Pakistan",
    "Wholesale Supplier Pakistan",
    "Suppliers Pakistan",
    "Quality Products",
    "Quality Products Pakistan",
    "Reliable Suppliers Pakistan",
    "Trusted Traders Pakistan",
    "Business Services Pakistan",
    "Local Business Muridke",
    "Muridke Business Group"
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
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
