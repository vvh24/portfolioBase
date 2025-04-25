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
        <nav className="flex justify-between items-center py-4 px-6 bg-background-light shadow-md">
          <ul className="flex space-x-6">
            <li><a href="/" className="text-primary-500 hover:text-primary-600">Home</a></li>
            <li><a href="/about" className="text-primary-500 hover:text-primary-600">My Story</a></li>
            <li><a href="/projects" className="text-primary-500 hover:text-primary-600">Projects</a></li>
            <li><a href="/process" className="text-primary-500 hover:text-primary-600">Process</a></li>
            <li><a href="/contact" className="text-primary-500 hover:text-primary-600">Contact</a></li>
          </ul>
        </nav>
        <MainNav />
        {children}
      </body>
    </html>
  );
}
