import Image from "next/image";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import RoundedButton from "@/components/ui/rounded-button"; // Corrected path to match the module

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md w-full fixed top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-600">My Portfolio</h1>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-purple-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600">About</Link>
            <Link href="/projects" className="text-gray-700 hover:text-purple-600">Projects</Link>
            <RoundedButton href="/contact" className="bg-purple-600 text-white hover:bg-purple-700">
              Let's Connect
            </RoundedButton>
          </nav>
        </div>
      </header>

      <main className="flex-grow w-full">
        <div className="bg-gradient-to-r from-purple-500 to-teal-500 flex items-center justify-center min-h-[50vh]">
          <section className="text-center space-y-12 px-4">
            <h1 className="text-5xl md:text-6xl font-heading text-white tracking-wide font-semibold">
              Creating Innovative Digital Experiences
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
              Transforming ideas into elegant digital solutions.
            </p>
            <div>
              <RoundedButton href="/projects" className="bg-white text-purple-600 hover:bg-gray-100">
                View My Work
              </RoundedButton>
            </div>
          </section>
        </div>

        {/* Expertise Section */}
        <section className="bg-white py-12 md:py-24">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading text-gray-900 text-left">
                Expertise in Web & Information Systems
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-left lg:text-left">
                Combining my technical foundation with a passion for visual design, I create digital experiences that make complex information accessible and engaging.
              </p>
              <div className="flex flex-wrap gap-4">
                <RoundedButton className="bg-purple-500 text-white hover:bg-purple-600">
                  Problem Solver
                </RoundedButton>
                <RoundedButton className="bg-purple-500 text-white hover:bg-purple-600">
                  Information Visualization
                </RoundedButton>
                <RoundedButton className="bg-purple-500 text-white hover:bg-purple-600">
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
            <h2 className="text-3xl md:text-4xl font-heading text-center text-gray-900">
              My Creative Philosophy
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
                  description: "I believe in meticulous attention to detail, from clean code structure to pixel-perfect designs. My dedication to quality means carefully refining each element until the technical foundation and visual presentation work seamlessly together to create polished, professional experiences.",
                  imgSrc: "/images/craftsmanship2.0_philosophy.png"
                },
                {
                  title: "Impact",
                  description: "My ultimate goal is creating digital solutions that meaningfully improve how people interact with information. I measure success by how effectively my work simplifies complexity, enhances understanding, and makes technology more accessible to the people who use it.",
                  imgSrc: "/images/impact3.0_philosophy.png"
                }
              ].map((philosophy, index) => (
                <div key={index} className="text-center space-y-4 text-gray-900">
                  <div className="w-16 h-16 mx-auto">
                    <img src={philosophy.imgSrc} alt={philosophy.title} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <h3 className="text-xl font-heading">{philosophy.title}</h3>
                  <p>{philosophy.description}</p>
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
                  description: "UFO Sightings & Military Bases Visualization is an interactive web application that examines potential correlations between reported UFO sightings and US military installations. Using React and D3.js, it features dynamic mapping, timeline analysis, and ranking visualizations that reveal fascinating patterns in sighting frequencies across different states and time periods.",
                  link: "/projects/ufo-data-visualization",
                  imgSrc: "/images/ufo_card_visualization.png",
                  tags: ["React", "D3.js", "Data Visualization"],
                  githubLink: "https://github.com/yourusername/ufo-data-visualization"
                },
                {
                  title: "AI-Powered Assistant",
                  description: "Building a Real-Time WebSocket Chat is a web development project that demonstrates creating a persistent, bidirectional communication system using Node.js, Express, and Socket.IO. The application enables instant message exchange between multiple users without page refreshes, while teaching core concepts of anonymous functions, callbacks, and real-time data streaming.",
                  link: "/projects/ai-rag-implementation",
                  imgSrc: "/images/AI_powered_assistant_visualization.png", // Placeholder for future image
                  tags: ["Node.js", "Express", "Socket.IO"],
                  githubLink: "https://github.com/yourusername/ai-rag-implementation"
                },
                {
                  title: "Recallify UX/UI Design",
                  description: "Recallify is the planning of an intelligent note-taking app designed for life science students struggling with information retention. It automates lecture summarization, provides timestamped highlights, and features 'Rico', an AI study buddy that helps students quiz themselves on complex concepts, ultimately streamlining the study process and improving academic performance.",
                  link: "/projects/recallify-ux-ui-design",
                  imgSrc: "/images/recallify_visualization.png",
                  tags: ["UX/UI Design", "AI", "Education"],
                  githubLink: "https://github.com/yourusername/recallify-ux-ui-design"
                },
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 space-y-4 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                  <div className="w-full aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg">
                    {project.imgSrc ? (
                      <img src={project.imgSrc} alt={project.title} className="w-full h-full object-cover rounded-lg" />
                    ) : (
                      <span className="text-gray-500">Image Placeholder</span>
                    )}
                  </div>
                  <h3 className="text-xl font-heading text-purple-700 text-left">{project.title}</h3>
                  <p className="text-gray-700 text-left">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-purple-100 text-purple-700 text-sm px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-start gap-4 mt-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                    >
                      GitHub
                    </a>
                    <Link
                      href={project.link}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                    >
                      Explore Project
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
