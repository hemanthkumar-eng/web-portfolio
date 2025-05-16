import Link from "next/link";

export default function PupMatcherPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <Link href="/#work" className="text-primary hover:underline mb-8 block">
          ← Back to Projects
        </Link>

        <h1 className="text-4xl font-bold mb-4">PupMatcher</h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "PostgreSQL",
            "AWS",
          ].map((tag, i) => (
            <span
              key={i}
              className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert max-w-none mb-8">
          <p className="text-lg text-gray-300 mb-8">
            Developed a responsive website that functions like a matchmaking
            platform for dogs, similar to Tinder. Allows users to view dog
            profiles and swipe through potential matches, creating an engaging
            and fun experience for dog owners seeking social connections for
            their pets.
          </p>
          <div className="whitespace-pre-line text-gray-300">
            {`PupMatcher is an innovative platform designed to help dog owners find playmates and potential matches for their pets. The application combines the familiar swipe-based interface popularized by dating apps with a pet-focused approach.

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
- Deployment: Docker containers on AWS ECS`}
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <a
            href="https://github.com/Hemanthx96/PupMatcher"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
          >
            <span>View on GitHub</span>
          </a>
          <a
            href="https://pupmatcher.demo.com"
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
