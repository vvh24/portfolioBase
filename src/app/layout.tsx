"use client";

import "./globals.css";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";
import RoundedButton from "@/components/ui/rounded-button";
import Head from "next/head";
import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleKey);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Valeria Heredia Crespo</title>
        <meta name="description" content="Valeria Heredia Crespo's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <header
          className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${isScrolled ? "shadow-sm" : ""} bg-gray-50`}
        >
          <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
            {/* Minimal text logo */}
            <div>
              <Link href="/" className="no-underline">
                <span className="text-lg font-medium text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Valeria Heredia Crespo
                </span>
              </Link>
            </div>

            {/* Nav */}
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/" className="text-gray-700 transition-colors no-underline px-3 py-2 rounded-md hover:bg-black hover:text-white">Home</Link>
              <Link href="/about" className="text-gray-700 transition-colors no-underline px-3 py-2 rounded-md hover:bg-black hover:text-white">About</Link>
              <Link href="/projects" className="text-gray-700 transition-colors no-underline px-3 py-2 rounded-md hover:bg-black hover:text-white">Projects</Link>
              <Link href="/contact" className="ml-6 inline-flex items-center justify-center px-4 py-2 bg-black text-white rounded-md hover:opacity-95 no-underline">Contact Me</Link>
            </div>

            {/* Mobile toggle */}
            <div className="md:hidden">
              <button aria-controls="mobile-menu" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {isMenuOpen && (
              <div id="mobile-menu" role="dialog" aria-modal="false" className="absolute top-full left-0 w-full bg-gray-50 md:hidden border-t border-gray-200">
                <nav className="flex flex-col p-4 space-y-2" aria-label="Mobile navigation">
                  <Link href="/" className="text-gray-800 no-underline px-4 py-2 rounded-md hover:bg-black hover:text-white" onClick={() => setIsMenuOpen(false)}>Home</Link>
                  <Link href="/about" className="text-gray-800 no-underline px-4 py-2 rounded-md hover:bg-black hover:text-white" onClick={() => setIsMenuOpen(false)}>About</Link>
                  <Link href="/projects" className="text-gray-800 no-underline px-4 py-2 rounded-md hover:bg-black hover:text-white" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                  <Link href="/contact" className="mt-2 inline-block bg-black text-white rounded-md px-4 py-2 text-center no-underline" onClick={() => setIsMenuOpen(false)}>Contact Me</Link>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Ensure main content clears the fixed header; use padding-top matching header height */}
        <main className="pt-20">{children}</main>

  <footer className="bg-white text-gray-700 py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>About Me</h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Hi! I’m Valeria, a Web & Information Systems graduate with a passion for
                building thoughtful web applications, data visualizations, and
                user-centered digital experiences.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((link, index) => {
                  const href = link === 'Home' ? '/' : `/${link.toLowerCase()}`;
                  return (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-gray-300 rounded-full" aria-hidden></span>
                      <Link href={href} className="no-underline text-gray-700 hover:text-gray-900 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact + Social */}
            <div className="flex flex-col items-start md:items-end">
              <h3 className="text-lg font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>Get in touch</h3>
              <p className="text-sm text-gray-700 mb-4 max-w-sm" style={{ fontFamily: 'Inter, sans-serif' }}>Interested in collaborating? I’m available for new projects and internships.</p>
              <Link href="/contact" className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md text-sm no-underline" style={{ fontFamily: 'Poppins, sans-serif' }}>Contact Me</Link>

              <div className="mt-4 flex items-center gap-4 text-gray-600">
                <a href="https://github.com/vvh24" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-900 text-gray-600">
                  <FaGithub className="w-6 h-6 md:w-7 md:h-7" />
                </a>
                <a href="https://www.linkedin.com/in/valeria-heredia-101452326/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-900 text-gray-600">
                  <FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />
                </a>
                <a href="https://www.instagram.com/val_hcrespo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-900 text-gray-600">
                  <FaInstagram className="w-6 h-6 md:w-7 md:h-7" />
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
