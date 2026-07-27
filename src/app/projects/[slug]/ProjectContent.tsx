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
    <div className="min-h-screen px-6 py-16 md:py-24 text-fg">
      <div className="mx-auto max-w-5xl">
        <button
          type="button"
          onClick={handleBack}
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-accent-blue transition hover:opacity-80"
        >
          ← Back to projects
        </button>

        <div className="mb-6 flex flex-col gap-3">
          <span className="pill w-fit uppercase tracking-[0.16em]">
            {project.category === "app" ? "Mobile App" : "Web Experience"}
          </span>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
            {project.title}
          </h1>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View on GitHub
          </a>
          {project.demo && !project.isProprietary && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Live Demo
            </a>
          )}
          {project.isProprietary && project.category === "app" && (
            <p className="max-w-xl text-xs text-mute">
              This is a proprietary client mobile app, so I can&apos;t share a
              public demo or store link. The case study and visuals are shared at
              a high level without exposing confidential details.
            </p>
          )}
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="pill">
              {tag}
            </span>
          ))}
        </div>

        {project.images && project.images.length > 0 && (
          <div className="surface mb-12 overflow-hidden rounded-2xl">
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
                  className="h-auto w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </Link>
            ) : (
              <img
                src={project.images[0]}
                alt={`${project.title} screenshot`}
                className="h-auto w-full object-cover"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            )}
          </div>
        )}

        <div className="max-w-none">
          <p className="mb-8 text-lg leading-relaxed text-mute">
            {project.description}
          </p>
          <div className="surface rounded-2xl p-6 md:p-8">
            <div className="whitespace-pre-line text-sm leading-relaxed text-mute">
              {project.fullDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
