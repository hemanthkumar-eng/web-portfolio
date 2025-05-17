import * as React from "react";

export function Education() {
  const education = [
    {
      institution: "RNS Institute of Technology, Bengaluru",
      degree: "Bachelor of Engineering in Electronics and Communication",
    },
    {
      institution: "Dayananda Sagar Institute of Technology, Bengaluru",
      degree: "Diploma in Electronics and Communication Engineering",
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Education
      </h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="glass-effect group relative overflow-hidden rounded-xl p-6 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex justify-between items-start">
              <div className="flex gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-muted-foreground">{edu.degree}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
