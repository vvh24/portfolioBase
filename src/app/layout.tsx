import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import MainNav from "@/components/main-nav";
import "@fontsource/outfit";
import "@fontsource/manrope";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Outlaw AI Consultancy",
    template: "%s | Outlaw AI Consultancy",
  },
  description: "Challenging the AI status quo with radical honesty and evidence-based disruption",
  authors: [{ name: "Outlaw AI Consultancy" }],
  keywords: ["AI consultancy", "digital transformation", "disruptive innovation"],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Old+Standard+TT:wght@400;700&display=swap" rel="stylesheet" precedence="default" />
      </head>
      <body className="font-sans antialiased">
        <MainNav />
        {children}
        <footer className="bg-neutral-900 text-white py-8 px-6 text-center">
          <p className="font-body text-sm">
            Empowering creativity and self-expression. &copy; 2025 Valeria Heredia. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
