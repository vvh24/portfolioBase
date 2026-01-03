"use client";

import Image from "next/image";
import Link from "next/link";
import RoundedButton from "@/components/ui/rounded-button"; // Corrected path to match the module
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaLightbulb, FaHammer, FaBullseye, FaCode, FaChartBar, FaPaintBrush } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/next";

// Importing Google Fonts
import "@fontsource/lora"; // Lora for headings
import "@fontsource/poppins/500"; // Poppins medium for subheadings
import "@fontsource/inter"; // Inter for body

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
  {/* Skip link for keyboard users */}
  <a href="#main-content" className="skip-link">Skip to content</a>
  <main id="main-content" className="flex-grow w-full pt-6 md:pt-16 overflow-x-hidden relative">
  <section className="hero relative w-full min-h-[75vh] flex items-center bg-gray-50" role="region" aria-labelledby="hero-heading">
          
          {/* Decorative dotted texture (improved visibility) */}
          <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Denser, slightly larger pattern and darker dots for visibility */}
                <pattern id="heroDotsVisible" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.25" fill="#d1d5db" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#heroDotsVisible)" opacity="0.18" />
            </svg>
          </div>

          <div className="container mx-auto px-6 lg:px-20 py-16 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 id="hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: 'Lora, serif' }}>
                Designing Thoughtful Digital Experiences
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Turning complex problems into intuitive, human-centered solutions.
              </p>

              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="/projects" className="inline-flex items-center justify-center px-5 py-2.5 bg-gray-900 text-white rounded-md text-sm font-medium hover:opacity-95 no-underline">View My Work</a>
                <a href="/contact" className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-100 no-underline">Let's Connect</a>
              </div>
            </div>
          </div>

          {/* Social icons top-right */}
          <div className="absolute top-6 right-6 z-20 flex space-x-3">
            <a href="https://www.linkedin.com/in/valeria-heredia-101452326/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-900 no-underline inline-flex items-center">
              <FaLinkedin aria-hidden className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a href="https://github.com/vvh24" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 hover:text-gray-900 no-underline inline-flex items-center">
              <FaGithub aria-hidden className="w-6 h-6 md:w-7 md:h-7" />
            </a>
            <a href="https://www.instagram.com/val_hcrespo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 hover:text-gray-900 no-underline inline-flex items-center">
              <FaInstagram aria-hidden className="w-6 h-6 md:w-7 md:h-7" />
            </a>
          </div>

          {/* Wavy divider to next section */}
          <div className="absolute left-0 bottom-0 w-full overflow-hidden leading-none">
            <svg className="relative block w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 C150,100 350,100 600,50 C850,0 1050,0 1200,50 L1200,120 L0,120 Z" fill="#ffffff"></path>
            </svg>
          </div>

          <style jsx>{`
            .animate-float { animation: float 6s ease-in-out infinite; }
            @keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-6px); } 100% { transform: translateY(0); } }
          `}</style>
        </section>

        {/* Expertise Section - modern card grid */}
  <section className="bg-gray-50 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-1">
                <h2 className="text-2xl md:text-3xl text-gray-900" style={{ fontFamily: 'Lora, serif' }}>
                  Expertise in Web & Information Systems
                </h2>
                <p className="text-base text-gray-600 mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Combining technical foundations with a passion for clean design to make complex information accessible.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="/about" className="inline-flex items-center px-5 py-2.5 bg-black text-white rounded-md text-sm font-medium no-underline">About Me</a>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative">
                  <article className="relative bg-white rounded-xl border border-gray-100 p-6 shadow-md hover:shadow-lg transform hover:-translate-y-2 hover:scale-[1.02] transition-all z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow mb-2">
                        <FaCode className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl text-gray-900 font-semibold mb-1" style={{ fontFamily: 'Lora, serif' }}>Problem Solver</h3>
                        <p className="text-gray-600 text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>Breaking down hard problems into clear, testable components and pragmatic solutions.</p>
                        <div className="mt-3"><span className="inline-block text-xs px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">Systems</span></div>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="relative">
                  <article className="relative bg-white rounded-xl border border-gray-100 p-6 shadow-md hover:shadow-lg transform hover:-translate-y-2 hover:scale-[1.02] transition-all z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-sky-600 text-white flex items-center justify-center shadow mb-2">
                        <FaChartBar className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl text-gray-900 font-semibold mb-1" style={{ fontFamily: 'Lora, serif' }}>Information Visualization</h3>
                        <p className="text-gray-600 text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>Designing visual systems that reveal insight in complex datasets.</p>
                        <div className="mt-3"><span className="inline-block text-xs px-3 py-1 bg-sky-50 text-sky-700 rounded-full">Visuals</span></div>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="relative">
                  <article className="relative bg-white rounded-xl border border-gray-100 p-6 shadow-md hover:shadow-lg transform hover:-translate-y-2 hover:scale-[1.02] transition-all z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow mb-2">
                        <FaPaintBrush className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl text-gray-900 font-semibold mb-1" style={{ fontFamily: 'Lora, serif' }}>UI/UX Enthusiast</h3>
                        <p className="text-gray-600 text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>Crafting clear, usable interfaces with attention to accessibility and micro-interaction details.</p>
                        <div className="mt-3"><span className="inline-block text-xs px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full">Design</span></div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values / Mission Section - centered intro with bottom cards */}
  <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4 flex flex-col items-center relative overflow-hidden">
            {/* decorative soft blob */}
            <div className="absolute -top-16 right-6 w-72 h-72 bg-gradient-to-tr from-indigo-50 via-transparent to-transparent rounded-full opacity-60 blur-3xl pointer-events-none" aria-hidden></div>
            {/* Centered title & subtitle */}
            <div className="max-w-2xl text-center">
              <h2 className="text-2xl md:text-3xl text-gray-900 mb-3" style={{ fontFamily: 'Lora, serif' }}>My Creative Philosophy</h2>
              <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>I build clean, useful interfaces that focus on clarity, performance, and the thoughtful presentation of information.</p>
            </div>

            {/* Bottom cards - spaced and centered */}
              <div className="mt-12 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transform hover:-translate-y-2 hover:scale-[1.02] transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-600 text-white flex items-center justify-center shadow">
                    <FaLightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Lora, serif' }}>Innovation</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Exploring new approaches and tooling to solve information problems.</p>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-block text-xs px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">Curiosity</span>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transform hover:-translate-y-2 hover:scale-[1.02] transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow">
                    <FaHammer className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Lora, serif' }}>Craftsmanship</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Clean code patterns, small abstractions, and maintainable UI components.</p>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-block text-xs px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full">Quality</span>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transform hover:-translate-y-2 hover:scale-[1.02] transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-amber-500 text-white flex items-center justify-center shadow">
                    <FaBullseye className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Lora, serif' }}>Impact</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>Design that improves understanding and drives outcomes for users.</p>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="inline-block text-xs px-3 py-1 bg-amber-50 text-amber-700 rounded-full">Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section - techy grid */}
  <section className="bg-gray-50 py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-xl md:text-3xl text-gray-900" style={{ fontFamily: 'Lora, serif' }}>From the Creative Lab</h2>
              <p className="text-sm text-gray-600 mt-3" style={{ fontFamily: 'Inter, sans-serif' }}>These are some of the projects I have worked on. All have been developed during my studies at NJIT.</p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Data Visualization",
                    description: "Interactive mapping, timeline analysis, and ranking visualizations.",
                    link: "/projects/ufo-data-visualization",
                    imgSrc: "/images/ufocover2.png",
                    tags: ["React", "D3.js"],
                    github: "https://github.com/vvh24/UFO.git"
                  },
                  {
                    title: "AI-Powered Assistant",
                    description: "Real-time WebSocket chat demonstrating bidirectional streaming.",
                    link: "/projects/ai-rag-implementation",
                    imgSrc: "/images/airagcover.png",
                    tags: ["Node.js", "Socket.IO"],
                    github: "https://github.com/vvh24/websocket-chat.git"
                  },
                  {
                    title: "Shoprite UX/UI Design",
                    description: "Designing an intelligent note-taking app that automates summarization.",
                    link: "/projects/shoprite-ux-ui-design",
                    imgSrc: "/images/shopritecover.png",
                    tags: ["Figma", "UX"]
                  },
                  {
                    title: "VVH Books Gallery - MERN",
                    description: "Full-stack MERN app for browsing books, adding comments, and demonstrating CRUD workflows.",
                    link: "/projects/mern-project",
                    imgSrc: "/images/merncover2.png",
                    tags: ["MERN", "Axios", "CRUD"],
                    github: "#"
                  },
                ].map((project, i) => (
                  <article key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex flex-col h-full">
                    <div className="h-44 bg-gray-100 overflow-hidden">
                      <Link href={project.link} className="block w-full h-full">
                        <img src={project.imgSrc} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                      </Link>
                    </div>
                    <div className="p-4 flex flex-col flex-grow justify-between">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'Lora, serif' }}>{project.title}</h3>
                        <span className="text-xs font-mono text-gray-400">#{i + 1}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-2">
                          {project.tags.map((tag: string) => (
                            <span key={tag} className="text-[11px] px-2 py-0.5 bg-gray-50 border border-gray-100 text-gray-700 rounded-full font-mono">{tag}</span>
                          ))}
                        </div>
                        <div className="flex items-center gap-3">
                          <Link href={project.link} className="inline-flex items-center px-3 py-1.5 bg-gray-900 text-white rounded-md text-sm no-underline">Explore</Link>
                          {project.github ? (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 no-underline">GitHub</a>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

  {/* Expertise Section */}
      </main>
    </div>
  );
}
