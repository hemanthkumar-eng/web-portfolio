"use client";

import * as React from "react";
import heroBg from "../Images/hero-bg.jpg";
import expertiseBg from "../Images/expertise-bg.jpg";
import pupMatcherImg from "../Images/Projects/PupMatcher/1.png";
import moveEasyImg from "../Images/Projects/MoveEasy/1.png";
import figmaMerchImg from "../Images/Projects/Figma Merch Store/1.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "home", href: "#home" },
  { label: "expertise", href: "#expertise" },
  { label: "work", href: "#work" },
  { label: "experience", href: "#experience" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
];

export default function Home() {
  const router = useRouter();
  const [expandedExp, setExpandedExp] = React.useState("Avacend Inc");

  const navigateToProject = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <main className="relative min-h-screen flex flex-col bg-black overflow-x-hidden">
      {/* Top Nav */}
      <nav className="w-full flex justify-center pt-8 pb-4 z-50 fixed top-0 left-0 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <ul className="flex gap-8 text-xs md:text-sm font-mono text-white">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="uppercase tracking-widest">
              <a
                href={item.href}
                className="hover:text-primary transition-colors flex items-center"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center min-h-screen pt-24 select-none relative z-0 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tight leading-none mb-4 drop-shadow-xl">
            HEMANTH
            <br />
            KUMAR G
          </h1>
          <p className="text-white font-mono text-lg md:text-2xl tracking-widest mb-8">
            SOFTWARE ENGINEER, FRONTEND TO BACKEND, I ENGINEER IT All.
          </p>
        </div>
      </section>
      {/* Expertise Section */}
      <section
        id="expertise"
        className="w-full max-w-6xl mx-auto py-24 px-4 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)), url(${expertiseBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative z-10">
          <h1 className="text-6xl font-bold text-white mb-16 text-center">
            My Expertise
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Software Development Card */}
            <div className="border border-white/10 rounded-lg p-8 bg-black/80 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-2xl text-white">🖥️</div>
                <h2 className="text-2xl font-bold text-white">
                  Software
                  <br />
                  Development
                </h2>
              </div>
              <p className="text-gray-400 font-mono text-sm">
                Experienced in both functional and OOP: Python, JavaScript,
                TypeScript.
              </p>
            </div>

            {/* Frontend Development Card */}
            <div className="border border-white/10 rounded-lg p-8 bg-black/80 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-2xl text-white">⚛️</div>
                <h2 className="text-2xl font-bold text-white">
                  Frontend Dev
                  <br />
                  React, NextJS
                </h2>
              </div>
              <p className="text-gray-400 font-mono text-sm">
                Passionate about UI/UX. Over 3 years of development experience
                in HTML, CSS, JS, React and NextJS frameworks.
              </p>
            </div>

            {/* Flutter Development Card */}
            <div className="border border-white/10 rounded-lg p-8 bg-black/80 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-2xl text-white">📱</div>
                <h2 className="text-2xl font-bold text-white">
                  Flutter & React Native Dev
                </h2>
              </div>
              <p className="text-gray-400 font-mono text-sm">
                Skilled in developing hybrid mobile apps and cross-platform
                solutions using the Flutter and React Native frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Work Section */}
      <section id="work" className="w-full max-w-6xl mx-auto py-24 px-4">
        <h2 className="text-6xl font-bold text-white mb-16 text-center">
          Work / Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "PupMatcher",
              emoji: "💼",
              href: "/projects/pupmatcher",
              image: pupMatcherImg,
              description:
                "Developed a responsive website that functions like a matchmaking platform for dogs, similar to Tinder. Allows users to view dog profiles and swipe through potential matches, creating an engaging and fun experience for dog owners seeking social connections for their pets.",
            },
            {
              title: "MoveEasy",
              emoji: "🚚",
              href: "/projects/moveeasy",
              image: moveEasyImg,
              description:
                "Created a responsive website to promote and showcase shipping services. Emphasized a clean, structured design and user-friendly navigation, allowing visitors to easily browse shipping options and service details.",
            },
            {
              title: "Figma Merch Store",
              emoji: "🎨",
              href: "/projects/figmamerch",
              image: figmaMerchImg,
              description:
                "The Figma Merch Store was an e-commerce website designed for selling Figma-branded merchandise. It allowed users to browse products, view detailed product descriptions, add items to their cart, and complete purchases through a checkout process.",
            },
          ].map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group relative block border border-white/10 rounded-lg overflow-hidden bg-black/80 backdrop-blur-sm hover:bg-black/90 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-2xl text-white">{project.emoji}</div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-400 font-mono text-sm">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="w-full max-w-6xl mx-auto py-24 px-4">
        <h1 className="text-6xl font-bold text-white mb-16 text-center">
          Professional Experience
        </h1>
        <div className="space-y-4">
          {/* Avacend Inc */}
          <div className="w-full">
            <button
              onClick={() =>
                setExpandedExp(
                  expandedExp === "Avacend Inc" ? "" : "Avacend Inc"
                )
              }
              className={`w-full flex justify-between items-center p-6 rounded-lg text-left transition-colors border border-white/10 backdrop-blur-sm ${
                expandedExp === "Avacend Inc"
                  ? "bg-black/90"
                  : "bg-black/80 hover:bg-black/90"
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-white">
                  App Developer @ Avacend Inc
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white/80">02/2025 - Present</span>
                <span className="text-2xl text-white">
                  {expandedExp === "Avacend Inc" ? "−" : "+"}
                </span>
              </div>
            </button>
            {expandedExp === "Avacend Inc" && (
              <div className="bg-black/80 backdrop-blur-sm p-8 rounded-b-lg border border-white/10 mt-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-white/60">📍 Bengaluru, India</span>
                  <a href="#" className="text-white/80 hover:text-white">
                    avacend.com
                  </a>
                </div>
                <ul className="list-disc list-inside text-white/80 text-sm space-y-2">
                  <li>
                    Developed a mobile dashboard application for supervisors
                    using static Excel-based data to provide on the go access to
                    work order status, worker assignments, and departmental
                    metrics.
                  </li>
                  <li>
                    Built reusable, responsive UI components using React Native
                    enabling intuitive navigation across work orders, worker
                    details, and SLA compliance metrics.
                  </li>
                  <li>
                    Integrated structured data parsing logic to transform Excel
                    input into clean, interactive frontend views with filtering,
                    sorting, and dynamic data mapping.
                  </li>
                  <li>
                    Engineered a scalable layout with card-based views and
                    modular design patterns to support future additions like
                    graphical visualizations and adaptive interfaces.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80">
                    React Native
                  </span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80">
                    Redux
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Constient Global Solutions */}
          <div className="w-full">
            <button
              onClick={() =>
                setExpandedExp(expandedExp === "Constient" ? "" : "Constient")
              }
              className={`w-full flex justify-between items-center p-6 rounded-lg text-left transition-colors border border-white/10 backdrop-blur-sm ${
                expandedExp === "Constient"
                  ? "bg-black/90"
                  : "bg-black/80 hover:bg-black/90"
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Front End Web Developer @ Constient Global Solutions
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-white/80">06/2023 - 12/2023</span>
                <span className="text-2xl text-white">
                  {expandedExp === "Constient" ? "−" : "+"}
                </span>
              </div>
            </button>
            {expandedExp === "Constient" && (
              <div className="bg-black/80 backdrop-blur-sm p-8 rounded-b-lg border border-white/10 mt-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-white/60">📍 Bengaluru, India</span>
                  <a href="#" className="text-white/80 hover:text-white">
                    constient.com
                  </a>
                </div>
                <ul className="list-disc list-inside text-white/80 text-sm space-y-2">
                  <li>Worked on a cloud-native log monitoring system</li>
                  <li>Making the website responsive to different devices</li>
                  <li>Adding theme toggling to the website</li>
                  <li>Unit testing</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80">
                    React
                  </span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80">
                    CSS
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section
        id="education"
        className="w-full max-w-6xl mx-auto py-24 px-4 text-center"
      >
        <h2 className="text-6xl font-bold text-white mb-16">Education</h2>
        <div className="space-y-6">
          <div className="border border-white/10 rounded-lg p-8 bg-black/80 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="text-2xl text-white mt-1">🎓</div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-white">
                  RNS Institute of Technology, Bengaluru
                </h3>
                <div className="text-gray-400 font-mono">
                  Bachelor of Engineering in Electronics and Communication
                </div>
              </div>
            </div>
          </div>
          <div className="border border-white/10 rounded-lg p-8 bg-black/80 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="text-2xl text-white mt-1">🎓</div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-white">
                  Dayananda Sagar Institute of Technology, Bengaluru
                </h3>
                <div className="text-gray-400 font-mono">
                  Diploma in Electronics and Communication Engineering
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section
        id="contact"
        className="w-full max-w-6xl mx-auto py-24 px-4 text-center"
      >
        <h2 className="text-6xl font-bold text-white mb-16">Contact</h2>
        <div className="border border-white/10 rounded-lg p-8 bg-black/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4 mb-8">
            <div className="flex gap-8">
              <a
                href="mailto:Hemanthx96@gmail.com"
                className="text-primary font-mono hover:underline flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Hemanthx96@gmail.com
              </a>
              <a
                href="https://github.com/hemanthkumar316"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-mono hover:underline flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hemanth-kumar-763011165/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-mono hover:underline flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Copyright Footer */}
      <footer className="w-full py-6 text-center text-white/60 font-mono text-sm border-t border-white/10">
        © Copyright 2025. Made by Hemanth
      </footer>
    </main>
  );
}
