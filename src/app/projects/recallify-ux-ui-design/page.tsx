"use client";
import Link from "next/link";
import RoundedButton from "@/components/ui/rounded-button";
import { useState, useRef, useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import "@fontsource/lora"; // Import Lora font for headings
import "@fontsource/poppins/500.css"; // Import Poppins Medium for subheadings
import "@fontsource/inter"; // Import Inter for body text

export default function RecallifyUXUIDesignPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.pageX - (carousel?.offsetLeft || 0);
      scrollLeft = carousel?.scrollLeft || 0;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - (carousel?.offsetLeft || 0);
      const walk = (x - startX) * 2; // Adjust scroll speed
      if (carousel) carousel.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
      isDragging = false;
    };

    if (carousel) {
      carousel.addEventListener("mousedown", handleMouseDown);
      carousel.addEventListener("mousemove", handleMouseMove);
      carousel.addEventListener("mouseup", handleMouseUpOrLeave);
      carousel.addEventListener("mouseleave", handleMouseUpOrLeave);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("mousedown", handleMouseDown);
        carousel.removeEventListener("mousemove", handleMouseMove);
        carousel.removeEventListener("mouseup", handleMouseUpOrLeave);
        carousel.removeEventListener("mouseleave", handleMouseUpOrLeave);
      }
    };
  }, []);

  const images = [
    "/images/wireframe_recallify1.png",
    "/images/wireframe_recallify2.0.png",
    "/images/wireframe_recallify3.png",
    "/images/wireframe_recallify4.png",
  ];

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
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
            <Link
              href="/projects"
              className="text-gray-700 hover:text-purple-600 no-underline"
            >
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
      <main className="container mx-auto px-4 py-24 space-y-16 font-inter mt-[35px]">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Hero Image */}
          <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
            <img
              src="/images/recallify_poster_page2.1.png"
              alt="Recallify UX/UI Design Preview"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Right Column: Project Details */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-heading text-gray-900 font-semibold font-lora">
              Recallify UX/UI Design
            </h1>
            <p className="text-lg text-gray-700 font-inter">
              A UX/UI design project focused on enhancing user experience and interface design for a web application, utilizing Figma and Adobe XD.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.figma.com/proto/YYpXyKDCzmkR922cxfYnMR/Recallify?node-id=3337-803&t=XDnW4Njn0cz7UAdz-1&scaling=scale-down&content-scaling=fixed&page-id=3314%3A2&starting-point-node-id=3337%3A803"
                className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all font-semibold no-underline"
              >
                View Demo
              </a>
              <a
                href="https://www.figma.com/design/YYpXyKDCzmkR922cxfYnMR/Recallify?node-id=3337-803&t=xjIKWxhbWG2kEQ4u-1"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all font-semibold no-underline"
              >
                Figma Prototype
              </a>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Figma</span>
              <span className="px-3 py-1 bg-green-100 text-purple-700 rounded-full text-sm font-medium">Adobe XD</span>
              <span className="px-3 py-1 bg-blue-100 text-purple-700 rounded-full text-sm font-medium">Miro</span>
            </div>
          </div>
        </section>

        {/* Project Overview Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8">
            Project Overview
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Recallify is an intelligent note-taking app designed for life science students struggling with information retention. It automates lecture summarization, provides timestamped highlights, and features 'Rico,' an AI study buddy that helps students quiz themselves on complex concepts, ultimately streamlining the study process and improving academic performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900">UX/UI Design Project</h3>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900">Jan-Mar 2025 Timeline</h3>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900">Educational Technology Category</h3>
            </div>
          </div>
        </section>

        {/* Problem Statement Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8">
            Problem Statement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Target Users Card */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Target Users</h3>
              <p className="text-gray-700 mt-2">
                Undergraduate life science students at NJIT, primarily ages 18-20, who are full-time students (12+ credits) majoring in Biology, Biostatistics, Biochemistry, and Biomedical Engineering.
              </p>
            </div>

            {/* Core Problem Card */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Core Problem</h3>
              <p className="text-gray-700 mt-2">
                Students struggle to retain information from their lectures due to the overwhelming amount of material (often exceeding 9 hours of lectures per day) and limited time for review.
              </p>
            </div>

            {/* Key Pain Points Card */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Key Pain Points</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Difficulty keeping up with instructor's pace (84.6% of surveyed students)</li>
                <li>Inability to distinguish important information (76.9%)</li>
                <li>Too much content to cover (61.5%)</li>
                <li>Getting distracted easily (38.5%)</li>
                <li>Instructor speaking too fast or unclearly (30.8%)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research & Discovery Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8">
            Research & Discovery
          </h2>
          <div className="space-y-8">
            {/* Methodology Card */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Methodology</h3>
              <p className="text-gray-700 mt-2">
                We conducted a mixed-method study using quantitative surveys and qualitative interviews with life science students at NJIT. We gathered data on their note-taking challenges, study habits, and potential solutions that would best serve their needs.
              </p>
            </div>

            {/* Key Insights Card */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Key Insights</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>42.9% of respondents were Biology majors, with many pursuing medical tracks</li>
                <li>Students were overwhelmed by content volume and felt anxious about missing key points</li>
                <li>Students frequently needed to rewatch lectures multiple times, significantly reducing study efficiency</li>
                <li>Many expressed desire for automated tools that could highlight important information</li>
              </ul>
            </div>

            {/* Image Containers for Graphs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-lg overflow-hidden aspect-square">
                <img
                  src="/images/rca1.2.png"
                  alt="Graph 1"
                  className="object-cover w-3/4 h-3/4 mx-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden aspect-square">
                <img
                  src="/images/rca2.png"
                  alt="Graph 2"
                  className="object-cover w-3/4 h-3/4 mx-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden aspect-square">
                <img
                  src="/images/rac3.1.png"
                  alt="Graph 3"
                  className="object-cover w-3/4 h-3/4 mx-auto"
                />
              </div>
            </div>

            {/* Research Visualization Tools Section */}
            <section>
              <h2 className="text-3xl font-heading text-gray-900 text-center mb-8">
                Research Visualization Tools
              </h2>
              <div className="mt-4 flex justify-center">
                <img
                  src="/images/affinity_diagram_recallify.png"
                  alt="Affinity Map Visualization"
                  className="rounded-lg object-cover w-3/4 h-auto cursor-pointer"
                  onClick={() => window.open('/images/affinity_diagram_recallify.png', '_blank')}
                />
              </div>
            </section>
          </div>
        </section>

        {/* Design Process Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8">
            Design Process
          </h2>
          <div className="mt-4 flex justify-center">
            <img
              src="/images/designproject_recallify.png"
              alt="Design Process Timeline"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </section>

        {/* Key Features & Solutions Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8">
            Key Features & Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <img src="/images/automatednote_icon.jpg" alt="Automated Note Icon" className="rounded-full object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Automated Note Summarization</h3>
              <p className="text-gray-700 mt-2">Recallify processes lecture recordings to generate concise, structured notes, addressing the "overwhelming content" pain point.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <img src="/images/timestamped_icon.jpg" alt="Timestamped Highlights Icon" className="rounded-full object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Timestamped Highlights</h3>
              <p className="text-gray-700 mt-2">Students can easily navigate to key moments in lectures without rewatching entire videos, improving review efficiency.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <img src="/images/AIstudybuddy_icon.jpg" alt="Rico AI Icon" className="rounded-full object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Rico AI Study Buddy</h3>
              <p className="text-gray-700 mt-2">An intelligent assistant that quizzes students on lecture content, provides explanations, and helps reinforce learning through active recall.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <img src="/images/seamless_integration_icon.jpg" alt="Integration Icon" className="rounded-full object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Seamless Integration</h3>
              <p className="text-gray-700 mt-2">Works with popular tools like Google Docs, Notion, and Loom to fit into students' existing workflows.</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4">
                <img src="/images/organized_workflow_icon.jpg" alt="Organized Workflow Icon" className="rounded-full object-cover w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Organized Workflow</h3>
              <p className="text-gray-700 mt-2">Notes are automatically categorized by course and date, with smart filtering options to quickly find relevant information.</p>
            </div>
          </div>
        </section>

        {/* User Flow and Initial Prototyping Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* User Flow Section */}
          <div>
            <h2 className="text-3xl font-heading text-gray-900 mb-4">User Flow</h2>
            <div className="mt-4 flex justify-center">
              <img
                src="/images/userflow_recallify.png"
                alt="User Flow Diagram"
                className="rounded-lg object-cover w-3/4 h-auto cursor-pointer"
                onClick={() => window.open('/images/userflow_recallify.png', '_blank')}
              />
            </div>
          </div>

          {/* Initial Prototyping Section */}
          <div>
            <h2 className="text-3xl font-heading text-gray-900 mb-4">Initial Prototyping</h2>
            <div className="relative w-full overflow-hidden" ref={carouselRef}>
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Wireframe ${index + 1}`}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                ))}
              </div>
              <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1 ${
                      currentIndex === index ? "bg-purple-800" : "bg-gray-400"
                    }`}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8">
            Results & Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">User Testing Feedback</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>85% of testers reported the interface was intuitive and easy to navigate</li>
                <li>90% found the AI Study Buddy feature valuable for reinforcing learning</li>
                <li>92% stated they would use the app regularly if available</li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Expected Impact</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Reduction in study time by eliminating the need to rewatch lectures multiple times</li>
                <li>Improved information retention through organized notes and active recall quizzing</li>
                <li>Decreased academic anxiety by providing reliable capture of lecture content</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lessons Learned Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8">
            Lessons Learned
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Key Insights</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>The importance of clear navigation cannot be overstated; early testing revealed significant usability issues that were addressed in later iterations</li>
                <li>AI features need to be perceived as helpful assistants rather than replacements for student effort</li>
                <li>The profile creation process needs to be streamlined to prevent abandonment</li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900">Design Challenges</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Finding the right balance between automation and user control</li>
                <li>Creating an interface that remains useful during lectures without being distracting</li>
                <li>Designing for varied user technical comfort levels</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Future Directions Section */}
        <section>
          <h2 className="text-3xl font-heading text-gray-900 text-center mb-8">
            Future Directions
          </h2>
          <div className="bg-gray-100 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-900">Potential Enhancements</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Collaboration features allowing students to share and annotate notes</li>
              <li>Integration with learning management systems used by universities</li>
              <li>Enhanced visualization tools for complex scientific concepts</li>
              <li>Expanded AI capabilities to generate practice problems based on lecture content</li>
              <li>Support for additional file formats and third-party integrations</li>
            </ul>
          </div>
        </section>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Link href="/projects" className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all no-underline">Back to Projects</Link>
          <Link href="https://github.com/your-repo-link" className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all no-underline">
            View Project
          </Link>
        </div>
      </main>
    </div>
  );
}