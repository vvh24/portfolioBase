"use client";

import Image from "next/image";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import RoundedButton from "@/components/ui/rounded-button"; // Corrected path to match the module
import { useState } from "react";

// Importing Google Fonts
import "@fontsource/lora"; // Lora for headings
import "@fontsource/poppins/500.css"; // Poppins medium for subheadings
import "@fontsource/inter"; // Inter for body

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: 'Inter, sans-serif' }}>
      <header className="bg-white shadow-md w-full fixed top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-800" style={{ fontFamily: 'Lora, serif' }}>
            Valeria Heredia Crespo
          </h1>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-purple-600 focus:outline-none ml-auto"
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
            <Link href="/projects" className="text-gray-700 hover:bg-image no-underline">Projects</Link>
            <RoundedButton href="/contact" className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-800 transition-all no-underline">
              Let's Connect
            </RoundedButton>
          </nav>
        </div>
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white md:hidden">
            <Link href="/" className="block px-4 py-2 text-gray-700 hover:text-purple-600">Home</Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:text-purple-600">About</Link>
            <Link href="/projects" className="block px-4 py-2 text-gray-700 hover:text-purple-600">Projects</Link>
            <RoundedButton href="/contact" className="block px-4 py-2 bg-purple-600 text-white hover:bg-purple-700">
              Let's Connect
            </RoundedButton>
          </div>
        )}
      </header>

      <main className="flex-grow w-full pt-1">
        <div className="bg-purple-800 flex items-center justify-center min-h-[90vh] py-20 relative overflow-hidden">
          <section className="text-center space-y-5 px-10 relative z-10">
            {/* Headline */}
            <div className="flex justify-center">
              <h1
                className="text-6xl md:text-7xl font-heading text-white tracking-wide font-semibold relative text-center"
                style={{ fontFamily: 'Lora, serif', textShadow: '0 0 10px rgba(255, 255, 255, 0.8)' }}
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

          
          {/* Scroll Arrow */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
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

            .hover\:animate-pulse-border:hover {
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

            .hover\:bg-image:hover {
              background-image: url('/images/hover_pic.png');
              background-size: cover;
              background-position: center;
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
