import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://nexuscore-it.vercel.app'),
  title: {
    default: "Nexus Core - Professional IT Smart Hands & Support in Bangalore",
    template: "%s | Nexus Core",
  },
  description: "Expert IT Smart Hands, WiFi Site Surveys (Ekahau), and 24/7 Managed IT Support in Bangalore and across APAC. Enterprise-grade network solutions, IoT integration, and IOR/EOR services.",
  keywords: ["IT Smart Hands Bangalore", "WiFi Survey Services Bangalore", "Ekahau WiFi India", "Data Center Support Bangalore", "Enterprise IT Solutions India", "Managed IT Services APAC", "IOR EOR Services India", "IOT Solutions Bangalore"],
  authors: [{ name: "Nexus Core" }],
  creator: "Nexus Core",
  publisher: "Nexus Core",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://nexuscore-it.vercel.app",
    title: "Nexus Core - IT Smart Hands & Enterprise Solutions in Bangalore",
    description: "Enterprise-grade IT support, WiFi site surveys, and smart hands services for businesses in Bangalore and across APAC.",
    siteName: "Nexus Core",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Core - IT Smart Hands & Enterprise Solutions Bangalore",
    description: "Enterprise-grade IT support, WiFi site surveys, and smart hands services for businesses in Bangalore and across APAC.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://nexuscore-it.vercel.app/",
  },
};

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <JsonLd />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
