import * as React from "react";
import Image from "next/image";
import { getAssetPath } from "@/utils/path";

type ShowcaseProject = {
  title: string;
  description: string;
  highlights: readonly string[];
  image: string;
  github: string;
  demo: string;
  demoLabel?: string;
};

const webProjects: readonly ShowcaseProject[] = [
  {
    title: "MoveEasy",
    description:
      "Created a responsive website to promote and showcase shipping services. Emphasized a clean, structured design and user-friendly navigation, allowing visitors to easily browse shipping options and service details.",
    highlights: [
      "Next.js marketing + shipment dashboard workflows",
      "JWT-secured customer accounts with saved addresses",
      "Shipment lifecycle management, tracking, and quoting",
      "Mock Razorpay checkout and future-ready APIs",
    ],
    image: getAssetPath("/projects/moveeasy/MoveEasy/1.png"),
    github: "https://github.com/Hemanthx96/shippers-web",
    demo: "https://shippers-web-chi.vercel.app/",
  },
  {
    title: "PupMatcher",
    description:
      "Developed a responsive website that functions like a matchmaking platform for dogs, similar to Tinder. Allows users to view dog profiles and swipe through potential matches, creating an engaging and fun experience for dog owners seeking social connections for their pets.",
    highlights: [
      "Swipe-based matchmaking with playful micro-interactions",
      "Location + temperament filters tailored for better matches",
      "Secure profiles with galleries, bios, and in-app chat",
    ],
    image: getAssetPath("/projects/pupmatcher/PupMatcher/1.png"),
    github: "https://github.com/Hemanthx96/PupMatcher",
    demo: "https://pupmatcher.demo.com",
  },
  {
    title: "Figma Merch Store",
    description:
      "An e-commerce experience for Figma-branded merchandise featuring curated collections, interactive product cards, and a smooth checkout flow with persistent carts.",
    highlights: [
      "Curated catalog with filtering, sorting, and rich product cards",
      "Persistent cart plus Stripe-style multi-step checkout",
      "Admin-ready inventory + order management dashboard",
    ],
    image: getAssetPath("/projects/figmamerch/Figma Merch Store/1.png"),
    github: "https://github.com/yourusername/figma-merch",
    demo: "https://figmamerch.demo.com",
  },
] as const;

const appProjects: readonly ShowcaseProject[] = [
  {
    title: "FacilityOps Mobile Suite",
    description:
      "Cross-platform React Native + Expo application that powers facility supervisors and technicians with real-time SLA insights, AI-powered work order predictions, and deep-link aware navigation.",
    highlights: [
      "Magic link auth with SecureStore persistence",
      "AI insights for SLA risk & workforce allocation",
      "Smart caching with Redux Toolkit + Context",
      "Deep linking across native stack & tabs",
    ],
    image: getAssetPath("/projects/facilityops/dashboard.svg"),
    github: "https://github.com/Hemanthx96/facilityops-mobile",
    demo: "https://expo.dev/@Hemanthx96/facilityops-mobile",
    demoLabel: "📱 Expo Preview",
  },
  {
    title: "Tech Maintenance",
    description:
      "FM360’s React Native mobility companion that ships custom themes, deep-link-aware authentication, dashboard analytics, and resilient Redux caching so crews keep working through spotty connectivity.",
    highlights: [
      "Magic-link auth, secure token storage, and session restore",
      "Responsive donut/radial dashboards with shimmer loaders",
      "Work order lifecycle with cached filters + media galleries",
      "Batch media uploads, barcode scans, and notification center",
      "Theming, orientation unlock, and cache middleware hooks",
    ],
    image: getAssetPath("/projects/techmaintenance/dashboard.svg"),
    github: "https://github.com/Hemanthx96/tech-maintenance",
    demo: "https://expo.dev/@Hemanthx96/tech-maintenance",
    demoLabel: "📱 Expo Preview",
  },
] as const;

function ShowcaseCard({
  project,
  badge,
  demoFallback,
}: {
  project: ShowcaseProject;
  badge: string;
  demoFallback: string;
}) {
  return (
    <div className="bg-gradient-to-br from-black/90 via-black/70 to-black/90 border border-white/10 rounded-2xl overflow-hidden grid md:grid-cols-[1.3fr,1fr]">
      <div className="p-8 flex flex-col gap-5">
        <span className="uppercase text-xs tracking-[0.4em] text-white/60 font-mono">
          {badge}
        </span>
        <h3 className="text-3xl font-semibold text-white">{project.title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>
        {project.highlights.length > 0 && (
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-white/80">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3"
              >
                {highlight}
              </li>
            ))}
          </ul>
        )}
        <div className="flex gap-4 text-sm font-mono flex-wrap">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            🔗 GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80"
          >
            {project.demoLabel ?? demoFallback}
          </a>
        </div>
      </div>
      <div className="relative min-h-[320px] bg-black/60">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section className="mb-12 space-y-12">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Web Projects
          </h2>
          <span className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
        </div>
        <div className="space-y-8">
          {webProjects.map((project) => (
            <ShowcaseCard
              key={project.title}
              project={project}
              badge="Web Project"
              demoFallback="🌐 Live Demo"
            />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            App Experience
          </h2>
          <span className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
        </div>
        <div className="space-y-8">
          {appProjects.map((project) => (
            <ShowcaseCard
              key={project.title}
              project={project}
              badge="Mobile App"
              demoFallback="📱 View Preview"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
