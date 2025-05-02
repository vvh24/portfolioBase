"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

export default function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-md" : ""
      } bg-white/80`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-[1.5rem] font-hammersmith-one font-semibold text-purple-600 tracking-[-0.01em]">
          Valeria Heredia
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link
            href="/about"
            className="text-gray-700 font-old-standard-tt font-bold text-[1rem] tracking-[0.01em] hover:text-purple-600 transition-colors no-underline"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-gray-700 font-old-standard-tt font-bold text-[1rem] tracking-[0.01em] hover:text-purple-600 transition-colors no-underline"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 font-old-standard-tt font-bold text-[1rem] tracking-[0.01em] hover:text-purple-600 transition-colors no-underline"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 bg-purple-600 text-white font-sans font-medium text-[1rem] tracking-[0.01em] rounded-lg hover:brightness-110 hover:scale-105 transition-all no-underline"
          >
            Let's Connect
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
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
          <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                href="/about"
                className="text-gray-800 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-gray-800 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:brightness-110 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Let's Connect
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}