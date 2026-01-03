"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import RoundedButton from "@/components/ui/rounded-button";
import "@fontsource/lora"; // Import Lora font for headings
import "@fontsource/poppins/500.css"; // Import Poppins Medium for subheadings
import "@fontsource/inter"; // Import Inter for body text

export default function AIRAGImplementationPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
  {/* rely on global header in layout.tsx */}

      {/* Main Content */}
  <main className="container mx-auto px-4 py-24 space-y-16 font-inter">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Hero Image */}
          <figure className="rounded-lg overflow-hidden bg-gray-100 border border-gray-200 aspect-video">
            <img
              src="/images/ragimplementation_hover3.png"
              alt="AI RAG Implementation Preview"
              className="w-full h-full object-cover"
            />
          </figure>

          {/* Right Column: Project Details */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-heading text-gray-900 font-semibold font-lora">
              AI Project with RAG Implementation
            </h1>
            <p className="text-lg text-gray-700 font-inter">
              A cutting-edge AI project implementing Retrieval-Augmented Generation (RAG) to enhance information retrieval and response generation.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://websocket-chat-kk14.onrender.com"
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium no-underline"
              >
                View Demo
              </a>
              <a
                href="https://github.com/vvh24/websocket-chat.git"
                className="inline-flex items-center px-4 py-2 border border-gray-200 text-gray-800 rounded-md text-sm no-underline"
              >
                GitHub Repo
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">AI</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">RAG</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Machine Learning</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">Information Retrieval</span>
            </div>
          </div>
        </section>

        {/* Project Overview → Results rewritten with a more technical, modern feel */}
        <section className="space-y-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Lora, serif' }}>Project Overview</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">A streaming chat application demonstrating Retrieval-Augmented Generation (RAG) with customizable AI personas, low-latency Server-Sent Events, and a performance-minded frontend.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {title: 'Real-time Text Streaming', body: 'Server-Sent Events for seamless, low-latency updates.'},
              {title: 'Custom AI Personas', body: 'Persona-driven responses loaded from JSON configurations.'},
              {title: 'LangChain Integration', body: 'Advanced prompt handling and context management.'},
              {title: 'Dynamic Responses', body: 'Context-aware replies that adapt to conversation state.'},
              {title: 'Responsive UI', body: 'Clean, accessible chat interface optimized for devices.'},
            ].map((f, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border-l-4 border-indigo-600 shadow-sm hover:shadow-lg transition-all">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h4>
                <p className="text-sm text-gray-700">{f.body}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Frontend</h3>
              <ul className="text-gray-700 list-disc list-inside">
                <li>HTML5, CSS3, Vanilla JS</li>
                <li>Server-Sent Events (SSE)</li>
                <li>Responsive UI & accessibility</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Backend</h3>
              <ul className="text-gray-700 list-disc list-inside">
                <li>Node.js + Express</li>
                <li>LangChain + OpenAI API</li>
                <li>Environment-based API & secrets</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tools</h3>
              <ul className="text-gray-700 list-disc list-inside">
                <li>Git, GitHub</li>
                <li>npm, build scripts</li>
                <li>Testing & iterative debugging</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">Development Process</h3>
              <p className="text-gray-700 mt-2">Research, architecture, and iterative implementation focused on reliability and maintainability. Key steps included persona design, SSE optimization, and LangChain integration testing.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h4 className="font-semibold">Implementation Challenges</h4>
                <ul className="text-gray-700 list-disc list-inside mt-2">
                  <li>Managing streaming state</li>
                  <li>Latency and reconnection strategies</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h4 className="font-semibold">Outcomes</h4>
                <ul className="text-gray-700 list-disc list-inside mt-2">
                  <li>Low-latency interactive chat</li>
                  <li>Extensible persona configuration</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h4 className="font-semibold">Future Work</h4>
                <ul className="text-gray-700 list-disc list-inside mt-2">
                  <li>Support additional models/APIs</li>
                  <li>Enhanced UI customizations</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Code & Artifacts</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{
                img: '/images/codeshowcase.png',
                title: 'Server Streaming'
              },{
                img: '/images/characterpromptengineering1.png',
                title: 'Prompt Engineering'
              },{
                img: '/images/clientstreaminghandler1.png',
                title: 'Client Handler'
              }].map((c, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                  <div className="text-sm text-gray-600 mb-3">{c.title}</div>
                  <div className="w-full h-40 rounded-md overflow-hidden cursor-pointer" onClick={() => setEnlargedImage(c.img)}>
                    <img src={c.img} alt={c.title} className="object-cover w-full h-full" />
                  </div>
                </div>
              ))}
            </div>

            {enlargedImage && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setEnlargedImage(null)}>
                <img src={enlargedImage} alt="Enlarged" className="max-w-full max-h-full rounded-lg" />
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">Results & Reflection</h3>
              <p className="text-gray-700 mt-2">Delivered a responsive streaming chat that balances realtime performance with configurable AI personas. The project highlighted trade-offs in latency, API usage, and UX design for streaming interfaces.</p>
            </div>
          </div>

           <div className="flex justify-between items-center">
            <Link href="/projects" className="px-5 py-3 border border-gray-200 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors no-underline">Back to Projects</Link>
            <div className="flex items-center gap-3">
              <a href="https://websocket-chat-kk14.onrender.com" className="px-5 py-3 bg-black text-white rounded-lg hover:opacity-95 no-underline">Open Demo</a>
              <a href="https://github.com/vvh24/websocket-chat.git" className="px-5 py-3 border border-gray-200 rounded-lg text-gray-900 hover:text-[#0b3d91] transition-colors no-underline">View Code</a>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}