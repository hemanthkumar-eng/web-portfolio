"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiDocker,
  SiExpress,
  SiExpo,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { getAssetPath } from "@/utils/path";
import type { IconType } from "react-icons";

const NAV_ITEMS = [
  { label: "home", href: "#home" },
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
];

const projects = [
  {
    title: "API Visualizer",
    emoji: "🔍",
    slug: "api-visualizer",
    type: "web",
    image: getAssetPath("/projects/apivisualizer/1.png"),
    description:
      "A lightweight, production-ready web application for exploring and visualizing JSON APIs. The app provides a clean, intuitive interface similar to Postman, allowing developers to test API endpoints, analyze responses, and understand data structures.",
    highlights: [
      "Request builder with GET support, editable headers, and robust error handling",
      "Multi-tab response viewer: Raw JSON, smart tables, interactive charts, schema inference, and JSON diff",
      "Advanced data analysis with filtering, configurable charts, and automatic schema inference",
      "Enhanced UX: Fullscreen mode, light/dark theme, request history, and one-click replay",
    ],
  },
  {
    title: "MoveEasy",
    emoji: "📦",
    slug: "moveeasy",
    type: "web",
    image: getAssetPath("/projects/moveeasy/MoveEasy/1.png"),
    description:
      "Created a responsive website to promote and showcase shipping services. Emphasized a clean, structured design and user-friendly navigation, allowing visitors to easily browse shipping options and service details.",
    highlights: [
      "Next.js marketing + shipment dashboard experience",
      "JWT-secured customer accounts with saved addresses",
      "Shipment lifecycle views, tracking, and quote flows",
      "Mock Razorpay checkout with ready backend APIs",
    ],
  },
  {
    title: "Impact Investment Platform",
    emoji: "🌱",
    slug: "impact-invest",
    type: "web",
    image: getAssetPath("/projects/figmamerch/Figma Merch Store/1.png"),
    description:
      "Portfolio-ready climate micro‑investment platform that showcases India-focused climate ventures with a storytelling-led marketing site, investor dashboard preview, and API-backed flows for auth, data, and payments.",
    highlights: [
      "Design-forward marketing site for ventures, impact, partners, news, and FAQs",
      "LP-style dashboard preview with pledge tracker, activity feed, and impact KPIs",
      "Express + TypeScript API powering venture data, contact, and mocked flows",
    ],
  },
  {
    title: "NoseBoop",
    emoji: "🐕",
    slug: "noseboop",
    type: "web",
    image: getAssetPath("/projects/pupmatcher/PupMatcher/1.png"),
    description:
      "Reimagined the classic dog matchmaking concept into NoseBoop—India's premier dog social app that helps pet parents from Mumbai to Bengaluru find the perfect playmate with swipe-friendly discovery, filters, and in-app chat.",
    highlights: [
      "Swipe-first matchmaking with playful animations",
      "Location + temperament filters for better matches",
      "Secure profiles, galleries, and in-app chat",
    ],
  },
  {
    title: "FacilityOps Mobile Suite",
    emoji: "📱",
    slug: "facilityops-mobile",
    type: "app",
    image: getAssetPath("/projects/facilityops/dashboard.svg"),
    description:
      "Cross-platform React Native + Expo application that delivers magic-link authentication, SLA dashboards, AI insights, and deep-link aware navigation for facility teams.",
    highlights: [
      "Magic link auth + SecureStore",
      "AI SLA risk predictions",
      "Redux Toolkit smart caching",
      "Deep linking across stacks",
    ],
  },
  {
    title: "Tech Maintenance",
    emoji: "🛠️",
    slug: "tech-maintenance",
    type: "app",
    image: getAssetPath("/projects/techmaintenance/dashboard.svg"),
    description:
      "FM360’s React Native mobility companion that ships custom theming, deep-link-aware auth, rich analytics, and resilient Redux caching so crews stay productive even with spotty connectivity.",
    highlights: [
      "Magic-link auth with SecureStore + session restore",
      "Responsive dashboards with donut/radial charts",
      "Work order lifecycle with cached filters & media",
      "Batch media uploads with progress + optimistic UI",
      "Notification center with shared context + tabs",
    ],
  },
];

