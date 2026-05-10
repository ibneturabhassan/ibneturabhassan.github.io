import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Inter, JetBrains_Mono } from "next/font/google";

import { portfolioContent } from "@/content/portfolio";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Malik Hassan Raza | GenAI Engineer",
  description:
    "Portfolio for Malik Hassan Raza, a GenAI engineer building reliable RAG products, LLM evaluation systems, and internal AI tools.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Malik Hassan Raza | GenAI Engineer",
    description:
      "Reliable RAG products, LLM evaluations, internal AI tooling, and production-grade GenAI workflows.",
    url: "http://127.0.0.1:3000",
    siteName: "Malik Hassan Raza",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Malik Hassan Raza | GenAI Engineer",
    description:
      "Reliable RAG products, LLM evaluations, internal AI tooling, and production-grade GenAI workflows."
  }
};

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Projects", href: "/projects" },
  { label: "Stack", href: "/#stack" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" }
];

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetBrainsMono.variable}`}>
        <header className="topbar topbar-global">
          <Link className="brand" href="/#top">
            {portfolioContent.name}
          </Link>
          <nav className="topnav" aria-label="Section navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <a className="button button-primary button-compact" href={portfolioContent.primaryCta.href}>
            {portfolioContent.primaryCta.label}
          </a>
        </header>
        {children}
      </body>
    </html>
  );
}
