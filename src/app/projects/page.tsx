import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen px-6 py-24 text-fg">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 font-display text-4xl font-bold">Projects</h1>
        <p className="mb-8 text-mute">
          Please select a specific project to view its details.
        </p>
        <Link
          href="/#projects"
          className="font-medium text-accent-blue hover:underline"
        >
          ← Back to Projects Overview
        </Link>
      </div>
    </div>
  );
}
