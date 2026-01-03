"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import RoundedButton from "@/components/ui/rounded-button";

import "@fontsource/lora";
import "@fontsource/poppins/500.css";
import "@fontsource/inter";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [tagFilter, setTagFilter] = useState<string | null>(null);

  const projects = [
    {
      title: "UFO Data Visualization Project",
      description: "Interactive map visualization showing UFO sightings across the US with supporting timelines and charts.",
      technologies: ["React", "D3.js", "TopoJSON"],
      link: "/projects/ufo-data-visualization",
      imageSrc: "/images/ufocover2.png",
    },
    {
      title: "AI Project with RAG Implementation",
      description: "A Retrieval-Augmented Generation prototype to improve information retrieval and responses for an assistant.",
      technologies: ["Python", "LangChain", "OpenAI API"],
      link: "/projects/ai-rag-implementation",
      imageSrc: "/images/airagcover.png",
    },
    {
      title: "Shoprite UX/UI Design",
      description: "A UX research project that improves ShopRite’s digital coupon kiosk experience by reducing user confusion and increasing accessibility.",
      technologies: ["Figma", "Miro"],
      link: "/projects/shoprite-ux-ui-design",
      imageSrc: "/images/shopritecover.png",
    },
    {
      title: "VVH Books Gallery - MERN",
      description: "Browse classic literature, explore authors, and share comments with other readers.",
      technologies: ["MERN", "React Router", "Axios", "CRUD", "REST API"],
      link: "/projects/mern-project",
      imageSrc: "/images/merncover2.png",
    },
  ];

  const allTags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach(p => p.technologies.forEach((t: string) => s.add(t)));
    return Array.from(s);
  }, []);

  const filtered = useMemo(() => {
    return projects.filter(p => {
      const matchesQuery = !query || p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase());
      const matchesTag = !tagFilter || p.technologies.includes(tagFilter);
      return matchesQuery && matchesTag;
    });
  }, [projects, query, tagFilter]);

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <main className="max-w-6xl mx-auto px-6 py-20">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900" style={{ fontFamily: 'Lora, serif' }}>Projects</h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Selected work in web development, data visualization, and UX design.</p>
        </header>

        {/* Projects Grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {filtered.map((project, idx) => (
              <article key={idx} className="relative bg-white rounded-2xl shadow hover:shadow-lg transition-shadow border border-gray-100 group overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-600"></div>

                <Link href={project.link} className="block no-underline group">
                  <div className="h-56 md:h-64 w-full bg-gray-100 overflow-hidden">
                    <img src={project.imageSrc} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                  </div>

                  <div className="p-6 flex flex-col justify-between min-h-[220px]">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h2 className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Lora, serif' }}>{project.title}</h2>
                        <span className="text-xs font-mono text-gray-400">#{idx + 1}</span>
                      </div>
                      <p className="text-sm md:text-base text-gray-600 mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((t: string) => (
                          <span key={t} className="text-xs md:text-sm px-2 py-1 bg-gray-50 border border-gray-100 text-gray-700 rounded-full font-mono">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-mono text-sm md:text-base text-indigo-600">Explore →</span>
                      <div className="text-sm text-gray-500 font-mono">{project.technologies.length} tech</div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center px-5 py-2 bg-gray-900 text-white rounded-md no-underline">Back to Home</Link>
        </div>
      </main>
    </div>
  );
}
