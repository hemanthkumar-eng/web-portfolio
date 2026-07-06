import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 text-fg">
      <div className="surface w-full max-w-xl rounded-3xl p-10 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
          404 Error
        </p>
        <h2 className="mb-4 font-display text-4xl font-bold">Page Not Found</h2>
        <p className="mb-8 text-mute">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
}
