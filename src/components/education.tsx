import * as React from "react";
import { GraduationCap, Calendar } from "lucide-react";

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
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-muted-foreground">{edu.degree}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
