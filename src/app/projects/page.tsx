import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <main className="max-w-2xl w-full space-y-8 py-20">
        <h1 className="text-gradient-creative text-center">My Projects</h1>
        <p className="text-lg text-medium-contrast text-center">
          Each project I undertake is a testament to my dedication to innovation, craftsmanship, and self-expression. Explore my work and see how I bring ideas to life through thoughtful design and creative problem-solving.
        </p>
        <ul className="space-y-8">
          <li className="text-medium-contrast">
            <h2 className="text-creative font-heading text-xl">UFO Data Visualization Project</h2>
            <p>An interactive visualization using React, D3.js, and TopoJSON that displays UFO sightings across the US, military base locations, and supporting visualizations like timeline charts.</p>
            <p><strong>Technologies:</strong> React, D3.js, TopoJSON</p>
            <a href="#" className="text-primary underline hover:text-primary-700">View Project</a>
          </li>
          <li className="text-medium-contrast">
            <h2 className="text-electric font-heading text-xl">AI Project with RAG Implementation</h2>
            <p>A cutting-edge AI project implementing Retrieval-Augmented Generation (RAG) to enhance information retrieval and response generation.</p>
            <p><strong>Technologies:</strong> Python, LangChain, OpenAI API</p>
            <a href="#" className="text-primary underline hover:text-primary-700">View Project</a>
          </li>
          <li className="text-medium-contrast">
            <h2 className="text-innovative font-heading text-xl">Creative Coding Experiment</h2>
            <p>An experimental project exploring generative art and creative coding techniques to produce visually stunning and interactive designs.</p>
            <p><strong>Technologies:</strong> p5.js, Three.js</p>
            <a href="#" className="text-primary underline hover:text-primary-700">View Project</a>
          </li>
        </ul>
        <div className="text-center">
          <Link href="/" className="text-primary underline hover:text-primary-700">
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
