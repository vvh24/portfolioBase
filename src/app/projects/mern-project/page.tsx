"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import RoundedButton from "@/components/ui/rounded-button";
import "@fontsource/lora";
import "@fontsource/poppins/500.css";
import "@fontsource/inter";

export default function MERNProjectPage() {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <main className="container mx-auto px-4 py-20 space-y-12">
        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <figure className="rounded-xl overflow-hidden bg-gray-100 border border-gray-200 aspect-video">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <img src="/images/mern_cover.png" alt="Project banner" className="w-full h-auto object-cover" />
            </div>
          </figure>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-heading text-gray-900 font-semibold" style={{ fontFamily: 'Lora, serif' }}>
              VVH Books Gallery - MERN
            </h1>
            <p className="text-lg text-gray-700 max-w-xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              This project demonstrates a complete MERN workflow, allowing users to browse books, view detailed information, and create, edit, and delete comments through a structured REST API and React frontend.
            </p>

            <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
              <li>View detailed book information including author and publication year.</li>
              <li>Create, edit, and delete your own comments.</li>
              <li>View detailed book information including author and publication year.</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-white border border-gray-100 text-gray-800 rounded-full text-sm font-medium">MERN</span>
              <span className="px-3 py-1 bg-white border border-gray-100 text-gray-800 rounded-full text-sm font-medium">React Router</span>
              <span className="px-3 py-1 bg-white border border-gray-100 text-gray-800 rounded-full text-sm font-medium">Axios</span>
              <span className="px-3 py-1 bg-white border border-gray-100 text-gray-800 rounded-full text-sm font-medium">CRUD</span>
              <span className="px-3 py-1 bg-white border border-gray-100 text-gray-800 rounded-full text-sm font-medium">REST API</span>
            </div>

            <div className="flex items-center gap-3">
              <a href="https://vvh24.github.io/IT302-vvh-Project/" className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium no-underline">View Demo</a>
              <a href="https://github.com/vvh24/IT302-vvh-Project" className="inline-flex items-center px-4 py-2 border border-gray-200 text-gray-800 rounded-lg text-sm no-underline">View Code</a>
            </div>
          </div>
        </section>

        {/* Problem, Process, Results — modern technical layout */}
        <section className="space-y-10">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2" style={{ fontFamily: 'Lora, serif' }}>Problem & Goals</h2>
            <p className="text-gray-700 max-w-3xl">Build a responsive MERN frontend that connects with a Node/Express backend to present book records, support user comments (CRUD), and handle simple login state for comment ownership and editing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-l-4 border-indigo-600 shadow-sm">
              <h4 className="font-semibold text-gray-900">Assignment</h4>
              <p className="text-gray-700 mt-2">Create a React UI that consumes an existing API and supports comment CRUD tied to records.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-indigo-600 shadow-sm">
              <h4 className="font-semibold text-gray-900">Goals</h4>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Browse & search books</li>
                <li>View book details and comments</li>
                <li>Authenticated comment CRUD & timestamps</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-indigo-600 shadow-sm">
              <h4 className="font-semibold text-gray-900">Constraints</h4>
              <p className="text-gray-700 mt-2">Work within provided backend endpoints and focus on client-side usability and performance.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold">Process</h3>
              <p className="text-gray-700 mt-2">Modular development: set up backend, design schema, implement frontend routes, then add comments and auth flow.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold">Key Features</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Search & filter</li>
                <li>Book details with comment thread</li>
                <li>Optimistic UI updates for comments</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold">Timeline</h3>
              <p className="text-gray-700 mt-2">Incremental milestones: data model → list/detail → comments → polish.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold">Results</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Working CRUD pipeline for comments</li>
                <li>User ownership and edit permissions implemented</li>
                <li>Stable routing and responsive UI</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold">Learnings & Next Steps</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Enhance auth with JWT</li>
                <li>Improve form validation and UX</li>
                <li>Implement pagination and skeleton loaders</li>
              </ul>
            </div>
          </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <figure className="bg-gray-100 rounded-xl aspect-video overflow-hidden relative">
        <Image src="/images/booklist4.png" alt="Books list" fill className="object-contain" />
      </figure>
      <figure className="bg-gray-100 rounded-xl aspect-video overflow-hidden relative">
        <Image src="/images/bookdetails4.png" alt="Book details" fill className="object-contain" />
      </figure>
      <figure className="bg-gray-100 rounded-xl aspect-video overflow-hidden relative">
        <Image src="/images/bookslogin4.png" alt="Login" fill className="object-contain" />
      </figure>
          </div>

          <div className="flex justify-between items-center">
            <Link href="/projects" className="px-5 py-3 border border-gray-200 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors no-underline">Back to Projects</Link>
            <div className="flex items-center gap-3">
              <a href="https://vvh24.github.io/IT302-vvh-Project/" className="px-5 py-3 bg-black text-white rounded-lg hover:opacity-95 no-underline">Open Demo</a>
              <a href="https://github.com/vvh24/IT302-vvh-Project" className="px-5 py-3 border border-gray-200 rounded-lg text-gray-900 hover:text-[#0b3d91] transition-colors no-underline">View Code</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
