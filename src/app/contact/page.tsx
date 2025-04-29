export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <main className="max-w-2xl w-full space-y-8 py-20">
        <h1 className="text-gradient-brand text-center">Contact Me</h1>
        <p className="text-lg text-medium-contrast text-center">
          I’d love to hear from you! Whether you have a project in mind, a question, or just want to connect, feel free to reach out.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all"
          >
            Send Message
          </button>
        </form>
        <section className="space-y-8 text-center">
          <h2 className="text-gradient-brand">Connect with Me</h2>
          <div className="flex justify-center gap-4">
            <a href="https://linkedin.com/in/valeriaheredia" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-700">LinkedIn</a>
            <a href="https://github.com/valeriaheredia" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-700">GitHub</a>
            <a href="https://twitter.com/valeriaheredia" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary-700">Twitter</a>
          </div>
          <p className="text-medium-contrast">Email: <a href="mailto:valeria@example.com" className="text-primary underline hover:text-primary-700">valeria@example.com</a></p>
        </section>
      </main>
    </div>
  );
}