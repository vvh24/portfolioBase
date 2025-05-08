"use client";
import React, { useState } from "react";
import Link from "next/link";
import RoundedButton from "@/components/ui/rounded-button";

export default function AIRAGImplementationPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Lato, sans-serif' }}>
      {/* Navigation Bar */}
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-24 space-y-16">
        {/* Project Title Section */}
        <h1 className="text-4xl font-serif text-center text-purple-600" style={{ fontFamily: 'Poppins, sans-serif' }}>AI Project with RAG Implementation</h1>

        {/* Project Preview Image */}
        <div className="flex justify-center">
          <img src="/path-to-ai-rag-project-image.jpg" alt="AI RAG Implementation Preview" className="rounded-lg shadow-md border border-gray-200" />
        </div>

        {/* Brief Description */}
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          A cutting-edge AI project implementing Retrieval-Augmented Generation (RAG) to enhance information retrieval and response generation.
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Link href="/projects" className="text-purple-600 hover:underline">Back to Projects</Link>
          <Link href="https://github.com/your-repo-link" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all">
            View Project
          </Link>
        </div>
      </main>
    </div>
  );
}