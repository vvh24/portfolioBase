import type { Metadata, Viewport } from "next";
import "./globals.css";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

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
    <html lang="en">
      <head>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
            }
          `}
        </style>
      </head>
      <body>
        {children}
        <footer className="bg-gray-100 text-gray-800 py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">About Me</h3>
              <p className="text-sm leading-relaxed">
                I'm a Web & Information Systems student passionate about creating intuitive digital experiences. Let's build something amazing together!
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:underline no-underline">Home</Link></li>
                <li><Link href="/about" className="hover:underline no-underline">About</Link></li>
                <li><Link href="/projects" className="hover:underline no-underline">Projects</Link></li>
                <li><Link href="/contact" className="hover:underline no-underline">Contact</Link></li>
              </ul>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                  <FaTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