const SKILLS = [
  { name: "JavaScript (ES6+)", icon: SiJavascript as IconType },
  { name: "TypeScript", icon: SiTypescript as IconType },
  { name: "Python", icon: SiPython as IconType },
  { name: "React", icon: SiReact as IconType },
  { name: "Next.js", icon: SiNextdotjs as IconType },
  { name: "React Native", icon: SiReact as IconType },
  { name: "Redux Toolkit", icon: SiRedux as IconType },
  { name: "Tailwind / NativeWind", icon: SiTailwindcss as IconType },
  { name: "Node.js", icon: SiNodedotjs as IconType },
  { name: "Express.js", icon: SiExpress as IconType },
  { name: "PostgreSQL", icon: SiPostgresql as IconType },
  { name: "MongoDB", icon: SiMongodb as IconType },
  { name: "Docker", icon: SiDocker as IconType },
  { name: "Vercel", icon: SiVercel as IconType },
  { name: "Expo", icon: SiExpo as IconType },
];

const EXPERIENCE = [
  {
    company: "Avacend Inc",
    role: "Software Engineer (Mobile & Frontend)",
    period: "Feb 2025 - Present",
    points: [
      "Built two facility management mobile apps one for Supervisors and another for Technicians using React Native/Expo.",
      "Streamlined work order tracking and real-time worker monitoring tailored to both user roles.",
      "Achieved a reduction in response times and improved productivity for field teams.",
      "Implemented advanced filtering with multi criteria search, date range, and intelligent Redux/Context API caching, cutting API calls by 60%.",
      "Developed comprehensive state management with Redux Toolkit and navigation caching for seamless screen transitions and data persistence.",
      "Delivered responsive UIs with dark/light mode (NativeWind) for both roles, boosting user adoption and enhancing accessibility.",
      "Built a secure authentication system using Expo SecureStore and Redux, maintaining uptime and zero security incidents, ensuring a seamless and safe user experience.",
    ],
  },
  {
    company: "Constient Global Solutions",
    role: "Frontend Web Developer",
    period: "Jun 2023 - Dec 2023",
    points: [
      "Worked on a cloud-native log monitoring system.",
      "Making the website responsive to different devices.",
      "Adding theme toggling to the website.",
      "Unit testing.",
    ],
  },
];

const EDUCATION = [
  {
    institute: "RNS Institute of Technology, Bengaluru",
    degree: "B.E. in Electronics and Communication",
  },
  {
    institute: "Dayananda Sagar Institute of Technology, Bengaluru",
    degree: "Diploma in Electronics and Communication Engineering",
  },
];

const HERO_TAGS = ["next.js", "react native", "typescript"];

const ICONS = {
  app: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 5.5h2" />
      <circle cx="12" cy="18" r="1" />
    </svg>
  ),
  web: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
  email: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  github: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M12 .7a11.3 11.3 0 0 0-3.57 22.02c.57.1.78-.25.78-.55v-2.12c-3.16.69-3.82-1.34-3.82-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 .1 1.67-.72 2.04-1.2.1-.73.4-1.21.72-1.49-2.52-.28-5.17-1.26-5.17-5.62 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.7 10.7 0 0 1 5.64 0c2.14-1.46 3.1-1.16 3.1-1.16.62 1.55.24 2.69.12 2.98.72.79 1.16 1.8 1.16 3.04 0 4.37-2.66 5.34-5.2 5.62.41.35.78 1.03.78 2.08v3.08c0 .3.21.66.79.55A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  ),
  linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM2.8 9.7H7.2V21H2.8V9.7ZM9.8 9.7h4.2v1.55h.06c.58-1.1 2-2.25 4.12-2.25 4.4 0 5.22 2.9 5.22 6.68V21H19V16.1c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.9 1.28-1.9 2.6V21H11V9.7h-1.2Z" />
    </svg>
  ),
};

