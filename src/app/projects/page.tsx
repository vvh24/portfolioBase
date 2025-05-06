import Link from "next/link";
import MainNav from "@/components/main-nav";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-600" style={{ fontFamily: 'Poppins, sans-serif' }}>My Portfolio</h1>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-purple-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600">About</Link>
            <Link href="/projects" className="text-gray-700 hover:text-purple-600">Projects</Link>
            <Link href="/contact" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all">Let's Connect</Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-24 space-y-16">
        {/* Page Title Section */}
        <h1 className="text-4xl font-serif text-center text-purple-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Playground
        </h1>
        <p className="text-lg leading-8 text-gray-700 text-center max-w-3xl mx-auto" style={{ fontFamily: 'Lato, sans-serif' }}>
          Each project I undertake is a testament to my dedication to innovation, craftsmanship, and self-expression. Explore my work and see how I bring ideas to life through thoughtful design and creative problem-solving.
        </p>

        {/* Project Items */}
        <div className="space-y-16">
          {[{
            title: "UFO Data Visualization Project",
            description: "An interactive visualization using React, D3.js, and TopoJSON that displays UFO sightings across the US, military base locations, and supporting visualizations like timeline charts.",
            technologies: ["React", "D3.js", "TopoJSON"],
            color: "text-purple-600",
            link: "/projects/ufo-data-visualization",
          }, {
            title: "AI Project with RAG Implementation",
            description: "A cutting-edge AI project implementing Retrieval-Augmented Generation (RAG) to enhance information retrieval and response generation.",
            technologies: ["Python", "LangChain", "OpenAI API"],
            color: "text-purple-600",
            link: "/projects/ai-rag-implementation",
          }, {
            title: "Recallify UX/UI Design",
            description: "A UX/UI design project focused on enhancing user experience and interface design for a web application, utilizing Figma and Adobe XD.",
            technologies: ["Figma", "Miro", "Adobe"],
            color: "text-purple-600",
            link: "/projects/recallify-ux-ui-design",
          }].map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-8 shadow-md space-y-4">
              <h2 className={`text-2xl font-heading ${project.color}`} style={{ fontFamily: 'Poppins, sans-serif' }}>{project.title}</h2>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
              <Link href={project.link} className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all">
                View Project
              </Link>
            </div>
          ))}
        </div>

        {/* Back to Home Link */}
        <div className="text-center">
          <Link href="/" className="text-purple-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
