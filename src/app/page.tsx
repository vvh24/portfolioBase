import Image from "next/image";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import RoundedButton from "@/components/ui/rounded-button"; // Corrected path to match the module

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md w-full fixed top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-600">Valeria Heredia Crespo</h1>
          <nav className="flex items-center space-x-16">
            <Link href="/" className="text-gray-700 hover:text-purple-600 no-underline">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 no-underline">About</Link>
            <Link href="/projects" className="text-gray-700 hover:text-purple-600 no-underline">Projects</Link>
            <RoundedButton href="/contact" className="bg-purple-600 text-white hover:bg-purple-700 no-underline">
              Let's Connect
            </RoundedButton>
          </nav>
        </div>
      </header>

      <main className="flex-grow w-full">
        <div className="bg-gradient-purple-teal flex items-center justify-center min-h-[50vh] py-20">
          <section className="text-center space-y-5 px-10">
            <h1 className="text-5xl md:text-6xl font-heading text-white tracking-wide font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Creating Innovative Digital Experiences
            </h1>
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
              Transforming ideas into elegant digital solutions.
            </p>
            <div>
              <RoundedButton href="/projects" className="bg-white text-[#8A2BE2] font-bold text-lg px-6 py-3 rounded-full hover:bg-gray-100 no-underline">
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
        <section className="bg-gray-100 py-12 md:py-24">
          <div className="container mx-auto px-4 space-y-8">
            <h2 className="text-3xl md:text-4xl font-heading text-center font-bold text-black-800">
              From the Creative Lab
            </h2>
            <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto">
              Welcome to my Creative Lab, where I experiment with emerging technologies and design concepts. These projects represent my curiosity and continuous learning journey as I explore new tools and approaches in web development and information visualization.
            </p>
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
                  tags: ["Figma", "Miro", "Data Analysis"],
                  githubLink: "https://github.com/yourusername/recallify-ux-ui-design"
                },
              ].map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 space-y-4 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
                  <div className="w-full aspect-w-5 aspect-h-3 bg-gray-200 rounded-lg">
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
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 no-underline"
                    >
                      GitHub
                    </a>
                    <Link
                      href={project.link}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 no-underline"
                    >
                      Explore Project
                    </Link>
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
                className="inline-block bg-white text-[#8A2BE2] font-bold text-lg px-6 py-3 rounded-full hover:bg-gray-100 no-underline"
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
