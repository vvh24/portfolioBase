import Image from "next/image";
import Link from "next/link";
import MainNav from "@/components/main-nav";

export default function Home() {
  return (
    <div className="min-h-screen">
      <MainNav />
      <div className="bg-gradient-to-r from-purple-500 to-teal-500 min-h-[60vh] flex items-center justify-center">
        <section className="text-center space-y-12">
          <h1 className="text-5xl md:text-6xl font-heading text-white tracking-wide font-semibold">
            Creating Innovative Digital Experiences
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            Transforming ideas into elegant digital solutions.
          </p>
          <div>
            <Link href="/projects" className="px-8 py-5 bg-white text-purple-600 text-lg rounded-lg hover:bg-gray-100 transition-all no-underline">
              View My Work
            </Link>
          </div>
        </section>
      </div>

      {/* Expertise Section */}
      <section className="bg-white py-12 md:py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-heading text-gray-900 text-left">
              Expertise in Modern Web Technologies
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed text-left lg:text-left">
              Specializing in React, data visualization, and AI-powered solutions, I bring creativity and technical expertise to every project.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-600 transition-all">
                React Certified
              </span>
              <span className="px-4 py-2 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-600 transition-all">
                5+ Years Experience
              </span>
              <span className="px-4 py-2 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-600 transition-all">
                AI Enthusiast
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full h-full bg-gray-200 rounded-xl shadow-md relative">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-300 to-transparent rounded-xl"></div>
            <div className="absolute bottom-4 left-4 bg-white text-gray-900 px-3 py-1 rounded-full shadow-md">
              Creative Process
            </div>
          </div>
        </div>
      </section>

      {/* Values/Mission Section */}
      <section className="bg-purple-100 py-12 md:py-24">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading text-center text-gray-900">
            My Creative Philosophy
          </h2>
          <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto">
            I believe in creating technology that is both beautiful and functional, empowering users to achieve their goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Innovation", "Craftsmanship", "Impact"].map((value, index) => (
              <div key={index} className="text-center space-y-4 text-gray-900">
                <div className="w-16 h-16 mx-auto bg-purple-600 rounded-full flex items-center justify-center">
                  {/* Placeholder for icon */}
                </div>
                <h3 className="text-xl font-heading">{value}</h3>
                <p>Short description about {value.toLowerCase()}.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-gray-100 py-12 md:py-24">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading text-center text-gray-900">
            Featured Creations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Data Visualization",
                description: "Brief description about data visualization.",
                link: "/projects/ufo-data-visualization",
              },
              {
                title: "AI-Powered Assistant",
                description: "Brief description about AI-powered assistant.",
                link: "/projects/ai-rag-implementation",
              },
              {
                title: "Recallify UX/UI Design",
                description: "Brief description about recallify UX/UI design.",
                link: "/projects/recallify-ux-ui-design",
              },
            ].map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 space-y-4 text-center">
                <div className="w-full h-40 bg-gray-200 rounded-lg">
                  {/* Placeholder for project image */}
                </div>
                <h3 className="text-xl font-heading text-purple-700">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <Link href={project.link} className="text-purple-600 hover:underline">
                  Explore Project
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
