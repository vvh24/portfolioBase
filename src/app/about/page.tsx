"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import MainNav from "@/components/main-nav";
import RoundedButton from "@/components/ui/rounded-button";
import "@fontsource/lora"; // Import Lora font for headings
import "@fontsource/poppins/500.css"; // Import Poppins Medium for subheadings
import "@fontsource/inter"; // Import Inter for body text

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md shadow-md" : ""
        } bg-white/80`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold text-purple-600 no-underline">
            Valeria Heredia Crespo
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="text-gray-700 hover:text-purple-600 no-underline">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 no-underline">
              About
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-purple-600 no-underline">
              Projects
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 no-underline"
            >
              Contact Me
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed text-gray-800 hover:bg-gray-100 focus:ring-gray-500 border border-transparent px-2 w-10 h-10"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
            aria-haspopup="menu"
            aria-expanded={isMenuOpen}
          >
            <span className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </span>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white md:hidden">
              <nav className="flex flex-col space-y-4 p-4">
                <Link
                  href="/"
                  className="text-gray-800 hover:text-purple-600 transition-colors no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
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
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:brightness-110 transition-all no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Me
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-24 space-y-16 font-inter mt-[35px]">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-heading text-gray-900 tracking-wide font-semibold text-center relative font-Lora">
          About Me
          <span className="block w-24 h-1 bg-purple-600 mx-auto mt-2 rounded"></span>
        </h1>

        {/* Introduction Section */}
        <section className="bg-purple-100 rounded-lg p-8 shadow-md flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 font-inter">
          <img src="/images/valeria_cartoon.png" alt="Your Profile" className="w-32 h-32 rounded-full object-cover" />
          <div className="flex-1">
            <h2 className="text-3xl font-heading text-black-900 font-lora">Blending Technology & Creativity</h2>
            <p className="text-gray-700 mt-4 font-inter">I'm Valeria, a Web & Information Systems student at NJIT with a passion for creating intuitive digital solutions. I approach each project with both analytical precision and creative vision, seeking to transform complex information into accessible, engaging experiences.</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-300 hover:scale-105 transition-transform">Bilingual Communicator</span>
              <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-300 hover:scale-105 transition-transform">Detail-oriented</span>
              <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-300 hover:scale-105 transition-transform">Creative Thinker</span>
            </div>
          </div>
        </section>

        {/* My Journey Section */}
        <section>
          <h2 className="text-4xl font-heading text-gray-900 text-center relative">
            My Journey
            <span className="block w-24 h-1 bg-purple-600 mx-auto mt-2 rounded"></span>
          </h2>
          <div className="bg-white border border-purple-200 rounded-lg p-8 shadow-md mt-8">
            <p className="text-black-700 mb-4">Web and Information Systems emerged as the perfect intersection of these interests, allowing me to combine technical problem-solving with creative design. I discovered that my analytical mindset, attention to detail, and organizational skills complemented my creative side perfectly when building digital experiences.</p>
            <p className="text-black-700">What excites me most about this field is the opportunity to create and improve digital solutions that make a real difference in how people interact with information. My journey has evolved from exploration to a focused pursuit of creating technology that's both functional and beautiful.</p>
          </div>
        </section>

        {/* Skills & Expertise Section */}
        <section>
          <h2 className="text-4xl font-heading text-gray-900 text-center relative">
            Skills & Expertise
            <span className="block w-24 h-1 bg-purple-600 mx-auto mt-2 rounded"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Technical Skills */}
            <div className="bg-purple-100 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-heading text-black-900 mb-4">Technical</h3>
              <ul className="space-y-2">
                {['HTML/CSS', 'Python', 'C++', 'Swift', 'MySQL', 'Git/GitHub'].map(skill => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    <span className="text-black-700 hover:scale-105 transition-transform">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Design & UX Skills */}
            <div className="bg-purple-100 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-heading text-black-900 mb-4">Design & UX</h3>
              <ul className="space-y-2">
                {['User Experience', 'Wireframing', 'Figma', 'DreamWeaver', 'Information Architecture'].map(skill => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    <span className="text-black-700 hover:scale-105 transition-transform">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-purple-100 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-heading text-black-900 mb-4">Soft Skills</h3>
              <ul className="space-y-2">
                {['Bilingual (Eng/Spa)', 'Problem-Solving', 'Attention to Detail', 'Time Management', 'Works Well Under Pressure'].map(skill => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    <span className="text-black-700 hover:scale-105 transition-transform">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section>
          <h2 className="text-4xl font-heading text-black-900 text-center relative">
            Education & Certifications
            <span className="block w-24 h-1 bg-purple-600 mx-auto mt-2 rounded"></span>
          </h2>
          <div className="bg-white border border-purple-200 rounded-lg p-8 shadow-md mt-8 space-y-6">
            <div className="flex items-center space-x-4">
              <img src="/images/njit_logo.png" alt="NJIT Logo" className="w-12 h-12 object-contain rounded-full" />
              <div>
                <h3 className="text-lg font-bold text-black-900">NJIT - Newark, NJ</h3>
                <p className="text-black-700">Bachelor of Science in Web & Information Systems (2024-26), GPA: 3.6/4.0</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src="/images/pccc_logo.gif" alt="PCCC Logo" className="w-12 h-12 object-contain rounded-full" />
              <div>
                <h3 className="text-lg font-bold text-black-900">Passaic County Community College - Paterson, NJ</h3>
                <p className="text-black-700">Associate of Applied Science in CIS Web Technology (2021-23), GPA: 3.5/4.0</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-purple-200 rounded-lg p-8 shadow-md mt-8 space-y-6">
            <div className="flex items-center space-x-4">
              <img src="/images/citi_logo.jpg" alt="CITI Program Logo" className="w-12 h-12 object-contain rounded-full" />
              <div>
                <h3 className="text-lg font-bold text-gray-900">CITI Program</h3>
                <p className="text-black-700">Responsible Conduct of Research (RCR) - Basic Course (2025)</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src="/images/njit_logo2.0.jpg" alt="Makerspace Logo" className="w-12 h-12 object-contain rounded-full" />
              <div>
                <h3 className="text-lg font-bold text-gray-900">NJIT Makerspace Mechatronics Training Program</h3>
                <p className="text-black-700">Mechatronics Training Program Certificate (2021-22)</p>
              </div>
            </div>
          </div>
        </section>

        {/* My Approach & Values Section */}
        <section>
          <h2 className="text-4xl font-heading text-black-900 text-center relative">
            My Approach & Values
            <span className="block w-24 h-1 bg-purple-600 mx-auto mt-2 rounded"></span>
          </h2>
          <div className="bg-purple-50 rounded-lg p-8 shadow-md mt-8">
            <p className="text-black-700 mb-4">My work style combines methodical planning with creative problem-solving, and I thrive under pressure. I'm open to new challenges and willing to take calculated risks to achieve the best results.</p>
            <p className="text-black-700">While my current focus is on building my technical and design skills in academic projects, I'm passionate about traditional art forms like drawing and sketching. I'm excited to continue bridging these analog creative skills with digital design as I grow in my career.</p>
          </div>
          {/* Back to Projects Button */}
          <div className="flex justify-center mt-8">
            <Link 
              href="/"
              className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all no-underline"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
