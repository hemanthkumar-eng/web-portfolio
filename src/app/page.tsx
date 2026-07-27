"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  SiAxios,
  SiBootstrap,
  SiDocker,
  SiExpo,
  SiExpress,
  SiGit,
  SiGithub,
  SiGo,
  SiHono,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import {
  TbApi,
  TbBolt,
  TbBrain,
  TbDeviceMobile,
  TbFileUpload,
  TbRefresh,
  TbRouter,
} from "react-icons/tb";
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
    title: "Cognia",
    emoji: "🗣️",
    slug: "cognia",
    type: "app",
    image: getAssetPath("/projects/cognia/dashboard.svg"),
    description:
      "An India-first, English-speaking practice buddy for students. A Duolingo-style mascot talks with the learner by voice—the app speaks (TTS), listens (STT), and shows everything as on-screen captions—personalized by class, ability level, and interests. Built on Sarvam AI and architected to scale from English to Hindi, Tamil, and Telugu.",
    highlights: [
      "Push-to-talk voice loop: STT → LLM tutor → TTS with live captions",
      "Personalized prompts by grade, ability, and interests with child-safety guardrails",
      "Guided lessons, XP, and daily streaks (Zustand + AsyncStorage)",
      "Hono backend proxying Sarvam AI so keys never ship in the app",
    ],
  },
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

const SKILL_GROUPS: {
  title: string;
  items: { name: string; icon: IconType }[];
}[] = [
  {
    title: "Languages",
    items: [
      { name: "Golang", icon: SiGo },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "React Context API", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Mobile",
    items: [
      { name: "React Native (Expo)", icon: SiReact },
      { name: "Expo Router", icon: SiExpo },
      { name: "React Navigation", icon: TbRouter },
      { name: "NativeWind", icon: SiTailwindcss },
      { name: "AsyncStorage", icon: TbDeviceMobile },
      { name: "EAS Build (Android & iOS)", icon: SiExpo },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Hono", icon: SiHono },
      { name: "REST API Design", icon: TbApi },
      { name: "JWT Authentication", icon: SiJsonwebtokens },
      { name: "Multipart File Handling", icon: TbFileUpload },
      { name: "LLM/AI API Integration (STT/TTS)", icon: TbBrain },
    ],
  },
  {
    title: "State & Performance",
    items: [
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "SWR", icon: TbRefresh },
      { name: "Axios", icon: SiAxios },
      { name: "API caching strategies", icon: TbBolt },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
      { name: "Postman", icon: SiPostman },
    ],
  },
];

