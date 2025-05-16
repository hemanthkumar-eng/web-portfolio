"use client";

import * as React from "react";
import Link from "next/link";

const projects = {
  pupmatcher: {
    title: "PupMatcher",
    description:
      "Developed a responsive website that functions like a matchmaking platform for dogs, similar to Tinder. Allows users to view dog profiles and swipe through potential matches, creating an engaging and fun experience for dog owners seeking social connections for their pets.",
    fullDescription: `PupMatcher is an innovative platform designed to help dog owners find playmates and potential matches for their pets. The application combines the familiar swipe-based interface popularized by dating apps with a pet-focused approach.

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
    github: "https://github.com/yourusername/pupmatcher",
    demo: "https://pupmatcher.demo.com",
    images: ["/projects/pupmatcher/1.jpg", "/projects/pupmatcher/2.jpg"],
  },
  moveeasy: {
    title: "MoveEasy",
    description:
      "Created a responsive website to promote and showcase shipping services. Emphasized a clean, structured design and user-friendly navigation, allowing visitors to easily browse shipping options and service details.",
    fullDescription: `MoveEasy is a comprehensive shipping services platform that simplifies the process of finding and booking shipping services. The website provides a modern, user-friendly interface for customers to explore shipping options and get instant quotes.

Key Features:
- Instant Quote Calculator: Real-time shipping cost estimation
- Service Comparison: Side-by-side comparison of different shipping options
- Booking System: Streamlined process for scheduling shipments
- Track & Trace: Real-time shipment tracking
- Customer Dashboard: Personalized dashboard for managing shipments
- Admin Panel: Comprehensive admin interface for managing services

Technical Stack:
- Frontend: Next.js 13 with App Router
- UI Components: Shadcn UI
- State Management: React Query
- Styling: Tailwind CSS
- Backend: Node.js with Express
- Database: MongoDB
- Authentication: NextAuth.js
- Payment Integration: Stripe
- Analytics: Google Analytics`,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Stripe",
    ],
    github: "https://github.com/yourusername/moveeasy",
    demo: "https://moveeasy.demo.com",
    images: ["/projects/moveeasy/1.jpg", "/projects/moveeasy/2.jpg"],
  },
  figmamerch: {
    title: "Figma Merch Store",
    description:
      "The Figma Merch Store was an e-commerce website designed for selling Figma-branded merchandise. It allowed users to browse products, view detailed product descriptions, add items to their cart, and complete purchases through a checkout process.",
    fullDescription: `Figma Merch Store is a full-featured e-commerce platform built specifically for selling Figma-branded merchandise. The store provides a seamless shopping experience with a design-focused interface that reflects Figma's brand identity.

Key Features:
- Product Catalog: Organized display of merchandise with filtering and sorting
- Shopping Cart: Real-time cart management with persistent storage
- Secure Checkout: Multi-step checkout process with Stripe integration
- User Accounts: Personal accounts for order history and saved items
- Inventory Management: Real-time stock tracking and updates
- Admin Dashboard: Complete control over products, orders, and inventory

Technical Stack:
- Frontend: React with Redux Toolkit
- UI Framework: Material-UI
- State Management: Redux
- Styling: Styled Components
- Backend: Node.js with Express
- Database: PostgreSQL
- Payment Processing: Stripe
- Image Storage: Cloudinary
- Hosting: Vercel`,
    tags: ["React", "Node.js", "PostgreSQL", "Redux", "Stripe", "Material-UI"],
    github: "https://github.com/yourusername/figma-merch",
    demo: "https://figmamerch.demo.com",
    images: ["/projects/figmamerch/1.jpg", "/projects/figmamerch/2.jpg"],
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Project Not Found</h1>
          <Link href="/#work" className="text-primary hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/#work" className="text-primary hover:underline mb-8 block">
          ← Back to Projects
        </Link>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-lg text-gray-300 mb-8">{project.description}</p>
          <div className="whitespace-pre-line text-gray-300">
            {project.fullDescription}
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <span>View on GitHub</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
