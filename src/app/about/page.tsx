"use client";

import React, { useState } from "react";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import RoundedButton from "@/components/ui/rounded-button";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-md w-full fixed top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-600">Valeria Heredia Crespo</h1>
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
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <nav className="hidden md:flex items-center space-x-16">
            <Link href="/" className="text-gray-700 hover:text-purple-600 no-underline">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 no-underline">About</Link>
            <Link href="/projects" className="text-gray-700 hover:text-purple-600 no-underline">Projects</Link>
            <RoundedButton href="/contact" className="bg-purple-600 text-white hover:bg-purple-700 no-underline">
              Let's Connect
            </RoundedButton>
          </nav>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:text-purple-600">Home</Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:text-purple-600">About</Link>
            <Link href="/projects" className="block px-4 py-2 text-gray-700 hover:text-purple-600">Projects</Link>
            <RoundedButton href="/contact" className="block px-4 py-2 bg-purple-600 text-white hover:bg-purple-700">
              Let's Connect
            </RoundedButton>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 py-24 space-y-16">
        <div className="bg-white py-20 relative overflow-hidden">
          {/* Decorative Bubbles */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-40 h-40 bg-purple-300 rounded-full absolute top-10 left-10 animate-pulse"></div>
            <div className="w-32 h-32 bg-teal-300 rounded-full absolute bottom-20 right-20 animate-pulse"></div>
          </div>
          <div className="container mx-auto px-4 space-y-16">
            {/* Profile Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center relative">
              <div className="w-32 h-32 rounded-full border-4 border-purple-400 mx-auto mb-4"></div>
              <h1 className="text-5xl md:text-6xl font-heading text-gray-900 tracking-wide font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>About Me</h1>
              <p className="text-lg font-lato text-gray-700">Web and Information System Student</p>
              <div className="bg-purple-100 rounded-lg p-4 mt-4">
                <p className="text-sm font-lato text-gray-600">As a UI/UX designer and NJIT senior, I embody the Creator archetype. I believe in the power of self-expression and authenticity to create meaningful digital experiences.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10 space-y-12">
          {/* Background */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-playfair text-center text-purple-600">Background</h2>
            <p className="text-sm font-lato text-gray-600 mt-4">Motivated Computing School undergraduate student with a strong desire to learn and improve my skills in pursuit of a career as a Web Developer, UX Researcher, or Information Systems Analyst. With a foundation in web formatting, programming languages, database management, communication and service delivery. Organized, hardworking, and creative, with a willingness to take on added responsibilities to achieve team goals.</p>
          </div>

          {/* Education Timeline */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-playfair text-center text-purple-600">Education</h2>
            <div className="relative mt-8">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-200 h-full"></div>
              <div className="space-y-16">
                {/* NJIT */}
                <div className="relative flex items-center">
                  <div className="w-5 h-5 border-4 border-purple-400 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="bg-white rounded-lg shadow-lg p-6 w-[45%] mr-16 ml-4">
                    <h3 className="text-xl font-bold font-playfair text-purple-600">New Jersey Institute of Technology</h3>
                    <p className="text-sm font-lato text-gray-600">Newark, NJ</p>
                    <p className="text-sm font-lato text-gray-600">Bachelor of Science in Information Technology (2024-2026)</p>
                    <p className="text-sm font-lato text-gray-600">GPA: 3.5/4.0</p>
                  </div>
                </div>
                {/* PCCC */}
                <div className="relative flex items-center">
                  <div className="w-5 h-5 border-4 border-purple-400 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                  <div className="bg-white rounded-lg shadow-lg p-6 w-[45%] mr-16 ml-4">
                    <h3 className="text-xl font-bold font-playfair text-purple-600">Passaic County Community College</h3>
                    <p className="text-sm font-lato text-gray-600">Paterson, NJ</p>
                    <p className="text-sm font-lato text-gray-600">Completed 60 credit hours towards an AAS (2021-2023)</p>
                    <p className="text-sm font-lato text-gray-600">GPA: 3.5/4.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-playfair text-center text-purple-600">Certifications</h2>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                <div className="w-12 h-12 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto mb-2">RCR</div>
                <h3 className="text-lg font-playfair text-purple-600">CITI Program RCR Course Certification</h3>
                <p className="text-sm font-lato text-gray-600">Responsible Conduct of Research (RCR) - Basic Course Completion (2025)</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                <div className="w-12 h-12 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto mb-2">MMT</div>
                <h3 className="text-lg font-playfair text-purple-600">Makerspace Mechatronics Training Program Certificate</h3>
                <p className="text-sm font-lato text-gray-600">2021-22</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-playfair text-center text-purple-600">Skills</h2>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto"></div>
                <p className="text-sm font-lato text-gray-600 mt-2">HTML</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto"></div>
                <p className="text-sm font-lato text-gray-600 mt-2">CSS</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto"></div>
                <p className="text-sm font-lato text-gray-600 mt-2">Python/C++/Swift</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto"></div>
                <p className="text-sm font-lato text-gray-600 mt-2">Git/GitHub</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto"></div>
                <p className="text-sm font-lato text-gray-600 mt-2">Figma</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto"></div>
                <p className="text-sm font-lato text-gray-600 mt-2">MySQL</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto"></div>
                <p className="text-sm font-lato text-gray-600 mt-2">Adobe DreamWeaver</p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-playfair text-center text-purple-600">Languages</h2>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                <div className="w-12 h-12 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto mb-2">ES</div>
                <p className="text-sm font-lato text-gray-600">Spanish - Native</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
