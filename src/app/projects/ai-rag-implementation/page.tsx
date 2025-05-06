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

        {/* What was the assignment about? */}
        <div className="bg-white rounded-lg shadow-md flex space-x-4 p-6 mb-10">
          <div className="w-2 bg-purple-600"></div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>What was the assignment about?</h2>
            <p className="text-gray-700 leading-relaxed mt-4">
              The assignment involved building an AI system that leverages Retrieval-Augmented Generation to improve the accuracy and relevance of generated responses.
            </p>
            <div className="bg-purple-100 p-4 rounded-lg mt-4">
              <ul className="list-disc list-inside text-purple-700">
                <li>Enhance information retrieval</li>
                <li>Improve response generation accuracy</li>
                <li>Leverage state-of-the-art AI techniques</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Thought Process */}
        <div className="bg-white rounded-lg shadow-md flex space-x-4 p-6 mb-10">
          <div className="w-2 bg-purple-600"></div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Thought Process</h2>
            <ol className="mt-4 space-y-4">
              {["Researching RAG techniques", "Designing the system architecture", "Implementing the retrieval and generation components", "Testing and optimizing the system"].map((step, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-6 h-6 flex items-center justify-center bg-purple-100 text-purple-700 rounded-full font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Implementation */}
        <div className="bg-white rounded-lg shadow-md flex space-x-4 p-6 mb-10">
          <div className="w-2 bg-purple-600"></div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Implementation</h2>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-purple-600" style={{ fontFamily: 'Poppins, sans-serif' }}>Retrieval Component</h3>
              <p className="text-gray-700 leading-relaxed mt-2">
                Implemented a retrieval system using LangChain to fetch relevant documents based on user queries.
              </p>
              <h3 className="text-lg font-semibold text-purple-600 mt-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Generation Component</h3>
              <p className="text-gray-700 leading-relaxed mt-2">
                Utilized OpenAI's API to generate contextually relevant responses based on the retrieved documents.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="bg-white rounded-lg shadow-md flex space-x-4 p-6 mb-10">
          <div className="w-2 bg-purple-600"></div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Technologies Used</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Python</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">LangChain</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">OpenAI API</span>
            </div>
          </div>
        </div>

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