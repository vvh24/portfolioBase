"use client";

import Image from "next/image";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import RoundedButton from "@/components/ui/rounded-button"; // Corrected path to match the module
import { useState } from "react";
import { Analytics } from "@vercel/analytics/next";

// Importing Google Fonts
import "@fontsource/lora"; // Lora for headings
import "@fontsource/poppins/500.css"; // Poppins medium for subheadings
import "@fontsource/inter"; // Inter for body

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md shadow-md" : ""
        } bg-white/80 border-b border-purple-200`}
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
            className="md:hidden inline-flex items-center justify-center font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed text-gray-800 hover:bg-gray-100 focus:ring-gray-500 border border-transparent px-2 w-10 h-10"
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
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow w-full pt-1 overflow-x-hidden mt-[35px] relative">
        <div className="bg-purple-800 flex items-center justify-center min-h-[88vh] py-20 relative overflow-hidden w-full max-w-full">
          {/* Floating Bubbles - moved inside the hero section for proper positioning */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            {/* Large bubbles */}
            <div className="bubble bubble-lg bg-gradient-to-br from-white/30 to-pink-300/50 left-[10%] top-[20%]"></div>
            <div className="bubble bubble-lg bg-gradient-to-br from-white/30 to-blue-300/50 right-[15%] top-[15%]"></div>
            <div className="bubble bubble-lg bg-gradient-to-br from-white/30 to-blue-300/50 right-[15%] top-[46%]"></div>
            <div className="bubble bubble-lg bg-gradient-to-br from-white/30 to-purple-300/50 left-[15%] top-[60%]"></div>

            {/* Medium bubbles */}
            <div className="bubble bubble-md bg-gradient-to-tr from-white/30 to-green-300/50 left-[25%] top-[60%]"></div>
            <div className="bubble bubble-md bg-gradient-to-tr from-white/30 to-orange-300/50 right-[20%] top-[70%]"></div>
            <div className="bubble bubble-md bg-gradient-to-bl from-white/30 to-cyan-300/50 left-[60%] top-[35%]"></div>
            
            {/* Small bubbles */}
            <div className="bubble bubble-sm bg-gradient-to-tl from-white/30 to-purple-300/50 left-[80%] top-[30%]"></div>
            <div className="bubble bubble-sm bg-gradient-to-tl from-white/30 to-blue-300/50 left-[40%] top-[80%]"></div>
            <div className="bubble bubble-sm bg-gradient-to-tl from-white/30 to-yellow-300/50 left-[75%] top-[60%]"></div>
            <div className="bubble bubble-sm bg-gradient-to-tl from-white/30 to-emerald-300/50 left-[20%] top-[40%]"></div>
          </div>

          <section className="text-center space-y-5 px-4 sm:px-10 relative z-10 w-full max-w-2xl mx-auto">
            {/* Headline */}
            <div className="flex justify-center">
              <h1
                className="font-heading text-white tracking-wide font-semibold relative text-center"
                style={{
                  fontFamily: 'Lora, serif',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                  fontSize: 'clamp(2.2rem, 7vw, 4.5rem)',
                  lineHeight: 1.1
                }}
              >
                <span>Creating</span>
                <br />
                <span>Innovative Digital</span>
                <br />
                <span>Experiences</span>
                <span className="block w-0 h-1 bg-white mt-2 mx-auto animate-draw-line"></span>
              </h1>
            </div>

            {/* Subheading */}
            <h2 className="text-2xl text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Transforming ideas into elegant digital solutions.
            </h2>

            {/* Button */}
            <div>
              <RoundedButton
                href="/projects"
                className="bg-white text-[purple-800] font-bold text-lg px-6 py-3 rounded-lg border border-white hover:animate-pulse-border no-underline"
              >
                View My Work
              </RoundedButton>
            </div>
          </section>

          {/* Social Media Icons - Bottom Right */}
          <div className="absolute bottom-8 right-8 z-20 flex space-x-4 social-icons">
            <a href="https://www.linkedin.com/in/valeria-heredia-101452326/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 border border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
            </a>
            <a href="https://github.com/vvh24" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 border border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
            </a>            <a href="https://www.instagram.com/val_hcrespo/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 border border-white/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
          </div>
          
          {/* Scroll Arrow */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-6 h-6 border-b-2 border-r-2 border-white transform rotate-45 animate-bounce"></div>
          </div>

          <style jsx>{`
            @keyframes draw-line {
              from {
                width: 0;
              }
              to {
                width: 100%;
              }
            }

            @keyframes fade-in {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            @keyframes pulse-border {
              0%, 100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.05);
              }
            }

            .animate-draw-line {
              animation: draw-line 1s ease-out forwards;
            }

            .animate-fade-in {
              animation: fade-in 1.5s ease-out forwards;
              animation-delay: 1s;
            }

            .hover\\:animate-pulse-border:hover {
              animation: pulse-border 0.6s infinite;
            }

            .animate-bounce {
              animation: bounce 1.5s infinite;
            }

            @keyframes bounce {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-10px);
              }
            }

            .hover\\:bg-image:hover {
              background-image: url('/images/hover_pic.png');
              background-size: cover;
              background-position: center;
            }
            
            /* Bubble Styles - Improved visibility */
            .bubble {
              position: absolute;
              border-radius: 50%;
              opacity: 0.9;
              backdrop-filter: blur(8px);
              box-shadow: 
                0 8px 32px 0 rgba(255, 255, 255, 0.4),
                inset 0 0 32px 8px rgba(255, 255, 255, 0.3);
              border: 2px solid rgba(255, 255, 255, 0.5);
              z-index: 1;
              transform: translateZ(0);
              will-change: transform, opacity;
            }
            
            .bubble-lg {
              width: 180px;
              height: 180px;
              animation: float-slow 18s infinite ease-in-out alternate;
              animation-fill-mode: both;
            }
            
            .bubble-md {
              width: 120px;
              height: 120px;
              animation: float-medium 14s infinite ease-in-out alternate;
              animation-fill-mode: both;
            }
            
            .bubble-sm {
              width: 70px;
              height: 70px;
              animation: float-fast 10s infinite ease-in-out alternate;
              animation-fill-mode: both;
            }
            
            @keyframes float-slow {
              0% {
                transform: translateY(0) rotate(0deg) scale(1);
                opacity: 0.85;
              }
              50% {
                transform: translateY(-30px) rotate(5deg) scale(1.05);
                opacity: 0.95;
              }
              100% {
                transform: translateY(-60px) rotate(10deg) scale(1);
                opacity: 0.85;
              }
            }
            
            @keyframes float-medium {
              0% {
                transform: translateY(0) rotate(0deg) scale(1);
                opacity: 0.85;
              }
              50% {
                transform: translateY(-50px) rotate(-5deg) scale(1.05);
                opacity: 0.95;
              }
              100% {
                transform: translateY(-100px) rotate(-10deg) scale(1);
                opacity: 0.85;
              }
            }
            
            @keyframes float-fast {
              0% {
                transform: translateY(0) rotate(0deg) scale(1);
                opacity: 0.85;
              }
              50% {
                transform: translateY(-70px) rotate(10deg) scale(1.1);
                opacity: 0.95;
              }
              100% {
                transform: translateY(-140px) rotate(20deg) scale(1);
                opacity: 0.85;
              }
            }
            
            @media (max-width: 768px) {
              .bubble-lg {
                width: 120px;
                height: 120px;
              }
              
              .bubble-md {
                width: 80px;
                height: 80px;
              }
              
              .bubble-sm {
                width: 40px;
                height: 40px;
              }
              
              /* Social icons responsive styles for mobile */
              .social-icons {
                bottom: 16px;
                right: 16px;
              }
            }
            
            /* Social icon animations */
            .social-icon-link:hover svg {
              transform: scale(1.2);
              transition: transform 0.3s ease;
            }
            
            .social-icon-link svg {
              transition: transform 0.3s ease;
            }
            
            /* Adjusting social icons visibility on scroll for mobile */
            @media (max-width: 480px) {
              .social-icons {
                bottom: 12px;
                right: 12px;
              }
              
              .social-icons .w-10 {
                width: 36px;
              }
              
              .social-icons .h-10 {
                height: 36px;
              }
            }
          `}</style>
        </div>

        {/* Expertise Section */}
        <section className="bg-white py-12 md:py-24">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 text-left" style={{ fontFamily: 'Lora, serif' }}>
                Expertise in Web & Information Systems
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-left lg:text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
                Combining my technical foundation with a passion for visual design, I create digital experiences that make complex information accessible and engaging.
              </p>
              <div className="flex flex-wrap gap-4">
                <RoundedButton className="bg-purple-800 text-white hover:bg-purple-600">
                  Problem Solver
                </RoundedButton>
                <RoundedButton className="bg-purple-800 text-white hover:bg-purple-600">
                  Information Visualization
                </RoundedButton>
                <RoundedButton className="bg-purple-800 text-white hover:bg-purple-600">
                  UI/UX Enthusiast
                </RoundedButton>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full h-full bg-gray-200 rounded-xl shadow-md relative">
              <img src="/images/creative_process3.0.png" alt="Creative Process" className="absolute inset-0 w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </section>

        {/* Values/Mission Section */}
        <section className="bg-purple-100 py-12 md:py-24">
          <div className="container mx-auto px-4 space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading text-center text-gray-900 relative">
              My Creative Philosophy
              <span className="block w-24 h-1 bg-purple-600 mx-auto mt-2 rounded"></span>
            </h2>
            <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto">
              I believe in creating technology that is both beautiful and functional, empowering users to achieve their goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Innovation",
                  description: "I approach each project with fresh perspective, exploring creative solutions to information challenges. By experimenting with emerging technologies and design patterns, I transform complex data into intuitive interfaces that feel both novel and familiar to users.",
                  imgSrc: "/images/innovative2.0_philosophy.png"
                },
                {
                  title: "Craftsmanship",
                  description: "I believe in meticulous attention to detail, from clean code structure to pixel-perfect designs. My dedication to quality means carefully refining each element until the technical and visual presentation work seamlessly together to create polished, professional experiences.",
                  imgSrc: "/images/craftsmanship2.0_philosophy.png"
                },
                {
                  title: "Impact",
                  description: "My ultimate goal is creating digital solutions that improve how people interact with information. I measure success by how effectively my work simplifies complexity, enhances understanding, and makes technology more accessible to the people who use it.",
                  imgSrc: "/images/impact3.0_philosophy.png"
                }
              ].map((philosophy, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto">
                    <img src={philosophy.imgSrc} alt={philosophy.title} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="text-xl font-heading text-gray-900 font-bold">{philosophy.title}</h3>
                  <p className="text-gray-700">{philosophy.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-heading text-gray-900 text-center mb-8 relative">
              From the Creative Lab
              <span className="block w-24 h-1 bg-purple-600 mx-auto mt-2 rounded"></span>
            </h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
              Welcome to my Creative Lab, where I experiment with emerging technologies and design concepts. These projects represent my curiosity and continuous learning journey as I explore new tools and approaches in web development and information visualization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Data Visualization",
                  description: "UFO Sightings & Military Bases Visualization is an interactive web application that examines potential correlations between reported UFO sightings and US military installations. Using React and D3.js, it features dynamic mapping, timeline analysis, and ranking visualizations that reveal fascinating patterns in sighting frequencies across different states and time periods.",
                  link: "/projects/ufo-data-visualization",
                  imgSrc: "/images/ufo_poster6.png",
                  tags: ["React", "D3.js", "Data Visualization"],
                  githubLink: "https://github.com/vvh24/UFO.git"
                },
                {
                  title: "AI-Powered Assistant",
                  description: "Building a Real-Time WebSocket Chat is a web development project that demonstrates creating a persistent, bidirectional communication system using Node.js, Express, and Socket.IO. The application enables instant message exchange between multiple users without page refreshes, while teaching core concepts of anonymous functions, callbacks, and real-time data streaming.",
                  link: "/projects/ai-rag-implementation",
                  imgSrc: "/images/ai_chat_poster2.png", // Placeholder for future image
                  tags: ["Node.js", "Express", "Socket.IO"],
                  githubLink: "https://github.com/vvh24/websocket-chat.git"
                },
                {
                  title: "Recallify UX/UI Design",
                  description: "Recallify is the planning of an intelligent note-taking app designed for life science students struggling with information retention. It automates lecture summarization, provides timestamped highlights, and features 'Rico', an AI study buddy that helps students quiz themselves on complex concepts, ultimately streamlining the study process and improving academic performance.",
                  link: "/projects/recallify-ux-ui-design",
                  imgSrc: "/images/recallify_poster2.2.png",
                  tags: ["Figma", "Miro", "Data Analysis"],
                  figmaLink: "https://www.figma.com/proto/YYpXyKDCzmkR922cxfYnMR/Recallify?node-id=3337-803&t=XDnW4Njn0cz7UAdz-1&scaling=scale-down&content-scaling=fixed&page-id=3314%3A2&starting-point-node-id=3337%3A803"
                },
              ].map((project, index) => (
                <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg hover:scale-105 transition-transform">
                  <div className="w-full aspect-w-5 aspect-h-3 bg-gray-100 rounded-lg overflow-hidden">
                    <img src={project.imgSrc} alt={project.title} className="w-full h-full object-cover rounded-lg scale-90" />
                  </div>
                  <h3 className="text-2xl font-heading text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-700">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-purple-100 text-purple-700 text-sm px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-start gap-4 mt-4">
                    {project.title !== "Recallify UX/UI Design" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-700 no-underline"
                      >
                        GitHub
                      </a>
                    )}
                    <Link
                      href={project.link}
                      className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-700 no-underline"
                    >
                      Explore Project
                    </Link>
                    {project.title === "Recallify UX/UI Design" && (
                      <a
                        href={project.figmaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-700 no-underline"
                      >
                        Figma Prototype
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative bg-gradient-to-b from-[#8A2BE2] to-[#5727A3] py-24">
          {/* Decorative Circles */}
          <div
            className="absolute top-[-30px] left-[-30px] w-[160px] h-[160px] bg-gradient-radial from-white/15 to-transparent rounded-full"
            style={{ top: "50px", left: "150px" }}
          ></div>
          <div
            className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] bg-gradient-radial from-white/15 to-transparent rounded-full"
            style={{ bottom: "250px", right: "650px" }}
          ></div>
          <div
            className="absolute top-[-20px] left-[50%] transform -translate-x-1/2 w-[80px] h-[80px] bg-gradient-radial from-white/15 to-transparent rounded-full"
            style={{ top: "50px", left: "400px" }}
          ></div>

          {/* Main Text */}
          <div className="container mx-auto text-center text-white px-4">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Ready to Collaborate on Your Next <br />
              <span className="text-[#E6C4FF]">Digital Project?</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
              As a Web & Information Systems student passionate about creating intuitive
              digital experiences, I'm looking for opportunities to apply my design and
              development skills to real-world challenges.
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-block bg-white text-[#8A2BE2] font-bold text-lg px-6 py-3 rounded-lg hover:bg-gray-100 no-underline"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
