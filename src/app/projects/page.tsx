import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <main className="max-w-2xl w-full space-y-8 py-20">
        <h1 className="text-gradient-brand text-center">Our Work</h1>
        <p className="text-lg text-medium-contrast text-center">
          Explore some of the projects we’ve worked on, each focused on delivering practical, effective solutions for real people and organizations.
        </p>
        <div className="text-center">
          <Link href="/" className="text-primary underline hover:text-primary-700">Back to Home</Link>
        </div>
      </main>
    </div>
  );
}
