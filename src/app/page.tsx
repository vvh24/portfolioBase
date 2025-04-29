import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-teal-500">
      <main className="container mx-auto px-4 py-16 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-heading text-white">
            Creating Innovative Digital Experiences
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            Transforming ideas into elegant digital solutions.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/projects" className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-all">
              View My Work
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-all">
              Contact Me
            </Link>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading text-center text-white">
            Expertise in Modern Web Technologies
          </h2>
          <p className="text-lg text-center text-white max-w-3xl mx-auto">
            Specializing in React, data visualization, and AI-powered solutions, I bring creativity and technical expertise to every project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-purple-600 text-white rounded-full">React Certified</span>
            <span className="px-4 py-2 bg-purple-600 text-white rounded-full">5+ Years Experience</span>
            <span className="px-4 py-2 bg-purple-600 text-white rounded-full">AI Enthusiast</span>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-md h-64 bg-gray-200 rounded-lg">
              {/* Placeholder for creative process image */}
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading text-center text-white">
            Featured Creations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Data Visualization",
                description: "Interactive visualizations using React and D3.js.",
              },
              {
                title: "AI-Powered Assistant",
                description: "AI solutions with RAG and GPT models.",
              },
              {
                title: "Creative Coding",
                description: "Generative art and creative coding experiments.",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 space-y-4 text-center"
              >
                <div className="w-full h-40 bg-gray-200 rounded-lg">
                  {/* Placeholder for project image */}
                </div>
                <h3 className="text-xl font-heading text-purple-700">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.description}</p>
                <Link href="/projects" className="text-purple-600 hover:underline">Explore Project</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Values/Mission Section */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading text-center text-white">
            My Creative Philosophy
          </h2>
          <p className="text-lg text-center text-white max-w-3xl mx-auto">
            I believe in creating technology that is both beautiful and functional, empowering users to achieve their goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries to deliver cutting-edge solutions.",
              },
              {
                title: "Craftsmanship",
                description: "Attention to detail and a commitment to quality.",
              },
              {
                title: "Impact",
                description: "Designing with purpose to make a difference.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center space-y-4 text-white"
              >
                <div className="w-16 h-16 mx-auto bg-purple-600 rounded-full flex items-center justify-center">
                  {/* Placeholder for icon */}
                </div>
                <h3 className="text-xl font-heading">{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
