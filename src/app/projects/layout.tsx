export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-black">{children}</div>;
}

export const metadata = {
  title: "Projects | Portfolio",
  description: "View my project portfolio",
};
