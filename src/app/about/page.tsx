"use client";

import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="bg-white py-20 relative overflow-hidden">
        {/* Decorative Bubbles */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-40 h-40 bg-purple-300 rounded-full absolute top-10 left-10 animate-pulse"></div>
          <div className="w-32 h-32 bg-teal-300 rounded-full absolute bottom-20 right-20 animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 space-y-16">
          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center relative">
            <div className="w-32 h-32 rounded-full border-4 border-purple-400 mx-auto mb-4"></div>
            <h1 className="text-5xl font-playfair text-purple-600">About Me</h1>
            <p className="text-lg font-lato text-gray-700">Web and Information System Student</p>
            <div className="bg-purple-100 rounded-lg p-4 mt-4">
              <p className="text-sm font-lato text-gray-600">As a UI/UX designer and NJIT senior, I embody the Creator archetype. I believe in the power of self-expression and authenticity to create meaningful digital experiences.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 space-y-12">
        {/* Background */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-playfair text-center text-purple-600">Background</h2>
          <p className="text-sm font-lato text-gray-600 mt-4">Motivated Computing School undergraduate student with a strong desire to learn and improve my skills in pursuit of a career as a Web Developer, UX Researcher, or Information Systems Analyst. With a foundation in web formatting, programming languages, database management, communication and service delivery. Organized, hardworking, and creative, with a willingness to take on added responsibilities to achieve team goals.</p>
        </div>

        {/* Education Timeline */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-playfair text-center text-purple-600">Education</h2>
          <div className="relative mt-8">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-200 h-full"></div>
            <div className="space-y-16">
              {/* NJIT */}
              <div className="relative flex items-center">
                <div className="w-5 h-5 border-4 border-purple-400 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="bg-white rounded-lg shadow-lg p-6 w-[45%] mr-16 ml-4">
                  <h3 className="text-xl font-bold font-playfair text-purple-600">New Jersey Institute of Technology</h3>
                  <p className="text-sm font-lato text-gray-600">Newark, NJ</p>
                  <p className="text-sm font-lato text-gray-600">Bachelor of Science in Information Technology (2024-2026)</p>
                  <p className="text-sm font-lato text-gray-600">GPA: 3.5/4.0</p>
                </div>
              </div>
              {/* PCCC */}
              <div className="relative flex items-center">
                <div className="w-5 h-5 border-4 border-purple-400 bg-white rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                <div className="bg-white rounded-lg shadow-lg p-6 w-[45%] mr-16 ml-4">
                  <h3 className="text-xl font-bold font-playfair text-purple-600">Passaic County Community College</h3>
                  <p className="text-sm font-lato text-gray-600">Paterson, NJ</p>
                  <p className="text-sm font-lato text-gray-600">Completed 60 credit hours towards an AAS (2021-2023)</p>
                  <p className="text-sm font-lato text-gray-600">GPA: 3.5/4.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-playfair text-center text-purple-600">Certifications</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <div className="w-12 h-12 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto mb-2">RCR</div>
              <h3 className="text-lg font-playfair text-purple-600">CITI Program RCR Course Certification</h3>
              <p className="text-sm font-lato text-gray-600">Responsible Conduct of Research (RCR) - Basic Course Completion (2025)</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <div className="w-12 h-12 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto mb-2">MMT</div>
              <h3 className="text-lg font-playfair text-purple-600">Makerspace Mechatronics Training Program Certificate</h3>
              <p className="text-sm font-lato text-gray-600">2021-22</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-playfair text-center text-purple-600">Skills</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto"></div>
              <p className="text-sm font-lato text-gray-600 mt-2">HTML</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto"></div>
              <p className="text-sm font-lato text-gray-600 mt-2">CSS</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto"></div>
              <p className="text-sm font-lato text-gray-600 mt-2">Python/C++/Swift</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto"></div>
              <p className="text-sm font-lato text-gray-600 mt-2">Git/GitHub</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto"></div>
              <p className="text-sm font-lato text-gray-600 mt-2">Figma</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto"></div>
              <p className="text-sm font-lato text-gray-600 mt-2">MySQL</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto"></div>
              <p className="text-sm font-lato text-gray-600 mt-2">Adobe DreamWeaver</p>
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-playfair text-center text-purple-600">Languages</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="bg-white rounded-lg shadow-lg p-4 text-center">
              <div className="w-12 h-12 bg-purple-400 text-white rounded-full flex items-center justify-center mx-auto mb-2">ES</div>
              <p className="text-sm font-lato text-gray-600">Spanish - Native</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