const STARS = [
  { x: 42, y: 40, r: 1.4, d: 3.2 },
  { x: 88, y: 74, r: 1, d: 4.1 },
  { x: 150, y: 34, r: 1.6, d: 2.8 },
  { x: 320, y: 48, r: 1.2, d: 3.6 },
  { x: 360, y: 96, r: 1, d: 4.4 },
  { x: 60, y: 130, r: 1, d: 3.9 },
  { x: 24, y: 220, r: 1.3, d: 3.1 },
  { x: 372, y: 200, r: 1.5, d: 2.6 },
  { x: 340, y: 260, r: 1, d: 4.7 },
  { x: 110, y: 280, r: 1.2, d: 3.4 },
  { x: 200, y: 22, r: 1, d: 5.0 },
  { x: 280, y: 300, r: 1.1, d: 3.7 },
  { x: 18, y: 90, r: 1, d: 4.2 },
  { x: 386, y: 150, r: 1.2, d: 2.9 },
];

const ORBITS = [
  {
    id: "orbit-a",
    d: "M45,160 a155,50 0 1,0 310,0 a155,50 0 1,0 -310,0",
    rotate: 6,
    dur: "7s",
    dot: "#43e0e8",
  },
  {
    id: "orbit-b",
    d: "M60,160 a140,60 0 1,0 280,0 a140,60 0 1,0 -280,0",
    rotate: -54,
    dur: "9s",
    reverse: true,
    dot: "#8b7bff",
  },
  {
    id: "orbit-c",
    d: "M92,160 a108,44 0 1,0 216,0 a108,44 0 1,0 -216,0",
    rotate: 62,
    dur: "6s",
    dot: "#6f9bff",
  },
];

