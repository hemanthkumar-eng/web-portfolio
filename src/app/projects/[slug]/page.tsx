import { notFound } from "next/navigation";
import { ProjectContent } from "./ProjectContent";
import { getAssetPath } from "@/utils/path";

const projects = {
  noseboop: {
    title: "NoseBoop",
    category: "web",
    description:
      "Reimagined the classic dog matchmaking experience into NoseBoop, India's premier dog social app that connects pet parents across cities like Mumbai and Bengaluru to find the perfect playmate.",
    fullDescription: `NoseBoop is India's premier dog social app built to help pet parents find new friends for their furry companions across cities from Mumbai to Bengaluru. The experience combines a playful swipe interface with robust safety tooling so owners can confidently arrange meetups.

Key Features:
- Profile Creation: Users can create detailed profiles for their dogs, including photos, breed information, age, temperament, and play style preferences
- Smart Matching: Algorithm considers factors like size, energy level, and play style compatibility
- Real-time Chat: Built-in messaging system for matched dog owners to arrange meetups
- Location-based Matching: Shows potential matches within a specified radius
- Photo Gallery: Multiple photo upload capability with carousel display
- User Authentication: Secure login and profile management

Technical Stack:
- Frontend: React.js with TypeScript
- Styling: Tailwind CSS for responsive design
- Backend: Node.js with Express
- Database: PostgreSQL for user and pet data
- Authentication: JWT-based auth system
- Image Storage: AWS S3 for photo storage
- Deployment: Docker containers on AWS ECS`,
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "AWS",
    ],
    github: "https://github.com/Hemanthx96/PupMatcher",
    demo: "https://nose-boop.vercel.app/",
    images: [
      getAssetPath("/projects/pupmatcher/PupMatcher/1.png"),
      getAssetPath("/projects/pupmatcher/PupMatcher/2.png"),
      getAssetPath("/projects/pupmatcher/PupMatcher/3.png"),
    ],
  },
  moveeasy: {
    title: "MoveEasy",
    category: "web",
    description:
      "Created a responsive website to promote and showcase shipping services. Emphasized a clean, structured design and user-friendly navigation, allowing visitors to easily browse shipping options and service details.",
    fullDescription: `MoveEasy is a comprehensive shipping services platform that simplifies the process of finding and booking shipping services. The website provides a modern, user-friendly interface for customers to explore shipping options and get instant quotes.

Key Features:
- Unified Marketing + App Experience: Responsive Next.js site with rich service pages, About/Contact sections, and Indian-market branding.
- Secure Account Management: JWT-backed auth plus profile dropdown for quick access to shipments and account actions.
- Address Book & Validation: Persistent address management with PIN-code validation and redirect-aware flows for shipment creation.
- Shipment Lifecycle Tools: Mandatory pickup scheduling, shipment list/detail views, tracking link, and dashboard insights.
- Mocked Payments & Future-Ready API: Razorpay-compatible mock endpoints so the UI behaves like production while waiting for live keys.
- Deployment & Ops Ready: Vercel frontend + Render backend setup, documented env vars, Git secret hygiene, and health check endpoint.

Technical Stack:
- Frontend: Next.js 16 (React framework)
- TypeScript
- UI Framework: Bootstrap 5
- API Client: Axios
- Backend: Node.js with Express.js
- Database: MongoDB with Mongoose
- Authentication: JWT
- Payment Gateway: Razorpay (test mode)
- Hosting: Frontend on Vercel (free tier)
- Hosting: Backend on Render (free tier)
- Database Hosting: MongoDB Atlas (free tier)`,
    tags: [
      "Next.js",
      "TypeScript",
      "Bootstrap 5",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Razorpay",
    ],
    github: "https://github.com/Hemanthx96/shippers-web",
    demo: "https://shippers-web-chi.vercel.app/",
    images: [
      getAssetPath("/projects/moveeasy/MoveEasy/1.png"),
      getAssetPath("/projects/moveeasy/MoveEasy/2.png"),
    ],
  },
  "impact-invest": {
    title: "Impact Invest Platform",
    category: "web",
    description:
      "Portfolio-ready climate micro‑investment platform built to showcase India-focused climate ventures with a storytelling-led marketing site, investor dashboard preview, and API-backed flows for auth, data, and payments.",
    fullDescription: `Impact Invest is a portfolio-ready climate micro‑investment platform designed to showcase India-focused impact ventures. It combines a storytelling-led marketing site, an investor-style dashboard, and a modular API that simulates authentication, payments, and venture data – making it ideal as a live demo and case study in a portfolio.

Key Features:
- Marketing Experience: Design-forward landing pages for ventures, climate impact story, partners, newsroom, FAQs, and contact, tuned specifically for the Indian climate-investing context.
- Venture Pipeline & Profiles: Curated list of ventures with sector filters and rich detail views including highlights, KPIs, ticket sizes, and impact thesis.
- Investor Dashboard Preview: Modern cockpit with summary tiles, pledge tracker table, activity feed, venture progress bars, and impact mix visualizations built to mirror a real LP dashboard.
- API-backed Flows: Contact form and venture data powered by an Express API with schema validation and safe fallbacks for environments without a live database.
- Auth & Payment Scaffolding: JWT access/refresh token helpers and Razorpay-style order/signature endpoints implemented as mocked flows, ready to be wired into real credentials later.
- Deployment-Ready Monorepo: Separate frontend and API workspaces, shared configuration, environment templates, and documentation geared for cloud hosting.

Technical Stack:
- Frontend: React with Next.js (App Router) and TypeScript
- UI & Styling: Bootstrap 5 plus custom CSS with scroll-based reveal animations and responsive layout components
- State & Data: SWR hooks and Axios client with interceptors for API calls
- Backend: Node.js, Express, and TypeScript
- Data Layer: Mongoose models prepared for MongoDB with optional connection skipping for dummy/demo setups
- Auth & Security: JWT helper service (access and refresh tokens) with cookie-based refresh storage (mock user)
- Payments: Razorpay SDK integration for order creation and signature verification in test mode
- Config & Validation: Zod-based environment validation and typed configuration for safe builds and deploys
- Hosting: Frontend optimized for static hosting; API designed for Node-based web service hosting`,
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Bootstrap 5",
      "SWR",
      "Axios",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Razorpay",
      "Zod",
    ],
    github: "https://github.com/yourusername/impact-invest",
    demo: "https://impact-invest-zeta.vercel.app/",
    images: [
      getAssetPath("/projects/figmamerch/Figma Merch Store/1.png"),
      getAssetPath("/projects/figmamerch/Figma Merch Store/2.png"),
      getAssetPath("/projects/figmamerch/Figma Merch Store/3.png"),
      getAssetPath("/projects/figmamerch/Figma Merch Store/4.png"),
    ],
  },
  "facilityops-mobile": {
    title: "FacilityOps Mobile Suite",
    category: "app",
    description:
      "Cross-platform React Native + Expo app delivering SLA dashboards, AI-powered work order predictions, and deep-link aware navigation for facility supervisors and technicians.",
    fullDescription: `FacilityOps Mobile Suite modernizes facility management with a unified mobile experience for supervisors and frontline technicians. Built with React Native 0.76 + Expo SDK 52, it combines delightful NativeWind UI, Redux-driven caching, and expo-secured authentication to keep field teams productive online or offline.

Key Features:
- Cross-Platform Experience: Pixel-perfect layouts for iOS/Android, responsive tablet views, orientation awareness, adaptive typography, and dark mode support.
- Magic Link Authentication: Passwordless login backed by JWT tokens, secure storage via Expo SecureStore, and persistent sessions across app restarts.
- Comprehensive Dashboard: Native charts (React Native SVG, Victory) for SLA compliance, planned vs unplanned breakdowns, backlog aging, and recently completed work orders.
- Work Orders Lifecycle: Full CRUD with list/detail screens, search, pagination, color-coded priority badges, SLA timers, and multi-criteria filtering (status, type, category, date range, compliance, overdue).
- Workers Performance: Dedicated performance dashboard tracking completion rates, overdue actions, and per-worker productivity with sortable tables and pagination.
- Advanced Filtering & Smart Caching: Redux Toolkit + Context powered caching, cached filter options with 7-day expiry, intelligent refresh triggers, and optimistic UI updates.
- AI-Powered Insights: Predictive analytics for work order trends, SLA risk scoring, worker assignment suggestions, cost estimation, and actionable coaching tips.
- Deep Linking & Navigation: React Navigation 7 Native Stack + Bottom Tabs with Expo Linking config for authenticated/unauthenticated flows, role-aware redirection, and push notification deep links.

Tech Stack:
- Frontend: React Native 0.76.9, Expo SDK 52, TypeScript 5.3, NativeWind
- State: Redux Toolkit 2.8, AuthContext, FilterContext, OrientationContext
- Navigation: React Navigation 7 (Native Stack, Bottom Tabs) with deep linking
- UI Libraries: React Native SVG Charts, Victory Native, React Native Chart Kit, Expo Vector Icons, Gesture Handler, Reanimated
- API & Networking: Axios with request/response interceptors, JWT token refresh, automatic auth header injection
- Storage: Expo SecureStore for sensitive auth, AsyncStorage for cached filters/preferences
- DevOps: ESLint, Prettier, TypeScript strict mode, Expo CLI, Railway-hosted backend APIs
- Deployment: EAS Build profiles (preview APK, production AAB/IPA) and platform-specific icons/splash screens`,
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Redux Toolkit",
      "NativeWind",
      "React Navigation",
      "Victory Native",
      "AI Insights",
      "SecureStore",
    ],
    github: "https://github.com/Hemanthx96/facilityops-mobile",
    images: [getAssetPath("/projects/facilityops/dashboard.svg")],
    isProprietary: true,
  },
  "tech-maintenance": {
    title: "Tech Maintenance",
    category: "app",
    description:
      "FM360’s React Native mobility companion that delivers unified theming, deep-link aware authentication, multimedia work order flows, and resilient Redux caching so technicians stay productive even when the network struggles.",
    fullDescription: `Tech Maintenance extends FM360's facility operations stack with a field-ready mobility companion. Built on React Native 0.79, Expo SDK 53, React 19, and TypeScript 5.8, the app combines deep-link magic-link auth, device integrations, and cache-smart Redux slices to keep supervisors and technicians in sync across iOS, Android, and tablets.

Key Features:
- Magic-Link Authentication: Passwordless sign-in with deep linking, JWT verification, Redux hydration, secure token storage, and automatic session restoration after app restarts.
- Responsive Dashboard Analytics: Donut/radial charts, SLA trend tiles, backlog callouts, recent activity feeds, shimmer loaders, and tablet-aware layouts driven by smart cache hooks (5-minute max-age, stale-while-revalidate).
- Work Order Lifecycle: Cached list fetching with filter tabs, pull-to-refresh, animated success banners, color-coded priority/status chips, and detail views featuring technician timelines, SLA metadata, media galleries (video/audio) with decoder fallbacks and secure delete actions.
- Asset Documentation Workflow: Barcode scans, photo/video capture, and audio notes streamed into a batch media uploader with JWT headers, file validation, progress callbacks, and optimistic navigation back to work orders.
- Media & Evidence Capture: Dedicated capture flows manage permissions, timers, retries, and local staging before upload, while smart media hooks hydrate detail screens the moment uploads complete.
- Notification Center: Gradient cards, priority badges, mark-all-read, pull-to-refresh, and tab badges powered by a singleton notification service plus shared context state.
- Theming & Orientation: Persistent light/dark/system preferences, unlocked tablet orientation support, and token-driven typography/spacing to keep surfaces consistent.
- Smart Caching & Middleware: Redux slices (auth, dashboard, work orders, media, UI) join cache middleware that enforces rate limits, configurable max-age windows, background refresh, and optimistic UI hints across reusable hooks.
- Device Integrations: Barcode scanning, camera, microphone, and audio playback powered by Expo modules; asset scans support torch toggles, framing overlays, and landscape-friendly controls.
- DevOps & Delivery: Strict TypeScript + ESLint/Prettier, Expo CLI, EAS Build profiles for preview and production, adaptive icons, splash art, and Railway-hosted backend APIs.

Tech Stack:
- Frontend: React Native 0.79, Expo SDK 53, React 19, TypeScript 5.8
- Navigation: React Navigation 7 (Native Stack + custom Bottom Tabs) with Expo Linking
- State & Data: Redux Toolkit 2.9, React Context, cache middleware, SecureStore + AsyncStorage persistence
- UX Libraries: Expo Camera, Expo AV/Audio, react-native-svg, expo-linear-gradient, vector icons, gesture handler, reanimated
- Networking: Fetch-with-retry utilities, JWT auth headers, Railway-hosted APIs
- Storage & Media: Secure token storage, AsyncStorage fallback, FileSystem staging, custom batch media upload with progress + deletion support
- Tooling & Delivery: Expo CLI, EAS Build (preview APK + production AAB/IPA), strict tsconfig, ESLint/Prettier, Railway infrastructure, downloadable preview artifacts`,
    tags: [
      "React Native",
      "Expo SDK 53",
      "TypeScript",
      "Redux Toolkit",
      "SecureStore",
      "AsyncStorage",
      "React Navigation",
      "Expo Camera",
      "Expo AV",
    ],
    github: "https://github.com/Hemanthx96/tech-maintenance",
    images: [getAssetPath("/projects/techmaintenance/dashboard.svg")],
    isProprietary: true,
  },
  "api-visualizer": {
    title: "API Visualizer",
    category: "web",
    description:
      "A lightweight, production-ready web application for exploring and visualizing JSON APIs. The app provides a clean, intuitive interface similar to Postman, allowing developers to test API endpoints, analyze responses, and understand data structures.",
    fullDescription: `API Visualizer is a lightweight, production-ready web application for exploring and visualizing JSON APIs. The app provides a clean, intuitive interface similar to Postman, allowing developers to test API endpoints, analyze responses, and understand data structures. API Visualizer simplifies API exploration with smart table views, schema inference, data visualization, and request history management.

Key Features:
- Request Builder & Execution: URL input with GET method support, editable headers, Axios-based requests with duration tracking, and robust error handling including CORS-friendly messaging, timeouts, and network failures.
- Multi-Tab Response Viewer: Raw JSON viewer with collapsible nodes, smart table view for arrays (sorting, filtering, pagination), interactive bar/line charts for numeric data, inferred schema tree visualization, and JSON diff comparison against previous responses.
- Advanced Data Analysis: Client-side filtering with text, exact match, range, and exists/missing filters supporting nested fields, configurable chart axes for data visualization, and automatic schema inference for complex JSON structures.
- Enhanced UX Features: Fullscreen response mode, light/dark theme toggle with theme-aware UI elements, synchronized dual scrollbars (top and bottom) for wide content, request history with localStorage persistence (last 5 requests), and one-click request replay.
- Production-Ready Polish: Loading states, friendly error messages, empty state hints, smart button disabling during requests, and responsive design with modern UI components.

Technical Stack:
- Frontend Framework: React 18
- Language: TypeScript
- Build Tool: Vite
- HTTP Client: Axios
- Data Visualization: Recharts
- Styling: CSS Variables (Theme System)
- State Management: React Hooks (useState, useMemo, useEffect)
- Storage: LocalStorage API
- Hosting: Vercel (free tier)
- Alternative Hosting: Render (free tier)`,
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Axios",
      "Recharts",
      "CSS Variables",
      "LocalStorage",
    ],
    github: "https://github.com/Hemanthx96/API-Visualizer",
    demo: "https://api-visualizer-pi.vercel.app/",
    images: [getAssetPath("/projects/apivisualizer/1.png")],
  },
} as const;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
