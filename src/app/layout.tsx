import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Outlaw AI Consultancy",
    template: "%s | Outlaw AI Consultancy",
  },
  description: "Challenging the AI status quo with radical honesty and evidence-based disruption",
  authors: [{ name: "Outlaw AI Consultancy" }],
  keywords: ["AI consultancy", "digital transformation", "disruptive innovation"],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
            body {
              font-family: Arial, sans-serif;
            }
          `}
        </style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
