"use client";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import RoundedButton from "@/components/ui/rounded-button";
import { useState } from "react";
import axios from "axios";
import "@fontsource/lora"; // Import Lora font for headings
import "@fontsource/poppins/500.css"; // Import Poppins Medium for subheadings
import "@fontsource/inter"; // Import Inter for body text
import { SiX } from "react-icons/si";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

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
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      <main className="container mx-auto px-6 py-24 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2" style={{ fontFamily: 'Lora, serif' }}>{"Let's work together"}</h1>
          <p className="text-gray-600 mb-6">Short, direct copy inviting people to reach out. Tell me about your project, timeline, or role.</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project"
              rows={6}
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
            />

            <div className="flex items-center justify-start">
              <button type="submit" className="inline-flex items-center px-5 py-2 bg-gray-900 text-white rounded-md">Send message</button>
            </div>

            {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
          </form>
        </div>
      </main>
    </div>
  );
}