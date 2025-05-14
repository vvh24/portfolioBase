"use client";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import { useState } from "react";
import RoundedButton from "@/components/ui/rounded-button";
import { Analytics } from "@vercel/analytics/next";

// Importing Google Fonts
import "@fontsource/lora"; // Lora for headings
import "@fontsource/poppins/500.css"; // Poppins medium for subheadings
import "@fontsource/inter"; // Inter for body

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
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
      <main className="container mx-auto px-4 py-24 space-y-16 font-inter mt-[35px]">
        {/* Page Title Section */}
        <h1 className="text-5xl md:text-6xl font-heading text-gray-900 tracking-wide font-semibold text-center relative font-Lora">
          Playground
          <span className="block w-24 h-1 bg-purple-600 mx-auto mt-2 rounded"></span>
        </h1>
        <p className="text-lg leading-8 text-gray-700 text-center max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
          Each project I undertake is a testament to my dedication to innovation, craftsmanship, and self-expression. Explore my work and see how I bring ideas to life through thoughtful design and creative problem-solving.
        </p>

        {/* Project Items */}
        <div className="space-y-16">
          {[{
            title: "UFO Data Visualization Project",
            description: "An interactive visualization using React, D3.js, and TopoJSON that displays UFO sightings across the US, military base locations, and supporting visualizations like timeline charts.",
            technologies: ["React", "D3.js", "TopoJSON"],
            color: "text-purple-800",
            link: "/projects/ufo-data-visualization",
            imageSrc: "/images/ufo_poster3.png",
          }, {
            title: "AI Project with RAG Implementation",
            description: "A cutting-edge AI project implementing Retrieval-Augmented Generation (RAG) to enhance information retrieval and response generation.",
            technologies: ["Python", "LangChain", "OpenAI API"],
            color: "text-purple-800",
            link: "/projects/ai-rag-implementation",
            imageSrc: "/images/ai_chat_poster2.png",
          }, {
            title: "Recallify UX/UI Design",
            description: "A UX/UI design project focused on enhancing user experience and interface design for a web application, utilizing Figma and Adobe XD.",
            technologies: ["Figma", "Miro", "Adobe"],
            color: "text-purple-800",
            link: "/projects/recallify-ux-ui-design",
            imageSrc: "/images/recallify_poster2.2.png",
          }].map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-8 shadow-md space-y-4">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3 aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h2 className={`text-2xl font-heading ${project.color}`} style={{ fontFamily: 'Lora, serif' }}>{project.title}</h2>
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link href={project.link} className="inline-block px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all no-underline">
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home Link */}
        <div className="text-center">
          <Link href="/" className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all no-underline">
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
