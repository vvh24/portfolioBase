"use client";
import MainNav from "@/components/main-nav";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import RoundedButton from "@/components/ui/rounded-button";
import { useState, useEffect } from "react";
import axios from "axios";
import "@fontsource/lora"; // Import Lora font for headings
import "@fontsource/poppins/500.css"; // Import Poppins Medium for subheadings
import "@fontsource/inter"; // Import Inter for body text
import { SiX } from "react-icons/si";

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("/api/send-email", formData);
      if (response.status === 200) {
        setStatus("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Failed to send email. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md shadow-md" : ""
        } bg-white/80`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold text-purple-600 no-underline">
            Valeria Heredia Crespo
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 items-center">
            <Link href="/" className="text-gray-700 hover:text-purple-600 no-underline">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600 no-underline">
              About
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-purple-600 no-underline">
              Projects
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 no-underline"
            >
              Contact Me
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed text-gray-800 hover:bg-gray-100 focus:ring-gray-500 border border-transparent px-2 w-10 h-10"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open menu"
            aria-haspopup="menu"
            aria-expanded={isMenuOpen}
          >
            <span className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            </span>
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white md:hidden">
              <nav className="flex flex-col space-y-4 p-4">
                <Link
                  href="/"
                  className="text-gray-800 hover:text-purple-600 transition-colors no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-800 hover:text-purple-600 transition-colors no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/projects"
                  className="text-gray-800 hover:text-purple-600 transition-colors no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:brightness-110 transition-all no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Me
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
      <main className="container mx-auto px-4 py-24 space-y-16 font-inter mt-[35px]">
      <h1 className="text-5xl md:text-6xl font-heading text-gray-900 tracking-wide font-semibold text-center relative font-Lora">
          Contact Me
          <span className="block w-24 h-1 bg-purple-600 mx-auto mt-2 rounded"></span>
      </h1>
        <p className="text-lg leading-8 text-gray-700 text-center max-w-3xl mx-auto font-inter">
          I’d love to hear from you! Whether you have a project in mind, a question, or just want to connect, feel free to reach out.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <section className="bg-gray-100 rounded-lg p-8 shadow-md space-y-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              ></textarea>
              <button
                type="submit"
                className="px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-all"
              >
                Send Message
              </button>
              {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
            </form>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-heading text-center bg-purple-800 text-transparent bg-clip-text">
              Connect with Me
            </h2>
            <div className="flex flex-col items-center space-y-6">
              <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
                {/* Add your image here */}
                <img
                  src="/images/valeria_waving.jpg"
                  alt="Valeria Heredia Crespo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/valeria-heredia-101452326/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-800 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.064-1.867-3.064-1.868 0-2.155 1.459-2.155 2.967v5.701h-3v-10h2.881v1.367h.041c.401-.759 1.379-1.559 2.841-1.559 3.039 0 3.6 2.001 3.6 4.604v5.588z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/vvh24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-800 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.609-2.807 5.623-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.587 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/valerixch?s=21&t=G9AO291usgwbc4gp0ozLAQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-800 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-all"
                >
                  <SiX className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/val_hcrespo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-purple-800 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.243 1.31 3.608.058 1.266.069 1.646.069 4.849s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.243 1.248-3.608 1.31-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.243-1.31-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.243-1.248 3.608-1.31 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.281.059-2.563.334-3.637 1.408-1.074 1.074-1.349 2.356-1.408 3.637-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.059 1.281.334 2.563 1.408 3.637 1.074 1.074 2.356 1.349 3.637 1.408 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.281-.059 2.563-.334 3.637-1.408 1.074-1.074 1.349-2.356 1.408-3.637.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.059-1.281-.334-2.563-1.408-3.637-1.074-1.074-2.356-1.349-3.637-1.408-1.28-.058-1.688-.07-4.947-.07zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm6.406-11.845c-.796 0-1.441-.645-1.441-1.441s.645-1.441 1.441-1.441 1.441.645 1.441 1.441-.645 1.441-1.441 1.441z" />
                  </svg>
                </a>
              </div>
              <p className="text-center text-gray-700 italic mt-4 flex items-center justify-center gap-2">
                <span className="text-purple-600 text-2xl font-bold">“</span>
                <span>Hard-work and perseverance is what will lead me to accomplish my goals and dreams</span>
                <span className="text-purple-600 text-2xl font-bold">”</span>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}