import { notFound } from "next/navigation";
import { ProjectContent } from "./ProjectContent";
import { getAssetPath } from "@/utils/path";

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
    github: "https://github.com/Hemanthx96/PupMatcher",
    demo: "https://pupmatcher.demo.com",
    images: [
      getAssetPath("/projects/pupmatcher/PupMatcher/1.png"),
      getAssetPath("/projects/pupmatcher/PupMatcher/2.png"),
      getAssetPath("/projects/pupmatcher/PupMatcher/3.png"),
    ],
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
    github: "https://github.com/Hemanthx96/shippers-web",
    demo: "https://moveeasy.demo.com",
    images: [
      getAssetPath("/projects/moveeasy/MoveEasy/1.png"),
      getAssetPath("/projects/moveeasy/MoveEasy/2.png"),
    ],
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
    images: [
      getAssetPath("/projects/figmamerch/Figma Merch Store/1.png"),
      getAssetPath("/projects/figmamerch/Figma Merch Store/2.png"),
      getAssetPath("/projects/figmamerch/Figma Merch Store/3.png"),
      getAssetPath("/projects/figmamerch/Figma Merch Store/4.png"),
    ],
  },
} as const;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return <ProjectContent project={project} />;
}
