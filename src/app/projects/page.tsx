import { redirect } from "next/navigation";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <p className="text-gray-400 mb-8">
          Please select a specific project to view its details.
        </p>
        <Link href="/#work" className="text-primary hover:underline">
          ← Back to Projects Overview
        </Link>
      </div>
    </div>
  );
}
