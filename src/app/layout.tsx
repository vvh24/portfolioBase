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

  return (
    <html lang="en">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Valeria Heredia Crespo's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <header className="bg-white shadow-md w-full fixed top-0 z-50">
          <div className="container mx-auto px-2 py-2 flex justify-between items-center md:px-4 md:py-4">
            <h1 className="text-lg font-bold text-purple-800 md:text-xl" style={{ fontFamily: 'Lora, serif' }}>
              Valeria Heredia Crespo
            </h1>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-purple-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <nav className="hidden md:flex items-center space-x-4 md:space-x-16">
              <Link href="/" className="text-sm text-gray-700 hover:text-purple-600 no-underline md:text-base">Home</Link>
              <Link href="/about" className="text-sm text-gray-700 hover:text-purple-600 no-underline md:text-base">About</Link>
              <Link href="/projects" className="text-sm text-gray-700 hover:text-purple-600 no-underline md:text-base">Projects</Link>
              <RoundedButton href="/contact" className="px-4 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all no-underline md:px-6 md:py-3">
                Let's Connect
              </RoundedButton>
            </nav>
          </div>
          <div className={`absolute top-full left-0 w-full bg-white md:hidden z-40 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:text-purple-600 no-underline">Home</Link>
            <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:text-purple-600 no-underline">About</Link>
            <Link href="/projects" className="block px-4 py-2 text-sm text-gray-700 hover:text-purple-600 no-underline">Projects</Link>
            <RoundedButton href="/contact" className="block px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 no-underline">
              Let's Connect
            </RoundedButton>
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
