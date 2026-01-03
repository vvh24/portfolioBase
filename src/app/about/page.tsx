"use client";

import Image from "next/image";
import Link from "next/link";
import RoundedButton from "@/components/ui/rounded-button";
import {
  FaGithub,
  FaLinkedin,
  FaLightbulb,
  FaHammer,
  FaBullseye,
  FaCompass,
  FaHandshake,
  FaStar,
  FaBriefcase,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, sans-serif" }}>
      <main className="container mx-auto px-6 py-20">
        {/* Hero / Profile - two column, left-aligned for a technical feel */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-10">
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3" style={{ fontFamily: 'Lora, serif' }}>
              About — Valeria Heredia Crespo
            </h1>

            <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">
              I design and build user-centered interfaces and data visualizations that turn complex
              information into clear, meaningful experiences. My work sits at the intersection of
              design and front-end engineering, focusing on accessible, maintainable solutions.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/projects" className="no-underline">
                <RoundedButton className="bg-gray-900 text-white hover:bg-[#0b3d91] transition-colors">View Projects</RoundedButton>
              </Link>

              <Link href="/contact" className="no-underline">
                <RoundedButton className="border border-gray-300 text-gray-700 hover:bg-black hover:text-white transition-colors">Contact</RoundedButton>
              </Link>

              <div className="ml-2 flex items-center gap-3">
                <a href="https://github.com/vvh24" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-black hover:text-[#0b3d91] transition-colors">
                  <FaGithub className="w-6 h-6 md:w-7 md:h-7" />
                </a>
                <a href="https://www.linkedin.com/in/valeria-heredia-101452326/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-black hover:text-[#0b3d91] transition-colors">
                  <FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />
                </a>
              </div>
            </div>

            {/* Summary stats / quick bullets */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="text-xs text-gray-500">Focus</div>
                <div className="text-sm font-semibold text-gray-900">UI/UX · Data Viz · Front-end</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="text-xs text-gray-500">Location</div>
                <div className="text-sm font-semibold text-gray-900">New Jersey, USA</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="text-xs text-gray-500">Availability</div>
                <div className="text-sm font-semibold text-gray-900">Open to internships & entry roles</div>
              </div>
            </div>
          </div>

          {/* Compact profile card */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
                  <Image src="/images/avatarpic.PNG" alt="Valeria" width={80} height={80} className="object-cover" />
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-900" style={{ fontFamily: 'Lora, serif' }}>Valeria Heredia Crespo</div>
                  <div className="text-xs text-gray-600">Web & Information Systems • NJIT</div>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                Focused on building maintainable front-ends and data visualizations that help users make decisions quickly.
              </div>

              <div className="mt-4">
                <div className="text-xs text-gray-500">Skills</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {['React','D3','TypeScript','Tailwind','Node.js','MERN','UI/UX'].map((s) => (
                    <span key={s} className="text-[11px] px-2 py-1 bg-gray-50 border border-gray-100 text-gray-700 rounded-full font-mono">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>

        {/* Capabilities - compact, technical cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <article className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-600 text-white mb-3">
              <FaLightbulb className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Lora, serif' }}>Strategy & Research</h4>
            <p className="text-sm text-gray-600">User research, journey mapping, and problem framing to guide pragmatic design decisions.</p>
          </article>

          <article className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-600 text-white mb-3">
              <FaHammer className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Lora, serif' }}>Engineering</h4>
            <p className="text-sm text-gray-600">Component-driven front-ends, performance-minded implementations, and accessible UI patterns.</p>
          </article>

          <article className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-amber-500 text-white mb-3">
              <FaBullseye className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Lora, serif' }}>Visualization</h4>
            <p className="text-sm text-gray-600">Designing clear visual systems and dashboards that reveal insight without clutter.</p>
          </article>
        </section>

        {/* How I Work / Recruiter friendly */}
        <section className="bg-gray-50 p-6 rounded-2xl mb-10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Lora, serif' }}>How I work</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="text-xs text-gray-500">Philosophy</div>
                <div className="text-sm text-gray-700">Clarity-first design with an emphasis on accessibility and measurable outcomes.</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="text-xs text-gray-500">Approach</div>
                <div className="text-sm text-gray-700">Iterate quickly, validate with users, prioritize performance and maintainability.</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="text-xs text-gray-500">Collaboration</div>
                <div className="text-sm text-gray-700">Open communication, clear documentation, and early cross-functional feedback.</div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education simplified timeline */}
        <section className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Lora, serif' }}>Experience & Education</h3>
          <div className="space-y-6">
            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">NJIT — B.S. Web & Information Systems</div>
                  <div className="text-xs text-gray-500">2024 — 2025</div>
                </div>
                <div className="text-xs text-gray-500">Education</div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">Passaic County Community College — A.A.S CIS</div>
                  <div className="text-xs text-gray-500">2021 — 2023</div>
                </div>
                <div className="text-xs text-gray-500">Education</div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">Responsible Conduct of Research (CITI)</div>
                  <div className="text-xs text-gray-500">2025</div>
                </div>
                <div className="text-xs text-gray-500">Certification</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
