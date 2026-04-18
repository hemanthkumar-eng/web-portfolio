"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Project {
  title: string;
  category: "web" | "app";
  description: string;
  fullDescription: string;
  tags: readonly string[];
  github: string;
  demo?: string;
  images: readonly string[];
  isProprietary?: boolean;
}

export function ProjectContent({ project }: { project: Project }) {
  const router = useRouter();

  const handleBack = React.useCallback(() => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      if (!sessionStorage.getItem("homeScrollY")) {
        sessionStorage.setItem("homeScrollHash", "projects");
      }
      router.back();
    } else {
      if (!sessionStorage.getItem("homeScrollY")) {
        sessionStorage.setItem("homeScrollHash", "projects");
      }
      router.push("/#projects");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-rcb-deeper py-24 px-4 text-rcb-cream">
      <div className="max-w-6xl mx-auto">
        <button
          type="button"
          onClick={handleBack}
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-rcb-gold hover:opacity-90"
        >
          ← Back to Projects
        </button>

        <div className="mb-6 flex flex-col gap-3">
          <span className="uppercase text-xs tracking-[0.16em] text-rcb-muted">
            {project.category === "app" ? "Mobile App" : "Web Experience"}
          </span>
          <h1 className="text-4xl font-bold md:text-5xl">{project.title}</h1>
        </div>

        <div className="mb-8 flex flex-wrap gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="royal-button inline-flex items-center gap-2 rounded-xl bg-rcb-red px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-rcb-gold/50 transition hover:brightness-110"
          >
            View on GitHub
          </a>
          {project.demo && !project.isProprietary && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="royal-button inline-flex items-center gap-2 rounded-xl border-2 border-rcb-gold bg-rcb-dark px-5 py-2.5 text-sm font-semibold text-rcb-cream transition hover:bg-rcb-gold/15"
            >
              Live Demo
            </a>
          )}
          {project.isProprietary && project.category === "app" && (
            <p className="max-w-xl text-xs text-rcb-muted">
              This is a proprietary client mobile app, so I can&apos;t share a
              public demo or store link. The case study and visuals are shared
              at a high level without exposing confidential details.
            </p>
          )}
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-full border border-rcb-gold/40 bg-rcb-dark px-4 py-1.5 text-sm text-rcb-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.images && project.images.length > 0 && (
          <div className="mb-12 overflow-hidden rounded-2xl border border-rcb-gold/40 bg-rcb-dark/90">
            {project.demo && !project.isProprietary ? (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={project.images[0]}
                  alt={`${project.title} screenshot`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </Link>
            ) : (
              <img
                src={project.images[0]}
                alt={`${project.title} screenshot`}
                className="w-full h-auto object-cover"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            )}
          </div>
        )}

        <div className="mb-8 max-w-none">
          <p className="mb-8 text-lg leading-relaxed text-rcb-muted">
            {project.description}
          </p>
          <div className="rounded-2xl border border-rcb-gold/40 bg-rcb-dark/90 p-8">
            <div className="whitespace-pre-line text-sm leading-relaxed text-rcb-muted">
              {project.fullDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
