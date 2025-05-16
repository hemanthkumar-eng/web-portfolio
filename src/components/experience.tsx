import * as React from "react";
import { Calendar, Building2 } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Avacend Inc",
      role: "App Developer",
      period: "02/2025 - Present",
      points: [
        "Developed a mobile dashboard application for supervisors using static Excel-based data to provide on the go access to work order status, worker assignments, and departmental metrics.",
        "Built reusable, responsive UI components using React Native enabling intuitive navigation across work orders, worker details, and SLA compliance metrics.",
        "Integrated structured data parsing logic to transform Excel input into clean, interactive frontend views with filtering, sorting, and dynamic data mapping.",
        "Engineered a scalable layout with card-based views and modular design patterns to support future additions like graphical visualizations and adaptive interfaces.",
        "Optimized the app for offline use by implementing local data caching and refresh functionality, anticipating future integration with live data and notification systems.",
      ],
    },
    {
      company: "Constient Global Solutions",
      role: "Front End Web Developer",
      period: "06/2023 - 12/2023",
      points: [
        "Worked on a cloud-native log monitoring system",
        "Making the website responsive to different devices",
        "Adding theme toggling to the website",
        "Unit testing",
      ],
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="glass-effect rounded-xl p-6 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <Building2 className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="text-xl font-medium">{exp.company}</h3>
                  <p className="text-muted-foreground">{exp.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{exp.period}</span>
              </div>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              {exp.points.map((point, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
