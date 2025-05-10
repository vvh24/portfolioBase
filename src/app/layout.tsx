"use client";

import "./globals.css";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import RoundedButton from "@/components/ui/rounded-button";
import Head from "next/head";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <html lang="en">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Valeria Heredia Crespo's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? "backdrop-blur-md shadow-md" : ""
          } bg-white/80`}
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-lg font-bold text-purple-600">
              My Portfolio
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 items-center">
              <Link href="/about" className="text-gray-700 hover:text-purple-600">
                About
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-purple-600">
                Projects
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800 focus:outline-none ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-white md:hidden">
                <nav className="flex flex-col space-y-4 p-4">
                  <Link
                    href="/about"
                    className="text-gray-800 hover:text-purple-600 transition-colors no-underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/projects"
                    className="text-gray-800 hover:text-purple-600 transition-colors no-underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-800 hover:text-purple-600 transition-colors no-underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:brightness-110 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </header>

        <main className="pt-16">{children}</main>

        <footer className="bg-gray-100 text-black-800 py-12">
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
                {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-800 rounded-full"></span>
                    <Link href={`/${link.toLowerCase()}`} className="no-underline text-black hover:text-purple-600 transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/vvh24" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/valeria-heredia-101452326/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/val_hcrespo/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="https://x.com/valerixch?s=21&t=G9AO291usgwbc4gp0ozLAQ" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                  <FaTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Valeria Heredia Crespo. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
