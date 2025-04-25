import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { MainNav } from "@/components/main-nav";

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
      <body className={`${inter.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        <nav className="flex justify-between items-center py-6 px-8 bg-gradient-to-r from-primary-500 to-secondary-500 shadow-lg">
          <ul className="flex space-x-8">
            <li><a href="/" className="text-white font-heading hover:underline">Home</a></li>
            <li><a href="/about" className="text-white font-heading hover:underline">My Story</a></li>
            <li><a href="/projects" className="text-white font-heading hover:underline">Projects</a></li>
            <li><a href="/process" className="text-white font-heading hover:underline">Process</a></li>
            <li><a href="/contact" className="text-white font-heading hover:underline">Contact</a></li>
          </ul>
        </nav>
        <MainNav />
        {children}
        <footer className="bg-neutral-900 text-white py-8 px-6 text-center">
          <p className="font-body text-sm">&copy; 2025 Your Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
