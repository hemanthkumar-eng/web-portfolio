import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#f3e6d3] py-24 px-4 text-[#5c4432]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <p className="mb-8 text-[#6f5441]">
          Please select a specific project to view its details.
        </p>
        <Link href="/#projects" className="font-medium text-[#5c4432] hover:underline">
          ← Back to Projects Overview
        </Link>
      </div>
    </div>
  );
}