function HeroArt() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-950 shadow-[0_40px_120px_-40px_rgba(109,93,252,0.6)]">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-10 top-8 h-52 w-52 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-6 bottom-4 h-56 w-56 rounded-full bg-accent-cyan/15 blur-3xl" />
      <div className="scanlines absolute inset-0 opacity-25" />

      {/* perspective grid floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,108,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(124,108,255,0.4) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          transform: "perspective(440px) rotateX(64deg)",
          transformOrigin: "bottom",
          maskImage: "linear-gradient(to top, #000 5%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(to top, #000 5%, transparent 80%)",
        }}
      />

      <motion.div
        className="absolute inset-0"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 400 320"
          className="h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#b9a5ff" />
              <stop offset="100%" stopColor="#6d5dfc" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#43e0e8" />
              <stop offset="50%" stopColor="#6f9bff" />
              <stop offset="100%" stopColor="#8b7bff" />
            </linearGradient>
            <filter id="glow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="2.6" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="softGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="7" />
            </filter>
          </defs>

          {/* starfield */}
          {STARS.map((s, i) => (
            <motion.circle
              key={i}
              cx={s.x}
              cy={s.y}
              r={s.r}
              fill="#cdd3ff"
              animate={{ opacity: [0.15, 0.9, 0.15] }}
              transition={{
                duration: s.d,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          {/* orbit rings + traveling electrons */}
          {ORBITS.map((o) => (
            <g key={o.id} transform={`rotate(${o.rotate} 200 160)`}>
              <path
                id={o.id}
                d={o.d}
                stroke="url(#ring)"
                strokeWidth="1.4"
                strokeOpacity="0.5"
              />
              <circle r="4.5" fill={o.dot} filter="url(#glow)">
                <animateMotion
                  dur={o.dur}
                  repeatCount="indefinite"
                  keyPoints={o.reverse ? "1;0" : "0;1"}
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href={`#${o.id}`} />
                </animateMotion>
              </circle>
            </g>
          ))}

          {/* pulsing core */}
          <motion.circle
            cx="200"
            cy="160"
            r="34"
            fill="url(#core)"
            filter="url(#softGlow)"
            animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.08, 1] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "200px 160px" }}
          />
          <motion.circle
            cx="200"
            cy="160"
            r="9"
            fill="#ffffff"
            filter="url(#glow)"
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* HUD corner brackets */}
      {[
        "left-4 top-4 border-l-2 border-t-2",
        "right-4 top-4 border-r-2 border-t-2",
        "left-4 bottom-4 border-l-2 border-b-2",
        "right-4 bottom-4 border-r-2 border-b-2",
      ].map((pos) => (
        <span
          key={pos}
          className={`pointer-events-none absolute h-5 w-5 rounded-[3px] border-accent/40 ${pos}`}
        />
      ))}

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_95%_at_50%_0%,transparent_45%,rgba(6,5,16,0.85)_100%)]" />
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = React.useState("home");
  const webProjects = React.useMemo(
    () => projects.filter((project) => project.type === "web"),
    []
  );
  const appProjects = React.useMemo(
    () => projects.filter((project) => project.type === "app"),
    []
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const storedScroll = sessionStorage.getItem("homeScrollY");
    const storedHash = sessionStorage.getItem("homeScrollHash");

    if (storedScroll) {
      sessionStorage.removeItem("homeScrollY");
      requestAnimationFrame(() => {
        window.scrollTo(0, Number(storedScroll));
      });
    } else if (storedHash) {
      sessionStorage.removeItem("homeScrollHash");
      const element = document.getElementById(
        storedHash.startsWith("#") ? storedHash.slice(1) : storedHash
      );
      if (element) {
        element.scrollIntoView({ behavior: "auto", block: "start" });
      }
    }
  }, []);

  const rememberScrollPosition = React.useCallback(() => {
    if (typeof window !== "undefined") {
      const value = String(window.scrollY);
      sessionStorage.setItem("homeScrollY", value);
    }
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen text-fg">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <span className="font-display text-lg font-bold tracking-tight text-fg">
            hemanth<span className="text-accent">.</span>
          </span>
          <ul className="hidden gap-7 text-sm md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`transition-colors ${
                      isActive
                        ? "text-fg"
                        : "text-mute hover:text-fg"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a href="#contact" className="btn btn-primary hidden px-4 py-2 text-xs md:inline-flex">
            Get in touch
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[calc(100vh-77px)] max-w-6xl items-center px-6 py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid w-full items-center gap-12 md:grid-cols-[1.05fr_1fr]"
        >
          <div className="space-y-7">
            <div className="flex flex-wrap gap-2">
              {HERO_TAGS.map((tag) => (
                <span key={tag} className="pill">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              <span className="block text-fg">Hello, I&apos;m</span>
              <span className="block text-glow">Hemanth Kumar.</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-mute md:text-lg">
              A software engineer building frontend, full-stack, and mobile
              products. Everyone can vibe code — I ship on fundamentals that hold
              when performance drops, APIs fail, and production gets messy.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a href="#contact" className="btn btn-primary">
                Get in touch
                <span aria-hidden="true">→</span>
              </a>
              <a href="#projects" className="btn btn-ghost">
                View work
              </a>
            </div>
          </div>

          <div className="relative">
            <HeroArt />
          </div>
        </motion.div>

        <motion.a
          href="#about"
          aria-label="Scroll to discover"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.22em] text-mute md:flex"
          animate={{ y: [0, 6, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll to discover
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-4 w-4"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </motion.a>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-soft">
          About
        </p>
        <div className="mt-6 grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <p className="font-display text-2xl font-medium leading-snug text-fg md:text-3xl">
            I care about the layer beneath the framework — the reason things work,
            and why they hold up when the happy path breaks.
          </p>
          <div className="space-y-4 text-mute">
            <p>
              Currently a Software Engineer at Avacend Inc, shipping React Native
              &amp; Expo apps for facility teams. Before that, frontend web at
              Constient Global Solutions.
            </p>
            <p>
              I&apos;m based in Bengaluru and open to frontend, full-stack, and
              mobile roles where clean experiences and strong fundamentals matter.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-soft">
          Skills
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-fg md:text-4xl">
          The stack I build with
        </h2>
        <p className="mt-3 max-w-2xl text-mute">
          Frontend, mobile, backend, databases, and deployment — the tools I reach
          for to ship reliable products.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="surface surface-hover flex items-center gap-3 rounded-xl px-5 py-4"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                {React.createElement(skill.icon as React.ElementType, {
                  className: "h-5 w-5",
                  color: "#8b7bff",
                  "aria-hidden": true,
                })}
              </span>
              <span className="text-sm text-fg">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-soft">
          Projects
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-fg md:text-4xl">
          Selected work
        </h2>
        <p className="mt-3 max-w-2xl text-mute">
          Web platforms and production mobile apps built for scale, usability, and
          reliability.
        </p>
        <div className="divider mt-6 max-w-xl" />

        <div className="mt-12 space-y-16">
          {[
            {
              title: "App Projects",
              subtitle:
                "Mobile apps focused on real-world operations and reliability.",
              badge: "Mobile App",
              icon: ICONS.app,
              items: appProjects,
            },
            {
              title: "Web Projects",
              subtitle:
                "Web platforms designed for scale, usability, and product clarity.",
              badge: "Web Project",
              icon: ICONS.web,
              items: webProjects,
            },
          ].map((group, groupIndex) => (
            <div key={group.title} className="space-y-6">
              <div>
                <h3 className="flex items-center gap-2 font-display text-2xl font-semibold text-fg">
                  <span className="text-accent-soft">{group.icon}</span>
                  {group.title}
                </h3>
                <p className="mt-1 text-sm text-mute">{group.subtitle}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {group.items.map((project, index) => (
                  <Link
                    href={`/projects/${project.slug}`}
                    key={project.slug}
                    onClick={rememberScrollPosition}
                    className="surface surface-hover group block overflow-hidden rounded-2xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5 bg-ink-900">
                      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink-950/70 to-transparent" />
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 45vw"
                        priority={groupIndex === 0 && index === 0}
                      />
                    </div>
                    <div className="space-y-3 p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
                        {group.badge}
                      </p>
                      <h4 className="font-display text-xl font-semibold text-fg">
                        {project.title}
                      </h4>
                      <p className="line-clamp-3 text-sm leading-relaxed text-mute">
                        {project.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-blue">
                        View case study
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-soft">
          Experience
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-fg md:text-4xl">
          Where I&apos;ve worked
        </h2>
        <div className="mt-10 space-y-5">
          {EXPERIENCE.map((exp) => (
            <article key={exp.company} className="surface rounded-2xl p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-semibold text-fg">
                  {exp.role}
                </h3>
                <span className="pill">{exp.period}</span>
              </div>
              <p className="mt-2 text-sm font-medium text-accent-blue">
                {exp.company}
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-mute">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-soft" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-soft">
          Education
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold text-fg md:text-4xl">
          Academic background
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {EDUCATION.map((item) => (
            <article
              key={item.institute}
              className="surface surface-hover rounded-2xl p-7"
            >
              <h3 className="font-display text-lg font-semibold text-fg">
                {item.institute}
              </h3>
              <p className="mt-2 text-sm text-mute">{item.degree}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="surface relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-accent-blue/15 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-soft">
              Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-fg md:text-5xl">
              Let&apos;s build something.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-mute">
              Open to frontend, full-stack, or mobile roles. If you want an
              engineer who ships clean experiences and works closely with product,
              let&apos;s talk.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 text-sm">
              <a
                href="mailto:Hemanth.workemail@gmail.com"
                className="btn btn-primary"
              >
                {ICONS.email}
                Hemanth.workemail@gmail.com
              </a>
              <a
                href="https://github.com/hemanthkumar-eng"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                {ICONS.github}
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hemanth-kumar-763011165/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                {ICONS.linkedin}
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 text-center text-sm text-mute">
        © 2026 Hemanth Kumar. Built with Next.js, TypeScript &amp; Tailwind.
      </footer>
    </main>
  );
}
