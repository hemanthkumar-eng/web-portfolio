import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen px-6 py-16 md:py-24 text-fg">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 font-display text-4xl font-bold">
          Project Not Found
        </h1>
        <Link
          href="/#projects"
          className="font-medium text-accent-blue hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
