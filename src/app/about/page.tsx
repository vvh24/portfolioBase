import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <main className="max-w-2xl w-full space-y-8 py-20">
        <h1 className="text-gradient-creative text-center">About Me</h1>
        <p className="text-lg text-medium-contrast text-center">
          As a UI/UX designer and NJIT senior, I embody the Creator archetype—innovative, expressive, and visionary. My passion lies in crafting designs that inspire creativity and empower users to navigate complex information with ease.
        </p>
        <p className="text-lg text-medium-contrast text-center">
          I believe in the power of self-expression and authenticity, and I strive to bring imagination and craftsmanship to every project I undertake. Let’s create something extraordinary together.
        </p>

        <section className="space-y-8">
          <h2 className="text-gradient-creative text-center">Skills</h2>
          <ul className="list-disc list-inside text-medium-contrast">
            <li>React Development</li>
            <li>Data Visualization with D3.js</li>
            <li>AI Implementation (RAG, GPT Models)</li>
          </ul>
        </section>

        <section className="space-y-8">
          <h2 className="text-gradient-creative text-center">Education & Certifications</h2>
          <ul className="list-disc list-inside text-medium-contrast">
            <li>Bachelor’s Degree in UI/UX Design, NJIT</li>
            <li>Certified Data Visualization Specialist</li>
            <li>AI & Machine Learning Certification</li>
          </ul>
        </section>

        <section className="space-y-8">
          <h2 className="text-gradient-creative text-center">Values & Mission</h2>
          <p className="text-medium-contrast text-center">
            I value creativity, authenticity, and collaboration. My mission is to empower individuals and organizations to achieve their goals through innovative and user-centered design solutions.
          </p>
        </section>

        <div className="text-center">
          <Link href="/" className="text-primary underline hover:text-primary-700">
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
