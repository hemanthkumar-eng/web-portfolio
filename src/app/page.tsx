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
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
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
    // #region agent log
    fetch("http://127.0.0.1:7793/ingest/f6b4e70d-d5e3-4fbc-be1f-176d14fcf127", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Debug-Session-Id": "bb8bcf",
      },
      body: JSON.stringify({
        sessionId: "bb8bcf",
        runId: "initial-3",
        hypothesisId: "H4",
        location: "src/app/page.tsx:152",
        message: "Home page mounted",
        data: { pathname: window.location.pathname },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

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
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen text-rcb-cream">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-[-80px] top-24 z-0 h-56 w-56 rounded-full bg-rcb-red/25 blur-3xl"
        animate={{ y: [0, 12, 0], x: [0, 8, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-12 right-[-70px] z-0 h-52 w-52 rounded-full bg-rcb-gold/15 blur-3xl"
        animate={{ y: [0, -10, 0], x: [0, -7, 0], scale: [1, 0.98, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <nav className="sticky top-0 z-40 border-b border-rcb-gold/35 bg-rcb-deeper/95 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-base font-semibold tracking-wide text-rcb-cream md:text-lg">
            Hemanth Kumar
          </span>
          <ul className="hidden gap-6 text-base text-rcb-cream/90 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`transition-colors ${
                      isActive
                        ? "font-semibold text-rcb-gold"
                        : "text-rcb-cream/90 hover:text-rcb-gold"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <section
        id="home"
        className="relative w-full overflow-hidden py-20 md:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-2 left-1/2 z-0 w-screen -translate-x-1/2 overflow-hidden opacity-65 md:bottom-0"
        >
          <motion.svg
            viewBox="0 0 2880 260"
            preserveAspectRatio="none"
            className="h-24 w-[200%] max-w-none shrink-0 text-white/12 blur-[1px] mix-blend-screen md:h-32"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <g>
              <path
                fill="currentColor"
                d="M0,120L48,114.7C96,109,192,99,288,104C384,109,480,131,576,141.3C672,152,768,152,864,136C960,120,1056,88,1152,82.7C1248,77,1344,99,1392,109.3L1440,120L1440,260L1392,260C1344,260,1248,260,1152,260C1056,260,960,260,864,260C768,260,672,260,576,260C480,260,384,260,288,260C192,260,96,260,48,260L0,260Z"
              />
              <path
                fill="currentColor"
                fillOpacity="0.55"
                d="M0,176L48,168C96,160,192,144,288,141.3C384,139,480,149,576,157.3C672,165,768,171,864,165.3C960,160,1056,144,1152,144C1248,144,1344,160,1392,168L1440,176L1440,260L1392,260C1344,260,1248,260,1152,260C1056,260,960,260,864,260C768,260,672,260,576,260C480,260,384,260,288,260C192,260,96,260,48,260L0,260Z"
              />
            </g>
            <g transform="translate(1440, 0)">
              <path
                fill="currentColor"
                d="M0,120L48,114.7C96,109,192,99,288,104C384,109,480,131,576,141.3C672,152,768,152,864,136C960,120,1056,88,1152,82.7C1248,77,1344,99,1392,109.3L1440,120L1440,260L1392,260C1344,260,1248,260,1152,260C1056,260,960,260,864,260C768,260,672,260,576,260C480,260,384,260,288,260C192,260,96,260,48,260L0,260Z"
              />
              <path
                fill="currentColor"
                fillOpacity="0.55"
                d="M0,176L48,168C96,160,192,144,288,141.3C384,139,480,149,576,157.3C672,165,768,171,864,165.3C960,160,1056,144,1152,144C1248,144,1344,160,1392,168L1440,176L1440,260L1392,260C1344,260,1248,260,1152,260C1056,260,960,260,864,260C768,260,672,260,576,260C480,260,384,260,288,260C192,260,96,260,48,260L0,260Z"
              />
            </g>
          </motion.svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.3fr_1fr]"
        >
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-rcb-gold/40 bg-rcb-red/25 px-3 py-1 text-sm font-semibold uppercase tracking-[0.16em] text-rcb-cream">
              Software Engineer
            </p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Everyone can vibe code. I build on fundamentals that hold when systems fail.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-rcb-muted">
              Everyone can vibe code, but true engineering is understanding why
              fundamentals matter. When performance drops, APIs fail, or
              production gets messy, I rely on strong basics to debug fast and
              ship reliable solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="royal-button rounded-xl bg-rcb-red px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-rcb-red/30 ring-1 ring-rcb-gold/50 transition hover:brightness-110"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="accent-ring royal-button rounded-xl border-2 border-rcb-gold bg-rcb-deeper px-5 py-3 text-sm font-semibold text-rcb-cream transition hover:-translate-y-0.5 hover:bg-rcb-gold/15"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="brand-surface accent-ring relative overflow-hidden rounded-3xl p-4">
            <div className="pointer-events-none absolute inset-0 z-10 bg-rcb-red/10" />
            <Image
              src={getAssetPath("/projects/apivisualizer/1.png")}
              alt="Portfolio project preview"
              width={900}
              height={600}
              className="h-auto w-full rounded-2xl object-cover brightness-[0.94] contrast-[1.05]"
              priority
            />
            <div className="pointer-events-none absolute inset-0 z-10 bg-rcb-deeper/45" />
          </div>
        </motion.div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Core Skills
        </h2>
        <p className="mt-3 max-w-2xl text-rcb-muted">
          Most relevant stack for hiring: frontend, mobile, backend, databases,
          and deployment.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, index) => (
            <div
              key={skill.name}
              className="brand-surface rounded-2xl p-5 text-rcb-cream"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center">
                  {React.createElement(skill.icon as React.ElementType, {
                    className: "h-5 w-5",
                    color: "#d1ab3e",
                    "aria-hidden": true,
                  })}
                </span>
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-3 max-w-2xl text-rcb-muted">
              Selected work across web platforms and production mobile apps.
            </p>
            <div className="royal-divider mt-4 w-full max-w-xl" />
          </div>
        </div>
        <div className="space-y-14">
          {[
            {
              title: "App Projects",
              subtitle: "Mobile apps focused on real-world operations and reliability.",
              badge: "Mobile App",
              icon: ICONS.app,
              items: appProjects,
            },
            {
              title: "Web Projects",
              subtitle: "Web platforms designed for scale, usability, and product clarity.",
              badge: "Web Project",
              icon: ICONS.web,
              items: webProjects,
            },
          ].map((section, sectionIndex) => (
            <div key={section.title} className="space-y-6">
              <div>
                <h3 className="flex items-center gap-2 text-2xl font-semibold text-white md:text-3xl">
                  <motion.span
                    className="text-rcb-gold"
                    animate={{ y: [0, -2, 0], opacity: [0.9, 1, 0.9] }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {section.icon}
                  </motion.span>
                  {section.title}
                </h3>
                <p className="mt-2 text-sm text-rcb-muted">{section.subtitle}</p>
              </div>

              <div className="space-y-8">
                {section.items.map((project, index) => (
                  <Link
                    href={`/projects/${project.slug}`}
                    key={project.slug}
                    onClick={rememberScrollPosition}
                    className="brand-surface accent-ring group block overflow-hidden rounded-3xl transition hover:-translate-y-0.5"
                  >
                    <motion.div
                      className="grid gap-0 md:grid-cols-[1.2fr_1fr]"
                      whileHover={{ y: -2, scale: 1.003 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <div className="space-y-4 p-7 md:p-9">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-rcb-gold">
                          {section.badge}
                        </p>
                        <h4 className="text-2xl font-semibold text-white">
                          {project.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-rcb-muted">
                          {project.description}
                        </p>
                        <span className="inline-flex items-center text-sm font-medium text-rcb-gold">
                          View Case Study →
                        </span>
                      </div>
                      <div className="relative min-h-[220px] border-l border-rcb-gold/35 bg-rcb-red/10 md:min-h-[260px]">
                        <div className="pointer-events-none absolute inset-0 bg-rcb-deeper/25" />
                        <Image
                          src={project.image}
                          alt={`${project.title} preview`}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.02] brightness-[0.94] contrast-[1.05]"
                          sizes="(max-width: 768px) 100vw, 40vw"
                          priority={sectionIndex === 0 && index === 0}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-rcb-deeper/30" />
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Experience
        </h2>
        <div className="mt-8 space-y-4">
          {EXPERIENCE.map((exp) => (
            <article
              key={exp.company}
              className="brand-surface rounded-2xl p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {exp.role}
                </h3>
                <p className="text-sm text-rcb-muted">{exp.period}</p>
              </div>
              <p className="mt-1 text-sm font-medium text-white">
                {exp.company}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-rcb-muted">
                {exp.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="education" className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Education
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {EDUCATION.map((item) => (
            <article
              key={item.institute}
              className="brand-surface rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.institute}
              </h3>
              <p className="mt-2 text-sm text-rcb-muted">{item.degree}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-14">
        <div className="brand-surface accent-ring rounded-3xl p-8 text-center md:p-12">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Open to Software Roles
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-rcb-muted">
            Looking for a frontend, full-stack, or mobile engineer who can ship
            clean experiences and collaborate closely with product teams.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-sm">
            <a
              href="mailto:Hemanth.workemail@gmail.com"
              className="royal-button inline-flex items-center gap-2 rounded-xl bg-rcb-red px-4 py-2.5 font-semibold text-white ring-1 ring-rcb-gold/50 transition hover:brightness-110"
            >
              <motion.span
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                {ICONS.email}
              </motion.span>
              Hemanth.workemail@gmail.com
            </a>
            <a
              href="https://github.com/hemanthkumar-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-ring royal-button inline-flex items-center gap-2 rounded-xl border-2 border-rcb-gold bg-rcb-dark px-4 py-2.5 font-semibold text-rcb-cream transition hover:-translate-y-0.5 hover:bg-rcb-gold/15"
            >
              <motion.span
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                {ICONS.github}
              </motion.span>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hemanth-kumar-763011165/"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-ring royal-button inline-flex items-center gap-2 rounded-xl border-2 border-rcb-gold bg-rcb-dark px-4 py-2.5 font-semibold text-rcb-cream transition hover:-translate-y-0.5 hover:bg-rcb-gold/15"
            >
              <motion.span
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
              >
                {ICONS.linkedin}
              </motion.span>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-rcb-gold/30 py-8 text-center text-sm text-rcb-muted">
        © 2026 Hemanth Kumar. Built with Next.js and TypeScript.
      </footer>
    </main>
  );
}
