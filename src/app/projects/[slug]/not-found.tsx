import Link from "next/link";

export default function NotFound() {
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
