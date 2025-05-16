import * as React from "react";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "PupMatcher",
      description:
        "Developed a responsive website that functions like a matchmaking platform for dogs, similar to Tinder. Allows users to view dog profiles and swipe through potential matches, creating an engaging and fun experience for dog owners seeking social connections for their pets.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "MoveEasy",
      description:
        "Created a responsive website to promote and showcase shipping services. Emphasized a clean, structured design and user-friendly navigation, allowing visitors to easily browse shipping options and service details.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Figma Merch Store",
      description:
        "The Figma Merch Store was an e-commerce website designed for selling Figma-branded merchandise. It allowed users to browse products, view detailed product descriptions, add items to their cart, and complete purchases through a checkout process.",
      tags: ["React", "Node.js", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-effect group relative overflow-hidden rounded-xl p-6 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity group-hover:opacity-100" />
            <h3 className="text-xl font-medium mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>Code</span>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Demo</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
