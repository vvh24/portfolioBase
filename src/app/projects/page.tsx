"use client";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import { useState } from "react";
import RoundedButton from "@/components/ui/rounded-button";

export default function ProjectsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
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
            <RoundedButton href="/contact" className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all no-underline">
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
        {/* Page Title Section */}
        <h1 className="text-4xl font-serif text-center text-purple-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Playground
        </h1>
        <p className="text-lg leading-8 text-gray-700 text-center max-w-3xl mx-auto" style={{ fontFamily: 'Lato, sans-serif' }}>
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
                  <h2 className={`text-2xl font-heading ${project.color}`} style={{ fontFamily: 'Poppins, sans-serif' }}>{project.title}</h2>
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>{project.description}</p>
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
