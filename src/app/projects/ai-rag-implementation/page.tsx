"use client";
import React, { useState } from "react";
import Link from "next/link";
import RoundedButton from "@/components/ui/rounded-button";

export default function AIRAGImplementationPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);

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
            <RoundedButton href="/contact" className="bg-purple-800 text-white hover:bg-purple-700 no-underline">
              Let's Connect
            </RoundedButton>
          </nav>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:text-purple-600">Home</Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:text-purple-600">About</Link>
            <Link href="/projects" className="block px-4 py-2 text-gray-700 hover:text-purple-600">Projects</Link>
            <RoundedButton href="/contact" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all no-underline">
              Let's Connect
            </RoundedButton>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-24 space-y-16">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Hero Image */}
          <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
            <img
              src="/images/ragimplementation_hover3.png"
              alt="AI RAG Implementation Preview"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Right Column: Project Details */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-heading text-gray-900 font-semibold">
              AI Project with RAG Implementation
            </h1>
            <p className="text-lg text-gray-700">
              A cutting-edge AI project implementing Retrieval-Augmented Generation (RAG) to enhance information retrieval and response generation.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all font-semibold no-underline"
              >
                View Demo
              </a>
              <a
                href="https://github.com/vvh24/websocket-chat.git"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all font-semibold no-underline"
              >
                GitHub Repo
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">AI</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">RAG</span>
              <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">Machine Learning</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium">Information Retrieval</span>
            </div>
          </div>
        </section>

        {/* Project Overview Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            This project implements a streaming chat application with an AI character persona using Server-Sent Events and the OpenAI API. The application features real-time text streaming, creating a dynamic and engaging conversational experience with an AI character whose personality, background, and responses are fully customizable.
          </p>
          <h3 className="text-2xl font-heading text-gray-900 text-center mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-gray-900">Real-time Text Streaming</h4>
              <p className="text-gray-700 mt-2">Using Server-Sent Events (SSE) for seamless real-time updates.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-gray-900">Custom AI Character Persona</h4>
              <p className="text-gray-700 mt-2">Loaded from JSON configuration for tailored interactions.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-gray-900">Integration with OpenAI</h4>
              <p className="text-gray-700 mt-2">Utilizing LangChain for advanced language model capabilities.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-gray-900">Dynamic Response Generation</h4>
              <p className="text-gray-700 mt-2">Adapts to character traits and situational contexts.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <h4 className="text-lg font-semibold text-gray-900">Clean, Responsive UI</h4>
              <p className="text-gray-700 mt-2">Designed for seamless and engaging chat interactions.</p>
            </div>
          </div>
        </section>

        {/* Technologies Used Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8">
            Technologies Used
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Frontend</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript (Vanilla)</li>
                <li>Server-Sent Events (SSE)</li>
                <li>Responsive design with flexbox</li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Backend</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Node.js with Express.js</li>
                <li>LangChain for AI model integration</li>
                <li>OpenAI API (GPT-3.5 Turbo)</li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Development Tools</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Git/GitHub</li>
                <li>npm</li>
                <li>Environment variables for secure API key management</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8">
            Development Process
          </h2>
          <div className="space-y-8">
            {/* Research & Planning Subsection */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Research & Planning</h3>
              <p className="text-gray-700 mt-2">The project began with extensive research into the capabilities of Server-Sent Events (SSE) and the OpenAI API. I analyzed existing chat applications to identify gaps and opportunities for improvement. Planning involved creating a detailed roadmap and defining the scope of the project to ensure timely delivery.</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Explored use cases for real-time text streaming</li>
                <li>Defined character persona requirements</li>
                <li>Outlined integration points for LangChain and OpenAI API</li>
              </ul>
            </div>

            {/* Architecture Design Subsection */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Architecture Design</h3>
              <p className="text-gray-700 mt-2">The architecture was designed to ensure scalability and maintainability. The backend was built using Node.js and Express.js, while the frontend utilized vanilla JavaScript for simplicity and responsiveness.</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Modular backend with separate routes for SSE and API integration</li>
                <li>Frontend designed with a focus on user experience and accessibility</li>
                <li>Secure API key management using environment variables</li>
              </ul>
            </div>

            {/* Implementation Challenges & Solutions Subsection */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Implementation Challenges & Solutions</h3>
              <p className="text-gray-700 mt-2">Several challenges were encountered during development, including handling real-time data streams and ensuring seamless integration with the OpenAI API. These were addressed through iterative testing and optimization.</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Optimized SSE implementation to handle high-frequency updates</li>
                <li>Resolved latency issues by fine-tuning API requests</li>
                <li>Enhanced error handling for robust performance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Features Deep Dive Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8">
            Key Features Deep Dive
          </h2>
          <div className="space-y-8">
            {/* Character Personality System Subsection */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Character Personality System</h3>
              <p className="text-gray-700 mt-2">The character personality system allows users to define unique traits and backgrounds for their AI personas. This feature enhances engagement by tailoring responses to the character's personality.</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Customizable JSON configuration for character traits</li>
                <li>Dynamic response generation based on predefined attributes</li>
                <li>Support for multiple personas within a single application</li>
              </ul>
            </div>

            {/* Server-Sent Events Implementation Subsection */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Server-Sent Events Implementation</h3>
              <p className="text-gray-700 mt-2">SSE was implemented to enable real-time text streaming, providing a seamless and interactive user experience. This approach ensures low latency and efficient data delivery.</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Established persistent connections for continuous updates</li>
                <li>Optimized data flow to minimize bandwidth usage</li>
                <li>Implemented reconnection logic for improved reliability</li>
              </ul>
            </div>

            {/* Dynamic Response Generation Subsection */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Dynamic Response Generation</h3>
              <p className="text-gray-700 mt-2">Dynamic response generation leverages LangChain and the OpenAI API to produce context-aware replies. This feature adapts to situational contexts and user inputs for a more natural conversation flow.</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Integrated LangChain for advanced prompt engineering</li>
                <li>Utilized OpenAI API for high-quality language generation</li>
                <li>Enhanced adaptability through real-time context updates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Code Showcase Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8">
            Code Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Server-Side Streaming Example */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Server-Side Streaming</h3>
              <div className="w-full h-48 rounded-lg overflow-hidden cursor-pointer" onClick={() => setEnlargedImage('/images/codeshowcase.png')}>
                <img
                  src="/images/codeshowcase.png"
                  alt="Server-Side Streaming Code"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Character Prompt Engineering Example */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Character Prompt Engineering</h3>
              <div className="w-full h-48 rounded-lg overflow-hidden cursor-pointer" onClick={() => setEnlargedImage('/images/characterpromptengineering1.png')}>
                <img
                  src="/images/characterpromptengineering1.png"
                  alt="Character Prompt Engineering Code"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Client-Side Streaming Handler Example */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md flex flex-col items-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Client-Side Streaming Handler</h3>
              <div className="w-full h-48 rounded-lg overflow-hidden cursor-pointer" onClick={() => setEnlargedImage('/images/clientstreaminghandler1.png')}>
                <img
                  src="/images/clientstreaminghandler1.png"
                  alt="Client-Side Streaming Handler Code"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Enlarged Image Modal */}
          {enlargedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setEnlargedImage(null)}>
              <img
                src={enlargedImage}
                alt="Enlarged Code"
                className="max-w-full max-h-full rounded-lg"
              />
            </div>
          )}
        </section>

        {/* Responsive Layout Enhancements */}
        <style jsx>{`
          section {
            animation: fadeIn 0.5s ease-in-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          h2 {
            font-family: 'Poppins', sans-serif;
          }

          pre {
            font-family: 'Courier New', monospace;
          }
        `}</style>

        {/* Results & Reflection Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8">
            Results & Reflection
          </h2>
          <div className="space-y-8">
            {/* Final Product Subsection */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Final Product</h3>
              <p className="text-gray-700 mt-2">The final product is a fully functional streaming chat application that combines real-time interaction with customizable AI personas. It demonstrates the potential of RAG in creating engaging conversational experiences.</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Real-time text streaming with minimal latency</li>
                <li>Customizable character personas for diverse use cases</li>
                <li>Responsive design for accessibility across devices</li>
              </ul>
            </div>

            {/* What I Learned Subsection */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">What I Learned</h3>
              <p className="text-gray-700 mt-2">This project provided valuable insights into real-time data handling, API integration, and user-centric design. Key takeaways include:</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Importance of efficient data streaming for real-time applications</li>
                <li>Challenges of integrating third-party APIs with custom logic</li>
                <li>Significance of user feedback in refining features</li>
              </ul>
            </div>

            {/* Future Improvements Subsection */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Future Improvements</h3>
              <p className="text-gray-700 mt-2">Future iterations of the project could include:</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Support for additional AI models and APIs</li>
                <li>Enhanced UI/UX with advanced customization options</li>
                <li>Integration with external knowledge bases for enriched responses</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Link href="/projects" className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all no-underline">Back to Projects</Link>
          <Link href="https://github.com/vvh24/websocket-chat.git" className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all no-underline">
            View Project
          </Link>
        </div>
      </main>
    </div>
  );
}