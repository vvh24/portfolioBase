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
      {/* rely on global header in layout.tsx */}

      <main className="container mx-auto px-4 py-20 space-y-12">
        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <figure className="rounded-xl overflow-hidden bg-gray-100 border border-gray-200 aspect-video">
            <img
              src="/images/map_ufo_visualization.png"
              alt="UFO Sightings Map Visualization"
              className="w-full h-full object-cover"
            />
          </figure>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-heading text-gray-900 font-semibold" style={{ fontFamily: 'Lora, serif' }}>
              UFO Sightings Interactive Data Visualization
            </h1>
            <p className="text-lg text-gray-700 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              An interactive map and dashboard built with React and D3.js to explore UFO sighting patterns across the United States.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://vvh24.github.io/UFO/"
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium no-underline"
              >
                View Demo
              </a>
              <a
                href="https://github.com/vvh24/UFO.git"
                className="inline-flex items-center px-4 py-2 border border-gray-200 text-gray-800 rounded-lg text-sm no-underline"
              >
                GitHub Repo
              </a>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-white border border-gray-100 text-gray-800 rounded-full text-sm font-medium">React</span>
              <span className="px-3 py-1 bg-white border border-gray-100 text-gray-800 rounded-full text-sm font-medium">D3.js</span>
              <span className="px-3 py-1 bg-white border border-gray-100 text-gray-800 rounded-full text-sm font-medium">Docker</span>
              <span className="px-3 py-1 bg-white border border-gray-100 text-gray-800 rounded-full text-sm font-medium">GitHub Pages</span>
            </div>
          </div>
        </section>

        {/* Summary / Snapshot */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all">
              <h3 className="text-sm text-gray-500">Scope</h3>
              <p className="mt-2 text-gray-900 font-semibold">NJIT IS219 Academic Project</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all">
              <h3 className="text-sm text-gray-500">Timeline</h3>
              <p className="mt-2 text-gray-900 font-semibold">Mar–May 2025</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all">
              <h3 className="text-sm text-gray-500">Category</h3>
              <p className="mt-2 text-gray-900 font-semibold">Data Visualization</p>
            </div>
          </div>
        </section>

        {/* Problem & Objectives */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Problem / Assignment</h3>
            <p className="text-gray-700 mt-3">Create interactive visualizations with React using real-world datasets while following front-end best practices.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Challenges</h3>
            <ul className="list-disc list-inside text-gray-700 mt-3">
              <li>Messy geospatial data</li>
              <li>Rendering thousands of points efficiently</li>
              <li>Designing intuitive controls for non-technical users</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Objectives</h3>
            <ul className="list-disc list-inside text-gray-700 mt-3">
              <li>Integrate React + D3.js</li>
              <li>Use Docker for reproducible dev</li>
              <li>Publish to GitHub Pages</li>
            </ul>
          </div>
        </section>

        {/* Research + Visual Samples */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Research & Visual Samples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-lg transition-all">
              <img src="/images/ufo_data1.png" alt="Data Graph 1" className="rounded-lg object-contain w-full h-48" />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-lg transition-all">
              <img src="/images/ufo_data2.png" alt="Data Graph 2" className="rounded-lg object-contain w-full h-48" />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-lg transition-all">
              <img src="/images/ufo_data3.png" alt="Data Graph 3" className="rounded-lg object-contain w-full h-48" />
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Development</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold">Architecture & Structure</h3>
              <p className="text-gray-700 mt-2">Modular visualization components (Map, Timeline, Rankings), data processing utilities for CSV parsing and normalization, and shared state for filters and interactions.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold">Key Technical Decisions</h3>
              <p className="text-gray-700 mt-2">Used D3 geographical projections, color scales for density, and dynamic overlays for military bases and nuclear facilities to provide analytical context.</p>
            </div>
          </div>
        </section>

        {/* Testing & Timeline */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold">Testing & Iteration</h3>
            <p className="text-gray-700 mt-2">Iterated on performance and UX: improved rendering performance, refined controls, and validated mapping accuracy against reference datasets.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold">Project Timeline</h3>
            <div className="mt-4">
              <img src="/images/project_timeline_ufo.png" alt="Project Evolution Timeline" className="rounded-lg object-contain w-full h-40" />
            </div>
          </div>
        </section>

        {/* Conclusion & Future */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold">Conclusion</h3>
            <p className="text-gray-700 mt-2">The project transforms raw sighting data into an interactive exploration tool, enabling discovery of temporal and geographic patterns while demonstrating React+D3 strengths.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold">Future Enhancements</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Advanced filtering options</li>
              <li>More interactive visual overlays</li>
              <li>Mobile optimization</li>
              <li>Real-time data integration</li>
            </ul>
          </div>
        </section>

        {/* Navigation Buttons */}
         <div className="flex justify-between items-center">
            <Link href="/projects" className="px-5 py-3 border border-gray-200 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors no-underline">Back to Projects</Link>
            <div className="flex items-center gap-3">
              <a href="https://vvh24.github.io/UFO/" className="px-5 py-3 bg-black text-white rounded-lg hover:opacity-95 no-underline">Open Demo</a>
              <a href="https://github.com/vvh24/UFO.git" className="px-5 py-3 border border-gray-200 rounded-lg text-gray-900 hover:text-[#0b3d91] transition-colors no-underline">View Code</a>
            </div>
          </div>
      </main>
    </div>
  );
}