import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harsha K — GenAI Developer",
  description:
    "GenAI Developer building AI-powered applications with Python, LLMs, RAG, and agentic AI technologies.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
