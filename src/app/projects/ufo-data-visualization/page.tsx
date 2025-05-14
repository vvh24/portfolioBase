"use client";
import React, { useState } from "react";
import Link from "next/link";
import RoundedButton from "@/components/ui/rounded-button";
import { Analytics } from "@vercel/analytics/next";

// Importing Google Fonts
import "@fontsource/lora"; // Lora for headings
import "@fontsource/poppins/500.css"; // Poppins medium for subheadings
import "@fontsource/inter"; // Inter for body

export default function UFODataVisualizationPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation Bar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md shadow-md" : ""
        } bg-white/80`}
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-24 space-y-1 mt-[35px]">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Hero Image */}
          <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
            <img
              src="/images/map_ufo_visualization.png"
              alt="UFO Sightings Map Visualization"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Right Column: Project Details */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-heading text-gray-900 font-semibold" style={{ fontFamily: 'Lora, serif' }}>
              UFO Sightings Interactive Data Visualization
            </h1>
            <p className="text-lg text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
              Explore UFO sightings data through an interactive and visually engaging map.
            </p>
            <div className="flex gap-4">
              <a
                href="https://vvh24.github.io/UFO/"
                className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all font-semibold no-underline"
              >
                View Demo
              </a>
              <a
                href="https://github.com/vvh24/UFO.git"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all font-semibold no-underline"
              >
                GitHub Repo
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">React</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">D3.js</span>
              <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">Docker</span>
              <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium">GitHub Pages</span>
            </div>
          </div>
        </section>

        {/* Project Overview Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8" style={{ fontFamily: 'Lora, serif' }}>
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
           Create interactive data visualizations using React to explore real-world datasets of personal interest, implement front-end best practices, and tell a compelling story through visualization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>NJIT IS219 Academic Project</h3>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Mar-May 2025 Timeline</h3>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Data Visualization Category</h3>
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8" style={{ fontFamily: 'Lora, serif' }}>
            Problem Statement
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Assignment Requirements</h3>
              <ul className="list-disc list-inside text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li>Create interactive visulizations with React </li>
                <li>Use real-world datasets</li>
                <li>Implement front-end best practices</li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Challenges</h3>
              <ul className="list-disc list-inside text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li>Working with messy geospatial data</li>
                <li>Visualizing thousand of data points efficiently</li>
                <li>Creating intuative UI that allows non-technical users to explore the data</li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Objectives</h3>
              <ul className="list-disc list-inside text-gray-700" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li>Demonstrate proficiency in React and D3.js integration</li>
                <li>Develop containerization skills using Docker for consistent development environments</li>
                <li>Create a publicly accessible web application using GitHub Pages deployment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Planning & Research Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8" style={{ fontFamily: 'Lora, serif' }}>
            Planning & Research
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>User Analysis</h3>
              <p className="text-gray-700 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>The project aimed to address three key questions: <br />1. Are there geographical patterns in UFO sighting reports across the United States?<br />2. Do UFO sightings correlate with the locations of military installations?<br />3. Is there any relationship between UFO sightings and nuclear facilities?</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Market Research</h3>
              <p className="text-gray-700 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>I examined several existing visualizations, including:<br /><li>NUFORC's basic statistical reports and maps</li><li>Dataset of military bases across the country, including Army, Navy, Air Force, and Marine Corps facilities</li><li>Nuclear Reactor dataset bases across the state</li></p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Technical Approach</h3>
              <p className="text-gray-700 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>I selected React for component management and state handling, paired with D3.js for visualization capabilities. This combination offered:<br /><li>Modular, reusable visualization components</li><li>Efficient rendering through React's virtual DOM</li><li>Powerful data-binding and DOM manipulation</li></p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md flex items-center justify-center">
              <img src="/images/ufo_data1.png" alt="Data Graph 1" className="rounded-lg object-cover w-full h-auto" />
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md flex items-center justify-center">
              <img src="/images/ufo_data2.png" alt="Data Graph 2" className="rounded-lg object-cover w-full h-auto" />
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md flex items-center justify-center">
              <img src="/images/ufo_data3.png" alt="Data Graph 3" className="rounded-lg object-cover w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8" style={{ fontFamily: 'Lora, serif' }}>
            Development Process
          </h2>
          <div className="space-y-8">
            {/* Architecture/Structure Card */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Architecture/Structure</h3>
              <p className="text-gray-700 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>This project follows a modular architecture:<br /><li>Core visualization components: Map, Timeline, Rankings.</li><li>Data processing utilities for CSV parsing and normalizations</li><li>Shared state management for filtering and interaction</li></p>
            </div>

            {/* Key Technical Decisions Card */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Key Technical Decisions</h3>
              <p className="text-gray-700 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>The MapVisualization component integrates:<br /><li>D3's geographical projection for mapping coordinates </li><li>Color scales for representing sighting density by state</li><li>Dynamic rendering of military based and nuclear facilities</li></p>
            </div>
          </div>
        </section>

        {/* Testing & Iteration Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8" style={{ fontFamily: 'Lora, serif' }}>
            Testing & Iteration
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Project Evolution Timeline</h3>
              <p className="text-gray-700 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>{/* Timeline placeholder */}</p>
              <div className="mt-4 flex justify-center">
                <img
                  src="/images/project_timeline_ufo.png"
                  alt="Project Evolution Timeline"
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion & Future Work Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8" style={{ fontFamily: 'Lora, serif' }}>
            Conclusion & Future Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Conclusion</h3>
              <p className="text-gray-700 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>This project successfully transformed raw UFO sighting data into an interactive, exploratory visualization that reveals geographical and temporal patterns across the United States. By integrating military base and nuclear facility information, the visualization enables users to explore potential correlations between reported sightings and critical infrastructure. While not proving any definitive relationships, the project demonstrates the power of React and D3.js for handling complex datasets and creating accessible data visualizations.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Future Enhancements</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li>Improved data filtering options</li>
                <li>Enhanced visualization interactivity</li>
                <li>Integration with real-time data sources</li>
                <li>Mobile-friendly design improvements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Link href="/projects" className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all no-underline">Back to Projects</Link>
          <Link href="https://github.com/vvh24/UFO.git" className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all no-underline">
            View Project
          </Link>
        </div>
      </main>
    </div>
  );
}