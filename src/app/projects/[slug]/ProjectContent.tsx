"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ImageCarousel } from "@/components/ImageCarousel";

interface Project {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  github: string;
  demo: string;
  images: readonly string[];
}

export function ProjectContent({ project }: { project: Project }) {
  const [isGithubHovered, setIsGithubHovered] = React.useState(false);
  const [isDemoHovered, setIsDemoHovered] = React.useState(false);
  
  return (
    <div className="min-h-screen bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ x: [0, -5] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              whileHover={{ 
                scale: 1.3,
                x: -8,
                rotate: -10,
                transition: { type: "tween" }
              }}
            >
              <motion.path
                d="m15 18-6-6 6-6"
                animate={{ pathLength: [0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.svg>
            <span className="font-mono">Back to Projects</span>
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          <span className="text-gradient">{project.title}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {project.tags.map((tag, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 text-sm text-white border border-purple-500/30"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <ImageCarousel images={project.images} />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="prose prose-invert max-w-none mb-8"
        >
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            {project.description}
          </p>
          <div className="glass-card rounded-xl p-8">
            <div className="whitespace-pre-line text-gray-300 leading-relaxed font-mono text-sm">
              {project.fullDescription}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-4 mb-8 flex-wrap"
        >
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsGithubHovered(true)}
            onMouseLeave={() => setIsGithubHovered(false)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-card text-white hover:glow-effect transition-all group"
            variants={{
              idle: { scale: 1, y: 0 },
              hover: { scale: 1.05, y: -2 },
            }}
            initial="idle"
          >
            <motion.div
              variants={{
                idle: {
                  rotate: [0, 5],
                  transition: {
                    rotate: { duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                  },
                },
                hover: {
                  rotate: 15,
                  scale: 1.2,
                  y: -2,
                  transition: {
                    type: "tween",
                    duration: 0.2,
                  },
                },
              }}
              animate={isGithubHovered ? "hover" : "idle"}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                  variants={{
                    idle: { pathLength: 1 },
                    hover: { pathLength: 1.1 },
                  }}
                />
                <motion.path
                  d="M9 18c-4.51 2-5-2-7-2"
                  animate={{ pathLength: [0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
              </motion.svg>
            </motion.div>
            <span className="font-mono">View on GitHub</span>
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsDemoHovered(true)}
            onMouseLeave={() => setIsDemoHovered(false)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-card text-white hover:glow-effect transition-all group"
            variants={{
              idle: { scale: 1, y: 0 },
              hover: { scale: 1.05, y: -2 },
            }}
            initial="idle"
          >
            <motion.div
              variants={{
                idle: {
                  scale: [1, 1.05],
                  transition: {
                    scale: { duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                  },
                },
                hover: {
                  x: 5,
                  scale: 1.2,
                  rotate: 10,
                  transition: {
                    type: "tween",
                    duration: 0.2,
                  },
                },
              }}
              animate={isDemoHovered ? "hover" : "idle"}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                  variants={{
                    idle: { pathLength: 1 },
                    hover: { pathLength: 1.1 },
                  }}
                />
                <motion.polyline
                  points="15 3 21 3 21 9"
                  animate={{ pathLength: [0, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.line
                  x1="10"
                  x2="21"
                  y1="14"
                  y2="3"
                  animate={{ pathLength: [0.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                />
              </motion.svg>
            </motion.div>
            <span className="font-mono">Live Demo</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