const EXPERIENCE = [
  {
    company: "Avacend Inc",
    role: "Software Engineer (Mobile & Frontend)",
    period: "Feb 2024 - Present",
    points: [
      "Built two facility management mobile apps, one for Supervisors and another for Technicians, using React Native/Expo.",
      "Streamlined work order tracking and real time worker monitoring tailored to both user roles.",
      "Achieved a 40% reduction in response times and improved productivity for field teams.",
      "Implemented advanced filtering with multi criteria search, date range, and intelligent Redux/Context API caching, cutting API calls by 60%.",
      "Developed comprehensive state management with Redux Toolkit and navigation caching for seamless screen transitions and data persistence.",
      "Architected a shared component library and design system across both apps, maximizing code reuse and cutting feature development time while ensuring UI consistency.",
      "Engineered role based access control and conditional rendering to serve tailored workflows for Supervisors (assignment, oversight, approvals) and Technicians (task execution, status updates) from a unified codebase.",
      "Built offline first capabilities with local persistence and background sync, enabling field technicians to log work orders in low connectivity environments without data loss.",
      "Integrated real time push notifications for instant work order assignments, status changes, and escalations, reducing acknowledgment lag for time sensitive tasks.",
      "Optimized list rendering with virtualization (FlatList/pagination) and memoization to handle large work order datasets smoothly, eliminating scroll jank on lower end devices.",
      "Implemented secure token based authentication with automatic refresh and protected navigation flows to safeguard sensitive facility and worker data.",
      "Developed reusable custom hooks and a normalized Redux store to centralize business logic, reducing code duplication and easing maintenance across screens.",
    ],
  },
  {
    company: "Constient Global Solutions",
    role: "Frontend Web Developer",
    period: "Jun 2022 - Dec 2023",
    points: [
      "Contributed to a cloud native log monitoring platform; built responsive layouts across breakpoints and implemented light/dark theme toggling with persistent preferences.",
      "Wrote unit tests for frontend components, improving code reliability and reducing regression risk.",
      "Collaborated in a remote agile team, delivering UI features iteratively across a 6 month contract.",
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

const ORBIT_RINGS = [
  {
    id: "o1",
    d: "M-12,62.5 a62,52 0 1,0 124,0 a62,52 0 1,0 -124,0",
    rotate: 12,
    dur: "12s",
    dot: "#43e0e8",
    r: 1.7,
  },
  {
    id: "o2",
    d: "M-2,62.5 a52,66 0 1,0 104,0 a52,66 0 1,0 -104,0",
    rotate: -24,
    dur: "16s",
    reverse: true,
    dot: "#8b7bff",
    r: 1.5,
  },
  {
    id: "o3",
    d: "M-10,62.5 a60,60 0 1,0 120,0 a60,60 0 1,0 -120,0",
    rotate: 48,
    dur: "20s",
    dot: "#6f9bff",
    r: 1.4,
  },
];

function OrbitSvg({ suffix }: { suffix: string }) {
  return (
    <svg
      viewBox="0 0 100 125"
      className="h-full w-full overflow-visible"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`og-${suffix}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#43e0e8" />
          <stop offset="50%" stopColor="#6f9bff" />
          <stop offset="100%" stopColor="#8b7bff" />
        </linearGradient>
        <filter
          id={`gl-${suffix}`}
          x="-120%"
          y="-120%"
          width="340%"
          height="340%"
        >
          <feGaussianBlur stdDeviation="0.9" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {ORBIT_RINGS.map((o) => (
        <g key={o.id} transform={`rotate(${o.rotate} 50 62.5)`}>
          <path
            id={`${o.id}-${suffix}`}
            d={o.d}
            stroke={`url(#og-${suffix})`}
            strokeWidth="0.55"
            strokeOpacity="0.65"
          />
          <circle r={o.r} fill={o.dot} filter={`url(#gl-${suffix})`}>
            <animateMotion
              dur={o.dur}
              repeatCount="indefinite"
              keyPoints={o.reverse ? "1;0" : "0;1"}
              keyTimes="0;1"
              calcMode="linear"
            >
              <mpath href={`#${o.id}-${suffix}`} />
            </animateMotion>
          </circle>
        </g>
      ))}
    </svg>
  );
}

function HeroPortrait() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px]">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-4 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-6 -right-10 h-44 w-44 rounded-full bg-accent-cyan/15 blur-3xl" />

      {/* orbit system BEHIND the photo (far side of the wrap) */}
      <div className="pointer-events-none absolute inset-0">
        <OrbitSvg suffix="b" />
      </div>

      {/* portrait card */}
      <div className="absolute left-1/2 top-1/2 aspect-[4/5] w-[78%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink-950 shadow-[0_45px_130px_-45px_rgba(109,93,252,0.75)]">
        <Image
          src={getAssetPath("/profile.png")}
          alt="Portrait of Hemanth Kumar"
          fill
          priority
          sizes="(max-width: 768px) 62vw, 300px"
          className="object-cover object-top saturate-[0.95] contrast-[1.03]"
        />
        {/* harmonize toward the palette + add depth */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/30 via-transparent to-accent-cyan/10 mix-blend-soft-light" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] ring-1 ring-inset ring-accent/25" />
      </div>

      {/* orbit system IN FRONT (near side of the wrap, only lower half shown) */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-screen"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 44%, #000 62%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 44%, #000 62%)",
        }}
      >
        <OrbitSvg suffix="f" />
      </div>
    </div>
  );
}

const revealViewport = { once: true, margin: "-70px" } as const;

const revealContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const revealItem = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Home() {
  const [activeSection, setActiveSection] = React.useState("home");
  const [menuOpen, setMenuOpen] = React.useState(false);
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
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:py-5">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="font-display text-lg font-bold tracking-tight text-fg"
          >
            hemanth<span className="text-accent">.</span>
          </a>
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
          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-fg transition-colors hover:bg-white/10 md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="overflow-hidden border-t border-white/5 bg-ink-950/90 backdrop-blur-xl md:hidden"
            >
              <ul className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4 text-sm">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block rounded-lg px-3 py-3 capitalize transition-colors ${
                          isActive
                            ? "bg-white/5 text-fg"
                            : "text-mute hover:bg-white/5 hover:text-fg"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="btn btn-primary w-full"
                  >
                    Get in touch
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[calc(100dvh-72px)] max-w-6xl items-center overflow-hidden px-6 py-14 md:py-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-[1.05fr_1fr]"
        >
          <div className="space-y-7">
            <div className="flex flex-wrap gap-2">
              {HERO_TAGS.map((tag) => (
                <span key={tag} className="pill">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
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
            <HeroPortrait />
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
      <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <motion.p
            variants={revealItem}
            className="text-sm font-medium uppercase tracking-[0.22em] text-accent-soft"
          >
            About
          </motion.p>
          <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr]">
            <motion.p
              variants={revealItem}
              className="font-display text-2xl font-medium leading-snug text-fg md:text-3xl"
            >
              I care about the layer beneath the framework — the reason things
              work, and why they hold up when the happy path breaks.
            </motion.p>
            <motion.div variants={revealItem} className="space-y-4 text-mute">
              <p>
                Currently a Software Engineer at Avacend Inc, shipping React
                Native &amp; Expo apps for facility teams. Before that, frontend
                web at Constient Global Solutions.
              </p>
              <p>
                I&apos;m based in Bengaluru and open to frontend, full-stack, and
                mobile roles where clean experiences and strong fundamentals
                matter.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <motion.div
          variants={revealItem}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-soft">
            Skills
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-fg md:text-4xl">
            The stack I build with
          </h2>
          <p className="mt-3 max-w-2xl text-mute">
            Languages, frameworks, and tooling across frontend, mobile, backend,
            data, and deployment — the stack I reach for to ship reliable
            products.
          </p>
        </motion.div>
        <motion.div
          className="mt-10 gap-5 sm:columns-2 lg:columns-3"
          variants={revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          {SKILL_GROUPS.map((group) => (
            <motion.div
              key={group.title}
              variants={revealItem}
              className="surface surface-hover mb-5 break-inside-avoid rounded-2xl p-6"
            >
              <div className="flex items-center gap-2.5">
                <span className="h-4 w-1 rounded-full bg-accent-soft" />
                <h3 className="font-display text-base font-semibold text-fg">
                  {group.title}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item.name} className="pill">
                    {React.createElement(item.icon as React.ElementType, {
                      className: "h-3.5 w-3.5 shrink-0 text-accent-soft",
                      "aria-hidden": true,
                    })}
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <motion.div
          variants={revealItem}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-soft">
            Projects
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-fg md:text-4xl">
            Selected work
          </h2>
          <p className="mt-3 max-w-2xl text-mute">
            Web platforms and production mobile apps built for scale, usability,
            and reliability.
          </p>
          <div className="divider mt-6 max-w-xl" />
        </motion.div>

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
              <motion.div
                variants={revealItem}
                initial="hidden"
                whileInView="show"
                viewport={revealViewport}
              >
                <h3 className="flex items-center gap-2 font-display text-2xl font-semibold text-fg">
                  <span className="text-accent-soft">{group.icon}</span>
                  {group.title}
                </h3>
                <p className="mt-1 text-sm text-mute">{group.subtitle}</p>
              </motion.div>

              <motion.div
                className="grid gap-6 md:grid-cols-2"
                variants={revealContainer}
                initial="hidden"
                whileInView="show"
                viewport={revealViewport}
              >
                {group.items.map((project, index) => (
                  <motion.div variants={revealItem} key={project.slug}>
                    <Link
                      href={`/projects/${project.slug}`}
                      onClick={rememberScrollPosition}
                      className="surface surface-hover group block h-full overflow-hidden rounded-2xl"
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
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <motion.div
          variants={revealItem}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-soft">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-fg md:text-4xl">
            Where I&apos;ve worked
          </h2>
        </motion.div>
        <motion.div
          className="mt-10 space-y-5"
          variants={revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          {EXPERIENCE.map((exp) => (
            <motion.article
              key={exp.company}
              variants={revealItem}
              className="surface rounded-2xl p-7"
            >
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
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <motion.div
          variants={revealItem}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent-soft">
            Education
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-fg md:text-4xl">
            Academic background
          </h2>
        </motion.div>
        <motion.div
          className="mt-10 grid gap-5 md:grid-cols-2"
          variants={revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          {EDUCATION.map((item) => (
            <motion.article
              key={item.institute}
              variants={revealItem}
              className="surface surface-hover rounded-2xl p-7"
            >
              <h3 className="font-display text-lg font-semibold text-fg">
                {item.institute}
              </h3>
              <p className="mt-2 text-sm text-mute">{item.degree}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <motion.div
          className="surface relative overflow-hidden rounded-3xl p-6 text-center sm:p-10 md:p-16"
          variants={revealItem}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
        >
          <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-accent-blue/15 blur-3xl" />
          <motion.div
            className="relative"
            variants={revealContainer}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
          >
            <motion.p
              variants={revealItem}
              className="text-sm font-medium uppercase tracking-[0.22em] text-accent-soft"
            >
              Contact
            </motion.p>
            <motion.h2
              variants={revealItem}
              className="mt-3 font-display text-3xl font-bold text-fg md:text-5xl"
            >
              Let&apos;s build something.
            </motion.h2>
            <motion.p
              variants={revealItem}
              className="mx-auto mt-4 max-w-2xl text-mute"
            >
              Open to frontend, full-stack, or mobile roles. If you want an
              engineer who ships clean experiences and works closely with product,
              let&apos;s talk.
            </motion.p>
            <motion.div
              variants={revealItem}
              className="mt-9 flex flex-wrap items-center justify-center gap-3 text-sm"
            >
              <a
                href="mailto:Hemanth.workemail@gmail.com"
                className="btn btn-primary max-w-full break-all"
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
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <footer className="border-t border-white/5 py-8 text-center text-sm text-mute">
        © 2026 Hemanth Kumar. Built with Next.js, TypeScript &amp; Tailwind.
      </footer>
    </main>
  );
}
