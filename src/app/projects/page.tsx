import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-rcb-deeper py-24 px-4 text-rcb-cream">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <p className="mb-8 text-rcb-muted">
          Please select a specific project to view its details.
        </p>
        <Link href="/#projects" className="font-medium text-rcb-gold hover:underline">
          ← Back to Projects Overview
        </Link>
      </div>
    </div>
  );
}
